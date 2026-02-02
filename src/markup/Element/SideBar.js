import React,{Fragment, Component} from 'react';
import {Link} from 'react-router-dom';
import {LightGallery} from '../Pages/ClassesDetail';

import recent1 from './../../images/blog/recent-blog/pic1.jpg';
import recent2 from './../../images/blog/recent-blog/pic2.jpg';

const btnBlog = [
	{title:'Design'},{title:'User interface'},{title:'SEO'},{title:'WordPress'},{title:'Development'},{title:'Joomla'},
	{title:'Design'},{title:'User interface'},{title:'SEO'},{title:'WordPress'},{title:'Development'},{title:'Joomla'},
	{title:'Design'},{title:'User interface'},{title:'SEO'},{title:'WordPress'},{title:'Development'},{title:'Joomla'},
];
class SideBar extends Component{
	render(){
		return(
			<Fragment>
				<div className="sticky-top">
					<div className="widget">
						<h5 className="widget-title">Search</h5>
						<div className="search-bx style-1">
							<form role="search" method="post">
								<div className="input-group">
									<input name="text" className="form-control" placeholder="Enter your keywords..." type="text" />
									<span className="input-group-btn">
										<button type="submit" className="fa fa-search text-primary"></button>
									</span> 
								</div>
							</form>
						</div>
					</div>
					<div className="widget recent-posts-entry">
						<h5 className="widget-title">Recent Posts</h5>
						<div className="widget-post-bx">
							<div className="widget-post clearfix">
								<div className="dlab-post-media"> <img src={recent1} width="200" height="143" alt="" /> </div>
								<div className="dlab-post-info">
									<div className="dlab-post-header">
										<h6 className="post-title"><Link to={"#"}>Reasons Why You Cannot Learn Kids Education Well.</Link></h6>
									</div>
									<div className="dlab-post-meta">
										<ul>
											<li className="post-author">By Jone</li>
											<li className="post-comment"><i className="fa fa-comments"></i> 28</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="widget-post clearfix">
								<div className="dlab-post-media"> <img src={recent2} width="200" height="143" alt="" /> </div>
								<div className="dlab-post-info">
									<div className="dlab-post-header">
										<h6 className="post-title"><Link to={"#"}>Small But Important Things To Observe In Kids.</Link></h6>
									</div>
									<div className="dlab-post-meta">
										<ul>
											<li className="post-author">By Jone</li>
											<li className="post-comment"><i className="fa fa-comments"></i> 28</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="widget widget_gallery gallery-grid-4">
						<h5 className="widget-title">Our services</h5>
						<ul id="lightgallery">
							<LightGallery />
						</ul>
					</div>
					<div className="widget widget_tag_cloud">
						<h5 className="widget-title">Tags</h5>
						<div className="tagcloud"> 
							{btnBlog.map((item,index)=>(
								<Link to={"#"} className="mr-1" key={index}>{item.title}</Link> 
							))}
						</div>
					</div>
					<div className="widget widget_archive">
						<h5 className="widget-title">Categories List</h5>
						<ul>
							<li><Link to={"#"}>aciform</Link></li>
							<li><Link to={"#"}>championship</Link></li>
							<li><Link to={"#"}>chastening</Link></li>
							<li><Link to={"#"}>clerkship</Link></li>
							<li><Link to={"#"}>disinclination</Link></li>
						</ul>
					</div>
				</div>
			</Fragment>
		)
	}
}
export default SideBar;