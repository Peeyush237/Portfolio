import { motion } from 'framer-motion';
import { PageCard } from '../components/ui/PageCard';
import { SectionPill } from '../components/ui/SectionPill';
import { starterPackRows } from '../data';

export function StarterPackPage() {
  return (
    <PageCard pageId="starter">
      <div className="absolute left-8 top-8 md:left-12 md:top-12">
        <SectionPill>STARTER PACK</SectionPill>
      </div>

      <div className="flex h-full flex-col justify-center gap-8 pt-10 lg:grid lg:grid-cols-2 lg:gap-10 lg:pt-0">
        <div className="rounded-2xl border border-black/[0.08] bg-white p-6 dark:border-white/[0.08] dark:bg-[#1e1e1e]">
          <h2 className="mb-6 text-sm font-black uppercase tracking-[0.15em] text-gray-500 dark:text-gray-400">
            PERSONALITY BREAKDOWN
          </h2>
          <div className="space-y-0">
            {starterPackRows.map((row) => (
              <div
                key={row.label}
                className="flex flex-col gap-1 border-b border-black/[0.08] py-4 dark:border-white/[0.08] sm:flex-row sm:gap-4"
              >
                <span className="min-w-[140px] font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-gray-500 dark:text-gray-400">
                  {row.label}
                </span>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="corkboard relative min-h-[280px] rounded-2xl p-6 shadow-inner lg:min-h-0">
          <div className="absolute left-8 top-8 h-4 w-4 rounded-full bg-pink-hot shadow-[0_2px_4px_rgba(0,0,0,0.3)]" />
          <div className="absolute right-12 top-10 h-4 w-4 rounded-full bg-[#F5E6A3] shadow-[0_2px_4px_rgba(0,0,0,0.3)]" />
          <div className="absolute bottom-10 left-12 h-4 w-4 rounded-full bg-[#67e0c2] shadow-[0_2px_4px_rgba(0,0,0,0.3)]" />

          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="absolute left-1/2 top-1/2 w-[75%] max-w-[280px] -translate-x-1/2 -translate-y-1/2 rotate-[-3deg] rounded-xl border border-black/10 bg-white p-5 shadow-lg"
          >
            <p className="text-[10px] font-black uppercase tracking-[0.12em] text-black/40">
              PINNED NOTE
            </p>
            <h3 className="mt-2 text-xl font-black tracking-[-0.03em] text-black">
              personality breakdown
            </h3>
            <ul className="mt-3 space-y-2 text-xs leading-relaxed text-black/75">
              {starterPackRows.slice(0, 3).map((row) => (
                <li key={row.label}>
                  <span className="font-black">{row.label}:</span> {row.value}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </PageCard>
  );
}
