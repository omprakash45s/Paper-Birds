import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bnr1 from "./../../images/main-slider/s1.png";
import bnr2 from "./../../images/main-slider/s2.png";
// import bnr3 from "./../../images/main-slider/s3.png";
import Carousel from "react-bootstrap/Carousel";

//Mobile
import bnr1Mob from "./../../images/main-slider/7.png";
import bnr2Mob from "./../../images/main-slider/8.png";
// import bnr3Mob from "./../../images/main-slider/Slide03Mob.jpg";

const carouselBlog = [{ image: bnr1 }, { image: bnr2 } /*, { image: bnr3 }*/];

const carouselBlogMob = [
  { image: bnr1Mob },
  { image: bnr2Mob },
  // { image: bnr3Mob },
];

const BannerSlider = () => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Carousel
      indicators={false}
      controls={true}
      className="owl-slider owl-carousel owl-theme owl-btn-center-lr dots-none"
      autoplay={true}
    >
      {isMobileView
        ? carouselBlogMob.map((item, index) => (
            <Carousel.Item key={index}>
              <div className="slide-item">
                <div className="slide-item-img">
                  <img src={item.image} alt="" />
                </div>
                <div className="slide-content"></div>
              </div>
            </Carousel.Item>
          ))
        : carouselBlog.map((item, index) => (
            <Carousel.Item key={index}>
              <div className="slide-item">
                <div className="slide-item-img">
                  <img src={item.image} alt="" />
                </div>
                <div className="slide-content"></div>
              </div>
            </Carousel.Item>
          ))}
    </Carousel>
  );
};

export default BannerSlider;
