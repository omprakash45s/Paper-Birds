import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import BannerSlider from "../Element/BannerSlider";
import TestiMonialSlider from "../Element/TestiMonialSlider";
import TeacherSlider from "../Element/TeacherSlider";
import GallerySlider from "../Element/GallerySlider";
import Curriculum from "../Element/Curriculum";
import InstagramFeed from "../Element/InstagramFeed";
import SEO from "../../components/SEO";
import {
  OrganizationSchema,
  LocalBusinessSchema,
} from "../../components/StructuredData";

import icon1 from "./../../images/icon/icon1.jpg";
import icon2 from "./../../images/icon/icon2.jpg";
import icon3 from "./../../images/icon/icon3.jpg";
import icon4 from "./../../images/icon/icon4.jpg";
import bnr3 from "./../../images/background/bg6.jpg";
import bgimg3 from "./../../images/line2.png";

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

const iconBlog2 = [
  {
    icon: <i className="flaticon-rattle text-blue" />,
    title: "Daycare Services in Indiranagar",
    desc: "Premium daycare services in Indiranagar, Bengaluru. We provide a safe and nurturing environment where children receive supervised care, engage in age-appropriate activities, and socialize with their peers.",
  },
  {
    icon: <i className="flaticon-bricks text-green" />,
    title: "Safe Transport in Bengaluru",
    desc: "Reliable and safe transport services across Bengaluru, ensuring convenient and secure commuting for our students in Indiranagar and surrounding areas.",
  },
  {
    icon: <i className="flaticon-puzzle text-orange" />,
    title: "Hygienic & Nutritious Food",
    desc: "Enjoy peace of mind knowing that our Indiranagar preschool provides hygienic and nutritious meals, ensuring your child's health and well-being with carefully planned menus.",
  },
  {
    icon: <i className="flaticon-boy text-green" />,
    title: "Safety First - CCTV Monitored",
    desc: "14 CCTV cameras always monitored, school gate always kept locked, safety grills, safe and child-friendly flooring. All staff credentials and contacts have been thoroughly verified.",
  },
];

