import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

function TypewriterText({ text, delay = 0 }) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 50) // Adjust speed here (lower = faster)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      {displayText}
    </motion.div>
  )
}

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [currentExperienceIndex, setCurrentExperienceIndex] = useState(0)

  const experiences = [
    {
      title: "University of Connecticut",
      role: "Resident Assistant",
      location: "Storrs, CT",
      date: "Aug 2024 - Present",
      bullets: [
        "Oversee 40 residents, guiding them through their first year of university life, and selected as one of fewer than 100 RAs from a pool of over 1,000 applicants.",
        "Developed strong communication and problem-solving skills by fostering community through organizing programs, resolving concerns, and promoting a positive living environment."
      ]
    },
    {
      title: "Southern Glazer's Wine & Spirits",
      role: "Driver Helper",
      location: "Norton, MA",
      date: "Dec 2024 - Jan 2025 · On Call",
      bullets: [
        "Assisted with product deliveries by ensuring timely and accurate order fulfillment, loading and unloading materials safely, and maintaining high customer satisfaction."
      ]
    },
    {
      title: "Next-Gen Supply Group",
      role: "Chemical Warehouse Worker",
      location: "Mansfield, MA",
      date: "June 2024 - Aug 2024 · Full-time",
      bullets: [
        "Enhanced understanding of workflow coordination and product handling standards, contributing to efficient operations and timely order delivery",
        "Operated semi-automated machines to fill various container sizes and work closely with a team"
      ]
    },
    {
      title: "Parkade Cinemas",
      role: "Movie Theater Employee",
      location: "Manchester, CT",
      date: "June 2023 - Aug 2023 · Full-time",
      bullets: [
        "Delivered a seamless customer experience by efficiently managing transactions, concessions, and guest interactions, enhancing overall customer satisfaction and repeat business.",
        "Assisted in daily operations, including inventory management and sales tracking, to optimize revenue and improve service efficiency."
      ]
    }
  ]

  const scrollToSection = (section) => {
    setActiveSection(section)
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const nextExperience = () => {
    if (currentExperienceIndex + 3 < experiences.length) {
      setCurrentExperienceIndex(prev => prev + 1)
    }
  }

  const previousExperience = () => {
    if (currentExperienceIndex > 0) {
      setCurrentExperienceIndex(prev => prev - 1)
    }
  }

  return (
    <div className="min-h-screen bg-primary text-textPrimary">
      {/* Navigation */}
      <nav className="fixed w-full bg-primary/90 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-secondary text-xl font-bold">Garrett Bartko</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['home', 'experience', 'projects', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      activeSection === section
                        ? 'text-secondary'
                        : 'text-textSecondary hover:text-textPrimary'
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-secondary"><TypewriterText text="Garrett Bartko" /></span>
            </h1>
            <p className="text-xl md:text-2xl text-textSecondary mb-4">
              <TypewriterText text="Student at the University of Connecticut" delay={1} />
            </p>
            <p className="text-lg md:text-xl text-textSecondary mb-8">
              <TypewriterText text="Major: Analytics & Information Management" delay={2} />
            </p>
            <motion.div 
              className="flex flex-col items-center space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 3 }}
            >
              <div className="flex justify-center space-x-4">
                <a
                  href="https://github.com/garrett-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-textSecondary hover:text-secondary transition-colors"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/garrett-bartko/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-textSecondary hover:text-secondary transition-colors"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="mailto:garrett.bartko@uconn.edu"
                  className="text-textSecondary hover:text-secondary transition-colors"
                >
                  <FaEnvelope size={24} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-4 bg-tertiary">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
            <div className="relative">
              <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
                <AnimatePresence mode="wait">
                  {experiences.slice(currentExperienceIndex, currentExperienceIndex + 3).map((exp, index) => (
                    <motion.div
                      key={exp.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-primary p-6 rounded-lg"
                    >
                      <h3 className="text-xl font-bold text-secondary mb-2">{exp.title}</h3>
                      <p className="text-textSecondary mb-1">{exp.role} {exp.location && `· ${exp.location}`}</p>
                      <p className="text-sm text-textSecondary mb-4">{exp.date}</p>
                      <ul className="list-disc list-inside text-textSecondary">
                        {exp.bullets.map((bullet, i) => (
                          <li key={i}>{bullet}</li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={previousExperience}
                className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors ${
                  currentExperienceIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                }`}
                disabled={currentExperienceIndex === 0}
              >
                <FaChevronLeft className="text-white text-xl" />
              </button>
              <button
                onClick={nextExperience}
                className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors ${
                  currentExperienceIndex + 3 >= experiences.length ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                }`}
                disabled={currentExperienceIndex + 3 >= experiences.length}
              >
                <FaChevronRight className="text-white text-xl" />
              </button>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Technical Projects</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {/* Project Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-tertiary p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold text-secondary mb-2">SIEM System Development</h3>
                <p className="text-sm text-textSecondary mb-2">December 2024 - January 2025</p>
                <p className="text-textSecondary mb-4">
                  Developed a home lab using Elastic SIEM in a Kali VM to monitor live security attacks and analyze network traffic.
                </p>
                <ul className="list-disc list-inside text-textSecondary mb-4 text-sm">
                  <li>Set up Elastic SIEM in Kali VM for live security monitoring</li>
                  <li>Configured Elastic agent for network data forwarding</li>
                  <li>Generated and analyzed security events using nmap</li>
                  <li>Created security event visualization dashboard</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary rounded-full text-sm text-textSecondary">
                    Elastic SIEM
                  </span>
                  <span className="px-3 py-1 bg-primary rounded-full text-sm text-textSecondary">
                    Kali Linux
                  </span>
                  <span className="px-3 py-1 bg-primary rounded-full text-sm text-textSecondary">
                    Network Security
                  </span>
                </div>
              </motion.div>

              {/* Project Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-tertiary p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold text-secondary mb-2">Vulnerability Scanning</h3>
                <p className="text-sm text-textSecondary mb-2">November 2024 - December 2024</p>
                <p className="text-textSecondary mb-4">
                  Conducted comprehensive vulnerability assessments using Burp Suite on intentionally vulnerable web applications.
                </p>
                <ul className="list-disc list-inside text-textSecondary mb-4 text-sm">
                  <li>Performed vulnerability scanning with Burp Suite</li>
                  <li>Analyzed security issues in Juice Shop application</li>
                  <li>Identified and documented potential security risks</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary rounded-full text-sm text-textSecondary">
                    Burp Suite
                  </span>
                  <span className="px-3 py-1 bg-primary rounded-full text-sm text-textSecondary">
                    Web Security
                  </span>
                  <span className="px-3 py-1 bg-primary rounded-full text-sm text-textSecondary">
                    Penetration Testing
                  </span>
                </div>
              </motion.div>

              {/* Project Card 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-tertiary p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold text-secondary mb-2">SOC Home Lab</h3>
                <p className="text-sm text-textSecondary mb-2">October 2024</p>
                <p className="text-textSecondary mb-4">
                  Built a home Security Operations Center lab environment using open-source tools to simulate real-world security monitoring.
                </p>
                <ul className="list-disc list-inside text-textSecondary mb-4 text-sm">
                  <li>Configured pfSense and Active Directory</li>
                  <li>Implemented SOC analyst workflow simulation</li>
                  <li>Managed security monitoring dashboards and logs</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary rounded-full text-sm text-textSecondary">
                    pfSense
                  </span>
                  <span className="px-3 py-1 bg-primary rounded-full text-sm text-textSecondary">
                    Active Directory
                  </span>
                  <span className="px-3 py-1 bg-primary rounded-full text-sm text-textSecondary">
                    SOC Operations
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 bg-tertiary">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
            <p className="text-textSecondary mb-8">
              I'm currently pursuing my degree in Analytics & Information Management at UConn.
              Feel free to reach out for academic collaborations or opportunities!
            </p>
            <div className="flex flex-col items-center space-y-6">
              <a
                href="mailto:garrett.bartko@uconn.edu"
                className="inline-block px-8 py-3 bg-transparent border-2 border-secondary text-secondary rounded-lg hover:bg-secondary/10 transition-colors"
              >
                Contact Me
              </a>
              <a
                href="/REAL_RESUME_Garrett (6).pdf"
                download="Garrett_Bartko_Resume.pdf"
                className="inline-flex items-center px-8 py-4 bg-secondary text-primary rounded-lg hover:bg-secondary/90 transition-colors text-lg font-medium"
              >
                <FaDownload className="mr-3" size={20} />
                Download Resume
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-textSecondary">
          <p>© 2025 Garrett Bartko. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App 