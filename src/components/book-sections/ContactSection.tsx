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
    honeypot: '', // Anti-spam field
  });
  
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check honeypot (spam protection)
    if (formData.honeypot) {
      return; // Bot detected, silently ignore
    }
    
    setFormState('submitting');
    
    try {
      // Send to Web3Forms (free form backend service)
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // Replace with actual key from https://web3forms.com
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
        // Reset to idle after 8 seconds
        setTimeout(() => setFormState('idle'), 8000);
      } else {
        setFormState('error');
        setTimeout(() => setFormState('idle'), 5000);
      }
    } catch (error) {
      setFormState('error');
      setTimeout(() => setFormState('idle'), 5000);
    }
  };

  return (
    <section className="py-20 px-4 bg-white" id="contact">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <MessageSquare className="w-8 h-8 text-[#fd6698]" />
          <h2 className="text-[#fd6698]">Let's Connect!</h2>
        </div>

        <div className="bg-gradient-to-br from-[#FFB6C1] to-[#FF95A8] rounded-3xl p-4 sm:p-8 shadow-xl border-4 border-white/40">
          <p className="text-white mb-8 text-center">
            Have a project in mind? Let's collaborate and create something amazing together! 💌
          </p>

          {/* Quick Email CTA - Added */}
          <div className="flex justify-center mb-6">
            <StandardButton
              href={`mailto:${personalInfo.email}`}
              icon={Mail}
              label="📧 Email Me"
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
            {/* Honeypot field - hidden from users, catches bots */}
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white mb-2">Your Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-white/30 bg-white/10 text-white placeholder-white/50 focus:border-white focus:bg-white/20 outline-none transition-colors"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label className="block text-white mb-2">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-white/30 bg-white/10 text-white placeholder-white/50 focus:border-white focus:bg-white/20 outline-none transition-colors"
                  placeholder="you@email.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-white mb-2">Subject</label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-white/30 bg-white/10 text-white placeholder-white/50 focus:border-white focus:bg-white/20 outline-none transition-colors"
                placeholder="What's on your mind?"
                required
              />
            </div>

            <div>
              <label className="block text-white mb-2">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                className="w-full px-4 py-3 rounded-xl border-2 border-white/30 bg-white/10 text-white placeholder-white/50 focus:border-white focus:bg-white/20 outline-none transition-colors resize-none"
                placeholder="Tell me about your project or idea..."
                required
              />
            </div>

            <button
              type="submit"
              disabled={formState === 'submitting'}
              className="w-full py-3 sm:py-4 bg-white text-[#FFB6C1] rounded-xl hover:shadow-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-sm sm:text-base font-medium min-h-[44px]"
            >
              {formState === 'submitting' ? (
                <>
                  <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                  <span className="hidden sm:inline">Sending your message...</span>
                  <span className="sm:hidden">Sending...</span>
                </>
              ) : formState === 'success' ? (
                <>
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="hidden sm:inline">Message sent! ✨</span>
                  <span className="sm:hidden">Sent! ✨</span>
                </>
              ) : formState === 'error' ? (
                <>
                  <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  Oops! Please try again
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  Send Message
                </>
              )}
            </button>
            
            {/* Success Message */}
            {formState === 'success' && (
              <div className="bg-white/20 backdrop-blur-sm text-white p-4 rounded-xl text-center border-2 border-white/30">
                <p className="font-semibold">Thank you, I'll get back to you soon! Have a nice day! 💖</p>
              </div>
            )}
            
            {/* Error Message */}
            {formState === 'error' && (
              <div className="bg-white/90 border-2 border-white text-[#fd6698] p-4 rounded-xl text-center">
                <p className="font-semibold">Oops! Something went wrong 😔</p>
                <p className="text-sm mt-1">Please check your connection and try again, or use the email button above!</p>
              </div>
            )}
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