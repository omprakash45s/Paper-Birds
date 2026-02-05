import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import PageTitle from "../Layout/PageTitle";
import SEO from "../../components/SEO";
import { BreadcrumbSchema } from "../../components/StructuredData";

// Images
import bnr1 from "./../../images/line2.png";

const openRoles = [
  {
    id: 1,
    title: "Montessori Teacher - Fresher",
    slug: "montessori-teacher-fresher"
  },
  {
    id: 2,
    title: "Montessori Teacher - Experienced",
    slug: "montessori-teacher-experienced"
  }
];

class Careers extends Component {
  render() {
    return (
      <Fragment>
        <SEO 
          title="Careers - Join Our Team"
          description="Join Paper Bird Shishukul's team of passionate educators. We're hiring Montessori teachers, HR managers, and marketing coordinators in Bengaluru. Build your career in early childhood education."
          keywords="montessori teacher jobs bengaluru, teaching jobs bangalore, hr manager jobs, marketing jobs bengaluru, early childhood education careers, preschool jobs bangalore"
          url="https://paperbirdshishukul.com/careers"
        />
        <BreadcrumbSchema items={[
          { name: "Home", url: "https://paperbirdshishukul.com/" },
          { name: "Careers", url: "https://paperbirdshishukul.com/careers" }
        ]} />
        <Header />
        <div className="page-content">
          <PageTitle motherMenu="Careers" activeMenu="Careers" />
          <div className="content-block">
            
            {/* Main Content Section */}
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
                  <h2 className="head-title text-secondry" style={{ color: "#48af53" }}>
                    Careers
                  </h2>
                </div>
                
                {/* Career Description */}
                <div className="row m-b50">
                  <div className="col-lg-12">
                    <div className="dlab-box bg-white p-a30">
                      <p style={{ fontSize: "16px", lineHeight: "1.8", textAlign: "justify" }}>
                        As Paper Bird Shishukul continues to grow and expand across Bengaluru, we are looking for people who are invested in early child development and who are excited to build and strengthen Paper Bird Shishukul's brand. If you are aligned to this vision, please send your CV to{" "}
                        <a href="mailto:careersatpaperbird@gmail.com" style={{ color: "#48af53", fontWeight: "bold" }}>
                          careersatpaperbird@gmail.com
                        </a>{" "}
                        to discuss synergies.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Open Roles Section */}
                <div className="section-head text-center m-b40">
                  <h3 className="head-title text-secondry" style={{ color: "#48af53" }}>
                    Open Roles
                  </h3>
                </div>

                <div className="row">
                  {openRoles.map((role, index) => (
                    <div className="col-lg-6 col-md-6 col-sm-12 m-b30" key={index}>
                      <div className="dlab-box bg-white border" style={{ padding: "30px", textAlign: "center", minHeight: "200px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <div className="icon-bx-wraper center">
                          <div className="icon-bx-lg m-b20" style={{ backgroundColor: "#ed5ab0" }}> 
                            <i className="fa fa-briefcase text-white"></i> 
                          </div>
                          <div className="icon-content">
                            <h4 className="dlab-tilte m-b20" style={{ color: "#48af53" }}>
                              {role.title}
                            </h4>
                            <Link 
                              to={`/job/${role.slug}`}
                              className="btn btn-md radius-xl" 
                              style={{ backgroundColor: "#48af53", color: "white", padding: "10px 25px" }}
                            >
                              View Job Description
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Contact Information */}
                <div className="text-center m-t50">
                  <div className="dlab-box bg-gray p-a40">
                    <h4 style={{ color: "#48af53", marginBottom: "20px" }}>
                      Ready to Join Our Team?
                    </h4>
                    <p className="m-b30" style={{ fontSize: "16px" }}>
                      Send your CV to <strong style={{ color: "#48af53" }}>careersatpaperbird@gmail.com</strong> and let's discuss how you can contribute to our mission of nurturing young minds at Paper Bird Shishukul, Indiranagar.
                    </p>
                    <a 
                      href="mailto:careersatpaperbird@gmail.com?subject=Career Application - Paper Bird Shishukul" 
                      className="btn btn-lg radius-xl" 
                      style={{ backgroundColor: "#ed5ab0", color: "white", padding: "15px 40px", marginRight: "15px", marginBottom: "10px" }}
                    >
                      📧 Email Your CV
                    </a>
                    <a 
                      href="tel:+919741563692" 
                      className="btn btn-lg radius-xl" 
                      style={{ backgroundColor: "#48af53", color: "white", padding: "15px 40px", marginBottom: "10px" }}
                    >
                      📞 Call Us: 097415 63692
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default Careers;