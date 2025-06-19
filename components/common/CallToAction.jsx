'use client';

import { useTranslations } from 'next-intl';
import Link from "next/link";

const CallToAction = () => {
  const t = useTranslations('footer');

  return (
    <div className="row">
      <div className="col-lg-8">
        <div className="start_partner tac-smd">
          <h2>{t('becomeRealEstateAgent')}</h2>
          <p>{t('becomeRealEstateAgentDesc')}</p>
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-4">
        <div className="parner_reg_btn text-right tac-smd">

          {/* TODO: Add the link to the register page href="/register" */}
          <Link href="#" className="btn btn-thm2">
            {t('registerNow')}
          </Link>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default CallToAction;
