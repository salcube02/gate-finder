"use client"
import { useTranslations } from 'next-intl';
import Image from "next/image";

const Creaator = () => {
  let t;
  try {
    t = useTranslations('listingCreator');
  } catch (error) {
    console.warn('Translation hook failed, using fallbacks:', error);
    t = (key) => {
      const fallbacks = {
        'agentName': 'Samul Williams',
        'viewMyListing': 'View My Listing',
        'phone': '(123)456-7890',
        'email': 'info@findhouse.com'
      };
      return fallbacks[key] || key;
    };
  }

  return (
    <div className="media d-flex">
      <Image
        width={90}
        height={90}
        className="me-3"
        src="/assets/images/team/lc1.png"
        alt="lc1.png"
      />
      <div className="media-body">
        <h5 className="mt-0 mb0">{t('agentName')}</h5>
        <p className="mb0">{t('phone')}</p>
        <p className="mb0">{t('email')}</p>
        <a className="text-thm" href="#">
          {t('viewMyListing')}
        </a>
      </div>
    </div>
  );
};

export default Creaator;
