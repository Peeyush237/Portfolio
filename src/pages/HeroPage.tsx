import { motion } from 'framer-motion';
import { RetroPc } from '../components/decorative/RetroPc';
import { PageCard } from '../components/ui/PageCard';
import { SectionPill } from '../components/ui/SectionPill';
import { profile } from '../data';

const stickyNotes = [
  { text: 'AI/ML ENGINEER · IIIT NAGPUR', bg: 'bg-[#F5E6A3]', rotate: -6, x: 'left-0 top-4', delay: 0.1 },
  { text: 'CURRENTLY: AGENTIC AI + RAG', bg: 'bg-[#f9b8d4]', rotate: 8, x: 'right-2 bottom-16', delay: 0.25 },
  { text: 'BUILDING IN PUBLIC', bg: 'bg-[#a8e6cf]', rotate: -3, x: 'right-8 top-2', delay: 0.4 },
];

const heroTags = [
  { label: 'OPEN TO INTERNSHIPS', bg: 'bg-[#c8f0a0]' },
  { label: 'BUILDING IN PUBLIC', bg: 'bg-[#f9b8d4]' },
  { label: 'IIIT NAGPUR', bg: 'bg-[#a8d4f0]' },
];

export function HeroPage() {
  return (
    <PageCard pageId="hero">
      <div className="absolute left-8 top-8 md:left-12 md:top-12">
        <SectionPill>HELLO!</SectionPill>
      </div>

      <div className="flex h-full flex-col justify-center gap-8 pt-10 lg:grid lg:grid-cols-2 lg:gap-12 lg:pt-0">
        <div className="flex flex-col justify-center gap-6">
          <p className="text-sm font-medium uppercase tracking-[0.15em] text-gray-500 dark:text-gray-400">
            {profile.tagline.split('.')[0]}.
          </p>
          <h1 className="font-display text-[clamp(3.5rem,8vw,6rem)] font-black leading-[0.9] tracking-[-0.04em] text-gray-900 dark:text-white">
            peeyush.
          </h1>
          <p className="max-w-md text-base font-medium leading-relaxed text-gray-600 dark:text-gray-200 md:text-lg">
            {profile.about}
          </p>
          <div className="flex flex-wrap gap-3">
            {heroTags.map((tag) => (
              <span
                key={tag.label}
                className={`rounded-full px-4 py-2 text-[11px] font-black uppercase tracking-[0.1em] text-black ${tag.bg}`}
              >
                {tag.label}
              </span>
            ))}
          </div>
        </div>

        <div className="relative flex min-h-[320px] items-center justify-center lg:min-h-0">
          <RetroPc />
          {stickyNotes.map((note) => (
            <motion.div
              key={note.text}
              initial={{ rotate: 0, scale: 0.8, opacity: 0 }}
              animate={{ rotate: note.rotate, scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 18, delay: note.delay }}
              className={`absolute ${note.x} z-10 max-w-[180px] rounded-lg px-3 py-2 text-[10px] font-black uppercase tracking-[0.08em] text-black shadow-md ${note.bg}`}
            >
              {note.text}
            </motion.div>
          ))}
        </div>
      </div>
    </PageCard>
  );
}
