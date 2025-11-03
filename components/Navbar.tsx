"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, User, FolderGit2, Mail, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/about', label: 'About', icon: User },
    { href: '/projects', label: 'Projects', icon: FolderGit2 },
    { href: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 px-6 py-3 rounded-2xl glass-card backdrop-blur-xl">
        {/* Navigation Links */}
        <div className="flex items-center gap-1">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-xl transition-all
                  ${isActive 
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg' 
                    : 'hover:bg-white/10 text-gray-300'
                  }
                `}
              >
                <Icon className="w-4 h-4" strokeWidth={2} />
                <span className="text-sm font-medium hidden sm:inline">{link.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Divider */}
        <div className="w-px h-8 bg-white/10 mx-2"></div>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-xl hover:bg-white/10 transition-all group"
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <Sun className="w-5 h-5 text-yellow-400 transition-transform group-hover:rotate-45" strokeWidth={2} />
          ) : (
            <Moon className="w-5 h-5 text-indigo-400 transition-transform group-hover:-rotate-12" strokeWidth={2} />
          )}
        </button>
      </div>
    </nav>
  );
}
