'use client';

import Link from 'next/link';
import { Home, Briefcase, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect, useState, useRef } from 'react';

const navItems = [
  { href: '#home', label: 'Início', icon: Home },
  { href: '#projects', label: 'Projetos', icon: Briefcase },
  { href: '#contact', label: 'Contato', icon: Mail },
];

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY.current && window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = window.scrollY;
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar, { passive: true });

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, []);

  return (
    <header className={cn(
        "fixed top-5 left-1/2 z-50 flex -translate-x-1/2 items-center justify-center gap-4 rounded-2xl border border-white/10 bg-black/60 p-1 shadow-md backdrop-blur-sm transition-transform duration-300 ease-in-out",
        isVisible ? "translate-y-0" : "-translate-y-24"
      )}>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            'flex items-center gap-2 rounded-xl px-3 py-1 text-sm font-medium text-neutral-300 transition-colors hover:bg-white/10 hover:text-accent',
          )}
          aria-label={item.label}
        >
          <item.icon className="h-5 w-5" />
          <span className="hidden sm:inline">{item.label}</span>
        </Link>
      ))}
    </header>
  );
}
