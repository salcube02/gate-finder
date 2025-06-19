"use client";

import { useEffect } from "react";
import IntlProvider from '@/components/providers/IntlProvider';
import ScrollToTop from "@/components/common/ScrollTop";

export default function LocaleLayoutClient({ locale, children }) {
  const isRTL = locale === 'ar';
  const direction = isRTL ? 'rtl' : 'ltr';

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("bootstrap/dist/js/bootstrap");
    }
  }, []);

  // Set document direction and language dynamically
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.dir = direction;
      document.documentElement.lang = locale;
    }
  }, [direction, locale]);

  return (
    <IntlProvider locale={locale}>
      {children}
      <ScrollToTop />
    </IntlProvider>
  );
} 