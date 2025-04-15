'use client';
import React, { createContext, useState, ReactNode, useEffect } from 'react';

interface LanguageContextType {
  language: 'en' | 'id';
  setLanguage: (language: 'en' | 'id') => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'id'>(() => (localStorage.getItem('language') as 'en' | 'id') || 'en');

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
};

export default LanguageContext;
