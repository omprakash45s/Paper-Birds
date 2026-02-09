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
import bgimg2 from "./../../images/background/bg1.jpg";
import about from "./../../images/malini.jpg"; // Malini Image
import latha from "./../../images/latha.jpeg"; // Latha Image

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
                {/* --- FOUNDER SECTION --- */}
               <div className="row align-items-center">
  {/* Text Column */}
  <div className="col-lg-6 col-md-12 col-sm-12 m-b15">
    <div className="section-head">
      {/* Founder's Note Heading */}
      <h2
        className="head-title text-secondry"
        style={{ color: "#48af53" }}
      >
        Founder's Note
      </h2>
      <h5 style={{ color: "#48af53", fontWeight: "600", marginBottom: "20px" }}>
        Mrs. Malini Selvarajan (B.Ed & MBA)
      </h5>

      {/* Founder's Content */}
      <div className="text-justify" style={{ color: "#555", lineHeight: "1.8" }}>
        <p>
          For more than a decade, I have been a part of the education system, and my journey into early childhood education began with a deep love for children and a desire to create something meaningful for them. When I envisioned this preschool, I wanted it to feel like a second home—safe, warm, and emotionally comforting—where every child is supported, understood, and free to grow at their own pace.
        </p>
        <p>
          Over the years, I have had the privilege of guiding more than 590 families, standing beside parents through every stage of their child's early development. This experience has strengthened my belief that the foundation we lay in these tender years shapes a child's confidence, curiosity, and overall well-being.
        </p>
        <p>
          I have poured my heart and soul into building a preschool environment that celebrates each child's individuality and nurtures their natural desire to explore. My deep admiration for Dr. Maria Montessori's philosophy continues to guide our approach, ensuring that every child experiences the joy of self-directed learning, independence, and discovery.
        </p>
        <p>
          It is my commitment to create a space where children feel loved, protected, and inspired every single day. Thank you for trusting us with the most precious part of your lives.
        </p>
      </div>
    </div>
  </div>

  {/* Founder Image Column */}
  <div className="col-lg-6 col-md-12 col-sm-12 teacher-content">
    <div className="split-box">
      <div className="about-media">
        <img
          src={about}
          alt="Mrs. Malini Selvarajan"
          className="img-fluid"
          style={{
            width: "100%", // Ensures it fills the column width
            border: "4px solid #48af53", // Slightly thicker border for definition
            borderRadius: "20px", // Smoother, modern radius
            boxShadow: "0 10px 40px rgba(72, 175, 83, 0.2)", // Softer, colored shadow for depth
            objectFit: "cover" // Ensures image scales nicely
          }}
        />
      </div>
    </div>
  </div>
</div>
                {/* --- PAPER BIRD SHISHUKUL SECTION (Image Left, Text Right) --- */}
<div className="row align-items-center m-t60">
  
  {/* Left Side: Image */}
  <div className="col-lg-5 col-md-12 m-b30">
    <div
      style={{
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
        border: "3px solid #48af53"
      }}
    >
      {/* Ensure you use a general school image variable here, e.g., gallery2 or bnr2 */}
      <img 
        src={gallery2} 
        alt="Paper Bird Shishukul Campus" 
        style={{ width: "100%", height: "auto", display: "block" }}
      />
    </div>
  </div>

  {/* Right Side: Content */}
  <div className="col-lg-7 col-md-12">
    <h2
      className="head-title text-secondry"
      style={{ color: "#48af53", marginTop: "0" }}
    >
      Paper Bird Shishukul
    </h2>
    
    <div style={{ fontSize: "16px", lineHeight: "1.8", color: "#666", textAlign: "justify" }}>
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
  
</div>


                {/* --- LATHA RAO SECTION --- */}
                <div className="row m-t60 align-items-center">
  {/* Text Left */}
  <div className="col-lg-7 col-md-12 m-b30">
    <div className="section-head">
      <h2
        className="head-title text-secondry"
        style={{ color: "#48af53" }}
      >
        Academic Mentor & Trainer
      </h2>
      <h5 style={{ color: "#48af53", fontWeight: "600" }}>
        Mrs. Latha Rao
      </h5>
      <div style={{ fontSize: "16px", lineHeight: "1.8", color: "#666", textAlign: "justify" }}>
        <p>
          Latha Rao is the current director of training of IMTC (Indian Montessori Training Courses) Koramangala under the auspices of the Indian Montessori Centre. She is passionate about creating learning environments for children that help them learn with joy. 
        </p>
        <p>
          She has done her primary course from Association Montessori Internationale and elementary course from Indian Montessori Centre. She has also worked in Anne Frank Montessori in Long Island, NY under the teachers exchange programme and worked with children for more than 30 years, including the Valley School of the KFI institutions. 
        </p>
        <p>
          As a science graduate from the University of Madras, she has done her Masters in inclusive education from the University of Northampton, UK. Her latest learning has been an in-depth study of curating Montessori environments to integrate children with learning differences. This certificate is in collaboration with the Maria Montessori Institute, London.
        </p>
      </div>
    </div>
  </div>

  {/* Image Right */}
  <div className="col-lg-5 col-md-12 m-b30">
    <div
      style={{
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
        border: "3px solid #48af53"
      }}
    >
      <img 
        src={latha} 
        alt="Latha Rao" 
        style={{ width: "100%", height: "auto", display: "block" }}
      />
    </div>
  </div>
</div>
                {/* --- OUR BRANCHES SECTION --- */}
