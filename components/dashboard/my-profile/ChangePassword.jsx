'use client'

import { useTranslations } from 'next-intl';

const ChangePassword = () => {
  const t = useTranslations('dashboard');

  return (
    <>
      <div className="row">
        <div className="col-xl-6">
          <div className="my_profile_setting_input form-group">
            <label htmlFor="formGroupExampleOldPass">{t('oldPassword')}</label>
            <input
              type="password"
              className="form-control"
              id="formGroupExampleOldPass"
              placeholder="alitfn"
            />
          </div>
        </div>
      </div>
      {/* End .row */}

      <div className="row">
        <div className="col-lg-6 col-xl-6">
          <div className="my_profile_setting_input form-group">
            <label htmlFor="formGroupExampleNewPass">{t('newPassword')}</label>
            <input
              type="password"
              className="form-control"
              id="formGroupExampleNewPass"
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-lg-6 col-xl-6">
          <div className="my_profile_setting_input form-group">
            <label htmlFor="formGroupExampleConfPass">
              {t('confirmNewPassword')}
            </label>
            <input
              type="password"
              className="form-control"
              id="formGroupExampleConfPass"
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-xl-12">
          <div className="my_profile_setting_input float-start fn-520">
            <button className="btn btn3 btn-dark">{t('updateProfile')}</button>
          </div>
          <div className="my_profile_setting_input float-end fn-520">
            <button className="btn btn2">{t('updateProfile')}</button>
          </div>
        </div>
        {/* End .col */}
      </div>
    </>
  );
};

export default ChangePassword;
