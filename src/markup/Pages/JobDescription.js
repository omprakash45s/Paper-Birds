import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import PageTitle from "../Layout/PageTitle";
import SEO from "../../components/SEO";
import { JobPostingSchema, BreadcrumbSchema } from "../../components/StructuredData";

// Images
import bnr1 from "./../../images/line2.png";

const jobDescriptions = {
  "montessori-teacher-fresher": {
    title: "Montessori Teacher (Fresher)",
    content: {
      about: "Paper Bird Shishukul, was established in 2017 under the visionary leadership of Mrs. Malini Selvarajan. It is a cherished institution that has been nurturing young minds with care, creativity, and innovation in the heart of Bengaluru. Under the guidance of a dedicated team of educators and staff, committed to imparting a comprehensive education that focuses not only on academic excellence but on the development of creative and social skills. As we grow, we are looking for Montessori-certified fresher teachers who are motivated, compassionate, and excited to begin their teaching journey in a child-centered environment. This role is ideal for newly certified Montessori educators who want guided exposure to classrooms, hands-on teaching, and professional growth.",
      website: "https://paperbirdshishukul.com/",
      location: "Bengaluru",
      reportsTo: "Founder & Director - Malini Ma'am",
      employmentType: "Full-time",
      startDate: "January 2026",
      purpose: "We are looking for Montessori-certified fresher teachers who are passionate about early childhood education and eager to begin their teaching career in a nurturing, child-centric environment. The ideal candidate will have strong communication skills, a warm personality, and the willingness to learn and grow with the school.",
      responsibilities: [
        {
          title: "Classroom Facilitation & Montessori Implementation",
          items: [
            "Support senior teachers in delivering Montessori lessons and activities.",
            "Prepare and maintain Montessori materials and the classroom environment.",
            "Assist children with hands-on activities, sensorial work, language development, and practical life tasks.",
            "Ensure classrooms remain clean, organised, and child-friendly at all times."
          ]
        },
        {
          title: "Child Observation & Support",
          items: [
            "Observe children to understand their interests, pace, and developmental needs.",
            "Record daily observations and report them to senior teachers.",
            "Assist in tracking developmental milestones and learning progress."
          ]
        },
        {
          title: "Child Safety & Care",
          items: [
            "Ensure child safety protocols are followed at all times.",
            "Supervise children during indoor and outdoor activities.",
            "Support transitions (arrival, snacks, nap time, dispersal)."
          ]
        },
        {
          title: "Communication & Parent Engagement",
          items: [
            "Share daily updates with parents (through the school's communication system, when required).",
            "Maintain professionalism and warm communication at all touchpoints.",
            "Participate in parent–teacher meetings under the guidance of senior teachers."
          ]
        },
        {
          title: "Daycare Support Responsibilities",
          items: [
            "Engage with toddlers and preschoolers during daycare hours.",
            "Facilitate age-appropriate activities, stories, free play and snack routines.",
            "Monitor children's well-being and report any concerns."
          ]
        },
        {
          title: "School Culture & Professional Behaviour",
          items: [
            "Uphold Montessori values: respect, independence, empathy, and peaceful communication.",
            "Participate in staff meetings, trainings, and school events.",
            "Follow school policies on attendance, dress code, and conduct."
          ]
        }
      ],
      candidateProfile: [
        "Mandatory: Montessori Certification (IMTC / IMI / AMS / equivalent).",
        "Strong passion for early childhood education.",
        "Kind, patient, observant and emotionally intelligent.",
        "Good command of English."
      ]
    }
  },
  "montessori-teacher-experienced": {
    title: "Montessori Teacher (Experienced)",
    content: {
      about: "Paper Bird Shishukul, was established in 2017 under the visionary leadership of Mrs. Malini Selvarajan. It is a cherished institution that has been nurturing young minds with care, creativity, and innovation in the heart of Bengaluru. Under the guidance of a dedicated team of educators and staff, committed to imparting a comprehensive education that focuses not only on academic excellence but on the development of creative and social skills. As we grow, we are seeking experienced Montessori teachers (2–3 years) who can independently manage a Montessori environment and contribute to the school's culture of excellence and care.",
      website: "https://paperbirdshishukul.com/",
      location: "Bengaluru",
      reportsTo: "Founder & Director - Malini Ma'am",
      employmentType: "Full-time",
      startDate: "January 2026",
      roleDescription: "The Experienced Montessori Teacher at Paper Bird Shishukul plays a pivotal role in shaping the early learning journey of children through a blend of authentic Montessori pedagogy, thoughtful observation, and emotionally attuned classroom leadership. This role demands not just technical mastery of Montessori materials but also a deep understanding of how to create a warm, respectful, developmentally appropriate learning environment where each child's individuality is honoured.\n\nAs an experienced educator, you will be responsible for independently leading a mixed-age Montessori environment, designing personalised learning plans, and guiding children toward independence, concentration, order, and joyful discovery. You will also serve as a mentor and role model for junior teachers and assistants, ensuring the classroom reflects the values of calmness, respect, inclusion, and purposeful activity.\n\nYou will take responsibility for the complete learning cycle—from preparing the environment, presenting lessons, and observing developmental needs, to communicating effectively with parents and ensuring accurate documentation of progress. This includes supporting children not only academically, but also emotionally, socially, and behaviourally through positive guidance and Montessori grace & courtesy practices.\n\nThe ideal candidate brings not only experience but also the maturity, presence, and emotional intelligence to: handle sensitive parent conversations, manage classroom challenges with calm authority, gently guide assistants, and uphold the integrity of the Montessori Method in every interaction.\n\nThis is a leadership-oriented classroom role that directly contributes to maintaining the high standards, stability, and warmth that Paper Bird Shishukul has been known for since 2017. You will play an essential part in shaping a lifelong love of learning in every child who walks into our environment.",
      purpose: "We are seeking experienced Montessori teachers (2–3 years) who can independently manage a Montessori environment and contribute to the school's culture of excellence and care.",
      responsibilities: [
        {
          title: "Montessori Lesson Planning & Delivery",
          items: [
            "Prepare and deliver Montessori lessons for mixed-age groups.",
            "Maintain the prepared environment with high fidelity to Montessori principles.",
            "Present materials, observe children, and create personalised learning plans.",
            "Rotate materials and activities based on developmental needs."
          ]
        },
        {
          title: "Classroom Management & Leadership",
          items: [
            "Lead a group of children independently.",
            "Manage transitions, routines, and group dynamics smoothly.",
            "Mentor assistant teachers and support staff in classroom processes.",
            "Ensure the classroom is orderly, structured, and calm."
          ]
        },
        {
          title: "Child Observation, Documentation & Assessment",
          items: [
            "Conduct continuous observations to track progress.",
            "Maintain detailed records of each child's developmental journey.",
            "Identify learning gaps and plan remedial or extension activities.",
            "Prepare reports for parent–teacher meetings."
          ]
        },
        {
          title: "Parent Communication & Engagement",
          items: [
            "Conduct parent–teacher meetings confidently.",
            "Support parents with home-based Montessori guidance when needed.",
            "Handle sensitive parent conversations with maturity and clarity."
          ]
        },
        {
          title: "Contribution to School Culture",
          items: [
            "Participate in teacher training, curriculum meetings, events and celebrations.",
            "Uphold Montessori values and model calm, respectful interactions.",
            "Support the school in events, workshops, and admission showcases."
          ]
        }
      ],
      candidateProfile: {
        essential: [
          "Montessori Certification (IMTC / IMI / AMS / equivalent) – Mandatory.",
          "2–3 years classroom experience in a Montessori environment.",
          "Confident in presenting materials and managing mixed-age groups.",
          "Strong English communication skills (spoken & written).",
          "Ability to handle parent communication with maturity.",
          "Ability to mentor assistants/juniors."
        ],
        desirable: [
          "Exposure to child psychology or early childhood development.",
          "Ability to assist with admissions events, workshops or parent orientations."
        ],
        attributes: [
          "High emotional intelligence and calm leadership.",
          "Strong observation and documentation skills.",
          "Warm, approachable and professional demeanour.",
          "Commitment to Montessori integrity and philosophy."
        ]
      },
      whatThisRoleOffers: [
        "Autonomy in leading your own Montessori classroom.",
        "Opportunities to mentor junior teachers.",
        "A collaborative, supportive and child-centered workplace.",
        "Professional development opportunities (trainings, workshops).",
        "Stable working hours aligned with preschool/daycare rhythms."
      ],
      applicationProcess: "Please send your CV, and a short statement on your Montessori teaching experience and two references to careersatpaperbird@gmail.com with the subject line: \"Montessori Teacher (Experienced) Application – Paper Bird Shishukul\".\n\nShortlisted candidates will be invited for: ✔ Demo class ✔ Classroom observation ✔ Personal interview"
    }
  },
  "hr-manager": {
    title: "HR Manager",
    content: {
      about: "Paper Bird Shishukul, was established in 2017 under the visionary leadership of Mrs. Malini Selvarajan. It is a cherished institution that has been nurturing young minds with care, creativity, and innovation in Bengaluru. Under the guidance of a dedicated team of educators and staff, committed to imparting a comprehensive education that focuses not only on academic excellence but on the development of creative and social skills. As we grow, we seek a strategic HR Manager who will not only manage the staffing lifecycle but also act as a partner to our educators and a bridge to parents, aligning HR operations with our child-first and community-oriented values.",
      website: "https://paperbirdshishukul.com/",
      location: "Bengaluru",
      reportsTo: "Founder & Director - Malini Ma'am",
      employmentType: "Full-time",
      startDate: "January 2026",
      purpose: "Lead all HR functions for teachers, caregivers, support staff and administration at Paper Bird Shishukul, ensuring a high-quality, engaged workforce. Manage the full employee lifecycle: recruitment, hiring, onboarding, performance management, retention, exit interviews. Oversee payroll, leave policies, attendance, compliance with labour regulations. e.g., staff transitions, ensuring the staff-parent ecosystem supports our values and reputation.",
      responsibilities: [
        {
          title: "Recruitment & Onboarding",
          items: [
            "Define job descriptions, advertise, screen, interview, hire teachers and staff who align with Montessori philosophy and our culture.",
            "Conduct background checks, qualifications verification, reference checks.",
            "Organise induction and onboarding for new staff: orientation to Paper Bird's ethos, policies, child-safety procedures."
          ]
        },
        {
          title: "Payroll, Attendance & Leave Management",
          items: [
            "Prepare and process monthly payroll for all staff (teachers, caregivers, admin) accurately and on time.",
            "Maintain attendance records, leave balances, approvals, policy compliance.",
            "Ensure compliance with applicable labour / education regulations (eg Karnataka labour laws, daycare regulations).",
            "Support in structuring benefits, incentives, retention programs for staff."
          ]
        },
        {
          title: "Performance Management & Teacher Engagement",
          items: [
            "Establish and execute performance appraisal cycles for teachers and staff: set goals, conduct reviews, coach improvement.",
            "Foster a positive culture of continuous learning, feedback, collaboration among educators.",
            "Organise staff meeting and child-safety training"
          ]
        },
        {
          title: "Staff Relations, Exit & Retention",
          items: [
            "Serve as the primary HR point of contact for staff queries, issues, grievances in a timely and respectful manner.",
            "Conduct exit interviews, analyse turnover data, provide recommendations to reduce attrition and improve staff satisfaction.",
            "Support retention strategies: recognition programs, career pathing (e.g., lead teacher roles, mentor roles), internal promotions.",
            "Liaise with management on disciplinary issues, staff development, succession planning."
          ]
        },
        {
          title: "Parent & Stakeholder Communication",
          items: [
            "On occasions when staff-parent communication overlaps with HR (e.g., staffing changes, parent concerns about teacher performance, transitions of teachers), act as liaison: communicate professionally, uphold confidentiality, support smooth transitions.",
            "Work with the Centre Director and teaching team to ensure staff-parent orientation is transparent and supportive.",
            "Maintain HR-related documentation that might be relevant for parents (staff certifications, teacher profiles, staff turnover snapshots) in a parent-friendly way."
          ]
        },
        {
          title: "HR Systems & Compliance",
          items: [
            "Maintain HR records (contracts, staff certifications, background checks, training records).",
            "Ensure compliance with local labour laws, statutory deductions, insurance, child-care regulations.",
            "Monitor staff ratios, qualified staff intake, maintain audit-ready files.",
            "Help implement or upgrade HRIS/attendance systems appropriate for a mid-sized daycare/early-learning centre."
          ]
        }
      ],
      candidateProfile: {
        essential: [
          "Minimum 5 - 7 years of HR experience (ideally in education/childcare / early-learning sector) in India.",
          "Strong understanding of HR operations: recruitment, payroll, performance management, employee relations, compliance.",
          "Excellent interpersonal and communication skills — able to interact with teachers, admin staff, and parents.",
          "High emotional intelligence, empathy, and ability to handle sensitive staff matters and parent-related situations.",
          "A values-aligned mindset: child-centric, caring, safety-first, team player, growth-mindset.",
          "Organized, process-oriented, and comfortable working in a smaller team environment where the HR role is broad and hands-on.",
          "Familiarity with Karnataka / Bengaluru labour laws, early-childhood education norms is a plus."
        ],
        desirable: [
          "Experience in a preschool / Montessori",
          "Experience implementing HR systems / mentoring teachers.",
          "Certification or training in HR (MBA-HR or equivalent) or in early childhood education is a bonus."
        ],
        attributes: [
          "Strong ethics, confidentiality, trustworthiness.",
          "Proactive, able to anticipate staffing needs and build forward-looking plans.",
          "Excellent conflict-resolution skills; calm under pressure.",
          "Friendly and approachable, with a professional demeanor.",
          "Passionate about working in the early childhood education domain and helping shape not just the staff but indirectly the children's learning environment."
        ]
      },
      whatThisRoleOffers: [
        "A unique opportunity to work in a child-first, values-driven institution that has been serving families since 2017.",
        "A chance to shape the HR function for a growing centre: influence culture, systems, and staff experience.",
        "Work closely with leadership and educators in a dynamic, engaged community of parents and children.",
        "Work-life balance: though daycare/early-learning means varied hours, the HR role will be focused and aligned with the centre's operating hours"
      ],
      applicationProcess: "Please send your CV, a short cover note (why you are drawn to working in early childhood education/HR in a preschool context), and two references to careersatpaperbird@gmail.com with the subject line: \"HR Manager Application – Paper Bird Shishukul\".\n\nApplications will be reviewed on a rolling basis and shortlisted candidates will be contacted for an interview."
    }
  },
  "marketing-coordinator": {
    title: "Marketing Co-Ordinator",
    content: {
      about: "Paper Bird Shishukul, was established in 2017 under the visionary leadership of Mrs. Malini Selvarajan. It is a cherished institution that has been nurturing young minds with care, creativity, and innovation in the heart of Bengaluru. Under the guidance of a dedicated team of educators and staff, committed to imparting a comprehensive education that focuses not only on academic excellence but on the development of creative and social skills. As we continue to grow, our digital presence, brand storytelling, and parent communication play a major role in shaping trust and visibility. We are looking for a marketing co-ordinator who is excited to build and strengthen PaperBird Shishukul's brand through consistent, creative, and high-quality content and communication.",
      website: "https://paperbirdshishukul.com/",
      location: "Bengaluru",
      reportsTo: "Brand Strategist",
      employmentType: "Full Time (open to freelancers)",
      startDate: "January 2026",
      roleDescription: "The Marketing Co-ordinator will support all marketing and communication functions for PaperBird Shishukul, working directly with the Founder, the Brand Strategist, the Centre Director, and designer to ensure seamless brand representation across digital and offline channels. This role combines creative execution, content management and basic video production. The ideal candidate is organized, proactive, visually inclined, comfortable with social media, and excited to work in an early childhood education environment.",
      purpose: "Support all marketing and communication functions for PaperBird Shishukul, ensuring seamless brand representation across digital and offline channels through creative execution, content management and basic video production.",
      responsibilities: [
        {
          title: "Social Media Management",
          items: [
            "Manage and schedule posts across Instagram, Facebook, and LinkedIn.",
            "Upload content, write captions (with guidance), update hashtags, and handle replies/comments where required.",
            "Maintain a posting calendar aligned with school events, special days, festivals, and parent communication needs.",
            "Track basic metrics (reach, engagement, saves, inquiries)."
          ]
        },
        {
          title: "Content Creation Support",
          items: [
            "Coordinate with the designer to create posters, flyers, banners, social media creatives, and school collateral.",
            "Coordinate design briefs, revisions, and approvals.",
            "Coordinate the creation of physical branding materials (standees, brochures, event branding, classroom boards)."
          ]
        },
        {
          title: "Founder Brand Building",
          items: [
            "Work closely with the Brand Strategist to streamline the Founder's digital presence.",
            "Assist in planning and scheduling Founder's content across LinkedIn and Instagram.",
            "Draft captions, format posts, and manage publishing.",
            "Help maintain a monthly founder-content calendar."
          ]
        },
        {
          title: "Video Production & Editing",
          items: [
            "Shoot short videos/reels at the school during events, classroom moments (face-safe), festivals, workshops, etc.",
            "Edit videos for Instagram and other platforms (reels, stories, shorts).",
            "Maintain brand consistency in video style, tone, and messaging.",
            "Organize raw footage into a simple content library."
          ]
        },
        {
          title: "Event & On-ground Marketing Support",
          items: [
            "Capture content during school events (preparation, execution, behind-the-scenes).",
            "Assist with setup of branding materials for parent workshops, celebrations, and open houses.",
            "Coordinate printing, vendor requirements, and deliveries as needed."
          ]
        },
        {
          title: "Administrative & Marketing Support Tasks",
          items: [
            "Maintain organized folders for all digital assets.",
            "Assist with basic research, competitor audits, and content inspiration sourcing."
          ]
        }
      ],
      candidateProfile: {
        essential: [
          "Strong interest in marketing, content creation, digital media, or branding.",
          "Basic experience with video editing tools (CapCut, InShot, VN, Adobe Premiere Rush, etc.).",
          "Good communication skills (English essential).",
          "Aesthetic sense, attention to detail, and eagerness to learn.",
          "Ability to multitask and follow structured workflows.",
          "Comfortable working in a school environment around children."
        ],
        desirable: [
          "Experience managing social media pages (internships/projects).",
          "Knowledge of Canva, Figma, or basic design tools.",
          "Photography/videography experience or interest.",
          "Ability to write captions or short-form content."
        ],
        attributes: [
          "Proactive, organized, and responsible.",
          "Warm, friendly, and professional.",
          "Takes initiative and asks thoughtful questions.",
          "Passionate about education, children, and community-driven brands."
        ]
      },
      whatThisRoleOffers: [
        "Hands-on learning across all key areas of marketing.",
        "Mentorship from the Brand Strategist and exposure to strategic brand building.",
        "Opportunity to shape and grow PaperBird Shishukul's digital presence.",
        "A portfolio of social media posts, videos, and campaigns you will help create.",
        "A nurturing, calm, and supportive workplace environment."
      ],
      applicationProcess: "Please send your CV, sample work (if available), and a short note on why you want to join PaperBird Shishukul to careersatpaperbird@gmail.com\nSubject: Application – Marketing Co-ordinator (PaperBird Shishukul)\n\nShortlisted candidates may be asked to complete: ✔ A short video-editing task ✔ A sample caption or social media mock post"
    }
  }
};

