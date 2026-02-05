import React, { Component, useState, useEffect } from 'react';
import Slider from "react-slick";
import grid1 from './../../images/testimonials/pic4.jpg';

const latestBlog = [
  {
    image: grid1,
    name: "Kantharaju",
    desc: "My child has learned a lot within just three months—developing good discipline, a strong understanding of the alphabet, counting, and color identification. She has also become fearless during stage performances and independent in daily activities. All of this credit goes to the wonderful teachers and staff at Paper Bird Shishukul. All the teachers conduct events systematically, which greatly boosts a child’s self-confidence and learning. Activities like painting, dancing, fancy dress, stage shows, decoration, and crafting have played a key role in her overall development. I would like to sincerely thank all the teachers and staff at Paper Bird Shishukul for their efforts, which have resulted in such wonderful progress for my child, Deshani."
  },
  {
    image: grid1,
    name: "Anand Murthy",
    desc: "I’m truly happy that my daughter is a part of Paperbird. It’s a wonderful play school with excellent management, and the teachers are extremely caring. They give special attention to each child, which truly makes a difference. We genuinely appreciate the love, care, and effort the school puts into nurturing the kids. Special thanks to her class teacher Divya ma’am for taking such wonderful care of my daughter."
  },
  {
    image: grid1,
    name: "Praveen S",
    desc: "It's been a wonderful experience for our son at Paperbird Shishukul. From Day 1, the principal Ms. Malini was clear and genuine in her approach to the Montessori system. 7 months later, we can see the compounding benefits. Our son's communication has developed massively along with his social mingling. He enjoys learning, teamwork activities, dancing, singing rhymes and storytelling. Big thanks to all the teachers and support staff for their love, care and support for my son. The big highlights have been programmes and initiatives like grandparents day, fancy dress competition and sports day. Overall, we're really glad that we've made the decision to enroll our son at Paperbird Shishukul and heartily recommend every parent to do so."
  },
  {
    image: grid1,
    name: "Akhila Nandakumar",
    desc: "We feel incredibly grateful to have chosen Paperbird Shishukul as the first step in our daughter’s learning journey. The school radiates warmth, care, and a genuine passion for early childhood development. A special mention to Malini Ma'am, whose leadership and ever-smiling presence make a world of difference. She doesn’t just manage—she truly connects with the children. The teachers are nothing short of amazing—loving, attentive, and wholly dedicated. Progress may not always be visible instantly—but then one day, your child does something thoughtful, sings a rhyme, or expresses themselves in a new way, and you realize how beautifully the school has sown the seeds of growth. Highly recommend Paperbird Shishukul."
  },
  {
    image: grid1,
    name: "Goverdhan Maddi",
    desc: "We started this journey with PaperBird about 6 months back for our daughter who was just above 2 years then. It was really difficult for us for the initial 3 months when our daughter used to cry daily in the morning before going to school. We had thoughts of giving up on the school journey as it may be too early, but Malini mam gave us assurance that the situation would improve. Hats off to the entire team of paperbird for having patience and making our child love school. Now she goes to school happily and comes back to tell us stories about school, teachers, friends. Her vocabulary and social skills have improved drastically. Many Thanks to the paperbird team."
  },
  {
    image: grid1,
    name: "Ancy Peter",
    desc: "When we moved to Bangalore last year, one of our top priorities was finding a preschool and daycare for our children. After visiting a few schools, we were truly impressed with Paper Bird Shishukul, especially after our interaction with Malini Ma'am. We enrolled both our kids, and now in their second year, we can confidently say that it was one of the best decisions we've made. The Montessori program at Paper Bird is well-structured, and we’ve seen a lot of progress in our daughter. The entire team of Paper Bird including the teachers and support staff, is incredibly caring, supportive, and attentive. Our kids are excited to go to school everyday."
  },
  {
    image: grid1,
    name: "Chanda Rani",
    desc: "Choosing Paperbird Shishukul was the best decision for our family. The school is so well-organized, and the staff is genuinely kind and caring. Our child loves going to school every day, and we've been so happy with his emotional and academic growth. Ms. Sapna in Nursery class and Ms. Rukmini in LKG have been patient and creative and were able to connect with our child. Thank you Ms. Malini, for your unwavering dedication. Your hard work and commitment truly make a difference in the lives of our children. The school setting is nurturing, safe, hygienic. The support staff at this school are incredible. They are always so kind and helpful."
  },
  {
    image: grid1,
    name: "Pooja Roy",
    desc: "Paperbird Shishukul has been pivotal for our child Srithik’s overall growth. We had walked into Paperbird about 2 years ago and being first time parents we were very unsure. From the first interaction with Malini ma’am we had a very comfortable feeling. The batch sizes are not very large ensuring that the child gets the due care and personal attention. In our case Lakshmi ma’am was a godsend who spent a huge amount of time with Srithik. The development in our child was visible to us very clearly as he developed into a kid with a lot of confidence and happy attitude. On top of that the support staff play a very crucial role especially in the starting days. Overall it was the best decision for us to enrol our child here."
  },
  {
    image: grid1,
    name: "Aishwarya Rajgopalan",
    desc: "My daughter joined this school in playgroup. At first, she used to cry a lot, but now she is well-settled and happy to go to school every day. Her communication has improved, and she is learning to be more patient. It is easier to pacify her now, and she even tries to rearrange messy things on her own. She is also learning about respect and good behavior. I’m really happy with her progress and thankful to the school and teachers. Special Thanks to all teachers and Caretakers who do their job passionately. The only place where basic needs of the child have been asked and worked based on that."
  },
  {
    image: grid1,
    name: "Ishwarya D",
    desc: "I cannot express enough how grateful I am for Paper Bird School! It has been the perfect place for my son’s early learning journey. The teachers are incredibly caring, patient, and dedicated, making sure each child feels comfortable and encouraged to explore and grow. My son has developed not only academically but also socially and emotionally, thanks to the school’s engaging curriculum and fun learning activities. The communication from the school is excellent—they always keep parents informed. I wholeheartedly recommend Paper Bird School to any parent looking for a warm, enriching, and high-quality early education for their child. It truly is a second home for little learners!"
  }
];

