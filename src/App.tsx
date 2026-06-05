import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { CustomCursor } from './components/ui/CustomCursor';
import { SwipeHint } from './components/ui/SwipeHint';
import { TopNavbar } from './components/ui/TopNavbar';
import { ContactPage } from './pages/ContactPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { HeroPage } from './pages/HeroPage';
import { LeadershipPage } from './pages/LeadershipPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { SkillsPage } from './pages/SkillsPage';
import { PAGE_ORDER, type PageId } from './types';

const pageComponents: Record<PageId, () => JSX.Element> = {
  hero: HeroPage,
  skills: SkillsPage,
  projects: ProjectsPage,
  experience: ExperiencePage,
  leadership: LeadershipPage,
  contact: ContactPage,
};

const pageVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? '-100%' : '100%',
    opacity: 0,
  }),
};

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activePage, setActivePage] = useState<PageId>('hero');
  const [direction, setDirection] = useState(0);
  const [hasNavigated, setHasNavigated] = useState(false);
  const [showNextPulse, setShowNextPulse] = useState(true);
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.innerWidth < 1024,
  );

  useEffect(() => {
    const stored = localStorage.getItem('peeyush-theme');
    setDarkMode(stored ? stored === 'dark' : true);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('peeyush-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    const timer = setTimeout(() => setShowNextPulse(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const navigate = (page: PageId) => {
    if (page !== activePage) setHasNavigated(true);
    const currentIndex = PAGE_ORDER.indexOf(activePage);
    const nextIndex = PAGE_ORDER.indexOf(page);
    setDirection(nextIndex > currentIndex ? 1 : -1);
    setActivePage(page);
  };

  const ActivePageComponent = pageComponents[activePage];

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#f5f3ee] text-gray-900 transition-colors duration-300 dark:bg-[#0a0a0a] dark:text-white">
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.03] mix-blend-overlay dark:opacity-[0.05]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }} />
      <CustomCursor />

      <TopNavbar
        activePage={activePage}
        darkMode={darkMode}
        onNavigate={navigate}
        onToggleTheme={() => setDarkMode((current) => !current)}
        showNextPulse={showNextPulse}
      />

      <div className="flex h-full flex-col pt-[72px]">
        <div className="relative flex flex-1 items-center justify-center overflow-hidden p-4 md:p-6 lg:px-8 lg:pb-8 lg:pt-4">
          <div className="relative h-full w-full max-w-[1200px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activePage}
                custom={direction}
                variants={pageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="h-full"
              >
                <ActivePageComponent />
              </motion.div>
            </AnimatePresence>
            <SwipeHint
              activePage={activePage}
              hasNavigated={hasNavigated}
              isMobile={isMobile}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
