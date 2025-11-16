'use client';

import { useFontStyle } from '@/contexts/FontStyleContext';

export default function FontStyleSelector() {
  const { fontStyle, setFontStyle } = useFontStyle();

  return (
    <div className="fixed top-4 right-4 z-50 bg-white rounded-lg shadow-lg p-2">
      <label className="block text-sm font-semibold text-gray-700 mb-1 px-2">
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
  );
}

