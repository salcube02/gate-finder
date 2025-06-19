"use client"
import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';

const PropertyDetails = () => {
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const locale = useLocale();
  
  let t;
  try {
    t = useTranslations('propertyDetails');
  } catch (error) {
    console.warn('Translation hook failed, using fallbacks:', error);
    t = (key) => {
      const fallbacks = {
        'projectId': 'Project ID',
        'projectPrice': 'Project Price',
        'projectSize': 'Project Size',
        'yearBuilt': 'Year Built',
        'bedrooms': 'Bedrooms',
        'bathrooms': 'Bathrooms',
        'garage': 'Garage',
        'totalArea': 'Total Area',
        'projectType': 'Project Type',
        'projectStatus': 'Project Status',
        'floors': 'Floors',
        'apartments': 'Apartments',
        'units': 'Units',
        'amenities': 'Amenities',
        'villas': 'Villas',
        'gardens': 'Gardens',
        'available': 'Available',
        'notAvailable': 'Not Available',
        'multiple': 'Multiple',
        'forSale': 'For Sale',
        'forRent': 'For Rent',
        'na': 'N/A',
        'loadingPropertyDetails': 'Loading property details...',
        'propertyNotFound': 'Property not found.'
      };
      return fallbacks[key] || key;
    };
  }

  useEffect(() => {
    const getProperty = async () => {
      // Check if window is available (client-side)
      if (typeof window === 'undefined') return;
      
      // Get property ID from URL
      const url = window.location.href;
      const urlParts = url.split('/');
      const propertyId = urlParts[urlParts.length - 1]; // Get last part of URL
      
      if (propertyId && !isNaN(propertyId)) {
        try {
          // Import properties data based on locale
          let properties;
          if (locale === 'ar') {
            properties = require('../../../data/properties-ar');
          } else {
            properties = require('../../../data/properties');
          }
          
          // Find property by ID
          const foundProperty = properties.find(prop => prop.id === parseInt(propertyId));
          setProperty(foundProperty);
        } catch (error) {
          console.error('Error loading property:', error);
        }
      }
      setLoading(false);
    };

    getProperty();
  }, [locale]);

  if (loading) {
    return <div>{t('loadingPropertyDetails')}</div>;
  }

  if (!property) {
    return <div>{t('propertyNotFound')}</div>;
  }

  // Helper function to get item detail by name (supports both English and Arabic)
  const getItemDetail = (nameEn, nameAr = null) => {
    if (!property.itemDetails) return t('na');
    
    const searchName = locale === 'ar' && nameAr ? nameAr : nameEn;
    const detail = property.itemDetails.find(item => 
      item.name.toLowerCase().includes(searchName.toLowerCase()) ||
      (locale === 'en' && item.name.toLowerCase().includes(nameEn.toLowerCase()))
    );
    return detail ? detail.number : t('na');
  };

  // Helper function to get garage info
  const getGarageInfo = () => {
    if (property.garages === 'yes') return t('available');
    if (property.garages === 'no') return t('notAvailable');
    return property.garages || t('na');
  };

  // Helper function to format area with proper unit
  const formatArea = (value) => {
    if (!value || value === t('na')) return t('na');
    return locale === 'ar' ? `${value} قدم مربع` : `${value} Sq Ft`;
  };

  // Helper function to translate property type
  const translatePropertyType = (type) => {
    if (locale === 'ar') {
      const typeTranslations = {
        'Residential Tower': 'برج سكني',
        'Residential Resort': 'منتجع سكني',
        'Villa Compound': 'مجمع فلل',
        'Apartment': 'شقة',
        'Villa': 'فيلا',
        'House': 'منزل'
      };
      return typeTranslations[type] || type;
    }
    return type;
  };

  return (
    <>
      <div className="col-md-6 col-lg-6 col-xl-4">
        <ul className="list-inline-item">
          <li>
            <p>
              {t('projectId')} : <span>HZ27</span>
            </p>
          </li>
          <li>
            <p>
              {t('projectPrice')} : <span>${property.price ? parseInt(property.price).toLocaleString() : t('na')}</span>
            </p>
          </li>
          <li>
            <p>
              {t('projectSize')} : <span>{formatArea(getItemDetail('SqFt', 'المساحة'))}</span>
            </p>
          </li>
          <li>
            <p>
              {t('yearBuilt')} : <span>{property.built || t('na')}</span>
            </p>
          </li>
        </ul>
      </div>
      {/* End .col */}

      <div className="col-md-6 col-lg-6 col-xl-4">
        <ul className="list-inline-item">
          <li>
            <p>
              {t('bedrooms')} : <span>{getItemDetail('Beds', 'الغرف')}</span>
            </p>
          </li>
          <li>
            <p>
              {t('bathrooms')} : <span>{getItemDetail('Baths', 'الحمامات')}</span>
            </p>
          </li>
          <li>
            <p>
              {t('garage')} : <span>{getGarageInfo()}</span>
            </p>
          </li>
          <li>
            <p>
              {t('totalArea')} : <span>{formatArea(getItemDetail('SqFt', 'المساحة'))}</span>
            </p>
          </li>
        </ul>
      </div>
      {/* End .col */}

      <div className="col-md-6 col-lg-6 col-xl-4">
        <ul className="list-inline-item">
          <li>
            <p>
              {t('projectType')} : <span>{translatePropertyType(property.type || t('na'))}</span>
            </p>
          </li>
          <li>
            <p>
              {t('projectStatus')} : <span>{property.saleTag?.[1] || (property.featured === 'sale' ? t('forSale') : property.featured === 'rent' ? t('forRent') : t('na'))}</span>
            </p>
          </li>
          {property.type === 'Residential Tower' && (
            <>
              <li>
                <p>
                  {t('floors')} : <span>{getItemDetail('Floors', 'الطوابق')}</span>
                </p>
              </li>
              <li>
                <p>
                  {t('apartments')} : <span>{getItemDetail('Apartments', 'الشقق')}</span>
                </p>
              </li>
            </>
          )}
          {property.type === 'Residential Resort' && (
            <>
              <li>
                <p>
                  {t('units')} : <span>{getItemDetail('Units', 'الوحدات')}</span>
                </p>
              </li>
              <li>
                <p>
                  {t('amenities')} : <span>{getItemDetail('Amenities', 'المرافق') || getItemDetail('Pools', 'المسابح') || getItemDetail('Beach Access', 'الوصول للشاطئ') || t('multiple')}</span>
                </p>
              </li>
            </>
          )}
          {property.type === 'Villa Compound' && (
            <>
              <li>
                <p>
                  {t('villas')} : <span>{getItemDetail('Villas', 'الفلل')}</span>
                </p>
              </li>
              <li>
                <p>
                  {t('gardens')} : <span>{getItemDetail('Gardens', 'الحدائق') || getItemDetail('House', 'المنزل') || t('available')}</span>
                </p>
              </li>
            </>
          )}
        </ul>
      </div>
    </>
  );
};

export default PropertyDetails;
