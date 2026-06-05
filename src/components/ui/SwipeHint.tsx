import { motion } from 'framer-motion';
import { PAGE_ORDER, type PageId } from '../../types';

type SwipeHintProps = {
  activePage: PageId;
  hasNavigated: boolean;
  isMobile: boolean;
};

export function SwipeHint({ activePage, hasNavigated, isMobile }: SwipeHintProps) {
  const activeIndex = PAGE_ORDER.indexOf(activePage);
  const isLastPage = activeIndex === PAGE_ORDER.length - 1;

  if (isLastPage) return null;
  if (isMobile && hasNavigated) return null;

  return (
    <motion.p
      key={activePage}
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 1, 0] }}
      transition={{
        duration: 5.5,
        times: [0, 0.15, 0.7, 1],
        delay: 1.5,
        ease: 'easeInOut',
      }}
      className="pointer-events-none absolute bottom-4 left-1/2 z-20 -translate-x-1/2 text-xs text-gray-500 dark:text-gray-400"
    >
      → swipe or click nav to explore
    </motion.p>
  );
}
