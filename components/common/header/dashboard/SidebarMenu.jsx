'use client'

import Link from "next/link";
import { useTranslations } from 'next-intl';
import {
  isParentPageActive,
  isSinglePageActive,
} from "../../../../utils/daynamicNavigation";
import Image from "next/image";
import { usePathname, useParams } from "next/navigation";

const SidebarMenu = () => {
  const pathname = usePathname();
  const params = useParams();
  const locale = params.locale || 'en';
  const t = useTranslations('dashboard');

  const myProperties = [
    { id: 1, name: t('myProperties'), route: `/${locale}/my-properties` },
    { id: 2, name: "Advanced Elements", route: `/${locale}/my-properties` },
    { id: 3, name: "Editors", route: `/${locale}/my-properties` },
  ];
  const reviews = [
    { id: 1, name: t('myReviews'), route: `/${locale}/my-review` },
    { id: 2, name: t('visitorReviews'), route: `/${locale}/my-review` },
  ];
  const manageAccount = [
    // {
    //   id: 1,
    //   name: t('myPackage'),
    //   route: `/${locale}/my-package`,
    //   icon: "flaticon-box",
    // },
    {
      id: 2,
      name: t('myProfile'),
      route: `/${locale}/my-profile`,
      icon: "flaticon-user",
    },
    // { id: 3, name: t('logout'), route: `/${locale}/login`, icon: "flaticon-logout" },
  ];

  return (
    <>
      <ul className="sidebar-menu">
        <li className="sidebar_header header">
          <Link href={`/${locale}`}>
            <Image
              width={200}
              height={55}
              src="/assets/images/logo-white.svg"
              alt="logo-white.svg"
            />
            {/* <span>FindHouse</span> */}
          </Link>
        </li>
        {/* End header */}

        <li className="title">
          <span>{t('main')}</span>
          <ul>
            <li
              className={`treeview ${
                isSinglePageActive(`/${locale}/my-dashboard`, pathname)
                  ? "active"
                  : ""
              }`}
            >
              <Link href={`/${locale}/my-dashboard`}>
                <i className="flaticon-layers me-2 ms-2"></i>
                <span> {t('dashboard')}</span>
              </Link>
            </li>
            <li
              className={`treeview ${
                isSinglePageActive(`/${locale}/create-listing`, pathname)
                  ? "active"
                  : ""
              }`}
            >
              <Link href={`/${locale}/create-listing`}>
                <i className="flaticon-plus me-2 ms-2"></i>
                <span> {t('createProject')}</span>
              </Link>
            </li>
            <li
              className={`treeview ${
                isSinglePageActive(`/${locale}/my-message`, pathname)
                  ? "active"
                  : ""
              }`}
            >
              {/* <Link href={`/${locale}/my-message`}>
                <i className="flaticon-envelope me-2 ms-2"></i>
                <span> {t('message')}</span>
              </Link> */}
            </li>
          </ul>
        </li>
        {/* End Main */}

        <li className="title">
          {/* <span>{t('manageListings')}</span> */}
          <ul>
            {/* <li
              className={`treeview ${
                isParentPageActive(myProperties, pathname) ? "active" : ""
              }`}
            >
              <a data-bs-toggle="collapse" href="#my-property">
                <i className="flaticon-home me-2 ms-2"></i> <span>{t('myProperties')}</span>
                <i className="fa fa-angle-down pull-right"></i>
              </a>
              <ul className="treeview-menu collapse" id="my-property">
                {myProperties.map((item) => (
                  <li key={item.id}>
                    <Link href={item.route}>
                      <i className="fa fa-circle me-2 ms-2"></i> {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li> */}
            {/* end properties */}

            {/* <li
              className={`treeview ${
                isParentPageActive(reviews, pathname) ? "active" : ""
              }`}
            >
              <a data-bs-toggle="collapse" href="#review">
                <i className="flaticon-chat me-2 ms-2"></i>
                <span>{t('reviews')}</span>
                <i className="fa fa-angle-down pull-right"></i>
              </a>
              <ul className="treeview-menu collapse" id="review">
                {reviews.map((item) => (
                  <li key={item.id}>
                    <Link href={item.route}>
                      <i className="fa fa-circle me-2 ms-2"></i> {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li> */}
            {/* End Review */}

            {/* <li
              className={`treeview ${
                isSinglePageActive(`/${locale}/my-favourites`, pathname)
                  ? "active"
                  : ""
              }`}
            >
              <Link href={`/${locale}/my-favourites`}>
                <i className="flaticon-magnifying-glass me-2 ms-2"></i>
                <span> {t('myFavorites')}</span>
              </Link>
            </li> */}
            {/* <li
              className={`treeview ${
                isSinglePageActive(`/${locale}/my-saved-search`, pathname)
                  ? "active"
                  : ""
              }`}
            >
              <Link href={`/${locale}/my-saved-search`}>
                <i className="flaticon-magnifying-glass me-2 ms-2"></i>
                <span> {t('savedSearch')}</span>
              </Link>
            </li> */}
          </ul>
        </li>
        {/* End manage listing */}

        <li className="title">
          <span>{t('manageAccount')}</span>
          <ul>
            {manageAccount.map((item) => (
              <li
                className={
                  isSinglePageActive(item.route, pathname) ? "active" : ""
                }
                key={item.id}
              >
                <Link href={item.route}>
                  <i className={`${item.icon} me-2 ms-2`}></i> <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </>
  );
};

export default SidebarMenu;
