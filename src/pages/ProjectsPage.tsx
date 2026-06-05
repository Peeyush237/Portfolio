import { motion } from 'framer-motion';
import { PageCard } from '../components/ui/PageCard';
import { SectionPill } from '../components/ui/SectionPill';
import { shippedThings } from '../data';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export function ProjectsPage() {
  return (
    <PageCard pageId="projects" className="overflow-y-auto">
      <div className="absolute left-8 top-8 md:left-12 md:top-12">
        <SectionPill>THINGS I&apos;VE SHIPPED</SectionPill>
      </div>
      <div className="absolute right-8 top-8 md:right-12 md:top-12">
        <SectionPill>BUILD FIRST, REPLY LATER</SectionPill>
      </div>

      <div className="flex h-full flex-col justify-center gap-10 pt-14">
        <div className="space-y-1">
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-black leading-[1.05] tracking-[-0.03em] text-gray-900 dark:text-white">
            I build agentic workflows
          </h2>
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-black leading-[1.05] tracking-[-0.03em] text-pink-hot">
            faster than replying
          </h2>
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-black leading-[1.05] tracking-[-0.03em] text-gray-900 dark:text-white">
            to texts :)
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-4 sm:grid-cols-2"
        >
          {shippedThings.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.href}
              target={project.href.startsWith('http') ? '_blank' : undefined}
              rel={project.href.startsWith('http') ? 'noreferrer' : undefined}
              variants={cardVariants}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              data-cursor-hover
              className="group flex flex-col justify-between rounded-2xl border border-black/[0.08] bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover dark:border-white/[0.08] dark:bg-[#1e1e1e]"
            >
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.12em] text-gray-500 dark:text-gray-400">
                  PROJECT {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-2 text-xl font-black tracking-[-0.03em] text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {project.desc}
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between gap-3">
                <span className="rounded-full bg-[#F5E6A3] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.08em] text-black">
                  {project.tech}
                </span>
                <span className="text-sm font-black text-gray-500 transition group-hover:text-pink-hot dark:text-gray-400">
                  view ↗
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </PageCard>
  );
}
