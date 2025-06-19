"use client"
import { useTranslations, useLocale } from 'next-intl';

const Categorie = () => {
  const locale = useLocale();
  
  let t;
  try {
    t = useTranslations('categories');
  } catch (error) {
    console.warn('Translation hook failed, using fallbacks:', error);
    t = (key) => {
      const fallbacks = {
        'apartment': 'Apartment',
        'condo': 'Condo',
        'familyHouse': 'Family House',
        'modernVilla': 'Modern Villa',
        'townHouse': 'Town House',
        'properties': 'properties'
      };
      return fallbacks[key] || key;
    };
  }

  return (
    <>
      <li>
        <a href="#" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            {locale === 'ar' ? (
              <>
                {t('apartment')}
                <i className="fa fa-caret-left ml10" style={{ order: -1 }}></i>
              </>
            ) : (
              <>
                <i className="fa fa-caret-right mr10"></i>
                {t('apartment')}
              </>
            )}
          </span>
          <span className={locale === 'ar' ? 'float-start' : 'float-end'}>6 {t('properties')}</span>
        </a>
      </li>
      {/* End li */}

      <li>
        <a href="#" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            {locale === 'ar' ? (
              <>
                {t('condo')}
                <i className="fa fa-caret-left ml10" style={{ order: -1 }}></i>
              </>
            ) : (
              <>
                <i className="fa fa-caret-right mr10"></i>
                {t('condo')}
              </>
            )}
          </span>
          <span className={locale === 'ar' ? 'float-start' : 'float-end'}>12 {t('properties')}</span>
        </a>
      </li>
      {/* End li */}

      <li>
        <a href="#" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            {locale === 'ar' ? (
              <>
                {t('familyHouse')}
                <i className="fa fa-caret-left ml10" style={{ order: -1 }}></i>
              </>
            ) : (
              <>
                <i className="fa fa-caret-right mr10"></i>
                {t('familyHouse')}
              </>
            )}
          </span>
          <span className={locale === 'ar' ? 'float-start' : 'float-end'}>8 {t('properties')}</span>
        </a>
      </li>
      {/* End li */}

      <li>
        <a href="#" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            {locale === 'ar' ? (
              <>
                {t('modernVilla')}
                <i className="fa fa-caret-left ml10" style={{ order: -1 }}></i>
              </>
            ) : (
              <>
                <i className="fa fa-caret-right mr10"></i>
                {t('modernVilla')}
              </>
            )}
          </span>
          <span className={locale === 'ar' ? 'float-start' : 'float-end'}>26 {t('properties')}</span>
        </a>
      </li>
      {/* End li */}

      <li>
        <a href="#" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            {locale === 'ar' ? (
              <>
                {t('townHouse')}
                <i className="fa fa-caret-left ml10" style={{ order: -1 }}></i>
              </>
            ) : (
              <>
                <i className="fa fa-caret-right mr10"></i>
                {t('townHouse')}
              </>
            )}
          </span>
          <span className={locale === 'ar' ? 'float-start' : 'float-end'}>89 {t('properties')}</span>
        </a>
      </li>
    </>
  );
};

export default Categorie;
