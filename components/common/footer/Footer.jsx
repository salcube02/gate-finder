'use client';

import { useTranslations } from 'next-intl';
import Link from "next/link";
import Social from "./Social";
import SubscribeForm from "./SubscribeForm";

const Footer = () => {
  const footerT = useTranslations('footer');
  const commonT = useTranslations('common');

  return (
    <>
      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 pr0 pl0">
        <div className="footer_about_widget">
          <h4>{footerT('aboutSite')}</h4>
          <p>
            {footerT('aboutSiteDesc')}
          </p>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_qlink_widget">
          <h4>{commonT('quickLinks')}</h4>
          <ul className="list-unstyled">
            <li>
              <Link href="/">{footerT('aboutUs')}</Link>
            </li>
            <li>
              <Link href="/">{footerT('termsConditions')}</Link>
            </li>
            <li>
              <Link href="/">{footerT('usersGuide')}</Link>
            </li>
            <li>
              <Link href="/">{footerT('supportCenter')}</Link>
            </li>
            <li>
              <Link href="/">{footerT('pressInfo')}</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_contact_widget">
          <h4>{footerT('contact')}</h4>
          <ul className="list-unstyled">
            <li>
              <a href="mailto:info@keyfinder.net">info@keyfinder.net</a>
            </li>
            <li>
              <a href="#">Test, Damascus</a>
            </li>
            <li>
              <a href="#">Syria.</a>
            </li>
            <li>
              <a href="tel:+4733378901">+963 11-4301</a>
            </li>
            <li>
              <a href="tel:+4733378901">+963 11-4301</a>
            </li>
          </ul>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_social_widget">
          <h4>{commonT('followUs')}</h4>
          <ul className="mb30">
            <Social />
          </ul>
          <h4>{commonT('subscribe')}</h4>
          <SubscribeForm />
        </div>
      </div>
    </>
  );
};

export default Footer;
