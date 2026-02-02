import React, { Component } from "react";
import { Link } from "react-router-dom";

// Import images
import maliniDP from "./../../images/malini.jpg";
import post1 from "./../../images/gallery/img5.jpg";
import post2 from "./../../images/gallery/img7.jpg";
import post3 from "./../../images/gallery/img9.jpg";
import post4 from "./../../images/gallery/img15.JPG";

const instagramPosts = [
  {
    id: 1,
    image: post1,
    likes: 245,
    caption: "paperbirdmalini Exploring creative learning at Paper Bird Shishukul 🎨✨ #CreativeKids #MontessoriEducation #PaperBirdShishukul",
    timeAgo: "2 DAYS AGO"
  },
  {
    id: 2,
    image: post2,
    likes: 189,
    caption: "paperbirdmalini Art and creativity session with our little artists 🎨 #KidsArt #CreativeLearning #EarlyChildhood",
    timeAgo: "5 DAYS AGO"
  },
  {
    id: 3,
    image: post3,
    likes: 312,
    caption: "paperbirdmalini Custom curriculum development - Making learning fun! 📚🌟 #Education #Learning #Montessori",
    timeAgo: "1 WEEK AGO"
  },
  {
    id: 4,
    image: post4,
    likes: 276,
    caption: "paperbirdmalini Safety first! Ensuring a secure environment for our kids 🛡️ #SafetyFirst #ChildSafety #SecureEnvironment",
    timeAgo: "2 WEEKS AGO"
  }
];

class InstagramFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likedPosts: {} // Track which posts are liked
    };
  }

  handleLikeClick = (postId, e) => {
    e.preventDefault();
    this.setState(prevState => ({
      likedPosts: {
        ...prevState.likedPosts,
        [postId]: !prevState.likedPosts[postId]
      }
    }));
    
    // Still redirect to Instagram after a short delay
    setTimeout(() => {
      window.open("https://www.instagram.com/paperbirdmalini/?igsh=MXYzbTMwemljZDM5ZQ%3D%3D#", "_blank");
    }, 300);
  }

  render() {
    return (
      <div className="section-full bg-white content-inner">
        <div className="container">
          {/* Instagram Header */}
          <div className="section-head text-center m-b50">
            <h2 className="head-title text-secondry" style={{ color: "#48af53" }}>
              Follow Us on Instagram
            </h2>
            <p>Stay connected with our daily activities and updates</p>
          </div>

          {/* Instagram Profile Header */}
          <div className="instagram-profile-header m-b40">
            <div className="row align-items-center">
              <div className="col-lg-2 col-md-3 col-sm-12 text-center m-b20">
                <div className="profile-pic" style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  background: "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
                  padding: "3px",
                  margin: "0 auto"
                }}>
                  <img 
                    src={maliniDP} 
                    alt="Malini - Paper Bird Shishukul" 
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      objectFit: "cover"
                    }}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 m-b20">
                <h4 style={{ color: "#48af53", marginBottom: "5px" }}>paperbirdmalini</h4>
                <p style={{ fontSize: "14px", color: "#262626", marginBottom: "10px", fontWeight: "600" }}>
                  Malini | Montessori Preschool | Bangalore
                </p>
                <div className="instagram-stats" style={{ display: "flex", gap: "20px", fontSize: "14px", color: "#666" }}>
                  <span><strong>173</strong> posts</span>
                  <span><strong>239</strong> followers</span>
                  <span><strong>128</strong> following</span>
                </div>
              </div>
              <div className="col-lg-4 col-md-3 col-sm-12 text-center m-b20">
                <a 
                  href="https://www.instagram.com/paperbirdmalini/?igsh=MXYzbTMwemljZDM5ZQ%3D%3D#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-md radius-xl"
                  style={{ backgroundColor: "#E4405F", borderColor: "#E4405F" }}
                >
                  Follow
                </a>
              </div>
            </div>
          </div>

          {/* Instagram Posts Grid */}
          <div className="instagram-posts-grid">
            <div className="row">
              {instagramPosts.map((post, index) => (
                <div className="col-lg-3 col-md-6 col-sm-6 m-b30" key={index}>
                  <div className="instagram-post-card" style={{
                    backgroundColor: "white",
                    borderRadius: "12px",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
                    overflow: "hidden",
                    border: "1px solid #e1e8ed"
                  }}>
                    {/* Post Header */}
                    <div className="post-header" style={{
                      padding: "12px 16px",
                      display: "flex",
                      alignItems: "center",
                      borderBottom: "1px solid #e1e8ed"
                    }}>
                      <a 
                        href="https://www.instagram.com/paperbirdmalini/?igsh=MXYzbTMwemljZDM5ZQ%3D%3D#" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "#262626" }}
                      >
                        <div style={{
                          width: "32px",
                          height: "32px",
                          borderRadius: "50%",
                          background: "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
                          padding: "2px",
                          marginRight: "10px"
                        }}>
                          <img 
                            src={maliniDP} 
                            alt="Malini" 
                            style={{
                              width: "100%",
                              height: "100%",
                              borderRadius: "50%",
                              objectFit: "cover"
                            }}
                          />
                        </div>
                        <span style={{ fontSize: "14px", fontWeight: "600", color: "#262626", cursor: "pointer" }}>
                          paperbirdmalini
                        </span>
                      </a>
                    </div>

                    {/* Post Image */}
                    <div className="post-image" style={{ position: "relative" }}>
                      <a 
                        href="https://www.instagram.com/paperbirdmalini/?igsh=MXYzbTMwemljZDM5ZQ%3D%3D#" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ display: "block" }}
                      >
                        <img 
                          src={post.image} 
                          alt="Instagram post" 
                          style={{ 
                            width: "100%", 
                            height: "250px", 
                            objectFit: "cover",
                            cursor: "pointer"
                          }} 
                        />
                      </a>
                    </div>

                    {/* Post Actions */}
                    <div className="post-actions" style={{
                      padding: "12px 16px 8px",
                      display: "flex",
                      alignItems: "center",
                      gap: "16px"
                    }}>
                      <div 
                        onClick={(e) => this.handleLikeClick(post.id, e)}
                        style={{ cursor: "pointer" }}
                      >
                        <i 
                          className={this.state.likedPosts[post.id] ? "fa fa-heart" : "fa fa-heart-o"} 
                          style={{ 
                            fontSize: "24px", 
                            color: this.state.likedPosts[post.id] ? "#ed4956" : "#262626",
                            cursor: "pointer",
                            transition: "color 0.2s ease"
                          }}
                          onMouseEnter={(e) => {
                            if (!this.state.likedPosts[post.id]) {
                              e.target.style.color = "#ed4956";
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (!this.state.likedPosts[post.id]) {
                              e.target.style.color = "#262626";
                            }
                          }}
                        ></i>
                      </div>
                      <a 
                        href="https://www.instagram.com/paperbirdmalini/?igsh=MXYzbTMwemljZDM5ZQ%3D%3D#" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-comment-o" style={{ fontSize: "24px", color: "#262626", cursor: "pointer" }}></i>
                      </a>
                      <a 
                        href="https://www.instagram.com/paperbirdmalini/?igsh=MXYzbTMwemljZDM5ZQ%3D%3D#" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-paper-plane-o" style={{ fontSize: "24px", color: "#262626", cursor: "pointer" }}></i>
                      </a>
                    </div>

                    {/* Post Likes */}
                    <div className="post-likes" style={{ padding: "0 16px 8px" }}>
                      <a 
                        href="https://www.instagram.com/paperbirdmalini/?igsh=MXYzbTMwemljZDM5ZQ%3D%3D#" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none", color: "#262626" }}
                      >
                        <span style={{ fontSize: "14px", fontWeight: "600", color: "#262626", cursor: "pointer" }}>
                          {this.state.likedPosts[post.id] ? post.likes + 1 : post.likes} likes
                        </span>
                      </a>
                    </div>

                    {/* Post Caption */}
                    <div className="post-caption" style={{ padding: "0 16px 12px" }}>
                      <a 
                        href="https://www.instagram.com/paperbirdmalini/?igsh=MXYzbTMwemljZDM5ZQ%3D%3D#" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none", color: "#262626" }}
                      >
                        <p style={{ 
                          fontSize: "14px", 
                          color: "#262626", 
                          margin: "0",
                          lineHeight: "1.4",
                          cursor: "pointer"
                        }}>
                          <span style={{ fontWeight: "600" }}>paperbirdmalini</span>{" "}
                          {post.caption.replace("paperbirdmalini ", "")}
                        </p>
                        <p style={{ 
                          fontSize: "12px", 
                          color: "#8e8e8e", 
                          margin: "8px 0 0",
                          textTransform: "uppercase"
                        }}>
                          {post.timeAgo}
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* View More Button */}
          <div className="text-center m-t40">
            <a 
              href="https://www.instagram.com/paperbirdmalini/?igsh=MXYzbTMwemljZDM5ZQ%3D%3D#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-lg radius-xl"
              style={{ 
                backgroundColor: "#E4405F", 
                color: "white", 
                padding: "15px 40px",
                borderColor: "#E4405F"
              }}
            >
              <i className="fa fa-instagram m-r10"></i>
              View More on Instagram
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default InstagramFeed;