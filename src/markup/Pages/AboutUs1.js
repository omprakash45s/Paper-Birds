import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import PageTitle from "../Layout/PageTitle";
import Masonry from "react-masonry-component";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper, useLightbox } from "simple-react-lightbox";
import AccordionBlog from "../Element/AccordionBlog";
import TestiMonialSlider from "../Element/TestiMonialSlider";
import VideoPopup from "../Element/VideoPopup";
//Images
import bnr1 from "./../../images/line2.png";
import bnr2 from "./../../images/background/bg5.jpg";
import bnr4 from "./../../images/line2.png";
import bgimg2 from "./../../images/background/bg1.jpg";
import about from "./../../images/about/Founder.jpg";

import gallery1 from "./../../images/gallery/img5.jpg";
import gallery2 from "./../../images/gallery/img7.jpg";
import gallery3 from "./../../images/gallery/img9.jpg";
import gallery4 from "./../../images/gallery/img15.JPG";
import gallery5 from "./../../images/gallery/img17.JPG";
import gallery6 from "./../../images/gallery/img18.JPG";

// Masonry section
const masonryOptions = {
  transitionDuration: 0,
};
const imagesLoadedOptions = { background: ".my-bg-image-el" };
// Masonry section end

//Light Gallery Icon
const Iconimage = (props) => {
  const { openLightbox } = useLightbox();
  return (
    <Link onClick={() => openLightbox(props.imageToOpen)} className="">
      <i className="fa fa-search icon-bx-xs"></i>
    </Link>
  );
};
const galleryBlog = [
  { image: gallery1 },
  { image: gallery2 },
  { image: gallery3 },
  { image: gallery4 },
  { image: gallery5 },
  { image: gallery6 },
];

function BackgroundBlog() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div
            className="col-lg-12 col-md-12 col-sm-12 col-12  about-text"
            style={{
              visibility: "visible",
              animationDuration: "2s",
              animationDelay: "0.2s",
              animationName: "fadeIn",
            }}
          >
            <div className="section-head text-center">
              <div className="video-play">{/* <VideoPopup /> */}</div>
              <h2>
                Paper Bird Shishukul, where every child's play is a pathway to
                boundless learning!
              </h2>
              {/* <Link to={"./contect-us"} className="btn btn-md radius-xl">Read More</Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function EducationBanner() {
  return (
    <>
      <div
        className="section-full bg-white content-inner-2 about-content bg-img-fix"
        style={{ backgroundImage: "url(" + bgimg2 + ")" }}
      >
        <div className="about-overlay-box"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="section-head">
                <h2 className="head-title text-yellow">
                  Education from birth
                  <br />
                  begins with us
                </h2>
                <p className="text-white">
                  Paper Bird Shishukul, where the journey of education begins
                  from the moment a child is born, guided by the nurturing hands
                  of dedicated educators. At our esteemed institution, we
                  believe that education is not a destination; it is a lifelong
                  adventure that commences the moment a child opens their eyes
                  to the world.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12"></div>
          </div>
        </div>
      </div>
    </>
  );
}

function FounderNote() {
  return (
    <>
      <div className="section-full bg-white content-inner-2" style={{ paddingTop: "30px" }}>
        <div className="container">
          {/* Section Header */}
          <div className="section-head text-center m-b50">
            <h2
              className="head-title text-secondry"
              style={{ color: "#48af53" }}
            >
              Note from Founder
            </h2>
          </div>

          {/* Founder's Message */}
          <div className="row justify-content-center">
            <div className="col-lg-11 col-md-12">
              <div
                style={{
                  background: "#ffffff",
                  padding: "50px",
                  borderRadius: "16px",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
                  border: "3px solid #48af53",
                }}
              >
                <div className="row">
                  <div className="col-12">
                    <p style={{ 
                      fontSize: "16px", 
                      lineHeight: "1.8", 
                      color: "#666",
                      marginBottom: "20px",
                      textAlign: "justify"
                    }}>
                      For more than a decade, I have been a part of the education system, and my journey into early childhood education began with a deep love for children and a desire to create something meaningful for them. When I envisioned this preschool, I wanted it to feel like a second home—safe, warm, and emotionally comforting—where every child is supported, understood, and free to grow at their own pace.
                    </p>

                    <p style={{ 
                      fontSize: "16px", 
                      lineHeight: "1.8", 
                      color: "#666",
                      marginBottom: "20px",
                      textAlign: "justify"
                    }}>
                      Over the years, I have had the privilege of guiding more than 590 families, standing beside parents through every stage of their child's early development. This experience has strengthened my belief that the foundation we lay in these tender years shapes a child's confidence, curiosity, and overall well-being.
                    </p>

                    <p style={{ 
                      fontSize: "16px", 
                      lineHeight: "1.8", 
                      color: "#666",
                      marginBottom: "20px",
                      textAlign: "justify"
                    }}>
                      I have poured my heart and soul into building a preschool environment that celebrates each child's individuality and nurtures their natural desire to explore. My deep admiration for Dr. Maria Montessori's philosophy continues to guide our approach, ensuring that every child experiences the joy of self-directed learning, independence, and discovery.
                    </p>

                    <p style={{ 
                      fontSize: "16px", 
                      lineHeight: "1.8", 
                      color: "#666",
                      marginBottom: "35px",
                      textAlign: "justify"
                    }}>
                      It is my commitment to create a space where children feel loved, protected, and inspired every single day. Thank you for trusting us with the most precious part of your lives.
                    </p>

                    {/* Founder Signature */}
                    <div style={{ 
                      borderTop: "2px solid #f0f0f0",
                      paddingTop: "25px",
                      textAlign: "right"
                    }}>
                      <p style={{ 
                        fontSize: "20px", 
                        fontWeight: "700",
                        color: "#48af53",
                        marginBottom: "5px",
                        fontStyle: "italic"
                      }}>
                        — Malini Selvarajan
                      </p>
                      <p style={{ 
                        fontSize: "16px", 
                        color: "#999",
                        margin: "0"
                      }}>
                        Founder & Chairperson
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

