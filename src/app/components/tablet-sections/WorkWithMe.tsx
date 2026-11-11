import React from 'react';
import { AlertCircle, ExternalLink, FileDown, Loader2, Mail, Send, Sparkles } from 'lucide-react';
import { StandardButton } from '../ui/StandardButton';
import { workWithMe } from '../../data/portfolioData';
import { useContactForm } from '../../hooks/useContactForm';
import { COLORS } from '../../constants/theme';
import { downloadResume } from '../../utils/downloadResume';

export function WorkWithMe() {
  const { formData, formState, updateField, handleSubmit, generateMailtoLink } = useContactForm();

  const statusColors = {
    backgroundColor: COLORS.STATUS_AVAILABLE_BG,
    borderColor: COLORS.STATUS_AVAILABLE,
    color: COLORS.STATUS_AVAILABLE_TEXT,
  };

  return (
    <div className="space-y-6 tablet-section">
      <div className="bg-gradient-to-br from-[#D4B8F4] to-[#B298DC] rounded-3xl p-6 sm:p-8 text-center shadow-xl">
        <h3 className="text-[#4B3268] mb-2">Interested in working together?</h3>
        <p className="text-[#4B3268] text-sm sm:text-base max-w-2xl mx-auto mb-4">
          I’m looking for Design Engineer roles where I can contribute across product thinking,
          interaction design, frontend implementation, and applied AI.
        </p>
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 shadow-sm mb-5"
          style={statusColors}
        >
          <span className="w-3 h-3 rounded-full bg-[#4ade80] animate-pulse" aria-hidden="true" />
          <span className="text-sm sm:text-base">{workWithMe.availability.message}</span>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <StandardButton
            href={`mailto:${workWithMe.cta.email}`}
            icon={Mail}
            label="Email Me"
            variant="email"
          />
          <StandardButton
            onClick={downloadResume}
            icon={FileDown}
            label="Download Resume"
            variant="download"
          />
        </div>
      </div>

      <div className="bg-[#FFF0F5] rounded-2xl p-4 sm:p-6 border-2 border-[#FFB6C1]/30 shadow-lg">
        <h4 className="text-[#E9518D] mb-4 text-center">Where I can contribute</h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            ['Product thinking', 'Turning ambiguous needs into focused user flows and product decisions.'],
            ['Design engineering', 'Designing accessible interfaces and carrying them into responsive production code.'],
            ['Applied AI', 'Prototyping useful AI interactions around real user contexts and constraints.'],
          ].map(([title, description]) => (
            <div key={title} className="bg-white/70 rounded-xl p-4 border border-[#FFB6C1]/30 text-left">
              <h5 className="text-[#E9518D] mb-1">{title}</h5>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#87CEEB]/15 rounded-2xl p-5 sm:p-6 border-2 border-[#87CEEB]/50 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex-1">
            <p className="text-xs font-medium uppercase tracking-wide text-[#2B7FB5] mb-1">Freelance studio</p>
            <h4 className="text-[#4B3268] mb-2">They Call This Design</h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              I also design and build practical websites for independent creatives and small businesses.
              Explore the studio for services, process, and client work.
            </p>
          </div>
          <div className="flex-shrink-0">
            <StandardButton
              href="https://theycallthisdesign.com"
              icon={ExternalLink}
              label="Explore Freelance Work"
              shortLabel="Visit Studio"
              variant="linkedin"
              external
            />
          </div>
        </div>
      </div>

      <div className="bg-[#D4B8F4]/35 rounded-2xl p-6 sm:p-8 border-2 border-[#B298DC]/50 shadow-lg">
        <div className="text-center mb-6">
          <h4 className="text-[#4B3268] mb-2">Start a conversation</h4>
          <p className="text-[#4B3268] text-sm sm:text-base">
            Tell me about the role, team, or idea you have in mind.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <input
            type="text"
            name="honeypot"
            value={formData.honeypot}
            onChange={updateField('honeypot')}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="wwm-name" className="block text-[#4B3268] mb-2 text-sm">Your name</label>
              <input
                id="wwm-name"
                type="text"
                value={formData.name}
                onChange={updateField('name')}
                className="w-full px-4 py-3 rounded-xl border-2 border-white/40 bg-white/95 text-gray-800 placeholder-gray-400 focus:border-[#7a5b8a] focus:outline-none transition-colors"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label htmlFor="wwm-email" className="block text-[#4B3268] mb-2 text-sm">Email address</label>
              <input
                id="wwm-email"
                type="email"
                value={formData.email}
                onChange={updateField('email')}
                className="w-full px-4 py-3 rounded-xl border-2 border-white/40 bg-white/95 text-gray-800 placeholder-gray-400 focus:border-[#7a5b8a] focus:outline-none transition-colors"
                placeholder="you@email.com"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="wwm-subject" className="block text-[#4B3268] mb-2 text-sm">Subject</label>
            <input
              id="wwm-subject"
              type="text"
              value={formData.subject}
              onChange={updateField('subject')}
              className="w-full px-4 py-3 rounded-xl border-2 border-white/40 bg-white/95 text-gray-800 placeholder-gray-400 focus:border-[#7a5b8a] focus:outline-none transition-colors"
              placeholder="What would you like to discuss?"
              required
            />
          </div>

          <div>
            <label htmlFor="wwm-message" className="block text-[#4B3268] mb-2 text-sm">Message</label>
            <textarea
              id="wwm-message"
              value={formData.message}
              onChange={updateField('message')}
              rows={4}
              className="w-full px-4 py-3 rounded-xl border-2 border-white/40 bg-white/95 text-gray-800 placeholder-gray-400 focus:border-[#7a5b8a] focus:outline-none transition-colors resize-none"
              placeholder="Tell me a little about the opportunity or idea."
              required
            />
          </div>

          <button
            type="submit"
            disabled={formState === 'submitting' || formState === 'rate_limited'}
            className="w-full min-h-[44px] py-3 bg-[#4B3268] text-white rounded-xl hover:shadow-xl transition-all hover:scale-[1.01] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-sm sm:text-base font-medium"
          >
            {formState === 'submitting' ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Sending...</span>
              </>
            ) : formState === 'success' ? (
              <>
                <Sparkles className="w-5 h-5" />
                <span>Message sent</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Send message</span>
              </>
            )}
          </button>

          {formState === 'success' && (
            <p className="bg-white/50 text-[#4B3268] p-4 rounded-xl text-center border border-white">
              Thank you. I’ll get back to you soon.
            </p>
          )}

          {formState === 'rate_limited' && (
            <p className="bg-white/90 border-2 border-[#FFD700]/60 text-[#b45309] p-4 rounded-xl text-center">
              Your message was sent recently. Please wait a minute before trying again.
            </p>
          )}

          {formState === 'error' && (
            <div className="bg-white/90 border-2 border-[#FFB6C1] p-4 rounded-xl space-y-3 text-center">
              <p className="font-medium text-[#E9518D] flex items-center justify-center gap-2">
                <AlertCircle className="w-5 h-5" />
                The form could not be sent.
              </p>
              <a
                href={generateMailtoLink(workWithMe.cta.email)}
                className="min-h-[44px] px-4 py-3 bg-[#2B7FB5] text-white rounded-xl flex items-center justify-center gap-2 font-medium"
              >
                <Mail className="w-5 h-5" />
                Open a pre-filled email
              </a>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
