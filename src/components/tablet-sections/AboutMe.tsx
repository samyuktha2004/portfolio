import React from 'react';
import { Heart, Sparkles, Code, Palette, Lightbulb, Mail, Github, Briefcase } from 'lucide-react';
import { StandardButton } from '../ui/StandardButton';
import { FlippableAvatar } from '../ui/FlippableAvatar';
import { personalInfo, aboutMe } from '../../data/portfolioData';

const iconMap: Record<string, any> = {
  Heart,
  Sparkles,
  Code,
  Palette,
  Lightbulb
};

export function AboutMe() {
  return (
    <div className="space-y-6 tablet-section">
      {/* Hero Section with Character */}
      <div className="bg-[#FFB6C1] rounded-3xl p-6 sm:p-8 text-center shadow-xl">
        <div className="mb-6">
          <FlippableAvatar size="large" showHint />
        </div>
        <h3 className="text-white mb-2 break-words">{personalInfo.name}</h3>
        <p className="text-white/90 text-base sm:text-lg mb-4 break-words">
          {personalInfo.title}
        </p>
        <div className="flex justify-center gap-3 flex-wrap">
          {personalInfo.tags.map((tag, i) => {
            const Icon = iconMap[tag.icon];
            return (
              <span key={i} className="px-3 sm:px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs sm:text-sm flex items-center gap-1">
                <Icon className="w-4 h-4 flex-shrink-0" />
                <span className="break-words">{tag.text}</span>
              </span>
            );
          })}
        </div>
      </div>

      {/* About Story */}
      <div className="bg-[#FFF0F5] rounded-2xl p-4 sm:p-6 border-2 border-[#FFB6C1]/30 shadow-lg">
        <h4 className="text-[#fd6698] mb-4">My Story</h4>
        <div className="space-y-3 text-gray-700 text-sm sm:text-base">
          {aboutMe.story.map((paragraph, i) => (
            <p key={i} className="break-words">{paragraph}</p>
          ))}
        </div>
      </div>

      {/* What I Do */}
      <div className="bg-[#FFF0F5] rounded-2xl p-4 sm:p-6 border-2 border-[#FFB6C1]/30 shadow-lg">
        <h4 className="text-[#FFB6C1] mb-4">What I Love</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {aboutMe.interests.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={i}
                className="bg-white rounded-xl p-4 border-2 border-[#FFB6C1]/20 hover:border-[#FFB6C1] transition-all hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FFB6C1] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <h5 className="text-[#FFB6C1] break-words">{item.text}</h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Let's Connect */}
      <div className="bg-[#FFB6C1] rounded-2xl p-4 sm:p-6 text-center shadow-lg">
        <h4 className="text-white mb-3">Let's Connect!</h4>
        <p className="text-white/90 mb-4 text-sm sm:text-base break-words">
          I'm always excited to collaborate on new projects or just chat about design. Reach out anytime! 💌
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <StandardButton
            href={`mailto:${personalInfo.email}`}
            icon={Mail}
            label="Email Me"
            variant="email"
          />
          <StandardButton
            href={`https://${personalInfo.github}`}
            icon={Github}
            label="GitHub"
            variant="github"
            external
          />
        </div>
      </div>

      {/* Work With Me CTA - NEW! */}
      <div className="bg-gradient-to-br from-[#87CEEB] to-[#6BA5D6] rounded-2xl p-6 sm:p-8 text-center shadow-xl border-2 border-white/20">
        <div className="mb-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-3">
            <Briefcase className="w-8 h-8 text-white" />
          </div>
          <h4 className="text-white mb-2">{aboutMe.availability.title}</h4>
          <p className="text-white/90 text-sm sm:text-base max-w-md mx-auto">
            {aboutMe.availability.description}
          </p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-4 border border-white/20">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-white text-sm sm:text-base">{aboutMe.availability.statusIcon} {aboutMe.availability.status}</span>
          </div>
          <p className="text-white/80 text-xs sm:text-sm">{aboutMe.availability.startDate}</p>
        </div>
        <button
          onClick={() => {
            // This will be handled by the parent component's onNextCase
            const event = new CustomEvent('openWorkWithMe');
            window.dispatchEvent(event);
          }}
          className="px-6 py-3 bg-white text-[#87CEEB] rounded-full shadow-lg hover:scale-105 transition-all flex items-center gap-2 mx-auto group"
        >
          <Briefcase className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          <span>{aboutMe.availability.ctaText}</span>
        </button>
      </div>
    </div>
  );
}