'use client'

import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { addLength } from "../../../features/properties/propertiesSlice";
import properties from "../../../data/properties";
import propertiesAr from "../../../data/properties-ar";
import Image from "next/image";

const FeaturedItemArabic = () => {
  const { isGridOrList } = useSelector((state) => state?.filter || {});
  const dispatch = useDispatch();
  const t = useTranslations();
  const params = useParams();
  const locale = params?.locale || 'en';
  const isRTL = locale === 'ar';

  // Select the appropriate data source based on locale
  const propertiesData = isRTL ? propertiesAr : properties;

  // Function to translate property type
  const translatePropertyType = (type) => {
    switch (type?.toLowerCase().replace(/\s+/g, '_')) {
      case 'residential_tower':
        return t('propertyTypes.residentialTower');
      case 'residential_resort':
        return t('propertyTypes.residentialResort');
      case 'villa_compound':
        return t('propertyTypes.villaCompound');
      case 'apartment':
        return t('propertyTypes.apartment');
      case 'villa':
        return t('propertyTypes.villa');
      case 'townhouse':
        return t('propertyTypes.townhouse');
      case 'penthouse':
        return t('propertyTypes.penthouse');
      case 'studio':
        return t('propertyTypes.studio');
      case 'duplex':
        return t('propertyTypes.duplex');
      default:
        return type || t('common.apartment');
    }
  };

  // Function to translate property status
  const translateStatus = (status) => {
    switch (status?.toLowerCase()) {
      case 'sale':
      case 'for sale':
        return t('listing.sale');
      case 'rent':
      case 'for rent':
        return t('listing.rent');
      default:
        return status || '';
    }
  };

  // Function to format price with proper Arabic numerals if needed
  const formatPrice = (price) => {
    // Convert to Arabic numerals for Arabic locale
    if (isRTL) {
    //   const arabicNumerals = '٠١٢٣٤٥٦٧٨٩';
      const englishNumerals = '0123456789';
      let arabicPrice = price.toString();
      for (let i = 0; i < englishNumerals.length; i++) {
        arabicPrice = arabicPrice.replace(new RegExp(englishNumerals[i], 'g'), englishNumerals[i]);
      }
      return arabicPrice;
    }
    return price;
  };

  // status handler
  let content = propertiesData
    ?.slice(0, 8)
    ?.map((item) => (
      <div
        className={`${
          isGridOrList ? "col-12 list_map feature-list" : "col-md-4 col-lg-4"
        } `}
        key={item.id}
      >
        <div
          className={`feat_property home7 style4 ${
            isGridOrList ? "d-flex align-items-center" : undefined
          } ${isRTL ? 'rtl-property' : ''}`}
        >
          <div className="thumb">
            <Image
              width={316}
              height={220}
              className="img-whp w-100 h-100 cover"
              src={item.img}
              alt="fp1.jpg"
            />
            <div className="thmb_cntnt">
              <ul className="tag mb0">
                <li className="list-inline-item">
                  <a href="#">{t('listing.featured')}</a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-capitalize">
                    {translateStatus(item.featured)}
                  </a>
                </li>
              </ul>
              <ul className={`icon mb0 ${isRTL ? 'icon-rtl' : ''}`}>
                <li className="list-inline-item">
                  <a href="#">
                    <span className="flaticon-heart"></span>
                  </a>
                </li>
              </ul>

              <Link
                href={`/listing-details-v1/${item.id}`}
                className={`fp_price ${isRTL ? 'fp_price-rtl' : ''}`}
              >
                {isRTL ? `${formatPrice(item.price)}$` : `$${item.price}`}
                {/* <small>/mo</small> */}
              </Link>
            </div>
            
            {/* Company Logo */}
            {item.companyLogo && (
              <div 
                className={`company-logo ${isRTL ? 'company-logo-rtl' : ''}`}
                style={{
                  position: 'absolute',
                  top: '15px',
                  [isRTL ? 'left' : 'right']: '15px',
                  zIndex: 5
                }}
              >
                <div 
                  className="company-logo-bg"
                  style={{
                    backgroundColor: '#ffffff',
                    color: '#333333',
                    padding: '8px 12px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontWeight: '700',
                    letterSpacing: isRTL ? 'normal' : '1px',
                    textTransform: 'uppercase',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                    minWidth: '50px',
                    minHeight: '50px',
                    maxHeight: '75px',
                    maxWidth: '75px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    width={50}
                    height={50}
                    style={{
                      objectFit: 'contain',
                      minWidth: '50px',
                      minHeight: '50px',
                    }}
                    src={item.companyLogo}
                    alt="company-logo"
                  />
                </div>
              </div>
            )}
          </div>
          <div className="details">
            <div className="tc_content">
              <p className={`text-thm ${isRTL ? 'text-right' : ''}`}>
                {translatePropertyType(item.type)}
              </p>
              <h4 className={isRTL ? 'text-right' : ''}>
                <Link href={`/${isRTL ? 'ar' : 'en'}/listing-details-v1/${item.id}`}>
                  {item.title}
                </Link>
              </h4>
              <p className={isRTL ? 'text-right location-rtl' : ''}>
                <span className={`flaticon-placeholder ${isRTL ? 'icon-spacing-rtl' : ''}`}></span>
                {item.location}
              </p>

              <ul className={`prop_details mb0 ${isRTL ? 'prop_details-rtl' : ''}`}>
                {item.itemDetails?.map((val, i) => (
                  <li className="list-inline-item" key={i}>
                    <a href="#">
                      {val.name}: {isRTL ? formatPrice(val.number) : val.number}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* End .tc_content */}

            <div className={`fp_footer ${isRTL ? 'fp_footer-rtl' : ''}`}>
              <ul className={`fp_meta ${isRTL ? 'float-right' : 'float-start'} mb0`}>
                <li className="list-inline-item">
                  <Link href="/agent-v2">
                    <Image
                      width={40}
                      height={40}
                      src={item.posterAvatar}
                      alt="pposter1.png"
                    />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link href="/agent-v2">{item.posterName}</Link>
                </li>
              </ul>
              <div className={`fp_pdate ${isRTL ? 'float-left' : 'float-end'}`}>
                {item.postedYear}
              </div>
            </div>
            {/* End .fp_footer */}
          </div>
        </div>
      </div>
    ));

  // add length of filter items
  useEffect(() => {
    dispatch(addLength(content?.length || 0));
  }, [dispatch, content]);

  return (
    <>
      {/* Add RTL-specific styles */}
      <style jsx>{`
        .rtl-property .tc_content h4 {
          text-align: ${isRTL ? 'right' : 'left'};
        }
        
        .location-rtl .flaticon-placeholder {
          margin-left: 0.5rem;
          margin-right: 0;
        }
        
        .prop_details-rtl {
          text-align: right;
          direction: rtl;
        }
        
        .prop_details-rtl li:not(:last-child) {
          margin-left: 1rem;
          margin-right: 0;
        }
        
        .fp_footer-rtl {
          direction: rtl;
        }
        
        .fp_price-rtl {
          font-family: 'Tajawal', sans-serif;
        }
        
        .icon-rtl {
          left: 15px;
          right: auto;
        }
        
        .icon-spacing-rtl {
          margin-left: 0.3rem;
          margin-right: 0;
        }
        
        .company-logo-rtl {
          left: 15px !important;
          right: auto !important;
        }
      `}</style>
      {content}
    </>
  );
};

export default FeaturedItemArabic; 