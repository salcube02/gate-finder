"use client"
import { useTranslations } from 'next-intl';

const Attachments = () => {
  let t;
  try {
    t = useTranslations('attachments');
  } catch (error) {
    console.warn('Translation hook failed, using fallbacks:', error);
    t = (key) => {
      const fallbacks = {
        'demoWordDocument': 'Demo Word Document',
        'demoPdfDocument': 'Demo pdf Document'
      };
      return fallbacks[key] || key;
    };
  }

  return (
    <>
      <div className="icon_box_area style2">
        <div className="score">
          <span className="flaticon-document text-thm fz30"></span>
        </div>
        <div className="details">
          <h5>
            <span className="flaticon-download text-thm pr10"></span> {t('demoWordDocument')}
          </h5>
        </div>
      </div>
      {/* End .icon_box_area */}

      <div className="icon_box_area style2">
        <div className="score">
          <span className="flaticon-pdf text-thm fz30"></span>
        </div>
        <div className="details">
          <h5>
            <span className="flaticon-download text-thm pr10"></span> {t('demoPdfDocument')}
          </h5>
        </div>
      </div>
    </>
  );
};

export default Attachments;
