import React from 'react';
import { Briefcase, GraduationCap, Award, Users, Calendar, Zap, MapPin } from 'lucide-react';
import { tldr } from '../../data/portfolioData';

export function TldrSection() {
  return (
    <div className="bg-gradient-to-br from-[#FFB6C1] to-[#FF95A8] py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <h2 className="text-white mb-2 text-2xl sm:text-3xl">📋 Quick Summary</h2>
          <p className="text-white/90 text-sm sm:text-base">
            Everything you need to know about me in 30 seconds ⚡
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8">
          {/* Role */}
          <div className="text-center mb-6 pb-6 border-b-2 border-[#FFB6C1]/30">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FFB6C1] to-[#FF95A8] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-3">
              <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-base sm:text-lg">{tldr.role}</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-700 text-sm sm:text-base">
              <GraduationCap className="w-5 h-5 text-[#87CEEB]" />
              <span>{tldr.education}</span>
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
            {/* Achievements */}
            <div className="bg-[#FFF0F5] rounded-2xl p-4 sm:p-5 border-2 border-[#FFB6C1]/30">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-[#FFB6C1]" />
                <h3 className="text-[#fd6698] text-base sm:text-lg">Top Achievements</h3>
              </div>
              <ul className="space-y-2">
                {tldr.achievements.map((achievement, i) => (
                  <li key={i} className="text-gray-700 text-sm sm:text-base flex items-start gap-2">
                    <span className="text-[#FFB6C1] mt-1 flex-shrink-0">✦</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Leadership */}
            <div className="bg-[#FFF0F5] rounded-2xl p-4 sm:p-5 border-2 border-[#87CEEB]/30">
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-5 h-5 text-[#87CEEB]" />
                <h3 className="text-[#87CEEB] text-base sm:text-lg">Leadership Roles</h3>
              </div>
              <ul className="space-y-2">
                {tldr.leadership.map((role, i) => (
                  <li key={i} className="text-gray-700 text-sm sm:text-base flex items-start gap-2">
                    <span className="text-[#87CEEB] mt-1 flex-shrink-0">✦</span>
                    <span>{role}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6">
            {/* Seeking */}
            <div className="bg-gradient-to-br from-[#87CEEB] to-[#6BA5D6] rounded-xl p-4 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                <p className="text-white text-xs sm:text-sm">Seeking</p>
              </div>
              <p className="text-white text-sm sm:text-base">{tldr.seeking}</p>
            </div>

            {/* Available */}
            <div className="bg-gradient-to-br from-[#4ade80] to-[#22c55e] rounded-xl p-4 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                <p className="text-white text-xs sm:text-sm">Available</p>
              </div>
              <p className="text-white text-sm sm:text-base">{tldr.available}</p>
            </div>

            {/* Location */}
            <div className="bg-gradient-to-br from-[#DDA0DD] to-[#BA8BBB] rounded-xl p-4 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                <p className="text-white text-xs sm:text-sm">Location</p>
              </div>
              <p className="text-white text-sm sm:text-base">{tldr.location}</p>
            </div>
          </div>

          {/* Superpower */}
          <div className="bg-gradient-to-r from-[#FFB6C1] to-[#FF95A8] rounded-2xl p-4 sm:p-5 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white animate-pulse" />
              <h3 className="text-white text-base sm:text-lg">My Superpower</h3>
            </div>
            <p className="text-white text-sm sm:text-base">{tldr.superpower}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
