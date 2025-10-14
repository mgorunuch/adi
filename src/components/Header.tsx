'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Insight', href: '#unfair-insight' },
  { label: 'Technical', href: '#technical-breakthrough' },
  { label: 'Customers', href: '#target-customers' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Launch', href: '#go-to-market' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Team', href: '#team' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand/10 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-x border-brand/10">
        {/* Desktop Navigation */}
        <div className="hidden md:grid h-16 text-center" style={{ gridTemplateColumns: `1fr repeat(${navItems.length}, 1fr)` }}>
          <h1 className="text-2xl font-semibold flex items-center justify-center border-r border-brand/10">ADI</h1>
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className={`hover:bg-brand/10 transition-colors flex items-center justify-center ${index < navItems.length - 1 ? 'border-r border-brand/10' : ''}`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between h-16">
          <h1 className="text-2xl font-semibold">ADI</h1>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-brand/10 rounded transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-brand/10 bg-background">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 hover:bg-brand/10 transition-colors border-b border-brand/10 last:border-b-0"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
