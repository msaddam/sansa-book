'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type FontStyle = 'normal' | 'cursive' | 'capital' | 'small';

interface FontStyleContextType {
  fontStyle: FontStyle;
  setFontStyle: (style: FontStyle) => void;
  getWordStyle: (word: string) => { fontFamily: string; textTransform?: string };
  getWordDisplay: (word: string) => string;
}

const FontStyleContext = createContext<FontStyleContextType | undefined>(undefined);

export function FontStyleProvider({ children }: { children: ReactNode }) {
  const [fontStyle, setFontStyle] = useState<FontStyle>('normal');

  const getWordStyle = (word: string) => {
    switch (fontStyle) {
      case 'cursive':
        return { fontFamily: 'var(--font-style-script)' };
      case 'capital':
        return { fontFamily: 'var(--font-roboto)', textTransform: 'uppercase' };
      case 'small':
        return { fontFamily: 'var(--font-roboto)', textTransform: 'lowercase' };
      default:
        return { fontFamily: 'var(--font-roboto)' };
    }
  };

  const getWordDisplay = (word: string) => {
    switch (fontStyle) {
      case 'capital':
        return word.toUpperCase();
      case 'small':
        return word.toLowerCase();
      default:
        return word;
    }
  };

  return (
    <FontStyleContext.Provider value={{ fontStyle, setFontStyle, getWordStyle, getWordDisplay }}>
      {children}
    </FontStyleContext.Provider>
  );
}

export function useFontStyle() {
  const context = useContext(FontStyleContext);
  if (context === undefined) {
    throw new Error('useFontStyle must be used within a FontStyleProvider');
  }
  return context;
}

