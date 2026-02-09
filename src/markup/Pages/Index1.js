import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import BannerSlider from "../Element/BannerSlider";
import TestiMonialSlider from "../Element/TestiMonialSlider";
import TeacherSlider from "../Element/TeacherSlider";
import GallerySlider from "../Element/GallerySlider";
import Curriculum from "../Element/Curriculum";
import SpotsCounter from "./SpotsCounter";
import FloatingEnquiry from "./FloatingEnquiry";
import InstagramFeed from "../Element/InstagramFeed";
import SEO from "../../components/SEO";
import largeimg from "./../../images/blog/large/Curriculum.jpg";
import vision from "./../../images/blog/large/v.jpg";
import {
  OrganizationSchema,
  LocalBusinessSchema,
  WhitefieldBusinessSchema,
} from "../../components/StructuredData";

import icon1 from "./../../images/icon/i5.png";
import icon2 from "./../../images/icon/i3.png";
import icon3 from "./../../images/icon/i6.png";
import icon4 from "./../../images/icon/i4.png";
import loc from "./../../images/icon/location.svg";
import call from "./../../images/icon/call.svg";
import trophy from "./../../images/icon/trophy.svg";


import bnr3 from "./../../images/background/bg6.png";
import bgimg3 from "./../../images/line2.png";
// const SpotsCounter = () => {
//   // Start at 80, end at 50
//   const [count, setCount] = React.useState(80);

//   React.useEffect(() => {
//     let start = 80;
//     const end = 50;

