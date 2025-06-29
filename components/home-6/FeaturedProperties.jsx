'use client'

import Link from "next/link";
import Slider from "react-slick";
import properties from "../../data/properties";
import Image from "next/image";

const FeaturedProperties = () => {
  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1200,

    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings} arrows={true}>
        {properties.slice(15, 21).map((item) => (
          <div className="item" key={item.id}>
            <div className="properti_city home6">
              <div className="thumb">
                <Image
                  width={367}
                  height={370}
                  className="img-whp"
                  src={item.img}
                  alt="fp1.jpg"
                />

                <div className="thmb_cntnt">
                  <ul className="tag mb0">
                    {item.saleTag.map((val, i) => (
                      <li className="list-inline-item" key={i}>
                        <a href="#">{val}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* End .thumb */}

              <div className="overlay">
                <div className="details">
                  <Link
                    href={`/listing-details-v1/${item.id}`}
                    className="fp_price"
                  >
                    ${item.price}
                    {/* <small>/mo</small> */}
                  </Link>
                  <h4>
                    <Link href={`/listing-details-v2/${item.id}`}>
                      {item.title}
                    </Link>
                  </h4>
                  <ul className="prop_details mb0">
                    {item.itemDetails.map((val, i) => (
                      <li className="list-inline-item" key={i}>
                        <a href="#">
                          {val.name}: {val.number}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default FeaturedProperties;
