"use client"
import { useTranslations } from 'next-intl';

const PropertyFeatures = () => {
  let t;
  try {
    t = useTranslations('propertyFeatures');
  } catch (error) {
    console.warn('Translation hook failed, using fallbacks:', error);
    t = (key) => {
      const fallbacks = {
        'airConditioning': 'Air Conditioning',
        'barbeque': 'Barbeque',
        'dryer': 'Dryer',
        'gym': 'Gym',
        'laundry': 'Laundry',
        'lawn': 'Lawn',
        'microwave': 'Microwave',
        'outdoorShower': 'Outdoor Shower',
        'refrigerator': 'Refrigerator',
        'sauna': 'Sauna',
        'swimmingPool': 'Swimming Pool',
        'tvCable': 'TV Cable',
        'washer': 'Washer',
        'wifi': 'WiFi',
        'windowCoverings': 'Window Coverings'
      };
      return fallbacks[key] || key;
    };
  }

  const propertyFeatures = [
    {
      id: 1,
      list: ["airConditioning", "barbeque", "dryer", "gym", "laundry"],
    },
    {
      id: 2,
      list: ["lawn", "microwave", "outdoorShower", "refrigerator", "sauna"],
    },
    {
      id: 3,
      list: ["swimmingPool", "tvCable", "washer", "wifi", "windowCoverings"],
    },
  ];
  
  return (
    <>
      {propertyFeatures.map((item) => (
        <div className="col-sm-6 col-md-6 col-lg-4" key={item.id}>
          <ul className="order_list list-inline-item">
            {item.list.map((val, i) => (
              <li key={i}>
                <span className="flaticon-tick"></span>
                {t(val)}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default PropertyFeatures;
