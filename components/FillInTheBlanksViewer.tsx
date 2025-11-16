'use client';

import { useState, useMemo } from 'react';
import { FillBlankPage } from '@/lib/bookData';
import { useFontStyle } from '@/contexts/FontStyleContext';

interface FillInTheBlanksViewerProps {
  pages: FillBlankPage[];
}

export default function FillInTheBlanksViewer({ pages }: FillInTheBlanksViewerProps) {
  const { getWordStyle, getWordDisplay } = useFontStyle();
  const [mode, setMode] = useState<'preview' | 'practice'>('preview');
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [currentBlankIndex, setCurrentBlankIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [showFeedback, setShowFeedback] = useState<Record<string, boolean>>({});
  const [score, setScore] = useState({ correct: 0, total: 0 });

  const currentPage = pages[currentPageIndex];
  const currentBlank = currentPage?.blanks[currentBlankIndex];
  const allBlanks = pages.flatMap(page => page.blanks);
  const currentPracticeBlank = allBlanks[currentBlankIndex];

  // Generate random options for practice mode
  const practiceOptions = useMemo(() => {
    if (!currentPracticeBlank) return [];
    return [...currentPracticeBlank.options].sort(() => Math.random() - 0.5);
  }, [currentPracticeBlank]);

  const handleAnswer = (blankKey: string, answer: string, correctWord: string) => {
    if (showFeedback[blankKey]) return; // Already answered

    setSelectedAnswers(prev => ({ ...prev, [blankKey]: answer }));
    setShowFeedback(prev => ({ ...prev, [blankKey]: true }));
    
    const isCorrect = answer.toLowerCase() === correctWord.toLowerCase();
    setScore(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1
    }));
  };

  const handleNext = () => {
    if (mode === 'preview') {
      if (currentPageIndex < pages.length - 1) {
        setCurrentPageIndex(prev => prev + 1);
      } else {
        setMode('practice');
        setCurrentPageIndex(0);
        setCurrentBlankIndex(0);
        setSelectedAnswers({});
        setShowFeedback({});
        setScore({ correct: 0, total: 0 });
      }
    } else {
      if (currentBlankIndex < allBlanks.length - 1) {
        setCurrentBlankIndex(prev => prev + 1);
      }
    }
  };

  const handlePrevious = () => {
    if (mode === 'preview') {
      if (currentPageIndex > 0) {
        setCurrentPageIndex(prev => prev - 1);
      }
    } else {
      if (currentBlankIndex > 0) {
        setCurrentBlankIndex(prev => prev - 1);
      }
    }
  };

  const resetPractice = () => {
    setCurrentBlankIndex(0);
    setSelectedAnswers({});
    setShowFeedback({});
    setScore({ correct: 0, total: 0 });
  };

  if (mode === 'preview') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 pt-20 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-bubblegum)' }}>
              ✏️ Fill in the Blanks - Preview ✏️
            </h1>
            <p className="text-2xl text-white/90 mb-6">Study these sentences before practicing!</p>
            <button
              onClick={() => {
                setMode('practice');
                setCurrentPageIndex(0);
                setCurrentBlankIndex(0);
                setSelectedAnswers({});
                setShowFeedback({});
                setScore({ correct: 0, total: 0 });
              }}
              className="bg-white text-purple-600 px-8 py-4 rounded-full text-xl font-bold hover:scale-110 transition-transform shadow-2xl"
              style={{ fontFamily: 'var(--font-roboto)' }}
            >
              Start Practice 🎯
            </button>
          </div>

          <div className="space-y-6">
            {pages.map((page, pageIdx) => (
              <div
                key={pageIdx}
                className={`page rounded-2xl shadow-2xl p-6 md:p-10 ${page.pageClass}`}
              >
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-8" style={{ fontFamily: 'var(--font-bubblegum)' }}>
                  {page.title}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {page.blanks.map((blank, blankIdx) => {
                    const blankKey = `${pageIdx}-${blankIdx}`;
                    const sentenceParts = blank.sentence.split('___');
                    const isAnswered = showFeedback[blankKey];
                    const selectedAnswer = selectedAnswers[blankKey];
                    const isCorrect = selectedAnswer?.toLowerCase() === blank.correctWord.toLowerCase();

                    return (
                      <div
                        key={blankIdx}
                        className={`bg-white rounded-xl p-6 shadow-lg border-4 ${
                          blank.color === 1 ? 'border-red-500' :
                          blank.color === 2 ? 'border-orange-500' :
                          blank.color === 3 ? 'border-yellow-500' :
                          blank.color === 4 ? 'border-green-500' :
                          blank.color === 5 ? 'border-blue-500' : 'border-purple-500'
                        }`}
                      >
                        <div className="text-5xl mb-4 text-center">{blank.icon}</div>
                        <div className="text-xl md:text-2xl font-bold mb-4 text-center" style={{ fontFamily: 'var(--font-bubblegum)' }}>
                          {sentenceParts[0]}
                          <span className={`inline-block min-w-[100px] mx-2 px-3 py-1 rounded ${
                            isAnswered
                              ? isCorrect
                                ? 'bg-green-200 text-green-800'
                                : 'bg-red-200 text-red-800'
                              : 'bg-gray-200 text-gray-600'
                          }`}>
                            {isAnswered ? selectedAnswer : '___'}
                          </span>
                          {sentenceParts[1]}
                        </div>
                        {isAnswered && (
                          <div className={`text-center text-lg font-bold ${
                            isCorrect ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {isCorrect ? '✅ Correct!' : `❌ Correct: ${getWordDisplay(blank.correctWord)}`}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Practice mode
  const blankKey = `practice-${currentBlankIndex}`;
  const isAnswered = showFeedback[blankKey];
  const selectedAnswer = selectedAnswers[blankKey];
  const isCorrect = selectedAnswer?.toLowerCase() === currentPracticeBlank?.correctWord.toLowerCase();
  const sentenceParts = currentPracticeBlank?.sentence.split('___') || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 pt-20 p-4 md:p-8 flex items-center justify-center">
      <div className="max-w-4xl w-full">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-8">
            <div className="text-6xl md:text-8xl mb-4">{currentPracticeBlank?.icon}</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800" style={{ fontFamily: 'var(--font-bubblegum)' }}>
              Fill in the Blank
            </h2>
            <div className="text-xl text-gray-600 mb-8">
              Question {currentBlankIndex + 1} of {allBlanks.length}
            </div>
            <div className="text-2xl md:text-3xl font-bold mb-6 text-gray-800" style={{ fontFamily: 'var(--font-bubblegum)' }}>
              {sentenceParts[0]}
              <span className={`inline-block min-w-[120px] mx-2 px-4 py-2 rounded ${
                isAnswered
                  ? isCorrect
                    ? 'bg-green-200 text-green-800'
                    : 'bg-red-200 text-red-800'
                  : 'bg-yellow-200 text-yellow-800 border-2 border-yellow-400'
              }`}>
                {isAnswered ? selectedAnswer : '___'}
              </span>
              {sentenceParts[1]}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {practiceOptions.map((option, index) => {
              const isSelected = selectedAnswer === option;
              const isOptionCorrect = option.toLowerCase() === currentPracticeBlank?.correctWord.toLowerCase();
              const showCorrect = isAnswered && isOptionCorrect;
              const showWrong = isAnswered && isSelected && !isOptionCorrect;

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(blankKey, option, currentPracticeBlank?.correctWord || '')}
                  disabled={isAnswered}
                  className={`p-6 rounded-2xl text-xl md:text-2xl font-bold transition-all ${
                    showCorrect
                      ? 'bg-green-500 text-white scale-105'
                      : showWrong
                      ? 'bg-red-500 text-white scale-105'
                      : isSelected
                      ? 'bg-purple-200 text-purple-800'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  } ${isAnswered ? 'cursor-not-allowed' : 'hover:scale-105 cursor-pointer'}`}
                  style={getWordStyle(option)}
                >
                  {getWordDisplay(option)}
                  {showCorrect && ' ✓'}
                  {showWrong && ' ✗'}
                </button>
              );
            })}
          </div>

          {isAnswered && (
            <div className="text-center mb-6">
              <div className={`text-2xl font-bold mb-2 ${
                isCorrect ? 'text-green-600' : 'text-red-600'
              }`} style={{ fontFamily: 'var(--font-bubblegum)' }}>
                {isCorrect ? '✅ Great job!' : '❌ Try again next time!'}
              </div>
            </div>
          )}

          <div className="flex justify-between items-center">
            <button
              onClick={() => setMode('preview')}
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-full text-lg font-bold hover:scale-110 transition-transform"
              style={{ fontFamily: 'var(--font-roboto)' }}
            >
              ← Back to Preview
            </button>
            
            <div className="text-lg font-bold text-gray-600">
              Score: {score.correct} / {score.total}
            </div>

            <div className="flex gap-2">
              <button
                onClick={handlePrevious}
                disabled={currentBlankIndex === 0}
                className="bg-gray-200 text-gray-800 px-4 py-3 rounded-full text-lg font-bold hover:scale-110 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ fontFamily: 'var(--font-roboto)' }}
              >
                ← Previous
              </button>
              {isAnswered && (
                <button
                  onClick={handleNext}
                  className="bg-purple-600 text-white px-6 py-3 rounded-full text-lg font-bold hover:scale-110 transition-transform"
                  style={{ fontFamily: 'var(--font-roboto)' }}
                >
                  {currentBlankIndex < allBlanks.length - 1 ? 'Next →' : 'Restart'}
                </button>
              )}
            </div>
          </div>

          {currentBlankIndex === allBlanks.length - 1 && isAnswered && (
            <div className="mt-8 text-center">
              <button
                onClick={resetPractice}
                className="bg-green-600 text-white px-8 py-4 rounded-full text-xl font-bold hover:scale-110 transition-transform"
                style={{ fontFamily: 'var(--font-roboto)' }}
              >
                🔄 Practice Again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

