"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  BarChart3,
  Briefcase,
  Bug,
  Database,
  Mail,
  MapPin,
  Rocket,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  chapters,
  experience,
  profile,
  projects,
  skills,
} from "../data/portfolio";

const navItems = ["Cover", "About", "Skills", "Experience", "Projects", "Contact"];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f3f4ef] text-[#101010]">
      <Navbar />

      <section id="cover" className="px-4 pt-20 pb-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="relative overflow-hidden rounded-[1.8rem] border border-black/10 bg-white p-8 shadow-[0_22px_70px_rgba(15,23,42,0.10)] sm:p-10"
            >
              <div className="absolute left-0 top-0 h-full w-5 bg-cyan-400" />

              <div className="relative z-10 pl-4">
                <p className="mb-5 inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-800">
                  Portfolio • Data Analytics • AI/ML • QA
                </p>

                <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tight text-slate-950 sm:text-6xl xl:text-7xl">
                  {profile.shortName}
                </h1>

                <p className="mt-5 max-w-2xl text-xl font-bold text-slate-800">
                  {profile.title}
                </p>

                <HeroVisualPanel />

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-black/10 bg-[#f8f8f4] p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-700">
                      Analytics
                    </p>
                    <p className="mt-2 text-sm font-bold text-slate-950">
                      Power BI, SQL, KPIs
                    </p>
                  </div>

                  <div className="rounded-2xl border border-black/10 bg-[#f8f8f4] p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-700">
                      AI/ML
                    </p>
                    <p className="mt-2 text-sm font-bold text-slate-950">
                      ML, NLP, LLM Agents
                    </p>
                  </div>

                  <div className="rounded-2xl border border-black/10 bg-[#f8f8f4] p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-700">
                      QA
                    </p>
                    <p className="mt-2 text-sm font-bold text-slate-950">
                      Manual, API, SQL
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="grid gap-5">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65 }}
                className="overflow-hidden rounded-[1.8rem] border border-black/10 bg-white p-5 shadow-[0_22px_70px_rgba(15,23,42,0.08)]"
              >
                <div className="relative h-[360px] overflow-hidden rounded-[1.4rem] border border-black/10 bg-slate-100">
                  <img
                    src="/profile.jpg"
                    alt="Alistair Pereira"
                    className="h-full w-full object-cover object-top"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-transparent" />

                  <div className="absolute bottom-4 left-4 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900">
                    Data • AI/ML • QA
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75 }}
                className="rounded-[1.8rem] border border-black/10 bg-white p-5 shadow-[0_22px_70px_rgba(15,23,42,0.08)]"
              >
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-2xl font-black text-slate-950">
                    Explore Portfolio
                  </h2>

                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400 text-slate-950">
                    <Rocket size={22} />
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {chapters.map((chapter) => (
                    <a
                      key={chapter.title}
                      href={chapter.href}
                      className="group rounded-2xl border border-black/10 bg-[#f8f8f4] p-4 transition hover:-translate-y-1 hover:border-cyan-400 hover:bg-white"
                    >
                      <h3 className="text-lg font-black text-slate-950">
                        {chapter.title}
                      </h3>
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          <div className="mt-5 flex justify-center">
            <a
              href="#about"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-slate-900 shadow-sm transition hover:bg-cyan-400"
            >
              <ArrowDown size={18} />
            </a>
          </div>
        </div>
      </section>

      <BookSection id="about" title="About Me">
        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <BookPage>
            <p className="text-lg leading-8 text-slate-700">
              I am a Master’s graduate with experience across data analytics,
              Power BI dashboard development, SQL-based data validation, machine
              learning, predictive modelling, and quality assurance activities
              including manual testing, test case creation, and defect reporting.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-700">
              My profile combines analytics, AI/ML, and QA, allowing me to
              understand business requirements, analyze and validate data, build
              practical data-driven solutions, and test workflows for reliability
              and accuracy.
            </p>
          </BookPage>

          <BookPage accent>
            <Rocket className="mb-5 text-cyan-600" size={34} />

            <h3 className="text-2xl font-black text-slate-950">
              Core Value
            </h3>

            <p className="mt-4 leading-8 text-slate-700">
              {profile.summary}
            </p>
          </BookPage>
        </div>
      </BookSection>

      <BookSection id="skills" title="Skills">
        <div className="grid gap-5 md:grid-cols-2">
          {skills.map((group) => (
            <motion.div
              key={group.category}
              whileHover={{ y: -5 }}
              className="rounded-[1.7rem] border border-black/10 bg-white p-6 shadow-sm transition hover:border-cyan-400"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-cyan-300">
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

              <h3 className="text-2xl font-black text-slate-950">
                {group.category}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-black/10 bg-[#f8f8f4] px-3 py-1 text-sm font-medium text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </BookSection>

      <BookSection id="experience" title="Experience">
        <div className="space-y-5">
          {experience.map((item) => (
            <motion.div
              key={`${item.role}-${item.company}`}
              whileHover={{ x: 5 }}
              className="rounded-[1.7rem] border border-black/10 bg-white p-6 shadow-sm transition hover:border-cyan-400"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="mb-3 flex items-center gap-3">
                    <Briefcase className="text-cyan-600" size={22} />

                    <h3 className="text-2xl font-black text-slate-950">
                      {item.role}
                    </h3>
                  </div>

                  <p className="font-bold text-slate-700">{item.company}</p>

                  <p className="mt-4 leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>

                <span className="w-fit rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white">
                  {item.period}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </BookSection>

      <BookSection id="projects" title="Projects">
        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              whileHover={{ y: -5 }}
              className="relative overflow-hidden rounded-[1.7rem] border border-black/10 bg-white p-6 shadow-sm transition hover:border-cyan-400"
            >
              <div className="mb-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="max-w-xl text-2xl font-black text-slate-950">
                    {project.title}
                  </h3>

                  {"repo" in project && project.repo ? (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} GitHub repository`}
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/10 bg-slate-950 text-cyan-300 transition hover:scale-105 hover:bg-slate-800"
                    >
                      <FaGithub size={20} />
                    </a>
                  ) : null}
                </div>

                <span className="mt-4 inline-flex rounded-full bg-slate-950 px-3 py-1 text-sm font-semibold text-white">
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
                    className="rounded-full border border-black/10 bg-cyan-50 px-3 py-1 text-sm font-semibold text-cyan-800"
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

      <footer className="border-t border-black/10 px-5 py-6 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} {profile.name}. Digital portfolio built
        with Next.js, Tailwind CSS, and TypeScript.
      </footer>
    </main>
  );
}

function HeroVisualPanel() {
  return (
    <div className="mt-8 rounded-[1.6rem] border border-black/10 bg-[#f8f8f4] p-5">
      <div className="grid gap-4 md:grid-cols-3">
        <div className="overflow-hidden rounded-[1.3rem] border border-black/10 bg-white shadow-sm">
          <div className="relative h-44 bg-gradient-to-br from-cyan-50 via-white to-slate-100 p-5">
            <div className="absolute right-5 top-5 h-16 w-16 rounded-full border-[10px] border-cyan-400 border-r-slate-950" />

            <div className="absolute bottom-8 left-5 flex items-end gap-2">
              <span className="h-12 w-5 rounded-t bg-cyan-400" />
              <span className="h-20 w-5 rounded-t bg-slate-950" />
              <span className="h-16 w-5 rounded-t bg-cyan-300" />
              <span className="h-24 w-5 rounded-t bg-slate-300" />
              <span className="h-14 w-5 rounded-t bg-slate-950" />
            </div>

            <svg className="absolute inset-x-5 bottom-4 h-20" viewBox="0 0 240 80">
              <path
                d="M8 62 C35 20, 55 75, 88 38 C116 7, 136 45, 162 28 C190 10, 205 58, 232 24"
                fill="none"
                stroke="#f97316"
                strokeWidth="4"
                strokeLinecap="round"
              />
              {[8, 88, 162, 232].map((x, index) => (
                <circle
                  key={index}
                  cx={x}
                  cy={index === 0 ? 62 : index === 1 ? 38 : index === 2 ? 28 : 24}
                  r="5"
                  fill="#ffffff"
                  stroke="#f97316"
                  strokeWidth="4"
                />
              ))}
            </svg>
          </div>
        </div>

        <div className="overflow-hidden rounded-[1.3rem] border border-black/10 bg-white shadow-sm">
          <div className="relative h-44 bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-900 p-5">
            <div className="absolute inset-0 opacity-25">
              <svg className="h-full w-full" viewBox="0 0 300 180">
                {Array.from({ length: 18 }).map((_, index) => {
                  const x = 25 + ((index * 37) % 250);
                  const y = 20 + ((index * 29) % 130);
                  return (
                    <circle
                      key={index}
                      cx={x}
                      cy={y}
                      r="3"
                      fill="#67e8f9"
                    />
                  );
                })}
                <path
                  d="M30 130 C70 60, 120 110, 165 50 C205 10, 230 80, 270 35"
                  fill="none"
                  stroke="#67e8f9"
                  strokeWidth="1.5"
                />
                <path
                  d="M38 48 C90 100, 150 20, 255 120"
                  fill="none"
                  stroke="#67e8f9"
                  strokeWidth="1.5"
                />
              </svg>
            </div>

            <div className="absolute left-1/2 top-1/2 h-24 w-20 -translate-x-1/2 -translate-y-1/2 rounded-[45%] border-2 border-cyan-300 bg-cyan-300/10" />
            <div className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-cyan-200 bg-white/10" />
            <div className="absolute left-[47%] top-[39%] h-3 w-3 rounded-full bg-cyan-300" />
            <div className="absolute left-[55%] top-[50%] h-3 w-3 rounded-full bg-cyan-300" />
            <div className="absolute left-[42%] top-[56%] h-3 w-3 rounded-full bg-cyan-300" />
          </div>
        </div>

        <div className="overflow-hidden rounded-[1.3rem] border border-black/10 bg-white shadow-sm">
          <div className="relative h-44 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 p-5">
            <div className="absolute inset-x-6 top-12 flex items-center justify-between">
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300 bg-cyan-300/10 text-cyan-200">
                  <Database size={22} />
                </div>
              </div>

              <div className="h-[2px] flex-1 bg-cyan-300/50" />

              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300 bg-cyan-300/10 text-cyan-200">
                  <Bug size={22} />
                </div>
              </div>

              <div className="h-[2px] flex-1 bg-cyan-300/50" />

              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300 bg-cyan-300/10 text-cyan-200">
                  <Rocket size={22} />
                </div>
              </div>
            </div>

            <div className="absolute bottom-7 left-6 right-6 grid grid-cols-3 gap-3">
              <div className="h-2 rounded-full bg-cyan-300" />
              <div className="h-2 rounded-full bg-white/30" />
              <div className="h-2 rounded-full bg-cyan-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-black/10 bg-[#f3f4ef]/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <a
          href="#cover"
          className="text-base font-black tracking-tight sm:text-lg"
        >
          Alistair Pereira Portfolio<span className="text-cyan-600">.</span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>
    </header>
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
          className="mb-7 border-b border-black/10 pb-5"
        >
          <h2 className="max-w-4xl text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
            {title}
          </h2>
        </motion.div>

        {children}
      </div>
    </section>
  );
}

function BookPage({
  children,
  accent = false,
}: {
  children: ReactNode;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-[1.7rem] border p-6 shadow-sm ${
        accent
          ? "border-cyan-400/40 bg-cyan-50"
          : "border-black/10 bg-white"
      }`}
    >
      {children}
    </div>
  );
}

function CaseLine({ label, text }: { label: string; text: string }) {
  return (
    <div className="mt-4 rounded-2xl border border-black/10 bg-[#f8f8f4] p-4">
      <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-600">
        {label}
      </p>

      <p className="mt-2 leading-7 text-slate-600">{text}</p>
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
      className="rounded-[1.7rem] border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-cyan-400"
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-cyan-300">
        {icon}
      </div>

      <p className="text-sm font-medium text-slate-500">{label}</p>

      <p className="mt-2 font-black text-slate-950">{value}</p>
    </a>
  );
}