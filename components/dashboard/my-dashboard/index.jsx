'use client'

import { useTranslations } from 'next-intl';
import Header from "../../common/header/dashboard/Header";
import SidebarMenu from "../../common/header/dashboard/SidebarMenu";
import MobileMenu from "../../common/header/MobileMenu";
import Activities from "./Activities";
import AllStatistics from "./AllStatistics";
import StatisticsChart from "./StatisticsChart";

const index = ({ locale }) => {
  const t = useTranslations('dashboard');

  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      <div className="dashboard_sidebar_menu">
        <div
          className="offcanvas offcanvas-dashboard offcanvas-start"
          tabIndex="-1"
          id="DashboardOffcanvasMenu"
          data-bs-scroll="true"
        >
          <SidebarMenu />
        </div>
      </div>
      {/* End sidebar_menu */}

      {/* <!-- Our Dashbord --> */}
      <section className="our-dashbord dashbord bgc-f7 pb50"
        style={{ paddingLeft: locale === 'ar' ? '0' : '295px', paddingRight: locale === 'ar' ? '295px' : '0' }}
      >
        <div className="container-fluid ovh">
          <div className="row">
            <div className="col-lg-12 maxw100flex-992">
              <div className="row">
                {/* Start Dashboard Navigation */}
                <div className="col-lg-12">
                  <div className="dashboard_navigationbar dn db-1024">
                    <div className="dropdown">
                      <button
                        className="dropbtn"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#DashboardOffcanvasMenu"
                        aria-controls="DashboardOffcanvasMenu"
                      >
                        <i className="fa fa-bars pe-10 ps-10"></i> {t('dashboardNavigation')}
                      </button>
                    </div>
                  </div>
                </div>
                {/* End Dashboard Navigation */}

                <div className="col-lg-12 mb10">
                  <div className="breadcrumb_content style2">
                    <h2 className="breadcrumb_title">{t('howdyUser', { name: 'Hasan' })}</h2>
                    <p>{t('weAreGladToSeeYouAgain')}</p>
                  </div>
                </div>
              </div>
              {/* End .row */}

              <div className="row">
                <AllStatistics />
              </div>
              {/* End .row Dashboard top statistics */}

              <div className="row">
                <div className="col-xl-7">
                  <div className="application_statics">
                    <h4 className="mb-4">{t('viewStatistics')}</h4>
                    <StatisticsChart />
                  </div>
                </div>
                {/* End statistics chart */}

                <div className="col-xl-5">
                  <div className="recent_job_activity">
                    <h4 className="title mb-4">{t('recentActivities')}</h4>
                    <Activities />
                  </div>
                </div>
              </div>
              {/* End .row  */}

              <div className="row mt50">
                <div className="col-lg-12">
                  <div className="copyright-widget text-center">
                    <p>{t('poweredByCloudev')}</p>
                  </div>
                </div>
              </div>
              {/* End .row */}
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
