import React, { useState, useEffect } from 'react';

// --- Data ---
const portfolioData = {
  greeting: "Hi, I am",
  name: "Nethmi Wijeweera",
  photo: "/professional image.png",
  cvUrl: "/Nethmi Wijeweera_CV.pdf", 
  subtitle: [
    "Passionate Fullstack Developer & AI Enthusiast",
    "Final-year Undergraduate @ University of Moratuwa"
  ],
  contactDetails: {
    location: "Wellawaya, Sri Lanka",
    phone: "+94 77 529 4974",
    email: "nethmieranga20@gmail.com"
  },
  links: {
    linkedin: "https://linkedin.com/in/nethmi-wijeweera",
    github: "https://github.com/nethmi20"
  },
  summary: `Motivated IT undergraduate and aspiring Software Engineer specializing in Artificial Intelligence and Full-Stack Development. Proven ability to architect scalable backend infrastructure, optimize data pipelines, and train high-accuracy machine learning models. Blending academic excellence with hands-on internship experience, I possess a deep understanding of Agile methodologies and modern development practices. A collaborative problem-solver, I excel at delivering reliable solutions in fast-paced environments.`,
  education: [
    {
      school: "University of Moratuwa - Faculty of Information Technology",
      degree: "B.Sc. (Hons) Information Technology",
      date: "2022 - Present",
      details: [
        "Current CGPA: 3.50/4.00",
        "Dean’s List: Semester 3 (3.94 GPA), Semester 4 (3.84 GPA)"
      ]
    },
    {
      school: "Sirimavo Bandaranaike Vidyalaya - Colombo 07",
      degree: "G.C.E. Advanced Level - Physical Science (2020) & G.C.E. O/L (2016)",
      date: "2011 - 2019",
      details: [
        "A/L Z-Score: 1.5252",
        "O/L: 9 A’s"
      ]
    }
  ],
  experience: [
    {
      role: "Full-Stack Developer Intern",
      company: "Agrithmics (Pvt) Ltd",
      date: "Feb 2025 - Aug 2025",
      details: [
        "Designed scalable front-end components using React and backend services in ASP.NET Core following Clean Architecture.",
        "Implemented efficient data management using MS SQL Server and optimized performance with Redis caching.",
        "Integrated RabbitMQ to enable asynchronous messaging workflows.",
        "Worked in an Agile environment, participating in sprint planning and iterative feature delivery.",
        "Collaborated via Azure Repos, contributing to code quality through peer reviews."
      ]
    }
  ],
  projects: [
    {
      name: "Ayurvedic Powder Mixtures Identification",
      type: "Final Year Project",
      tech: ["Python", "OpenCV", "TensorFlow", "AI/ML"],
      desc: "Developed an image-based system for Ayurvedic ingredient identification using particle size categorization (Fine-2/Fine-3). I applied texture, and color feature extraction to train machine learning models for multi-label classification."
    },
    {
      name: "AgriGen ERP System",
      type: "Internship Project",
      tech: ["React", "ASP.NET Core", "RabbitMQ", "Full-Stack"],
      desc: "Developed an enterprise resource planning system during my internship, focusing on scalable backend services and modular front-end architecture using React, .NET, MS SQL Server, Redis, RabbitMQ, and Clean Architecture principles."
    },
    {
      name: "Healthcare Center Management System",
      type: "Second Year Group Project",
      tech: ["React", "ASP.NET", "MS SQL", "Full-Stack"],
      desc: "Developed a healthcare center management system focused on operational efficiency by implementing patient registration, billing, pharmacy, and scheduling modules. I designed a comprehensive, role-based doctor interface and aligned all features with practical needs to enhance overall usability and system performance."
    },
    {
      name: "Full-Stack E-Commerce Platform",
      type: "Individual Project",
      tech: ["Spring Boot", "React", "JWT", "MySQL", "Full-Stack"],
      desc: "Implemented JWT-based authentication with registration, login, and role-based access to secure a Spring Boot REST backend featuring an admin dashboard for product and inventory management. The system includes secure routing, order processing, history tracking, and specialized fulfillment management tools for administrators."
    },
    {
      name: "A/L Biology LLM Learning Assistant",
      type: "Individual Project",
      tech: ["Python", "Hugging Face", "FastAPI", "React", "AI/ML"],
      desc: "Developed an LLM-based chat application that answers G.C.E. A/L Biology syllabus questions by leveraging resource books published by the National Institute of Education as the primary knowledge base."
    },
    {
      name: "Used Motorcycle Price Predictor",
      type: "Individual Project",
      tech: ["Python", "XGBoost", "SHAP", "Streamlit", "AI/ML"],
      desc: "Developed a motorcycle price prediction system by scraping 1,300+ listings from ikman.lk and building a Streamlit web application for real-time estimates. The solution integrates SHAP to provide transparent, feature-level justifications for every prediction, ensuring full model interpretability."
    },
    {
      name: "Movie Sentiment Analysis System",
      type: "Individual Project",
      tech: ["Python", "Scikit-learn", "NLP", "AI/ML"],
      desc: "Built a movie review sentiment classification system using NLP techniques, achieving high accuracy through SVM and Logistic Regression models. The project involved text data cleaning, TF-IDF feature extraction, and dataset balancing using SMOTE to accurately distinguish between positive and negative reviews."
    },
    {
      name: "Smart First Aid Advisor",
      type: "Individual Project",
      tech: ["Python", "Tkinter", "Expert Systems"],
      desc: "Developed an intelligent first-aid advisor using a rule-based expert system covering 20+ emergency scenarios, featuring dynamic question-based diagnosis and conditional logic for customized guidance. The system includes an intuitive Tkinter GUI with session logging and automated emergency care recommendations."
    },
    {
      name: "Automated Fruit Juice Machine",
      type: "First Year Hardware Project",
      tech: ["Arduino", "C", "Hardware"],
      desc: "Engineered an automated dispensing system using an Arduino microcontroller to enable customizable fruit selection and adjustable sugar levels through integrated sensors and actuators."
    }
  ],
  technicalSkills: [
    { category: "Programming", items: "C, Java, JavaScript, C#, Python" },
    { category: "Frontend", items: "HTML, CSS, React.js, Bootstrap, Material-UI" },
    { category: "Backend", items: "ASP.NET Core Web API, FastAPI, Spring Boot, MS SQL Server, Redis" },
    { category: "Tools & QA", items: "Git, GitHub, Azure DevOps, RabbitMQ, Selenium, Cucumber" }
  ],
  softSkills: [
    { category: "Time Management" },
    { category: "Problem Solving" },
    { category: "Adaptability" },
    { category: "Collaboration" },
    { category: "Critical Thinking" },
    { category: "Effective Communication" }
  ]
};

