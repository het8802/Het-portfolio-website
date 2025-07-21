'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link as ScrollLink } from 'react-scroll'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import Background3D from '@/components/Background3D'
import Hero3D from '@/components/Hero3D'
import ScrollAnimation from '@/components/ScrollAnimation'
import Card3D from '@/components/Card3D'
import Text3D from '@/components/Text3D'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <main className="min-h-screen relative overflow-hidden">
      <Background3D />
      
      {/* Hero Section */}
      <section id="hero" className="h-screen flex items-center justify-center relative overflow-hidden">
        <Hero3D />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          <h1 className="text-6xl sm:text-8xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Het Tikawala
          </h1>
          <h2 className="text-2xl sm:text-3xl mb-4">Software Engineer</h2>
          <div className="flex items-center justify-center mb-8">
            <FaMapMarkerAlt className="mr-2" />
            <span>San Jose, CA</span>
          </div>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/het8802" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-primary transition-colors">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/het-tikawala/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-primary transition-colors">
              <FaLinkedin />
            </a>
            <a href="mailto:hettikawala99@gmail.com" className="text-2xl hover:text-primary transition-colors">
              <FaEnvelope />
            </a>
            <a href="tel:+15109936784" className="text-2xl hover:text-primary transition-colors">
              <FaPhone />
            </a>
          </div>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background-end-rgb opacity-50" />
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <ScrollAnimation>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Text3D text="About Me" />
            <p className="text-lg mb-6">
              I'm a Computer Science student at San Jose State University with a strong passion for software development.
              My experience spans across full-stack development, cloud technologies, and modern software engineering practices.
              I'm particularly interested in building scalable applications and leveraging AI to solve real-world problems.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card3D className="card">
                <h3 className="subheading">Education</h3>
                <p className="mb-2 font-bold">B.S., Computer Science</p>
                <p className="mb-2">San Jose State University</p>
                <p className="mb-2">GPA: 3.74 (Dean's Scholar)</p>
                <p className="mb-2">Expected Graduation: May 2025</p>
                <p className="text-sm mt-4">Relevant Coursework:</p>
                <p className="text-sm">Data Structures and Algorithms, Object Oriented Design, Database Management Systems, Social Network Analysis, Operating Systems, Information Security, Server Side Programming, Mobile Application Development</p>
              </Card3D>
              <Card3D className="card">
                <h3 className="subheading">Skills</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-bold mb-2">Programming Languages:</p>
                    <div className="flex flex-wrap gap-2">
                      {['Java', 'Kotlin', 'JavaScript', 'Python', 'PHP', 'SQL', 'HTML', 'CSS', 'TypeScript', 'Go'].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-primary/10 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-bold mb-2">Frameworks:</p>
                    <div className="flex flex-wrap gap-2">
                      {['Spring Boot', 'Express.js', 'Node.js', 'React', 'React Native', 'Redux'].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-primary/10 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-bold mb-2">Cloud & DevOps:</p>
                    <div className="flex flex-wrap gap-2">
                      {['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'CI/CD', 'Jenkins'].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-primary/10 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card3D>
            </div>
          </motion.div>
        </ScrollAnimation>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding">
        <ScrollAnimation delay={0.2}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Text3D text="Experience" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card3D className="card">
                <h3 className="text-xl font-bold">Software Development Engineer Intern</h3>
                <p className="text-primary">Expedia Group • Seattle, WA • May 2024 - July 2024</p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li>Co-designed and built back-end APIs for vertical content format for Expedia's mobile app in less than 10 weeks using Java, Kotlin, and Spring Boot & leveraging Redis, Kafka, and GraphQL for scalability.</li>
                  <li>Enhanced data retrieval efficiency by 32% through optimized, selective GraphQL querying.</li>
                  <li>Automated ingestion of 10,000+ user events per second into the HIVE database for analytics by integrating Kafka with HIVE.</li>
                </ul>
              </Card3D>
              
              <Card3D className="card">
                <h3 className="text-xl font-bold">Frontend Developer Intern</h3>
                <p className="text-primary">Alpha Gen AI • Remote • June 2023 - July 2023</p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li>Engineered a responsive frontend for the ParentCoach.AI app in React Native, achieving 100% fidelity to Figma designs.</li>
                  <li>Improved app UI/UX through iterative design improvements, directly collaborating with the CEO.</li>
                  <li>Leveraged Redux to manage the application state, enabling robust features like user authentication, settings, and real-time notifications.</li>
                </ul>
              </Card3D>
              
              <Card3D className="card">
                <h3 className="text-xl font-bold">Software Developer Intern</h3>
                <p className="text-primary">Stige • Remote • May 2022 - August 2022</p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li>Collaborated on a MERN stack based web application in an agile team environment, supporting 350+ daily users.</li>
                  <li>Boosted data retrieval efficiency by 21% by orchestrating MongoDB database optimizations.</li>
                  <li>Fortified security by integrating Bcrypt for advanced data encryption, safeguarding sensitive information.</li>
                  <li>Deployed Docker to containerize microservices for API creation & integrations and secure JSON Web Tokens (JWT) based user authentication, driving scalability, consistency, and smooth deployment.</li>
                </ul>
              </Card3D>
              
              <Card3D className="card">
                <h3 className="text-xl font-bold">Director of Business Affairs</h3>
                <p className="text-primary">A.S. SJSU</p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li>Chair of A.S operations committee and vice chair of A.S Finance committee.</li>
                  <li>Devised strategies to analyze the operations and revenue of all the departments of A.S. SJSU.</li>
                  <li>Implemented leadership skills and strategies to create optimal operations for the organization.</li>
                  <li>Hired efficient, effective, and skillful student staff for the organization.</li>
                </ul>
              </Card3D>
            </div>
          </motion.div>
        </ScrollAnimation>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding">
        <ScrollAnimation delay={0.4}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Text3D text="Projects" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <Card3D className="card">
                <h3 className="text-xl font-bold">K-Means Clustering Visualization</h3>
                <p className="text-primary">Web Development • Oct 2023 - Dec 2023</p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li>Engineered a website using PHP, Python & MySQL to visualize the K-Means clustering algorithm.</li>
                  <li>Utilized Xdebug for PHP profiling, achieving &lt;50 ms real-time visualization.</li>
                  <li>Designed website allowing users to input training and testing data to test and visualize the algorithm.</li>
                </ul>
              </Card3D>
              
              <Card3D className="card">
                <h3 className="text-xl font-bold">AIR PICTIONARY SOFTWARE</h3>
                <p className="text-primary">AR project • June 2020 - Sept 2020</p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li>Created software with OpenCV and Python with 93% accuracy in digital pen movement detection on screen.</li>
                  <li>Adopted by 28 teachers, aiding 600+ students in remote learning and concept visualization.</li>
                  <li>Received 89% positive educator feedback for enhancing online class interaction.</li>
                </ul>
              </Card3D>
              
              <Card3D className="card">
                <h3 className="text-xl font-bold">NodeFlix: Movie Recommendation System</h3>
                <p className="text-primary">Social Network Analysis project • Sept 2024 - Dec 2024</p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li>Built a movie recommendation system using weighted heterogeneous graphs to suggest films based on feature similarities.</li>
                  <li>Processed 8,000+ rows with 10+ features; constructed 2-hop ego graphs to explore relationships between movies and attributes.</li>
                  <li>Developed an algorithm comparing feature overlap using Python, NetworkX, and Pandas for efficient graph construction.</li>
                </ul>
              </Card3D>
              
              <Card3D className="card">
                <h3 className="text-xl font-bold">My Campus Explorer App</h3>
                <p className="text-primary">Android Development • Sept 2024 - Dec 2024</p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li>Developed an Android app using Java, SQLite, and XML to help new students navigate SJSU's 154-acre, 55-building campus.</li>
                  <li>Integrated Google Maps API for real-time tracking and displayed buildings with color-coded pins for unexplored and explored.</li>
                  <li>Utilized SQLite for persistent data storage to track visited buildings accurately across user sessions.</li>
                </ul>
              </Card3D>
              
              <Card3D className="card">
                <h3 className="text-xl font-bold">Exo-Planetary Data Analysis</h3>
                <p className="text-primary">WhiteHat Jr. • Aug 2020 - Dec 2020</p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li>Utilized Python, pandas, and scikit-learn to analyze and refine datasets for planetary features.</li>
                  <li>Employed seaborn and matplotlib to visualize data trends and patterns.</li>
                  <li>Developed machine learning models using XGBoost, RandomForestTrees, and PyTorch to predict planet habitability.</li>
                  <li>Achieved accurate predictions by leveraging advanced machine learning algorithms and techniques.</li>
                </ul>
              </Card3D>
            </div>
          </motion.div>
        </ScrollAnimation>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="section-padding">
        <ScrollAnimation delay={0.5}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Text3D text="Leadership & Extra-Curriculars" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card3D className="card">
                <h3 className="text-xl font-bold">Academic Leadership</h3>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li>Director of Business Affairs (Associated Students, SJSU)</li>
                  <li>Teaching Associate (CS46B class, SJSU)</li>
                  <li>Peer Mentor (SJSU)</li>
                  <li>Lab Instructor (CS46A & MATH 19 class, SJSU)</li>
                </ul>
              </Card3D>
              
              <Card3D className="card">
                <h3 className="text-xl font-bold">Student Organizations</h3>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li>VP FINANCE (ISO-SJSU, 2022-23)</li>
                  <li>Secretary (ISO-SJSU, 2023-24)</li>
                  <li>Hackathon Chair (CS club, SJSU)</li>
                </ul>
              </Card3D>
            </div>
          </motion.div>
        </ScrollAnimation>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <ScrollAnimation delay={0.6}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Text3D text="Get in Touch" />
            <p className="text-lg mb-8 backdrop-blur-sm bg-white/10 dark:bg-dark/10 rounded-lg p-6 inline-block">
              I'm always open to discussing new opportunities and collaborations.
            </p>
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
              <a href="mailto:hettikawala99@gmail.com" className="text-primary hover:text-secondary transition-colors">
                hettikawala99@gmail.com
              </a>
              <a href="tel:+15109936784" className="text-primary hover:text-secondary transition-colors">
                +1 (510) 993-6784
              </a>
              <a href="https://www.linkedin.com/in/het-tikawala/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors">
                LinkedIn
              </a>
              <a href="https://github.com/het8802" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors">
                GitHub
              </a>
            </div>
          </motion.div>
        </ScrollAnimation>
      </section>
    </main>
  )
} 
