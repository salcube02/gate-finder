"use client"
import Image from "next/image";
import { useTranslations } from 'next-intl';

const WalkScore = () => {
  let t;
  try {
    t = useTranslations('walkScore');
  } catch (error) {
    console.warn('Translation hook failed, using fallbacks:', error);
    t = (key) => {
      const fallbacks = {
        'walkscore': 'Walkscore',
        'walkScore': 'Walk Score',
        'bikeScore': 'Bike Score',
        'somewhatWalkable': 'Somewhat Walkable',
        'bikeable': 'Bikeable',
        'moreDetailsHere': 'More Details Here'
      };
      return fallbacks[key] || key;
    };
  }

  return (
    <>
      <h4 className="mb30">
        {t('walkscore')}{" "}
        <span className="float-end">
          <Image
            width={117}
            height={19}
            src="/assets/images/resource/wscore.png"
            alt="wscore.png"
          />
        </span>
      </h4>
      <div className="iba_container">
        <div className="icon_box_area">
          <div className="score">
            <span>70</span>
          </div>
          <div className="details">
            <h5>{t('walkScore')}</h5>
            <p>{t('somewhatWalkable')}</p>
          </div>
        </div>
        <div className="icon_box_area">
          <div className="score">
            <span>40</span>
          </div>
          <div className="details">
            <h5>{t('bikeScore')}</h5>
            <p>{t('bikeable')}</p>
          </div>
        </div>
      </div>
      <a className="more_info" href="#">
        {t('moreDetailsHere')}
      </a>
    </>
  );
};

export default WalkScore;
