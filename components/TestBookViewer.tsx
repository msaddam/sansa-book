'use client';

import { useState, useMemo } from 'react';
import { Word, Page } from '@/lib/bookData';
import { useFontStyle } from '@/contexts/FontStyleContext';

interface TestBookViewerProps {
  pages: Page[];
}

export default function TestBookViewer({ pages }: TestBookViewerProps) {
  const { getWordStyle, getWordDisplay } = useFontStyle();
  const [mode, setMode] = useState<'preview' | 'test'>('preview');
  const [currentTestIndex, setCurrentTestIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [showResult, setShowResult] = useState(false);

  // Collect all words from all pages
  const allWords = pages.flatMap(page => page.words);
  const testWords = allWords.slice(0, 20); // Test with first 20 words
  const currentWord = testWords[currentTestIndex];
  
  // Generate random options (3 wrong + 1 correct) - regenerates for each question
  const options = useMemo(() => {
    if (!currentWord) return [];
    const wrongOptions = allWords
      .filter(w => w.word !== currentWord.word)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map(w => w.word);
    const opts = [...wrongOptions, currentWord.word].sort(() => Math.random() - 0.5);
    return opts;
  }, [currentWord, allWords]);

  const handleAnswer = (answer: string) => {
    if (selectedAnswer) return; // Already answered
    
    setSelectedAnswer(answer);
    const isCorrect = answer === currentWord.word;
    setScore(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1
    }));
  };

  const handleNext = () => {
    if (currentTestIndex < testWords.length - 1) {
      setCurrentTestIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setShowResult(true);
    }
  };

  const resetTest = () => {
    setCurrentTestIndex(0);
    setSelectedAnswer(null);
    setScore({ correct: 0, total: 0 });
    setShowResult(false);
  };

  if (mode === 'preview') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-roboto)' }}>
              📚 Test Book - Preview Mode 📚
            </h1>
            <p className="text-2xl text-white/90 mb-6">Study these words before taking the test!</p>
            <button
              onClick={() => setMode('test')}
              className="bg-white text-purple-600 px-8 py-4 rounded-full text-xl font-bold hover:scale-110 transition-transform shadow-2xl"
              style={{ fontFamily: 'var(--font-roboto)' }}
            >
              Start Test 🎯
            </button>
          </div>

          <div className="space-y-6">
            {pages.map((page, pageIndex) => (
              <div
                key={pageIndex}
                className={`page rounded-2xl shadow-2xl p-6 md:p-10 ${page.pageClass}`}
              >
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-8" style={{ fontFamily: 'var(--font-roboto)' }}>
                  {page.title}
                </h2>
                
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
                        <div className="text-sm md:text-base text-gray-600 mt-2 p-2 bg-gray-50 rounded">
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
      </div>
    );
  }

  if (showResult) {
    const percentage = Math.round((score.correct / score.total) * 100);
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 p-4 md:p-8 flex items-center justify-center">
        <div className="bg-white rounded-3xl p-8 md:p-12 max-w-2xl w-full text-center shadow-2xl">
          <div className="text-8xl mb-6">
            {percentage >= 80 ? '🎉' : percentage >= 60 ? '👍' : '📚'}
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800" style={{ fontFamily: 'var(--font-bubblegum)' }}>
            Test Complete!
          </h2>
          <div className="text-3xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-bubblegum)' }}>
            <span className="text-green-600">{score.correct}</span>
            <span className="text-gray-600"> / </span>
            <span className="text-gray-800">{score.total}</span>
          </div>
          <div className="text-2xl md:text-4xl font-bold mb-8 text-purple-600" style={{ fontFamily: 'var(--font-bubblegum)' }}>
            {percentage}% Correct!
          </div>
          <button
            onClick={resetTest}
            className="bg-purple-600 text-white px-8 py-4 rounded-full text-xl font-bold hover:scale-110 transition-transform shadow-lg"
            style={{ fontFamily: 'var(--font-bubblegum)' }}
          >
            Try Again 🔄
          </button>
          <button
            onClick={() => setMode('preview')}
            className="ml-4 bg-gray-200 text-gray-800 px-8 py-4 rounded-full text-xl font-bold hover:scale-110 transition-transform shadow-lg"
            style={{ fontFamily: 'var(--font-bubblegum)' }}
          >
            Back to Preview 📚
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 p-4 md:p-8 flex items-center justify-center">
      <div className="max-w-4xl w-full">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-8">
            <div className="text-6xl md:text-8xl mb-4">{currentWord?.icon}</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800" style={{ fontFamily: 'var(--font-bubblegum)' }}>
              What is this word?
            </h2>
            <div className="text-xl text-gray-600 mb-8">
              Question {currentTestIndex + 1} of {testWords.length}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {options.map((option, index) => {
              const isSelected = selectedAnswer === option;
              const isCorrect = option === currentWord?.word;
              const showCorrect = selectedAnswer && isCorrect;
              const showWrong = selectedAnswer && isSelected && !isCorrect;

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  disabled={!!selectedAnswer}
                  className={`p-6 rounded-2xl text-2xl md:text-3xl font-bold transition-all ${
                    showCorrect
                      ? 'bg-green-500 text-white scale-105'
                      : showWrong
                      ? 'bg-red-500 text-white scale-105'
                      : isSelected
                      ? 'bg-purple-200 text-purple-800'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  } ${selectedAnswer ? 'cursor-not-allowed' : 'hover:scale-105 cursor-pointer'}`}
                  style={getWordStyle(option)}
                >
                  {getWordDisplay(option)}
                  {showCorrect && ' ✓'}
                  {showWrong && ' ✗'}
                </button>
              );
            })}
          </div>

          {selectedAnswer && (
            <div className="text-center mb-6">
              <div className={`text-2xl font-bold mb-4 ${
                selectedAnswer === currentWord?.word ? 'text-green-600' : 'text-red-600'
              }`} style={{ fontFamily: 'var(--font-roboto)' }}>
                {selectedAnswer === currentWord?.word ? '✅ Correct!' : '❌ Try again next time!'}
              </div>
              {currentWord?.phrase && (
                <div className="text-xl text-gray-600 italic">
                  "{currentWord.phrase}"
                </div>
              )}
            </div>
          )}

          <div className="flex justify-center gap-4">
            <button
              onClick={() => setMode('preview')}
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-full text-lg font-bold hover:scale-110 transition-transform"
              style={{ fontFamily: 'var(--font-roboto)' }}
            >
              Back to Preview
            </button>
            {selectedAnswer && (
              <button
                onClick={handleNext}
                className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-bold hover:scale-110 transition-transform"
                style={{ fontFamily: 'var(--font-roboto)' }}
              >
                {currentTestIndex < testWords.length - 1 ? 'Next Question →' : 'See Results'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

