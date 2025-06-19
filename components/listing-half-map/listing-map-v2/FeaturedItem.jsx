'use client'

import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslations } from 'next-intl';
import { addLength } from "../../../features/properties/propertiesSlice";
import properties from "../../../data/properties";
import Image from "next/image";

const FeaturedItem = () => {
  const { isGridOrList } = useSelector((state) => state?.filter || {});
  const dispatch = useDispatch();
  const t = useTranslations();

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

  // status handler
  let content = properties
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
          }`}
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
              <ul className="icon mb0">
                <li className="list-inline-item">
                  <a href="#">
                    <span className="flaticon-heart"></span>
                  </a>
                </li>
              </ul>

              <Link
                href={`/en/listing-details-v1/${item.id}`}
                className="fp_price"
              >
                ${item.price}
                {/* <small>/mo</small> */}
              </Link>
            </div>
            
            {/* Company Logo */}
            {item.companyLogo && (
              <div 
                className="company-logo"
                style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
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
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                    minWidth: '50px',
                    minHeight: '50px',
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
              <p className="text-thm">{translatePropertyType(item.type)}</p>
              <h4>
                <Link href={`/en/listing-details-v1/${item.id}`}>
                  {item.title}
                </Link>
              </h4>
              <p>
                <span className="flaticon-placeholder"></span>
                {item.location}
              </p>

              <ul className="prop_details mb0">
                {item.itemDetails?.map((val, i) => (
                  <li className="list-inline-item" key={i}>
                    <a href="#">
                      {val.name}: {val.number}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* End .tc_content */}

            <div className="fp_footer">
              <ul className="fp_meta float-start mb0">
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
              <div className="fp_pdate float-end">{item.postedYear}</div>
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

  return <>{content}</>;
};

export default FeaturedItem;
