'use client';

import { NextIntlClientProvider } from 'next-intl';
import { useEffect, useState } from 'react';

export default function IntlProvider({ locale, children }) {
  const [messages, setMessages] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadMessages = async () => {
      // Fallback to 'en' if locale is undefined
      const safeLocale = locale || 'en';
      
      try {
        const messageModule = await import(`../../messages/${safeLocale}.json`);
        setMessages(messageModule.default);
      } catch (error) {
        console.error(`Failed to load messages for locale ${safeLocale}:`, error);
        // Fallback to English if locale messages fail to load
        if (safeLocale !== 'en') {
          try {
            const fallbackModule = await import(`../../messages/en.json`);
            setMessages(fallbackModule.default);
          } catch (fallbackError) {
            console.error('Failed to load fallback messages:', fallbackError);
          }
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadMessages();
  }, [locale]);

  if (isLoading) {
    const safeLocale = locale || 'en';
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontFamily: safeLocale === 'ar' ? 'Tajawal, sans-serif' : 'Poppins, sans-serif',
        direction: safeLocale === 'ar' ? 'rtl' : 'ltr'
      }}>
        <div>{safeLocale === 'ar' ? 'جاري التحميل...' : 'Loading...'}</div>
      </div>
    );
  }

  const safeLocale = locale || 'en';
  
  return (
    <NextIntlClientProvider locale={safeLocale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
} 