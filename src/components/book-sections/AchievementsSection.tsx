import React from 'react';
import { Trophy, Star } from 'lucide-react';
import { achievements } from '../../data/portfolioData';

export function AchievementsSection() {
  return (
    <section className="py-24 px-4 bg-[#FFF0F5]" id="achievements">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-16 justify-center">
          <Trophy className="w-10 h-10 text-[#fd6698]" />
          <h2 className="text-[#fd6698]">Achievements & Awards</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.slice(0, 4).map((award, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl shadow-xl border-t-4 border-[#87CEEB] hover:-translate-y-2 transition-transform">
              <Star className="w-8 h-8 text-[#FFB6C1] mb-4" />
              <h4 className="font-bold text-gray-800 mb-1">{award.title}</h4>
              <p className="text-sm font-semibold text-[#87CEEB] mb-2">{award.date}</p>
              <p className="text-xs text-gray-500 italic">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}