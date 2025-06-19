"use client"
import { useTranslations, useLocale } from 'next-intl';

const AdditionalDetails = () => {
  const locale = useLocale();
  
  let t;
  try {
    t = useTranslations('additionalDetails');
  } catch (error) {
    console.warn('Translation hook failed, using fallbacks:', error);
    t = (key) => {
      const fallbacks = {
        'deposit': 'Deposit',
        'poolSize': 'Pool Size',
        'additionalRooms': 'Additional Rooms',
        'lastRemodelYear': 'Last remodel year',
        'amenities': 'Amenities',
        'equipment': 'Equipment',
        'guestBath': 'Guest Bath',
        'clubhouse': 'Clubhouse',
        'grillGas': 'Grill - Gas'
      };
      return fallbacks[key] || key;
    };
  }

  // Helper function to format area with proper unit
  const formatArea = (value) => {
    return locale === 'ar' ? `${value} قدم مربع` : `${value} Sqft`;
  };

  // Helper function to format percentage
  const formatPercentage = (value) => {
    return locale === 'ar' ? `%${value}` : `${value}%`;
  };

  return (
    <>
      <div className="col-md-6 col-lg-6">
        <ul className="list-inline-item">
          <li>
            <p>
              {t('deposit')} : <span>{formatPercentage('20')}</span>
            </p>
          </li>
          <li>
            <p>
              {t('poolSize')} : <span>{formatArea('300')}</span>
            </p>
          </li>
          <li>
            <p>
              {t('additionalRooms')} : <span>{t('guestBath')}</span>
            </p>
          </li>
        </ul>
      </div>
      <div className="col-md-6 col-lg-6">
        <ul className="list-inline-item">
          <li>
            <p>
              {t('lastRemodelYear')} : <span>1987</span>
            </p>
          </li>
          <li>
            <p>
              {t('amenities')} : <span>{t('clubhouse')}</span>
            </p>
          </li>
          <li>
            <p>
              {t('equipment')} : <span>{t('grillGas')}</span>
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AdditionalDetails;
