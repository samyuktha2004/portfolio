import React from 'react';
import { Trophy, Star, Award } from 'lucide-react';
import { achievements } from '../../data/portfolioData';

export function CaseAchievements() {
  return (
    <div className="space-y-6 tablet-section">
      {/* Achievement Cards */}
      <div className="grid grid-cols-1 gap-4">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="bg-[#FFF0F5] rounded-2xl p-4 sm:p-6 border-2 border-[#FFB6C1]/30 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.05] hover:-translate-y-1 hover:border-[#FFB6C1] cursor-pointer group"
          >
            <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
              <div className="w-12 h-12 rounded-full bg-[#FFB6C1] flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 min-w-0 w-full">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-1">
                  <h4 className="text-[#fd6698] break-words">{achievement.title}</h4>
                  <span className="text-xs text-gray-500 whitespace-nowrap flex-shrink-0">
                    {achievement.date}
                  </span>
                </div>
                <p className="text-gray-700 mb-2 text-sm sm:text-base break-words">{achievement.description}</p>
                <div className="flex items-start gap-2 text-sm">
                  <Star className="w-4 h-4 text-[#FFD700] flex-shrink-0 mt-0.5" />
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