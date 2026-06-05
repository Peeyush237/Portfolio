import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export function CustomCursor() {
  const enabled =
    typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches;
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  const cursorX = useSpring(0, { stiffness: 500, damping: 28, mass: 0.5 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28, mass: 0.5 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const hide = () => setVisible(false);
    const show = () => setVisible(true);

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [data-cursor-hover]')) {
        setHovering(true);
      }
    };

    const onOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [data-cursor-hover]')) {
        setHovering(false);
      }
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseenter', show);
    window.addEventListener('mouseleave', hide);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseenter', show);
      window.removeEventListener('mouseleave', hide);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
    };
  }, [cursorX, cursorY, visible]);

  if (!enabled || !visible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[100] mix-blend-difference"
      style={{ x: cursorX, y: cursorY }}
    >
      <motion.div
        animate={{
          scale: hovering ? 2.2 : 1,
          opacity: hovering ? 0.85 : 1,
        }}
        transition={{ duration: 0.15 }}
        className="-translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
        style={{ width: 10, height: 10 }}
      />
    </motion.div>
  );
}
