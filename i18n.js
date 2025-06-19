import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  // Fallback to 'en' if locale is undefined
  const safeLocale = locale || 'en';
  
  try {
    return {
      messages: (await import(`./messages/${safeLocale}.json`)).default
    };
  } catch (error) {
    console.error(`Failed to load messages for locale ${safeLocale}:`, error);
    // Fallback to English messages if the requested locale fails
    return {
      messages: (await import(`./messages/en.json`)).default
    };
  }
}); 