'use client';

import { useTranslations } from 'next-intl';
import Link from "next/link";
import findProperties from "../../data/findProperties";
import Image from "next/image";

const FindProperties = () => {
  const t = useTranslations('listing');

  return (
    <>
      {findProperties.slice(0, 4).map((item) => (
        <div className={`col-lg-4 ${item.column}`} key={item.id}>
          <Link href="/listing-map-v2" className="properti_city d-block">
            <div className="thumb">
              <Image
                width={752}
                height={352}
                className="img-fluid w100 h-100 cover"
                src={item.img}
                alt="pc1.jpg"
              />
            </div>
            <div className="overlay">
              <div className="details">
                <h4>{item.name}</h4>
                <p>{item.number} {t('properties')}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default FindProperties;