class JobDescription extends Component {
  render() {
    const jobId = this.props.match.params.jobId;
    const job = jobDescriptions[jobId];

    if (!job) {
      return (
        <Fragment>
          <Header />
          <div className="page-content">
            <PageTitle motherMenu="Careers" activeMenu="Job Not Found" />
            <div className="content-block">
              <div className="section-full bg-white content-inner">
                <div className="container">
                  <div className="text-center">
                    <h2>Job Description Not Found</h2>
                    <Link to="/careers" className="btn btn-primary">Back to Careers</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </Fragment>
      );
    }

    return (
      <Fragment>
        <SEO 
          title={`${job.title} - Careers`}
          description={`Join Paper Bird Shishukul as ${job.title}. ${job.content.purpose.substring(0, 150)}...`}
          keywords={`${job.title.toLowerCase()}, careers paper bird shishukul, montessori jobs bengaluru, teaching jobs bangalore, ${job.content.location.toLowerCase()} jobs`}
          url={`https://paperbirdshishukul.com/job/${jobId}`}
          type="article"
        />
        <JobPostingSchema job={job} jobId={jobId} />
        <BreadcrumbSchema items={[
          { name: "Home", url: "https://paperbirdshishukul.com/" },
          { name: "Careers", url: "https://paperbirdshishukul.com/careers" },
          { name: job.title, url: `https://paperbirdshishukul.com/job/${jobId}` }
        ]} />
        <Header />
        <div className="page-content">
          <PageTitle motherMenu="Careers" activeMenu={job.title} />
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
                
                {/* Back Button */}
                <div className="m-b30">
                  <Link to="/careers" className="btn btn-outline-primary">
                    <i className="fa fa-arrow-left m-r10"></i>Back to Careers
                  </Link>
                </div>

                {/* Job Title */}
                <div className="section-head text-center m-b40">
                  <h2 className="head-title text-secondry" style={{ color: "#48af53" }}>
                    {job.title}
                  </h2>
                </div>

                {/* About Section */}
                <div className="row m-b40">
                  <div className="col-lg-12">
                    <div className="dlab-box bg-white p-a30 border">
                      <h4 style={{ color: "#48af53", marginBottom: "20px" }}>
                        A Little About Paper Bird Shishukul
                      </h4>
                      <p style={{ fontSize: "16px", lineHeight: "1.8", textAlign: "justify", marginBottom: "20px" }}>
                        {job.content.about}
                      </p>
                      {job.content.website && (
                        <p>
                          <strong>Website: </strong>
                          <a href={job.content.website} target="_blank" rel="noopener noreferrer" style={{ color: "#48af53" }}>
                            {job.content.website}
                          </a>
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Job Details */}
                <div className="row m-b40">
                  <div className="col-lg-6">
                    <div className="dlab-box bg-gray p-a30">
                      <h4 style={{ color: "#48af53", marginBottom: "20px" }}>
                        Job Details
                      </h4>
                      <ul className="list-unstyled">
                        <li className="m-b10"><strong>Location:</strong> {job.content.location}</li>
                        <li className="m-b10"><strong>Reports to:</strong> {job.content.reportsTo}</li>
                        <li className="m-b10"><strong>Employment Type:</strong> {job.content.employmentType}</li>
                        <li className="m-b10"><strong>Start Date:</strong> {job.content.startDate}</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="dlab-box bg-white p-a30 border">
                      <h4 style={{ color: "#48af53", marginBottom: "20px" }}>
                        Purpose of the Role
                      </h4>
                      <p style={{ fontSize: "16px", lineHeight: "1.8" }}>
                        {job.content.purpose}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Role Description (for experienced positions) */}
                {job.content.roleDescription && (
                  <div className="row m-b40">
                    <div className="col-lg-12">
                      <div className="dlab-box bg-white p-a30 border">
                        <h4 style={{ color: "#48af53", marginBottom: "20px" }}>
                          A lot about the Role: {job.title}
                        </h4>
                        {job.content.roleDescription.split('\n\n').map((paragraph, index) => (
                          <p key={index} style={{ fontSize: "16px", lineHeight: "1.8", textAlign: "justify", marginBottom: "20px" }}>
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Key Responsibilities */}
                {job.content.responsibilities && job.content.responsibilities.length > 0 && (
                  <div className="row m-b40">
                    <div className="col-lg-12">
                      <div className="dlab-box bg-white p-a30 border">
                        <h4 style={{ color: "#48af53", marginBottom: "30px" }}>
                          Key Responsibilities
                        </h4>
                        {job.content.responsibilities.map((section, index) => (
                          <div key={index} className="m-b30">
                            <h5 style={{ color: "#ed5ab0", marginBottom: "15px" }}>
                              {index + 1}. {section.title}
                            </h5>
                            <ul className="list-check primary">
                              {section.items.map((item, itemIndex) => (
                                <li key={itemIndex} style={{ marginBottom: "8px" }}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Candidate Profile */}
                {((job.content.candidateProfile && job.content.candidateProfile.length > 0) || 
                  (job.content.candidateProfile && job.content.candidateProfile.essential)) && (
                  <div className="row m-b40">
                    <div className="col-lg-12">
                      <div className="dlab-box bg-gray p-a30">
                        <h4 style={{ color: "#48af53", marginBottom: "20px" }}>
                          {job.content.candidateProfile.essential ? "Key Hiring Tenets / Candidate Profile" : "Candidate Profile (Fresher)"}
                        </h4>
                        
                        {/* Handle array format (for fresher) */}
                        {Array.isArray(job.content.candidateProfile) && (
                          <ul className="list-check primary">
                            {job.content.candidateProfile.map((requirement, index) => (
                              <li key={index} style={{ marginBottom: "10px" }}>{requirement}</li>
                            ))}
                          </ul>
                        )}
                        
                        {/* Handle object format (for experienced) */}
                        {job.content.candidateProfile.essential && (
                          <>
                            <h5 style={{ color: "#ed5ab0", marginBottom: "15px", marginTop: "20px" }}>
                              Essential
                            </h5>
                            <ul className="list-check primary">
                              {job.content.candidateProfile.essential.map((requirement, index) => (
                                <li key={index} style={{ marginBottom: "10px" }}>{requirement}</li>
                              ))}
                            </ul>
                            
                            {job.content.candidateProfile.desirable && (
                              <>
                                <h5 style={{ color: "#ed5ab0", marginBottom: "15px", marginTop: "20px" }}>
                                  Desirable
                                </h5>
                                <ul className="list-check primary">
                                  {job.content.candidateProfile.desirable.map((requirement, index) => (
                                    <li key={index} style={{ marginBottom: "10px" }}>{requirement}</li>
                                  ))}
                                </ul>
                              </>
                            )}
                            
                            {job.content.candidateProfile.attributes && (
                              <>
                                <h5 style={{ color: "#ed5ab0", marginBottom: "15px", marginTop: "20px" }}>
                                  Attributes
                                </h5>
                                <ul className="list-check primary">
                                  {job.content.candidateProfile.attributes.map((attribute, index) => (
                                    <li key={index} style={{ marginBottom: "10px" }}>{attribute}</li>
                                  ))}
                                </ul>
                              </>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* What This Role Offers (for experienced positions) */}
                {job.content.whatThisRoleOffers && (
                  <div className="row m-b40">
                    <div className="col-lg-12">
                      <div className="dlab-box bg-white p-a30 border">
                        <h4 style={{ color: "#48af53", marginBottom: "20px" }}>
                          What This Role Offers
                        </h4>
                        <ul className="list-check primary">
                          {job.content.whatThisRoleOffers.map((offer, index) => (
                            <li key={index} style={{ marginBottom: "10px" }}>{offer}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* Merged Application Section */}
                <div className="row m-b40">
                  <div className="col-lg-12">
                    <div className="dlab-box bg-white p-a40 border" style={{ textAlign: "center" }}>
                      <h4 style={{ color: "#48af53", marginBottom: "30px", fontSize: "28px" }}>
                        How to Apply
                      </h4>
                      
                      {/* Application Instructions */}
                      {job.content.applicationProcess ? (
                        <div style={{ textAlign: "left", marginBottom: "30px" }}>
                          {job.content.applicationProcess.split('\n\n').map((paragraph, index) => (
                            <p key={index} style={{ fontSize: "16px", lineHeight: "1.8", marginBottom: "15px" }}>
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      ) : (
                        <div style={{ marginBottom: "30px" }}>
                          <p style={{ fontSize: "16px", lineHeight: "1.8", marginBottom: "15px" }}>
                            Please send your CV and a short cover letter explaining why you're interested in this position to:
                          </p>
                          <p style={{ fontSize: "18px", fontWeight: "600", color: "#48af53", marginBottom: "15px" }}>
                            careersatpaperbird@gmail.com
                          </p>
                          <p style={{ fontSize: "16px", lineHeight: "1.8", marginBottom: "15px" }}>
                            Subject Line: "{job.title} Application – Paper Bird Shishukul"
                          </p>
                          <p style={{ fontSize: "16px", lineHeight: "1.8" }}>
                            Shortlisted candidates will be contacted for an interview.
                          </p>
                        </div>
                      )}
                      
                      {/* Call to Action Buttons */}
                      <div style={{ marginTop: "30px", paddingTop: "30px", borderTop: "2px solid #f0f0f0" }}>
                        <h5 style={{ color: "#48af53", marginBottom: "20px" }}>
                          Ready to Join Our Team?
                        </h5>
                        <p className="m-b30" style={{ fontSize: "16px" }}>
                          Send your application to careersatpaperbird@gmail.com and let's discuss how you can contribute to our mission of nurturing young minds.
                        </p>
                        <a 
                          href="mailto:careersatpaperbird@gmail.com?subject={job.title} Application - Paper Bird Shishukul" 
                          className="btn btn-lg radius-xl" 
                          style={{ backgroundColor: "#ed5ab0", color: "white", padding: "15px 40px", marginRight: "15px", marginBottom: "10px" }}
                        >
                          📧 Email Your CV
                        </a>
                        <a 
                          href="tel:+919845127859" 
                          className="btn btn-lg radius-xl" 
                          style={{ backgroundColor: "#48af53", color: "white", padding: "15px 40px", marginBottom: "10px" }}
                        >
                          📞 Call Us: 098451 27859
                        </a>
                      </div>
                    </div>
                  </div>
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

export default JobDescription;