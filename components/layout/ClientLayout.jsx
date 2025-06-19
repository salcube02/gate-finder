'use client';

import { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import ScrollToTop from "@/components/common/ScrollTop";
import IntlProvider from '@/components/providers/IntlProvider';
import FontManager from '@/components/common/FontManager';

export default function ClientLayout({ locale, children }) {
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
    <Provider store={store}>
      <IntlProvider locale={locale}>
        <FontManager locale={locale} />
        {children}
        <ScrollToTop />
      </IntlProvider>
    </Provider>
  );
} 