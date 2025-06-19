'use client'

import { useTranslations } from 'next-intl';

const ShowFilter = () => {
  const t = useTranslations('listing');

  return (
    <div id="main2" data-bs-toggle="offcanvas" data-bs-target="#sidebarListing">
      <span
        id="open2"
        style={{zIndex: 6}}
        className="flaticon-filter-results-button filter_open_btn style2"
      >
        {t('showFilter')}
      </span>
    </div>
  );
};

export default ShowFilter;
