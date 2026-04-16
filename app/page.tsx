"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { 
  Sparkles, 
  FileText, 
  Activity, 
  MessageSquare, 
  Scale, 
  Landmark, 
  Scissors,
  ArrowRight
} from "lucide-react"

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
]

const interests = [
  "Greek mythology",
  "Crochet",
  "AI Ethics",
  "Psychology",
  "Reading",
  "Interior design (someday)",
]

const workExperience = [
  {
    company: "Tredence Analytics",
    date: "Jan 2026–Present",
    role: "AI/ML Intern",
    description: "Optimizing neural architectures and hybrid pipelines to isolate complex supply chain anomalies, significantly outperforming standard ML baselines.",
  },
  {
    company: "ISTRAC ISRO",
    date: "Jun–Sep 2025",
    role: "Project Intern",
    description: "Developed anomaly detection models for satellite telemetry data.",
  },
  {
    company: "Dynapt",
    date: "Jun–Jul 2024",
    role: "ML Intern",
    description: "Integrated third-party APIs to enhance chatbot logic and automated 3D avatar interactions using Python.",
  },
]

const projects = [
  {
    icon: FileText,
    name: "Legislative Document Summarization",
    problem: "Legal documents are dense and inaccessible to most readers.",
    solution: "Built a semantic summarization pipeline using LangChain for intelligent retrieval.",
    tags: ["LangChain", "NLP", "Python"],
  },
  {
    icon: Activity,
    name: "Anomaly Detection for Satellite Telemetry",
    problem: "Irregular patterns in real-time satellite data.",
    solution: "Developed ARIMA time-series model for predictive anomaly detection.",
    tags: ["ARIMA", "Time-Series", "Python"],
  },
  {
    icon: MessageSquare,
    name: "Multimodal RAG Chatbot",
    problem: "Fragmented enterprise data is difficult to query and understand.",
    solution: "Created a multimodal RAG system using Gemini API for intelligent document retrieval.",
    tags: ["RAG", "Gemini API", "LangChain", "Python"],
  },
]

const beyondTerminal = [
  {
    icon: Scale,
    title: "AI Ethics",
    quote: "I believe that every model we ship is a quiet policy decision. I read, think, and write about the values we encode into systems.",
  },
  {
    icon: Landmark,
    title: "Greek Mythology",
    quote: "Structure, hubris, fate — mythology is just systems thinking with better storytelling.",
  },
  {
    icon: Scissors,
    title: "Crochet",
    quote: "Crochet teaches me that the most complex patterns emerge from simple, repeated decisions. It's debugging in yarn.",
  },
]

function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAF7F2]/80 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <ul className="flex items-center justify-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[#2C2C2C] hover:text-[#C17A5A] transition-colors text-sm tracking-wide"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-6 pt-20 pb-12 relative">
      {/* Decorative yarn/crochet pattern */}
      <motion.div 
        className="absolute top-20 right-8 md:right-16 lg:right-24"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Sparkles className="w-16 h-16 md:w-20 md:h-20 text-[#C9A99A]" strokeWidth={1.5} />
      </motion.div>
      
      {/* Decorative curved line suggesting yarn */}
      <svg 
        className="absolute top-32 right-4 md:right-12 w-32 h-48 text-[#C9A99A]/30 hidden md:block" 
        viewBox="0 0 100 150" 
        fill="none"
      >
        <path 
          d="M90 10 Q 60 40, 70 80 Q 80 120, 50 140" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round"
          strokeDasharray="4 6"
        />
      </svg>

      <motion.div 
        className="text-center max-w-2xl"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.h1 
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#2C2C2C] mb-6 text-balance"
          variants={fadeInUp}
        >
          Riya Mittal
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl text-[#2C2C2C]/80 mb-8 leading-relaxed"
          variants={fadeInUp}
        >
          AI/ML Engineer. Building intelligent systems with a very human touch.
        </motion.p>
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-3"
          variants={fadeInUp}
        >
          <Badge 
            variant="outline" 
            className="border-[#C9A99A] text-[#2C2C2C] bg-transparent px-4 py-1.5 text-sm"
          >
            Open to opportunities
          </Badge>
          <Badge 
            variant="outline" 
            className="border-[#C9A99A] text-[#2C2C2C] bg-transparent px-4 py-1.5 text-sm"
          >
            Delhi, India
          </Badge>
        </motion.div>
      </motion.div>
    </section>
  )
}

