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
  });
  
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      const success = Math.random() > 0.1; // 90% success rate for demo
      if (success) {
        setFormState('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setFormState('idle'), 5000);
      } else {
        setFormState('error');
        setTimeout(() => setFormState('idle'), 5000);
      }
    }, 2000);
  };

  return (
    <section className="py-20 px-4 bg-white" id="contact">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <MessageSquare className="w-8 h-8 text-[#fd6698]" />
          <h2 className="text-[#fd6698]">Let's Connect!</h2>
        </div>

        <div className="bg-gradient-to-br from-[#FFF0F5] to-white rounded-3xl p-4 sm:p-8 shadow-xl border-4 border-[#FFB6C1]/20">
          <p className="text-gray-700 mb-8 text-center">
            Have a project in mind? Let's collaborate and create something amazing together! 💌
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#FFB6C1]/30 focus:border-[#FFB6C1] outline-none transition-colors"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#FFB6C1]/30 focus:border-[#FFB6C1] outline-none transition-colors"
                  placeholder="you@email.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Subject</label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-[#FFB6C1]/30 focus:border-[#FFB6C1] outline-none transition-colors"
                placeholder="What's on your mind?"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                className="w-full px-4 py-3 rounded-xl border-2 border-[#FFB6C1]/30 focus:border-[#FFB6C1] outline-none transition-colors resize-none"
                placeholder="Tell me about your project or idea..."
                required
              />
            </div>

            <button
              type="submit"
              disabled={formState === 'submitting'}
              className="w-full py-3 sm:py-4 bg-[#FFB6C1] text-white rounded-xl hover:shadow-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-sm sm:text-base font-medium min-h-[44px]"
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
                  <span className="hidden sm:inline">Message delivered successfully!</span>
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
              <div className="bg-gradient-to-r from-[#87CEEB] to-[#FFB6C1] text-white p-4 rounded-xl text-center animate-pulse">
                <p className="font-semibold">Message sent successfully! ✨💌</p>
                <p className="text-sm mt-1">Thank you! I'll get back to you soon!</p>
              </div>
            )}
            
            {/* Error Message */}
            {formState === 'error' && (
              <div className="bg-red-100 border-2 border-red-300 text-red-700 p-4 rounded-xl text-center">
                <p className="font-semibold">Oops! Something went wrong 😔</p>
                <p className="text-sm mt-1">Please check your connection and try again!</p>
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