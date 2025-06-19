import "../../public/assets/scss/index.scss";
import "../../public/assets/scss/rtl.scss";
import "../../public/assets/scss/mobile-rtl-fix.css";
import "rc-slider/assets/index.css";
import ClientLayout from "@/components/layout/ClientLayout";

const locales = ['en', 'ar'];

export const metadata = {
  title: "Key Finder",
  description: "Key Finder",
};

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) {
    return <div>Invalid locale</div>;
  }

  const isRTL = locale === 'ar';
  const direction = isRTL ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={direction}>
      <head>
        {/* Fonts for both languages */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
        />
        {/* Arabic font - Tajawal is a good choice for Arabic web content */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          integrity="sha512-SfTiTlX6kk+qitfevl/7LibUOeJWlt9rbyDn92a1DqWOw9vWG2MFoays0sgObmWazO5BQPiFucnnEAjpAB+/Sw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="icon" href="/assets/images/favicon.ico" />
      </head>
      <body className={isRTL ? 'rtl' : 'ltr'}>
        <ClientLayout locale={locale}>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
