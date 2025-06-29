import agents from "@/data/agents";
import BreadCrumb2 from "@/components/agent-details/BreadCrumb2";
import SidebarListings from "@/components/agent-details/SidebarListings";
import TabDetailsContent from "@/components/agent-details/TabDetailsContent";
import CopyrightFooter from "@/components/common/footer/CopyrightFooter";
import Footer from "@/components/common/footer/Footer";
import Header from "@/components/common/header/DefaultHeader";
import MobileMenu from "@/components/common/header/MobileMenu";
import PopupSignInUp from "@/components/common/PopupSignInUp";

import Image from "next/image";

const AgentDetailsDynamic = async props => {
  const params = await props.params;

  const id = params.id;
  const agent=agents.find((item) => item.id == id) || agents[0]

  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {/* <!-- Agent Single Grid View --> */}
      <section className="our-agent-single bgc-f7 pb30-991 mt85 md-mt0">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="row">
                <div className="col-lg-12">
                  <BreadCrumb2 />
                </div>
                {/* End .col-12 */}

                <div className="col-lg-12">
                  <div className="feat_property list style2 agent align-items-center">
                    <div className="thumb">
                      <Image
                        width={286}
                        height={220}
                        className="img-whp w-100 h-100 cover"
                        src={agent?.img}
                        alt={agent?.img}
                      />
                      <div className="thmb_cntnt">
                        <ul className="tag mb0">
                          <li className="list-inline-item dn"></li>
                          <li className="list-inline-item">
                            <a href="#">{agent?.noOfListings} Listings</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* End .thumb */}

                    <div className="details">
                      <div className="tc_content">
                        <h4>{agent?.name}</h4>
                        <p className="text-thm">{agent?.type}</p>
                        <ul className="prop_details mb0">
                          <li>
                            <a href="#">Office: {agent?.office}</a>
                          </li>
                          <li>
                            <a href="#">Mobile: {agent?.mobile}</a>
                          </li>
                          <li>
                            <a href="#">Fax: {agent?.fax}</a>
                          </li>
                          <li>
                            <a href="#">Email: {agent?.email}</a>
                          </li>
                        </ul>
                      </div>
                      {/* End .tc_content */}

                      <div className="fp_footer">
                        <ul className="fp_meta float-start mb0">
                          {agent?.socialList?.map((social, i) => (
                            <li className="list-inline-item" key={i}>
                              <a
                                href={social.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <i className={`fa ${social.icon}`}></i>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* End .fp_footer */}
                    </div>
                  </div>
                  {/* End .feat_property */}

                  <div className="shop_single_tab_content style2 mt30">
                    <TabDetailsContent />
                  </div>
                </div>
                {/* End .col-12 */}
              </div>
            </div>
            {/* End .col-md-12 col-lg-8 content left side */}

            <div className="col-lg-4 col-xl-4">
              <SidebarListings />
            </div>
            {/* End .col-lg-4 col-xl-4 content left side */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>

      {/* <!-- Our Footer --> */}
      <section className="footer_one">
        <div className="container">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section>

      {/* <!-- Our Footer Bottom Area --> */}
      <section className="footer_middle_area pt40 pb40">
        <div className="container">
          <CopyrightFooter />
        </div>
      </section>
    </>
  );
};

export default AgentDetailsDynamic;
