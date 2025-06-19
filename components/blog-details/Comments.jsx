"use client"
import Image from "next/image";
import { useTranslations } from 'next-intl';
import Ratings from "./Ratings";

const Comments = () => {
  let t;
  try {
    t = useTranslations('comments');
  } catch (error) {
    console.warn('Translation hook failed, using fallbacks:', error);
    t = (key) => {
      const fallbacks = {
        'dianaCooper': 'Diana Cooper',
        'aliTufan': 'Ali Tufan',
        'comment1': 'Beautiful home, very picturesque and close to everything in jtree! A little warm for a hot weekend, but would love to come back during the cooler seasons!',
        'comment2': 'Beautiful home, very picturesque and close to everything in jtree! A little warm for a hot weekend, but would love to come back during the cooler seasons!'
      };
      return fallbacks[key] || key;
    };
  }

  const commmetContent = [
    {
      id: 1,
      img: "1",
      name: t('dianaCooper'),
      ratings: (
        <>
          <Ratings />
        </>
      ),
      data: "",
      text: t('comment1'),
    },
    {
      id: 2,
      img: "2",
      name: t('aliTufan'),
      ratings: (
        <>
          <Ratings />
        </>
      ),
      data: "",
      text: t('comment2'),
    },
  ];
  return (
    <>
      {commmetContent.map((item) => (
        <div className="mbp_first media w-100" key={item.id}>
          <Image
            width={80}
            height={80}
            src={`/assets/images/testimonial/${item.img}.png`}
            className="mr-3"
            alt={item.img}
          />
          <div className="media-body">
            <h4 className="sub_title mt-0">
              {item.name}
              <span className="sspd_review">
                <ul className="mb0 pl15">{item.ratings}</ul>
              </span>
            </h4>
            <a className="sspd_postdate fz14" href="#">
              {item.data}
            </a>
            <p className="fz14 mt10">{item.text}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Comments;
