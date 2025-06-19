"use client"
import Image from "next/image";
import { useTranslations } from 'next-intl';

const FloorPlans = ({ id }) => {
  let t;
  try {
    t = useTranslations('floorPlans');
  } catch (error) {
    console.warn('Translation hook failed, using fallbacks:', error);
    t = (key) => {
      const fallbacks = {
        'residentialTower': 'Residential Tower',
        'residentialVilla': 'Residential Villa',
        'residentialResort': 'Residential Resort',
        'villaFloorPlans': 'Villa Floor Plans',
        'towerFloorPlans': 'Tower Floor Plans',
        'resortHouseDetails': 'Resort House Details',
        'luxuryVillaDesc': 'levels and premium finishes',
        'highRiseTowerDesc': 'High-rise tower with multiple apartments per floor',
        'luxuryResortDesc': 'Luxury resort with individual houses and comprehensive floor plans',
        'size': 'Size',
        'status': 'Status',
        'available': 'Available',
        'apartments': 'Apartments',
        'totalSize': 'Total Size',
        'floors': 'Floors',
        'totalArea': 'Total Area',
        'totalLivingSpace': 'Total Living Space',
        'floorArea': 'Floor Area',
        'price': 'Price',
        'gfPlan': 'GF Plan',
        'firstFloorPlan': '1st Floor Plan',
        'secondFloorPlan': '2nd Floor Plan',
        'apartment': 'Apartment',
        'house': 'House',
        'overview': 'Overview',
        'amenities': 'Amenities',
        'floorPlansColon': 'Floor Plans:',
        'luxuryVilla': 'Luxury villa with',
        'gfPlanDesc': 'features spacious living areas with modern amenities and premium finishes.',
        'firstFloorDesc': 'features spacious living areas with modern amenities and premium finishes.',
        'secondFloorDesc': 'features spacious living areas with modern amenities and premium finishes.',
        'groundFloorDesc': 'Ground floor with living room, kitchen, dining area, and guest room.',
        'firstFloorDescResort': 'First floor with master bedroom, family room, and study area.',
        'secondFloorDescResort': 'Second floor with additional bedrooms and recreational space.',
        'privatePool': 'Private Pool',
        'garden': 'Garden',
        'parking': 'Parking',
        'beachAccess': 'Beach Access',
        'sqft': 'Sqft',
        'br1': '1BR',
        'br2': '2BR',
        'br3': '3BR',
        'br4': '4BR'
      };
      return fallbacks[key] || key;
    };
  }

  // Property data for the first 8 items from properties.js
  const propertyData = {
    1: { type: t('residentialTower'), floors: 35, apartments: 280, sqft: 12500 },
    2: { type: t('residentialTower'), floors: 42, apartments: 320, sqft: 15800 },
    3: { type: t('residentialTower'), floors: 38, apartments: 295, sqft: 18200 },
    4: { type: t('residentialResort'), units: 150, amenities: 12, sqft: 25000 },
    5: { type: t('residentialResort'), units: 200, pools: 3, sqft: 32000 },
    6: { type: t('residentialResort'), villas: 85, beachAccess: 1, sqft: 45000 },
    7: { type: t('residentialVilla'), floors: 3, gardens: 2, sqft: 65000 },
    8: { type: t('residentialVilla'), floors: 4, gardens: 4, sqft: 85000 }
  };

  const property = propertyData[parseInt(id)] || { type: t('residentialVilla'), floors: 3, sqft: 10000 };

  // Generate data based on property type
  const generateData = () => {
    if (property.type === t('residentialVilla')) {
      return generateVillaData();
    } else if (property.type === t('residentialTower')) {
      return generateTowerData();
    } else if (property.type === t('residentialResort')) {
      return generateResortData();
    }
    return generateVillaData(); // default
  };

  // Villa Structure: Simple floor plans
  const generateVillaData = () => {
    const floors = [t('gfPlan'), t('firstFloorPlan'), t('secondFloorPlan')];
    return floors.map((floorName, index) => ({
      id: `villa-floor-${index}`,
      name: floorName,
      type: "villa-floor",
      size: 1500 + (index * 200),
      description: `${floorName} ${t('gfPlanDesc')}`
    }));
  };

  // Tower Structure: Floors with apartments
  const generateTowerData = () => {
    const floors = [t('gfPlan'), t('firstFloorPlan'), t('secondFloorPlan')];
    const bedroomTypes = [t('br1'), t('br2'), t('br3'), t('br4')];
    
    return floors.map((floorName, floorIndex) => ({
      id: `tower-floor-${floorIndex}`,
      name: floorName,
      type: "tower-floor",
      apartments: [
        {
          id: `apt-${floorIndex * 3 + 1}`,
          name: `${t('apartment')} ${String(floorIndex * 3 + 1).padStart(2, '0')}`,
          size: 900 + (floorIndex * 100),
          price: 1500 + (floorIndex * 200),
          rooms: bedroomTypes[floorIndex === 0 ? 0 : floorIndex === 1 ? 1 : 2]
        },
        {
          id: `apt-${floorIndex * 3 + 2}`,
          name: `${t('apartment')} ${String(floorIndex * 3 + 2).padStart(2, '0')}`,
          size: 950 + (floorIndex * 100),
          price: 1600 + (floorIndex * 200),
          rooms: bedroomTypes[floorIndex === 0 ? 0 : floorIndex === 1 ? 1 : 2]
        },
        {
          id: `apt-${floorIndex * 3 + 3}`,
          name: `${t('apartment')} ${String(floorIndex * 3 + 3).padStart(2, '0')}`,
          size: 1000 + (floorIndex * 100),
          price: 1700 + (floorIndex * 200),
          rooms: bedroomTypes[floorIndex === 0 ? 1 : floorIndex === 1 ? 2 : 3]
        }
      ]
    }));
  };

  // Resort Structure: Houses with floor plans
  const generateResortData = () => {
    const houses = [`${t('house')} 01`, `${t('house')} 02`, `${t('house')} 03`];
    return houses.map((houseName, houseIndex) => ({
      id: `resort-house-${houseIndex}`,
      name: houseName,
      type: "resort-house",
      floors: [
        {
          id: `house-${houseIndex}-gf`,
          name: t('gfPlan'),
          size: 2000 + (houseIndex * 200),
          description: t('groundFloorDesc')
        },
        {
          id: `house-${houseIndex}-1st`,
          name: t('firstFloorPlan'),
          size: 1800 + (houseIndex * 150),
          description: t('firstFloorDescResort')
        },
        {
          id: `house-${houseIndex}-2nd`,
          name: t('secondFloorPlan'),
          size: 1600 + (houseIndex * 100),
          description: t('secondFloorDescResort')
        }
      ],
      totalSize: 5400 + (houseIndex * 450),
      amenities: [t('privatePool'), t('garden'), t('parking'), t('beachAccess')]
    }));
  };

  const data = generateData();

  // Render Villa Floor Plans
  const renderVilla = () => (
    <div className="accordion" id="villaAccordion">
      <div className="property-overview mb-4 p-3" style={{
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        border: '1px solid #e9ecef'
      }}>
        <h6 className="mb-2">{t('villaFloorPlans')}</h6>
        <p className="mb-0 text-muted">{t('luxuryVilla')} {data.length} {t('luxuryVillaDesc')}</p>
      </div>

      {data.map((floor, index) => (
        <div key={floor.id} className="card floor_plan">
          <div id={`heading-${floor.id}`}>
            <h2 className="mb-0">
              <button
                className={`btn btn-link accordion-button ${index === 0 ? '' : 'collapsed'}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse-${floor.id}`}
                aria-expanded={index === 0 ? 'true' : 'false'}
                aria-controls={`collapse-${floor.id}`}
                style={{ textAlign: 'left' }}
              >
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <strong className="fs-6">{floor.name}</strong>
                    <div className="d-flex gap-4 align-items-center">
                      <div className="text-center">
                        <div className="text-muted small">{t('size')}</div>
                        <div className="fw-bold">{floor.size.toLocaleString()} {t('sqft')}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-muted small">{t('status')}</div>
                        <span className="badge bg-success small text-white">{t('available')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </h2>
          </div>
          <div
            id={`collapse-${floor.id}`}
            className={`collapse ${index === 0 ? 'show' : ''}`}
            aria-labelledby={`heading-${floor.id}`}
            data-bs-parent="#villaAccordion"
          >
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <Image
                    width={300}
                    height={225}
                    className="img-fluid w-100 h-100 cover"
                    src="/assets/images/resource/floor_plan.png"
                    alt={`${floor.name.toLowerCase().replace(/\s+/g, '_')}.png`}
                  />
                </div>
                <div className="col-md-6">
                  <h5 className="mb-3">{floor.name}</h5>
                  <p>{floor.description}</p>
                  <div className="floor-details mt-3">
                    <div className="row">
                      <div className="col-6">
                        <small className="text-muted">{t('totalArea')}</small>
                        <h6>{floor.size.toLocaleString()} {t('sqft')}</h6>
                      </div>
                      <div className="col-6">
                        <small className="text-muted">{t('status')}</small>
                        <h6 className="text-success">{t('available')}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  // Render Tower Floor Plans with Apartments
  const renderTower = () => (
    <div className="accordion" id="towerAccordion">
      <div className="property-overview mb-4 p-3" style={{
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        border: '1px solid #e9ecef'
      }}>
        <h6 className="mb-2">{t('towerFloorPlans')}</h6>
        <p className="mb-0 text-muted">{t('highRiseTowerDesc')}</p>
      </div>

      {data.map((floor, floorIndex) => (
        <div key={floor.id} className="card floor_plan">
          <div id={`heading-${floor.id}`}>
            <h2 className="mb-0">
              <button
                className={`btn btn-link accordion-button ${floorIndex === 0 ? '' : 'collapsed'}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse-${floor.id}`}
                aria-expanded={floorIndex === 0 ? 'true' : 'false'}
                aria-controls={`collapse-${floor.id}`}
                style={{ textAlign: 'left' }}
              >
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <strong className="fs-6">{floor.name}</strong>
                    <div className="d-flex gap-4 align-items-center">
                      <div className="text-center">
                        <div className="text-muted small">{t('apartments')}</div>
                        <div className="fw-bold">{floor.apartments.length}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-muted small">{t('totalSize')}</div>
                        <div className="fw-bold">{floor.apartments.reduce((sum, apt) => sum + apt.size, 0).toLocaleString()} {t('sqft')}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-muted small">{t('status')}</div>
                        <span className="badge bg-success small text-white">{t('available')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </h2>
          </div>
          <div
            id={`collapse-${floor.id}`}
            className={`collapse ${floorIndex === 0 ? 'show' : ''}`}
            aria-labelledby={`heading-${floor.id}`}
            data-bs-parent="#towerAccordion"
          >
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <Image
                    width={300}
                    height={225}
                    className="img-fluid w-100 h-100 cover"
                    src="/assets/images/resource/floor_plan.png"
                    alt={`${floor.name.toLowerCase().replace(/\s+/g, '_')}.png`}
                  />
                </div>
                <div className="col-md-6">
                  <h5 className="mb-3">{floor.name} - {t('apartments')}</h5>
                  <div className="apartments-list">
                    {floor.apartments.map((apartment, aptIndex) => (
                      <div key={apartment.id} className="apartment-item mb-3 p-3 border rounded">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <strong>{apartment.name}</strong>
                          <span className="badge">{apartment.rooms}</span>
                        </div>
                        <div className="row">
                          <div className="col-6">
                            <small className="text-muted">{t('size')}</small>
                            <div className="fw-bold">{apartment.size.toLocaleString()} {t('sqft')}</div>
                          </div>
                          <div className="col-6">
                            <small className="text-muted">{t('price')}</small>
                            <div className="fw-bold ">${apartment.price.toLocaleString()}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  // Render Resort House Details
  const renderResort = () => (
    <div className="accordion" id="resortAccordion">
      <div className="property-overview mb-4 p-3" style={{
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        border: '1px solid #e9ecef'
      }}>
        <h6 className="mb-2">{t('resortHouseDetails')}</h6>
        <p className="mb-0 text-muted">{t('luxuryResortDesc')}</p>
      </div>

      {data.map((house, houseIndex) => (
        <div key={house.id} className="card floor_plan">
          <div id={`heading-${house.id}`}>
            <h2 className="mb-0">
              <button
                className={`btn btn-link accordion-button ${houseIndex === 0 ? '' : 'collapsed'}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse-${house.id}`}
                aria-expanded={houseIndex === 0 ? 'true' : 'false'}
                aria-controls={`collapse-${house.id}`}
                style={{ textAlign: 'left' }}
              >
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <strong className="fs-6">{house.name}</strong>
                    <div className="d-flex gap-4 align-items-center">
                      <div className="text-center">
                        <div className="text-muted small">{t('floors')}</div>
                        <div className="fw-bold">{house.floors.length}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-muted small">{t('totalSize')}</div>
                        <div className="fw-bold">{house.totalSize.toLocaleString()} {t('sqft')}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-muted small">{t('status')}</div>
                        <span className="badge bg-success small text-white">{t('available')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </h2>
          </div>
          <div
            id={`collapse-${house.id}`}
            className={`collapse ${houseIndex === 0 ? 'show' : ''}`}
            aria-labelledby={`heading-${house.id}`}
            data-bs-parent="#resortAccordion"
          >
            <div className="card-body">
              <div className="row mb-3">
                <div className="col-md-6">
                  <Image
                    width={300}
                    height={225}
                    className="img-fluid w-100 h-100 cover"
                    src="/assets/images/resource/floor_plan.png"
                    alt={`${house.name.toLowerCase().replace(/\s+/g, '_')}.png`}
                  />
                </div>
                <div className="col-md-6">
                  <h5 className="mb-3">{house.name} {t('overview')}</h5>
                  <div className="amenities mb-3">
                    <h6>{t('amenities')}:</h6>
                    <div className="d-flex flex-wrap gap-2">
                      {house.amenities.map((amenity, index) => (
                        <span key={index} className="badge bg-secondary">{amenity}</span>
                      ))}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <small className="text-muted">{t('totalLivingSpace')}</small>
                      <h6>{house.totalSize.toLocaleString()} {t('sqft')}</h6>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floor Plans for this House */}
              <div className="house-floors">
                <h6 className="mb-3">{t('floorPlansColon')}</h6>
                <div className="accordion" id={`${house.id}-floors`}>
                  {house.floors.map((floor, floorIndex) => (
                    <div key={floor.id} className="card mb-2">
                      <div id={`heading-${floor.id}`}>
                        <h3 className="mb-0">
                          <button
                            className={`btn btn-link accordion-button collapsed`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse-${floor.id}`}
                            aria-expanded="false"
                            aria-controls={`collapse-${floor.id}`}
                            style={{ textAlign: 'left', fontSize: '14px' }}
                          >
                            <div className="w-100">
                              <div className="d-flex justify-content-between align-items-center">
                                <span>{floor.name}</span>
                                <div className="text-end">
                                  <small className="text-muted">{floor.size.toLocaleString()} {t('sqft')}</small>
                                </div>
                              </div>
                            </div>
                          </button>
                        </h3>
                      </div>
                      <div
                        id={`collapse-${floor.id}`}
                        className="collapse"
                        aria-labelledby={`heading-${floor.id}`}
                        data-bs-parent={`#${house.id}-floors`}
                      >
                        <div className="card-body p-3">
                          <div className="row">
                            <div className="col-md-4">
                              <Image
                                width={200}
                                height={150}
                                className="img-fluid w-100 cover"
                                src="/assets/images/resource/floor_plan.png"
                                alt={`${floor.name.toLowerCase().replace(/\s+/g, '_')}.png`}
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="mb-2">{floor.description}</p>
                              <div className="floor-info">
                                <small className="text-muted">{t('floorArea')}: </small>
                                <strong>{floor.size.toLocaleString()} {t('sqft')}</strong>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  // Main render function
  if (property.type === t('residentialVilla')) {
    return renderVilla();
  } else if (property.type === t('residentialTower')) {
    return renderTower();
  } else if (property.type === t('residentialResort')) {
    return renderResort();
  }
  
  return renderVilla(); // fallback
};

export default FloorPlans;
