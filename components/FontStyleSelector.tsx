'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useFontStyle } from '@/contexts/FontStyleContext';

export default function FontStyleSelector() {
  const { fontStyle, setFontStyle } = useFontStyle();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 10) {
        // Show header at the top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down - hide header
        setIsVisible(false);
      } else {
        // Scrolling up - show header
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header 
      className={`w-full bg-white border-b border-gray-200 shadow-sm fixed top-0 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4">
        <Link 
          href="/"
          className="text-lg font-bold text-purple-600 hover:text-purple-700 transition-colors"
          style={{ fontFamily: 'var(--font-roboto)' }}
        >
          📚 Sansa Book
        </Link>
        <div className="flex items-center gap-3">
          <label className="text-sm font-semibold text-gray-700">
            Font Style:
          </label>
          <select
            value={fontStyle}
            onChange={(e) => setFontStyle(e.target.value as 'normal' | 'cursive' | 'capital' | 'small')}
            className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="normal">Normal</option>
            <option value="cursive">Cursive</option>
            <option value="capital">Capital</option>
            <option value="small">Small</option>
          </select>
        </div>
      </div>
    </header>
  );
}

