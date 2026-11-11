import { useState } from 'react';

export type FormState = 'idle' | 'submitting' | 'success' | 'error' | 'rate_limited';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot: string;
}

const EMPTY_FORM: FormData = { name: '', email: '', subject: '', message: '', honeypot: '' };

const WEB3FORMS_KEY = '82257d48-3e6d-46c1-a199-49c1b2ede60f';
const TIMEOUT_MS = 10_000;
const SUCCESS_RESET_MS = 8_000;
const ERROR_RESET_MS = 5_000;
const RATE_LIMIT_MS = 60_000; // 1 minute between submissions
const RATE_LIMIT_KEY = 'portfolio_last_submission';

function isRateLimited(): boolean {
  try {
    const last = localStorage.getItem(RATE_LIMIT_KEY);
    if (!last) return false;
    return Date.now() - parseInt(last, 10) < RATE_LIMIT_MS;
  } catch {
    return false;
  }
}

function recordSubmission() {
  try {
    localStorage.setItem(RATE_LIMIT_KEY, String(Date.now()));
  } catch {
    // localStorage unavailable — skip silently
  }
}

export function useContactForm() {
  const [formData, setFormData] = useState<FormData>(EMPTY_FORM);
  const [formState, setFormState] = useState<FormState>('idle');

  const updateField = (field: keyof FormData) => (
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFormData(prev => ({ ...prev, [field]: e.target.value }))
  );

  const generateMailtoLink = (recipientEmail: string) => {
    const subject = encodeURIComponent(formData.subject || 'Portfolio Inquiry');
    const body = encodeURIComponent(
      `Hi! My name is ${formData.name || '[Your Name]'}.\n\n` +
      `${formData.message || '[Your message here]'}\n\n` +
      `---\nReply to: ${formData.email || '[Your Email]'}`
    );
    return `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) return;

    if (isRateLimited()) {
      setFormState('rate_limited');
      setTimeout(() => setFormState('idle'), ERROR_RESET_MS);
      return;
    }

    setFormState('submitting');

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: 'Portfolio Contact Form',
          replyto: formData.email,
        }),
      });

      const result = await response.json();

      if (result.success) {
        recordSubmission();
        setFormState('success');
        setFormData(EMPTY_FORM);
        setTimeout(() => setFormState('idle'), SUCCESS_RESET_MS);
      } else {
        setFormState('error');
        setTimeout(() => setFormState('idle'), ERROR_RESET_MS);
      }
    } catch {
      setFormState('error');
      setTimeout(() => setFormState('idle'), ERROR_RESET_MS);
    } finally {
      clearTimeout(timeoutId);
    }
  };

  return { formData, formState, updateField, handleSubmit, generateMailtoLink };
}
