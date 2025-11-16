'use client';

import { subjectsData, SubjectPage } from '@/lib/mathData';

interface SubjectsViewerProps {
  data?: SubjectPage[];
}

export default function SubjectsViewer({ data }: SubjectsViewerProps) {
  const pages = data || subjectsData;
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 pt-20 p-4 md:p-8">
      <div className="space-y-6 max-w-7xl mx-auto">
        {pages.map((page: any, pageIndex: number) => (
          <div
            key={pageIndex}
            className={`page rounded-2xl shadow-2xl p-6 md:p-10 ${page.pageClass}`}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-8" style={{ fontFamily: 'var(--font-roboto)' }}>
              {page.title}
            </h1>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {page.subjects.map((subject, subjectIndex) => (
                <div
                  key={subjectIndex}
                  className={`word-card bg-white rounded-xl p-6 shadow-lg border-4 text-center transition-transform hover:scale-105 hover:-translate-y-1 ${
                    subject.color === 1 ? 'border-red-500' :
                    subject.color === 2 ? 'border-orange-500' :
                    subject.color === 3 ? 'border-yellow-500' :
                    subject.color === 4 ? 'border-green-500' :
                    subject.color === 5 ? 'border-blue-500' : 'border-purple-500'
                  }`}
                  style={{
                    color: subject.color === 1 ? '#C2185B' :
                           subject.color === 2 ? '#E65100' :
                           subject.color === 3 ? '#F57F17' :
                           subject.color === 4 ? '#2E7D32' :
                           subject.color === 5 ? '#01579B' : '#6A1B9A'
                  }}
                >
                  <div className="text-5xl md:text-6xl mb-3">{subject.icon}</div>
                  <div className="text-2xl md:text-3xl font-bold mb-1" style={{ fontFamily: 'var(--font-roboto)' }}>
                    {subject.subject}
                  </div>
                  <div className="text-sm md:text-base text-gray-600 mt-2" style={{ fontFamily: 'var(--font-roboto)' }}>
                    {subject.description}
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

