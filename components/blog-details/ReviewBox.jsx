"use client"
import { useTranslations } from 'next-intl';

const ReviewBox = () => {
  let t;
  try {
    t = useTranslations('reviewBox');
  } catch (error) {
    console.warn('Translation hook failed, using fallbacks:', error);
    t = (key) => {
      const fallbacks = {
        'reviewTitle': 'Review Title',
        'yourReview': 'Your Review',
        'submitReview': 'Submit Review'
      };
      return fallbacks[key] || key;
    };
  }

  return (
    <form className="comments_form">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder={t('reviewTitle')}
          required
        />
      </div>
      {/* End .form-group */}

      <div className="form-group">
        <textarea
          className="form-control"
          rows="6"
          placeholder={t('yourReview')}
          required
        ></textarea>
      </div>
      {/* End .form-group */}

      <button type="submit" className="btn btn-thm">
        {t('submitReview')}
      </button>
      {/* End .btn */}
    </form>
  );
};

export default ReviewBox;