//     // Timer to decrease number
//     const timer = setInterval(() => {
//       start -= 1;
//       setCount(start);
//       if (start === end) {
//         clearInterval(timer);
//       }
//     }, 50); // Speed of animation (lower is faster)

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div style={{
//       background: "linear-gradient(135deg, #48af53 0%, #3a8f42 100%)",
//       display: "inline-block",
//       padding: "15px 40px",
//       borderRadius: "50px",
//       boxShadow: "0 8px 25px rgba(72,175,83,0.3)",
//       animation: "pulse 2s infinite"
//     }}>
//       <p style={{ 
//         color: "white", 
//         margin: "0",
//         fontSize: "18px",
//         fontWeight: "600",
//         letterSpacing: "0.5px"
//       }}>
//         <i className="fa fa-clock-o" style={{ marginRight: "10px" }}></i>
//         Only 
//         <span style={{ 
//           fontSize: "24px", 
//           fontWeight: "700",
//           padding: "0 8px",
//           display: "inline-block",
//           minWidth: "40px" // Prevents jittering when numbers change width
//         }}>
//           {count}
//         </span> 
//         Spots Available!
//       </p>
//     </div>
//   );
// };

const iconBlog = [
  {
    image: icon1,
    title1: "Learning Through Play",
    title2: "and Interaction",
    alt: "Montessori learning through play in Indiranagar",
  },
  {
    image: icon2,
    title1: "A Holistic Approach",
    title2: "to Development",
    alt: "Holistic child development Bengaluru",
  },
  {
    image: icon3,
    title1: "Safe and Cheerful",
    title2: "Environment",
    alt: "Safe preschool environment Indiranagar",
  },
  {
    image: icon4,
    title1: "Child - Centered ",
    title2: "Learning",
    alt: "Child-centered Montessori education",
  },
];
const cardColors = ["#b8d88e", "#ffd27f", "#9ad0f5", "#f7a8b8"];
const iconBlog2 = [
  {
    icon: <i className="flaticon-rattle text-blue" />,
    title: "Daycare Services in Whitefield",
    desc: "Premium daycare services in Borewell Road,Whitefield, Bengaluru. We provide a safe and nurturing environment where children receive supervised care, engage in age-appropriate activities, and socialize with their peers.",
  },
  {
    icon: <i className="flaticon-bricks text-green" />,
    title: "Safe Transport in Bengaluru",
    desc: "Reliable and safe transport services across Bengaluru, ensuring convenient and secure commuting for our students in Whitefield and surrounding areas.",
  },
  {
    icon: <i className="flaticon-puzzle text-orange" />,
    title: "Hygienic & Nutritious Food",
    desc: "Enjoy peace of mind knowing that our Whitefield preschool provides hygienic and nutritious meals, ensuring your child's health and well-being with carefully planned menus.",
  },
  {
    icon: <i className="flaticon-boy text-green" />,
    title: "Safety First - CCTV Monitored",
    desc: "Multiple CCTV cameras always monitored, school gate always kept locked, safety grills, safe and child-friendly flooring. All staff credentials and contacts have been thoroughly verified.",
  },
];

class Index1 extends Component {
  render() {
    return (
      <Fragment>
        <SEO
          title="Paper Bird Shishukul - Best Montessori Preschool & Daycare in Indiranagar and Whitefield, Bengaluru"
          description="Paper Bird Shishukul is the premier Montessori preschool and daycare in Indiranagar, Bengaluru offering holistic early childhood education. Located at 1321, Paramahansa Yogananda Rd. Nurturing young minds since 2017 with Montessori-certified teachers, safe CCTV-monitored environment, and child-centered learning. Call 98451 27859 for admission."
          keywords="montessori preschool indiranagar, best preschool indiranagar, daycare indiranagar, montessori preschool bengaluru, daycare bengaluru, early childhood education indiranagar, preschool bangalore, montessori school indiranagar, paper bird shishukul, kindergarten bengaluru, child care center indiranagar, holistic education, montessori certified teachers, best preschool indiranagar, preschool paramahansa yogananda road, preschool near me, daycare near indiranagar, montessori daycare bangalore"
          url="https://paperbirdshishukul.com/"
        />
        <OrganizationSchema />
        <LocalBusinessSchema />
        <WhitefieldBusinessSchema />
        <Header />
        <div className="page-content bg-white">
          {/* Slider Banner */}
          <BannerSlider />
          <FloatingEnquiry />
          {/* Slider Banner */}
          <div className="section-full bg-white content-inner-2" style={{ position: "relative", overflow: "hidden" }}>
            {/* Decorative Background Elements */}
            <div style={{
              position: "absolute",
              top: "-50px",
              right: "-50px",
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #b8d88e 0%, #a5c9f1 100%)",
              opacity: "0.1",
              zIndex: "0"
            }}></div>
            <div style={{
              position: "absolute",
              bottom: "-80px",
              left: "-80px",
              width: "400px",
              height: "400px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #ffc570 0%, #f5a5b8 100%)",
              opacity: "0.1",
              zIndex: "0"
            }}></div>

  <div className="container" style={{ position: "relative", zIndex: "1" }}>
    {/* Promise Section */}
    <div className="row justify-content-center m-b50">
      <div className="col-lg-10">
        <div 
          className="text-center"
          style={{
            background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)",
            padding: "50px 40px",
            borderRadius: "20px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
            border: "2px solid #48af53",
            position: "relative",
            animation: "fadeInUp 1s ease-out"
          }}
        >
          <div style={{
            position: "absolute",
            top: "-15px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#48af53",
            color: "white",
            padding: "8px 30px",
            borderRadius: "20px",
            fontSize: "14px",
            fontWeight: "600",
            letterSpacing: "1px"
          }}>
            OUR PROMISE
          </div>
          
          <h2 
            className="head-title" 
            style={{ 
              color: "#48af53", 
              marginTop: "20px",
              marginBottom: "20px",
              fontSize: "32px",
              fontWeight: "700",
              lineHeight: "1.4"
            }}
          >
            Paper Bird Promise
          </h2>
          
          <p style={{ 
            fontSize: "18px", 
            lineHeight: "1.8", 
            color: "#555",
            maxWidth: "800px",
            margin: "0 auto",
            fontWeight: "400"
          }}>
            A place where children grow with confidence, compassion, and curiosity at their own pace, in their own way.
          </p>
        </div>
      </div>
    </div>
   
    {/* USP Section */}
    <div className="row justify-content-center">
      <div className="col-lg-12">
        <div className="text-center m-b40">
          <h3 
            className="head-title" 
            style={{ 
              color: "#48af53",
              fontSize: "28px",
              fontWeight: "700",
              marginBottom: "15px"
            }}
          >
            Early Bird Special Offer
          </h3>
          <p style={{ color: "#666", fontSize: "16px" }}>
            Limited to the first 32 admissions only!
          </p>
        </div>

                  <div className="row justify-content-center">
                    {/* Offer Card 1 - Free Transport */}
                    <div className="col-lg-4 col-md-6 m-b30">
                      <div
                        className="offer-card"
                        style={{
                          background: "white",
                          padding: "40px 30px",
                          borderRadius: "16px",
                          boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
                          border: "3px solid #b8d88e",
                          textAlign: "center",
                          transition: "all 0.3s ease",
                          position: "relative",
                          overflow: "hidden",
                          minHeight: "280px",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center"
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "translateY(-10px)";
                          e.currentTarget.style.boxShadow = "0 15px 40px rgba(0,0,0,0.15)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.1)";
                        }}
                      >
                        <div style={{
                          position: "absolute",
                          top: "-10px",
                          right: "-10px",
                          background: "#b8d88e",
                          color: "white",
                          width: "60px",
                          height: "60px",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "24px",
                          fontWeight: "bold",
                          boxShadow: "0 4px 15px rgba(184,216,142,0.4)"
                        }}>
                          1
                        </div>

                        <div className="icon-lg m-b20">
                          <i className="flaticon-location" style={{ fontSize: "60px", color: "#b8d88e" }}></i>
                        </div>
                        <h4 style={{
                          color: "#48af53",
                          marginBottom: "15px",
                          fontSize: "22px",
                          fontWeight: "600"
                        }}>
                          Free Transport for First Year
                        </h4>
                        <p style={{
                          color: "#666",
                          fontSize: "15px",
                          lineHeight: "1.6",
                          margin: "0"
                        }}>
                          Safe and reliable transportation at no cost for your child's entire first year.
                        </p>
                      </div>
                    </div>

                    {/* Offer Card 2 - Summer Camp */}
                    <div className="col-lg-4 col-md-6 m-b30">
                      <div
                        className="offer-card"
                        style={{
                          background: "white",
                          padding: "40px 30px",
                          borderRadius: "16px",
                          boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
                          border: "3px solid #ffc570",
                          textAlign: "center",
                          transition: "all 0.3s ease",
                          position: "relative",
                          overflow: "hidden",
                          minHeight: "280px",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center"
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "translateY(-10px)";
                          e.currentTarget.style.boxShadow = "0 15px 40px rgba(0,0,0,0.15)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.1)";
                        }}
                      >
                        <div style={{
                          position: "absolute",
                          top: "-10px",
                          right: "-10px",
                          background: "#ffc570",
                          color: "white",
                          width: "60px",
                          height: "60px",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "24px",
                          fontWeight: "bold",
                          boxShadow: "0 4px 15px rgba(255,197,112,0.4)"
                        }}>
                          2
                        </div>

                        <div className="icon-lg m-b20">
                          <i className="flaticon-trophy" style={{ fontSize: "60px", color: "#ffc570" }}></i>
                        </div>
                        <h4 style={{
                          color: "#48af53",
                          marginBottom: "15px",
                          fontSize: "22px",
                          fontWeight: "600"
                        }}>
                          Complimentary Summer Camp
                        </h4>
                        <p style={{
                          color: "#666",
                          fontSize: "15px",
                          lineHeight: "1.6",
                          margin: "0"
                        }}>
                          Engaging summer activities and learning experiences included at absolutely no extra charge.
                        </p>
                      </div>
                    </div>

                    {/* Offer Card 3 - Early Bird */}
                    <div className="col-lg-4 col-md-6 m-b30">
                      <div
                        className="offer-card"
                        style={{
                          background: "white",
                          padding: "40px 30px",
                          borderRadius: "16px",
                          boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
                          border: "3px solid #f5a5b8",
                          textAlign: "center",
                          transition: "all 0.3s ease",
                          position: "relative",
                          overflow: "hidden",
                          minHeight: "280px",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center"
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "translateY(-10px)";
                          e.currentTarget.style.boxShadow = "0 15px 40px rgba(0,0,0,0.15)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.1)";
                        }}
                      >
                        <div style={{
                          position: "absolute",
                          top: "-10px",
                          right: "-10px",
                          background: "#f5a5b8",
                          color: "white",
                          width: "60px",
                          height: "60px",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "24px",
                          fontWeight: "bold",
                          boxShadow: "0 4px 15px rgba(245,165,184,0.4)"
                        }}>
                          3
                        </div>

                        <div className="icon-lg m-b20">
                          <i className="flaticon-abc-block" style={{ fontSize: "60px", color: "#f5a5b8" }}></i>
                        </div>
                        <h4 style={{
                          color: "#48af53",
                          marginBottom: "15px",
                          fontSize: "22px",
                          fontWeight: "600"
                        }}>
                          Exclusive Early Bird Benefits
                        </h4>
                        <p style={{
                          color: "#666",
                          fontSize: "15px",
                          lineHeight: "1.6",
                          margin: "0"
                        }}>
                          Special privileges and perks reserved exclusively for our first 32 families.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Call to Action */}
                  {/* Animated Spots Available Section */}
                  <div className="text-center m-t40">
                    <SpotsCounter />
                  </div>
                </div>
              </div>
            </div>

            <style jsx>{`
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.05);
      }
    }

    @media (max-width: 991px) {
      .offer-card {
        margin-bottom: 20px;
      }
    }
  `}</style>
          </div>
          <div className="content-block">
            {/*  Hero Section with Local SEO */}
            <div className="section-full bg-white content-inner-1">
              <div className="container">
                <div className="section-head text-center">
                  <h1
                    className="head-title"
                    style={{
                      color: "#48af53",
                      fontSize: "38px",
                      marginBottom: "15px",
                      lineHeight: "1.3",
                    }}
                  >
                    Best Montessori Preschool & Daycare in Bengaluru
                  </h1>
                  <p
                    style={{
                      fontSize: "20px",
                      marginBottom: "25px",
                      fontWeight: "500",
                      color: "#333",
                    }}
                  >
                    Welcome to Paper Bird Shishukul - Where little hands create big dreams!
                  </p>
                </div>


                {/* Branches Section */}
                <div className="row justify-content-center mb-5">

                  {/* --- Indiranagar Branch (Green Theme) --- */}
                  <div className="col-lg-5 col-md-6 col-sm-12 m-b30">
                    <div
                      className="branch-card"
                      style={{
                        borderTop: "5px solid #48af53", // Green Top Border
                        backgroundColor: "#fff",
                        borderRadius: "15px",
                        padding: "35px 30px",
                        height: "100%",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                        position: "relative",
                        transition: "all 0.3s ease"
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                      {/* Badge */}
                      <div style={{
                        position: "absolute",
                        top: "20px",
                        right: "20px",
                        backgroundColor: "#e8f5e9",
                        color: "#2e7d32",
                        padding: "6px 15px",
                        borderRadius: "20px",
                        fontSize: "12px",
                        fontWeight: "700",
                        textTransform: "uppercase"
                      }}>
                        Flagship Campus
                      </div>

                      <h2 style={{ color: "#48af53", fontSize: "28px", fontWeight: "700", marginBottom: "20px" }}>
                        Indiranagar
                      </h2>

                      {/* Address */}
                      <div className="d-flex align-items-start mb-3">
                        <img src={loc} alt="Location" style={{ width: "24px", height: "24px", marginRight: "15px", marginTop: "4px" }} />
                        <p style={{ color: "#555", fontSize: "16px", margin: 0, lineHeight: "1.6" }}>
                          1321, Paramahansa Yogananda Rd, <br />Eshwara Layout, Indiranagar, Bengaluru
                        </p>
                      </div>

                      {/* Legacy */}
                      <div className="d-flex align-items-start mb-3">
                        <img src={trophy} alt="Trophy" style={{ width: "24px", height: "24px", marginRight: "15px", marginTop: "4px" }} />
                        <p style={{ color: "#555", fontSize: "16px", margin: 0, lineHeight: "1.6" }}>
                          Serving families since 2017. A trusted Montessori environment nurturing over 590+ children.
                        </p>
                      </div>

                      {/* Highlights (Fills White Space) */}
                      <div style={{ backgroundColor: "#f9f9f9", padding: "15px", borderRadius: "10px", margin: "20px 0" }}>
                        <h6 style={{ color: "#48af53", marginBottom: "10px", fontWeight: "700", fontSize: "16px" }}>Campus Highlights:</h6>
                        <ul style={{ paddingLeft: "20px", margin: 0, color: "#666", fontSize: "15px" }}>
                          <li style={{ marginBottom: "5px" }}>Spacious outdoor play area</li>
                          <li style={{ marginBottom: "5px" }}>Pure Montessori environments</li>
                          <li>Experienced senior faculty</li>
                        </ul>
                      </div>

                      {/* Contact */}
                      <div className="d-flex align-items-center mt-auto" style={{ borderTop: "1px solid #eee", paddingTop: "20px" }}>
                        <img src={call} alt="Call" style={{ width: "24px", height: "24px", marginRight: "15px" }} />
                        <div>
                          <span style={{ display: "block", fontSize: "14px", color: "#888" }}>Admissions Open</span>
                          <a href="tel:+9198451 27859" style={{ color: "#48af53", fontSize: "20px", fontWeight: "700", textDecoration: "none" }}>
                            +91 98451 27859
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* --- Whitefield Branch (Orange Theme) --- */}
                  <div className="col-lg-5 col-md-6 col-sm-12 m-b30">
                    <div
                      className="branch-card"
                      style={{
                        borderTop: "5px solid #f57c00", // Orange Top Border
                        backgroundColor: "#fff",
                        borderRadius: "15px",
                        padding: "35px 30px",
                        height: "100%",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                        position: "relative",
                        transition: "all 0.3s ease"
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                      {/* Badge */}
                      <div style={{
                        position: "absolute",
                        top: "20px",
                        right: "20px",
                        backgroundColor: "#fff3e0",
                        color: "#ef6c00",
                        padding: "6px 15px",
                        borderRadius: "20px",
                        fontSize: "12px",
                        fontWeight: "700",
                        textTransform: "uppercase"
                      }}>
                        New Campus
                      </div>

                      <h2 style={{ color: "#f57c00", fontSize: "28px", fontWeight: "700", marginBottom: "20px" }}>
                        Whitefield
                      </h2>

                      {/* Address */}
                      <div className="d-flex align-items-start mb-3">
                        <img src={loc} alt="Location" style={{ width: "24px", height: "24px", marginRight: "15px", marginTop: "4px" }} />
                        <p style={{ color: "#555", fontSize: "16px", margin: 0, lineHeight: "1.6" }}>
                          Site No 16, Ashton Park, <br />Borewell Road, Whitefield, Bengaluru
                        </p>
                      </div>

                      {/* Info */}
                      <div className="d-flex align-items-start mb-3">
                        <img src={trophy} alt="Trophy" style={{ width: "24px", height: "24px", marginRight: "15px", marginTop: "4px" }} />
                        <p style={{ color: "#555", fontSize: "16px", margin: 0, lineHeight: "1.6" }}>
                          State-of-the-art facility bringing the same standard of excellence to a new neighborhood.
                        </p>
                      </div>

                      {/* Highlights (Fills White Space) */}
                      <div style={{ backgroundColor: "#fff8e1", padding: "15px", borderRadius: "10px", margin: "20px 0" }}>
                        <h6 style={{ color: "#f57c00", marginBottom: "10px", fontWeight: "700", fontSize: "16px" }}>Campus Highlights:</h6>
                        <ul style={{ paddingLeft: "20px", margin: 0, color: "#666", fontSize: "15px" }}>
                          <li style={{ marginBottom: "5px" }}>Premium modern infrastructure</li>
                          <li style={{ marginBottom: "5px" }}>Secure & monitored premises</li>
                          <li>Dedicated Daycare wing</li>
                        </ul>
                      </div>

                      {/* Contact */}
                      <div className="d-flex align-items-center mt-auto" style={{ borderTop: "1px solid #eee", paddingTop: "20px" }}>
                        <img src={call} alt="Call" style={{ width: "24px", height: "24px", marginRight: "15px" }} />
                        <div>
                          <span style={{ display: "block", fontSize: "14px", color: "#888" }}>Admissions Open</span>
                          <a href="tel:+919845127859" style={{ color: "#f57c00", fontSize: "20px", fontWeight: "700", textDecoration: "none" }}>
                            +91 98451 27859
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Features Section */}
                <div className="section-subhead text-center mb-4">
                  <h2 style={{ color: "#333", fontSize: "28px", fontWeight: "600" }}>
                    Why Parents Choose Paper Bird Shishukul
                  </h2>
                </div>

                <div className="row">
                  {iconBlog.map((data, index) => (
                    <div
                      // Added mb-4 for vertical spacing on mobile
                      className="col-lg-3 col-md-6 col-sm-6 col-12 mb-4"
                      key={index}
                    >
                      <div
                        className="icon-bx-wraper sr-iconbox m-b20 h-100 text-center" // Added h-100 and text-center
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center", // Ensures icon is centered
                          justifyContent: "flex-start"
                        }}
                      >
                        <div className="icon-lg m-b20">
                          <Link to={"#"} className="icon-cell">
                            <img
                              src={data.image}
                              alt={data.alt}
                              loading="lazy"
                              width="60"
                              height="60"
                              style={{ objectFit: 'contain' }} // Ensures icon doesn't get squashed
                            />
                          </Link>
                        </div>
                        <div className="icon-content">
                          <h3
                            className="dlab-tilte"
                            style={{
                              fontSize: "18px",
                              color: "#333",
                              fontWeight: "600",
                              lineHeight: "1.4",
                              margin: 0 // Remove default margin to keep spacing tight
                            }}
                          >
                            {data.title1}
                            {/* Added a check: only render BR if title2 exists to avoid awkward gaps */}
                            {data.title2 && <br />}
                            {data.title2}
                          </h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Section */}
                <div className="text-center mt-5">
                  <p
                    style={{
                      fontSize: "20px",
                      color: "#333",
                      marginBottom: "20px",
                      fontWeight: "500",
                    }}
                  >
                    Book a Campus Tour Today!
                  </p>
                  <a
                    href="tel:+919845127859"
                    className="btn"
                    style={{
                      backgroundColor: "#48af53",
                      color: "white",
                      padding: "12px 30px",
                      borderRadius: "30px",
                      fontWeight: "600",
                      fontSize: "18px",
                      textDecoration: "none",
                      display: "inline-flex", // Changed to inline-flex for alignment
                      alignItems: "center",   // Centers the icon and text vertically
                      gap: "10px",            // Adds space between icon and text
                      transition: "all 0.3s ease",
                    }}
                    // React requires functions for events, not strings like HTML
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#3d9646";
                      e.currentTarget.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#48af53";
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                    aria-label="Call for admission inquiry"
                  >
                    {/* Replaced emoji with the imported call SVG */}
                    <img
                      src={call}
                      alt="Call"
                      style={{
                        width: "20px",
                        height: "20px",
                        // If your SVG is black, uncomment the line below to make it white:
                        // filter: "brightness(0) invert(1)" 
                      }}
                    />
                    Call Now: 98451 27859
                  </a>
                </div>
              </div>
            </div>
            {/*  About Us End*/}
            <div
              className="section-full bg-white content-inner-2 about-box"
              style={{
                backgroundImage: 'url("")',
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="container my-5">

                {/* ===== TOP SECTION (Text + Image) ===== */}
                <div className="row align-items-center g-5">

                  {/* LEFT — TEXT */}
                  <div className="col-lg-7 col-md-12">
                    <div className="section-head pe-lg-4">

                      <h2
                        className="head-title text-secondry mb-4"
                        style={{ color: "#48af53" }}
                      >
                        Our Vision and Mission at Paper Bird Shishukul
                        <br />
                      </h2>

                      <p style={{ textAlign: "justify" }}>
                        At Paper Bird Shishukul, Whitefield & Indiranagar's trusted Montessori preschool,
                        we are dedicated to providing high-quality holistic education that
                        goes beyond textbooks and classrooms. Our mission is to create a
                        vibrant learning environment where children in Bengaluru can blossom
                        intellectually, emotionally, socially, physically, and creatively.
                        We believe in fostering a love for learning, encouraging curiosity,
                        and nurturing the unique talents of every child.
                      </p>

                      <p></p>

                      <p style={{ textAlign: "justify" }}>
                        Our vision extends beyond the confines of traditional education. As
                        one of the leading preschools in Whitefield & Indiranagar, we aspire to invoke in
                        our students a genuine love for learning – a love that will accompany
                        them throughout their lives. By instilling a sense of curiosity,
                        resilience, and empathy, we prepare our students to face the
                        challenges of the ever-changing world with confidence and grace.
                      </p>

                    </div>
                  </div>

    {/* RIGHT — IMAGE */}
    <div className="col-lg-5 col-md-12 text-center">
  <img
    src={largeimg}
    alt="Paper Bird Shishukul Classroom"
    className="img-fluid rounded-4 shadow-lg"
    style={{
      width: "100%",
      height: "auto",
      minHeight: "500px",
      objectFit: "cover",

                        border: "7px solid #48af53",   // ✅ green box border
                        borderRadius: "16px",          // smoother than rounded-4
                        backgroundColor: "#fff"        // makes it look like a card
                      }}
                    />
                  </div>


                </div>


                {/* ===== FEATURES SECTION (4 CARDS) ===== */}
                <div className="row mt-5 g-4">

                  {iconBlog2.map((item, index) => (
                    <div className="col-lg-3 col-md-6 col-sm-12" key={index}>

                      <div
                        key={index}
                        className="h-100 p-4 text-center rounded-4 shadow-sm feature-card"
                        style={{
                          background: "#ffffff",
                          transition: "all 0.3s ease",
                          border: `3px solid ${cardColors[index % cardColors.length]}`,
                          borderRadius: "16px",
                        }}
                      >
                        <div className="icon-lg mb-3" style={{ color: "#48af53" }}>
                          {item.icon}
                        </div>

                        <h3
                          className="dlab-tilte mb-2"
                          style={{ fontSize: "18px", fontWeight: "600" }}
                        >
                          {item.title}
                        </h3>

                        <p style={{ fontSize: "14px" }}>
                          {item.desc}
                        </p>
                      </div>

                    </div>
                  ))}

                </div>


                {/* ===== CURRICULUM BELOW ===== */}
                <div className="mt-5">
                  <Curriculum />
                </div>

              </div>

            </div>

            {/* Local SEO Section */}
            <div className="section-full bg-gray content-inner-1">
              <div className="container">
                <div className="section-head text-center">
                  <h2
                    className="head-title text-secondry"
                    style={{ color: "#48af53" }}
                  >
                    Why Choose Paper Bird Shishukul ?
                  </h2>
                  <p style={{ maxWidth: "900px", margin: "0 auto" }}>
                    At Paper Bird Shishukul, childhood is respected, emotions are honoured, and learning unfolds naturally.
                  </p>
                </div>
                <div className="row m-t30">
                  {/* Card 1 - Child-Friendly Environment */}
                  <div className="col-lg-3 col-md-6 m-b30">
                    <div
                      className="icon-bx-wraper center bg-white p-a30 h-100"
                      style={{
                        minHeight: "320px",
                        borderRadius: "12px",
                        boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                        border: "3px solid #b8d88e",
                        display: "flex",
                        flexDirection: "column"
                      }}
                    >
                      <div className="icon-lg m-b20">
                        <i className="flaticon-trophy" style={{ fontSize: "50px", color: "#b8d88e" }}></i>
                      </div>
                      <div className="icon-content" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                        <h4 className="dlab-tilte" style={{ color: "#48af53", marginBottom: "15px" }}>
                          Child-Friendly Environment
                        </h4>
                        <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
                          A warm, safe, and thoughtfully prepared space where children feel secure, valued, and confident to explore.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card 2 - Strong Parent-School Partnership */}
                  <div className="col-lg-3 col-md-6 m-b30">
                    <div
                      className="icon-bx-wraper center bg-white p-a30 h-100"
                      style={{
                        minHeight: "320px",
                        borderRadius: "12px",
                        boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                        border: "3px solid #ffc570",
                        display: "flex",
                        flexDirection: "column"
                      }}
                    >
                      <div className="icon-lg m-b20">
                        <i className="flaticon-location" style={{ fontSize: "50px", color: "#ffc570" }}></i>
                      </div>
                      <div className="icon-content" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                        <h4 className="dlab-tilte" style={{ color: "#48af53", marginBottom: "15px" }}>
                          Strong Parent–School Partnership
                        </h4>
                        <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
                          We believe child development thrives when parents and educators work together with shared understanding and responsibility.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card 3 - Customized Learning */}
                  <div className="col-lg-3 col-md-6 m-b30">
                    <div
                      className="icon-bx-wraper center bg-white p-a30 h-100"
                      style={{
                        minHeight: "320px",
                        borderRadius: "12px",
                        boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                        border: "3px solid #f5a5b8",
                        display: "flex",
                        flexDirection: "column"
                      }}
                    >
                      <div className="icon-lg m-b20">
                        <i className="flaticon-abc-block" style={{ fontSize: "50px", color: "#f5a5b8" }}></i>
                      </div>
                      <div className="icon-content" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                        <h4 className="dlab-tilte" style={{ color: "#48af53", marginBottom: "15px" }}>
                          Customized Learning for Every Child
                        </h4>
                        <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
                          Each child follows an individualized learning journey, progressing at their own pace with the space to grow independently.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card 4 - Emotional Wellbeing */}
                  <div className="col-lg-3 col-md-6 m-b30">
                    <div
                      className="icon-bx-wraper center bg-white p-a30 h-100"
                      style={{
                        minHeight: "320px",
                        borderRadius: "12px",
                        boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                        border: "3px solid #a5c9f1",
                        display: "flex",
                        flexDirection: "column"
                      }}
                    >
                      <div className="icon-lg m-b20">
                        <i className="flaticon-trophy" style={{ fontSize: "50px", color: "#a5c9f1" }}></i>
                      </div>
                      <div className="icon-content" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                        <h4 className="dlab-tilte" style={{ color: "#48af53", marginBottom: "15px" }}>
                          Emotional Wellbeing at the Core
                        </h4>
                        <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
                          Emotional intelligence is our primary focus. Every emotion is acknowledged, respected, and gently guided.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Instagram Feed Section */}
            <InstagramFeed />

            <div
              className="section-full bg-white content-inner-2 about-content bg-img-fix"
              style={{ backgroundImage: "url(" + bnr3 + ")" }}
            >
              <BackgroundBlog2 />
            </div>
            <div className="section-full bg-white content-inner-1">
              <div className="container">
                <div className="section-head text-center">
                  <h2
                    className="head-title text-secondry"
                    style={{ color: "#48af53" }}
                  >
                    Gallery
                  </h2>
                  <p>
                    Take a virtual tour of our beautiful Montessori preschool in
                    Whitefield and Indiranagar's , Bengaluru
                  </p>
                </div>
                <GallerySlider />
              </div>
            </div>
            <div
              className="section-full bg-white content-inner-1"
              style={{
                backgroundImage: "url(" + bgimg3 + ")",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="container">
                <div className="section-head text-center">
                  <h2
                    className="head-title text-secondry"
                    style={{ color: "#48af53" }}
                  >
                    Our Montessori Certified Teachers
                  </h2>
                  <p style={{ maxWidth: "900px", margin: "0 auto" }}>
                    Our teachers at Paper Bird Shishukul, Whitefeild & Indiranagar are well
                    qualified, trained and experienced with college degrees. They
                    have additional degrees in Early Child Education (ECE),
                    Montessori and NTT diploma. Teacher ratio is 12:1. Teacher
                    aides with valuable experience and effective communication
                    skills support our Bengaluru preschool.
                  </p>
                </div>
                <TeacherSlider />
              </div>
            </div>
            <div className="section-full bg-white content-inner-1">
              <div className="container">
                <div className="section-head text-center">
                  <h2
                    className="head-title text-secondry"
                    style={{ color: "#48af53" }}
                  >
                    Parent Testimonials
                  </h2>
                  <p>
                    Hear what parents from Indiranagar and across Bengaluru say
                    about Paper Bird Shishukul
                  </p>
                </div>
                <TestiMonialSlider />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

function BackgroundBlog2() {
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
              <h3 style={{
                color: "#052c52", // Deep Midnight Blue
                fontWeight: "700",
                textShadow: "2px 2px 4px rgba(255,255,255,0.8)" // Glow for readability
              }}>
                Join Our New Session at Borewell Road, Whitefield's Best Preschool
              </h3>

              <h2 style={{
                color: "#052c52",
                textShadow: "2px 2px 4px rgba(255,255,255,0.8)"
              }}>
                Call To Enrol Your Child in Whitefield  <br />
                <span style={{
                  color: "#d32f2f", // Strong Red for emphasis
                  fontWeight: "800",
                  display: "inline-block",
                  marginTop: "5px",
                  fontSize: "40px"
                }}>
                  +91  98451 27859
                </span>
              </h2>

              <p style={{
                color: "#052c52",
                fontSize: "18px",
                marginTop: "15px",
                fontWeight: "600",
                textShadow: "1px 1px 2px rgba(255,255,255,0.8)"
              }}>
                Visit us at Site No 16, Ashton Park, Borewell Road, Behind Casa Gopalan,
              </p>

              <Link
                to={"./contact-us"}
                className="btn btn-md radius-xl"
                style={{
                  backgroundColor: "#ff564b", // Vibrant Red-Orange
                  color: "#ffffff",
                  border: "none",
                  marginTop: "20px",
                  fontWeight: "700",
                  padding: "15px 35px",
                  boxShadow: "0 10px 20px rgba(255, 86, 75, 0.4)", // Glowing shadow
                  fontSize: "16px",
                  textTransform: "uppercase",
                  letterSpacing: "1px"
                }}
              >
                Contact Us for Admission
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { BackgroundBlog2 };
export default Index1;
