import React from 'react';
import { Palette, Code, Sparkles, Lightbulb, Mail, Calendar, Clock, CheckCircle2, ArrowRight, Send, Loader2, AlertCircle } from 'lucide-react';
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return '#4ade80'; // Green
      case 'limited': return '#fbbf24'; // Yellow
      case 'unavailable': return '#f87171'; // Red
      default: return '#94a3b8'; // Gray
    }
  };

  return (
    <div className="space-y-6 tablet-section">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-[#FFB6C1] to-[#FF95A8] rounded-3xl p-6 sm:p-8 text-center shadow-xl">
        <h3 className="text-white mb-3">{workWithMe.headline}</h3>
        <div 
          className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white mb-4"
          style={{ borderColor: getStatusColor(workWithMe.availability.status), borderWidth: '2px' }}
        >
          <div 
            className="w-3 h-3 rounded-full animate-pulse" 
            style={{ backgroundColor: getStatusColor(workWithMe.availability.status) }}
          />
          <span className="text-sm sm:text-base">{workWithMe.availability.message}</span>
        </div>
        <p className="text-white/90 text-sm sm:text-base mb-5">
          Ready to collaborate starting {workWithMe.availability.startDate}
        </p>
        
        {/* Quick Email CTA - Now at top */}
        <StandardButton
          href={`mailto:${workWithMe.cta.email}`}
          icon={Mail}
          label={workWithMe.cta.primary}
          shortLabel="Send Email"
          variant="email"
        />
      </div>

      {/* Services Grid */}
      <div className="space-y-4">
        <h4 className="text-[#fd6698] text-center">Services I Offer</h4>
        
        {workWithMe.services.map((service, index) => {
          const Icon = iconMap[service.icon];
          
          return (
            <div
              key={index}
              className="bg-[#FFF0F5] rounded-2xl p-4 sm:p-6 border-2 border-[#FFB6C1]/30 shadow-lg hover:shadow-xl transition-all hover:border-[#FFB6C1]"
            >
              {/* Service Header */}
              <div className="flex items-start gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-[#FFB6C1] flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h5 className="text-[#fd6698] mb-1">{service.service}</h5>
                  <p className="text-gray-700 text-sm">{service.description}</p>
                </div>
              </div>

              {/* Deliverables */}
              <div className="bg-white/50 rounded-xl p-3 sm:p-4 mb-3">
                <h6 className="text-[#FFB6C1] text-sm mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  What You'll Get:
                </h6>
                <ul className="space-y-1">
                  {service.deliverables.map((item, i) => (
                    <li key={i} className="text-xs sm:text-sm text-gray-700 flex items-start gap-2">
                      <span className="text-[#FFB6C1] mt-1 flex-shrink-0">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Meta Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-[#87CEEB]" />
                  <span className="text-gray-700">
                    <strong className="text-[#fd6698]">Timeline:</strong> {service.timeline}
                  </span>
                </div>
                <div className="bg-[#87CEEB]/10 rounded-lg px-3 py-2">
                  <p className="text-xs text-gray-700">
                    <strong className="text-[#87CEEB]">Perfect for:</strong> {service.idealFor}
                  </p>
                </div>
              </div>

              {/* Tools */}
              <div className="flex flex-wrap gap-2">
                {service.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="px-2 sm:px-3 py-1 bg-white/70 text-[#fd6698] rounded-full text-xs border border-[#FFB6C1]/30"
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
        <h4 className="text-[#fd6698] mb-3">Pricing & Investment</h4>
        <div className="space-y-2 text-sm sm:text-base">
          <p className="text-gray-700">
            <strong className="text-[#FFB6C1]">Model:</strong> {workWithMe.pricing.model}
          </p>
          <p className="text-gray-700">
            <strong className="text-[#FFB6C1]">Special Rates:</strong> {workWithMe.pricing.note}
          </p>
          <div className="bg-[#87CEEB]/10 rounded-lg p-3 mt-3">
            <p className="text-[#87CEEB] flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <strong>{workWithMe.pricing.consultation}</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-[#FFF0F5] rounded-2xl p-4 sm:p-6 border-2 border-[#FFB6C1]/30 shadow-lg">
        <h4 className="text-[#fd6698] mb-4 text-center">How We'll Work Together</h4>
        <div className="space-y-3">
          {workWithMe.process.map((step, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#FFB6C1] flex items-center justify-center flex-shrink-0 text-white">
                {step.step}
              </div>
              <div className="flex-1">
                <h5 className="text-[#fd6698] text-sm sm:text-base mb-1">{step.title}</h5>
                <p className="text-xs sm:text-sm text-gray-700">{step.description}</p>
              </div>
              {index < workWithMe.process.length - 1 && (
                <ArrowRight className="w-4 h-4 text-[#FFB6C1]/50 mt-1 hidden sm:block" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-[#87CEEB] to-[#6BA5D6] rounded-2xl p-6 sm:p-8 text-center shadow-lg">
        <h4 className="text-white mb-3">Ready to Create Something Amazing?</h4>
        <p className="text-white/90 mb-5 text-sm sm:text-base">
          Let's bring your ideas to life with thoughtful design and clean code! ✨
        </p>
        
        {/* Quick Email CTA */}
        <div className="flex justify-center mb-6">
          <StandardButton
            href={`mailto:${workWithMe.cta.email}`}
            icon={Mail}
            label={workWithMe.cta.primary}
            shortLabel="Send Email"
            variant="email"
          />
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
                className="w-full px-4 py-3 rounded-xl border-2 border-white/30 bg-white/10 text-white placeholder-white/50 focus:border-white focus:bg-white/20 outline-none transition-colors"
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
                className="w-full px-4 py-3 rounded-xl border-2 border-white/30 bg-white/10 text-white placeholder-white/50 focus:border-white focus:bg-white/20 outline-none transition-colors"
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
              className="w-full px-4 py-3 rounded-xl border-2 border-white/30 bg-white/10 text-white placeholder-white/50 focus:border-white focus:bg-white/20 outline-none transition-colors"
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
              className="w-full px-4 py-3 rounded-xl border-2 border-white/30 bg-white/10 text-white placeholder-white/50 focus:border-white focus:bg-white/20 outline-none transition-colors resize-none"
              placeholder="Tell me about your project or idea..."
              required
            />
          </div>

          <button
            type="submit"
            disabled={formState === 'submitting'}
            className="w-full py-3 sm:py-4 bg-white text-[#87CEEB] rounded-xl hover:shadow-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-sm sm:text-base font-medium"
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
            <div className="bg-red-100 border-2 border-red-300 text-red-700 p-4 rounded-xl text-center">
              <p className="font-medium flex items-center justify-center gap-2">
                <AlertCircle className="w-4 h-4" />
                Oops! Something went wrong.
              </p>
              <p className="text-sm mt-1">Please try the email button above or check your connection.</p>
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