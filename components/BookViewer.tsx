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

interface BookViewerProps {
  pages: Page[];
}

export default function BookViewer({ pages }: BookViewerProps) {
  const { getWordStyle, getWordDisplay } = useFontStyle();

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
                  className={`word-card bg-white rounded-xl p-4 md:p-6 shadow-lg border-4 text-center transition-transform hover:scale-105 hover:-translate-y-1 ${
                    word.color === 1 ? 'border-red-500' :
                    word.color === 2 ? 'border-orange-500' :
                    word.color === 3 ? 'border-yellow-500' :
                    word.color === 4 ? 'border-green-500' :
                    word.color === 5 ? 'border-blue-500' : 'border-purple-500'
                  }`}
                  style={{
                    color: word.color === 1 ? '#C2185B' :
                           word.color === 2 ? '#E65100' :
                           word.color === 3 ? '#F57F17' :
                           word.color === 4 ? '#2E7D32' :
                           word.color === 5 ? '#01579B' : '#6A1B9A'
                  }}
                >
                  <div className="text-4xl md:text-5xl mb-2">{word.icon}</div>
                  <div className="text-2xl md:text-3xl font-bold mb-2" style={getWordStyle(word.word)}>
                    {getWordDisplay(word.word)}
                  </div>
                  {word.phrase && (
                    <div className="text-sm md:text-base text-gray-600 mt-2 p-2 bg-gray-50 rounded" style={{ fontFamily: 'var(--font-roboto)' }}>
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

