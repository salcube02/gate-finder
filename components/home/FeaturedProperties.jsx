'use client'

import Link from "next/link";
import Slider from "react-slick";
import propertiesEn from "../../data/properties";
import Image from "next/image";
import propertiesAr from "@/data/properties-ar";
import { useState, useEffect } from 'react';


const FeaturedProperties = () => {
  const [currentLocale, setCurrentLocale] = useState('en');

  useEffect(() => {
    // Get the current language from localStorage or default to 'en'
    const savedLocale = localStorage.getItem('preferredLanguage') || 'en';
    setCurrentLocale(savedLocale);
  }, []);

  const propertiesLangList = currentLocale === 'ar' ? propertiesAr : propertiesEn;

  const settings = {
    dots: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    speed: 1200,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
        },
      },
    ],
  };

  let content = propertiesLangList?.slice(0, 12)?.map((item) => (
    <div className="item" key={item.id}>
      <div className="feat_property">
        <div className="thumb">
          <Image
            width={343}
            height={220}
            className="img-whp w-100 h-100 cover"
            src={item.img}
            alt="fp1.jpg"
            style={{ maxHeight: '220px' }}
          />
          <div className="thmb_cntnt">
            <ul className="tag mb0">
              {item.saleTag.map((val, i) => (
                <li className="list-inline-item" key={i}>
                  <a href="#">{val}</a>
                </li>
              ))}
            </ul>
            {/* End .tag */}

            <ul className="icon mb0">
              {/* <li className="list-inline-item">
                <a href="#">
                  <span className="flaticon-transfer-1"></span>
                </a>
              </li> */}
              <li className="list-inline-item">
                <a href="#">
                  <span className="flaticon-heart"></span>
                </a>
              </li>
            </ul>
            {/* End .icon */}

            <Link href={`${currentLocale}/listing-details-v1/${item.id}`} className="fp_price">
              ${item.price}
              {/* <small>/mo</small> */}
            </Link>
          </div>
        </div>
        {/* End .thumb */}

        <div className="details">
          <div className="tc_content">
            <p className="text-thm">{item.type}</p>
            <h4>
              <Link href={`${currentLocale}/listing-details-v1/${item.id}`}>{item.title}</Link>
            </h4>
            <p>
              <span className="flaticon-placeholder"></span>
              {item.location}
            </p>

            <ul className="prop_details mb0">
              {item.itemDetails.map((val, i) => (
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
        {/* End .details */}
      </div>
    </div>
  ));

  return (
    <>
      <Slider {...settings} arrows={false}>
        {content}
      </Slider>
    </>
  );
};

export default FeaturedProperties;
