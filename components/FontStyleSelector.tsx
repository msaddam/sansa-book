'use client';

import Link from 'next/link';
import { useFontStyle } from '@/contexts/FontStyleContext';

export default function FontStyleSelector() {
  const { fontStyle, setFontStyle } = useFontStyle();

  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
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

