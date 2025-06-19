import "photoswipe/dist/photoswipe.css";
import CopyrightFooter from "@/components/common/footer/CopyrightFooter";
import Footer from "@/components/common/footer/Footer";
import Header from "@/components/common/header/DefaultHeader";
import MobileMenu from "@/components/common/header/MobileMenu";
import PopupSignInUp from "@/components/common/PopupSignInUp";
import propertiesEn from "@/data/properties";
import propertiesAr from "@/data/properties-ar";
import DetailsContent from "@/components/listing-details-v1/DetailsContent";
import Sidebar from "@/components/listing-details-v1/Sidebar";
import ListingTwo from "@/components/listing-single/ListingTwo";

// Generate metadata for the page
export async function generateMetadata({ params }) {
  const { id, locale } = await params;
  const properties = locale === 'ar' ? propertiesAr : propertiesEn;
  const property = properties?.find((item) => item.id == id) || properties[0];
  
  return {
    title: property?.title || 'Property Details',
    description: `${property?.title} - ${property?.location}`,
  };
}

const ListingDynamicDetailsV2 = async props => {
  const params = await props.params;

  const { id, locale } = params;
  
  console.log("locale", locale);
  
  
  // Use appropriate properties file based on locale
  const properties = locale === 'ar' ? propertiesAr : propertiesEn;
  const property = properties?.find((item) => item.id == id) || properties[0];
  
  // Check if current locale is RTL
  const isRTL = locale === 'ar';

  return (
    <div className={isRTL ? 'rtl-layout' : 'ltr-layout'}>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {/* <!-- Listing Single Property --> */}

      <ListingTwo property={property} />
      

      {/* <!-- Agent Single Grid View --> */}
      <section className="our-agent-single bgc-f7 pb30-991">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="listing_single_description2 mt30-767 mb30-767">
                <div className="single_property_title">
                  <h2>{property?.title}</h2>
                  <p>{property?.location}</p>
                </div>
                <div className="single_property_social_share style2 static-title">
                  <div className="price">
                    <h2>
                      {isRTL ? (
                        <>
                          ${Number(property.price).toLocaleString('en-US')} {' '}
                          
                        </>
                      ) : (
                        <>
                          ${Number(property.price).toLocaleString('en-US')}
                        </>
                      )}
                      {/* <small>/mo</small> */}
                    </h2>
                  </div>
                </div>
              </div>
              {/* End .listing_single_description2 */}

              <DetailsContent />
            </div>
            {/* End details content .col-lg-8 */}

            <div className="col-lg-4 col-xl-4">
              <Sidebar />
            </div>
            {/* End sidebar content .col-lg-4 */}
          </div>
          {/* End .row */}
        </div>
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
    </div>
  );
};

export default ListingDynamicDetailsV2;
