import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import PageTitle from "../Layout/PageTitle";
import bnr1 from "./../../images/line2.png";
import team1 from "./../../images/team/Teachers.jpg";
// import founderImg from "./../../images/about/Founder.jpg";
import founderImg from "./../../images/malini.jpg";
import Laxmi from "./../../images/laxmi.jpeg";
import latha from "./../../images/latha.jpeg";


const teamBlog = [
  { image: team1 },
];

const teachersData = [
  {
    name: "Malini Selvarajan",
    designation: "Founder & Chairperson",
    image: founderImg,
    description: "Mrs. Malini Selvarajan is the visionary founder and chairperson of Paper Bird Shishukul. With her B.Ed and MBA qualifications, she has dedicated over a decade to early childhood education. Her deep love for children and commitment to creating a nurturing, home-like environment has shaped Paper Bird into a trusted institution serving over 590 families since 2017."
  },
  {
    name: "Laxmi Kumari",
    designation: "Academic Head and Paper Bird Shishukul Whitefield Center Head",
    image: Laxmi,
    description: "Laxmi has completed her Early Childhood Education from the Spastic Society of Karnataka, Bharat Vidya Mandir, along with formal Montessori training. She brings over 16 years of experience in the field of early childhood education, including 2 years of hands-on Montessori classroom practice. She has worked as a Centre Head and Academic Coordinator at Paper Bird, Indiranagar, where she applied her expertise in academic leadership, curriculum implementation, and team mentoring. Her focus area is effective implementation of the Montessori curriculum, with a strong focus on hands-on learning, practical life activities, and experiential education. She firmly believes that children learn best through meaningful experiences that build independence, confidence, and self-worth. Her educational philosophy centers on nurturing the whole child, encouraging curiosity, independence, empathy, and respect for others. Through a well-prepared environment and guided learning, she strives to help children grow into confident, capable, and compassionate individuals."
  },
  {
    name: "Latha Rao",
    designation: "Academic Mentor & Trainer",
    image: latha,
    description: "Latha Rao is the current director of training of IMTC (Indian Montessori Training Courses) Koramangala under the auspices of the Indian Montessori Centre. She is passionate about creating learning environments for children that help them learn with joy. She has done her primary course from Association Montessori Internationale and elementary course from Indian Montessori Centre. She has also worked in Anne Frank Montessori in Long Island, NY under the teachers exchange programme and worked with children for more than 30 years, including the Valley School of the KFI institutions. As a science graduate from the University of Madras, she has done her Masters in inclusive education from the University of Northampton, UK. Her latest learning has been an in-depth study of curating Montessori environments to integrate children with learning differences. This certificate is in collaboration with the Maria Montessori Institute, London."
  }
];

class Teachers extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="page-content">
          <PageTitle motherMenu="Teachers" activeMenu="Teachers" />
          <div className="content-block">
            {/* About Teachers Section */}
            <div
              className="section-full bg-white content-inner"
              style={{
                backgroundImage: "url(" + bnr1 + ")",
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
                  <p style={{ maxWidth: "900px", margin: "0 auto" }}>
                    Our teachers are well qualified, trained and experienced
                    with college degree, they have additional degree Early Child
                    Education(ECE), Montessori and NTT diploma degree. Teachers
                    ratio is 12:1. Teachers aides with valuable experience and
                    effective communication skills.
                  </p>
                </div>

                <div className="row">
                  <div className="sprite-nav" style={{ textAlign: "center" }}>
                    <img src={team1} alt="Our Teachers" />
                  </div>
                </div>
              </div>
            </div>

            {/* Meet Our Team Section */}
            <div className="section-full bg-white content-inner-2">
              <div className="container">
                <div className="section-head text-center m-b50">
                  <h2
                    className="head-title text-secondry"
                    style={{ color: "#48af53" }}
                  >
                    Meet Our Team
                  </h2>
                  <p style={{ maxWidth: "900px", margin: "0 auto" }}>
                    Dedicated professionals committed to nurturing young minds with expertise and compassion
                  </p>
                </div>

                {/* Team Members */}
                {teachersData.map((teacher, index) => (
                  <div 
                    className="row align-items-center m-b60" 
                    key={index}
                    style={{
                      paddingBottom: index !== teachersData.length - 1 ? "40px" : "0",
                      borderBottom: index !== teachersData.length - 1 ? "2px solid #f0f0f0" : "none",
                      marginBottom: index !== teachersData.length - 1 ? "60px" : "0"
                    }}
                  >
                    {/* Alternate layout: even index = image right, odd index = image left */}
                    {index % 2 === 0 ? (
                      <>
                        {/* Content on Left */}
                        <div className="col-lg-7 col-md-12 m-b30">
                          <div className="teacher-info">
                            <h3 
                              className="head-title"
                              style={{ 
                                color: "#48af53",
                                fontSize: "28px",
                                marginBottom: "10px",
                                fontWeight: "700"
                              }}
                            >
                              {teacher.name}
                            </h3>
                            <h5 style={{ 
                              color: "#666",
                              fontSize: "18px",
                              marginBottom: "25px",
                              fontWeight: "600"
                            }}>
                              {teacher.designation}
                            </h5>
                            <p style={{ 
                              fontSize: "16px",
                              lineHeight: "1.8",
                              color: "#666",
                              textAlign: "justify"
                            }}>
                              {teacher.description}
                            </p>
                          </div>
                        </div>

                        {/* Image on Right */}
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
                              src={teacher.image} 
                              alt={teacher.name}
                              style={{
                                width: "100%",
                                height: "auto",
                                display: "block"
                              }}
                            />
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Image on Left */}
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
                              src={teacher.image} 
                              alt={teacher.name}
                              style={{
                                width: "100%",
                                height: "auto",
                                display: "block"
                              }}
                            />
                          </div>
                        </div>

                        {/* Content on Right */}
                        <div className="col-lg-7 col-md-12 m-b30">
                          <div className="teacher-info">
                            <h3 
                              className="head-title"
                              style={{ 
                                color: "#48af53",
                                fontSize: "28px",
                                marginBottom: "10px",
                                fontWeight: "700"
                              }}
                            >
                              {teacher.name}
                            </h3>
                            <h5 style={{ 
                              color: "#666",
                              fontSize: "18px",
                              marginBottom: "25px",
                              fontWeight: "600"
                            }}>
                              {teacher.designation}
                            </h5>
                            <p style={{ 
                              fontSize: "16px",
                              lineHeight: "1.8",
                              color: "#666",
                              textAlign: "justify"
                            }}>
                              {teacher.description}
                            </p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default Teachers;