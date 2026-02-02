import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import PageTitle from "../Layout/PageTitle";
const Contact = (props) => {
  const schoolId = "Ihspm6Py6i";
  const enquiryFor = [
    "Toddlers Program",
    "Daycare",
    "Nursery",
    "LKG",
    "UKG",
    "Montessori",
  ];
  const parents = ["Father", "Mother"];
  const [onSave, setOnSave] = useState(false);
  const [error, setError] = useState(undefined);
  const [responce, setResponce] = useState(undefined);
  const [enquiryForError, setEnquiryForError] = useState(undefined);
  const [relationError, setRelationError] = useState(undefined);

  const saveEnquiryTolilTriangle = (enqObj) => {
    fetch(
      // "https://development.back4app.io/addEnquiry", //development
      "https://liltriangle.b4a.app/addEnquiry", //production
      {
        method: "POST",
        body: JSON.stringify({
          schoolId: schoolId,
          childName: enqObj.childName,
          relation: enqObj.relation,
          enquiryFor: enqObj.enquiryFor,
          enquirySource: "Website",
          parentName: enqObj.parentName,
          phone: enqObj.phone,
          email: enqObj.email,
          notes: enqObj.notes,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    ).then(
      (response) => {
        console.log(response);
        setOnSave(false);
        if (response.status === 200) {
          setResponce("SUCCESS");
          setError(undefined);
          setTimeout(() => {
            setResponce(undefined);
          }, 2000);
          clearValues();
        } else {
          response.json().then((data) => {
            console.log(data);
            setError(data.error);
            setResponce(undefined);
          });
        }
      },
      (error) => {
        console.log("error" + error.message);
      }
    );
  };
  const clearValues = () => {
    document.getElementById("dzChildName").value = "";
    document.getElementById("dzRelation").value = true;
    document.getElementById("dzEnquiryFor").value = true;
    document.getElementById("dzName").value = "";
    document.getElementById("dzPhone").value = "";
    document.getElementById("dzEmail").value = "";
    document.getElementById("dzAdditionalNote").value = "";
  };

  return (
    <Fragment>
      <Header />
      <div className="page-content">
        <PageTitle motherMenu="Contact Us" activeMenu="Contact Us" />
        <div className="content-block">
          <div className="section-full bg-white">
            <div className="container">
              <div className="row align-items-center content-inner">
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="icon-bx-wraper m-b30 left">
                    <div className="icon-md m-b20 m-t5">
                      <Link to={"#"} className="icon-cell text-blue">
                        <i className="ti-headphone-alt"></i>
                      </Link>
                    </div>
                    <div className="icon-content">
                      <h4 className="dlab-tilte m-b5">Phone</h4>
                      <p>
                        Phone 01:+91 9741563692 <br /> Phone 02: +91 9741563174
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="icon-bx-wraper m-b30 left">
                    <div className="icon-md m-b20 m-t5">
                      <Link to={"#"} className="icon-cell text-green">
                        <i className="ti-location-pin"></i>
                      </Link>
                    </div>
                    <div className="icon-content">
                      <h4 className="dlab-tilte m-b5">Address</h4>
                      <p>
                        1321, Paramahansa Yogananda Rd, Eshwara Layout,
                        Indiranagar, Bengaluru, Karnataka 560038
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="icon-bx-wraper m-b30 left">
                    <div className="icon-md m-b20 m-t5">
                      <Link to={"#"} className="icon-cell text-orange">
                        <i className="ti-email"></i>
                      </Link>
                    </div>
                    <div className="icon-content">
                      <h4 className="dlab-tilte m-b5">Email</h4>
                      <p>paperbird2017@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row content-inner-4">
                <div className="banner-map col-md-12">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.957411925554!2d77.63322837507648!3d12.974575787341083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a7dde8405b%3A0x474eff279d2135a3!2sPaper%20Bird%20Shishukul!5e0!3m2!1sen!2sin!4v1697007968132!5m2!1sen!2sin"
                    className="align-self-stretch rounded-sm border-0"
                    style={{ width: "100%", height: "600px" }}
                    allowfullscreen
                  />
                </div>
              </div>
              <div className="row contact-box content-inner-5">
                <div className="section-head text-center col-md-12">
                  <h2 className="text-secondry" style={{ color: "#48af53" }}>
                    Enquire Us
                  </h2>
                  <p className="m-b0">
                    Please fill in the details and our team will get in touch
                    with you{" "}
                  </p>
                </div>
                <div className="dzFormMsg"></div>
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    // console.log(event.target.elements.dzChildName.value);
                    // console.log(event.target.elements.dzEnquiryFor.value);
                    // console.log(event.target.elements.dzName.value);
                    // console.log(event.target.elements.dzPhone.value);
                    // console.log(event.target.elements.dzEmail.value);
                    // console.log(event.target.elements.dzAdditionalNote.value);
                    // console.log(event.target.elements.dzRelation.value);
                    if (relationError) {
                      setError(false);
                    }
                    if (
                      !enquiryFor.includes(
                        event.target.elements.dzEnquiryFor.value
                      )
                    ) {
                      setEnquiryForError(true);
                      if (
                        !parents.includes(
                          event.target.elements.dzRelation.value
                        )
                      ) {
                        setRelationError(true);
                      }
                    } else if (
                      !parents.includes(event.target.elements.dzRelation.value)
                    ) {
                      setRelationError(true);
                    } else {
                      setOnSave(true);
                      let enqObj = {
                        childName: event.target.elements.dzChildName.value,
                        relation: event.target.elements.dzRelation.value,
                        enquiryFor: event.target.elements.dzEnquiryFor.value,
                        parentName: event.target.elements.dzName.value,
                        phone: event.target.elements.dzPhone.value,
                        email: event.target.elements.dzEmail.value,
                        notes: event.target.elements.dzAdditionalNote.value,
                      };
                      saveEnquiryTolilTriangle(enqObj);
                    }
                  }}
                  className="dzForm col-md-12"
                >
                  {/* <input type="hidden" value="Contact" name="dzToDo" /> */}
                  <div className="row">
                    <div className="col-md-8 col-sm-8">
                      <label>Child Name</label>
                      <div className="form-group">
                        <input
                          name="dzChildName"
                          id="dzChildName"
                          type="text"
                          required
                          className="form-control"
                          placeholder="Enter your Child name"
                        />
                      </div>
                    </div>

                    <div className="col-md-4 col-sm-4">
                      <label>Enquiry For</label>
                      <div className="form-group ">
                        <select
                          className="form-control"
                          required
                          style={{
                            width: "100%",
                            height: "60px",
                            backgroundColor: "#c4eafb",
                            border: "0",
                          }}
                          name="dzEnquiryFor"
                          id="dzEnquiryFor"
                          onChange={(e) => {
                            if (enquiryForError) {
                              setEnquiryForError(false);
                            }
                          }}
                        >
                          <option disabled selected value>
                            -- enquiring for --
                          </option>
                          {enquiryFor.map((e, k) => (
                            <option key={k} value={e}>
                              {e}
                            </option>
                          ))}
                        </select>
                        {enquiryForError && (
                          <p className="text-danger">{"Please select "}</p>
                        )}
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <label>Parent Details</label>
                      <div className="form-group ">
                        <select
                          className="form-control"
                          required
                          style={{
                            width: "100%",
                            height: "60px",
                            backgroundColor: "#c4eafb",
                            border: "0",
                          }}
                          name="dzRelation"
                          id="dzRelation"
                          onChange={(e) => {
                            if (relationError) {
                              setRelationError(false);
                            }
                          }}
                        >
                          <option disabled selected value>
                            -- select relation --
                          </option>
                          {parents.map((e, k) => (
                            <option key={k} value={e}>
                              {e}
                            </option>
                          ))}
                        </select>
                        {relationError && (
                          <p className="text-danger">{"Please select "}</p>
                        )}
                      </div>
                    </div>

                    <div className="col-md-8 col-sm-8">
                      <label>Name</label>
                      <div className="form-group">
                        <input
                          name="dzName"
                          id="dzName"
                          type="text"
                          required
                          className="form-control"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <label>Phone Number</label>
                      <div className="form-group">
                        <input
                          name="dzPhone"
                          id="dzPhone"
                          type="text"
                          required
                          className="form-control"
                          placeholder="Phone"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <label>Email </label>
                      <div className="form-group">
                        <input
                          name="dzEmail"
                          id="dzEmail"
                          type="email"
                          className="form-control"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>

                    <div className="col-md-12 col-sm-12">
                      <label>Any other queries? </label>
                      <div className="form-group">
                        <textarea
                          name="dzAdditionalNote"
                          id="dzAdditionalNote"
                          rows="4"
                          className="form-control"
                          placeholder="Queries"
                        ></textarea>
                      </div>
                    </div>

                    <div className="text-center col-md-12">
                      {onSave && <p>SAVING...........</p>}
                      {!onSave && error && (
                        <p className="text-danger">{error}</p>
                      )}
                      {!onSave && responce && (
                        <p className="text-success">{responce}</p>
                      )}
                    </div>

                    <div className="col-md-12 col-sm-12 text-center">
                      <button
                        name="submit"
                        type="submit"
                        disabled={onSave}
                        value="Submit"
                        className="btn radius-xl btn-lg"
                      >
                        Submit<span></span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};
export default Contact;
