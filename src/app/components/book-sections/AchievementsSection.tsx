import React from 'react';
import { Trophy, Star } from 'lucide-react';
import { achievements } from '../../data/portfolioData';

export function AchievementsSection() {
  return (
    <section className="py-20 px-4 bg-[#FFF0F5]" id="achievements" aria-labelledby="achievements-heading">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Trophy className="w-8 h-8 text-[#E9518D]" aria-hidden="true" />
          <h2 id="achievements-heading" className="text-[#E9518D]">Achievements & Awards</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.slice(0, 4).map((award, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-md border-2 border-[#FFB6C1]/20 hover:shadow-lg hover:-translate-y-0.5 hover:border-[#FFB6C1] transition-all duration-200">
              <div className="w-10 h-10 rounded-full bg-[#FFB6C1]/20 flex items-center justify-center mb-4">
                <Star className="w-5 h-5 text-[#E9518D]" />
              </div>
              <h4 className="font-bold text-[#E9518D] mb-2 text-sm leading-snug">{award.title}</h4>
              <span className="inline-flex items-center px-2 py-0.5 bg-[#FFB6C1]/20 text-[#E9518D] border border-[#FFB6C1]/40 rounded-full text-xs mb-2">
                {award.date}
              </span>
              <p className="text-xs text-gray-500 leading-relaxed">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}