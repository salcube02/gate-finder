'use client'

import { useTranslations } from 'next-intl';
import CheckBoxFilter from "../../common/CheckBoxFilter";

const DetailedInfo = () => {
  const t = useTranslations('dashboard');

  return (
    <div className="row">
      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="propertyId">{t('projectId')}</label>
          <input type="text" className="form-control" id="propertyId" />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="propertyASize">{t('areaSize')}</label>
          <input type="text" className="form-control" id="propertyASize" />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="sizePrefix">{t('sizePrefix')}</label>
          <input type="text" className="form-control" id="sizePrefix" />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="landArea">{t('landArea')}</label>
          <input type="text" className="form-control" id="landArea" />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="LASPostfix">{t('landAreaSizePostfix')}</label>
          <input type="text" className="form-control" id="LASPostfix" />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="bedRooms">{t('bedrooms')}</label>
          <input type="text" className="form-control" id="bedRooms" />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="bathRooms">{t('bathrooms')}</label>
          <input type="text" className="form-control" id="bathRooms" />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="garages">{t('garages')}</label>
          <input type="text" className="form-control" id="garages" />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="garagesSize">{t('garagesSize')}</label>
          <input type="text" className="form-control" id="garagesSize" />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="yearBuild">{t('yearBuilt')}</label>
          <input type="text" className="form-control" id="yearBuild" />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="videoUrl">{t('videoUrl')}</label>
          <input type="text" className="form-control" id="videoUrl" />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="virtualTour">{t('virtualTour')}</label>
          <input type="text" className="form-control" id="virtualTour" />
        </div>
      </div>

      <div className="col-xl-12">
        <h4 className="mb10">{t('amenities')}</h4>
      </div>

      <CheckBoxFilter />

      <div className="col-xl-12">
        <div className="my_profile_setting_input overflow-hidden mt20">
          <button className="btn btn1 float-start">{t('back')}</button>
          <button className="btn btn2 float-end">{t('next')}</button>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default DetailedInfo;
