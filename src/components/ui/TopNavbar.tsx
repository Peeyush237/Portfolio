import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { jumpLinks } from '../../data';
import { PAGE_ORDER, type PageId } from '../../types';

type TopNavbarProps = {
  activePage: PageId;
  darkMode: boolean;
  onNavigate: (page: PageId) => void;
  onToggleTheme: () => void;
  showNextPulse: boolean;
};

export function TopNavbar({
  activePage,
  darkMode,
  onNavigate,
  onToggleTheme,
  showNextPulse,
}: TopNavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const activeIndex = PAGE_ORDER.indexOf(activePage);
  const nextPage = activeIndex < PAGE_ORDER.length - 1 ? PAGE_ORDER[activeIndex + 1] : null;

  useEffect(() => {
    setMenuOpen(false);
  }, [activePage]);

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <nav className="flex h-14 items-center justify-between gap-3 border-b border-white/[0.08] bg-black/80 px-4 backdrop-blur-[12px] md:px-6">
        <button
          type="button"
          onClick={() => onNavigate('hero')}
          data-cursor-hover
          className="shrink-0 font-display text-lg font-bold tracking-[-0.03em] text-white"
        >
          peeyush.
        </button>

        <div className="hidden items-center gap-2 lg:flex">
          {jumpLinks.map((link) => {
            const isActive = activePage === link.target;
            const shouldPulse = showNextPulse && nextPage === link.target;
            return (
              <NavPillButton
                key={link.target}
                label={link.label}
                isActive={isActive}
                shouldPulse={shouldPulse}
                onClick={() => onNavigate(link.target)}
              />
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            data-cursor-hover
            className="hidden shrink-0 rounded-full bg-black px-3.5 py-1.5 text-[11px] font-black uppercase tracking-[0.08em] text-white ring-1 ring-white/20 transition hover:scale-105 sm:inline-block"
          >
            {darkMode ? 'light mode' : 'dark mode'}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            data-cursor-hover
            className="flex h-9 w-9 flex-col items-center justify-center gap-1 rounded-full bg-[#F5E6A3] lg:hidden"
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-4 bg-black transition ${menuOpen ? 'translate-y-1.5 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-4 bg-black transition ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-4 bg-black transition ${menuOpen ? '-translate-y-1.5 -rotate-45' : ''}`} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-b border-white/[0.08] bg-black/90 px-4 py-4 backdrop-blur-[12px] lg:hidden"
          >
            <div className="flex flex-col items-stretch gap-2">
              {jumpLinks.map((link) => {
                const isActive = activePage === link.target;
                const shouldPulse = showNextPulse && nextPage === link.target;
                return (
                  <NavPillButton
                    key={link.target}
                    label={link.label}
                    isActive={isActive}
                    shouldPulse={shouldPulse}
                    onClick={() => onNavigate(link.target)}
                    fullWidth
                  />
                );
              })}
              <button
                type="button"
                onClick={onToggleTheme}
                data-cursor-hover
                className="mt-1 rounded-full bg-black px-3.5 py-2 text-[11px] font-black uppercase tracking-[0.08em] text-white ring-1 ring-white/20 sm:hidden"
              >
                {darkMode ? 'light mode' : 'dark mode'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <PageDots activePage={activePage} onNavigate={onNavigate} />
    </header>
  );
}

function NavPillButton({
  label,
  isActive,
  shouldPulse,
  onClick,
  fullWidth = false,
}: {
  label: string;
  isActive: boolean;
  shouldPulse: boolean;
  onClick: () => void;
  fullWidth?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      data-cursor-hover
      className={`group relative ${fullWidth ? 'w-full' : ''}`}
    >
      {isActive && (
        <motion.span
          layoutId="activeNavPill"
          className="absolute inset-0 rounded-full bg-[#e8d57a]"
          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
        />
      )}
      <motion.span
        animate={
          shouldPulse
            ? { opacity: [1, 0.5, 1], scale: [1, 1.08, 1] }
            : { opacity: 1, scale: isActive ? 1.05 : 1 }
        }
        transition={
          shouldPulse
            ? { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }
            : { duration: 0.2 }
        }
        className={`relative block rounded-full px-3.5 py-1.5 text-center text-[11px] font-black uppercase tracking-[0.08em] text-black ${
          isActive ? 'scale-105 bg-[#e8d57a]' : 'bg-[#F5E6A3]'
        } ${fullWidth ? 'w-full' : ''}`}
      >
        {label}
      </motion.span>
    </button>
  );
}

function PageDots({
  activePage,
  onNavigate,
}: {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
}) {
  return (
    <div className="flex h-5 items-center justify-center gap-2 bg-black/60 backdrop-blur-[8px]">
      {PAGE_ORDER.map((page) => {
        const isActive = activePage === page;
        return (
          <button
            key={page}
            type="button"
            onClick={() => onNavigate(page)}
            data-cursor-hover
            className="flex h-4 w-4 items-center justify-center"
            aria-label={page}
          >
            {isActive ? (
              <motion.span
                layoutId="activePageDot"
                className="block rounded-full bg-white"
                style={{ width: 8, height: 8 }}
                transition={{ type: 'spring', stiffness: 400, damping: 28 }}
              />
            ) : (
              <span
                className="block rounded-full bg-gray-600"
                style={{ width: 6, height: 6 }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
