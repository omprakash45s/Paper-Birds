import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import SimpleReactLightbox, {
  SRLWrapper,
  useLightbox,
} from "simple-react-lightbox";
import Masonry from "react-masonry-component";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import PageTitle from "../Layout/PageTitle";

//images
import masonary1 from "./../../images/pbsImages/img1.jpg";
import masonary2 from "./../../images/pbsImages/img2.jpg";
import masonary3 from "./../../images/pbsImages/img3.jpg";
import masonary4 from "./../../images/pbsImages/img4.jpg";
import masonary5 from "./../../images/pbsImages/img5.jpg";
import masonary6 from "./../../images/pbsImages/img6.jpg";
import masonary7 from "./../../images/pbsImages/img7.jpg";
import masonary8 from "./../../images/pbsImages/img8.jpg";
import masonary9 from "./../../images/pbsImages/img9.jpg";
import masonary10 from "./../../images/pbsImages/img10.jpg";
import masonary11 from "./../../images/pbsImages/img11.jpg";
import masonary12 from "./../../images/pbsImages/img12.jpg";
import masonary13 from "./../../images/pbsImages/img13.JPG";
import masonary14 from "./../../images/pbsImages/img14.JPG";
import masonary15 from "./../../images/pbsImages/img15.JPG";
import masonary16 from "./../../images/pbsImages/img16.JPG";
import masonary17 from "./../../images/pbsImages/img17.JPG";
import masonary18 from "./../../images/pbsImages/img18.JPG";
import masonary19 from "./../../images/pbsImages/img19.JPG";
import masonary20 from "./../../images/pbsImages/img20.JPG";
import masonary21 from "./../../images/pbsImages/img21.JPG";
import masonary22 from "./../../images/pbsImages/img22.JPG";
import masonary23 from "./../../images/pbsImages/img23.JPG";
import masonary24 from "./../../images/pbsImages/img24.JPG";
import masonary25 from "./../../images/pbsImages/img25.JPG";
import masonary26 from "./../../images/pbsImages/img26.JPG";
import masonary27 from "./../../images/pbsImages/img27.JPG";
import masonary28 from "./../../images/pbsImages/img28.jpg";
import masonary29 from "./../../images/pbsImages/img29.jpg";
import masonary30 from './../../images/gallery/pic77.jpg';
import masonary31 from './../../images/gallery/pic88.jpg';
import masonary32 from './../../images/gallery/pic99.jpg';

const galleryBlog = [
  { images: masonary1 },
  { images: masonary2 },
  { images: masonary3 },
  { images: masonary4 },
  { images: masonary5 },
  { images: masonary6 },
  { images: masonary7 },
  { images: masonary8 },
  { images: masonary9 },
  { images: masonary10 },
  { images: masonary11 },
  { images: masonary12 },
  { images: masonary13 },
  { images: masonary14 },
  { images: masonary15 },
  { images: masonary16 },
  { images: masonary17 },
  { images: masonary18 },
  { images: masonary19 },
  { images: masonary20 },
  { images: masonary21 },
  { images: masonary22 },
  { images: masonary23 },
  { images: masonary24 },
  { images: masonary25 },
  { images: masonary26 },
  { images: masonary27 },
  { images: masonary28 },
  { images: masonary29 },
  { images: masonary30 },
  { images: masonary31 },
  { images: masonary32 },
];
// Masonry section
const masonryOptions = {
  transitionDuration: 0,
};
const imagesLoadedOptions = { background: ".my-bg-image-el" };
// Masonry section end

//Light Gallery Icon
const Iconimage = (props) => {
  const { openLightbox } = useLightbox();
  return (
    <Link
      to={"#"}
      onClick={(e) => {
        e.preventDefault();
        openLightbox(props.imageToOpen);
      }}
      className="check-km"
    >
      <i className="fa fa-search icon-bx-xs"></i>
    </Link>
  );
};

class GalleryMasonary extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="page-content">
          <PageTitle motherMenu="Gallery" activeMenu="Gallery" />
          <div className="content-block">
            <div className="section-full content-inner">
              <div className="container">
                <div className="section-head text-center">
                  <h2 className="head-title text-secondry">Gallery</h2>
                </div>
                <SimpleReactLightbox>
                  <SRLWrapper>
                    <div className="clearfix" id="lightgallery">
                      <ul
                        id="masonry"
                        className="dlab-gallery-listing gallery-grid-4 gallery mfp-gallery masonry-gallery"
                      >
                        <Masonry
                          className={"my-gallery-class"}
                          options={masonryOptions}
                          disableImagesLoaded={false}
                          updateOnEachImageLoad={false}
                          imagesLoadedOptions={imagesLoadedOptions} // default {}
                        >
                          {galleryBlog.map((item, index) => (
                            <li
                              className="web design card-container col-lg-4 col-md-6 col-sm-6 "
                              key={index}
                            >
                              <div className="dlab-box frame-box m-b30">
                                <div className="dlab-thum dlab-img-overlay1 ">
                                  <img src={item.images} alt="" />
                                  <div className="overlay-bx">
                                    <div className="overlay-icon">
                                      <Iconimage imageToOpen={index} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </Masonry>
                      </ul>
                    </div>
                  </SRLWrapper>
                </SimpleReactLightbox>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}
export default GalleryMasonary;
