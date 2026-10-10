import './App.css'
import { motion } from "motion/react";

const projects = [
  {
    number: '01',
    name: 'TravelNest',
    image: '/images/travelnest1.jpeg',
    category: 'FULL STACK WEB DEVELOPMENT',
    description:
      'A travel listing platform with property listings, authentication, image uploads and database integration.',
    stack: ['Node.js', 'Express', 'MongoDB', 'EJS'],
    link: 'https://travelnest-lca9.onrender.com/listings',
  },
  {
    number: '02',
    name: 'RIPPLE',
    image: '/images/ripple1.jpeg',
    category: 'HACKATHON PROJECT',
    description:
      'A decision intelligence prototype that simulates campus disruptions and helps explore their effects across connected systems.',
    stack: ['React', 'TypeScript', 'Data Visualization'],
    link: 'https://hackathons-3wgspw9dp-fardeen-codes07.vercel.app/',
  },
  {
    number: '03',
    name: 'SoundSpace',
    image: '/images/soundverse_img.png',
    category: 'FRONTEND DEVELOPMENT',
    description:
      'A music-inspired frontend project focused on interface design, layout and user experience.',
    stack: ['HTML', 'CSS'],
    link: 'https://fardeen-codes07.github.io/SoundSpace/',
  },
  {
    number: '04',
    name: 'Movie Recommendation System',
    image: '',
    category: 'PYTHON PROJECT',
    description:
      'A movie recommendation application built with Python and Streamlit.',
    stack: ['Python', 'Streamlit'],
    link: '',
  },
];



const skills = [
  'JavaScript',
  'React',
  'Node.js',
  'Express.js',
  'MongoDB',
  'HTML & CSS',
  'Python',
  'C++',
  'Git & GitHub',
]

