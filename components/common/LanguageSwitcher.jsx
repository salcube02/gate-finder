'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const LanguageSwitcher = () => {
  const router = useRouter();
  const [currentLocale, setCurrentLocale] = useState('en');

  useEffect(() => {
    // Get the current language from localStorage or default to 'en'
    const savedLocale = localStorage.getItem('preferredLanguage') || 'en';
    setCurrentLocale(savedLocale);
    
    // Apply font class based on saved locale
    applyFontClass(savedLocale);
  }, []);

  const applyFontClass = (locale) => {
    const body = document.body;
    
    // Remove existing font classes
    body.classList.remove('arabic-font', 'english-font');
    
    // Add appropriate font class
    if (locale === 'ar') {
      body.classList.add('arabic-font');
    } else {
      body.classList.add('english-font');
    }
  };

  const handleClick = () => {
    const newLocale = currentLocale === 'en' ? 'ar' : 'en';
    
    // Save the new language preference
    localStorage.setItem('preferredLanguage', newLocale);
    setCurrentLocale(newLocale);
    
    // Apply the font class immediately
    applyFontClass(newLocale);
    
    // Get current path and replace the locale
    const currentPath = window.location.pathname;
    const pathSegments = currentPath.split('/');
    
    // Replace the locale segment (assuming it's the second segment after the first empty string)
    if (pathSegments[1] === 'en' || pathSegments[1] === 'ar') {
      pathSegments[1] = newLocale;
    } else {
      // If no locale in URL, add it
      pathSegments.splice(1, 0, newLocale);
    }
    
    const newPath = pathSegments.join('/');
    
    // Navigate to the new URL with the updated locale
    window.location.href = newPath + window.location.search + window.location.hash;
  };

  return (
    <button 
      onClick={handleClick}
      style={{
        background: '#4A9E96',
        color: 'white',
        border: 'none',
        padding: '8px 16px',
        borderRadius: '6px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '16px',
        fontWeight: '500',
        transition: 'all 0.2s ease',
        boxShadow: '0 2px 4px rgba(74, 158, 150, 0.2)'
      }}
      onMouseEnter={(e) => {
        e.target.style.background = '#4A9E96';
        e.target.style.transform = 'translateY(-1px)';
        e.target.style.boxShadow = '0 4px 8px rgba(74, 158, 150, 0.3)';
      }}
      onMouseLeave={(e) => {
        e.target.style.background = '#4A9E96';
        e.target.style.transform = 'translateY(0)';
        e.target.style.boxShadow = '0 2px 4px rgba(74, 158, 150, 0.2)';
      }}
    >
      <i className="fa fa-globe"></i>
      {currentLocale === 'ar' ? 'English' : 'العربية'}
    </button>
  );
};

export default LanguageSwitcher; 