import type { ReactNode } from 'react';
import { EdgePeek } from './EdgePeek';
import type { PageId } from '../../types';

type PageCardProps = {
  children: ReactNode;
  className?: string;
  pageId?: PageId;
};

export function PageCard({ children, className = '', pageId }: PageCardProps) {
  return (
    <div
      className={`relative flex h-full w-full flex-col overflow-hidden rounded-[24px] border border-black/[0.08] bg-white p-8 text-gray-900 shadow-card-light dark:border-white/[0.08] dark:bg-[#1a1a1a] dark:text-white dark:shadow-card md:p-12 ${className}`}
    >
      {pageId && <EdgePeek activePage={pageId} />}
      {children}
    </div>
  );
}
