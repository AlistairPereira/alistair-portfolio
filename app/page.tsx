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
  bookStats,
  chapters,
  experience,
  profile,
  projects,
  skills,
} from "../data/portfolio";

const navItems = ["Home", "About", "Skills", "Experience", "Projects", "Contact"];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f3f4ef] text-[#101010]">
      <Navbar />

      <section id="cover" className="px-4 pt-20 pb-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="relative overflow-hidden rounded-[1.8rem] border border-black/10 bg-white p-6 shadow-[0_22px_70px_rgba(15,23,42,0.10)] sm:p-7"
            >
              <div className="absolute left-0 top-0 h-full w-5 bg-cyan-400" />

              <div className="relative z-10 pl-4">
                <h1 className="mt-2 max-w-xl text-5xl font-black leading-[0.95] tracking-tight text-slate-950 sm:text-6xl xl:text-7xl">
                  {profile.shortName}
                </h1>

                <p className="mt-4 max-w-md text-lg font-semibold text-slate-800">
                  {profile.title}
                </p>

                <div className="mt-7">
                  <div className="relative h-[330px] overflow-hidden rounded-[1.5rem] border border-black/10 bg-slate-100 sm:h-[360px] xl:h-[380px]">
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
                </div>
              </div>
            </motion.div>

            <div className="grid gap-4">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65 }}
                className="rounded-[1.8rem] border border-black/10 bg-white p-5 shadow-[0_22px_70px_rgba(15,23,42,0.08)] sm:p-6"
              >
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-2xl font-black text-slate-950 sm:text-3xl">
                    Portfolio Chapters
                  </h2>

                  <div className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400 text-slate-950 sm:flex">
                    <Rocket size={24} />
                  </div>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  {chapters.map((chapter) => (
                    <a
                      key={chapter.title}
                      href={chapter.href}
                      className="group flex min-h-[95px] items-center rounded-2xl border border-black/10 bg-[#f8f8f4] p-5 transition hover:-translate-y-1 hover:border-cyan-400 hover:bg-white"
                    >
                      <h3 className="text-xl font-black text-slate-950">
                        {chapter.title}
                      </h3>
                    </a>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75 }}
                className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
              >
                {bookStats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-black/10 bg-slate-950 p-4 text-white shadow-[0_15px_45px_rgba(15,23,42,0.10)]"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-300">
                      {item.label}
                    </p>

                    <p className="mt-2 text-sm font-bold leading-6">
                      {item.value}
                    </p>
                  </div>
                ))}
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
        © {new Date().getFullYear()} {profile.name}. Digital portfolio book
        built with Next.js, Tailwind CSS, and TypeScript.
      </footer>
    </main>
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