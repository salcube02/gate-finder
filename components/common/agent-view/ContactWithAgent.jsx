"use client"
import { useTranslations } from 'next-intl';

const ContactWithAgent = () => {
  let t;
  try {
    t = useTranslations('contactWithAgent');
  } catch (error) {
    console.warn('Translation hook failed, using fallbacks:', error);
    t = (key) => {
      const fallbacks = {
        'yourName': 'Your Name',
        'phone': 'Phone',
        'email': 'Email',
        'yourMessage': 'Your Message',
        'sendMessage': 'Send Message'
      };
      return fallbacks[key] || key;
    };
  }

  return (
    <form action="#">
      <ul className="sasw_list mb0">
        <li className="search_area">
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder={t('yourName')}
              required
            />
          </div>
        </li>
        {/* End li */}
        <li className="search_area">
          <div className="form-group mb-3">
            <input
              type="number"
              className="form-control"
              placeholder={t('phone')}
              required
            />
          </div>
        </li>{" "}
        {/* End li */}
        <li className="search_area">
          <div className="form-group mb-3">
            <input
              type="email"
              className="form-control"
              placeholder={t('email')}
              required
            />
          </div>
        </li>{" "}
        {/* End li */}
        <li className="search_area">
          <div className="form-group mb-3">
            <textarea
              id="form_message"
              name="form_message"
              className="form-control "
              rows="5"
              required
              placeholder={t('yourMessage')}
            ></textarea>
          </div>
        </li>{" "}
        {/* End li */}
        <li>
          <div className="search_option_button">
            <button type="submit" className="btn btn-block btn-thm w-100">
              {t('sendMessage')}
            </button>
          </div>
        </li>{" "}
        {/* End li */}
      </ul>
    </form>
  );
};

export default ContactWithAgent;
