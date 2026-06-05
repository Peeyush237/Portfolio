import { PageCard } from '../components/ui/PageCard';
import { SectionPill } from '../components/ui/SectionPill';
import { ChatWidget } from '../components/chat/ChatWidget';
import { profile } from '../data';

const heroTags = [
  { label: 'OPEN TO INTERNSHIPS', bg: 'bg-[#c8f0a0]' },
  { label: 'BUILDING IN PUBLIC', bg: 'bg-[#f9b8d4]' },
  { label: 'IIIT NAGPUR', bg: 'bg-[#a8d4f0]' },
];

export function HeroPage() {
  return (
    <PageCard pageId="hero" className="!p-0">
      <div className="flex h-full flex-col lg:flex-row">
        {/* Left half - About Me */}
        <div className="flex h-full flex-1 flex-col justify-center p-8 lg:p-12">
          <div className="absolute left-8 top-8 lg:left-12 lg:top-12">
            <SectionPill>HELLO!</SectionPill>
          </div>

          <div className="flex flex-col justify-center gap-6 pt-10 lg:pt-0">
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

            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              data-cursor-hover
              className="inline-flex w-fit items-center gap-2 rounded-full bg-pink-hot px-6 py-3 text-[12px] font-black uppercase tracking-[0.08em] text-white transition hover:scale-105 hover:bg-pink-hot/90"
            >
              <span>↓</span>
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        {/* Right half - Chat Widget */}
        <div className="flex h-full flex-1 flex-col justify-center border-l border-black/[0.08] p-8 dark:border-white/[0.08] lg:p-12">
          <ChatWidget />
        </div>
      </div>
    </PageCard>
  );
}
