'use client'

import { useState } from "react";
import { useTranslations } from 'next-intl';

const ProfileInfo = ({ locale }) => {
    const [profile, setProfile] = useState(null);
    const t = useTranslations('dashboard');

    // upload profile
    const uploadProfile = (e) => {
        setProfile(e.target.files[0]);
    };

    return (
        <div className="row">
            <div className="col-lg-12" style={{ display:"flex",flexDirection:"column", alignItems:locale === 'ar' ? "flex-end" : "flex-start" }}>
                <div className="wrap-custom-file">
                    <input
                        type="file"
                        id="image1"
                        accept="image/png, image/gif, image/jpeg"
                        onChange={uploadProfile}
                    />
                    <label
                        style={
                            profile !== null
                                ? {
                                      backgroundImage: `url(${URL.createObjectURL(
                                          profile
                                      )})`,
                                  }
                                : undefined
                        }
                        htmlFor="image1"
                    >
                        <span>
                            <i className="flaticon-download"></i> {t('uploadPhoto')}{" "}
                        </span>
                    </label>
                </div>
                <p>{t('minimumSize')}</p>
            </div>
            {/* End .col */}

            <div className="col-lg-6 col-xl-6">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="formGroupExampleInput1">{t('username')}</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput1"
                        placeholder="alitfn"
                    />
                </div>
            </div>
            {/* End .col */}

            <div className="col-lg-6 col-xl-6">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="formGroupExampleEmail">{t('email')}</label>
                    <input
                        type="email"
                        className="form-control"
                        id="formGroupExampleEmail"
                        placeholder="creativelayers@gmail.com"
                    />
                </div>
            </div>
            {/* End .col */}

            <div className="col-lg-6 col-xl-6">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="formGroupExampleInput3">{t('firstName')}</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput3"
                    />
                </div>
            </div>
            {/* End .col */}

            <div className="col-lg-6 col-xl-6">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="formGroupExampleInput4">{t('lastName')}</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput4"
                    />
                </div>
            </div>
            {/* End .col */}

            <div className="col-lg-6 col-xl-6">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="formGroupExampleInput5">{t('position')}</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput5"
                    />
                </div>
            </div>
            {/* End .col */}

            <div className="col-lg-6 col-xl-6">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="formGroupExampleInput6">{t('license')}</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput6"
                    />
                </div>
            </div>
            {/* End .col */}

            <div className="col-lg-6 col-xl-6">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="formGroupExampleInput7">{t('taxNumber')}</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput7"
                    />
                </div>
            </div>
            {/* End .col */}

            <div className="col-lg-6 col-xl-6">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="formGroupExampleInput8">{t('phone')}</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput8"
                    />
                </div>
            </div>
            {/* End .col */}

            <div className="col-lg-6 col-xl-6">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="formGroupExampleInput9">{t('faxNumber')}</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput9"
                    />
                </div>
            </div>
            {/* End .col */}

            <div className="col-lg-6 col-xl-6">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="formGroupExampleInput10">{t('mobile')}</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput10"
                    />
                </div>
            </div>
            {/* End .col */}

            <div className="col-lg-6 col-xl-6">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="formGroupExampleInput11">{t('language')}</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput11"
                    />
                </div>
            </div>
            {/* End .col */}

            <div className="col-lg-6 col-xl-6">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="formGroupExampleInput12">
                        {t('companyName')}
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput12"
                    />
                </div>
            </div>
            {/* End .col */}

            <div className="col-xl-12">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="formGroupExampleInput13">{t('address')}</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput13"
                    />
                </div>
            </div>
            {/* End .col */}

            <div className="col-xl-12">
                <div className="my_profile_setting_textarea">
                    <label htmlFor="exampleFormControlTextarea1">
                        {t('aboutMe')}
                    </label>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="7"
                    ></textarea>
                </div>
            </div>
            {/* End .col */}

            <div className="col-xl-12 text-right">
                <div className="my_profile_setting_input">
                    <button className="btn btn1">{t('viewPublicProfile')}</button>
                    <button className="btn btn2">{t('updateProfile')}</button>
                </div>
            </div>
            {/* End .col */}
        </div>
    );
};

export default ProfileInfo;
