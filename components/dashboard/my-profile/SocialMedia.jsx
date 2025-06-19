'use client'

import { useTranslations } from 'next-intl';

const SocialMedia = () => {
  const t = useTranslations('dashboard');

  return (
    <div className="row">
      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="formGroupExampleSkype">{t('skype')}</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleSkype"
            placeholder="alitfn"
          />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="formGroupExampleWebsite">{t('website')}</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleWebsite"
            placeholder="creativelayers@gmail.com"
          />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="formGroupExampleFaceBook">{t('facebook')}</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleFaceBook"
          />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="formGroupExampleTwitter">{t('twitter')}</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleTwitter"
          />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="formGroupExampleLinkedin">{t('linkedin')}</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleLinkedin"
          />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="formGroupExampleInstagram">{t('instagram')}</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInstagram"
          />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="formGroupExampleGooglePlus">{t('googlePlus')}</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleGooglePlus"
          />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="formGroupExampleYoutube">{t('youtube')}</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleYoutube"
          />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="formGroupExamplePinterest">{t('pinterest')}</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExamplePinterest"
          />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="formGroupExampleVimeo">{t('vimeo')}</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleVimeo"
          />
        </div>
      </div>
      {/* End .col */}

      <div className="col-xl-12 text-right">
        <div className="my_profile_setting_input">
          <button className="btn btn2">{t('updateProfile')}</button>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default SocialMedia;
