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
            FM<span className="text-violet-400">.</span>
          </a>

          
            <div className="flex gap-4 text-sm text-gray-400 sm:gap-8">
              <a href="#about" className="hover:text-violet-400">About</a>
              <a href="#skills" className="hover:text-violet-400">Skills</a>
              <a href="#projects" className="hover:text-violet-400">Projects</a>
              <a href="#contact" className="hover:text-violet-400 ">Contact</a>
            </div>

        </nav>
      </header>

      
      
      <section
        id="home"
        className="mx-auto flex min-h-[82vh] max-w-6xl flex-col justify-center px-6 py-20"
      >

        <div>
          <p className="mb-6 flex items-center gap-3 text-sm text-violet-400">
            <span className="h-2 w-2 rounded-full bg-violet-400" />
            DEVELOPER PORTFOLIO · 2026
          </p>

          <h1 className="text-5xl font-semibold leading-tight tracking-tight sm:text-7xl">
            Fardeen mohammed
            <br />
            <span className="text-3xl text-violet-400 sm:text-4xl">Developer in progress.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
            Hey, I'm Fardeen Mohammed — a B.Tech AI & ML student
            at VIT Chennai, passionate about full-stack development
            and building practical digital experiences.
          </p>

          
          <div className="mt-8 flex flex-wrap items-center gap-5">
            {/* Download Resume */}
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-base font-medium text-white transition-all duration-300 hover:border-violet-400/50 hover:bg-violet-400/10 hover:text-violet-300"
            >
              Download Resume ↓
            </a>

            {/* Explore My Work */}
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-violet-400 px-8 py-4 text-base font-medium text-black transition-all duration-300 hover:bg-violet-300 hover:shadow-[0_0_25px_rgba(139,92,246,0.2)]"
            >
              Explore my work ↘
            </a>

            {/* Get in Touch */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-base font-medium text-white transition-all duration-300 hover:border-violet-400/50 hover:bg-violet-400/10 hover:text-violet-300"
            >
              Get in touch
            </a>
          </div>
        </div>
        <div className="mt-20 grid max-w-2xl grid-cols-2 gap-8 border-t border-white/10 pt-8">
        <div>
          <p className="text-3xl font-semibold">04+</p>
          <p className="mt-2 text-sm text-gray-500">
            Projects to explore
          </p>
        </div>

        <div>
          <p className="text-3xl font-semibold">Top 50</p>
          <p className="mt-2 text-sm text-gray-500">
            Among 200 hackathon teams
          </p>
        </div>
      </div>
      </section>
        
      <section id="about" className="border-t border-white/5">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-5 text-sm tracking-widest text-violet-400">
              01 / ABOUT ME
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              A little about
              <br />
              <span className="text-violet-400">who I am.</span>
            </h2>
            <div className="mt-8 max-w-xl space-y-5 leading-8 text-gray-400">
              <p>
                I'm Fardeen Mohammed, a B.Tech student specializing
                in Artificial Intelligence and Machine Learning at
                VIT Chennai.
              </p>
              <p>
                I enjoy building web applications, exploring new
                technologies and turning ideas into working projects.
                Through full-stack development and hackathons, I'm
                continuously learning and improving my problem-solving
                skills.
              </p>
              <p>
                I'm looking forward to opportunities where I can
                collaborate, contribute to real-world projects and
                grow as a developer.
              </p>
            </div>
            <a
              href="#skills"
              className="mt-8 inline-block text-sm text-violet-400 transition hover:text-violet-300"
            >
              Explore my skills ↘
            </a>
          </div>
          
          <div className="relative mx-auto aspect-square w-[300px] sm:w-[380px] lg:w-[460px]">
  {/* 1. Ambient glow: richer behind the shoulders, long smooth fade into charcoal */}
  <div
    className="pointer-events-none absolute left-[2%] top-[26%] z-0 h-[84%] w-[96%] rounded-full opacity-80 blur-3xl"
    style={{
      background:
        "radial-gradient(ellipse 60% 55% at 50% 60%, rgba(139,92,246,0.38) 0%, rgba(109,74,216,0.22) 30%, rgba(76,47,163,0.10) 55%, transparent 76%)",
    }}
  />

  {/* 2. Background layer: violet circle, thin dotted outline, dot grid */}
  <svg
    className="pointer-events-none absolute inset-0 z-10 h-full w-full overflow-visible"
    viewBox="0 0 100 100"
    fill="none"
    aria-hidden="true"
  >
    <defs>
      <radialGradient id="portrait-circle-fill" cx="0.5" cy="0.68" r="0.62">
        <stop offset="0" stopColor="#6d4ad8" stopOpacity="0.85" />
        <stop offset="0.5" stopColor="#4c2fa3" stopOpacity="0.55" />
        <stop offset="1" stopColor="#1a1233" stopOpacity="0.9" />
      </radialGradient>
    </defs>

    {/* Violet circular background (center 50,60 / r 33) */}
    <circle cx="50" cy="60" r="33" fill="url(#portrait-circle-fill)" />

    {/* Dotted outline: outermost circle, thin and understated */}
    <circle
      cx="50"
      cy="60"
      r="37.5"
      stroke="#a78bfa"
      strokeOpacity="0.45"
      strokeWidth="0.45"
      strokeLinecap="round"
      strokeDasharray="0.01 1.89"
    />

    {/* Dot grid: 7x7, cut along the circle and fading outward */}
    {Array.from({ length: 49 }, (_, i) => {
      const x = 77 + (i % 7) * 2;
      const y = 21 + Math.floor(i / 7) * 2;
      const d = Math.hypot(x - 50, y - 60);
      if (d < 41) return null;
      return (
        <circle
          key={i}
          cx={x}
          cy={y}
          r="0.3"
          fill="#a78bfa"
          opacity={Math.max(0.15, 0.65 - (d - 41) * 0.03)}
        />
      );
    })}
  </svg>

  {/* 3. Portrait: cast shadow on the circle, then the portrait with a faint rim light */}
  <svg
    className="pointer-events-none absolute inset-0 z-20 h-full w-full overflow-visible"
    viewBox="0 0 100 100"
    role="img"
    aria-label="Portrait"
  >
    <defs>
      <image
        id="portrait-img"
        href="/profile-cutout.png"
        x="-5.131"
        y="-6.872"
        width="111.958"
        height="100.084"
        preserveAspectRatio="none"
      />

      {/* Shadow only is output; the portrait is drawn on top of it */}
      <filter id="portrait-shadow" x="-10%" y="-10%" width="120%" height="125%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1.6" />
        <feOffset dy="1.8" result="blurred" />
        <feFlood floodColor="#000" floodOpacity="0.45" />
        <feComposite in2="blurred" operator="in" />
      </filter>

      {/* Rim light: a thin violet edge on upward-facing contours (hair, shoulders) */}
      <filter
        id="portrait-rim"
        x="-5%"
        y="-5%"
        width="110%"
        height="110%"
        colorInterpolationFilters="sRGB"
      >
        <feOffset in="SourceAlpha" dy="0.55" result="below" />
        <feComposite in="SourceAlpha" in2="below" operator="out" result="edge" />
        <feGaussianBlur in="edge" stdDeviation="0.2" result="edgeSoft" />
        <feFlood floodColor="#c4b5fd" floodOpacity="0.5" result="tint" />
        <feComposite in="tint" in2="edgeSoft" operator="in" result="rim" />
        <feMerge>
          <feMergeNode in="SourceGraphic" />
          <feMergeNode in="rim" />
        </feMerge>
      </filter>

      {/* Shadow receiver: the circle only */}
      <clipPath id="portrait-circle-clip">
        <circle cx="50" cy="60" r="33" />
      </clipPath>

      {/* Portrait clip: circle + head window so the head escapes the circle */}
      <clipPath id="portrait-clip">
        <circle cx="50" cy="60" r="33" />
        <rect x="26" y="0" width="48" height="58" />
      </clipPath>
    </defs>

    <g clipPath="url(#portrait-circle-clip)">
      <use href="#portrait-img" filter="url(#portrait-shadow)" />
    </g>

    <g clipPath="url(#portrait-clip)">
      <use href="#portrait-img" filter="url(#portrait-rim)" />
    </g>
  </svg>
</div>

        </div>
      </section>


        <section id="skills" className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <p className="mb-4 text-sm text-violet-400">
              02 / SKILLS
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
              My technical <span className="text-violet-400">toolkit.</span>
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-gray-400">
              Technologies I've used while learning, experimenting
              and building projects.
            </p>

            <div className="mt-12 grid gap-4 sm:grid-cols-2  lg:grid-cols-3">
              {[
                {
                  title: 'Frontend',
                  items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
                },
                {
                  title: 'Backend & Database',
                  items: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'REST APIs'],
                },
                {
                  title: 'Programming & Tools',
                  items: ['Python', 'C++', 'Git', 'GitHub', 'Streamlit'],
                },
              ].map((group) => (
                <div
                  key={group.title}                  
                  className="group rounded-2xl border border-white/[0.06] 
transition-all duration-300 ease-out
hover:-translate-y-1
hover:shadow-[0_8px_24px_rgba(139,92,246,0.12)]bg-white/[0.02] p-7 transition-all duration-300 shadow-[0_0_28px_rgba(139,92,246,0.10)] hover:border-violet-400/50 hover:bg-violet-400/[0.025] hover:shadow-[0_0_40px_rgba(139,92,246,0.18)] sm:p-9"
                >
                  <h3 className="text-xl font-semibold">
                    {group.title}
                  </h3>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-white/10 px-3 py-2 text-sm text-gray-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


      <section id="projects" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="mb-4 text-sm text-violet-400">02 / SELECTED WORK</p>

          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
              Things I've built.
            </h2>
            <p className="text-sm text-gray-500">
              A selection of projects and experiments.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 ">
            {projects.map((project) => (
            <motion.article
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
              className="group rounded-2xl border border-white/[0.06] 
transition-all duration-300 ease-out
hover:-translate-y-1
hover:shadow-[0_8px_24px_rgba(139,92,246,0.12)] bg-white/[0.02] p-7 transition-all duration-300 shadow-[0_0_28px_rgba(139,92,246,0.10)] hover:border-violet-400/50 hover:bg-violet-400/[0.025] hover:shadow-[0_0_40px_rgba(139,92,246,0.18)] sm:p-9"
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
                </div>

                <p className="mb-3 text-xs tracking-[0.16em] text-violet-400">
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
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-400/10 px-5 py-2.5 text-sm font-medium text-violet-400 shadow-[0_0_12px_rgba(139,92,246,0.06)] transition-all duration-300 hover:border-violet-400/60 hover:bg-violet-400/20 hover:text-violet-300 hover:shadow-[0_0_24px_rgba(139,92,246,0.2)]"
                  >
                    Live Demo
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      ↗
                    </span>
                  </a>
                ) : (
                  <span className="mt-8 inline-block text-sm text-gray-500">
                    Project details coming soon
                  </span>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="mb-4 text-sm text-violet-400">03 / ACHIEVEMENTS</p>
          <div className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 transition-all duration-300 shadow-[0_0_28px_rgba(139,92,246,0.10)] hover:border-violet-400/50 hover:bg-violet-400/[0.025] hover:shadow-[0_0_40px_rgba(139,92,246,0.18)] sm:p-9">
            <p className="text-5xl font-semibold text-violet-400">Top 50</p>
            <h3 className="mt-4 text-2xl font-medium">RIPPLE Hackathon Project</h3>
            <p className="mt-3 max-w-2xl leading-7 text-gray-400">
              Our team placed among the top 50 out of 200 teams with RIPPLE,
              a decision intelligence and scenario simulation prototype
              for campus operations.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 ">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="mb-5 text-sm text-violet-400">04 / CONTACT</p>
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
              className="rounded-full bg-violet-400 px-6 py-3 
transition-all duration-300
border border-white/[0.08]
shadow-[0_0_18px_rgba(139,92,246,0.10)]
hover:border-violet-400/60
hover:shadow-[0_0_28px_rgba(139,92,246,0.22)]
 font-medium text-black hover:bg-violet-300 transition-all duration-300 hover:-translate-y-1 active:scale-95"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/fardeen-codes07"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border 
transition-all duration-300
border border-white/[0.08]
shadow-[0_0_18px_rgba(139,92,246,0.10)]
hover:border-violet-400/60
hover:shadow-[0_0_28px_rgba(139,92,246,0.22)]
hover:bg-violet-400/10
 border-white/20 px-6 py-3 hover:border-violet-400 transition-all duration-300 hover:-translate-y-1 active:scale-95"
            >
              GitHub ↗
            </a>
            
            <a
              href="mailto:fardeen.tvm@gmail.com"
              className="rounded-full border border-white/20 px-6 py-3 transition hover:border-violet-400 transition-all duration-300 hover:-translate-y-1 active:scale-95 
transition-all duration-300
border border-white/[0.08]
shadow-[0_0_18px_rgba(139,92,246,0.10)]
hover:border-violet-400/60
hover:shadow-[0_0_28px_rgba(139,92,246,0.22)]
hover:bg-violet-400/10
"
            >
              Email me ↗
            </a>
            
            <a
              href="/Fardeen_Mohammed_Resume.pdf"
              download="Fardeen_Mohammed_Resume.pdf"
              className="rounded-full border border-white/20 
transition-all duration-300
border border-white/[0.08]
shadow-[0_0_18px_rgba(139,92,246,0.10)]
hover:border-violet-400/60
hover:shadow-[0_0_28px_rgba(139,92,246,0.22)]
hover:bg-violet-400/10
px-6 py-3 text-white transition hover:border-violet-400 transition-all duration-300 hover:-translate-y-1 active:scale-95"
            >
              Download Resume ↓
            </a>


          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-6">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-3 text-sm text-gray-500">
          <p>Designed & built by Fardeen.</p>
          <a href="#home" className="hover:text-violet-400 transition-all duration-300 hover:-translate-y-1 active:scale-95">
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  )
}

export default App
