'use client'

import { useTranslations } from 'next-intl';

const Activities = () => {
  const t = useTranslations('dashboard');

  return (
    <>
      <div className="grid">
        <ul>
          <li className="list-inline-item">
            <div className="icon">
              <span className="flaticon-home"></span>
            </div>
          </li>
          {/* End li */}

          <li className="list-inline-item">
            <p>
              {t('yourListingApproved', { listingName: t('luxuryFamilyHome') })}
            </p>
          </li>
        </ul>
      </div>
      {/* End .grid */}

      <div className="grid">
        <ul>
          <li className="list-inline-item">
            <div className="icon">
              <span className="flaticon-chat"></span>
            </div>
          </li>
          {/* End li */}

          <li className="list-inline-item">
            <p>
              {t('userLeftReview', { userName: t('kathyBrown'), listingName: t('renovatedApartment') })}
            </p>
          </li>
        </ul>
      </div>
      {/* End .grid */}

      <div className="grid">
        <ul>
          <li className="list-inline-item">
            <div className="icon">
              <span className="flaticon-heart"></span>
            </div>
          </li>
          {/* End li */}

          <li className="list-inline-item">
            <p>
              {t('someoneFavoritedListing', { listingName: t('gorgeousVillaBayView') })}
            </p>
          </li>
        </ul>
      </div>
      {/* End .grid */}

      <div className="grid">
        <ul>
          <li className="list-inline-item">
            <div className="icon">
              <span className="flaticon-home"></span>
            </div>
          </li>
          {/* End li */}

          <li className="list-inline-item">
            <p>
              {t('yourListingApproved', { listingName: t('luxuryFamilyHome') })}
            </p>
          </li>
        </ul>
      </div>
      {/* End .grid */}

      <div className="grid">
        <ul>
          <li className="list-inline-item">
            <div className="icon">
              <span className="flaticon-chat"></span>
            </div>
          </li>
          {/* End li */}

          <li className="list-inline-item">
            <p>
              {t('userLeftReview', { userName: t('kathyBrown'), listingName: t('renovatedApartment') })}
            </p>
          </li>
        </ul>
      </div>
      {/* End .grid */}

      <div className="grid mb0">
        <ul className="pb0 mb0 bb_none">
          <li className="list-inline-item">
            <div className="icon">
              <span className="flaticon-heart"></span>
            </div>
          </li>
          {/* End li */}

          <li className="list-inline-item">
            <p>
              {t('someoneFavoritedListing', { listingName: `${t('gorgeousVillaBay')} View` })}
            </p>
          </li>
        </ul>
      </div>
      {/* End .grid */}
    </>
  );
};

export default Activities;
