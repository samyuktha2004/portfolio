import React, { useState } from 'react';
import { Mail, Linkedin, Github, Download, Award, Trophy } from 'lucide-react';
import { downloadResume } from '../../utils/downloadResume';
import { StandardButton } from '../ui/StandardButton';
import { FlippableAvatar } from '../ui/FlippableAvatar';
import { personalInfo } from '../../data/portfolioData';

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fd6698] to-[#FFB6C1] px-4 py-20">
      <div className="max-w-4xl w-full text-center">
        <div className="mb-8">
          {/* Award Banner - PROMINENT */}
          <div className="mb-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm px-4 sm:px-6 py-3 rounded-full shadow-lg border-2 border-[#FFD700]">
              <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-[#FFD700] animate-pulse" />
              <span className="text-[#fd6698] text-sm sm:text-base">
                🥇 <span className="hidden sm:inline">Infosys Global Hackathon Winner |</span> Top 5 HP Dreams Unlocked
              </span>
            </div>
          </div>
          
          <div className="mb-6">
            <FlippableAvatar size="medium" showHint />
          </div>
          <h1 className="text-white mb-4 px-4 text-2xl sm:text-3xl md:text-4xl">{personalInfo.name}</h1>
          <h2 className="text-white/90 mb-6 px-4 text-base sm:text-lg md:text-xl">{personalInfo.title}</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8 px-4">
            {personalInfo.summary}
          </p>
          <div className="flex flex-wrap justify-center gap-3 px-4">
            <StandardButton
              href={`mailto:${personalInfo.email}`}
              icon={Mail}
              label="Email Me"
              shortLabel="Email"
              variant="email"
            />
            <StandardButton
              href={`https://${personalInfo.linkedin}`}
              icon={Linkedin}
              label="LinkedIn"
              variant="linkedin"
              external
            />
            <StandardButton
              href={`https://${personalInfo.github}`}
              icon={Github}
              label="GitHub"
              variant="github"
              external
            />
            <StandardButton
              onClick={downloadResume}
              icon={Download}
              label="Download Resume"
              shortLabel="Resume"
              variant="download"
            />
          </div>
        </div>
      </div>
    </section>
  );
}