class Index1 extends Component {
  render() {
    return (
      <Fragment>
        <SEO
          title="Paper Bird Shishukul - Best Montessori Preschool & Daycare in Indiranagar, Bengaluru"
          description="Paper Bird Shishukul is the premier Montessori preschool and daycare in Indiranagar, Bengaluru offering holistic early childhood education. Located at 1321, Paramahansa Yogananda Rd. Nurturing young minds since 2017 with Montessori-certified teachers, safe CCTV-monitored environment, and child-centered learning. Call 097415 63692 for admission."
          keywords="montessori preschool indiranagar, best preschool indiranagar, daycare indiranagar, montessori preschool bengaluru, daycare bengaluru, early childhood education indiranagar, preschool bangalore, montessori school indiranagar, paper bird shishukul, kindergarten bengaluru, child care center indiranagar, holistic education, montessori certified teachers, best preschool indiranagar, preschool paramahansa yogananda road, preschool near me, daycare near indiranagar, montessori daycare bangalore"
          url="https://paperbirdshishukul.com/"
        />
        <OrganizationSchema />
        <LocalBusinessSchema />
        <Header />
        <div className="page-content bg-white">
          {/* Slider Banner */}
          <BannerSlider />
          {/* Slider Banner */}
          <div className="content-block">
            {/*  Hero Section with Local SEO */}
            <div className="section-full bg-white content-inner-1 text-center">
              <div className="container">
                <div className="section-head">
                  <h1
                    className="head-title text-secondry"
                    style={{
                      color: "#48af53",
                      fontSize: "38px",
                      marginBottom: "15px",
                      lineHeight: "1.3",
                    }}
                  >
                    Best Montessori Preschool & Daycare in Indiranagar, Bengaluru
                  </h1>
                  <p
                    style={{
                      fontSize: "20px",
                      marginBottom: "10px",
                      fontWeight: "500",
                    }}
                  >
                    Welcome to Paper Bird Shishukul - Where little hands create
                    big dreams!
                  </p>
                  <p style={{ fontSize: "16px", color: "#666", marginBottom: "5px" }}>
                    📍 Located at 1321, Paramahansa Yogananda Road, Eshwara
                    Layout, Indiranagar
                  </p>
                  <p style={{ fontSize: "16px", color: "#666", marginBottom: "5px" }}>
                    🏆 Serving families in Bengaluru since 2017 | Montessori
                    Certified Teachers
                  </p>
                  <p style={{ fontSize: "18px", color: "#48af53", fontWeight: "600" }}>
                    📞 Call for Admission: <a href="tel:+919741563692" style={{ color: "#48af53" }}>097415 63692</a>
                  </p>
                </div>
                <div className="row">
                  {iconBlog.map((data, index) => (
                    <div
                      className="col-lg-3 col-md-6 col-sm-6 col-12"
                      key={index}
                    >
                      <div className="icon-bx-wraper sr-iconbox m-b20">
                        <div className="icon-lg m-b20">
                          <Link to={"#"} className="icon-cell">
                            <img src={data.image} alt={data.alt} />
                          </Link>
                        </div>
                        <div className="icon-content">
                          <h3 className="dlab-tilte" style={{ fontSize: "18px" }}>
                            {data.title1}
                            <br />
                            {data.title2}
                          </h3>
                        </div>
                      </div>
                    </div>
                  ))}
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
              <div className="container">
                <div className="row">
                  <div className="col-lg-7 col-md-12 col-sm-12 col-12">
                    <div className="section-head">
                      <h2
                        className="head-title text-secondry"
                        style={{ color: "#48af53" }}
                      >
                        Our Vision and Mission - Montessori Education in
                        Indiranagar
                        <br />
                      </h2>
                      <p style={{ textAlign: "justify" }}>
                        At Paper Bird Shishukul, Indiranagar's trusted
                        Montessori preschool, we are dedicated to providing
                        high-quality holistic education that goes beyond
                        textbooks and classrooms. Our mission is to create a
                        vibrant learning environment where children in Bengaluru
                        can blossom intellectually, emotionally, socially,
                        physically, and creatively. We believe in fostering a
                        love for learning, encouraging curiosity, and nurturing
                        the unique talents of every child.
                      </p>
                      <p></p>
                      <p style={{ textAlign: "justify" }}>
                        Our vision extends beyond the confines of traditional
                        education. As one of the leading preschools in
                        Indiranagar, we aspire to invoke in our students a
                        genuine love for learning – a love that will accompany
                        them throughout their lives. By instilling a sense of
                        curiosity, resilience, and empathy, we prepare our
                        students to face the challenges of the ever-changing
                        world with confidence and grace.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                    {iconBlog2.map((item, index) => (
                      <div className="icon-bx-wraper left" key={index}>
                        <div className="icon-lg m-b20">
                          {" "}
                          <span className="icon-cell">{item.icon}</span>{" "}
                        </div>
                        <div className="icon-content">
                          <h3 className="dlab-tilte" style={{ fontSize: "20px" }}>
                            {item.title}
                          </h3>
                          <p>{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
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
                    Why Choose Paper Bird Shishukul in Indiranagar?
                  </h2>
                  <p style={{ maxWidth: "900px", margin: "0 auto" }}>
                    As the premier Montessori preschool in Indiranagar,
                    Bengaluru, we offer a unique blend of authentic Montessori
                    education, modern facilities, and a nurturing environment.
                    Conveniently located on Paramahansa Yogananda Road, we serve
                    families across Indiranagar, Domlur, Koramangala, and
                    surrounding areas in Bengaluru.
                  </p>
                </div>
                <div className="row m-t30">
                  <div className="col-lg-4 col-md-6 m-b30">
                    <div className="icon-bx-wraper center bg-white p-a30" style={{ minHeight: "250px" }}>
                      <div className="icon-lg m-b20">
                        <i className="flaticon-abc-block text-blue" style={{ fontSize: "50px" }}></i>
                      </div>
                      <div className="icon-content">
                        <h4 className="dlab-tilte" style={{ color: "#48af53" }}>
                          Montessori Certified Teachers
                        </h4>
                        <p>
                          All our teachers are Montessori certified (IMTC/IMI/AMS)
                          with extensive experience in early childhood education
                          in Bengaluru.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 m-b30">
                    <div className="icon-bx-wraper center bg-white p-a30" style={{ minHeight: "250px" }}>
                      <div className="icon-lg m-b20">
                        <i className="flaticon-location text-green" style={{ fontSize: "50px" }}></i>
                      </div>
                      <div className="icon-content">
                        <h4 className="dlab-tilte" style={{ color: "#48af53" }}>
                          Prime Location in Indiranagar
                        </h4>
                        <p>
                          Easily accessible from Indiranagar, Domlur, Koramangala,
                          and HAL areas. Safe transport available across Bengaluru.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 m-b30">
                    <div className="icon-bx-wraper center bg-white p-a30" style={{ minHeight: "250px" }}>
                      <div className="icon-lg m-b20">
                        <i className="flaticon-trophy text-orange" style={{ fontSize: "50px" }}></i>
                      </div>
                      <div className="icon-content">
                        <h4 className="dlab-tilte" style={{ color: "#48af53" }}>
                          Trusted Since 2017
                        </h4>
                        <p>
                          Over 7 years of excellence in Montessori education,
                          serving hundreds of families in Bengaluru with proven
                          results.
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
                    Gallery - Our Preschool in Indiranagar
                  </h2>
                  <p>
                    Take a virtual tour of our beautiful Montessori preschool in
                    Indiranagar, Bengaluru
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
                    Our teachers at Paper Bird Shishukul, Indiranagar are well
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
                    Parent Testimonials - Indiranagar Families
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
              <h3 className="text-white">
                Join Our New Session at Indiranagar's Best Montessori Preschool
              </h3>
              <h2>
                Call To Enrol Your Child in Indiranagar <br />
                <span className="text-yellow">+91 9741563692</span>
              </h2>
              <p className="text-white" style={{ fontSize: "16px", marginTop: "15px" }}>
                Visit us at 1321, Paramahansa Yogananda Rd, Indiranagar, Bengaluru
              </p>
              <Link to={"./contact-us"} className="btn btn-md radius-xl">
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
