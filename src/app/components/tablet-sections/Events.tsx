import React, { useState, useMemo } from 'react';
import { Calendar, Mic, Telescope, Lightbulb, ImageOff } from 'lucide-react';
import { FilterPills, FilterOption } from '../ui/FilterPills';
import { events, EventEntry } from '../../data/portfolioData';
import devfestImg from '@/imports/devfest.jpeg';
import aiImpactImg from '@/imports/aiimpact.jpeg';
import shoptalkImg from '@/imports/shoptalk.jpeg';
import digitalDivasImg from '@/imports/DigitalDivas.jpeg';

const EVENT_IMAGES: Record<string, string> = {
  devfest: devfestImg,
  aiimpact: aiImpactImg,
  shoptalk: shoptalkImg,
  digitalDivas: digitalDivasImg,
};

const FILTER_OPTIONS: FilterOption[] = [
  { id: 'all',       label: 'All',       emoji: '📅' },
  { id: 'hosted',    label: 'Core Team',    emoji: '🎙️' },
  { id: 'exhibited', label: 'Exhibited', emoji: '🚀' },
  { id: 'attended',  label: 'Attended',  emoji: '💡' },
];

const CATEGORY_CONFIG: Record<EventEntry['category'], {
  label: string;
  icon: React.ElementType;
  badgeColor: string;
  badgeBg: string;
}> = {
  hosted: {
    label: 'Host',
    icon: Mic,
    badgeColor: '#E9518D',
    badgeBg: '#FFB6C1',
  },
  exhibited: {
    label: 'Exhibitor',
    icon: Telescope,
    badgeColor: '#2B7FB5',
    badgeBg: '#87CEEB',
  },
  attended: {
    label: 'Attendee',
    icon: Lightbulb,
    badgeColor: '#7a5b8a',
    badgeBg: '#B298DC',
  },
};

function EventCard({ event }: { event: EventEntry }) {
  const [imgLoading, setImgLoading] = useState(true);
  const [imgError, setImgError] = useState(false);
  const cfg = CATEGORY_CONFIG[event.category];
  const BadgeIcon = cfg.icon;
  const resolvedImage = event.image ? (EVENT_IMAGES[event.image] ?? event.image) : undefined;

  return (
    <div className="relative rounded-2xl overflow-hidden border-2 border-[#FFB6C1]/30 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 bg-[#FFF0F5]">

      <div className="px-4 pt-4 pb-4 flex flex-col gap-3">
        {/* Top row: role badge left, date right — always visible */}
        <div className="flex items-center justify-between gap-2">
          <span
            className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium min-w-0"
            style={{ backgroundColor: `${cfg.badgeBg}40`, color: cfg.badgeColor, border: `1px solid ${cfg.badgeBg}` }}
          >
            <BadgeIcon className="w-3 h-3 flex-shrink-0" />
            <span className="truncate">{event.role}</span>
          </span>
          {event.date && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-[#FFB6C1]/20 text-[#E9518D] border border-[#FFB6C1]/40 rounded-full text-xs flex-shrink-0">
              <Calendar className="w-3 h-3" />
              {event.date}
            </span>
          )}
        </div>

        {/* Image sits between badges and title */}
        {resolvedImage && (
          <div className="relative w-full aspect-video bg-[#FFF0F5] overflow-hidden rounded-xl border border-[#FFB6C1]/20">
            {imgError ? (
              <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-[#FFF0F5]">
                <ImageOff className="w-8 h-8 text-[#FFB6C1]" />
                <span className="text-xs text-gray-400">Image unavailable</span>
              </div>
            ) : (
              <>
                {imgLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-[#FFF0F5]">
                    <div className="w-6 h-6 border-2 border-[#FFB6C1] border-t-transparent rounded-full animate-spin" />
                  </div>
                )}
                <img
                  src={resolvedImage}
                  alt={event.title}
                  className={`w-full h-full object-contain transition-opacity duration-300 ${imgLoading ? 'opacity-0' : 'opacity-100'}`}
                  onLoad={() => setImgLoading(false)}
                  onError={() => { setImgError(true); setImgLoading(false); }}
                />
              </>
            )}
          </div>
        )}

        {/* Title */}
        <h4 className="text-[#E9518D] text-sm sm:text-base leading-snug break-words">
          {event.title}
        </h4>

        {/* Highlights */}
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed break-words -mt-1">
          {event.highlights}
        </p>
      </div>
    </div>
  );
}

export function Events() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = useMemo(() => {
    if (activeFilter === 'all') return events;
    return events.filter(e => e.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="tablet-section -mt-3 sm:-mt-6">
      {/* Sticky filter bar — flush against pink title bar, height = pills only */}
      <div className="sticky top-0 z-50 -mx-3 sm:-mx-6 px-3 sm:px-6 py-2">
        <FilterPills
          options={FILTER_OPTIONS}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          className="mb-0"
        />
      </div>

      {/* Event cards */}
      <div className="space-y-4 mt-6">
        {filtered.length === 0 ? (
          <p className="text-center text-gray-400 text-sm py-8">No events in this category yet.</p>
        ) : (
          filtered.map((event, i) => (
            <EventCard key={`${event.title}-${i}`} event={event} />
          ))
        )}
      </div>
    </div>
  );
}
