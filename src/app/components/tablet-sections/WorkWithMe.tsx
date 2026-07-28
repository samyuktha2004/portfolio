import React from 'react';
import { Palette, Code, Sparkles, Lightbulb, Mail, Calendar, Clock, CheckCircle2, ArrowRight, Send, Loader2, AlertCircle, HelpCircle } from 'lucide-react';
import { StandardButton } from '../ui/StandardButton';
import { workWithMe } from '../../data/portfolioData';

const iconMap: Record<string, any> = {
  Palette,
  Code,
  Sparkles,
  Lightbulb
};

export function WorkWithMe() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '', // Anti-spam field
  });
  
  const [formState, setFormState] = React.useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check honeypot (spam protection)
    if (formData.honeypot) {
      return; // Bot detected, silently ignore
    }
    
    // If no API key configured, fall back to mailto immediately
    if (!import.meta.env.VITE_WEB3FORMS_KEY || import.meta.env.VITE_WEB3FORMS_KEY === 'YOUR_WEB3FORMS_ACCESS_KEY') {
      window.location.href = generateMailtoLink();
      return;
    }

    setFormState('submitting');

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        signal: controller.signal,
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
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
        setFormState('success');
        setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
        setTimeout(() => setFormState('idle'), 8000);
      } else {
        setFormState('error');
        setTimeout(() => setFormState('idle'), 5000);
      }
    } catch (error) {
      setFormState('error');
      setTimeout(() => setFormState('idle'), 5000);
    } finally {
      clearTimeout(timeoutId);
    }
  };

  // Generate pre-populated mailto link from form data
  const generateMailtoLink = () => {
    const subject = encodeURIComponent(formData.subject || 'Portfolio Inquiry');
    const body = encodeURIComponent(
      `Hi! My name is ${formData.name || '[Your Name]'}.\n\n` +
      `${formData.message || '[Your message here]'}\n\n` +
      `---\n` +
      `Reply to: ${formData.email || '[Your Email]'}`
    );
    return `mailto:${workWithMe.cta.email}?subject=${subject}&body=${body}`;
  };

  // Vivid dot color
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':   return '#4ade80';
      case 'limited':     return '#fbbf24';
      case 'unavailable': return '#f87171';
      default:            return '#94a3b8';
    }
  };

  // Soft pastel fill — mirrors the project tooltip bg style
  const getStatusBgColor = (status: string) => {
    switch (status) {
      case 'available':   return '#f0fdf4'; // green-50
      case 'limited':     return '#fffbeb'; // amber-50
      case 'unavailable': return '#fef2f2'; // red-50
      default:            return '#f8fafc'; // slate-50
    }
  };

  // Dark readable text — mirrors the project tooltip text-gray-700 idea but status-toned
  const getStatusTextColor = (status: string) => {
    switch (status) {
      case 'available':   return '#15803d'; // green-700
      case 'limited':     return '#b45309'; // amber-700
      case 'unavailable': return '#b91c1c'; // red-700
      default:            return '#475569'; // slate-600
    }
  };

  return (
    <div className="space-y-6 tablet-section">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-[#F7A8BC] to-[#F08699] rounded-3xl p-6 sm:p-8 text-center shadow-xl">
        <h3 className="text-white mb-2">{workWithMe.headline}</h3>
        <p className="text-white/80 text-sm sm:text-base mb-4">{workWithMe.subheadline}</p>
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full shadow-sm mb-4"
          style={{
            backgroundColor: getStatusBgColor(workWithMe.availability.status),
            borderColor: getStatusColor(workWithMe.availability.status),
            borderWidth: '2px',
            color: getStatusTextColor(workWithMe.availability.status),
          }}
        >
          <div 
            className="w-3 h-3 rounded-full animate-pulse" 
            style={{ backgroundColor: getStatusColor(workWithMe.availability.status) }}
          />
          <span className="text-sm sm:text-base">{workWithMe.availability.message}</span>
        </div>
        
        {/* Quick Email CTA - Now at top */}
        <StandardButton
          href={`mailto:${workWithMe.cta.email}`}
          icon={Mail}
          label={workWithMe.cta.primary}
          shortLabel="Send Email"
          variant="email"
        />
      </div>

      {/* Intro Section */}
      <div className="bg-[#FFF0F5] rounded-2xl p-4 sm:p-6 border-2 border-[#FFB6C1]/30 shadow-lg">
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          {workWithMe.intro}
        </p>
      </div>

      {/* Services Grid */}
      <div className="space-y-4">
        <h4 className="text-[#E9518D] text-center">Services I Offer</h4>
        
        {workWithMe.services.map((service, index) => {
          const Icon = iconMap[service.icon];
          
          return (
            <div
              key={index}
              className="bg-[#FFF0F5] rounded-2xl p-4 sm:p-6 border-2 border-[#FFB6C1]/30 shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:border-[#FFB6C1] transition-all duration-200"
            >
              {/* Service Header */}
              <div className="flex items-start gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-[#DDA0DD] flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h5 className="text-[#E9518D] mb-1">{service.service}</h5>
                  <p className="text-gray-700 text-sm">{service.description}</p>
                </div>
              </div>

              {/* Deliverables */}
              <div className="bg-white/50 rounded-xl p-3 sm:p-4 mb-3">
                <h6 className="text-[#E9518D] text-sm mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  What You'll Get:
                </h6>
                <ul className="space-y-1">
                  {service.deliverables.map((item, i) => (
                    <li key={i} className="text-xs sm:text-sm text-gray-700 flex items-start gap-2">
                      <span className="text-[#E9518D] mt-1 flex-shrink-0">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Meta Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-[#2B7FB5]" />
                  <span className="text-gray-700">
                    <strong className="text-[#E9518D]">Timeline:</strong> {service.timeline}
                  </span>
                </div>
                <div className="bg-[#87CEEB]/10 rounded-lg px-3 py-2">
                  <p className="text-xs text-gray-700">
                    <strong className="text-[#2B7FB5]">Perfect for:</strong> {service.idealFor}
                  </p>
                </div>
              </div>

              {/* Tools */}
              <div className="flex flex-wrap gap-2">
                {service.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="px-2 sm:px-3 py-1 bg-white/70 text-[#E9518D] rounded-full text-xs border border-[#FFB6C1]/30"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Pricing Section */}
      <div className="bg-[#FFF0F5] rounded-2xl p-4 sm:p-6 border-2 border-[#FFB6C1]/30 shadow-lg">
        <h4 className="text-[#E9518D] mb-3">Pricing & Investment</h4>
        <div className="space-y-2 text-sm sm:text-base">
          <p className="text-gray-700">
            <strong className="text-[#E9518D]">Model:</strong> {workWithMe.pricing.model}
          </p>
          <p className="text-gray-700">
            <strong className="text-[#E9518D]">Special Rates:</strong> {workWithMe.pricing.note}
          </p>
          <div className="bg-[#87CEEB]/10 rounded-lg p-3 mt-3">
            <p className="text-[#2B7FB5] flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <strong>{workWithMe.pricing.consultation}</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-[#FFF0F5] rounded-2xl p-4 sm:p-6 border-2 border-[#FFB6C1]/30 shadow-lg">
        <h4 className="text-[#E9518D] mb-4 text-center">How We'll Work Together</h4>
        <div className="space-y-3">
          {workWithMe.process.map((step, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#B298DC] flex items-center justify-center flex-shrink-0 text-white">
                {step.step}
              </div>
              <div className="flex-1">
                <h5 className="text-[#E9518D] text-sm sm:text-base mb-1">{step.title}</h5>
                <p className="text-xs sm:text-sm text-gray-700">{step.description}</p>
              </div>
              {index < workWithMe.process.length - 1 && (
                <ArrowRight className="w-4 h-4 text-[#E9518D]/50 mt-1 hidden sm:block" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Flexibility Section */}
      <div className="bg-[#FFF0F5] rounded-2xl p-4 sm:p-6 border-2 border-white/20 shadow-lg">
        <div className="flex items-center gap-2 mb-3">
          <HelpCircle className="w-5 h-5 text-[#7a5b8a]" />
          <h4 className="text-[#E9518D]">{workWithMe.flexibility.title}</h4>
        </div>
        <p className="text-[#E9518D]/90 text-sm sm:text-base mb-4">{workWithMe.flexibility.message}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
          {workWithMe.flexibility.options.map((option, i) => (
            <div key={i} className="flex items-start gap-2 bg-white/50 backdrop-blur-sm rounded-lg p-2 sm:p-3 text-[#E9518D] text-xs sm:text-sm">
              <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span>{option}</span>
            </div>
          ))}
        </div>
        <p className="text-[#E9518D]/90 text-sm text-center italic">{workWithMe.flexibility.cta}</p>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-[#B298DC] to-[#9B7EDE] rounded-2xl p-6 sm:p-8 text-center shadow-lg">
        <h4 className="text-white mb-3">Ready to Create Something Amazing?</h4>
        <p className="text-white mb-3 text-sm sm:text-base">{workWithMe.cta.message}</p>
        <p className="text-white mb-5 text-xs sm:text-sm italic">
          Let's bring your ideas to life with thoughtful design and clean code! ✨
        </p>
        
        {/* Quick Email CTA */}
        <div className="flex justify-center mb-6">
          <a
            href={`mailto:${workWithMe.cta.email}`}
            className="px-4 sm:px-6 py-3 rounded-full hover:scale-105 transition-all shadow-lg inline-flex items-center justify-center gap-2 text-sm sm:text-base font-medium min-h-[44px] border-2"
            style={{ backgroundColor: '#5a3d8a', color: 'white', borderColor: '#5a3d8a' }}
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            <span className="hidden sm:inline">{workWithMe.cta.primary}</span>
            <span className="sm:hidden">Send Email</span>
          </a>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-px bg-white/30"></div>
          <span className="text-white/70 text-sm">or fill out this form</span>
          <div className="flex-1 h-px bg-white/30"></div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
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
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-white mb-2 text-sm">Your Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-white/40 bg-white/95 text-gray-800 placeholder-gray-400 focus:border-white focus:outline-none transition-colors"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label className="block text-white mb-2 text-sm">Email Address</label>
              <input
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
            <label className="block text-white mb-2 text-sm">Subject</label>
            <input
              type="text"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2 border-white/40 bg-white/95 text-gray-800 placeholder-gray-400 focus:border-white focus:outline-none transition-colors"
              placeholder="What's on your mind?"
              required
            />
          </div>

          <div>
            <label className="block text-white mb-2 text-sm">Message</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className="w-full px-4 py-3 rounded-xl border-2 border-white/40 bg-white/95 text-gray-800 placeholder-gray-400 focus:border-white focus:outline-none transition-colors resize-none"
              placeholder="Tell me about your project or idea..."
              required
            />
          </div>

          <button
            type="submit"
            disabled={formState === 'submitting'}
            className="w-full py-3 sm:py-4 bg-[#5a3d8a] text-white rounded-xl hover:shadow-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-sm sm:text-base font-medium"
          >
            {formState === 'submitting' ? (
              <>
                <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                <span>Sending...</span>
              </>
            ) : formState === 'success' ? (
              <>
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Sent! ✨</span>
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
              <p className="font-medium">Thank you, I'll get back to you soon! Have a nice day! 💖</p>
            </div>
          )}
          
          {/* Error Message */}
          {formState === 'error' && (
            <div className="bg-white/90 backdrop-blur-sm border-2 border-[#FFB6C1] text-gray-800 p-4 rounded-xl space-y-3">
              <p className="font-medium flex items-center justify-center gap-2 text-[#E9518D]">
                <AlertCircle className="w-5 h-5" />
                Oops! The form couldn't be sent.
              </p>
              <p className="text-sm text-center text-gray-700">
                No worries! Click below to open your email with everything pre-filled:
              </p>
              <a
                href={generateMailtoLink()}
                className="w-full py-3 bg-[#2B7FB5] text-white rounded-xl hover:shadow-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2 text-sm sm:text-base font-medium"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                Open Email (Pre-filled) ✨
              </a>
              <p className="text-xs text-center text-gray-600">
                Your message is ready - just press send in your email app!
              </p>
            </div>
          )}
        </form>
      </div>

      {/* Fun Note */}
      <div className="bg-white/50 rounded-xl p-4 text-center border-2 border-[#FFB6C1]/20">
        <p className="text-sm text-gray-700">
          Looking forward to working with you and creating something beautiful together!✨
        </p>
      </div>
    </div>
  );
}