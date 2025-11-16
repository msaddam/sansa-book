'use client';

import { useState } from 'react';
import { missingNumbersData, MissingNumberPage } from '@/lib/mathData';

interface MissingNumbersViewerProps {
  data?: MissingNumberPage[];
}

export default function MissingNumbersViewer({ data }: MissingNumbersViewerProps) {
  const pages = data || missingNumbersData;
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: number | null }>({});

  const handleAnswer = (pageIndex: number, problemIndex: number, answer: number) => {
    const key = `${pageIndex}-${problemIndex}`;
    setSelectedAnswers({ ...selectedAnswers, [key]: answer });
  };

  const getCorrectAnswer = (problem: { sequence: number[]; missingIndex: number }) => {
    const seq = problem.sequence;
    if (problem.missingIndex === 0) {
      return seq[1] - (seq[2] - seq[1]);
    } else if (problem.missingIndex === seq.length - 1) {
      return seq[seq.length - 2] + (seq[seq.length - 2] - seq[seq.length - 3]);
    } else {
      const diff = seq[problem.missingIndex + 1] - seq[problem.missingIndex - 1];
      return seq[problem.missingIndex - 1] + diff / 2;
    }
  };

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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {page.problems.map((problem, problemIndex) => {
                const key = `${pageIndex}-${problemIndex}`;
                const selected = selectedAnswers[key];
                const correct = getCorrectAnswer(problem);
                const isCorrect = selected === correct;
                const displaySequence = problem.sequence.map((num, idx) => 
                  idx === problem.missingIndex ? '?' : num
                );

                return (
                  <div
                    key={problemIndex}
                    className={`word-card bg-white rounded-xl p-6 shadow-lg border-4 ${
                      problem.color === 1 ? 'border-red-500' :
                      problem.color === 2 ? 'border-orange-500' :
                      problem.color === 3 ? 'border-yellow-500' :
                      problem.color === 4 ? 'border-green-500' :
                      problem.color === 5 ? 'border-blue-500' : 'border-purple-500'
                    }`}
                  >
                    <div className="text-center mb-4">
                      <div className="text-5xl mb-3">{problem.icon}</div>
                      <div className="text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-roboto)' }}>
                        {displaySequence.join('  ')}
                      </div>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {[correct - 2, correct - 1, correct, correct + 1, correct + 2]
                          .filter(n => n > 0)
                          .map((option) => (
                            <button
                              key={option}
                              onClick={() => handleAnswer(pageIndex, problemIndex, option)}
                              className={`px-4 py-2 rounded-lg font-bold text-lg transition-colors ${
                                selected === option
                                  ? isCorrect
                                    ? 'bg-green-500 text-white'
                                    : 'bg-red-500 text-white'
                                  : 'bg-gray-200 hover:bg-gray-300'
                              }`}
                              style={{ fontFamily: 'var(--font-roboto)' }}
                            >
                              {option}
                            </button>
                          ))}
                      </div>
                      {selected !== null && (
                        <div className={`mt-3 text-lg font-bold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                          {isCorrect ? '✅ Correct!' : `❌ Answer: ${correct}`}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

