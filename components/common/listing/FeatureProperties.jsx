'use client'

import { useTranslations, useLocale } from 'next-intl';
import Image from "next/image";
import Slider from "react-slick";

const FeatureProperties = () => {
  const locale = useLocale();
  
  let t;
  try {
    t = useTranslations('featureProperties');
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

  const settings = {
    dots: true,
    arrows: false,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1000,
  };

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

  const featureProContent = getPropertiesData();

  return (
    <>
      <Slider {...settings} arrows={false}>
        {featureProContent.slice(0, 5).map((item) => (
          <div className="item" key={item.id}>
            <div className="feat_property home7">
              <div className="thumb">
                <Image
                  width={300}
                  height={220}
                  className="img-whp w-100 h-100 cover"
                  src={item.img}
                  alt="properties identity"
                />

                <div className="thmb_cntnt">
                  <ul className="tag mb0">
                    {item.saleTag.map((val, i) => (
                      <li className="list-inline-item" key={i}>
                        <a href="#">{val}</a>
                      </li>
                    ))}
                  </ul>
                  <a className="fp_price" href="#">
                    {t('pricePrefix')}{parseInt(item.price).toLocaleString()}
                    {/* <small>/mo</small> */}
                  </a>
                  <h4 className="posr color-white">{item.title}</h4>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default FeatureProperties;
