'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Pagination from "../../common/blog/Pagination";
import Header from "../../common/header/DefaultHeader";
import MobileMenu from "../../common/header/MobileMenu";
import FilterTopBar2 from "../../common/listing/FilterTopBar2";
import GridListButton from "../../common/listing/GridListButton";
import ShowFilter from "../../common/listing/ShowFilter";
import SidebarListing2 from "../../common/listing/SidebarListing2";
import PopupSignInUp from "../../common/PopupSignInUp";
import FeaturedItem from "./FeaturedItem";
import FeaturedItemArabic from "./FeaturedItemArabic";

const index = () => {
  const t = useTranslations('listing');
  const params = useParams();
  const locale = params.locale;
  const isRTL = locale === 'ar';
  const direction = isRTL ? 'rtl' : 'ltr';

  return (
    <div dir={direction} className={isRTL ? 'arabic-font' : ''}>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {/* <!-- Listing Grid View --> */}
      <section
        id="feature-property"
        className="our-listing our-listing_map2 bgc-f7 pt0 pb0  mt85 md-mt0"
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className={`sidebar_switch mobile_style dn db-991 mt30 mb0 ${isRTL ? 'text-right' : 'text-left'}`}>
                {" "}
                <ShowFilter />
              </div>

              {/* sidebar switch */}

              <div
                className="offcanvas offcanvas-start offcanvas-listing-sidebar"
                tabIndex="-1"
                id="sidebarListing"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title">{t('advancedSearch')}</h5>
                  <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label={t('close')}
                  ></button>
                </div>
                {/* End .offcanvas-heade */}

                <div className="offcanvas-body">
                  <SidebarListing2 />
                </div>
              </div>
              {/* End mobile sidebar listing  */}
            </div>
            {/* End .col */}

            <div className={`col-xxl-4 col-xl-6 order-lg-1 order-xl-2 p0 position-relative ${isRTL ? 'order-xl-1' : 'order-xl-2'}`}>
              {/* filter switch */}

              <div className="home_two_map style2 half_map_area">
                <div className="gmap_canvas pe-none  map-canvas half_style">

                  <img
                    src="/assets/images/map.png"
                    alt="map"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                  {/* <iframe
                    title="map"
                    className="gmap_iframe"
                    src="https://www.google.com/maps/d/embed?mid=1tJl0-uRax4AKBfbh1eLPLX5WzOk&hl=en&ehbc=2E312F"
                  ></iframe> */}
                </div>
              </div>
            </div>
            {/* End .col */}

            <div className={`col-xxl-8 col-xl-6 order-lg-2 ${isRTL ? 'order-xl-2' : 'order-xl-1'}`}>
            <div className={`sidebar_switch style2 dn-991 visible-filter filter-let-top ${isRTL ? 'text-left' : 'text-right'}`}>
                <ShowFilter />
              </div>
              <div className="half_map_area_content mt30">
                
                <div className="listing_list_style listing-map-style m0 mb20">
                  <GridListButton />
                </div>
                {/* GridListButton */}

                <div className="col-md-12">
                  <div className="grid_list_search_result ">
                    <div className="row align-items-center">
                      <FilterTopBar2 />
                    </div>
                  </div>
                  {/* End .row */}

                  <div className="row">
                    {isRTL ? <FeaturedItemArabic /> : <FeaturedItem />}
                  </div>
                  {/* End .row */}

                  <div className="row">
                    <div className="col-lg-12 mt20">
                      <div className="mbp_pagination">
                        <Pagination />
                      </div>
                    </div>
                    {/* End paginaion .col */}
                  </div>
                  {/* End .row */}
                </div>
                {/* End  page conent */}
              </div>
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default index;
