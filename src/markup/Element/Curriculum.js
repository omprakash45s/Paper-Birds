import React, { Fragment, Component } from "react";
import largeimg from "./../../images/blog/large/Curriculum.jpg"; // Using this as the common image for now
import prayer from "./../../images/prayer.svg";
import yoga from "./../../images/yoga.svg";
import dance from "./../../images/dance.svg";
import circle from "./../../images/circle.svg";
import learning from "./../../images/learning.svg";
import snacks from "./../../images/snacks.svg";
import outdoor from "./../../images/outdoor.svg";
import lifeskills from "./../../images/lifeskills.svg";
import art from "./../../images/art.svg";
import story from "./../../images/story.svg";
import rhyme from "./../../images/rhyme.svg";
import music from "./../../images/music.svg";
import p from "./../../images/blog/large/prayer.JPG";
import y from "./../../images/blog/large/Yoga.jpg";
import d from "./../../images/blog/large/Dance.JPG";
import c from "./../../images/blog/large/circle.jpg";
import concept from "./../../images/blog/large/concept.JPG";
import snacksimg from "./../../images/blog/large/Snackss.JPG";
import o from "./../../images/blog/large/Outdoor.jpg";  
import ls from "./../../images/blog/large/ls.JPG";
import artt from "./../../images/blog/large/artt.JPG";
import storyy from "./../../images/blog/large/storyy.png";
import rhy from "./../../images/blog/large/rhy.png";
import mu from "./../../images/blog/large/mu.png";
import maria from "./../../images/blog/large/maria.JPG";

class ClassDetailContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoveredIndex: null,
    };
  }

  render() {
    const scheduleItems = [
      { icon: prayer, title: "Prayer", bgColor: "#b8d88e", iconBg: "#a5c97b", img: c },
      { icon: yoga, title: "Yoga", bgColor: "#b8d88e", iconBg: "#a5c97b", img: y },
      { icon: dance, title: "Dance", bgColor: "#b8d88e", iconBg: "#a5c97b", img: d },

      { icon: circle, title: "Circle Time", bgColor: "#ffc570", iconBg: "#ffb347", img: p },
      { icon: learning, title: "Concept Learning", bgColor: "#ffc570", iconBg: "#ffb347", img: concept },
      { icon: snacks, title: "Snacks Time", bgColor: "#ffc570", iconBg: "#ffb347", img: snacksimg },

      { icon: outdoor, title: "Outdoor Play", bgColor: "#f5a5b8", iconBg: "#ea8fa5", img: o },
      { icon: lifeskills, title: "Life Skills", bgColor: "#f5a5b8", iconBg: "#ea8fa5", img: ls },
      { icon: art, title: "Art & Craft", bgColor: "#f5a5b8", iconBg: "#ea8fa5", img: artt },

      { icon: story, title: "Story Time", bgColor: "#a5c9f1", iconBg: "#8ab6e3", img: storyy },
      { icon: rhyme, title: "Rhyme Time", bgColor: "#a5c9f1", iconBg: "#8ab6e3", img: rhy },
      { icon: music, title: "Music Session", bgColor: "#a5c9f1", iconBg: "#8ab6e3", img: mu },
    ];

    return (
      <Fragment>
        <div className="container my-5">
          {/* ===== HEADER SECTION ===== */}
          <div className="section-head text-center mb-5">
            <h1
              className="head-title"
              style={{
                color: "#48af53",
                fontSize: "38px",
                marginBottom: "15px",
                lineHeight: "1.3",
                fontWeight: "700",
              }}
            >
              Our Academic Curriculum
            </h1>
            <p
              style={{
                fontSize: "20px",
                marginBottom: "25px",
                fontWeight: "500",
                color: "#333",
              }}
            >
              Nurturing curious minds through proven educational approaches
            </p>
          </div>

          {/* ===== MAIN CONTENT SECTION ===== */}
          <div className="row g-4 mb-5">
            {/* LEFT — IMAGE SECTION */}
            <div className="col-lg-5">
              <div className="position-relative h-100">
                <img
                  src={maria}
                  alt="Our Curriculum"
                  className="img-fluid w-100 h-100"
                  style={{
                    objectFit: "cover",
                    border: "7px solid #48af53",
                    borderRadius: "16px",
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
                    minHeight: "450px",
                  }}
                />
              </div>
            </div>

            {/* RIGHT — TEXT CONTENT */}
            <div className="col-lg-7">
              {/* Maria Montessori Card */}
              <div
                className="mb-4 p-4"
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  border: "1px solid #e0e0e0",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                }}
              >
                <h4
                  style={{
                    color: "#48af53",
                    fontSize: "24px",
                    fontWeight: "600",
                    marginBottom: "15px",
                  }}
                >
                  Maria Montessori Approach
                </h4>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#555",
                    lineHeight: "1.8",
                    marginBottom: "0",
                  }}
                >
                  <strong>Maria Montessori's</strong> approach to education was
                  deeply rooted in her observations of children's behavior and
                  development. She believed that children possessed an innate
                  desire to learn and explore their environment. Montessori
                  classrooms are designed to promote independence, exploration,
                  and joyful learning through self-guided activities.
                </p>
              </div>

              {/* Playway Method Card */}
              <div
                className="mb-4 p-4"
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  border: "1px solid #e0e0e0",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                }}
              >
                <h4
                  style={{
                    color: "#48af53",
                    fontSize: "24px",
                    fontWeight: "600",
                    marginBottom: "15px",
                  }}
                >
                  Playway Method
                </h4>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#555",
                    lineHeight: "1.8",
                    marginBottom: "0",
                  }}
                >
                  <strong>Playway method</strong> is a complete developmental
                  approach that combines structured play activities with
                  traditional learning, enabling children to grow socially,
                  emotionally, and academically through hands-on experiences.
                </p>
              </div>
            </div>
          </div>

          {/* ===== DAILY SCHEDULE SECTION (ANIMATED CARDS) ===== */}
          <div className="mt-5">
            <div className="section-head text-center mb-4">
              <h2
                style={{
                  color: "#48af53",
                  fontSize: "32px",
                  fontWeight: "700",
                  marginBottom: "10px",
                }}
              >
                A Day at Paper Bird Shishukul
              </h2>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "#333",
                  marginBottom: "0",
                }}
              >
                Every moment is designed for growth, joy, and discovery
              </p>
            </div>

            <div className="row mt-4">
              {scheduleItems.map((item, index) => {
                // Determine if this card should be expanded
                // It is expanded if:
                // 1. It is currently being hovered OR
                // 2. Nothing is hovered AND it is one of the first 3 items (0, 1, 2)
                const isHovered = this.state.hoveredIndex === index;
                const isDefaultOpen = this.state.hoveredIndex === null && index < 3;
                const isExpanded = isHovered || isDefaultOpen;

                return (
                  <div key={index} className="col-lg-4 col-md-6 mb-4">
                    <div
                      className="d-flex flex-column"
                      style={{
                        backgroundColor: item.bgColor,
                        borderRadius: "12px",
                        boxShadow: isExpanded
                          ? "0 8px 25px rgba(0,0,0,0.15)"
                          : "0 3px 10px rgba(0,0,0,0.1)",
                        transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
                        overflow: "hidden",
                        cursor: "pointer",
                        height: isExpanded ? "280px" : "80px", // Animates height
                        position: "relative",
                      }}
                      onMouseEnter={() => this.setState({ hoveredIndex: index })}
                      onMouseLeave={() => this.setState({ hoveredIndex: null })}
                    >
                      {/* --- Header Part (Icon + Title) --- */}
                      <div
                        className="d-flex align-items-center p-3"
                        style={{
                          height: "80px", // Fixed height for header part
                          width: "100%",
                          zIndex: 2,
                        }}
                      >
                        <div
                          style={{
                            width: "50px",
                            height: "50px",
                            backgroundColor: item.iconBg,
                            borderRadius: "10px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginRight: "15px",
                            flexShrink: 0,
                          }}
                        >
                          <img
                            src={item.icon}
                            alt={item.title}
                            style={{
                              width: "28px",
                              filter: "brightness(0) invert(1)",
                            }}
                          />
                        </div>
                        <h6
                          style={{
                            color: "#fff",
                            fontSize: "18px",
                            fontWeight: "700",
                            marginBottom: 0,
                            whiteSpace: "nowrap",
                          }}
                        >
                          {item.title}
                        </h6>
                      </div>

                      {/* --- Image Part (Revealed on Expand) --- */}
                      <div
                        style={{
                          flex: 1,
                          opacity: isExpanded ? 1 : 0,
                          transition: "opacity 0.3s ease-in 0.1s", // Delayed fade in
                          padding: "0 15px 15px 15px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          height: "200px", // Remaining height
                        }}
                      >
                        <div
                          style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "8px",
                            overflow: "hidden",
                            backgroundColor: "rgba(255,255,255,0.2)", // Subtle placeholder bg
                          }}
                        >
                          <img
                            src={item.img}
                            alt={item.title}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ClassDetailContent;