// Middleware disabled - language switching handled client-side
export default function middleware(request) {
  // No locale routing - everything handled at root level
  return;
}

export const config = {
  // Only match specific paths if needed
  matcher: []
}; 




// import createMiddleware from 'next-intl/middleware';

// export default createMiddleware({
//   // A list of all locales that are supported
//   locales: ['en', 'ar'],

//   // Used when no locale matches
//   defaultLocale: 'en',

//   // Show locale in URL only when needed (not for default locale home page)
//   localePrefix: 'as-needed'
// });

// export const config = {
//   // Match internationalized pathnames, but exclude the root path for the default locale
//   matcher: [
//     // Match all pathnames except for
//     // - api routes
//     // - _next (Next.js internals)
//     // - static files
//     '/((?!api|_next|_vercel|.*\\..*).*)',
//   ]
// }; 