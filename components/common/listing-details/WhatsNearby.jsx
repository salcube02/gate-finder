"use client"
import { useTranslations } from 'next-intl';
import Ratings from "../../blog-details/Ratings";

const WhatsNearby = () => {
  let t;
  try {
    t = useTranslations('whatsNearby');
  } catch (error) {
    console.warn('Translation hook failed, using fallbacks:', error);
    t = (key) => {
      const fallbacks = {
        'education': 'Education',
        'healthMedical': 'Health & Medical',
        'transportation': 'Transportation',
        'eladiasKids': "Eladia's Kids",
        'gearUpWithACLS': 'Gear Up With ACLS',
        'brooklynBrainery': 'Brooklyn Brainery',
        'miles': 'miles',
        'reviews': 'reviews'
      };
      return fallbacks[key] || key;
    };
  }

  const nearbyContent = [
    {
      id: 1,
      styleClass: "",
      title: t('education'),
      icon: "flaticon-college-graduation",
      singleItem: [
        {
          id: 1,
          name: t('eladiasKids'),
          miles: "3.13",
          totalReview: "8895",
          ratings: (
            <>
              <Ratings />
            </>
          ),
        },
        {
          id: 2,
          name: t('gearUpWithACLS'),
          miles: "4.66",
          totalReview: "7475",
          ratings: (
            <>
              <Ratings />
            </>
          ),
        },
        {
          id: 3,
          name: t('brooklynBrainery'),
          miles: "3.31",
          totalReview: "3579",
          ratings: (
            <>
              <Ratings />
            </>
          ),
        },
      ],
    },
    {
      id: 2,
      styleClass: "style2",
      title: t('healthMedical'),
      icon: "flaticon-heartbeat",
      singleItem: [
        {
          id: 1,
          name: t('eladiasKids'),
          miles: "3.13",
          totalReview: "8895",
          ratings: (
            <>
              <Ratings />
            </>
          ),
        },
        {
          id: 2,
          name: t('gearUpWithACLS'),
          miles: "4.66",
          totalReview: "7475",
          ratings: (
            <>
              <Ratings />
            </>
          ),
        },
        {
          id: 3,
          name: t('brooklynBrainery'),
          miles: "3.31",
          totalReview: "3579",
          ratings: (
            <>
              <Ratings />
            </>
          ),
        },
      ],
    },
    {
      id: 3,
      styleClass: "style3",
      title: t('transportation'),
      icon: "flaticon-front-of-bus",
      singleItem: [
        {
          id: 1,
          name: t('eladiasKids'),
          miles: "3.13",
          totalReview: "8895",
          ratings: (
            <>
              <Ratings />
            </>
          ),
        },
        {
          id: 2,
          name: t('gearUpWithACLS'),
          miles: "4.66",
          totalReview: "7475",
          ratings: (
            <>
              <Ratings />
            </>
          ),
        },
        {
          id: 3,
          name: t('brooklynBrainery'),
          miles: "3.31",
          totalReview: "3579",
          ratings: (
            <>
              <Ratings />
            </>
          ),
        },
      ],
    },
  ];

  return (
    <>
      {nearbyContent.map((item) => (
        <div
          className={`education_distance mb15 ${item.styleClass}`}
          key={item.id}
        >
          <h5>
            <span className={`${item.icon}`}></span> {item.title}
          </h5>

          {item.singleItem.map((val) => (
            <div className="single_line" key={val.id}>
              <p className="para">
                {val.name} <span>({val.miles} {t('miles')})</span>
              </p>
              <ul className="review">
                <Ratings />
                <li className="list-inline-item">
                  <span className="total_rive_count">
                    {val.totalReview} {t('reviews')}
                  </span>
                </li>
              </ul>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default WhatsNearby;
