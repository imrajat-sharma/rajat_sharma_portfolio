import { projects } from "@/data";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const ProjectsSection = () => (
  <section id="projects" className="py-24 px-6">
    <div className="max-w-5xl mx-auto">
      <SectionWrapper>
        <h2 className="text-4xl md:text-5xl font-display text-center mb-12">
          My <span className="gradient-text">Projects</span>
        </h2>
      </SectionWrapper>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <SectionWrapper key={i} delay={i * 0.1}>
            <motion.div
              className="glass-card rounded-2xl overflow-hidden comic-shadow-hover group"
              whileHover={{ y: -6 }}
            >
              {/* Gradient header */}
              <div
                className={`h-32 bg-gradient-to-br ${project.color} flex items-center justify-center`}
              >
                <span className="font-display text-3xl text-foreground/60">
                  {project.title.charAt(0)}
                </span>
              </div>

              <div className="p-5">
                <h3 className="font-display text-xl mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.desc}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full bg-muted font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-foreground hover:text-primary transition-colors"
                    whileHover={{ x: 2 }}
                  >
                    <Github className="w-4 h-4" /> Code
                  </motion.a>
                  <motion.a
                    href={project.live}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-foreground hover:text-primary transition-colors"
                    whileHover={{ x: 2 }}
                  >
                    <ExternalLink className="w-4 h-4" /> Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </SectionWrapper>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
