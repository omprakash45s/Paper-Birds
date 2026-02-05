import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import PageTitle from "../Layout/PageTitle";

// Images
import bnr1 from "./../../images/line2.png"; // Background Pattern
import clsimg1 from "./../../images/classes/Toddler.jpg"; // Playgroup
import clsimg2 from "./../../images/classes/Daycare.jpg"; // Daycare
import clsimg3 from "./../../images/classes/Nursery.jpg"; // EY M1
import clsimg4 from "./../../images/classes/LKG.jpg";     // EY M2
import clsimg5 from "./../../images/classes/UKG.jpg";     // EY M3

const classesData = [
  {
    image: clsimg1,
    title: "Playgroup",
    age: "20 months – 36 months",
    time: "9:00 am – 12:00 pm",
    size: "14 children",
    description: "This is often a child’s first step away from home, making it a crucial foundational phase. At Paper Bird, we ensure a smooth, emotionally supported transition, where school and parents share equal responsibility.",
    points: [
      "Strong focus on exploration and communication",
      "Individual attention for emotional comfort and adaptability",
      "Skill-based activities that build confidence and motivation",
      "Gentle, respectful handling of every child’s emotions"
    ],
    color: "#ffc570", // Yellow
    accent: "#ef6c00"
  },
  {
    image: clsimg2,
    title: "Daycare",
    age: "2 years – 8 years",
    time: "12:00 pm – 5:30 pm",
    size: "Flexible",
    description: "Our Daycare is a 'home away from home' designed to provide a safe, nurturing, and engaging environment for children after school hours. We focus on relaxation, social interaction, and constructive play.",
    points: [
      "Safe, hygienic, and CCTV-monitored environment",
      "Structured schedule with time for rest, snacks, and play",
      "Engaging activities like storytelling, art, and free play",
      "Caring support staff to attend to individual needs"
    ],
    color: "#ffb74d", // Orange
    accent: "#f57c00"
  },
  {
    image: clsimg3,
    title: "Early Years (EY) M1",
    age: "36 months – 48 months",
    time: "9:00 am – 12:30 pm",
    size: "15 children",
    concept: "Vertical Grouping", 
    description: "At this stage, children are given freedom within a structured environment, nurturing responsibility and self-respect.",
    points: [
      "Encourages choice, independence, and accountability",
      "Strong emphasis on peer learning",
      "Development of routines, instruction-following, and social engagement",
      "Purposeful activities with focus on EPL (Everyday Practical Life), Sensorial, and Language",
      "Cultivates a love for stories and early reading motivation"
    ],
    color: "#f5a5b8", // Pink
    accent: "#c2185b"
  },
  {
    image: clsimg4,
    title: "Early Years (EY) M2",
    age: "48 months – 60 months",
    time: "9:00 am – 1:00 pm",
    size: "15 children",
    description: "Children begin to understand the importance of independence, empathy, and self-expression. A crucial transition phase where confidence and initiative are nurtured.",
    points: [
      "Introduction to writing through meaningful expression",
      "Learning to respect personal and others’ boundaries",
      "Builds emotional awareness and self-identity",
      "Organic preparation for literacy, numeracy, and cultural understanding"
    ],
    color: "#a5c9f1", // Blue
    accent: "#0277bd"
  },
  {
    image: clsimg5,
    title: "Early Years (EY) M3",
    age: "60 months – 72 months",
    time: "9:00 am – 1:00 pm",
    size: "15 children",
    description: "At this stage, children integrate all their learning and prepare confidently for mainstream schooling. Learning from the previous years comes together—the child is ready to fly.",
    points: [
      "Development of leadership, responsibility, and independence",
      "Ownership of learning and care for peer groups",
      "Freedom of speech and expression encouraged at all times",
      "Teachers ensure a guided and smooth transition to primary school"
    ],
    color: "#b8d88e", // Green
    accent: "#2e7d32"
  }
];

