import React,{Fragment, Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import PageTitle from '../Layout/PageTitle';
import SideBar from '../Element/SideBar';
import ClassDetailContent from '../Element/ClassDetailContent';

//images
import test1 from './../../images/testimonials/pic1.jpg';
import test2 from './../../images/testimonials/pic2.jpg';
import test3 from './../../images/testimonials/pic3.jpg';

const CommentBlog=({imageBlog})=>{
	return(
		<>
			<div className="comment-body">
				<div className="comment-author vcard"> <img className="avatar photo" src={imageBlog} alt="" /> 
					<cite className="fn">Stacy poe</cite> <span className="says">says:</span> 
				</div>
				<div className="comment-meta"> <Link to={"#"}>October 6, 2015 at 7:15 am</Link> </div>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neqnsectetur adipiscing elit. Nam viae neqnsectetur adipiscing elit.
					Nam vitae neque vitae sapien malesuada aliquet. </p>
				<div className="reply"> <Link to={"#"} className="comment-reply-link">Reply</Link> </div>
			</div>	
		</>	
	)
} 
class BlogDetails extends Component{
	render(){
		return(
			<Fragment>
				<Header />
				<div className="page-content">
					<PageTitle  motherMenu="Blog Details"  activeMenu="Blog Details" />
					<div className="content-block">
					<div className="section-full bg-white content-inner">
						<div className="container">
							<div className="row">
								<div className="col-lg-8 col-md-12 col-sm-12">
									{/* Classes Detail  */}
										<ClassDetailContent />
									{/* Classes Detail ENd */}
									
									<div className="clear" id="comment-list">
										<div className="comments-area" id="comments">
											<h2 className="comments-title">8 Comments</h2>
											<div className="clearfix m-b20">
												{/* comment list    */}
												<ol className="comment-list">
													<li className="comment">
														<CommentBlog imageBlog={test1}  />
														<ol className="children">
															<li className="comment odd parent">
																<CommentBlog imageBlog={test2}  />
																<ol className="children">
																	<li className="comment odd parent">
																		<CommentBlog imageBlog={test3}  />
																	</li>
																</ol>
																{/*  list END  */}
															</li>
														</ol>
														{/*  list END  */}
													</li>
													<li className="comment">
														<CommentBlog imageBlog={test1}  />
													</li>
													<li className="comment">
														<CommentBlog imageBlog={test2}  />
													</li>
													<li className="comment">
														<CommentBlog imageBlog={test3}  />
													</li>
												</ol>
												{/*  comment list END */}
												{/*  Form  */}
												<div className="comment-respond" id="respond">
													<h4 className="comment-reply-title" id="reply-title">Leave a Reply <small> <Link style={{display:"none"}} to={"#"} id="cancel-comment-reply-link" rel="nofollow">Cancel reply</Link> </small> </h4>
													<form className="comment-form" id="commentform" method="post" action="http://sedatelab.com/developer/donate/wp-comments-post.php">
														<p className="comment-form-author">
															<label for="author">Name <span className="required">*</span></label>
															<input type="text" value="" name="Author" placeholder="Author" id="author" />
														</p>
														<p className="comment-form-email">
															<label for="email">Email <span className="required">*</span></label>
															<input type="text" value="" placeholder="Email" name="Email" id="email" />
														</p>
														<p className="comment-form-url">
															<label for="url">Website</label>
															<input type="text" value="" placeholder="Website" name="Website" id="url" />
														</p>
														<p className="comment-form-comment">
															<label for="comment">Comment</label>
															<textarea rows="8" name="comment" placeholder="Comment" id="comment"></textarea>
														</p>
														<p className="form-submit">
															<input type="submit" value="Post Comment" className="btn btn-lg radius-xl" id="submit" name="submit" />
														</p>
													</form>
												</div>
												{/*  Form  */}
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-12 col-sm-12">
									<SideBar />
								</div>
							</div>
						</div>
					</div>
					</div>
				</div>		
				<Footer />
			</Fragment>
		)
	}
}
export default BlogDetails;