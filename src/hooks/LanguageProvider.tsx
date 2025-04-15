'use client';
import React, { createContext, useState, useEffect, ReactNode } from 'react';

interface LanguageContextType {
  language: 'en' | 'id';
  setLanguage: (language: 'en' | 'id') => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'id'>('en'); // Default 'en'

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as 'en' | 'id' | null;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
};

export default LanguageContext;
