'use client'
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import { useTranslations } from 'next-intl';
import LanguageSwitcher from "../../LanguageSwitcher";
import { useState, useEffect } from 'react';


const HeaderMenuContent = ({ float = "" }) => {
  const pathname = usePathname();
  const [currentLocale, setCurrentLocale] = useState('en');

  useEffect(() => {
    // Get the current language from localStorage or default to 'en'
    const savedLocale = localStorage.getItem('preferredLanguage') || 'en';
    setCurrentLocale(savedLocale);
  }, []);
  const locale = currentLocale;
  const t = useTranslations();

  // Create localized paths
  const localePath = (path) => `/${locale}${path}`;

  const home = [
    {
      id: 1,
      name: t('navigation.home'),
      routerPath: localePath("/"),
    },
  //   { id: 2, name: "Home 2", routerPath: "/home-2" },
  //   {
  //     id: 3,
  //     name: "Home 3",
  //     routerPath: "/home-3",
  //   },
  //   { id: 4, name: "Home 4", routerPath: "/home-4" },
  //   { id: 5, name: "Home 5", routerPath: "/home-5" },
  //   { id: 6, name: "Home 6", routerPath: "/home-6" },
  //   { id: 7, name: "Home 7", routerPath: "/home-7" },
  //   { id: 8, name: "Home 8", routerPath: "/home-8" },
  //   { id: 9, name: "Home 9", routerPath: "/home-9" },
  //   { id: 10, name: "Home 10", routerPath: "/home-10" },
  ];

  const listing = [
    {
      id: 1,
      title: t('navigation.projects'),
      name: t('navigation.projects'),
      routerPath: localePath("/listing-map-v2"),
      items: []
      // items: [
      //   {
      //     name: "Grid v1",
      //     routerPath: "/listing-grid-v1",
      //   },
      //   {
      //     name: "Grid v2",
      //     routerPath: "/listing-grid-v2",
      //   },
      //   {
      //     name: "Grid v3",
      //     routerPath: "/listing-grid-v3",
      //   },
      //   {
      //     name: "Grid v4",
      //     routerPath: "/listing-grid-v4",
      //   },
      //   {
      //     name: "Grid v5",
      //     routerPath: "/listing-grid-v5",
      //   },
      //   {
      //     name: "Grid v6",
      //     routerPath: "/listing-grid-v6",
      //   },
      // ],
    },
    // {
    //   id: 2,
    //   title: "Listing List",
    //   items: [
    //     {
    //       name: "List V1",
    //       routerPath: "/listing-list-v1",
    //     },
    //   ],
    // },
    // {
    //   id: 3,
    //   title: "Listing Style",
    //   items: [
    //     {
    //       name: "Parallax Style",
    //       routerPath: "/parallax-style",
    //     },
    //     {
    //       name: "Slider Style",
    //       routerPath: "/slider-style",
    //     },
    //     {
    //       name: "Map Header",
    //       routerPath: "/map-header",
    //     },
    //   ],
    // },
    // {
    //   id: 4,
    //   title: "Listing Half",
    //   items: [
    //     {
    //       name: "Map V1",
    //       routerPath: "/listing-map-v1",
    //     },
    //     {
    //       name: "Map V2",
    //       routerPath: "/listing-map-v2",
    //     },
    //     {
    //       name: "Map V3",
    //       routerPath: "/listing-map-v3",
    //     },
    //     {
    //       name: "Map V4",
    //       routerPath: "/listing-map-v4",
    //     },
    //   ],
    // },
    // {
    //   id: 5,
    //   title: "Agent View",
    //   items: [
    //     {
    //       name: "Agent V1",
    //       routerPath: "/agent-v1",
    //     },
    //     {
    //       name: "Agent V2",
    //       routerPath: "/agent-v2",
    //     },
    //     {
    //       name: "Agent Details",
    //       routerPath: "/agent-details",
    //     },
    //   ],
    // },
    // {
      // id: 6,
      // title: "Agencies",
      // name: "Agencies",
      // routerPath: "/agency-v2",
      // items: []
      // items: [
      //   {
      //     name: "Agencies V1",
      //     routerPath: "/agency-v1",
      //   },
      //   {
      //     name: "Agencies V2",
      //     routerPath: "/agency-v2",
      //   },
      //   {
      //     name: "Agencies Details",
      //     routerPath: "/agency-details",
      //   },
      // ],
    // },
  ];

  const agencies = [
    {
      id: 1,
      title: t('navigation.agencies'),
      name: t('navigation.agencies'),
      routerPath: localePath("/agency-v2"),
    }
  ];

  const property = [
    {
      id: 1,
      title: t('navigation.dashboard'),
      items: [
        {
          name: t('navigation.dashboard'),
          routerPath: localePath("/my-dashboard"),
        },
        {
          name: t('navigation.myProperties'),
          routerPath: localePath("/my-properties"),
        },
        {
          name: t('navigation.myMessage'),
          routerPath: localePath("/my-message"),
        },
        {
          name: t('navigation.myReview'),
          routerPath: localePath("/my-review"),
        },
        {
          name: t('navigation.myFavourites'),
          routerPath: localePath("/my-favourites"),
        },
        {
          name: t('navigation.myProfile'),
          routerPath: localePath("/my-profile"),
        },
        {
          name: t('navigation.myPackage'),
          routerPath: localePath("/my-package"),
        },
        {
          name: t('navigation.mySavedSearch'),
          routerPath: localePath("/my-saved-search"),
        },
        {
          name: t('navigation.addProject'),
          routerPath: localePath("/create-listing"),
        },
      ],
    },
    {
      id: 2,
      title: "Listing Single",
      items: [
        {
          name: "Single V1",
          routerPath: "/listing-details-v1",
        },
        {
          name: "Single V2",
          routerPath: "/listing-details-v2",
        },
        {
          name: "Single V3",
          routerPath: "/listing-details-v3",
        },
        {
          name: "Single V4",
          routerPath: "/listing-details-v4",
        },
      ],
    },
  ];
  const blogsOld = [
    { id: 1, name: "Blog List 1", routerPath: "/blog-list-1" },
    { id: 2, name: "Blog List 2", routerPath: "/blog-list-2" },
    { id: 3, name: "Blog List 3", routerPath: "/blog-list-3" },
    {id: 4,
      name: "Blog Details",
      routerPath: "/blog-details",}
  ];

  const blog = [
    {
      id: 1,
      name: t('navigation.blog'),
      routerPath: localePath("/blog-list-3"),
    },
  ];

  const pagesOld = [
    { id: 1, name: "About Us", routerPath: "/about-us" },
    { id: 2, name: "Gallery", routerPath: "/gallery" },
    { id: 3, name: "Faq", routerPath: "/faq" },
    { id: 4, name: "LogIn", routerPath: "/login" },
    { id: 5, name: "Compare", routerPath: "/compare" },
    { id: 6, name: "Membership", routerPath: "/membership" },

    { id: 7, name: "Register", routerPath: "/register" },
    { id: 8, name: "Service", routerPath: "/service" },
    { id: 9, name: "404 Page", routerPath: "/404" },
    { id: 10, name: "Terms & Conditions", routerPath: "/terms" },
  ]

  const pages = [
    {
      id: 1,
      name: t('navigation.aboutUs'),
      routerPath: localePath("/about-us"),
    },
    {
      id: 2,
      name: t('navigation.gallery'),
      routerPath: localePath("/gallery"),
    },
    {
      id: 3,
      name: t('navigation.faq'),
      routerPath: localePath("/faq"),
    },
    {
      id: 4,
      name: t('navigation.login'),
      routerPath: localePath("/login"),
    },
    {
      id: 5,
      name: t('navigation.register'),
      routerPath: localePath("/register"),
    },
    {
      id: 6,
      name: t('navigation.terms'),
      routerPath: localePath("/terms"),
    },
    {
      id: 7,
      name: t('navigation.notFound'),
      routerPath: localePath("/404"),
    },
    {
      id: 8,
      name: t('navigation.compare'),
      routerPath: localePath("/compare"),
    },
    {
      id: 9,
      name: t('navigation.membership'),
      routerPath: localePath("/membership"),
    },
    {
      id: 10,
      name: t('navigation.service'),
      routerPath: localePath("/service"),
    },
  ];

  return (
    <ul
      id="respMenu"
      className="ace-responsive-menu text-end d-lg-block d-none"
      data-menu-style="horizontal"
    >
      <li className="dropitem">
        <a
          href="/"
          className={
            home.some((page) => page.routerPath?.split('/')[2] === pathname?.split('/')[2])
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">{t('navigation.home')}</span>
          {/* <span className="arrow"></span> */}
        </a>
        {/* <!-- Level Two--> */}

        {/* <ul className="sub-menu ">
          {home.map((item) => (
            <li key={item.id}>
              <Link
                href={item.routerPath}
                className={pathname?.split('/')[2] === item.routerPath?.split('/')[2] ? "ui-active" : undefined}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul> */}
      </li>
      {/* End .dropitem */}

      <li className="dropitem">
        <a
          href={listing[0].routerPath}
          className={
            listing.some((page) =>
              page.routerPath?.split('/')[2]?.split('-')[0] === pathname?.split('/')[2]?.split('-')[0]
            )
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">{t('navigation.projects')}</span>
          {/* <span className="arrow"></span> */}
        </a>
        {/* <!-- Level Two--> */}
        {/* <ul className="sub-menu "> */}
          {/* {listing.map((item) => ( */}
            {/* <li key={item.id}> */}
              {/* <a */}
                {/* href={item.routerPath} */}
                {/* className={ */}
                  {/* pathname?.split('/')[2] === item.routerPath?.split('/')[2] */}
                    {/* ? "ui-active" */}
                    {/* : undefined */}
                {/* } */}
              {/* > */}
                {/* {item.title} */}
              {/* </a> */}
              {/* <!-- Level Three--> */}
              {/* <ul className="sub-menu ">
                {item.items.map((val, i) => (
                  <li key={i}>
                    <Link
                      href={val.routerPath}
                      className={
                        pathname?.split('/')[1] === val.routerPath?.split('/')[1]
                          ? "ui-active"
                          : undefined
                      }
                    >
                      {val.name}
                    </Link>
                  </li>
                // ))}
              </ul> */}
            {/* </li> */}
          {/* ))} */}
        {/* </ul> */}
      </li>
      {/* End .dropitem */}

      {/* <li className="dropitem">
        <a
          href={agencies[0].routerPath}
          className={
            agencies.some((page) => page.routerPath?.split('/')[1] === pathname?.split('/')[1])
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">Agencies</span> */}
          {/* <span className="arrow"></span> */}
        {/* </a> */}
        {/* <!-- Level Two--> */}

        {/* <ul className="sub-menu ">
          {home.map((item) => (
            <li key={item.id}>
              <Link
                href={item.routerPath}
                className={
                  pathname?.split('/')[2] === item.routerPath?.split('/')[2] ? "ui-active" : undefined
                }
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul> */}
      {/* </li> */}
      {/* End .dropitem */}

      {/* <li className="dropitem">
        <a
          href="#"
          className={
            property.some((parent) => {
              return parent.items.some(
                (page) =>
                  page.routerPath?.split('/')[2] === pathname?.split('/')[2] 
                  // page.routerPath?.split('/')[2] + "/[id]" === pathname?.split('/')[2]
              );
            })
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">Property</span>{" "}
          <span className="arrow"></span>
        </a>
        <ul className="sub-menu ">
          {property.map((item) => (
            <li className="dropitem arrow" key={item.id}>
              <a
                href="#"
                className={
                  item.items.some(
                    (page) =>
                      page.routerPath?.split('/')[1] === pathname?.split('/')[1] 
                      // page.routerPath?.split('/')[1] + "/[id]" === pathname?.split('/')[1]
                  )
                    ? "ui-active"
                    : undefined
                }
              >
                {item.title}
              </a> */}
              {/* <!-- Level Three--> */}
              {/* <ul className="sub-menu ">
                {item.items.map((val, i) => (
                  <li key={i}>
                    <Link
                      href={val.routerPath}
                      className={
                        pathname?.split('/')[1] === val.routerPath?.split('/')[1] 
                        // val.routerPath + "/[id]" === pathname?.split('/')[1]
                          ? "ui-active"
                          : undefined
                      }
                    >
                      {val.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </li> */}
      {/* End .dropitem */}

      {/* <li className="dropitem">
        <a
          href="#"
          className={
            pages.some((page) => page.routerPath?.split('/')[2] === pathname?.split('/')[2])
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">Pages</span>
          <span className="arrow"></span>
        </a>
        <ul className="sub-menu ">
          {pages.map((item) => (
            <li key={item.id}>
              <Link
                href={item.routerPath}
                className={
                  pathname?.split('/')[1] === item.routerPath?.split('/')[1] ? "ui-active" : undefined
                }
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </li> */}
      {/* End .dropitem */}

      {/* <li className="dropitem">
        <a
          href="#"
          className={
            blog.some(
              (page) =>
                page.routerPath?.split('/')[1] === pathname?.split('/')[1] 
                // page.routerPath?.split('/')[1] + "/[id]" === pathname?.split('/')[1]
            )
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">Blog</span>
          <span className="arrow"></span>
        </a>
        <ul className="sub-menu ">
          {blog.map((item) => (
            <li key={item.id}>
              <Link
                href={item.routerPath}
                className={
                  pathname?.split('/')[2] === item.routerPath?.split('/')[2]
                  // item.routerPath + "/[id]" === pathname?.split('/')[2]
                    ? "ui-active"
                    : undefined
                }
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </li> */}
      {/* End .dropitem */}

      {/* <li className="last">
        <Link
          href="/contact"
          className={pathname === "/contact" ? "ui-active" : undefined}
        >
          Contact
        </Link>
      </li> */}
      {/* End .dropitem */}

      {/* User setting dropdown - only show when on dashboard, create-listing, or profile pages */}
      {(pathname?.includes('/my-dashboard') || pathname?.includes('/create-listing') || pathname?.includes('/my-profile')) && (
        <li className="user_setting">
          <div className="dropdown">
            <a className="btn dropdown-toggle" href="#" data-bs-toggle="dropdown">
              <img
                className="rounded-circle"
                style={{width: '50px', height: '50px'}}
                src="/assets/images/team/e1.png"
                alt="e1.png"
              />
            </a>
            <div className="dropdown-menu">
              <div className="user_set_header">
                <img
                  className="rounded-circle"
                  style={{width: '50px', height: '50px'}}
                  src="/assets/images/team/e1.png"
                  alt="e1.png"
                />
                <p>
                  Ali Tufan <br />
                  <span className="address">Kuala Lumpur</span>
                </p>
              </div>
              <div className="user_setting_content">
                <Link className="dropdown-item" style={{color: '#484848'}} href={localePath("/my-profile")}>
                  <i className="flaticon-user"></i> {t('navigation.myProfile')}
                </Link>
                {/* <Link className="dropdown-item" href={localePath("/my-message")}>
                  <i className="flaticon-chat"></i> {t('navigation.myMessage')}
                </Link> */}
                {/* <Link className="dropdown-item" href={localePath("/my-properties")}>
                  <i className="flaticon-home"></i> {t('navigation.myProperties')}
                </Link> */}
                {/* <Link className="dropdown-item" href={localePath("/my-favourites")}>
                  <i className="flaticon-heart"></i> {t('navigation.myFavourites')}
                </Link> */}
                {/* <Link className="dropdown-item" href={localePath("/my-review")}>
                  <i className="flaticon-review"></i> {t('navigation.myReview')}
                </Link> */}
                <Link className="dropdown-item" style={{color: '#484848'}} href={localePath("/login")}>
                  <i className="flaticon-logout"></i> {t('auth.signOut')}
                </Link>
              </div>
            </div>
          </div>
        </li>
      )}
      {/* End .dropitem */}

      {/* Conditional Login/Register button - only show when not on dashboard, create-listing, or profile pages */}
      {!pathname?.includes('/my-dashboard') && !pathname?.includes('/create-listing') && !pathname?.includes('/my-profile') && (
        <li className={`list-inline-item list_s ${float}`}>
          <a
            href="#"
            className="btn flaticon-user"
            data-bs-toggle="modal"
            data-bs-target=".bd-example-modal-lg"
          >
            <span className="dn-lg">{t('navigation.loginRegister')}</span>
          </a>
        </li>
      )}
      {/* End .dropitem */}

      <li className="list-inline-item list_s">
        <Link
          href={localePath("/create-listing")}
          className="btn flaticon-plus"
        >
          <span className="dn-lg"> {t('navigation.addProject')}</span>
        </Link>
      </li>
      {/* End .dropitem */}

      <li className="list-inline-item add_listing ">
        <LanguageSwitcher />
      </li>
      {/* End .dropitem */}
    </ul>
  );
};

export default HeaderMenuContent;
