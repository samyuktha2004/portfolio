import React from 'react';
import { Briefcase, GraduationCap, Award, Users, Calendar, Zap, MapPin } from 'lucide-react';
import { tldr } from '../../data/portfolioData';

export function TldrSection() {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <h2 className="text-[#E9518D] mb-2 text-2xl sm:text-3xl">📋 Quick Summary</h2>
          <p className="text-[#E9518D]/90 text-sm sm:text-base">
            Everything you need to know about me!
          </p>
        </div>

        <div className="bg-[#FFB6C1]/20 rounded-3xl shadow-2xl p-6 sm:p-8">
          {/* Role */}
          <div className="text-center mb-6 pb-6 border-b-2 border-[#FFB6C1]/30">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E9518D] to-[#d43878] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-3">
              <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-base sm:text-lg">{tldr.role}</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-700 text-sm sm:text-base">
              <GraduationCap className="w-5 h-5 text-[#2B7FB5]" />
              <span>{tldr.education}</span>
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
            {/* Achievements */}
            <div className="bg-[#FFF3CC] rounded-2xl p-4 sm:p-5 border-2 border-[#F0C040]/60">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-[#9B6B00]" />
                <h3 className="text-[#9B6B00] text-base sm:text-lg">Top Achievements</h3>
              </div>
              <ul className="space-y-2">
                {tldr.achievements.map((achievement, i) => (
                  <li key={i} className="text-[#7a5000] text-sm sm:text-base flex items-start gap-2">
                    <span className="mt-1 flex-shrink-0">✦</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Leadership */}
            <div className="bg-[#FFE4D4] rounded-2xl p-4 sm:p-5 border-2 border-[#F0A080]/60">
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-5 h-5 text-[#A03828]" />
                <h3 className="text-[#A03828] text-base sm:text-lg">Leadership Roles</h3>
              </div>
              <ul className="space-y-2">
                {tldr.leadership.map((role, i) => (
                  <li key={i} className="text-gray-700 text-sm sm:text-base flex items-start gap-2">
                    <span className="mt-1 flex-shrink-0">✦</span>
                    <span className="text-[#803020]">{role}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6">
            {/* Seeking */}
            <div className="bg-[#C8E6F5] border-2 border-[#87CEEB] rounded-xl p-4 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-[#2B7FB5]" />
                <p className="text-[#2B7FB5] text-xs sm:text-sm font-medium">Seeking</p>
              </div>
              <p className="text-[#1a5a80] text-sm sm:text-base">{tldr.seeking}</p>
            </div>

            {/* Available */}
            <div className="bg-[#C8F0D8] border-2 border-[#86efac] rounded-xl p-4 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#2D8A50]" />
                <p className="text-[#2D8A50] text-xs sm:text-sm font-medium">Available</p>
              </div>
              <p className="text-[#1a5c35] text-sm sm:text-base">Looking for Full Time Opportunities</p>
            </div>

            {/* Location */}
            <div className="bg-[#EAD9F7] border-2 border-[#C8A8E9] rounded-xl p-4 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#7B5CB8]" />
                <p className="text-[#7B5CB8] text-xs sm:text-sm font-medium">Location</p>
              </div>
              <p className="text-[#5a3d8a] text-sm sm:text-base">{tldr.location}</p>
            </div>
          </div>

          {/* Superpower */}
          <div className="bg-[#FFD6E7] border-2 border-[#FFB6C1] rounded-2xl p-4 sm:p-5 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-[#E9518D] animate-pulse" />
              <h3 className="text-[#E9518D] text-base sm:text-lg">My Superpower</h3>
            </div>
            <p className="text-[#c03070] text-sm sm:text-base">{tldr.superpower}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
