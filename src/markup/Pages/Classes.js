import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import PageTitle from "../Layout/PageTitle";
//images
import bnr1 from "./../../images/line2.png";
import clsimg1 from "./../../images/classes/Toddler.jpg";
import clsimg2 from "./../../images/classes/Daycare.jpg";
import clsimg3 from "./../../images/classes/Nursery.jpg";
import clsimg4 from "./../../images/classes/LKG.jpg";
import clsimg5 from "./../../images/classes/UKG.jpg";
// import clsimg6 from "./../../images/classes/MJ.jpg";
import clsimg7 from "./../../images/classes/MS.jpg";

const classesBlog = [
  {
    images: clsimg2,
    title: "Daycare",
    time: "9.00 am to 6.30 pm",
    age: "1-8",
    size: "NA",
  },
  {
    images: clsimg1,
    title: "Toddlers Program",
    time: "9.00 am to 12.00 pm",
    age: "1.8-2.8",
    size: "12:1",
  },
  {
    images: clsimg3,
    title: "Nursery",
    time: "9.00 am to 12.30 pm",
    age: "3+",
    size: "12:1",
  },
  {
    images: clsimg4,
    title: "LKG",
    time: "9.00 am to 12.30 pm",
    age: "4+",
    size: "12:1",
  },
  {
    images: clsimg5,
    title: "UKG",
    time: "9.00 am to 12.30 pm",
    age: "5+",
    size: "12:1",
  },
  {
    images: clsimg7,
    title: "Montessori",
    time: "9.00 am to 1.00 pm",
    age: "3-6",
    size: "12:1",
  },
  //   {
  //     images: clsimg7,
  //     title: "Mont Senior",
  //     time: "9.00 am to 1.00 pm",
  //     age: "3-4",
  //   },
];

class Classes extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="page-content">
          <PageTitle motherMenu="Classes" activeMenu="Classes" />
          <div className="content-block">
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
                <div className="row sp40">
                  {classesBlog.map((data, index) => (
                    <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                      <div className="class-item">
                        <div className="class-media">
                          <img src={data.images} alt="" />
                          <p>
                            <span>Class Time:</span>
                            {data.time}
                          </p>
                        </div>
                        <div className="class-info">
                          <h4 style={{ color: "#ed5ab0" }}>{data.title}</h4>
                          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit nulla felis ipsum.</p> */}
                          <ul className="schedule">
                            <li
                              className="bg-blue class-size"
                              style={{ textAlign: "center" }}
                            >
                              <span>Class Size</span> <span>{data.size}</span>{" "}
                            </li>
                            <li></li>
                            <li
                              className="bg-green years-old"
                              style={{ textAlign: "center" }}
                            >
                              <span>Years Old</span> <span>{data.age}</span>{" "}
                            </li>
                            {/* <li className="bg-orange tution"><span>Tution Fee</span> <span>$1500</span> </li> */}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
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
export default Classes;