function About() {
  return (
    <motion.section 
      id="about" 
      className="py-20 px-6 scroll-mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div variants={fadeInUp}>
            <p className="text-[#2C2C2C]/80 leading-relaxed mb-6">
              I believe technology should do more than compute — it should consider. As an AI/ML engineer, 
              my work sits at the intersection of rigorous architecture and intentional design. Whether 
              I&apos;m building anomaly detection pipelines for satellite telemetry or context-aware retrieval 
              systems that untangle messy enterprise data, I focus on the questions we ask just as much 
              as the answers we find.
            </p>
            <p className="text-[#2C2C2C]/80 leading-relaxed mb-8">
              I&apos;m constantly exploring the boundaries of what machines can learn, and what they should.
            </p>
            <p className="text-[#C17A5A] italic text-sm">
              &ldquo;I&apos;m drawn to the place where structure meets soul.&rdquo;
            </p>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <h3 className="font-serif text-xl text-[#2C2C2C] mb-4">When I&apos;m not coding</h3>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <Badge 
                  key={interest}
                  variant="outline" 
                  className="border-[#C9A99A] text-[#2C2C2C] bg-transparent px-3 py-1"
                >
                  {interest}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

function Work() {
  return (
    <motion.section 
      id="work" 
      className="py-20 px-6 scroll-mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="font-serif text-3xl md:text-4xl text-[#2C2C2C] mb-12"
          variants={fadeInUp}
        >
          Where I&apos;ve worked
        </motion.h2>
        <div className="space-y-6">
          {workExperience.map((job) => (
            <motion.div key={job.company} variants={fadeInUp}>
              <Card className="border-[#C9A99A] bg-transparent shadow-none">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                    <h3 className="font-serif text-xl text-[#2C2C2C]">{job.company}</h3>
                    <span className="text-[#C17A5A] text-sm">{job.date}</span>
                  </div>
                  <p className="text-[#2C2C2C]/60 text-sm mb-3">{job.role}</p>
                  <p className="text-[#2C2C2C]/80 leading-relaxed">{job.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.a 
          href="/Riyamittal__resume.pdf" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[#C17A5A] text-sm mt-8 hover:underline"
          variants={fadeInUp}
        >
          Download Resume <ArrowRight className="w-4 h-4" />
        </motion.a>
      </div>
    </motion.section>
  )
}

function Projects() {
  return (
    <motion.section 
      id="projects" 
      className="py-20 px-6 scroll-mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="font-serif text-3xl md:text-4xl text-[#2C2C2C] mb-12"
          variants={fadeInUp}
        >
          Things I&apos;ve built
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div key={project.name} variants={fadeInUp}>
              <Card className="border-[#C9A99A] bg-transparent shadow-none h-full">
                <CardContent className="p-6">
                  <project.icon className="w-8 h-8 text-[#C17A5A] mb-4" strokeWidth={1.5} />
                  <h3 className="font-serif text-lg text-[#2C2C2C] mb-4">{project.name}</h3>
                  <div className="space-y-3 mb-4">
                    <div>
                      <span className="text-[#C17A5A] text-xs font-medium tracking-wider uppercase">Problem</span>
                      <p className="text-[#2C2C2C]/70 text-sm mt-1">{project.problem}</p>
                    </div>
                    <div>
                      <span className="text-[#C17A5A] text-xs font-medium tracking-wider uppercase">Solution</span>
                      <p className="text-[#2C2C2C]/70 text-sm mt-1">{project.solution}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge 
                        key={tag}
                        variant="outline" 
                        className="border-[#C9A99A] text-[#2C2C2C]/70 bg-transparent px-2 py-0.5 text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

function BeyondTerminal() {
  return (
    <motion.section 
      className="py-20 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="font-serif text-3xl md:text-4xl text-[#2C2C2C] mb-12"
          variants={fadeInUp}
        >
          Beyond the terminal
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {beyondTerminal.map((item) => (
            <motion.div key={item.title} variants={fadeInUp}>
              <Card className="border-[#C9A99A] bg-transparent shadow-none h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-[#C9A99A]/20 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-[#C17A5A]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-lg text-[#2C2C2C] mb-2">{item.title}</h3>
                  <p className="text-[#2C2C2C]/70 text-sm italic">&ldquo;{item.quote}&rdquo;</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

function Contact() {
  return (
    <motion.section 
      id="contact" 
      className="py-20 px-6 scroll-mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2 
          className="font-serif text-4xl md:text-5xl text-[#2C2C2C] mb-6"
          variants={fadeInUp}
        >
          Let&apos;s talk.
        </motion.h2>
        <motion.p 
          className="text-[#2C2C2C]/70 mb-8"
          variants={fadeInUp}
        >
          Whether it&apos;s about intelligent systems, the ethics of algorithms, or just a good book recommendation, my inbox is always open.
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={fadeInUp}
        >
          <Button 
            asChild
            className="bg-[#C9A99A] hover:bg-[#C17A5A] text-white px-8 py-6 text-base"
          >
            <a href="mailto:riyamittal241@gmail.com">Email me</a>
          </Button>
          <Button 
            asChild
            className="bg-[#C9A99A] hover:bg-[#C17A5A] text-white px-8 py-6 text-base"
          >
            <a href="https://www.linkedin.com/in/riya-mittal-93629728b/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  )
}

function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[#C9A99A]/30">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-[#2C2C2C]/50 text-sm">
          Built with intention. © Riya Mittal 2026.
        </p>
      </div>
    </footer>
  )
}

export default function Portfolio() {
  return (
    <main className="bg-[#FAF7F2] text-[#2C2C2C] min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Work />
      <Projects />
      <BeyondTerminal />
      <Contact />
      <Footer />
    </main>
  )
}
