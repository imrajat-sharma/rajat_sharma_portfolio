import { educationTimeline as timeline } from "@/data";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const EducationSection = () => (
  <section id="education" className="py-24 px-6">
    <div className="max-w-3xl mx-auto">
      <SectionWrapper>
        <h2 className="text-4xl md:text-5xl font-display text-center mb-12">
          <span className="gradient-text">Education</span>
        </h2>
      </SectionWrapper>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />

        <div className="space-y-8">
          {timeline.map((item, i) => (
            <SectionWrapper key={i} delay={i * 0.15}>
              <motion.div className="relative pl-16" whileHover={{ x: 4 }}>
                {/* Dot */}
                <div
                  className={`absolute left-4 top-2 w-5 h-5 rounded-full ${item.color} border-4 border-background z-10`}
                />
                <div className="glass-card rounded-2xl p-5 comic-shadow-hover">
                  <span className="text-xs font-bold text-muted-foreground">
                    {item.year}
                  </span>
                  <div className="flex items-center gap-2 mt-1">
                    <GraduationCap className="w-5 h-5 text-comic-orange" />
                    <h3 className="font-display text-lg">{item.school}</h3>
                  </div>
                  <p className="text-sm font-bold text-primary mt-1">
                    {item.degree}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;
