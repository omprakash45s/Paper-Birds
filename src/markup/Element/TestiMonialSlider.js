import React,{Component} from 'react';
import Slider from "react-slick";
import grid1 from './../../images/testimonials/pic4.jpg';


const latestBlog = [
	{ 
		image: grid1,
		name:"Swetha Suresh",
		desc:"The best school. U can blindly trust teachers in paper Bird.. they care a lot. My daughter Dhaksha learnt a lot, can see the changes in the way of talking to us, and a well disciplined school.  My daughters favourite class teacher Lakshmi mam. She is so sweet to the childrens. And special thanks to Malini mam, well maintained always smile on your face.. And all in all Shalini mam is so sweet, and all the part of school.",
	 },
	 { 
		image: grid1,
		name:"Lavanya M",
		desc:"A Good school will have Passionate, honest, inspired, skilled and supportive mentor who will have a strong positive impact on the students development. I would like to thank every mentor,staffs and Administrators  for all the hardwork and dedication, I am so grateful and Happy that my daughter is a part of Paper Bird.",
	 },
	 { 
		image: grid1,
		name:"Swetha Kannan",
		desc:"I am very happy that my son part of this school. I just decided to put him in this school as nearby. I am very happy about my decision. He is enjoying the class and learning new things. Mrs Malini and the team is friendly, helping nature, positive are really helping parents to stay happy and cool. Thanks team for the wonderful work.",
	 },
	 { 
		image: grid1,
		name:"Sheela Govindharaj",
		desc:"Dear Paper Bird Team, I would like to thank the entire team of Paper Bird including the caretakers in the day care.You all do amazing at what you do! Your passion and dedication towards an individual child are beyond words! “With your team guidance my son has developed into a confident, discipline and capable child. Thank you for being such an important part in my child's development. I am so grateful to have you as my child's teacher/care taker.",
	 },
	 { 
		image: grid1,
		name:"INDU PRIYA",
		desc:"Laya misses Laxmi Mam n Tessy Mam a lot....there is no day she goes to sleep without speaking about Paperbird n her teachers.......kudos to the team you all are amazing n rocking who shaped the kids future.....she is doing very good work at GCIS. Paperbird was the best choice we made....🤩🤩",
	 },
]
class TestiMonialSlider extends Component{	
	constructor(props) {
		super(props);
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
	}
	next() {
		this.slider.slickNext();
	}
	previous() {
		this.slider.slickPrev();
	}
	render(){
		var settings = {		
			arrows: false,
            slidesToShow: 1,			
            infinite: true,
			autoplay: true,
			responsive: [
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 1,
				  }
				},
				{
				  breakpoint: 991,
				  settings: {
					slidesToShow: 1,
				  }
				},
				{
				  breakpoint: 576,
				  settings: {
					slidesToShow: 1,
				  }
				}
			]
        };
		return(
			<>	
				<div className="sprite-nav">
					<Slider className="client-carousel owl-carousel owl-theme  " ref={c => (this.slider = c)} {...settings}>
						{latestBlog.map((item, index) => (
							<div className="item" key={index}>
								<div className="client-box">
									{/* <div className="testimonial-detail clearfix">
										<div className="testimonial-pic radius">
											<img src={item.image} width="100" height="100" alt="" />
										</div>
										<h5 className="testimonial-name m-t0 m-b5" style={{color:"#48af53"}}>{item.name}</h5> 
										<span>Parent</span> 
									</div> */}
									<div className="testimonial-text">
										<p>{item.desc}</p>
										<h5 className="testimonial-name m-t0 m-b5" style={{color:"#48af53"}}>{item.name}</h5> 
										<span>Parent</span> 
									</div>
								</div>	
							</div>
						))}	
					</Slider>		
					<div className="owl-nav" style={{ textAlign: "center" }}>
						<div className=" owl-prev " onClick={this.previous}/>
						<div className="owl-next " onClick={this.next}/>
					</div>
				</div>	
			</>	
		)
	}
}
export default TestiMonialSlider;