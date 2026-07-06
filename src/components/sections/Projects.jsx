import { motion } from "framer-motion";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";
import { PROJECTS, PROFILE } from "../../constants/data";
import SectionHeading from "../ui/SectionHeading";
import TiltCard from "../ui/TiltCard";

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08 }}
    >
      <TiltCard className="glass group flex h-full flex-col overflow-hidden rounded-2xl">
        <div className="relative flex h-36 items-center justify-center overflow-hidden bg-gradient-to-br from-electric/20 via-bg-soft to-purple/20">
          <span className="font-display text-3xl font-bold text-white/10 transition-transform duration-500 group-hover:scale-110">
            {project.title.slice(0, 2).toUpperCase()}
          </span>
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] text-cyan"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-4 border-t border-white/10 pt-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-white/70 hover:text-cyan"
            >
              <FiGithub /> Code
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-white/70 hover:text-purple"
              >
                <HiOutlineExternalLink /> Live Demo
              </a>
            )}
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="04"
          label="Build Log"
          title="Things I've shipped."
          description={`All source code is public on GitHub (${PROFILE.githubHandle}).`}
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <p className="mt-10 text-sm text-white/50">
          <strong className="text-white/80">Also built:</strong> a Coffee Café
          website (HTML/CSS) and a Rain Sensor System (physics project) — not
          yet published on GitHub.
        </p>
      </div>
    </section>
  );
}
