'use client'

import { useTranslations } from 'next-intl';

const CheckBoxFilter = () => {
  const t = useTranslations('dashboard');

  return (
    <>
      <div className="col-xxs-6 col-sm col-lg col-xl">
        <ul className="ui_kit_checkbox selectable-list">
          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck1"
              />
              <label className="form-check-label" htmlFor="customCheck1">
                {t('airConditioning')}
              </label>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck2"
              />
              <label className="form-check-label" htmlFor="customCheck2">
                {t('lawn')}
              </label>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck3"
              />
              <label className="form-check-label" htmlFor="customCheck3">
                {t('swimmingPool')}
              </label>
            </div>
          </li>
          {/* End li */}
        </ul>
      </div>
      {/* End .col */}

      <div className="col-xs-6 col-sm col-lg col-xl">
        <ul className="ui_kit_checkbox selectable-list">
          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck4"
              />
              <label className="form-check-label" htmlFor="customCheck4">
                {t('barbeque')}
              </label>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck5"
              />
              <label className="form-check-label" htmlFor="customCheck5">
                {t('microwave')}
              </label>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck6"
              />
              <label className="form-check-label" htmlFor="customCheck6">
                {t('tvCable')}
              </label>
            </div>
          </li>
          {/* End li */}
        </ul>
      </div>
      {/* End .col */}

      <div className="col-xs-6 col-sm col-lg col-xl">
        <ul className="ui_kit_checkbox selectable-list">
          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck7"
              />
              <label className="form-check-label" htmlFor="customCheck7">
                {t('dryer')}
              </label>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck8"
              />
              <label className="form-check-label" htmlFor="customCheck8">
                {t('outdoorShower')}
              </label>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck9"
              />
              <label className="form-check-label" htmlFor="customCheck9">
                {t('washer')}
              </label>
            </div>
          </li>
          {/* End li */}
        </ul>
      </div>
      {/* End .col */}

      <div className="col-xxs-6 col-sm col-lg col-xl">
        <ul className="ui_kit_checkbox selectable-list">
          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck10"
              />
              <label className="form-check-label" htmlFor="customCheck10">
                {t('gym')}
              </label>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck11"
              />
              <label className="form-check-label" htmlFor="customCheck11">
                {t('refrigerator')}
              </label>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck12"
              />
              <label className="form-check-label" htmlFor="customCheck12">
                {t('wifi')}
              </label>
            </div>
          </li>
          {/* End li */}
        </ul>
      </div>
      {/* End .col */}

      <div className="col-xxs-6 col-sm col-lg col-xl">
        <ul className="ui_kit_checkbox selectable-list">
          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck13"
              />
              <label className="form-check-label" htmlFor="customCheck13">
                {t('laundry')}
              </label>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck14"
              />
              <label className="form-check-label" htmlFor="customCheck14">
                {t('sauna')}
              </label>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck15"
              />
              <label className="form-check-label" htmlFor="customCheck15">
                {t('windowCoverings')}
              </label>
            </div>
          </li>
          {/* End li */}
        </ul>
      </div>
      {/* End .col */}
    </>
  );
};

export default CheckBoxFilter;
