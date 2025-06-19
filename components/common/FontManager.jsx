'use client';

import { useEffect } from 'react';

const FontManager = ({ locale }) => {
  useEffect(() => {
    const applyFontClass = (selectedLocale) => {
      const body = document.body;
      
      // Remove existing font classes
      body.classList.remove('arabic-font', 'english-font');
      
      // Add appropriate font class
      if (selectedLocale === 'ar') {
        body.classList.add('arabic-font');
      } else {
        body.classList.add('english-font');
      }
    };

    // Apply font class based on current locale
    if (locale) {
      applyFontClass(locale);
    } else {
      // Fallback: check localStorage if locale is not provided
      const savedLocale = localStorage.getItem('preferredLanguage') || 'en';
      applyFontClass(savedLocale);
    }
  }, [locale]);

  // This component doesn't render anything
  return null;
};

export default FontManager; 