import React, { Fragment, Component } from "react";
import largeimg from "./../../images/blog/large/Curriculum.jpg";
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


class ClassDetailContent extends Component {
  render() {
    const scheduleItems = [
  { icon: prayer, title: "Prayer", bgColor: "#b8d88e", iconBg: "#a5c97b" },
  { icon: yoga, title: "Yoga", bgColor: "#b8d88e", iconBg: "#a5c97b" },
  { icon: dance, title: "Dance", bgColor: "#b8d88e", iconBg: "#a5c97b" },

  { icon: circle, title: "Circle Time", bgColor: "#ffc570", iconBg: "#ffb347" },
  { icon: learning, title: "Concept Learning", bgColor: "#ffc570", iconBg: "#ffb347" },
  { icon: snacks, title: "Snacks Time", bgColor: "#ffc570", iconBg: "#ffb347" },

  { icon: outdoor, title: "Outdoor Play", bgColor: "#f5a5b8", iconBg: "#ea8fa5" },
  { icon: lifeskills, title: "Life Skills", bgColor: "#f5a5b8", iconBg: "#ea8fa5" },
  { icon: art, title: "Art & Craft", bgColor: "#f5a5b8", iconBg: "#ea8fa5" },

  { icon: story, title: "Story Time", bgColor: "#a5c9f1", iconBg: "#8ab6e3" },
  { icon: rhyme, title: "Rhyme Time", bgColor: "#a5c9f1", iconBg: "#8ab6e3" },
  { icon: music, title: "Music Session", bgColor: "#a5c9f1", iconBg: "#8ab6e3" },
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
                  src={largeimg}
                  alt="Our Curriculum"
                  className="img-fluid w-100 h-100"
                  style={{
                    objectFit: "cover",
                    borderRadius: "12px",
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

              {/* Badges */}
              {/* <div className="d-flex flex-wrap gap-3">
                <span
                  style={{
                    backgroundColor: "#48af53",
                    color: "white",
                    padding: "10px 20px",
                    borderRadius: "6px",
                    fontSize: "14px",
                    fontWeight: "600",
                    display: "inline-block",
                  }}
                >
                  Montessori Based
                </span>
                <span
                  style={{
                    backgroundColor: "#48af53",
                    color: "white",
                    padding: "10px 20px",
                    borderRadius: "6px",
                    fontSize: "14px",
                    fontWeight: "600",
                    display: "inline-block",
                  }}
                >
                  Playway Integrated
                </span>
                <span
                  style={{
                    backgroundColor: "#48af53",
                    color: "white",
                    padding: "10px 20px",
                    borderRadius: "6px",
                    fontSize: "14px",
                    fontWeight: "600",
                    display: "inline-block",
                  }}
                >
                  NEP 2020 + NCF
                </span>
              </div> */}
            </div>
          </div>

          {/* ===== DAILY SCHEDULE SECTION ===== */}
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
  {scheduleItems.map((item, index) => (
    <div key={index} className="col-lg-4 col-md-6 mb-4">

      <div
        className="p-3 d-flex align-items-center"
        style={{
          backgroundColor: item.bgColor,
          borderRadius: "12px",
          boxShadow: "0 3px 10px rgba(0, 0, 0, 0.1)",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-5px)";
          e.currentTarget.style.boxShadow =
            "0 6px 20px rgba(0, 0, 0, 0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow =
            "0 3px 10px rgba(0, 0, 0, 0.1)";
        }}
      >

        <div
          style={{
            width: "55px",
            height: "55px",
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
              width: "30px",
              filter: "brightness(0) invert(1)",
            }}
          />
        </div>

        <h6
          style={{
            color: "#fff",
            fontSize: "16px",
            fontWeight: "700",
            marginBottom: 0,
          }}
        >
          {item.title}
        </h6>

      </div>
    </div>
  ))}
</div>

          </div>
        </div>
      </Fragment>
    );
  }
}

export default ClassDetailContent;