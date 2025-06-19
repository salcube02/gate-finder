# Arabic Language Support Setup

This project now includes full Arabic language support with RTL (Right-to-Left) layout. Here's what has been implemented:

## 🌐 Features Implemented

### 1. Internationalization (i18n)
- **Framework**: Next.js 13+ App Router with `next-intl`
- **Supported Languages**: English (en), Arabic (ar)
- **Default Language**: English
- **URL Structure**: `/en/...` and `/ar/...`

### 2. RTL Layout Support
- **Direction**: Automatic RTL for Arabic, LTR for English
- **Fonts**: 
  - English: Poppins (Google Fonts)
  - Arabic: Tajawal (Google Fonts) - optimized for web readability
- **CSS**: Custom RTL styles for proper Arabic layout

### 3. Translation Coverage
- Navigation menu
- Home page content
- Common UI elements
- Footer content
- Authentication forms
- Error messages

## 🚀 How to Use

### Accessing the Website
- **English**: `http://localhost:3000/en`
- **Arabic**: `http://localhost:3000/ar`
- **Auto-redirect**: `http://localhost:3000` redirects to `/en`

### Language Switcher
A language switcher is available in the header that allows users to:
- Switch between English and Arabic
- Maintain the current page route
- See visual flag indicators

### Adding New Translations

1. **Add to English** (`messages/en.json`):
```json
{
  "newSection": {
    "title": "New Title",
    "description": "New Description"
  }
}
```

2. **Add to Arabic** (`messages/ar.json`):
```json
{
  "newSection": {
    "title": "عنوان جديد",
    "description": "وصف جديد"
  }
}
```

3. **Use in Components**:
```jsx
import { useTranslations } from 'next-intl';

function MyComponent() {
  const t = useTranslations();
  
  return (
    <div>
      <h1>{t('newSection.title')}</h1>
      <p>{t('newSection.description')}</p>
    </div>
  );
}
```

## 🎨 RTL Styling

### Automatic RTL Features
- Text alignment
- Float directions
- Padding/margin adjustments
- Navigation menu positioning
- Form input directions
- Button icon positioning

### Custom RTL Styles
All RTL styles are in `public/assets/scss/rtl.scss` and include:
- Bootstrap utility class adjustments
- Component-specific RTL fixes
- Arabic font application
- Navigation and dropdown positioning

## 📁 File Structure Changes

```
app/
├── [locale]/              # Locale-based routing
│   ├── layout.jsx         # Locale-specific layout
│   ├── page.jsx           # Home page
│   └── (routes)/          # All existing routes moved here
├── layout.jsx             # Root layout (redirects)
components/
├── common/
│   └── LanguageSwitcher.jsx   # Language switching component
└── providers/
    └── IntlProvider.jsx       # Translation provider
messages/
├── en.json                # English translations
└── ar.json                # Arabic translations
public/assets/
├── images/flags/          # Flag icons for language switcher
└── scss/
    └── rtl.scss           # RTL-specific styles
```

## 🛠 Technical Details

### Middleware Configuration
- Handles locale detection and routing
- Supports both `/en` and `/ar` prefixes
- Automatic redirects for root path

### Dynamic Font Loading
- Poppins for English content
- Tajawal for Arabic content (better readability than Arial)
- Fallback fonts included

### Performance Optimizations
- Translation files loaded dynamically
- Loading states with localized text
- Fallback to English if Arabic fails to load

## 🔧 Development Tips

### Testing RTL Layout
1. Visit `/ar` route
2. Check text alignment (should be right-aligned)
3. Verify navigation positioning
4. Test form inputs and buttons
5. Confirm dropdown menus open correctly

### Adding New Pages
When creating new pages, ensure:
1. Place them in `app/[locale]/` directory
2. Use `useTranslations()` hook for text
3. Add translations to both language files
4. Test both LTR and RTL layouts

### Common RTL Issues & Solutions
- **Text not right-aligned**: Add `text-align: right` in RTL styles
- **Icons mispositioned**: Adjust margins in `[dir="rtl"]` selectors
- **Dropdowns wrong position**: Use `left: auto; right: 0` for RTL

## 🌟 Best Practices

1. **Always test both languages** when adding new features
2. **Use translation keys** instead of hardcoded text
3. **Consider Arabic text length** (usually longer than English)
4. **Test navigation and interactions** in RTL mode
5. **Use semantic HTML** for better accessibility

## 📚 Resources

- [Next.js Internationalization](https://next-intl-docs.vercel.app/)
- [RTL CSS Guidelines](https://rtlcss.com/)
- [Arabic Typography Best Practices](https://www.smashingmagazine.com/2010/09/arabic-typography/)
- [Tajawal Font Documentation](https://fonts.google.com/specimen/Tajawal)

## 🐛 Troubleshooting

### Common Issues:
1. **Translations not loading**: Check file paths in `messages/` folder
2. **RTL styles not applied**: Verify `rtl.scss` import in layout
3. **Language switcher not working**: Check routing configuration
4. **Arabic text displaying as squares**: Ensure Tajawal font is loaded

### Debug Steps:
1. Check browser console for errors
2. Verify locale parameter in URL
3. Test translation keys in browser dev tools
4. Confirm font loading in Network tab 