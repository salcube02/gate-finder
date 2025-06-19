"use client"
import { useTranslations, useLocale } from 'next-intl';
import Link from "next/link";
import Image from "next/image";

const FeaturedListings = () => {
  const locale = useLocale();
  
  let t;
  try {
    t = useTranslations('featuredListings');
  } catch (error) {
    console.warn('Translation hook failed, using fallbacks:', error);
    t = (key) => {
      const fallbacks = {
        'pricePrefix': '$',
        'loading': 'Loading...'
      };
      return fallbacks[key] || key;
    };
  }

  // Load appropriate data based on locale
  const getPropertiesData = () => {
    try {
      if (locale === 'ar') {
        return require("../../../data/properties-ar");
      } else {
        return require("../../../data/properties");
      }
    } catch (error) {
      console.error('Error loading properties data:', error);
      return [];
    }
  };

  const featureContent = getPropertiesData();

  return (
    <>
      {featureContent.slice(27, 30).map((item) => (
        <div className="media d-flex" key={item.id}>
          <Link href={`/${locale}/listing-details-v1/${item.id}`}>
            <Image
              width={102}
              height={80}
              className="align-self-start me-3 w-100 h-100 cover"
              src={item.img}
              alt="featured listing image"
            />
          </Link>

          <div className="media-body">
            <h5 className="mt-0 post_title">
              <Link href={`/${locale}/listing-details-v1/${item.id}`}>{item.title}</Link>
            </h5>
            <Link href={`/${locale}/listing-details-v1/${item.id}`}>
              {t('pricePrefix')}{parseInt(item.price).toLocaleString()}
              {/* /<small>/mo</small> */}
            </Link>

            <ul className="mb0">
              {item.itemDetails.map((val, i) => (
                <li key={i} className="list-inline-item">
                  {val.name}:{val.number} &nbsp;
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default FeaturedListings;
