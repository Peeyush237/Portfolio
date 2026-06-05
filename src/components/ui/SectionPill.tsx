import type { ReactNode } from 'react';

export function SectionPill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-[#F5E6A3] px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.1em] text-black">
      {children}
    </span>
  );
}
