'use client';

import { useTranslations } from 'next-intl';

const WhyChoose = ({ style = "" }) => {
  const t = useTranslations('home');

  const whyCooseContent = [
    {
      id: 1,
      icon: "flaticon-high-five",
      title: t('trustedByThousands'),
      descriptions: t('trustedByThousandsDesc'),
    },
    {
      id: 2,
      icon: "flaticon-home-1",
      title: t('wideRangeOfProperties'),
      descriptions: t('wideRangeOfPropertiesDesc'),
    },
    {
      id: 3,
      icon: "flaticon-profit",
      title: t('financingMadeEasy'),
      descriptions: t('financingMadeEasyDesc'),
    },
  ];

  return (
    <>
      {whyCooseContent.map((item) => (
        <div className="col-md-6 col-lg-4 col-xl-4" key={item.id}>
          <div className={`why_chose_us ${style}`}>
            <div className="icon">
              <span className={item.icon}></span>
            </div>
            <div className="details">
              <h4>{item.title}</h4>
              <p>{item.descriptions}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default WhyChoose;
