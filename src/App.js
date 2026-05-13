import React, { useState } from 'react';

// --- Data ---
const portfolioData = {
  name: "Nethmi Wijeweera",
  photo: "/professional image.png",
  subtitle: [
    "Passionate Fullstack Developer & AI Enthusiast",
    "Final-year Undergraduate @ University of Moratuwa"
  ],
  contact: "Wellawaya, Sri Lanka | +94 77 529 4974 | nethmieranga20@gmail.com",
  links: {
    linkedin: "https://linkedin.com/in/nethmi-wijeweera",
    github: "https://github.com/nethmi20"
  },
  summary: `Motivated IT undergraduate and aspiring Software Engineer with a specialized focus on Artificial Intelligence and Full-Stack Development. Recognized for a proven ability to architect scalable backend infrastructure, optimize complex data pipelines, and train highly accurate machine learning models. Blending academic excellence with hands-on industry internship experience, I possess a deep understanding of modern development practices and agile methodologies. As a collaborative and adaptable team player, I excel at dissecting complex technical challenges and delivering robust, seamless solutions within dynamic, fast-paced environments.`,
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
      desc: "CV-based system for multi-label ingredient classification. Applied particle size categorization (Fine-2 and Fine-3) and utilized primary features including color analysis alongside shape and surface texture."
    },
    {
      name: "AgriGen ERP System",
      type: "Internship Project",
      tech: ["React", "ASP.NET Core", "RabbitMQ", "Full-Stack"],
      desc: "Enterprise resource planning system focusing on scalable backend services, clean architecture, and modular front-end design."
    },
    {
      name: "Healthcare Center Management System",
      type: "Second Year Group Project",
      tech: ["React", "ASP.NET", "MS SQL", "Full-Stack"],
      desc: "Developed a comprehensive system to enhance overall operational efficiency with modules for patient registration, billing, pharmacy management, and role-based doctor interfaces."
    },
    {
      name: "Full-Stack E-Commerce Platform",
      type: "Individual Project",
      tech: ["Spring Boot", "React", "JWT", "MySQL", "Full-Stack"],
      desc: "Platform featuring JWT authentication, secure routing, an admin dashboard, order history tracking, and fulfillment management."
    },
    {
      name: "A/L Biology LLM Learning Assistant",
      type: "Individual Project",
      tech: ["Python", "Hugging Face", "FastAPI", "React", "AI/ML"],
      desc: "LLM chat application answering syllabus questions based on NIE resource books. Uses a direct setup with an in-memory knowledge base and the Hugging Face Inference Client."
    },
    {
      name: "Used Motorcycle Price Predictor",
      type: "Individual Project",
      tech: ["Python", "XGBoost", "SHAP", "Streamlit", "AI/ML"],
      desc: "Scraped 1300+ ikman.lk listings to predict prices. Integrated SHAP for feature explainability, presented through a customized dark-themed Streamlit application."
    },
    {
      name: "Movie Sentiment Analysis System",
      type: "Individual Project",
      tech: ["Python", "Scikit-learn", "NLP", "AI/ML"],
      desc: "Built a system to classify movie review sentiments using NLP techniques. Processed text with TF-IDF, balanced data with SMOTE, and achieved high accuracy using SVM and Logistic Regression."
    },
    {
      name: "Smart First Aid Advisor",
      type: "Individual Project",
      tech: ["Python", "Tkinter", "Expert Systems"],
      desc: "Developed an intelligent first-aid advisor using a rule-based expert system for 20+ emergency scenarios, featuring dynamic question-based diagnosis and GUI session logging."
    },
    {
      name: "Automated Fruit Juice Machine",
      type: "First Year Hardware Project",
      tech: ["Arduino", "C", "Hardware"],
      desc: "Engineered an automated dispensing system with customizable fruit selection, adjustable sugar levels, and integrated sensors/actuators programmed on an Arduino microcontroller."
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

// --- Black & Blue Style Dictionary ---
const theme = {
  bg: '#000000',          
  surface: '#121212',     
  surfaceHover: '#1A1A1A',
  primary: '#3B82F6',     
  textMain: '#FFFFFF',    
  textMuted: '#F8FAFC',   
  border: '#27272A'       
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
    height: '340px', 
    borderRadius: '16px',
    objectFit: 'cover',
    objectPosition: 'top',
    boxShadow: `0 10px 30px -10px rgba(59, 130, 246, 0.5)`
  },
  headerText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'left',
    flex: '1 1 400px',
    maxWidth: '600px'
  },
  name: { fontSize: '3.2rem', fontWeight: '800', margin: '0 0 10px 0', letterSpacing: '-1px', lineHeight: '1.1' },
  contact: { fontSize: '0.95rem', color: theme.textMuted, margin: '0', lineHeight: '1.8' },
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
    boxShadow: isActive ? `0 0 15px rgba(59, 130, 246, 0.4)` : 'none'
  }),
  card: {
    backgroundColor: theme.surface,
    padding: '24px',
    borderRadius: '12px',
    marginBottom: '20px',
    border: `1px solid ${theme.border}`,
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.5)',
  },
  projectCard: (isHovered) => ({
    backgroundColor: theme.surface,
    padding: '24px',
    borderRadius: '12px',
    border: `1px solid ${isHovered ? theme.primary : theme.border}`,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
    boxShadow: isHovered ? `0 10px 20px -3px rgba(59, 130, 246, 0.2)` : '0 4px 6px -1px rgba(0, 0, 0, 0.5)',
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  }),
  projectGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '70px' // <--- INCREASED GAP TO 70PX FOR MORE SPACE
  },
  tag: {
    display: 'inline-block',
    backgroundColor: 'rgba(59, 130, 246, 0.15)',
    color: theme.primary,
    padding: '4px 10px',
    borderRadius: '6px',
    fontSize: '0.75rem',
    marginRight: '8px',
    marginBottom: '8px',
    fontWeight: '600',
    border: `1px solid rgba(59, 130, 246, 0.3)`
  },
  projectTypeTag: {
    fontSize: '0.7rem',
    color: theme.primary,
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontWeight: '700',
    marginBottom: '8px',
    display: 'block'
  }
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
        transition: 'transform 0.3s ease',
        transform: isHovered ? 'translateX(5px)' : 'translateX(0)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '6px'
      }}
    >
      <h2 style={{
        fontSize: '1.35rem',
        color: isHovered ? theme.textMain : theme.primary,
        fontWeight: '600',
        margin: 0,
        transition: 'all 0.3s ease',
        textShadow: isHovered ? `0 0 15px rgba(59, 130, 246, 0.6)` : 'none',
        lineHeight: '1.35'
      }}>
        {lines[0]}
      </h2>
      <h3 style={{
        fontSize: '1.1rem',
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

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      style={styles.projectCard(isHovered)}
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
        maxHeight: isExpanded ? '300px' : '48px',
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

  return (
    <div style={styles.appContainer}>
      <div style={styles.contentWrapper}>
        <header style={styles.header}>
          <div style={styles.photoContainer}>
            <img src={portfolioData.photo} alt={portfolioData.name} style={styles.photo} />
          </div>
          <div style={styles.headerText}>
            <h1 style={styles.name}>{portfolioData.name}</h1>
            <InteractiveSubtitle lines={portfolioData.subtitle} />
            <div style={styles.contact}>
              {portfolioData.contact}
              <div style={{ marginTop: '12px', display: 'flex', gap: '20px' }}>
                <a href={portfolioData.links.linkedin} target="_blank" rel="noreferrer" style={{color: theme.primary, textDecoration: 'none', fontWeight: '600'}}>LinkedIn</a>
                <a href={portfolioData.links.github} target="_blank" rel="noreferrer" style={{color: theme.primary, textDecoration: 'none', fontWeight: '600'}}>GitHub</a>
              </div>
            </div>
          </div>
        </header>

        <nav style={styles.navBar}>
          {['Profile', 'Experience', 'Projects'].map(tab => (
            <NavButton key={tab} label={tab} isActive={activeTab === tab} onClick={() => setActiveTab(tab)} />
          ))}
        </nav>

        <main>
          {activeTab === 'Profile' && (
            <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
              <div style={styles.card}>
                <h3 style={{ margin: '0 0 15px 0', color: theme.primary }}>Professional Summary</h3>
                <p style={{ color: theme.textMuted, margin: 0, textAlign: 'justify' }}>{portfolioData.summary}</p>
              </div>

              <h3 style={{ margin: '30px 0 15px 0', color: theme.primary, paddingLeft: '8px' }}>Education</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '20px' }}>
                {portfolioData.education.map((edu, index) => (
                  <div key={index} style={{...styles.card, marginBottom: 0}}>
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
              
              <h3 style={{ margin: '35px 0 15px 0', color: theme.primary, paddingLeft: '8px' }}>Technical Skills</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '30px' }}>
                {portfolioData.technicalSkills.map((skill, index) => (
                  <div key={index} style={{...styles.card, marginBottom: 0}}>
                    <h4 style={{ margin: '0 0 10px 0', color: theme.textMain }}>{skill.category}</h4>
                    <p style={{ margin: 0, color: theme.textMuted, fontSize: '0.95rem', lineHeight: '1.6' }}>{skill.items}</p>
                  </div>
                ))}
              </div>

              <h3 style={{ margin: '35px 0 15px 0', color: theme.primary, paddingLeft: '8px' }}>Soft Skills</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                {portfolioData.softSkills.map((skill, index) => (
                  <div key={index} style={{...styles.card, marginBottom: 0, textAlign: 'center'}}>
                    <h4 style={{ margin: 0, color: theme.textMain, fontSize: '1.1rem' }}>{skill.category}</h4>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'Experience' && (
            <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
              {portfolioData.experience.map((job, index) => (
                <div key={index} style={styles.card}>
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
            <div style={{ ...styles.projectGrid, animation: 'fadeIn 0.5s ease-in' }}>
              {portfolioData.projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          )}
        </main>

        <footer style={{ textAlign: 'center', marginTop: '60px', color: theme.textMuted, fontSize: '0.8rem' }}>
          © {new Date().getFullYear()} Nethmi Wijeweera. Built with React.
        </footer>
      </div>
    </div>
  );
}