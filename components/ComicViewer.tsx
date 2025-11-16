'use client';

import { useFontStyle } from '@/contexts/FontStyleContext';

interface Word {
  icon: string;
  word: string;
  phrase?: string;
  color: number;
}

interface Page {
  title: string;
  words: Word[];
  pageNumber: number;
  totalPages: number;
  pageClass: string;
}

interface ComicViewerProps {
  pages: Page[];
}

export default function ComicViewer({ pages }: ComicViewerProps) {
  const { getWordStyle, getWordDisplay } = useFontStyle();
  
  const getBorderColor = (color: number) => {
    const colors = [
      'border-red-500',
      'border-orange-500',
      'border-yellow-500',
      'border-green-500',
      'border-blue-500',
      'border-purple-500'
    ];
    return colors[color - 1] || colors[0];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 pt-20 p-4 md:p-8">
      <div className="space-y-6 max-w-7xl mx-auto">
        {pages.map((page, pageIndex) => (
          <div
            key={pageIndex}
            className={`page rounded-2xl shadow-2xl p-6 md:p-10 ${page.pageClass}`}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-8" style={{ fontFamily: 'var(--font-roboto)' }}>
              {page.title}
            </h1>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {page.words.map((word, wordIndex) => (
                <div
                  key={wordIndex}
                  className={`comic-panel bg-white rounded-lg p-4 shadow-lg border-4 text-center transition-transform hover:scale-105 hover:-translate-y-1 ${getBorderColor(word.color)}`}
                >
                  <div className="comic-image w-full h-32 md:h-40 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg border-2 border-gray-300 flex items-center justify-center text-5xl md:text-6xl mb-3">
                    {word.icon}
                  </div>
                  <div className="text-xl md:text-2xl font-bold mb-2" style={getWordStyle(word.word)}>
                    {getWordDisplay(word.word)}
                  </div>
                  {word.phrase && (
                    <div className="text-xs md:text-sm text-gray-600 mt-2 p-2 bg-gray-50 rounded border border-dashed border-gray-300" style={{ fontFamily: 'var(--font-roboto)' }}>
                      {word.phrase}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

