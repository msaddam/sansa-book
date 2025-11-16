'use client';

import { numbers1to100Data, NumberPage } from '@/lib/mathData';

export default function NumbersViewer() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 pt-20 p-4 md:p-8">
      <div className="space-y-6 max-w-7xl mx-auto">
        {numbers1to100Data.map((page: NumberPage, pageIndex: number) => (
          <div
            key={pageIndex}
            className={`page rounded-2xl shadow-2xl p-6 md:p-10 ${page.pageClass}`}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-8" style={{ fontFamily: 'var(--font-roboto)' }}>
              {page.title}
            </h1>
            
            <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4 md:gap-6">
              {page.numbers.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className={`word-card bg-white rounded-xl p-4 md:p-6 shadow-lg border-4 text-center transition-transform hover:scale-105 hover:-translate-y-1 ${
                    item.color === 1 ? 'border-red-500' :
                    item.color === 2 ? 'border-orange-500' :
                    item.color === 3 ? 'border-yellow-500' :
                    item.color === 4 ? 'border-green-500' :
                    item.color === 5 ? 'border-blue-500' : 'border-purple-500'
                  }`}
                  style={{
                    color: item.color === 1 ? '#C2185B' :
                           item.color === 2 ? '#E65100' :
                           item.color === 3 ? '#F57F17' :
                           item.color === 4 ? '#2E7D32' :
                           item.color === 5 ? '#01579B' : '#6A1B9A'
                  }}
                >
                  <div className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'var(--font-roboto)' }}>
                    {item.number}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