// --- Formal Interactive Style Dictionary ---
const theme = {
  bg: '#0B1120',
  surface: '#111827',
  surfaceHover: '#1F2937',
  primary: '#38BDF8',
  primaryRGB: '56, 189, 248',
  textMain: '#F9FAFB',
  textMuted: '#D1D5DB',
  border: '#1F2937'
};

const styles = {
  appContainer: {
    minHeight: '100vh',
    backgroundColor: theme.bg,
    color: theme.textMain,
    fontFamily: '"Inter", "Segoe UI", sans-serif',
    padding: '40px 20px',
    lineHeight: '1.6'
  },
  contentWrapper: {
    maxWidth: '1000px', 
    margin: '0 auto',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '60px', 
    flexWrap: 'wrap', 
    marginBottom: '50px',
    paddingBottom: '40px',
    borderBottom: `1px solid ${theme.border}`
  },
  photoContainer: {
    flexShrink: 0,
    display: 'flex',
    justifyContent: 'center'
  },
  photo: {
    width: '280px', 
    height: '360px', 
    borderRadius: '16px',
    objectFit: 'cover',
    objectPosition: 'top',
    boxShadow: `0 10px 30px -10px rgba(${theme.primaryRGB}, 0.3)` 
  },
  headerText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'left',
    flex: '1 1 400px',
    maxWidth: '600px'
  },
  greeting: { fontSize: '1.5rem', color: theme.primary, fontWeight: '500', marginBottom: '6px', letterSpacing: '0.8px' }, 
  name: { fontSize: '3.5rem', fontWeight: '800', margin: '0 0 10px 0', letterSpacing: '-1.5px', lineHeight: '1.1' },
  navBar: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginBottom: '40px',
    flexWrap: 'wrap'
  },
  navButton: (isActive, isHovered) => ({
    padding: '10px 24px',
    backgroundColor: isActive ? theme.primary : (isHovered ? theme.surfaceHover : theme.surface),
    color: isActive ? '#000000' : theme.textMain,
    border: `1px solid ${isActive ? theme.primary : theme.border}`,
    borderRadius: '30px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'all 0.2s ease',
    outline: 'none',
    boxShadow: isActive ? `0 0 15px rgba(${theme.primaryRGB}, 0.3)` : 'none'
  }),
  downloadBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '8px 18px',
    backgroundColor: 'transparent',
    color: theme.primary,
    border: `2px solid ${theme.primary}`,
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '0.85rem',
    transition: 'all 0.3s ease',
    marginTop: '0'
  },
  card: {
    backgroundColor: theme.surface,
    padding: '24px',
    borderRadius: '12px',
    marginBottom: '20px',
    border: `1px solid ${theme.border}`,
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
  },
  projectCard: (isHovered) => ({
    backgroundColor: theme.surface,
    padding: '24px',
    borderRadius: '12px',
    border: `1px solid ${isHovered ? theme.primary : theme.border}`,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
    boxShadow: isHovered ? `0 10px 20px -3px rgba(${theme.primaryRGB}, 0.2)` : '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  }),
  projectGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '80px'
  },
  tag: {
    display: 'inline-block',
    backgroundColor: `rgba(${theme.primaryRGB}, 0.1)`,
    color: theme.primary,
    padding: '4px 10px',
    borderRadius: '6px',
    fontSize: '0.75rem',
    marginRight: '8px',
    marginBottom: '8px',
    fontWeight: '600',
    border: `1px solid rgba(${theme.primaryRGB}, 0.2)`
  },
  projectTypeTag: {
    fontSize: '0.7rem',
    color: theme.primary,
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontWeight: '700',
    marginBottom: '8px',
    display: 'block'
  },
  // --- CORRECTED: Use "both" to manage opacity properly without hardcoding it ---
  staggerAnimation: (index) => ({
    animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both` // "both" applies opacity: 0 before the delay, and opacity: 1 after!
  })
};

// --- Interactive Components ---

const AnimatedHeader = ({ greeting, name }) => {
  const [displayedGreeting, setDisplayedGreeting] = useState('');
  const [displayedName, setDisplayedName] = useState('');
  const [phase, setPhase] = useState(1);

  useEffect(() => {
    if (phase === 1) {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayedGreeting(greeting.slice(0, i + 1));
        i++;
        if (i >= greeting.length) {
          clearInterval(interval);
          setTimeout(() => setPhase(2), 300); 
        }
      }, 50); 
      return () => clearInterval(interval);
    } else if (phase === 2) {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayedName(name.slice(0, i + 1));
        i++;
        if (i >= name.length) {
          clearInterval(interval);
          setPhase(3); 
        }
      }, 80); 
      return () => clearInterval(interval);
    }
  }, [greeting, name, phase]);

  return (
    <>
      <span style={styles.greeting}>
        {displayedGreeting}
        {phase === 1 && <span className="blinking-cursor">|</span>}
      </span>
      <h1 style={styles.name}>
        {displayedName}
        {phase >= 2 && <span className="blinking-cursor">|</span>}
      </h1>
    </>
  );
};

const InteractiveSubtitle = ({ lines }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        cursor: 'default',
        margin: '0 0 20px 0',
        transition: 'all 0.3s ease',
        transform: isHovered ? 'translateX(5px)' : 'translateX(0)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '6px'
      }}
    >
      <h2 style={{
        fontSize: '1.25rem',
        color: isHovered ? theme.textMain : theme.primary,
        fontWeight: '600',
        margin: 0,
        transition: 'all 0.3s ease',
        textShadow: isHovered ? `0 0 15px rgba(${theme.primaryRGB}, 0.5)` : 'none',
        lineHeight: '1.35'
      }}>
        {lines[0]}
      </h2>
      <h3 style={{
        fontSize: '1.05rem',
        color: isHovered ? theme.textMain : theme.textMuted,
        fontWeight: '400',
        margin: 0,
        transition: 'color 0.3s ease',
        lineHeight: '1.4'
      }}>
        {lines[1]}
      </h3>
    </div>
  );
};

const NavButton = ({ label, isActive, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      style={styles.navButton(isActive, isHovered)}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {label}
    </button>
  );
};

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      style={{...styles.projectCard(isHovered), ...styles.staggerAnimation(index)}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <span style={styles.projectTypeTag}>{project.type}</span>
      <h3 style={{ margin: '0 0 10px 0', fontSize: '1.2rem', color: theme.textMain }}>{project.name}</h3>
      <div>
        {project.tech.map((t, idx) => (
          <span key={idx} style={styles.tag}>{t}</span>
        ))}
      </div>
      <div style={{
        marginTop: '15px',
        overflow: 'hidden',
        maxHeight: isExpanded ? '400px' : '48px',
        transition: 'max-height 0.4s ease-in-out',
        color: theme.textMuted,
        fontSize: '0.9rem',
        whiteSpace: 'pre-wrap',
        textAlign: 'justify'
      }}>
        {project.desc}
      </div>
      <div style={{ marginTop: 'auto', paddingTop: '15px', fontSize: '0.8rem', color: theme.primary, fontWeight: 'bold' }}>
        {isExpanded ? 'Show Less ↑' : 'Read More ↓'}
      </div>
    </div>
  );
};

export default function PortfolioApp() {
  const [activeTab, setActiveTab] = useState('Profile');
  const [cvHover, setCvHover] = useState(false);

  // Force component to re-mount when tabs change to replay animations
  const tabContentKey = activeTab;

  return (
    <div style={styles.appContainer}>
      {/* Global Styles for Animations */}
      <style>
        {`
          @keyframes blinkCursor {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          .blinking-cursor {
            animation: blinkCursor 0.8s step-end infinite;
            color: ${theme.primary};
            margin-left: 4px;
            font-weight: 400;
          }
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

      <div style={styles.contentWrapper}>
        <header style={{...styles.header, ...styles.staggerAnimation(0)}}>
          <div style={styles.photoContainer}>
            <img src={portfolioData.photo} alt={portfolioData.name} style={styles.photo} />
          </div>
          <div style={styles.headerText}>
            
            <AnimatedHeader greeting={portfolioData.greeting} name={portfolioData.name} />
            
            <InteractiveSubtitle lines={portfolioData.subtitle} />
            <div style={{ marginTop: '15px', display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
                <a href={portfolioData.links.linkedin} target="_blank" rel="noreferrer" style={{color: theme.primary, textDecoration: 'none', fontWeight: '600'}}>LinkedIn</a>
                <a href={portfolioData.links.github} target="_blank" rel="noreferrer" style={{color: theme.primary, textDecoration: 'none', fontWeight: '600'}}>GitHub</a>
                
                <a 
                  href={portfolioData.cvUrl} 
                  download 
                  onMouseEnter={() => setCvHover(true)}
                  onMouseLeave={() => setCvHover(false)}
                  style={{
                    ...styles.downloadBtn,
                    backgroundColor: cvHover ? theme.primary : 'transparent',
                    color: cvHover ? '#000000' : theme.primary
                  }}
                >
                  Download CV ↓
                </a>
            </div>
          </div>
        </header>

        <nav style={{...styles.navBar, ...styles.staggerAnimation(1)}}>
          {['Profile', 'Experience', 'Projects'].map(tab => (
            <NavButton key={tab} label={tab} isActive={activeTab === tab} onClick={() => setActiveTab(tab)} />
          ))}
        </nav>

        <main key={tabContentKey}>
          {activeTab === 'Profile' && (
            <div>
              <div style={{...styles.card, ...styles.staggerAnimation(0)}}>
                <h3 style={{ margin: '0 0 15px 0', color: theme.primary }}>Professional Summary</h3>
                <p style={{ color: theme.textMuted, margin: 0, textAlign: 'justify' }}>{portfolioData.summary}</p>
              </div>

              <h3 style={{ margin: '30px 0 15px 0', color: theme.primary, paddingLeft: '8px', ...styles.staggerAnimation(1) }}>Contact Me</h3>
              <div style={{...styles.card, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', ...styles.staggerAnimation(2)}}>
                  <div>
                      <p style={{margin: '0', fontSize: '0.8rem', color: theme.primary, fontWeight: '700', textTransform: 'uppercase'}}>Location</p>
                      <p style={{margin: '5px 0 0 0', color: theme.textMain}}>{portfolioData.contactDetails.location}</p>
                  </div>
                  <div>
                      <p style={{margin: '0', fontSize: '0.8rem', color: theme.primary, fontWeight: '700', textTransform: 'uppercase'}}>Phone</p>
                      <p style={{margin: '5px 0 0 0', color: theme.textMain}}>{portfolioData.contactDetails.phone}</p>
                  </div>
                  <div>
                      <p style={{margin: '0', fontSize: '0.8rem', color: theme.primary, fontWeight: '700', textTransform: 'uppercase'}}>Email</p>
                      <p style={{margin: '5px 0 0 0', color: theme.textMain}}>{portfolioData.contactDetails.email}</p>
                  </div>
              </div>

              <h3 style={{ margin: '30px 0 15px 0', color: theme.primary, paddingLeft: '8px', ...styles.staggerAnimation(3) }}>Education</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '20px' }}>
                {portfolioData.education.map((edu, index) => (
                  <div key={index} style={{...styles.card, marginBottom: 0, ...styles.staggerAnimation(index + 4)}}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: `1px solid ${theme.border}`, paddingBottom: '12px', marginBottom: '12px', flexWrap: 'wrap' }}>
                      <div>
                        <h4 style={{ margin: 0, color: theme.textMain, fontSize: '1.1rem' }}>{edu.school}</h4>
                        <p style={{ margin: '5px 0 0 0', color: theme.primary, fontWeight: '600', fontSize: '0.95rem' }}>{edu.degree}</p>
                      </div>
                      <div style={{ color: theme.textMuted, fontSize: '0.9rem', marginTop: '4px', fontWeight: '500' }}>{edu.date}</div>
                    </div>
                    <ul style={{ color: theme.textMuted, paddingLeft: '20px', margin: 0, fontSize: '0.9rem' }}>
                      {edu.details.map((detail, idx) => (<li key={idx} style={{ marginBottom: '8px' }}>{detail}</li>))}
                    </ul>
                  </div>
                ))}
              </div>
              
              <h3 style={{ margin: '35px 0 15px 0', color: theme.primary, paddingLeft: '8px', ...styles.staggerAnimation(6) }}>Technical Skills</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '30px' }}>
                {portfolioData.technicalSkills.map((skill, index) => (
                  <div key={index} style={{...styles.card, marginBottom: 0, ...styles.staggerAnimation(index + 7)}}>
                    <h4 style={{ margin: '0 0 10px 0', color: theme.textMain }}>{skill.category}</h4>
                    <p style={{ margin: 0, color: theme.textMuted, fontSize: '0.95rem', lineHeight: '1.6' }}>{skill.items}</p>
                  </div>
                ))}
              </div>

              <h3 style={{ margin: '35px 0 15px 0', color: theme.primary, paddingLeft: '8px', ...styles.staggerAnimation(11) }}>Soft Skills</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                {portfolioData.softSkills.map((skill, index) => (
                  <div key={index} style={{...styles.card, marginBottom: 0, textAlign: 'center', ...styles.staggerAnimation(index + 12)}}>
                    <h4 style={{ margin: 0, color: theme.textMain, fontSize: '1.1rem' }}>{skill.category}</h4>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'Experience' && (
            <div>
              {portfolioData.experience.map((job, index) => (
                <div key={index} style={{...styles.card, ...styles.staggerAnimation(index)}}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: `1px solid ${theme.border}`, paddingBottom: '15px', marginBottom: '15px', flexWrap: 'wrap' }}>
                    <div>
                      <h3 style={{ margin: 0, color: theme.textMain }}>{job.role}</h3>
                      <p style={{ margin: '5px 0 0 0', color: theme.primary, fontWeight: 'bold' }}>{job.company}</p>
                    </div>
                    <div style={{ color: theme.textMuted, fontSize: '0.9rem', marginTop: '4px' }}>{job.date}</div>
                  </div>
                  <ul style={{ color: theme.textMuted, paddingLeft: '20px', margin: 0, textAlign: 'justify' }}>
                    {job.details.map((detail, idx) => (<li key={idx} style={{ marginBottom: '10px' }}>{detail}</li>))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'Projects' && (
            <div style={styles.projectGrid}>
              {portfolioData.projects.map((project, index) => (
                <ProjectCard key={index} index={index} project={project} />
              ))}
            </div>
          )}
        </main>

        <footer style={{ textAlign: 'center', marginTop: '60px', color: theme.textMuted, fontSize: '0.8rem', ...styles.staggerAnimation(15) }}>
          © {new Date().getFullYear()} Nethmi Wijeweera. Built with React.
        </footer>
      </div>
    </div>
  );
}