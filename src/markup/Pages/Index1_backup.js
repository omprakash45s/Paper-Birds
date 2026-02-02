import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import BannerSlider from "../Element/BannerSlider";
import FromSlider from "../Element/FromSlider";
import TestiMonialSlider from "../Element/TestiMonialSlider";
import TeacherSlider from "../Element/TeacherSlider";
import GallerySlider from "../Element/GallerySlider";
import Curriculum from "../Element/Curriculum";
import InstagramFeed from "../Element/InstagramFeed";
import SEO from "../../components/SEO";
import { OrganizationSchema, LocalBusinessSchema } from "../../components/StructuredData";

import icon1 from "./../../images/icon/icon1.jpg";
import icon2 from "./../../images/icon/icon2.jpg";
import icon3 from "./../../images/icon/icon3.jpg";
import icon4 from "./../../images/icon/icon4.jpg";
import bgimg1 from "./../../images/line.png";
import bnr3 from "./../../images/background/bg6.jpg";
import bgimg3 from "./../../images/line2.png";

const iconBlog = [
  { image: icon1, title1: "Learning Through Play", title2: "and Interaction" },
  { image: icon2, title1: "A Holistic Approach", title2: "to Development" },
  { image: icon3, title1: "Safe and Cheerful", title2: "Environment" },
  { image: icon4, title1: "Child - Centered ", title2: "Learning" },
];
const iconBlog2 = [
  {
    icon: <i className="flaticon-rattle text-blue" />,
    title: "Daycare",
    desc: "We provides a safe and nurturing environment where children receive supervised care, engage in activities, and socialize with their peers.",
  },
  {
    icon: <i className="flaticon-bricks text-green" />,
    title: "Transport",
    desc: "Reliable and safe transport services are offered by the school, ensuring convenient and secure commuting for our students.",
  },
  {
    icon: <i className="flaticon-puzzle text-orange" />,
    title: "Hygenic Food",
    desc: "Enjoy peace of mind knowing that our school provides hygienic and nutritious meals, ensuring your child's health and well-being",
  },
  {
    icon: <i className="flaticon-boy text-green" />,
    title: "Regarding Safety",
    desc: "14 CCTV Cameras always monitored school gate always kept locked, safety grills, safe and child friendly flooring, Staff credentials and contacts have been verified.",
  },
];

class Index1 extends Component {
  render() {
    return (
      <Fragment>
        <SEO 
          title="Paper Bird Shishukul - Montessori Preschool & Daycare in Indiranagar, Bengaluru"
          description="Paper Bird Shishukul is a premier Montessori preschool and daycare in Indiranagar, Bengaluru offering holistic early childhood education. Located at Paramahansa Yogananda Rd. Nurturing young minds since 2017 with certified teachers, safe environment, and child-centered learning. Call 097415 63692."
          keywords="montessori preschool indiranagar, montessori preschool bengaluru, daycare indiranagar, daycare bengaluru, early childhood education, preschool bangalore, montessori school indiranagar, paper bird shishukul, kindergarten bengaluru, child care center indiranagar, holistic education, montessori certified teachers, best preschool indiranagar, preschool paramahansa yogananda road"
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
            {/*  About Us */}
            <div className="section-full bg-white content-inner-1 text-center">
              <div className="container">
                <div className="section-head">
                  <h2
                    className="head-title text-secondry"
                    style={{ color: "#48af53" }}
                  >
                    Welcome to Paper Bird Shishukul
                  </h2>
                  <p>
                    Where little hands create big dreams – Paper Bird Shishukul,
                    where education meets imagination!
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
                            <img src={data.image} alt="" />
                          </Link>
                        </div>
                        <div className="icon-content">
                          <h6 className="dlab-tilte">
                            {data.title1}
                            <br />
                            {data.title2}
                          </h6>
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
                backgroundImage: "url(" + "" + ")",
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
                        Our Vision and Mission
                        <br />
                      </h2>
                      <p style={{ textAlign: "justify" }}>
                        We are dedicated to providing high-quality holistic
                        education that goes beyond textbooks and classrooms. Our
                        mission is to create a vibrant learning environment
                        where children can blossom intellectually, emotionally,
                        socially, physically, and creatively. We believe in
                        fostering a love for learning, encouraging curiosity,
                        and nurturing the unique talents of every child.
                      </p>
                      <p></p>
                      <p style={{ textAlign: "justify" }}>
                        Our vision extends beyond the confines of traditional
                        education. We aspire to invoke in our students a genuine
                        love for learning – a love that will accompany them
                        throughout their lives. By instilling a sense of
                        curiosity, resilience, and empathy, we prepare our
                        students to face the challenges of the ever-changing
                        world with confidence and grace.
                      </p>
                      {/* <Link to={"./faqs"} className="btn btn-md kids-btn radius-xl">Learn more</Link> */}
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
                          <h2 className="dlab-tilte">{item.title}</h2>
                          <p>{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Curriculum />
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
                    About the Teachers
                  </h2>
                  <p style={{ maxWidth: "900px" }}>
                    Our teachers are well qualified, trained and experienced
                    with college degree, they have additional degree Early Child
                    Education(ECE), Montessori and NTT diploma degree. Teachers
                    ratio is 12:1. Teachers aides with valuable experience and
                    effective communication skills.
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
                    Testimonials
                  </h2>
                </div>
                <TestiMonialSlider />
              </div>
            </div>
            {/* <div className="section-full bg-white content-inner">
							<div className="container">
								<div className="section-head text-center">
									<h2 className="head-title text-secondry">From the Blog</h2>
									<p>We have an excellent teacher to child ratio at our Kindergarten to ensure that each child receives the attention he or she needs</p>
								</div>
								<FromSlider />
							</div>
						</div> */}
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
              <h4 className="text-white">Join Our New Session</h4>
              <h2>
                Call To Enrol Your Child <br />
                <span className="text-yellow">+91 9741563692</span>
              </h2>
              <Link to={"./contact-us"} className="btn btn-md radius-xl">
                Read More
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
