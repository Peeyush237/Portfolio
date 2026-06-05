import { motion } from 'framer-motion';
import { PAGE_ORDER, type PageId } from '../../types';

type EdgePeekProps = {
  activePage: PageId;
};

export function EdgePeek({ activePage }: EdgePeekProps) {
  const activeIndex = PAGE_ORDER.indexOf(activePage);
  const hasNext = activeIndex < PAGE_ORDER.length - 1;

  if (!hasNext) return null;

  return (
    <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-20 w-5 overflow-hidden">
      <motion.div
        animate={{ x: [0, -6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-y-4 right-0 w-5 rounded-l-[12px] border border-black/[0.08] bg-white dark:border-white/[0.08] dark:bg-[#252525]"
        style={{
          maskImage: 'linear-gradient(to left, black 40%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to left, black 40%, transparent 100%)',
        }}
      />
    </div>
  );
}
