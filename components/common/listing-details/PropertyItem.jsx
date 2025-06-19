"use client"
import { useEffect, useState } from "react";
import { useTranslations } from 'next-intl';

const propertyData = {
  group1: {
    ids: ["1", "2", "3"],
    type: "residentialTower",
    detail1: "floors",
    detail1Value: "4",
    detail2: "apartments", 
    detail2Value: "4",
    detail3: "sqft",
    detail3Value: "5280",
  },
  group2: {
    ids: ["4", "5", "6"],
    type: "residentialResort",
    detail1: "units",
    detail1Value: "3",
    detail2: "pools",
    detail2Value: "3", 
    detail3: "sqft",
    detail3Value: "32000",
  },
  group3: {
    ids: ["7", "8", "9", "10", "11", "12", "13", "14", "15"],
    type: "residentialTower",
    detail1: "floors",
    detail1Value: "4",
    detail2: "gardens",
    detail2Value: "4",
    detail3: "sqft", 
    detail3Value: "65000",
  }
};

const getPropertyDetails = (id) => {
  for (const group of Object.values(propertyData)) {
    if (group.ids.includes(id)) {
      return group;
    }
  }
  return {
    type: "unknown",
    detail1: "na",
    detail1Value: "N/A",
    detail2: "na", 
    detail2Value: "N/A",
    detail3: "sqft",
    detail3Value: "N/A",
  };
};

const PropertyItem = () => {
  const [id, setId] = useState(null);
  let t;
  
  try {
    t = useTranslations('propertyItem');
  } catch (error) {
    console.warn('Translation hook failed, using fallbacks:', error);
    t = (key) => {
      const fallbacks = {
        'residentialTower': 'Residential Tower',
        'residentialResort': 'Residential Resort', 
        'floors': 'Floors',
        'apartments': 'Apartments',
        'units': 'Units',
        'pools': 'Pools',
        'gardens': 'Gardens',
        'sqft': 'SqFt',
        'unknown': 'Unknown',
        'na': 'N/A'
      };
      return fallbacks[key] || key;
    };
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlId = window.location.href.split('/').pop();
      setId(urlId);
    }
  }, []);

  if (!id) return null; // or loading state

  const { type, detail1, detail1Value, detail2, detail2Value, detail3, detail3Value } = getPropertyDetails(id);

  return (
    <ul className="mb0">
      <li className="list-inline-item"><a href="#">{t(type)}</a></li>
      <li className="list-inline-item"><a href="#">{t(detail1)}: {detail1Value}</a></li>
      <li className="list-inline-item"><a href="#">{t(detail2)}: {detail2Value}</a></li>
      <li className="list-inline-item"><a href="#">{t(detail3)}: {detail3Value}</a></li>
    </ul>
  );
};

export default PropertyItem;
