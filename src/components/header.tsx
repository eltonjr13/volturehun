'use client';

import Link from 'next/link';
import { Home, Briefcase, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '#home', label: 'Início', icon: Home },
  { href: '#projects', label: 'Projetos', icon: Briefcase },
  { href: '#contact', label: 'Contato', icon: Mail },
];

export default function DockNav() {
  return (
    <nav className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 rounded-full border border-white/10 bg-neutral-900/70 px-6 py-3 shadow-lg backdrop-blur-md">
      <div className="flex items-center gap-x-8">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex flex-col items-center gap-1 text-xs text-neutral-400 transition-colors hover:text-accent',
            )}
            aria-label={item.label}
          >
            <item.icon className="h-5 w-5" />
            <span className="hidden sm:inline">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
