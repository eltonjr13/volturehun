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
    <nav className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 items-center justify-center gap-4 rounded-2xl border border-white/10 bg-black/70 px-4 py-2 shadow-xl backdrop-blur-md md:hidden">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            'flex h-12 w-12 items-center justify-center rounded-full text-neutral-300 transition-all hover:scale-105 hover:text-accent',
          )}
          aria-label={item.label}
        >
          <item.icon className="h-6 w-6" />
        </Link>
      ))}
    </nav>
  );
}
