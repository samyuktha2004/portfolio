import React, { useState } from 'react';
import { MessageSquare, Send, Loader2, AlertCircle, Sparkles, Linkedin, Github, Mail, Download } from 'lucide-react';
import { downloadResume } from '../../utils/downloadResume';
import { IconButton, StandardButton } from '../ui/StandardButton';
import { personalInfo } from '../../data/portfolioData';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '',
  });

  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check honeypot (spam protection)
    if (formData.honeypot) {
      return;
    }

    setFormState('submitting');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY',
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: 'Portfolio Contact Form',
          replyto: formData.email,
        })
      });

      const result = await response.json();

      if (result.success) {
        setFormState('success');
        setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
        setTimeout(() => setFormState('idle'), 8000);
      } else {
        setFormState('error');
        setTimeout(() => setFormState('idle'), 5000);
      }
    } catch {
      setFormState('error');
      setTimeout(() => setFormState('idle'), 5000);
    }
  };

  return (
    <section className="py-20 px-4 bg-white" id="contact" aria-labelledby="contact-heading">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <MessageSquare className="w-8 h-8 text-[#E9518D]" aria-hidden="true" />
          <h2 id="contact-heading" className="text-[#E9518D]">Let's Connect!</h2>
        </div>

        <div className="bg-gradient-to-br from-[#B298DC] to-[#9B7EDE] rounded-3xl p-4 sm:p-8 shadow-xl border-4 border-white/40">
          <p className="text-white mb-8 text-center">
            Have a project in mind? Let's collaborate and create something amazing together! <span aria-hidden="true">💌</span>
          </p>

          {/* Quick Email CTA */}
          <div className="flex justify-center mb-6">
            <StandardButton
              href={`mailto:${personalInfo.email}`}
              icon={Mail}
              label="Email Me"
              shortLabel="Email Me"
              variant="email"
            />
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-white/30"></div>
            <span className="text-white/90 text-sm">or fill out this form</span>
            <div className="flex-1 h-px bg-white/30"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Honeypot field — hidden from users, catches bots */}
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="contact-name" className="block text-white mb-2">Your Name</label>
                <input
                  id="contact-name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-white/40 bg-white/95 text-gray-800 placeholder-gray-400 focus:border-white focus:outline-none transition-colors"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-white mb-2">Email Address</label>
                <input
                  id="contact-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-white/40 bg-white/95 text-gray-800 placeholder-gray-400 focus:border-white focus:outline-none transition-colors"
                  placeholder="you@email.com"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-subject" className="block text-white mb-2">Subject</label>
              <input
                id="contact-subject"
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-white/40 bg-white/95 text-gray-800 placeholder-gray-400 focus:border-white focus:outline-none transition-colors"
                placeholder="What's on your mind?"
                required
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-white mb-2">Message</label>
              <textarea
                id="contact-message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                className="w-full px-4 py-3 rounded-xl border-2 border-white/40 bg-white/95 text-gray-800 placeholder-gray-400 focus:border-white focus:outline-none transition-colors resize-none"
                placeholder="Tell me about your project or idea..."
                required
              />
            </div>

            <button
              type="submit"
              disabled={formState === 'submitting'}
              className="w-full py-3 sm:py-4 bg-[#E9518D] text-white rounded-xl hover:shadow-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-sm sm:text-base font-medium min-h-[44px]"
            >
              {formState === 'submitting' ? (
                <>
                  <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" aria-hidden="true" />
                  <span className="hidden sm:inline">Sending your message...</span>
                  <span className="sm:hidden">Sending...</span>
                </>
              ) : formState === 'success' ? (
                <>
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                  <span className="hidden sm:inline">Message sent! <span aria-hidden="true">✨</span></span>
                  <span className="sm:hidden">Sent! <span aria-hidden="true">✨</span></span>
                </>
              ) : formState === 'error' ? (
                <>
                  <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                  Oops! Please try again
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                  Send Message
                </>
              )}
            </button>

            {/* Live regions stay in the DOM always so screen readers catch the first announcement */}
            <div role="status" aria-live="polite" aria-atomic="true" className={formState === 'success' ? 'bg-white/20 backdrop-blur-sm text-white p-4 rounded-xl text-center border-2 border-white/30' : 'sr-only'}>
              {formState === 'success' && (
                <p className="font-semibold">Thank you, I'll get back to you soon! Have a nice day! <span aria-hidden="true">💖</span></p>
              )}
            </div>

            <div role="alert" aria-live="assertive" aria-atomic="true" className={formState === 'error' ? 'bg-white/90 border-2 border-white text-[#E9518D] p-4 rounded-xl text-center' : 'sr-only'}>
              {formState === 'error' && (
                <>
                  <p className="font-semibold">Oops! Something went wrong</p>
                  <p className="text-sm mt-1">Please check your connection and try again, or use the email button above!</p>
                </>
              )}
            </div>
          </form>
        </div>

        {/* Social Links */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Find me on:</p>
          <div className="flex justify-center gap-3 sm:gap-4">
            <IconButton
              href={`https://${personalInfo.linkedin}`}
              icon={Linkedin}
              label="LinkedIn"
              variant="linkedin"
              external
            />
            <IconButton
              href={`https://${personalInfo.github}`}
              icon={Github}
              label="GitHub"
              variant="github"
              external
            />
            <IconButton
              href={`mailto:${personalInfo.email}`}
              icon={Mail}
              label="Email"
              variant="email"
            />
            <IconButton
              onClick={downloadResume}
              icon={Download}
              label="Download Resume"
              variant="download"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