class AboutUs1 extends Component {
  componentDidMount() {
    var splitBox = document.querySelectorAll(".split-box");

    var fSB = [].slice.call(splitBox);

    fSB.forEach((el) => el.classList.add("split-active"));
  }
  render() {
    return (
      <Fragment>
      <Header />
      <div className="page-content" style={{ paddingTop: "20px" }}>
        <PageTitle motherMenu="About Us" activeMenu="About Us" />
        <div className="content-block">
        <div
          className="section-full bg-white content-inner-2 about-area"
          style={{
          backgroundImage: "url(" + "" + ")",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          paddingTop: "20px",
          paddingBottom: "0px",
          }}
        >
          <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 m-b15">
            <div className="section-head">
              <h2
              className="head-title text-secondry"
              style={{ color: "#48af53" }}
              >
              About Founder
              </h2>
              <h5>Mrs. Malini Selvarajan (B.Ed & MBA) </h5>
              <p>
              Paper Bird Shishukul, where every child's potential
              takes flight! Established in 2017 under the visionary
              leadership of our esteemed Chairperson, Mrs. Malini
              Selvarajan, Paper Bird Shishukul is a cherished
              institution that has been nurturing young minds with
              care, creativity, and innovation in the heart of
              Indiranagar, Bangalore.
              </p>
              <p>
              Under the guidance of our dedicated team of educators
              and staff, We are committed to imparting a comprehensive
              education that focuses not only on academic excellence
              but also on the development of creative and social
              skills. We understand the importance of a well-rounded
              education, and our programs are designed to provide
              students with diverse opportunities to explore and grow.
              </p>
              <h2
              className="head-title text-secondry"
              style={{ color: "#48af53" }}
              >
              Paper Bird Shishukul
              </h2>
              <p>
              At Paper Bird Shishukul, we invite you to become a part
              of our warm and nurturing community. Whether you are a
              parent looking for a nurturing environment for your
              child or an educator seeking a fulfilling teaching
              experience, PBS welcomes you with open arms. Together,
              let's shape a bright future for the leaders of tomorrow.
              </p>
              <p>
              Come and experience the Paper Bird Shishukul difference
              – where education is not just a process, but a lifelong
              adventure filled with curiosity, creativity, and
              endless possibilities.
              </p>
            </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 teacher-content">
            <div className="split-box">
              <div className="about-media">
              <img src={about} alt="" />
              </div>
            </div>
            </div>
          </div>
          </div>
        </div>

        {/* Founder Note Section */}
        <FounderNote />

        <div
          className="section-full bg-white content-inner-2 about-content bg-img-fix"
          style={{ backgroundImage: "url(" + bnr2 + ")", paddingTop: "20px" }}
        >
          <BackgroundBlog />
        </div>
        {/*  Portfolio  */}
        {/* <div className="section-full content-inner">
          <div className="container">
          <div className="section-head text-center">
            <h2
            className="head-title text-secondry"
            style={{ color: "#48af53" }}
            >
            Gallery
            </h2>
          </div>
          <SimpleReactLightbox>
            <SRLWrapper>
            <div className="clearfix" id="lightgallery">
              <ul
              id="masonry"
              className="dlab-gallery-listing gallery-grid-4 gallery"
              >
              <Masonry
                className={"my-gallery-class"}
                options={masonryOptions}
                disableImagesLoaded={false}
                updateOnEachImageLoad={false}
                imagesLoadedOptions={imagesLoadedOptions} // default {}
              >
                {galleryBlog.map((data, index) => (
                <li
                  className="web design card-container col-lg-4 col-md-6 col-sm-6 "
                  key={index}
                >
                  <div className="dlab-box frame-box m-b30">
                  <div className="dlab-thum dlab-img-overlay1">
                    <img src={data.image} alt="" />
                    <div className="overlay-bx">
                    <div className="overlay-icon">
                      <Iconimage />
                    </div>
                    </div>
                  </div>
                  </div>
                </li>
                ))}
              </Masonry>
              </ul>
            </div>
            </SRLWrapper>
          </SimpleReactLightbox>
          </div>
        </div> */}
        {/* <EducationBanner /> */}
        </div>
      </div>
      <Footer />
      </Fragment>
    );
  }
}
export { BackgroundBlog, EducationBanner };
export default AboutUs1;