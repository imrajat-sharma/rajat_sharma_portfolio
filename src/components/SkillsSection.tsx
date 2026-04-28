import { skillCategories as categories } from "@/data";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const borderColorMap: Record<string, string> = {
  "comic-purple": "border-comic-purple",
  "comic-cyan": "border-comic-cyan",
  "comic-orange": "border-comic-orange",
  "comic-lime": "border-comic-lime",
};

const textColorMap: Record<string, string> = {
  "comic-purple": "text-comic-purple",
  "comic-cyan": "text-comic-cyan",
  "comic-orange": "text-comic-orange",
  "comic-lime": "text-comic-lime",
};

const SkillsSection = () => (
  <section id="skills" className="py-24 px-6">
    <div className="max-w-5xl mx-auto">
      <SectionWrapper>
        <h2 className="text-4xl md:text-5xl font-display text-center mb-12">
          My <span className="gradient-text">Skills</span>
        </h2>
      </SectionWrapper>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((cat, ci) => (
          <SectionWrapper key={cat.title} delay={ci * 0.1}>
            <motion.div
              className={`glass-card rounded-2xl p-6 comic-shadow-hover border-t-4 ${borderColorMap[cat.color]}`}
              whileHover={{ y: -4 }}
            >
              <h3
                className={`text-2xl font-display mb-6 ${textColorMap[cat.color]}`}
              >
                {cat.title}
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                {cat.skills.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    className="flex flex-col items-center gap-2 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: si * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-10 h-10 object-contain"
                      loading="lazy"
                    />
                    <span className="text-xs font-bold text-muted-foreground text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </SectionWrapper>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
