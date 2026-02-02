import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import largeimg from "./../../images/blog/large/Curriculum.jpg";

function Paragraph() {
  return (
    <>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting.
      </p>
    </>
  );
}
class ClassDetailContent extends Component {
  render() {
    return (
      <Fragment>
        <div className="classes-details">
          <div className="class-media ">
            <img src={largeimg} alt="" />
          </div>
          <div className="class-info ">
            <div className="dlab-post-title ">
              <h2 className="post-title m-t0">
                <Link to={"#"}>Our Academic Curriculum</Link>
              </h2>
            </div>
            <div className="dlab-post-meta m-b20">
              <ul className="d-flex align-items-center">
                <li className="post-author">
                  <i className="la la-comment"></i>maria{" "}
                  <Link to={"/#"}> montessori</Link>{" "}
                </li>
                <li className="post-comment">
                  <i className="la la-comment"> </i>{" "}
                  <Link to={"/#"}>playway method</Link>{" "}
                </li>
                <li className="post-comment">
                  <i className="la la-comment"> </i>{" "}
                  <Link to={"/#"}>We follow NEP 2020 and NCF policy</Link>{" "}
                </li>
              </ul>
            </div>
            <div className="container">
              <div className="dlab-post-text section-head">
                <p style={{ fontSize: "18px", color: "black" }}>
                  <strong>Maria Montessori </strong> approach to education was
                  deeply rooted in her observations of children's behavior and
                  development. She believed that children possessed an innate
                  desire to learn and explore their environment, and that the
                  role of education should be to support and nurture this
                  natural curiosity.
                  <br />
                  Central to the Montessori Method is the concept of the
                  prepared environment. Montessori classrooms are carefully
                  designed to encourage independence, freedom of movement, and
                  exploration. Materials are arranged in an orderly manner and
                  are accessible to children at all times. These materials are
                  specifically designed to be self-correcting, allowing children
                  to learn through hands-on exploration and discovery.
                </p>
                {/* <blockquote></blockquote> */}
                <p style={{ fontSize: "18px", color: "black" }}>
                  <strong>Playway method </strong>is a complete package that
                  enables overall development of child along with the knowledge
                  by doing various hands on activities. Playway method is
                  nothing other then traditional way of teaching.
                </p>
                {/* <Paragraph />
              <h4>Funny Kids</h4>
              <Paragraph /> */}
              </div>
            </div>
            <h4>Our Daily Schedule/A day at Paper Bird Shishukul</h4>
            <div className="dlab-post-tags clear">
              <div className="post-tags">
                <Link className="mr-1 fs-6 p-2" to={"#"}>
                  Prayer{" "}
                </Link>
                <Link className="mr-1 fs-6 p-2" to={"#"}>
                  Yoga{" "}
                </Link>
                <Link className="mr-1 fs-6 p-2" to={"#"}>
                  Dance{" "}
                </Link>
                <Link className="mr-1 fs-6 p-2" to={"#"}>
                  Circle time{" "}
                </Link>
                <Link className="mr-1 fs-6 p-2" to={"#"}>
                  Concept learning{" "}
                </Link>
                <Link className="mr-1 fs-6 p-2" to={"#"}>
                  Snacks time{" "}
                </Link>
                <Link className="mr-1 fs-6 p-2" to={"#"}>
                  Outdoor play{" "}
                </Link>
                <Link className="mr-1 fs-6 p-2" to={"#"}>
                  Life Skills{" "}
                </Link>
                <Link className="mr-1 fs-6 p-2" to={"#"}>
                  Art&Craft{" "}
                </Link>
                <Link className="mr-1 fs-6 p-2" to={"#"}>
                  Story time{" "}
                </Link>
                <Link className="mr-1 fs-6 p-2 " to={"#"}>
                  Rhyme time{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default ClassDetailContent;
