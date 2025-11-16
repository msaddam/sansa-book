'use client';

import { useState } from 'react';
import { additionData, AdditionPage } from '@/lib/mathData';

interface AdditionViewerProps {
  data?: AdditionPage[];
}

export default function AdditionViewer({ data }: AdditionViewerProps) {
  const pages = data || additionData;
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: number | null }>({});

  const handleAnswer = (pageIndex: number, problemIndex: number, answer: number) => {
    const key = `${pageIndex}-${problemIndex}`;
    setSelectedAnswers({ ...selectedAnswers, [key]: answer });
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
                const isCorrect = selected === problem.answer;
                const options = [
                  problem.answer,
                  problem.answer - 1,
                  problem.answer + 1,
                  problem.answer - 2,
                  problem.answer + 2
                ].filter(n => n > 0).sort(() => Math.random() - 0.5).slice(0, 4);

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
                    <div className="text-center">
                      <div className="text-5xl mb-4">{problem.icon}</div>
                      <div className="text-4xl font-bold mb-6" style={{ fontFamily: 'var(--font-roboto)' }}>
                        {problem.num1} + {problem.num2} = ?
                      </div>
                      <div className="flex flex-wrap gap-3 justify-center mb-4">
                        {options.map((option) => (
                          <button
                            key={option}
                            onClick={() => handleAnswer(pageIndex, problemIndex, option)}
                            className={`px-6 py-3 rounded-lg font-bold text-xl transition-colors ${
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
                        <div className={`text-xl font-bold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                          {isCorrect ? '✅ Correct!' : `❌ Answer: ${problem.answer}`}
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

