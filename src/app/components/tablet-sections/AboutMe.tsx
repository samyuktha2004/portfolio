import React from 'react';
import { Heart, Sparkles, Code, Palette, Lightbulb, Mail, Github, Briefcase, Trophy, Linkedin, Download, Monitor, Brush } from 'lucide-react';
import { StandardButton } from '../ui/StandardButton';
import { FlippableAvatar } from '../ui/FlippableAvatar';
import { personalInfo, aboutMe } from '../../data/portfolioData';
import { downloadResume } from '../../utils/downloadResume';

const iconMap: Record<string, React.ElementType> = {
  Heart,
  Sparkles,
  Code,
  Palette,
  Lightbulb,
  Monitor,
  Brush,
};

export function AboutMe() {
  return (
    <div className="space-y-6 tablet-section">
      {/* Hero Section with Character */}
      <div className="bg-gradient-to-br from-[#D4B8F4] to-[#B298DC] rounded-3xl p-6 sm:p-8 text-center shadow-xl">
        <div className="mb-6">
          <FlippableAvatar size="large" showHint />
        </div>
        <h3 className="text-[#4B3268] mb-2 break-words">{personalInfo.name}</h3>
        <p className="text-[#4B3268] text-base sm:text-lg mb-4 break-words">
          {personalInfo.title}
        </p>
        <div className="flex justify-center gap-3 flex-wrap">
          {personalInfo.tags.map((tag, i) => {
            const Icon = iconMap[tag.icon] ?? Sparkles;
            return (
              <span key={i} className="px-3 sm:px-4 py-2 bg-white/70 backdrop-blur-sm text-[#4B3268] rounded-full text-xs sm:text-sm flex items-center gap-1 border border-[#B298DC]">
                <Icon className="w-4 h-4 flex-shrink-0" />
                <span className="break-words">{tag.text}</span>
              </span>
            );
          })}
        </div>
      </div>

      {/* Quick Action Buttons */}
      <div className="flex justify-center gap-3 flex-wrap">
        <StandardButton
          href={`https://${personalInfo.linkedin}`}
          icon={Linkedin}
          label="LinkedIn"
          variant="linkedin"
          external
        />
        <StandardButton
          onClick={downloadResume}
          icon={Download}
          label="Resume"
          shortLabel="Resume"
          variant="download"
        />
      </div>

      {/* About Story */}
      <div className="bg-[#FFF0F5] rounded-2xl p-4 sm:p-6 border-2 border-[#FFB6C1]/30 shadow-lg">
        <h4 className="text-[#E9518D] mb-4">My Story</h4>
        <div className="space-y-3 text-gray-700 text-sm sm:text-base">
          {aboutMe.story.map((paragraph, i) => (
            <p key={i} className="break-words">{paragraph}</p>
          ))}
        </div>
      </div>

      {/* Competition Highlights */}
      <div className="bg-[#FFF0F5] rounded-2xl p-4 sm:p-6 border-2 border-[#FFB6C1]/30 shadow-lg">
        <h4 className="text-[#E9518D] mb-4">🏆 Competition Highlights</h4>
        <div className="space-y-3 text-gray-700 text-sm sm:text-base">
          {aboutMe.competitionHighlights.map((highlight, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-[#E9518D] flex-shrink-0 mt-1">•</span>
              <p className="break-words">{highlight}</p>
            </div>
          ))}
        </div>
      </div>

       {/* What I build with */}
      <div className="bg-[#FFF0F5] rounded-2xl p-4 sm:p-6 border-2 border-[#FFB6C1]/20 shadow-lg">
        <h4 className="text-[#E9518D] mb-3">⚡ What I Build With</h4>
        <div className="flex flex-wrap gap-2 mb-3">
          {aboutMe.tldr.role.split(' · ').map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1.5 bg-[#FFB6C1]/20 text-[#E9518D] rounded-full text-xs sm:text-sm border border-[#FFB6C1]"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="space-y-2">
          {aboutMe.tldr.highlights.map((highlight, i) => (
            <div key={i} className="flex items-start gap-2 text-gray-700 text-xs sm:text-sm">
              <span className="text-[#E9518D] flex-shrink-0 mt-1">•</span>
              <p className="break-words">{highlight}</p>
            </div>
          ))}
        </div>
      </div>

      {/* What I Love */}
      <div className="bg-[#FFF0F5] rounded-2xl p-4 sm:p-6 border-2 border-[#FFB6C1]/30 shadow-lg">
        <h4 className="text-[#E9518D] mb-1">What I Love</h4>
        <p className="text-gray-500 text-xs sm:text-sm mb-4">A mix of design craft and technical exploration</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {aboutMe.interests.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Sparkles;
            return (
              <div
                key={i}
                className="bg-white rounded-xl p-4 border-2 border-[#FFB6C1]/20 hover:border-[#FFB6C1] transition-all hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#D4B8F4' }}
                  >
                    <Icon className="w-5 h-5 text-[#4B3268]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h5 className="text-[#E9518D] break-words mb-1">{item.text}</h5>
                    {item.description && (
                      <p className="text-gray-500 text-xs leading-relaxed">{item.description}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Let's Connect */}
      <div className="bg-[#D4B8F4]/35 rounded-2xl p-4 sm:p-6 text-center border-2 border-[#B298DC]/50 shadow-lg">
        <h4 className="text-[#4B3268] mb-3">Let's Connect!</h4>
        <p className="text-[#4B3268] mb-4 text-sm sm:text-base break-words">
          I'm always excited to collaborate on new projects or just chat about tech and design. Reach out anytime! 💌
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
          <StandardButton
            onClick={() => {
              const event = new CustomEvent('openWorkWithMe');
              window.dispatchEvent(event);
            }}
            icon={Briefcase}
            label="Work With Me"
            variant="primary"
          />
        </div>
      </div>
    </div>
  );
}
