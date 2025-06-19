'use client'

import { useTranslations } from 'next-intl';
import { useDispatch } from "react-redux";
import {
  addKeyword,
  addLocation,
} from "../../features/properties/propertiesSlice";
import PricingRangeSlider from "./PricingRangeSlider";
import CheckBoxFilter from "./CheckBoxFilter";
import GlobalSelectBox from "./GlobalSelectBox";
import { useRouter } from "next/navigation";
import { useState, useEffect } from 'react';

const GlobalFilter = ({ className = "" }) => {
  const t = useTranslations('common');
  const dispatch = useDispatch();
  const router = useRouter()
  const [currentLocale, setCurrentLocale] = useState('en');

  useEffect(() => {
    // Get the current language from localStorage or default to 'en'
    const savedLocale = localStorage.getItem('preferredLanguage') || 'en';
    setCurrentLocale(savedLocale);
  }, []);
  
  // submit handler
  const submitHandler = () => {
    router.push("/listing-grid-v1");
  };

  return (
    <div className={`home1-advnc-search ${className}`}>
      <ul className="h1ads_1st_list mb0">
        <li className="list-inline-item">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder={t('enterKeyword')}
              onChange={(e) => dispatch(addKeyword(e.target.value))}
            />
          </div>
        </li>
        {/* End li */}

        <li className="list-inline-item">
          <div className="search_option_two">
            <div className="candidate_revew_select">
              <select className="selectpicker w100 form-select show-tick">
                <option value="">{t('propertyType')}</option>
                <option>{t('apartment')}</option>
                <option>{t('bungalow')}</option>
                <option>{t('condo')}</option>
                <option>{t('house')}</option>
                <option>{t('land')}</option>
                <option>{t('singleFamily')}</option>
              </select>
            </div>
          </div>
        </li>
        {/* End li */}

        <li className="list-inline-item">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder={t('location')}
              onChange={(e) => dispatch(addLocation(e.target.value))}
              style={{paddingRight: "2.5rem"}}
            />
            <label>
              <span className="flaticon-maps-and-flags"></span>
            </label>
          </div>
        </li>
        {/* End li */}

        <li className="list-inline-item">
          <div className="small_dropdown2" >
            <div
              id="prncgs"
              className="btn dd_btn"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
              style={{textAlign: currentLocale === 'ar' ? 'right' : 'left'}}
            >
              <span> {t('price')}</span>
              <label htmlFor="InputEmail2">
                <span className="fa fa-angle-down"></span>
              </label>
            </div>
            <div className="dd_content2 dropdown-menu">
              <div className="pricing_acontent">
                <PricingRangeSlider />
              </div>
            </div>
          </div>
        </li>
        {/* End li */}

        <li className="custome_fields_520 list-inline-item">
          <div className="navbered">
            <div className="mega-dropdown ">
              <span
                className="dropbtn"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                {t('advanced')} <i className="flaticon-more pl10 flr-520"></i>
              </span>

              <div className="dropdown-content dropdown-menu ">
                <div className="row p15">
                  <div className="col-lg-12">
                    <h4 className="text-thm3 mb-4">{t('amenities')}</h4>
                  </div>

                  <CheckBoxFilter />
                </div>
                {/* End .row */}

                <div className="row p15 pt0-xsd">
                  <div className="col-lg-12 col-xl-12">
                    <ul className="apeartment_area_list mb0">
                      <GlobalSelectBox />
                    </ul>
                  </div>
                </div>
                {/* End .row */}
              </div>
              {/* End .dropdown-menu */}
            </div>
          </div>
        </li>
        {/* End li */}

        <li className="list-inline-item">
          <div className="search_option_button">
            <button
              onClick={submitHandler}
              type="submit"
              className="btn btn-thm"
            >
              {t('search')}
            </button>
          </div>
        </li>
        {/* End li */}
      </ul>
    </div>
  );
};

export default GlobalFilter;