class Classes extends Component {
  componentDidMount() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.15 });

    const rows = document.querySelectorAll(".class-row");
    rows.forEach((row) => observer.observe(row));
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="page-content">
          <PageTitle motherMenu="Classes" activeMenu="Our Learning Programs" />
          
          <div className="content-block">
            {/* Main Section with Background Pattern */}
            <div
              className="section-full bg-white content-inner"
              style={{
                backgroundImage: "url(" + bnr1 + ")",
                backgroundSize: "contain",
                backgroundRepeat: "repeat-y",
                backgroundPosition: "top center",
              }}
            >
              <div className="container">
                
                {/* --- MAPPED SECTIONS --- */}
                {classesData.map((item, index) => {
                  const isReverse = index % 2 !== 0; 

                  return (
                    <div 
                      key={index} 
                      className="row align-items-center m-b80 class-row"
                      style={{
                        flexDirection: isReverse ? "row-reverse" : "row",
                        opacity: 0, 
                        transform: "translateY(40px)",
                        transition: "all 0.8s ease-out"
                      }}
                    >
                      {/* --- Image Column --- */}
                      <div className="col-lg-5 col-md-12 m-b30 text-center">
                        <div 
                          className="image-wrapper"
                          style={{
                            padding: "15px",
                            border: `3px dashed ${item.color}`,
                            borderRadius: "30px",
                            display: "inline-block",
                            width: "100%",
                            maxWidth: "480px",
                            position: "relative",
                            backgroundColor: "#fff",
                            transition: "transform 0.4s ease, box-shadow 0.4s ease"
                          }}
                        >
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            style={{ 
                              borderRadius: "20px", 
                              width: "100%", 
                              height: "auto",
                              display: "block",
                              boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                            }} 
                          />
                        </div>
                      </div>

                      {/* --- Content Column --- */}
                      <div className="col-lg-7 col-md-12 m-b30">
                        <div style={{ padding: "0 20px", backgroundColor: "rgba(255,255,255,0.9)", borderRadius: "20px", backdropFilter: "blur(5px)" }}>
                          
                          {/* Title */}
                          <h2 style={{ color: item.accent, fontSize: "34px", marginBottom: "20px", fontWeight: "700" }}>
                            {item.title}
                          </h2>
                          
                          {/* Badges Container */}
                          <div className="d-flex flex-wrap gap-2 mb-4">
                            {/* Age */}
                            <span className="badge-custom" style={{ backgroundColor: "#e1f5fe", color: "#0277bd", border: "1px solid #b3e5fc" }}>
                              <i className="fa fa-child m-r5"></i> Age: {item.age}
                            </span>
                            
                            {/* Time */}
                            <span className="badge-custom" style={{ backgroundColor: "#fff3e0", color: "#ef6c00", border: "1px solid #ffe0b2" }}>
                              <i className="fa fa-clock-o m-r5"></i> Time: {item.time}
                            </span>

                            {/* Class Size */}
                            <span className="badge-custom" style={{ backgroundColor: "#fce4ec", color: "#c2185b", border: "1px solid #f8bbd0" }}>
                              <i className="fa fa-users m-r5"></i> Size: {item.size}
                            </span>

                            {/* CONDITIONAL: Concept (EY M1) */}
                            {item.concept && (
                              <span className="badge-custom" style={{ backgroundColor: "#f3e5f5", color: "#7b1fa2", border: "1px solid #e1bee7" }}>
                                <i className="fa fa-lightbulb-o m-r5"></i> Concept: {item.concept}
                              </span>
                            )}
                          </div>

                          {/* Description */}
                          <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#555", marginBottom: "20px", textAlign: "justify" }}>
                            {item.description}
                          </p>

                          {/* Points List */}
                          <ul style={{ listStyle: "none", paddingLeft: "0", marginBottom: "30px" }}>
                            {item.points.map((point, i) => (
                              <li key={i} style={{ marginBottom: "12px", color: "#666", fontSize: "16px", display: "flex", alignItems: "start" }}>
                                <div style={{ 
                                  minWidth: "24px", 
                                  height: "24px", 
                                  backgroundColor: item.color, 
                                  borderRadius: "50%", 
                                  display: "flex", 
                                  alignItems: "center", 
                                  justifyContent: "center",
                                  marginRight: "15px",
                                  marginTop: "3px"
                                }}>
                                  <i className="fa fa-check" style={{ color: "#fff", fontSize: "12px" }}></i>
                                </div>
                                {point}
                              </li>
                            ))}
                          </ul>

                          {/* Enroll Button */}
                          <Link 
                            to="/contact-us" 
                            className="btn btn-md radius-xl enroll-btn"
                            style={{ 
                              backgroundColor: item.accent, 
                              color: "#fff",
                              border: "none",
                              padding: "14px 35px",
                              fontWeight: "600",
                              fontSize: "16px",
                              boxShadow: `0 8px 20px ${item.color}66`, // Dynamic shadow
                              transition: "all 0.3s ease"
                            }}
                          >
                            Enroll Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}

              </div>
            </div>
          </div>
        </div>
        
        {/* Internal CSS */}
        <style>
          {`
            /* Badge Styling */
            .badge-custom {
              padding: 8px 15px;
              border-radius: 50px;
              font-size: 14px;
              font-weight: 600;
              display: inline-flex;
              align-items: center;
              transition: transform 0.2s ease;
              margin-bottom: 5px;
            }
            .badge-custom:hover {
              transform: translateY(-3px);
            }

            /* Scroll Animation Visible State */
            .class-row.visible {
              opacity: 1 !important;
              transform: translateY(0) !important;
            }

            /* Image Hover */
            .image-wrapper:hover {
              transform: scale(1.02);
              box-shadow: 0 15px 40px rgba(0,0,0,0.1) !important;
            }

            /* Button Hover */
            .enroll-btn:hover {
              transform: translateY(-3px);
              opacity: 0.9;
            }

            /* Responsive Adjustments */
            @media (max-width: 768px) {
              .row.align-items-center {
                flex-direction: column !important; /* Force stack on mobile */
              }
              .badge-custom {
                font-size: 13px;
                padding: 6px 12px;
              }
              .col-lg-5, .col-lg-7 {
                padding: 0;
              }
              .image-wrapper {
                margin-bottom: 25px;
              }
            }
          `}
        </style>

        <Footer />
      </Fragment>
    );
  }
}

export default Classes;