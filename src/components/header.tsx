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

export default function DockNav() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
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
    <nav className={cn(
        "fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 items-center justify-center gap-4 rounded-full border border-white/10 bg-black/70 px-4 py-2 shadow-xl backdrop-blur-md transition-transform duration-300 ease-in-out md:hidden",
        isVisible ? "translate-y-0" : "translate-y-24"
      )}>
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
