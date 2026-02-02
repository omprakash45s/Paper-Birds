import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper, useLightbox } from "simple-react-lightbox";

import galery1 from "./../../images/gallery/img5.jpg";
import galery2 from "./../../images/gallery/img7.jpg";
import galery3 from "./../../images/gallery/img9.jpg";
import galery4 from "./../../images/gallery/img15.JPG";
import galery5 from "./../../images/gallery/img17.JPG";
import galery6 from "./../../images/gallery/img18.JPG";
import galery7 from "./../../images/gallery/img19.JPG";
import galery8 from "./../../images/gallery/img21.JPG";
import galery9 from "./../../images/gallery/img24.JPG";

//Light Gallery on icon click
const Iconimage = (props) => {
  const { openLightbox } = useLightbox();
  return (
    <Link
      to={"#"}
      onClick={(e) => {
        e.preventDefault();
        openLightbox(props.imageToOpen);
      }}
      className="check-km"
    >
      <i className="fa fa-search icon-bx-xs"></i>
    </Link>
  );
};

const latestBlog = [
  { image: galery1 },
  { image: galery2 },
  { image: galery3 },
  { image: galery4 },
  { image: galery5 },
  { image: galery6 },
  { image: galery7 },
  { image: galery8 },
  { image: galery9 },
];
class GallerySlider extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    var settings = {
      arrows: false,
      slidesToShow: 3,
      infinite: true,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <>
        <SimpleReactLightbox>
          <SRLWrapper>
            <div className="sprite-nav">
              <Slider
                className="gallery-carousel owl-carousel owl-theme dots-none "
                ref={(c) => (this.slider = c)}
                {...settings}
              >
                {latestBlog.map((item, index) => (
                  <div className="item p-3" key={index}>
                    <div className="dlab-box frame-box">
                      <div className="dlab-thum dlab-img-overlay1">
                        <img src={item.image} alt="" />
                        <div className="overlay-bx">
                          <div className="overlay-icon">
                            <Iconimage imageToOpen={index} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
              <div className="owl-nav" style={{ textAlign: "center" }}>
                <div className=" owl-prev " onClick={this.previous} />
                <div className="owl-next " onClick={this.next} />
              </div>
            </div>
          </SRLWrapper>
        </SimpleReactLightbox>
      </>
    );
  }
}
export default GallerySlider;
