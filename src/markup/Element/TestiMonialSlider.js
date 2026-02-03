import React,{Component} from 'react';
import Slider from "react-slick";
import grid1 from './../../images/testimonials/pic4.jpg';


const latestBlog = [
  {
    image: grid1,
    name: "Swetha Suresh",
    desc: "The best school. You can blindly trust the teachers at Paper Bird—they truly care for every child. My daughter Dhaksha has learnt so much and become more disciplined and confident. Special thanks to Lakshmi ma’am, Malini ma’am and the entire team for their constant support and warmth."
  },
  {
    image: grid1,
    name: "Lavanya M",
    desc: "A good school needs passionate and supportive mentors, and Paper Bird has exactly that. The teachers and staff put genuine effort into every child’s growth. I’m extremely happy and grateful that my daughter is part of this wonderful school."
  },
  {
    image: grid1,
    name: "Swetha Kannan",
    desc: "We chose Paper Bird because it was nearby, but it turned out to be the best decision. My son enjoys class and learns something new every day. The teachers and management are friendly, positive and very supportive to parents."
  },
  {
    image: grid1,
    name: "Sheela Govindharaj",
    desc: "The love, care and dedication shown by the entire Paper Bird team is beyond words. My son has grown into a confident and disciplined child. Thank you for being such an important part of his early learning journey."
  },
  {
    image: grid1,
    name: "Indu Priya",
    desc: "My daughter still talks about her teachers every day and misses them a lot. Paper Bird shaped her foundation beautifully and prepared her so well for the next stage. Truly the best choice we made for her education."
  },

  /* ===== NEW TESTIMONIALS ===== */

  {
    image: grid1,
    name: "Kantharaju",
    desc: "Within just three months, my child developed discipline, confidence, and strong basics like alphabets, counting and colors. The events and activities boosted her stage courage too. Thanks to all the teachers and staff for their amazing efforts."
  },
  {
    image: grid1,
    name: "Anand Murthy",
    desc: "I’m truly happy that my daughter is part of Paper Bird. The management is excellent and the teachers give personal attention to every child. Special thanks to Divya ma’am for taking such wonderful care of her."
  },
  {
    image: grid1,
    name: "Praveen S",
    desc: "From day one, we trusted the Montessori approach here. In just a few months, our son’s communication and social skills improved massively. The programs and activities make learning fun and meaningful. Highly recommended to every parent."
  },
  {
    image: grid1,
    name: "Akhila Nandakumar",
    desc: "Paper Bird feels warm, caring and truly child-focused. Malini ma’am and the teachers understand every child’s unique needs and give personal support. We feel grateful watching our daughter grow happily and confidently here."
  },
  {
    image: grid1,
    name: "Goverdhan Maddi",
    desc: "The initial days were tough as our daughter cried daily, but the team patiently supported us. Today she happily goes to school and shares stories every evening. Her vocabulary and social skills have improved tremendously."
  },
  {
    image: grid1,
    name: "Ancy Peter",
    desc: "After moving to Bengaluru, choosing Paper Bird was our best decision. The Montessori program is well-structured and the teachers are incredibly caring and attentive. Our kids love going to school every day."
  },
  {
    image: grid1,
    name: "Chanda Rani",
    desc: "The school is well-organized, safe and nurturing. The teachers are patient, kind and creative, helping our child grow emotionally and academically. We truly appreciate Malini ma’am and the entire support staff."
  },
  {
    image: grid1,
    name: "Pooja Roy",
    desc: "Being first-time parents, we were unsure at first, but Paper Bird gave us complete confidence. Small class sizes and personal care helped our child grow into a happy and confident kid. The teachers genuinely care for every child."
  },
  {
    image: grid1,
    name: "Aishwarya Rajgopalan",
    desc: "My daughter joined playgroup crying every day, but now she happily goes to school. Her communication, patience and behavior have improved so much. Thanks to all the teachers and caretakers for their dedication."
  },
  {
    image: grid1,
    name: "Ishwarya D",
    desc: "Paper Bird has been the perfect place for my son’s early learning journey. The teachers are caring and encouraging, and the activities are fun and engaging. It truly feels like a second home for little learners."
  }
];

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