// UPDATED COLOR PALETTE
const CARD_COLORS = [
  "#48af53", // Green
  "#fed84c", // Lemon Yellow
  "#fdb256"  // Light Orange
];

// --- 1. The Popup Modal Component ---
const TestimonialModal = ({ item, color, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!item) return null;

  return (
    <div className="tm-overlay" onClick={onClose}>
      <div 
        className="tm-modal" 
        onClick={(e) => e.stopPropagation()}
        style={{ borderTopColor: color }} 
      >
        <button className="tm-close-btn" onClick={onClose}>&times;</button>
        
        <div className="tm-modal-content">
          <div className="tm-header">
             <h3 className="tm-name" style={{ color: color }}>{item.name}</h3>
             <span className="tm-role">Parent</span>
          </div>
          <div className="tm-body">
            <p className="tm-full-desc">{item.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- 2. The Slider Item Component ---
const TestimonialItem = ({ item, color, onReadMore }) => {
  const limit = 120;
  const isLongText = item.desc.length > limit;
  const textToDisplay = isLongText ? item.desc.substring(0, limit) + "..." : item.desc;

  return (
    <div className="item-wrapper" style={{ padding: '10px' }}>
      <div 
        className="client-box-card"
        style={{ 
          border: `2px solid ${color}`, // FULL COLORED BORDER
          boxShadow: `0 4px 15px ${color}20` // Subtle colored shadow
        }} 
      >
        <div className="testimonial-text">
          <p>
            {textToDisplay}
            {isLongText && (
              <span 
                onClick={() => onReadMore(item, color)} 
                className="tm-read-more"
                style={{ color: color }}
              >
                Read More
              </span>
            )}
          </p>
          <div className="tm-divider"></div>
          <h5 className="testimonial-name m-t0 m-b5" style={{ color: color }}>
            {item.name}
          </h5>
          <span>Parent</span>
        </div>
      </div>
    </div>
  );
};

// --- 3. Main Class Component ---
class TestiMonialSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTestimonial: null,
      activeColor: "#48af53"
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  
  handleOpenModal(item, color) {
    this.setState({ activeTestimonial: item, activeColor: color });
  }

  handleCloseModal() {
    this.setState({ activeTestimonial: null });
  }

  render() {
    var settings = {
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 6000,
      pauseOnHover: true,
      responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 3 } },
        { breakpoint: 991, settings: { slidesToShow: 2 } },
        { breakpoint: 576, settings: { slidesToShow: 1 } }
      ]
    };

    const styles = `
      /* --- Modal Styles --- */
      .tm-overlay {
        position: fixed; top: 0; left: 0; right: 0; bottom: 0;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 999999;
        display: flex; align-items: center; justify-content: center;
        animation: fadeIn 0.3s ease;
        padding: 20px;
        backdrop-filter: blur(3px);
      }
      .tm-modal {
        background: white; width: 100%; max-width: 600px;
        border-radius: 15px; position: relative;
        box-shadow: 0 20px 50px rgba(0,0,0,0.3);
        animation: slideUp 0.3s ease;
        border-top: 5px solid #48af53; /* Fallback */
        overflow: hidden;
      }
      .tm-close-btn {
        position: absolute; top: 10px; right: 15px;
        background: none; border: none; font-size: 32px;
        color: #888; cursor: pointer; line-height: 1;
        transition: color 0.2s; z-index: 10;
      }
      .tm-close-btn:hover { color: #333; }
      .tm-modal-content { padding: 30px; max-height: 80vh; overflow-y: auto; }
      .tm-header { text-align: center; margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid #eee; }
      .tm-name { font-size: 24px; margin: 0 0 5px 0; font-weight: 700; }
      .tm-role { color: #888; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; }
      .tm-full-desc { color: #555; font-size: 16px; line-height: 1.8; text-align: justify; }

      /* --- Card Styles --- */
      .client-box-card {
        background: #fff;
        padding: 25px;
        border-radius: 15px;
        /* Default Styles overridden by inline styles for border */
        height: 100%;
        min-height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      .client-box-card:hover {
        transform: translateY(-5px);
        /* Shadow on hover handled by inline style for color matching, or generic below */
        box-shadow: 0 15px 35px rgba(0,0,0, 0.15) !important; 
      }
      .tm-divider { height: 2px; width: 50px; background: #f0f0f0; margin: 15px 0; }
      .tm-read-more { cursor: pointer; font-weight: 700; margin-left: 8px; font-size: 14px; text-decoration: underline; }

      /* --- Navigation Arrows --- */
      .sprite-nav { position: relative; padding: 0 40px; }
      
      .custom-nav-arrows {
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        transform: translateY(-50%);
        pointer-events: none;
        z-index: 10;
        display: flex;
        justify-content: space-between;
        width: 100%;
      }

      .arrow-wrapper {
        pointer-events: auto;
        cursor: pointer;
      }

      @media (max-width: 768px) {
        .custom-nav-arrows { display: none; }
        .sprite-nav { padding: 0; }
      }
      
      @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
    `;

    return (
      <>
        <style>{styles}</style>

        {/* Modal */}
        {this.state.activeTestimonial && (
          <TestimonialModal 
            item={this.state.activeTestimonial} 
            color={this.state.activeColor}
            onClose={this.handleCloseModal} 
          />
        )}

        <div className="sprite-nav">
          
          <div className="custom-nav-arrows owl-nav">
            <div className="arrow-wrapper" onClick={this.previous}>
               <div className="owl-prev"/>
            </div>
            <div className="arrow-wrapper" onClick={this.next}>
               <div className="owl-next"/>
            </div>
          </div>

          <Slider 
            className="client-carousel owl-carousel owl-theme" 
            ref={c => (this.slider = c)} 
            {...settings}
          >
            {latestBlog.map((item, index) => {
              // Cycle colors
              const color = CARD_COLORS[index % CARD_COLORS.length];
              
              return (
                <TestimonialItem 
                  item={item} 
                  color={color}
                  key={index} 
                  onReadMore={this.handleOpenModal} 
                />
              );
            })}
          </Slider>
        </div>
      </>
    )
  }
}

export default TestiMonialSlider;