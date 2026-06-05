import { PageCard } from '../components/ui/PageCard';
import { SectionPill } from '../components/ui/SectionPill';
import { contactButtons, profile, skills } from '../data';

const ctaButtons = contactButtons.filter((b) =>
  ['GitHub', 'LinkedIn', 'Resume'].includes(b.label),
);

export function ContactPage() {
  return (
    <PageCard pageId="contact" className="relative overflow-hidden">
      <div
        className="gradient-blob pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, #FF3CAC 0%, #F5E6A3 50%, transparent 70%)',
        }}
      />

      <div className="absolute left-8 top-8 md:left-12 md:top-12">
        <SectionPill>CONTACT</SectionPill>
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-8 text-center">
        <div>
          <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-black leading-[0.95] tracking-[-0.04em] text-gray-900 dark:text-white">
            let&apos;s build
          </h2>
          <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-black leading-[0.95] tracking-[-0.04em] text-pink-hot">
            something.
          </h2>
        </div>

        <div className="w-full max-w-md rounded-2xl border border-black/[0.08] bg-white/90 p-6 text-left backdrop-blur-sm dark:border-white/[0.08] dark:bg-[#1e1e1e]/95">
          <div className="mb-5 flex items-center gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-pink-hot to-[#F5E6A3] text-xl font-black text-white">
              PM
            </div>
            <div>
              <p className="text-lg font-black text-gray-900 dark:text-white">{profile.name}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{profile.title}</p>
            </div>
          </div>

          <div className="space-y-3 text-sm">
            <ContactRow label="NAME" value={profile.name} />
            <ContactRow
              label="CURRENTLY"
              value="Romanticizing student life (and building in public)"
            />
            <ContactRow label="STACK" value={skills.ai.slice(0, 4).join(' · ')} />
            <ContactRow label="LIFE GOAL" value="Ship something that matters" />
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {ctaButtons.map((button) => (
            <a
              key={button.label}
              href={button.href}
              target={button.href.startsWith('http') || button.href.startsWith('/') ? '_blank' : undefined}
              rel={
                button.href.startsWith('http') || button.href.startsWith('/')
                  ? 'noreferrer'
                  : undefined
              }
              data-cursor-hover
              className="rounded-full bg-[#F5E6A3] px-6 py-3 text-[11px] font-black uppercase tracking-[0.1em] text-black transition hover:scale-105 hover:bg-[#e8d57a]"
            >
              {button.label === 'GitHub' && '⎇ '}
              {button.label === 'LinkedIn' && 'in '}
              {button.label === 'Resume' && '↓ '}
              {button.label}
            </a>
          ))}
        </div>

        <p className="text-xs text-gray-500 dark:text-gray-400">
          {profile.email} · {profile.location}
        </p>
      </div>
    </PageCard>
  );
}

function ContactRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-4">
      <span className="min-w-[100px] font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-gray-500 dark:text-gray-400">
        {label}
      </span>
      <span className="font-medium text-gray-800 dark:text-gray-200">{value}</span>
    </div>
  );
}
