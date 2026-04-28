import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const HeroSection = () => (
  <section id="hero" className="min-h-screen flex items-center justify-center relative px-6">
    <div className="max-w-3xl text-center z-10">
      <SectionWrapper>
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-semibold text-comic-purple mb-6"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Sparkles className="w-4 h-4" /> Welcome to my universe
        </motion.div>
      </SectionWrapper>

      <SectionWrapper delay={0.1}>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display leading-tight mb-6">
          Hi, I'm{" "}
          <span className="gradient-text">Rajat Sharma</span>
        </h1>
      </SectionWrapper>

      <SectionWrapper delay={0.2}>
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-8 font-body">
          A creative full-stack developer who builds playful, performant, and pixel-perfect web experiences.
        </p>
      </SectionWrapper>

      <SectionWrapper delay={0.3}>
        <div className="flex flex-wrap gap-4 justify-center">
          <motion.a
            href="#projects"
            className="px-8 py-3 rounded-2xl bg-primary text-primary-foreground font-bold comic-shadow-hover"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-3 rounded-2xl glass-card font-bold text-foreground comic-shadow-hover"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Get in Touch
          </motion.a>
        </div>
      </SectionWrapper>

      <motion.div
        className="mt-16"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-6 h-6 mx-auto text-muted-foreground" />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
