import { useState, useEffect } from 'react'
import './App1.css'

import { projects } from "./data/projects";
import ProjectCard from "./components/ProjectCard";
import { certifications } from "./data/certifications";
import CertificationCard from "./components/CertificationCard";
import { skillCategories } from "./data/skills";
import SkillCategory from "./components/SkillCategory";


function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [loading, setLoading] = useState(true)
  const [typingText, setTypingText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [textIndex, setTextIndex] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const texts = [
    'Information Technology Student',
    'Computer Science Enthusiast'
  ]

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handleNavClick = (section) => {
    setActiveSection(section)
    setMobileMenuOpen(false)
  }

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, message } = formData
    const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`
    const whatsappUrl = `https://wa.me/917671978733?text=${whatsappMessage}`
    window.open(whatsappUrl, '_blank')
    setFormData({ name: '', email: '', message: '' })
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

  useEffect(() => {
    const currentText = texts[textIndex]
    const speed = isDeleting ? 30 : 60

    if (!isDeleting && typingText === currentText) {
      setTimeout(() => setIsDeleting(true), 1000)
      return
    }

    if (isDeleting && typingText === '') {
      setIsDeleting(false)
      setTextIndex((prev) => (prev + 1) % texts.length)
      return
    }

    const timer = setTimeout(() => {
      if (isDeleting) {
        setTypingText(currentText.substring(0, typingText.length - 1))
      } else {
        setTypingText(currentText.substring(0, typingText.length + 1))
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [typingText, isDeleting, textIndex, texts])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader-content">
          <div className="loader-logo">HRUTHIK PAVARALA</div>
          <div className="loader-subtitle">Information Technology Student</div>
          <div className="loader-bar">
            <div className="loader-progress"></div>
          </div>
        </div>
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
          <h1>Hi, I'm <span className="highlight">Hruthik Pavarala</span></h1>
          <h2 className="typing-text">{typingText}<span className="cursor">|</span></h2>
          <p>Passionate about AI, Machine Learning, and Web Development</p>
          <div className="social-links">
            <a href="mailto:hruthik733@gmail.com" className="social-btn">
              <i className="fas fa-envelope"></i> Email
            </a>
            <a href="https://www.linkedin.com/in/hruthik-pavarala" target="_blank" rel="noopener noreferrer" className="social-btn">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a href="https://github.com/hruthik733" target="_blank" rel="noopener noreferrer" className="social-btn">
              <i className="fab fa-github"></i> GitHub
            </a>
            <a href="tel:+917671978733" className="social-btn">
              <i className="fas fa-phone"></i> +91-7671978733
            </a>
          </div>
          <button className="cta-button" onClick={scrollToProjects}>View My Projects</button>
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
            <p className="experience-date">February, 2025 - March, 2025</p>
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

          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              category={category}
            />
          ))}

        </div>

      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2>Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
            />
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="certifications">

        <h2>Certifications</h2>

        <div className="certifications-grid">

          {certifications.map((certification, index) => (
            <CertificationCard
              key={index}
              certification={certification}
            />
          ))}

        </div>

      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="name"
              placeholder="Name" 
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input 
              type="email" 
              name="email"
              placeholder="Email" 
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <textarea 
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
          <div className="contact-info">
            <p><i className="fas fa-envelope"></i> hruthik733@gmail.com</p>
            <p><i className="fas fa-map-marker-alt"></i> Vijayawada</p>
            <p><i className="fab fa-linkedin"></i> <a href="https://www.linkedin.com/in/hruthik-pavarala" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
            <p><i className="fab fa-github"></i> <a href="https://github.com/hruthik733" target="_blank" rel="noopener noreferrer">GitHub</a></p>
            <p><i className="fas fa-phone"></i> <a href="tel:+917671978733">+91-7671978733</a></p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 Hruthik Pavarala. All rights reserved.</p>
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