function App() {
  return (
    <main className="min-h-screen bg-[#0c0e0d] text-[#f4f5f4]">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0c0e0d]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#home" className="text-xl font-bold tracking-tight transition-all duration-300 hover:-translate-y-1 active:scale-95">
            FM<span className="text-lime-400">.</span>
          </a>

          <div className="flex gap-3 text-xs text-gray-400 sm:gap-8 sm:text-sm">
            <a href="#about" className="hover:text-lime-400 transition-all duration-300 hover:-translate-y-1 active:scale-95">About</a>
            <a href="#projects" className="hover:text-lime-400 transition-all duration-300 hover:-translate-y-1 active:scale-95">Projects</a>
            <a href="#contact" className="hover:text-lime-400 transition-all duration-300 hover:-translate-y-1 active:scale-95">Contact</a>
          </div>
        </nav>
      </header>

      <section
        id="home"
        className="mx-auto flex min-h-[82vh] max-w-6xl flex-col justify-center px-6 py-24"
      >
        <p className="mb-6 flex items-center gap-3 text-sm text-lime-400">
          <span className="h-2 w-2 rounded-full bg-lime-400" />
          DEVELOPER PORTFOLIO · 2026
        </p>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl text-5xl font-semibold leading-[1.08] tracking-tight sm:text-7xl lg:text-7xl"
        >
          Fardeen Mohammed<br/>
          <span className="text-4xl text-lime-400">Developer in progress.</span>
        </motion.h1>

        <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
          I'm Fardeen, a B.Tech AI & ML student at VIT Chennai,
          exploring full-stack development and building practical
          projects through code, experimentation and collaboration.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          
          <a
            href="/Fardeen_Mohammed_Resume.pdf"
            download="Fardeen_Mohammed_Resume.pdf"
            className="rounded-full border border-white/20 px-6 py-3 text-white transition hover:border-lime-400 hover:text-lime-400 transition-all duration-300 hover:-translate-y-1 active:scale-95"
          >
            Download Resume ↓
          </a>

          <a
            href="#projects"
            className="rounded-full bg-lime-400 px-6 py-3 font-medium text-black transition hover:bg-lime-300 transition-all duration-300 hover:-translate-y-1 active:scale-95"
          >
            Explore my work ↘
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/20 px-6 py-3 text-white transition hover:border-lime-400 transition-all duration-300 hover:-translate-y-1 active:scale-95"
          >
            Get in touch
          </a>
        </div>

        <div className="mt-20 grid max-w-2xl grid-cols-2 gap-8 border-t border-white/10 pt-8">
          <div>
            <p className="text-3xl font-semibold">04+</p>
            <p className="mt-2 text-sm text-gray-500">Projects to explore</p>
          </div>
          <div>
            <p className="text-3xl font-semibold">Top 50</p>
            <p className="mt-2 text-sm text-gray-500">
              Among 200 hackathon teams
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-white/10">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm text-lime-400">01 / ABOUT ME</p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Curious by nature.
              <br />
              Builder by choice.
            </h2>
          </div>

          <div>
            <p className="leading-8 text-gray-400">
              I'm a student at VIT Chennai who enjoys turning ideas into
              working applications. From full-stack web apps to hackathon
              prototypes, I learn by building, debugging and improving
              real projects.
            </p>

            <h3 className="mb-4 mt-8 font-medium">TECH I WORK WITH</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="mb-4 text-sm text-lime-400">02 / SELECTED WORK</p>

          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
              Things I've built.
            </h2>
            <p className="text-sm text-gray-500">
              A selection of projects and experiments.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {projects.map((project) => (
            <motion.a
              key={project.number}
              href={project.link || undefined}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: Number(project.number) * 0.1,
                ease: "easeOut",
              }}
              onClick={(e) => {
                if (!project.link) e.preventDefault();
              }}
              className="group block cursor-pointer rounded-2xl border border-white/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-lime-400 hover:bg-lime-400/[0.03]"
            >
                
                {project.image && (
                  <img
                    src={project.image}
                    alt={`${project.name} screenshot`}
                    loading="lazy"
                    className="mb-8 aspect-video w-full rounded-xl border border-white/10 object-cover object-top"
                  />
                )}



                <div className="mb-12 flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    / {project.number}
                  </span>
                  <span className="text-lime-400 transition group-hover:translate-x-1">
                    ↗
                  </span>
                </div>

                <p className="mb-3 text-xs tracking-[0.16em] text-lime-400">
                  {project.category}
                </p>
                <h3 className="text-2xl font-semibold">{project.name}</h3>
                <p className="mt-4 min-h-20 leading-7 text-gray-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-white/[0.06] px-3 py-1.5 text-xs text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {project.link ? (
                  <span
                    className="mt-8 inline-block text-sm text-white underline decoration-lime-400 underline-offset-4 hover:text-lime-400"
                  >
                    View project →
                  </span>
                ) : (
                  <span className="mt-8 inline-block text-sm text-gray-500">
                    Project details coming soon
                  </span>
                )}
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="mb-4 text-sm text-lime-400">03 / ACHIEVEMENTS</p>
          <div className="rounded-2xl border border-lime-400/20 bg-lime-400/[0.04] p-8 sm:p-12">
            <p className="text-5xl font-semibold text-lime-400">Top 50</p>
            <h3 className="mt-4 text-2xl font-medium">RIPPLE Hackathon Project</h3>
            <p className="mt-3 max-w-2xl leading-7 text-gray-400">
              Our team placed among the top 50 out of 200 teams with RIPPLE,
              a decision intelligence and scenario simulation prototype
              for campus operations.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="mb-5 text-sm text-lime-400">04 / CONTACT</p>
          <h2 className="max-w-3xl text-5xl font-semibold tracking-tight sm:text-7xl">
            Have an opportunity?
            <br />
            <span className="text-gray-500">Let's connect.</span>
          </h2>
          <p className="mt-6 max-w-lg leading-7 text-gray-400">
            I'm interested in opportunities where I can contribute,
            collaborate with others and grow as a developer.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/in/fardeen-mohammed07"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-lime-400 px-6 py-3 font-medium text-black hover:bg-lime-300 transition-all duration-300 hover:-translate-y-1 active:scale-95"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/fardeen-codes07"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 hover:border-lime-400 transition-all duration-300 hover:-translate-y-1 active:scale-95"
            >
              GitHub ↗
            </a>
            
            <a
              href="mailto:fardeen.tvm@gmail.com"
              className="rounded-full border border-white/20 px-6 py-3 transition hover:border-lime-400 transition-all duration-300 hover:-translate-y-1 active:scale-95"
            >
              Email me ↗
            </a>
            
            <a
              href="/Fardeen_Mohammed_Resume.pdf"
              download="Fardeen_Mohammed_Resume.pdf"
              className="rounded-full border border-white/20 px-6 py-3 text-white transition hover:border-lime-400 transition-all duration-300 hover:-translate-y-1 active:scale-95"
            >
              Download Resume ↓
            </a>


          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-6">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-3 text-sm text-gray-500">
          <p>Designed & built by Fardeen.</p>
          <a href="#home" className="hover:text-lime-400 transition-all duration-300 hover:-translate-y-1 active:scale-95">
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  )
}

export default App
