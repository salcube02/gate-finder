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
import ListingOne from "@/components/listing-single/ListingOne";

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

const ListingDynamicDetailsV1 = async props => {
  const params = await props.params;

  const { id, locale } = params;
    
  // Use appropriate properties file based on locale
  const properties = locale === 'ar' ? propertiesAr : propertiesEn;
  const property = properties?.find((item) => item.id == id) || properties[0];
  
  // Check if current locale is RTL
  const isRTL = locale === 'ar';

  return (
    <div className={isRTL ? 'rtl-layout' : 'ltr-layout'} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {/* <!-- Listing Single Property --> */}
      <ListingOne property={property} />
    

      {/* <!-- Agent Single Grid View --> */}
      <section className="our-agent-single bgc-f7 pb30-991">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <DetailsContent id={id} />
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

export default ListingDynamicDetailsV1;
