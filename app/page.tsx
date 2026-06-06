"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  Briefcase,
  Bug,
  Database,
  Download,
  Mail,
  MapPin,
  Menu,
  Rocket,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { experience, profile, projects, skills } from "../data/portfolio";

const navItems = ["Home", "Experience", "Skills", "Projects", "Contact"];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#080f1f] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[-10%] top-[-10%] h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute right-[-10%] top-[20%] h-[420px] w-[420px] rounded-full bg-amber-400/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[30%] h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[120px]" />
      </div>

      <Navbar />

      <section id="home" className="px-5 pt-24 pb-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.08] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          >
            <div className="relative h-[560px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900">
              <img
                src="/profile.jpg"
                alt="Alistair Pereira"
                className="h-full w-full object-cover object-top"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#080f1f]/80 via-[#080f1f]/10 to-transparent" />

              <div className="absolute bottom-5 left-5 rounded-full border border-white/15 bg-white/90 px-4 py-2 text-sm font-semibold text-slate-950 shadow-sm">
                Data • AI/ML • QA
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.08] p-8 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-10"
          >
            <div className="absolute left-0 top-0 h-full w-5 bg-gradient-to-b from-cyan-400 via-blue-500 to-amber-300" />

            <div className="relative z-10 pl-4">
              <p className="mb-6 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200">
                Portfolio • Data Analytics • AI/ML • QA
              </p>

              <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl xl:text-7xl">
                {profile.shortName}
              </h1>

              <p className="mt-5 max-w-2xl text-xl font-bold text-cyan-100">
                {profile.title}
              </p>

              <div className="mt-8 max-w-3xl rounded-[1.5rem] border border-white/10 bg-[#0d172b]/80 p-6">
                <p className="text-lg leading-8 text-slate-200">
                  I am a Master’s graduate with experience across data analytics,
                  Power BI dashboard development, SQL-based data validation,
                  machine learning, predictive modelling, and quality assurance
                  activities including manual testing, test case creation, and
                  defect reporting.
                </p>

                <p className="mt-5 text-lg leading-8 text-slate-200">
                  My profile combines analytics, AI/ML, and QA, allowing me to
                  understand business requirements, analyze and validate data,
                  build practical data-driven solutions, and test workflows for
                  reliability and accuracy.
                </p>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <ProfileStat label="Analytics" value="Power BI, SQL, KPIs" />
                <ProfileStat label="AI/ML" value="ML, NLP, LLM Agents" />
                <ProfileStat label="QA" value="Manual, API, SQL" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <BookSection id="experience" title="Experience">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative space-y-5 border-l-2 border-cyan-300/30 pl-7">
            {experience.map((item) => (
              <motion.div
                key={`${item.role}-${item.company}`}
                whileHover={{ x: 5 }}
                className="relative rounded-[1.7rem] border border-white/10 bg-white/[0.08] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl transition hover:border-cyan-300/60"
              >
                <span className="absolute -left-[38px] top-7 h-5 w-5 rounded-full border-4 border-[#080f1f] bg-cyan-300 shadow-md" />

                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="min-w-0">
                    <div className="mb-3 flex items-center gap-3">
                      <Briefcase className="text-cyan-300" size={22} />

                      <h3 className="text-2xl font-black text-white">
                        {item.role}
                      </h3>
                    </div>

                    <p className="font-bold text-cyan-100">{item.company}</p>

                    <p className="mt-4 leading-7 text-slate-300">
                      {item.description}
                    </p>
                  </div>

                  <span className="w-fit shrink-0 whitespace-nowrap rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-sm font-semibold text-amber-200">
                    {item.period}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <ExperienceMap />
        </div>
      </BookSection>

      <BookSection id="skills" title="Skills">
        <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-5 md:grid-cols-2">
            {skills.map((group) => (
              <motion.div
                key={group.category}
                whileHover={{ y: -5 }}
                className="rounded-[1.7rem] border border-white/10 bg-white/[0.08] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl transition hover:border-cyan-300/60"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                  {group.category.includes("Data") ? (
                    <BarChart3 />
                  ) : group.category.includes("Quality") ||
                    group.category.includes("QA") ? (
                    <Bug />
                  ) : group.category.includes("AI") ||
                    group.category.includes("Machine") ? (
                    <Rocket />
                  ) : (
                    <Database />
                  )}
                </div>

                <h3 className="text-2xl font-black text-white">
                  {group.category}
                </h3>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-[#0d172b] px-3 py-1 text-sm font-medium text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <SkillEcosystem />
        </div>
      </BookSection>

      <BookSection id="projects" title="Projects">
        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              whileHover={{ y: -5 }}
              className="relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/[0.08] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl transition hover:border-cyan-300/60"
            >
              <div className="mb-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="max-w-xl text-2xl font-black text-white">
                    {project.title}
                  </h3>

                  {"repo" in project && project.repo ? (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} GitHub repository`}
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-cyan-300/10 text-cyan-300 transition hover:scale-105 hover:bg-cyan-300 hover:text-slate-950"
                    >
                      <FaGithub size={20} />
                    </a>
                  ) : null}
                </div>

                <span className="mt-4 inline-flex rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-sm font-semibold text-amber-200">
                  {project.type}
                </span>
              </div>

              <CaseLine label="Problem" text={project.problem} />
              <CaseLine label="Approach" text={project.approach} />
              <CaseLine label="Outcome" text={project.outcome} />

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-sm font-semibold text-cyan-100"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </BookSection>

      <BookSection id="contact" title="Contact">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <ContactCard
            icon={<Mail size={24} />}
            label="Email"
            value={profile.email}
            href={`mailto:${profile.email}`}
          />

          <ContactCard
            icon={<FaLinkedin size={24} />}
            label="LinkedIn"
            value="LinkedIn Profile"
            href={profile.linkedin}
          />

          <ContactCard
            icon={<FaGithub size={24} />}
            label="GitHub"
            value="GitHub Profile"
            href={profile.github}
          />

          <ContactCard
            icon={<MapPin size={24} />}
            label="Location"
            value={profile.location}
            href="#"
          />
        </div>
      </BookSection>

      <footer className="border-t border-white/10 px-5 py-6 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} {profile.name}. Digital portfolio built
        with Next.js, Tailwind CSS, and TypeScript.
      </footer>
    </main>
  );
}

function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#080f1f]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <a
          href="#home"
          className="text-base font-black tracking-tight text-white sm:text-lg"
        >
          Alistair Pereira Portfolio<span className="text-cyan-300">.</span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={item === "Home" ? "#home" : `#${item.toLowerCase()}`}
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-300"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

function ProfileStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0d172b] p-5 shadow-sm">
      <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">
        {label}
      </p>

      <p className="mt-2 text-sm font-black leading-6 text-white">{value}</p>
    </div>
  );
}

function ExperienceMap() {
  const chartRef = useRef<SVGSVGElement | null>(null);
  const [downloadOpen, setDownloadOpen] = useState(false);

  const triggerDownload = (url: string, filename: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const downloadChart = (format: "svg" | "png" | "jpeg") => {
    if (!chartRef.current) return;

    const clonedSvg = chartRef.current.cloneNode(true) as SVGSVGElement;
    clonedSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");

    const svgString = new XMLSerializer().serializeToString(clonedSvg);
    const svgBlob = new Blob([svgString], {
      type: "image/svg+xml;charset=utf-8",
    });

    const svgUrl = URL.createObjectURL(svgBlob);

    if (format === "svg") {
      triggerDownload(svgUrl, "alistair-experience-timeline.svg");
      URL.revokeObjectURL(svgUrl);
      setDownloadOpen(false);
      return;
    }

    const image = new Image();

    image.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 1400;
      canvas.height = 720;

      const context = canvas.getContext("2d");
      if (!context) return;

      context.fillStyle = "#091327";
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.drawImage(image, 0, 0, canvas.width, canvas.height);

      const mimeType = format === "jpeg" ? "image/jpeg" : "image/png";
      const extension = format === "jpeg" ? "jpg" : "png";

      canvas.toBlob(
        (blob) => {
          if (!blob) return;

          const imageUrl = URL.createObjectURL(blob);
          triggerDownload(imageUrl, `alistair-experience-timeline.${extension}`);
          URL.revokeObjectURL(imageUrl);
          URL.revokeObjectURL(svgUrl);
          setDownloadOpen(false);
        },
        mimeType,
        0.95
      );
    };

    image.src = svgUrl;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="rounded-[1.7rem] border border-white/10 bg-white/[0.08] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl lg:sticky lg:top-24"
    >
      <div className="mb-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">
              Career Map
            </p>

            <h3 className="mt-2 text-2xl font-black text-white">
              Experience Timeline
            </h3>

            <p className="mt-3 leading-7 text-slate-300">
              A practical career path across software quality, data science
              research, and business analytics.
            </p>
          </div>

          <div className="relative">
            <button
              type="button"
              onClick={() => setDownloadOpen((value) => !value)}
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[#0d172b] text-slate-300 transition hover:border-cyan-300/60 hover:text-cyan-300"
              aria-label="Download experience timeline"
            >
              <Menu size={22} />
            </button>

            {downloadOpen ? (
              <div className="absolute right-0 top-12 z-30 w-44 overflow-hidden rounded-2xl border border-white/10 bg-[#0d172b] p-2 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                <button
                  type="button"
                  onClick={() => downloadChart("png")}
                  className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-sm font-bold text-slate-200 transition hover:bg-cyan-300/10 hover:text-cyan-200"
                >
                  <Download size={15} />
                  Download PNG
                </button>

                <button
                  type="button"
                  onClick={() => downloadChart("jpeg")}
                  className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-sm font-bold text-slate-200 transition hover:bg-amber-300/10 hover:text-amber-200"
                >
                  <Download size={15} />
                  Download JPEG
                </button>

                <button
                  type="button"
                  onClick={() => downloadChart("svg")}
                  className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-sm font-bold text-slate-200 transition hover:bg-white/10 hover:text-white"
                >
                  <Download size={15} />
                  Download SVG
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <div className="rounded-[1.4rem] border border-white/10 bg-[#0d172b] p-5">
        <div className="relative h-[330px] overflow-hidden rounded-[1.2rem] border border-white/10 bg-[#091327] p-4">
          <svg
            ref={chartRef}
            className="h-full w-full"
            viewBox="0 0 760 420"
            preserveAspectRatio="xMidYMid meet"
          >
            <rect width="760" height="420" rx="24" fill="#091327" />

            <defs>
              <linearGradient id="careerLine" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#67e8f9" />
                <stop offset="55%" stopColor="#fcd34d" />
                <stop offset="100%" stopColor="#60a5fa" />
              </linearGradient>

              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <text x="42" y="42" fill="#67e8f9" fontSize="16" fontWeight="800">
              Career Progression
            </text>

            <text x="42" y="66" fill="#94a3b8" fontSize="12" fontWeight="600">
              QA Engineering → Data Science Research → Data Analytics
            </text>

            <line x1="70" y1="330" x2="700" y2="330" stroke="#ffffff20" />
            <line x1="70" y1="260" x2="700" y2="260" stroke="#ffffff14" />
            <line x1="70" y1="190" x2="700" y2="190" stroke="#ffffff14" />
            <line x1="70" y1="120" x2="700" y2="120" stroke="#ffffff14" />

            <line x1="70" y1="100" x2="70" y2="345" stroke="#ffffff10" />
            <line x1="196" y1="100" x2="196" y2="345" stroke="#ffffff10" />
            <line x1="322" y1="100" x2="322" y2="345" stroke="#ffffff10" />
            <line x1="448" y1="100" x2="448" y2="345" stroke="#ffffff10" />
            <line x1="574" y1="100" x2="574" y2="345" stroke="#ffffff10" />
            <line x1="700" y1="100" x2="700" y2="345" stroke="#ffffff10" />

            <text x="58" y="372" fill="#cbd5e1" fontSize="12" fontWeight="800">
              2021
            </text>
            <text x="184" y="372" fill="#cbd5e1" fontSize="12" fontWeight="800">
              2022
            </text>
            <text x="310" y="372" fill="#cbd5e1" fontSize="12" fontWeight="800">
              2023
            </text>
            <text x="436" y="372" fill="#cbd5e1" fontSize="12" fontWeight="800">
              2024
            </text>
            <text x="562" y="372" fill="#cbd5e1" fontSize="12" fontWeight="800">
              2025
            </text>
            <text x="688" y="372" fill="#cbd5e1" fontSize="12" fontWeight="800">
              2026
            </text>

            <path
              d="M90 300 C170 245, 270 252, 360 215 C425 188, 470 160, 520 160 C590 162, 645 108, 695 90"
              fill="none"
              stroke="url(#careerLine)"
              strokeWidth="8"
              strokeLinecap="round"
              filter="url(#glow)"
            />

            <circle cx="125" cy="275" r="10" fill="#67e8f9" />
            <circle cx="500" cy="160" r="10" fill="#fcd34d" />
            <circle cx="695" cy="90" r="10" fill="#60a5fa" />

            <rect x="82" y="226" width="118" height="40" rx="10" fill="#0d172b" stroke="#67e8f955" />
            <text x="96" y="244" fill="#e2e8f0" fontSize="13" fontWeight="900">
              QA
            </text>
            <text x="96" y="258" fill="#cbd5e1" fontSize="10" fontWeight="700">
              Aug 2021 - Feb 2024
            </text>

            <rect x="430" y="106" width="150" height="42" rx="10" fill="#0d172b" stroke="#fcd34d55" />
            <text x="446" y="124" fill="#e2e8f0" fontSize="13" fontWeight="900">
              Data Science
            </text>
            <text x="446" y="139" fill="#cbd5e1" fontSize="10" fontWeight="700">
              Oct 2024 - Mar 2025
            </text>

            <rect x="585" y="32" width="145" height="42" rx="10" fill="#0d172b" stroke="#60a5fa55" />
            <text x="600" y="50" fill="#e2e8f0" fontSize="13" fontWeight="900">
              Data Analytics
            </text>
            <text x="600" y="65" fill="#cbd5e1" fontSize="10" fontWeight="700">
              Feb 2026 - May 2026
            </text>
          </svg>
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-[#0d172b] p-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
            QA
          </p>
          <p className="mt-2 text-sm font-black text-white">
            Testing + Validation
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#0d172b] p-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
            AI/ML
          </p>
          <p className="mt-2 text-sm font-black text-white">
            Prediction + Models
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#0d172b] p-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
            BI
          </p>
          <p className="mt-2 text-sm font-black text-white">
            Dashboards + KPIs
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function SkillEcosystem() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="rounded-[1.7rem] border border-white/10 bg-white/[0.08] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl xl:sticky xl:top-24"
    >
      <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">
        Skill Ecosystem
      </p>

      <h3 className="mt-2 text-2xl font-black text-white">
        How my skills work together
      </h3>

      <p className="mt-3 leading-7 text-slate-300">
        I combine analytics, AI/ML, QA, and technical tools as one connected
        workflow instead of separate skill blocks.
      </p>

      <div className="relative mt-8 h-[360px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0d172b] p-5">
        <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/40 bg-cyan-300/10 shadow-[0_0_60px_rgba(103,232,249,0.25)]" />
        <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#091327] text-center text-sm font-black text-white">
          Tech
          <br />
          Profile
        </div>

        <SkillNode
          className="left-5 top-5"
          label="Data"
          value="SQL • BI • KPI"
          accent="text-cyan-300"
        />

        <SkillNode
          className="right-5 top-5"
          label="AI/ML"
          value="Models • NLP"
          accent="text-amber-300"
        />

        <SkillNode
          className="bottom-5 left-5"
          label="QA"
          value="Testing • APIs"
          accent="text-blue-300"
        />

        <SkillNode
          className="bottom-5 right-5"
          label="Tools"
          value="GitHub • GCP"
          accent="text-emerald-300"
        />

        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 500 360">
          <line x1="250" y1="180" x2="90" y2="72" stroke="#67e8f955" strokeWidth="2" />
          <line x1="250" y1="180" x2="410" y2="72" stroke="#fcd34d55" strokeWidth="2" />
          <line x1="250" y1="180" x2="90" y2="288" stroke="#60a5fa55" strokeWidth="2" />
          <line x1="250" y1="180" x2="410" y2="288" stroke="#6ee7b755" strokeWidth="2" />
        </svg>
      </div>

      <div className="mt-6 grid gap-4">
        <SkillPipeline
          title="Analytics Delivery"
          steps={["Clean", "Model", "Dashboard", "Insight"]}
        />
        <SkillPipeline
          title="AI/ML Delivery"
          steps={["Data", "Train", "Evaluate", "Explain"]}
        />
        <SkillPipeline
          title="QA Delivery"
          steps={["Scenario", "Test", "Validate", "Report"]}
        />
      </div>
    </motion.div>
  );
}

function SkillNode({
  className,
  label,
  value,
  accent,
}: {
  className: string;
  label: string;
  value: string;
  accent: string;
}) {
  return (
    <div
      className={`absolute z-10 w-36 rounded-2xl border border-white/10 bg-white/[0.08] p-4 backdrop-blur-xl ${className}`}
    >
      <p className={`text-xs font-bold uppercase tracking-[0.22em] ${accent}`}>
        {label}
      </p>
      <p className="mt-2 text-sm font-black text-white">{value}</p>
    </div>
  );
}

function SkillPipeline({ title, steps }: { title: string; steps: string[] }) {
  return (
    <div className="rounded-[1.3rem] border border-white/10 bg-[#0d172b] p-4">
      <p className="mb-3 text-sm font-black text-white">{title}</p>

      <div className="flex flex-wrap items-center gap-2">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center gap-2">
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-slate-200">
              {step}
            </span>

            {index !== steps.length - 1 ? (
              <span className="text-cyan-300">→</span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function BookSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="px-5 py-10 sm:py-11">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-7 border-b border-white/10 pb-5"
        >
          <h2 className="max-w-4xl text-3xl font-black tracking-tight text-white sm:text-5xl">
            {title}
          </h2>
        </motion.div>

        {children}
      </div>
    </section>
  );
}

function CaseLine({ label, text }: { label: string; text: string }) {
  return (
    <div className="mt-4 rounded-2xl border border-white/10 bg-[#0d172b] p-4">
      <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">
        {label}
      </p>

      <p className="mt-2 leading-7 text-slate-300">{text}</p>
    </div>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href === "#" ? undefined : "_blank"}
      rel={href === "#" ? undefined : "noreferrer"}
      className="rounded-[1.7rem] border border-white/10 bg-white/[0.08] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/60"
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
        {icon}
      </div>

      <p className="text-sm font-medium text-slate-400">{label}</p>

      <p className="mt-2 font-black text-white">{value}</p>
    </a>
  );
}