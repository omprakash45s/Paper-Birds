import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper, useLightbox } from "simple-react-lightbox";

// Import New Images
import masonary29 from "./../../images/pbsImages/img29.jpg";
import masonary30 from './../../images/gallery/pic77.jpg';
import masonary31 from './../../images/gallery/pic88.jpg';
import masonary32 from './../../images/gallery/pic99.jpg';
import masonary33 from './../../images/gallery/pic100.JPG';
import masonary34 from './../../images/gallery/abc.jpg';
import masonary35 from './../../images/gallery/kk.JPG';
import masonary36 from './../../images/gallery/a.JPG';
import masonary37 from './../../images/gallery/b.JPG';
import masonary38 from './../../images/gallery/c.JPG';
import masonary39 from './../../images/gallery/d.JPG';
import masonary40 from './../../images/gallery/e.jpg';
import masonary41 from './../../images/gallery/f.jpg';  
import masonary42 from './../../images/gallery/g.JPG';
import masonary43 from './../../images/gallery/h.jpg';
import masonary44 from './../../images/gallery/gal.jpg';
import masonary45 from './../../images/gallery/ab.JPG';
import masonary46 from './../../images/gallery/kkk.JPG';

const galleryImages = [
  { image: masonary29 },
  { image: masonary30 },
  { image: masonary31 },
  { image: masonary32 },
  { image: masonary33 },
  { image: masonary34 },
  { image: masonary35 },
  { image: masonary36 },
  { image: masonary37 },
  { image: masonary38 },
  { image: masonary39 },
  { image: masonary40 },
  { image: masonary41 },
  { image: masonary42 },
  { image: masonary43 },
  { image: masonary44 },
  { image: masonary45 },
  { image: masonary46 },
];

// Light Gallery on icon click
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
      speed: 1000,
      autoplaySpeed: 3000,
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
                className="gallery-carousel owl-carousel owl-theme dots-none"
                ref={(c) => (this.slider = c)}
                {...settings}
              >
                {galleryImages.map((item, index) => (
                  <div className="item p-3" key={index}>
                    <div className="dlab-box">
                      <div className="dlab-thum dlab-img-overlay1">
                        <img 
                          src={item.image} 
                          alt=""
                          style={{
                            width: "100%",
                            height: "300px", // Standard fixed height
                            objectFit: "cover",
                            borderRadius: "16px",
                            // --- COLOR UPDATE HERE ---
                            border: "5px solid #c1d94d", // Purple border
                            boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
                          }} 
                        />
                        <div className="overlay-bx" style={{ borderRadius: "16px" }}>
                          <div className="overlay-icon">
                            <Iconimage imageToOpen={index} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
              <div className="owl-nav" style={{ textAlign: "center", marginTop: "20px" }}>
                <div className="owl-prev" onClick={this.previous} style={{ cursor: "pointer", display: "inline-block", margin: "0 10px" }} />
                <div className="owl-next" onClick={this.next} style={{ cursor: "pointer", display: "inline-block", margin: "0 10px" }} />
              </div>
            </div>
          </SRLWrapper>
        </SimpleReactLightbox>
      </>
    );
  }
}
export default GallerySlider;