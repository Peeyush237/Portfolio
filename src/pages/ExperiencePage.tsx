import { PageCard } from '../components/ui/PageCard';
import { SectionPill } from '../components/ui/SectionPill';
import { certifications, education, experience } from '../data';

const HACKATHON_TITLE = 'Blen360 Hackathon Finalist (Top 150 of ~2,000)';
const workCerts = certifications.filter((c) => c.title !== HACKATHON_TITLE);

const innerCard =
  'rounded-2xl border border-black/[0.08] bg-white p-5 dark:border-white/[0.08] dark:bg-[#1e1e1e]';

export function ExperiencePage() {
  return (
    <PageCard pageId="experience" className="overflow-y-auto">
      <div className="absolute left-8 top-8 md:left-12 md:top-12">
        <SectionPill>EXPERIENCE + CERTS</SectionPill>
      </div>

      <div className="flex h-full flex-col justify-center gap-8 pt-14 lg:grid lg:grid-cols-2 lg:gap-10 lg:pt-10">
        <div className="space-y-4">
          <h3 className="text-lg font-black uppercase tracking-[0.1em] text-gray-500 dark:text-gray-400">
            Work Experience
          </h3>
          {experience.map((item) => (
            <div key={item.role} className={innerCard}>
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg font-black text-pink-hot"
                  data-cursor-hover
                >
                  {item.org}
                </a>
              ) : (
                <p className="text-lg font-black text-pink-hot">{item.org}</p>
              )}
              <p className="mt-1 text-[11px] font-black uppercase tracking-[0.1em] text-gray-800 dark:text-white">
                {item.role}
              </p>
              <p className="mt-2 text-xs font-medium text-gray-500 dark:text-gray-400">
                {item.duration}
              </p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>• {bullet}</li>
                ))}
              </ul>
            </div>
          ))}

          {education.map((item) => (
            <div key={item.school} className={innerCard}>
              <p className="text-lg font-black text-pink-hot">{item.school}</p>
              <p className="mt-1 text-sm font-medium text-gray-800 dark:text-gray-200">
                {item.degree}
              </p>
              <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                {item.duration} · {item.location}
              </p>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-black uppercase tracking-[0.1em] text-gray-500 dark:text-gray-400">
            Certifications
          </h3>
          {workCerts.map((item) => (
            <div key={item.title} className={innerCard}>
              <p className="text-sm font-black uppercase tracking-[0.08em] text-gray-900 dark:text-white">
                {item.title}
              </p>
              <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                {item.issuer} · {item.year}
              </p>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block text-xs font-black uppercase tracking-[0.1em] text-[#4a80ff]"
                  data-cursor-hover
                >
                  VIEW ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </PageCard>
  );
}
