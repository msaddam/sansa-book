'use client';

import { useState, useMemo } from 'react';
import { FillLetterPage } from '@/lib/bookData';
import { useFontStyle } from '@/contexts/FontStyleContext';

interface FillLetterViewerProps {
  pages: FillLetterPage[];
}

export default function FillLetterViewer({ pages }: FillLetterViewerProps) {
  const { getWordStyle, getWordDisplay } = useFontStyle();
  const [mode, setMode] = useState<'preview' | 'practice'>('preview');
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [showFeedback, setShowFeedback] = useState<Record<string, boolean>>({});
  const [score, setScore] = useState({ correct: 0, total: 0 });

  const currentPage = pages[currentPageIndex];
  const currentLetter = currentPage?.letters[currentLetterIndex];
  const allLetters = pages.flatMap(page => page.letters);
  const currentPracticeLetter = allLetters[currentLetterIndex];

  // Generate random options for practice mode
  const practiceOptions = useMemo(() => {
    if (!currentPracticeLetter) return [];
    return [...currentPracticeLetter.options].sort(() => Math.random() - 0.5);
  }, [currentPracticeLetter]);

  const handleAnswer = (letterKey: string, answer: string, correctLetter: string) => {
    if (showFeedback[letterKey]) return; // Already answered

    setSelectedAnswers(prev => ({ ...prev, [letterKey]: answer }));
    setShowFeedback(prev => ({ ...prev, [letterKey]: true }));
    
    const isCorrect = answer.toUpperCase() === correctLetter.toUpperCase();
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
        setCurrentLetterIndex(0);
        setSelectedAnswers({});
        setShowFeedback({});
        setScore({ correct: 0, total: 0 });
      }
    } else {
      if (currentLetterIndex < allLetters.length - 1) {
        setCurrentLetterIndex(prev => prev + 1);
      }
    }
  };

  const handlePrevious = () => {
    if (mode === 'preview') {
      if (currentPageIndex > 0) {
        setCurrentPageIndex(prev => prev - 1);
      }
    } else {
      if (currentLetterIndex > 0) {
        setCurrentLetterIndex(prev => prev - 1);
      }
    }
  };

  const resetPractice = () => {
    setCurrentLetterIndex(0);
    setSelectedAnswers({});
    setShowFeedback({});
    setScore({ correct: 0, total: 0 });
  };

  // Helper function to display word with selected letter
  const displayWord = (wordWithBlank: string, selectedLetter: string | null) => {
    if (!selectedLetter) return wordWithBlank;
    return wordWithBlank.replace('_', selectedLetter);
  };

  if (mode === 'preview') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 pt-20 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-bubblegum)' }}>
              🔤 Fill the Letter - Preview 🔤
            </h1>
            <p className="text-2xl text-white/90 mb-6">Study these words before practicing!</p>
            <button
              onClick={() => {
                setMode('practice');
                setCurrentPageIndex(0);
                setCurrentLetterIndex(0);
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
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                  {page.letters.map((letter, letterIdx) => {
                    const letterKey = `${pageIdx}-${letterIdx}`;
                    const isAnswered = showFeedback[letterKey];
                    const selectedAnswer = selectedAnswers[letterKey];
                    const isCorrect = selectedAnswer?.toUpperCase() === letter.missingLetter.toUpperCase();

                    return (
                      <div
                        key={letterIdx}
                        className={`bg-white rounded-xl p-6 shadow-lg border-4 text-center ${
                          letter.color === 1 ? 'border-red-500' :
                          letter.color === 2 ? 'border-orange-500' :
                          letter.color === 3 ? 'border-yellow-500' :
                          letter.color === 4 ? 'border-green-500' :
                          letter.color === 5 ? 'border-blue-500' : 'border-purple-500'
                        }`}
                      >
                        <div className="text-5xl mb-4">{letter.icon}</div>
                        <div className="text-3xl md:text-4xl font-bold mb-2" style={getWordStyle(displayWord(letter.wordWithBlank, selectedAnswer || null))}>
                          {getWordDisplay(displayWord(letter.wordWithBlank, selectedAnswer || null))}
                        </div>
                        {isAnswered && (
                          <div className={`text-lg font-bold ${
                            isCorrect ? 'text-green-600' : 'text-red-600'
                          }`} style={getWordStyle(letter.correctWord)}>
                            {isCorrect ? '✅' : `❌ ${getWordDisplay(letter.correctWord)}`}
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
  const letterKey = `practice-${currentLetterIndex}`;
  const isAnswered = showFeedback[letterKey];
  const selectedAnswer = selectedAnswers[letterKey];
  const isCorrect = selectedAnswer?.toUpperCase() === currentPracticeLetter?.missingLetter.toUpperCase();
  const displayedWord = displayWord(currentPracticeLetter?.wordWithBlank || '', selectedAnswer || null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 pt-20 p-4 md:p-8 flex items-center justify-center">
      <div className="max-w-4xl w-full">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-8">
            <div className="text-6xl md:text-8xl mb-4">{currentPracticeLetter?.icon}</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800" style={{ fontFamily: 'var(--font-bubblegum)' }}>
              Fill the Missing Letter
            </h2>
            <div className="text-xl text-gray-600 mb-8">
              Question {currentLetterIndex + 1} of {allLetters.length}
            </div>
            <div className="text-5xl md:text-7xl font-bold mb-6 text-gray-800" style={getWordStyle(displayedWord)}>
              {getWordDisplay(displayedWord)}
            </div>
            {isAnswered && currentPracticeLetter && (
              <div className="text-2xl md:text-3xl font-bold mb-2" style={getWordStyle(currentPracticeLetter.correctWord)}>
                {getWordDisplay(currentPracticeLetter.correctWord)}
              </div>
            )}
          </div>

          <div className="grid grid-cols-4 gap-4 mb-8">
            {practiceOptions.map((option, index) => {
              const isSelected = selectedAnswer === option;
              const isOptionCorrect = option.toUpperCase() === currentPracticeLetter?.missingLetter.toUpperCase();
              const showCorrect = isAnswered && isOptionCorrect;
              const showWrong = isAnswered && isSelected && !isOptionCorrect;

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(letterKey, option, currentPracticeLetter?.missingLetter || '')}
                  disabled={isAnswered}
                  className={`p-6 rounded-2xl text-3xl md:text-4xl font-bold transition-all ${
                    showCorrect
                      ? 'bg-green-500 text-white scale-105'
                      : showWrong
                      ? 'bg-red-500 text-white scale-105'
                      : isSelected
                      ? 'bg-purple-200 text-purple-800'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  } ${isAnswered ? 'cursor-not-allowed' : 'hover:scale-105 cursor-pointer'}`}
                  style={{ fontFamily: 'var(--font-roboto)' }}
                >
                  {option}
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
                disabled={currentLetterIndex === 0}
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
                  {currentLetterIndex < allLetters.length - 1 ? 'Next →' : 'Restart'}
                </button>
              )}
            </div>
          </div>

          {currentLetterIndex === allLetters.length - 1 && isAnswered && (
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

