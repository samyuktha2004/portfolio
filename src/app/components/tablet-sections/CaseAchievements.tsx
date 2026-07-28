import React from 'react';
import { Linkedin, Award, Star, Calendar } from 'lucide-react';
import { achievements, personalInfo } from '../../data/portfolioData';
import { COLORS } from '@/constants/theme';

export function CaseAchievements() {
  return (
    <div className="space-y-6 tablet-section">
      {/* LinkedIn CTA */}
      <div className="flex justify-end pb-2">
        <a
          href={`https://${personalInfo.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full transition-all
            hover:scale-105 text-sm shadow-sm hover:shadow-md border-2"
          style={{
            backgroundColor: `${COLORS.BLUE_BUTTON}1A`,
            borderColor: COLORS.BLUE_TEXT,
            color: COLORS.BLUE_TEXT
          }}
        >
          <Linkedin className="w-4 h-4" />
          <span className="hidden sm:inline">See what I'm up to</span>
          <span className="sm:hidden">LinkedIn</span>
        </a>
      </div>
      
      {/* Achievement Cards */}
      <div className="grid grid-cols-1 gap-4">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="bg-[#FFF0F5] rounded-2xl p-4 sm:p-6 border-2 border-[#FFB6C1]/30 shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:border-[#FFB6C1] transition-all duration-200"
          >
            <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
              <div className="w-12 h-12 rounded-full bg-[#FFB6C1] flex items-center justify-center flex-shrink-0 transition-all duration-200">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 min-w-0 w-full">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-1">
                  <h4 className="text-[#E9518D] break-words">{achievement.title}</h4>
                  {achievement.date && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-[#FFB6C1]/20 text-[#E9518D] border border-[#FFB6C1]/40 rounded-full text-xs flex-shrink-0">
                      <Calendar className="w-3 h-3" />
                      {achievement.date}
                    </span>
                  )}
                </div>
                <p className="text-gray-700 mb-2 text-sm sm:text-base break-words">{achievement.description}</p>
                <div className="flex items-start gap-2 text-sm">
                  <Star className="w-4 h-4 text-[#B8860B] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 break-words">{achievement.impact}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Motivational Footer */}
      <div className="bg-[#FFF0F5] rounded-2xl p-4 sm:p-6 border-2 border-[#FFB6C1]/30 text-center">
        <p className="text-gray-700 text-sm sm:text-base break-words">
          ✨ Every achievement represents growth, learning, and passion for creating meaningful experiences ✨
        </p>
      </div>
    </div>
  );
}