<div className="m-t80">
  {/* Section Header */}
  <div className="section-head text-center m-b50">
    <h2
      className="head-title text-secondry"
      style={{ color: "#48af53", fontSize: "36px" }}
    >
      Our Growing Presence
    </h2>
    <p style={{ fontSize: "18px", color: "#666" }}>
      Bringing world-class Montessori education to your neighborhood
    </p>
  </div>

  <div className="row">
    {/* 1. INDIRANAGAR (Flagship) */}
    <div className="col-lg-6 col-md-12 m-b30">
      <div
        className="branch-card"
        style={{
          backgroundColor: "#fff",
          borderRadius: "20px",
          padding: "40px",
          border: "2px solid #f0f0f0",
          borderTop: "6px solid #48af53", // Green Top Border
          boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
          height: "100%",
          position: "relative",
          transition: "transform 0.4s ease, box-shadow 0.4s ease",
          cursor: "default",
          overflow: "hidden"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-10px)";
          e.currentTarget.style.boxShadow = "0 20px 40px rgba(72, 175, 83, 0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.05)";
        }}
      >
        {/* Flagship Badge */}
        <div
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            background: "linear-gradient(135deg, #FFD700 0%, #FDB931 100%)", // Gold Gradient
            color: "#fff",
            padding: "5px 15px",
            borderRadius: "30px",
            fontSize: "12px",
            fontWeight: "700",
            textTransform: "uppercase",
            letterSpacing: "1px",
            boxShadow: "0 4px 10px rgba(253, 185, 49, 0.3)"
          }}
        >
          Flagship Campus
        </div>

        <h3 style={{ color: "#48af53", fontSize: "26px", fontWeight: "700", marginTop: "10px" }}>
          Indiranagar
        </h3>
        <p style={{ color: "#888", fontWeight: "600", marginBottom: "20px" }}>
          Established 2017
        </p>
        <div style={{ width: "60px", height: "3px", background: "#48af53", marginBottom: "20px" }}></div>
        
        <p style={{ color: "#555", lineHeight: "1.7", textAlign: "justify" }}>
          The heart of Paper Bird Shishukul. Located on the serene Paramahansa Yogananda Road, our Indiranagar campus has been setting the benchmark for early childhood education for over 8 years. It is here that our legacy of warmth, care, and academic excellence began, serving hundreds of happy families in the community.
        </p>
        
        <div style={{ marginTop: "25px", color: "#48af53", fontWeight: "600", fontSize: "14px" }}>
          <i className="fa fa-map-marker" style={{ marginRight: "8px" }}></i>
          1321, Paramahansa Yogananda Rd, Bengaluru
        </div>
      </div>
    </div>

    {/* 2. WHITEFIELD (New Branch) */}
    <div className="col-lg-6 col-md-12 m-b30">
      <div
        className="branch-card"
        style={{
          backgroundColor: "#fff",
          borderRadius: "20px",
          padding: "40px",
          border: "2px solid #f0f0f0",
          borderTop: "6px solid #1877F2", // Blue Top Border for distinction
          boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
          height: "100%",
          position: "relative",
          transition: "transform 0.4s ease, box-shadow 0.4s ease",
          cursor: "default",
          overflow: "hidden"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-10px)";
          e.currentTarget.style.boxShadow = "0 20px 40px rgba(24, 119, 242, 0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.05)";
        }}
      >
        {/* New Badge with Pulse Animation */}
        <div
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            background: "linear-gradient(135deg, #ff564b 0%, #ff8e84 100%)", // Red-Orange Gradient
            color: "#fff",
            padding: "5px 15px",
            borderRadius: "30px",
            fontSize: "12px",
            fontWeight: "700",
            textTransform: "uppercase",
            letterSpacing: "1px",
            boxShadow: "0 4px 10px rgba(255, 86, 75, 0.3)",
            animation: "pulseNew 2s infinite"
          }}
        >
          Newly Open
        </div>
        
        {/* Pulse Keyframes Style Injection */}
        <style>
          {`
            @keyframes pulseNew {
              0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 86, 75, 0.7); }
              70% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(255, 86, 75, 0); }
              100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 86, 75, 0); }
            }
          `}
        </style>

        <h3 style={{ color: "#1877F2", fontSize: "26px", fontWeight: "700", marginTop: "10px" }}>
          Whitefield
        </h3>
        <p style={{ color: "#888", fontWeight: "600", marginBottom: "20px" }}>
          The New Chapter
        </p>
        <div style={{ width: "60px", height: "3px", background: "#1877F2", marginBottom: "20px" }}></div>
        
        <p style={{ color: "#555", lineHeight: "1.7", textAlign: "justify" }}>
          We are thrilled to bring the Paper Bird Shishukul philosophy to Whitefield! Our newest campus is a state-of-the-art facility designed to provide the same home-like environment, premium Montessori infrastructure, and dedicated care that parents have trusted for years. A fresh beginning for your little one's journey.
        </p>
        
        <div style={{ marginTop: "25px", color: "#1877F2", fontWeight: "600", fontSize: "14px" }}>
          <i className="fa fa-map-marker" style={{ marginRight: "8px" }}></i>
          Site No 16, Ashton Park, Borewell Road, Bengaluru
        </div>
      </div>
    </div>
  </div>
</div>
                
              </div>
            </div>
          </div>

          {/* <div
            className="section-full bg-white content-inner-2 about-content bg-img-fix"
            style={{ backgroundImage: "url(" + bnr2 + ")", paddingTop: "20px" }}
          >
            <BackgroundBlog />
          </div> */}
          
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export { BackgroundBlog, EducationBanner };
export default AboutUs1;