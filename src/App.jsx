import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [loading, setLoading] = useState(true)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handleNavClick = (section) => {
    setActiveSection(section)
    setMobileMenuOpen(false)
  }

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
        <h2>Loading Portfolio...</h2>
      </div>
    )
  }

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-brand">Hruthik Pavarala</div>
        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={() => handleNavClick('home')} className={activeSection === 'home' ? 'active' : ''}>Home</a>
          <a href="#about" onClick={() => handleNavClick('about')} className={activeSection === 'about' ? 'active' : ''}>About</a>
          <a href="#education" onClick={() => handleNavClick('education')} className={activeSection === 'education' ? 'active' : ''}>Education</a>
          <a href="#skills" onClick={() => handleNavClick('skills')} className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
          <a href="#projects" onClick={() => handleNavClick('projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
          <a href="#experience" onClick={() => handleNavClick('experience')} className={activeSection === 'experience' ? 'active' : ''}>Experience</a>
          <a href="#contact" onClick={() => handleNavClick('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
        </div>
        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          <i className={mobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Hi, I'm <span className="highlight">Hruthik Krishna Pavarala</span></h1>
          <h2>Information Technology Student</h2>
          <p>Passionate about AI, Machine Learning, and Web Development</p>
          <div className="social-links">
            <a href="mailto:hruthik733@gmail.com" className="social-btn">
              <i className="fas fa-envelope"></i> Email
            </a>
            <a href="https://www.linkedin.com/in/hruthik-pavarala-94595a25b" target="_blank" rel="noopener noreferrer" className="social-btn">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a href="https://github.com/hruthik733" target="_blank" rel="noopener noreferrer" className="social-btn">
              <i className="fab fa-github"></i> GitHub
            </a>
            <a href="tel:+917671978733 " className="social-btn">
              <i className="fas fa-phone"></i> +91-7671978733
            </a>
          </div>
          <button className="cta-button">View My Projects</button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>I am an enthusiastic IT student with a strong background in Python, Java, and C++, complemented by hands-on experience in data analysis and model development. My passion lies in exploring emerging technologies, particularly AI and large language models, to address real-world challenges.   I am committed to staying current with the latest tech trends and continuously improving my skills.</p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <h2>Experience</h2>
        <div className="experience-card">
          <div className="experience-header">
            <h3>Web Developer Intern</h3>
            <p className="experience-company">Chitti Motors Private Limited, Vijayawada</p>
            <p className="experience-date">February, 2025 - Present</p>
          </div>
          <p>Chitti Motors is an electric cycle startup focused on innovative, eco-friendly mobility solutions.</p>
          <ul className="experience-details">
            <li>Dynamic 3D Visualization: Enables users to input their height and view a proportionally scaled 3D human model alongside the electric cycle for accurate size assessment</li>
            <li>Augmented Reality Integration: Allows users to project the 3D cycle model into real-world environments using their device camera for an immersive experience</li>
          </ul>
          <a href="https://chitti-e6996.web.app/pages/vr-view.html" target="_blank" rel="noopener noreferrer" className="experience-link">Live Demo</a>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education">
        <h2>Education</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>B.Tech in Information Technology</h3>
              <h4>Velagapudi Ramakrishna Siddhartha Engineering College, Kanuru</h4>
              <p>CGPA: 8.52</p>
              <p className="timeline-date">August, 2022 - May, 2026</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Intermediate M.P.C</h3>
              <h4>Narayana Junior College, Vijayawada</h4>
              <p>Grade: 94%</p>
              <p className="timeline-date">April, 2020 - March, 2022</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>High School</h3>
              <h4>Viswabharathi EM High School, Gudiwada</h4>
              <p>Grade: 99%</p>
              <p className="timeline-date">April, 2019 - March, 2020</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <h2>Skills</h2>
        <div className="skills-container">
          <div className="skill-category">
            <h3>Programming Languages & Databases</h3>
            <div className="skills-grid">
              <div className="skill-card">Python</div>
              <div className="skill-card">Java</div>
              <div className="skill-card">C++</div>
              <div className="skill-card">MySQL</div>
              <div className="skill-card">OOP</div>
              <div className="skill-card">DSA</div>
            </div>
          </div>
          <div className="skill-category">
            <h3>Machine Learning & AI</h3>
            <div className="skills-grid">
              <div className="skill-card">TensorFlow</div>
              <div className="skill-card">PyTorch</div>
              <div className="skill-card">OpenCV</div>
              <div className="skill-card">Chatbots</div>
              <div className="skill-card">Deep Learning</div>
              <div className="skill-card">Ollama Models</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Pneumonia Detection from Chest X-rays</h3>
            <p className="project-date">August, 2024 - December, 2024</p>
            <p>Developed an ensemble model combining VGG19, EfficientNetB0, and DenseNet121 for pneumonia detection.</p>
            <ul className="project-details">
              <li>Developed an ensemble model achieving 93% accuracy for pneumonia detection</li>
              <li>Leveraged Grad-CAM to generate heatmaps for precise localization of affected lung regions</li>
              <li>Optimized performance using the Adam optimizer and fine-tuned model weights</li>
            </ul>
            <a href="https://github.com/hruthik733/Pneumonia_detection_using_feature_level_ensemble" target="_blank" rel="noopener noreferrer" className="project-link">GitHub Repository</a>
          </div>
          <div className="project-card">
            <h3>MoviesNow – Personal Movie Collection Platform</h3>
            <p className="project-date">December, 2024 - January, 2025</p>
            <p>MoviesNow is a personal movie review web application that allows users to log and review movies.</p>
            <ul className="project-details">
              <li>Integrated Google Firebase authentication and Firestore as a real-time database</li>
              <li>Developed a feature-rich admin panel for managing movie collections</li>
              <li>Integrated the OMDb API to fetch detailed movie information</li>
            </ul>
            <a href="https://movieshub-4u.web.app/" target="_blank" rel="noopener noreferrer" className="project-link">Live Demo</a>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="certifications">
        <h2>Certifications</h2>
        <div className="certifications-grid">
          <div className="certification-card">
            <h3>The Joy of Computing using Python</h3>
            <p>NPTEL</p>
          </div>
          <div className="certification-card">
            <h3>PCAP: Programming Essentials in Python</h3>
            <p>OPENEDG PYTHON INSTITUTE</p>
          </div>
          <div className="certification-card">
            <h3>CPA: Programming Essentials in C++</h3>
            <p>C++ INSTITUTE</p>
          </div>
          <div className="certification-card">
            <h3>Introduction to Generative AI</h3>
            <p>GOOGLE CLOUD</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <form className="contact-form">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
          <div className="contact-info">
            <p><i className="fas fa-envelope"></i> hruthik733@gmail.com</p>
            <p><i className="fas fa-map-marker-alt"></i> Vijayawada</p>
            <p><i className="fab fa-linkedin"></i> <a href="https://www.linkedin.com/in/hruthik-pavarala-94595a25b" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 Hruthik Pavarala. All rights reserved.</p>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button className="scroll-top-btn" onClick={scrollToTop}>
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </div>
  )
}

export default App
