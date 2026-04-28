import { motion } from "framer-motion";
import { Code, Palette, Rocket, Heart } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const cards = [
  { icon: Code, title: "Developer", desc: "Building robust web apps with modern tech stacks.", color: "text-comic-purple", bg: "bg-comic-purple/10" },
  { icon: Palette, title: "Designer", desc: "Crafting beautiful, user-friendly interfaces.", color: "text-comic-cyan", bg: "bg-comic-cyan/10" },
  { icon: Rocket, title: "Problem Solver", desc: "Turning complex challenges into elegant solutions.", color: "text-comic-orange", bg: "bg-comic-orange/10" },
  { icon: Heart, title: "Team Player", desc: "Collaborating and shipping great products together.", color: "text-comic-pink", bg: "bg-comic-pink/10" },
];

const AboutSection = () => (
  <section id="about" className="py-24 px-6">
    <div className="max-w-5xl mx-auto">
      <SectionWrapper>
        <h2 className="text-4xl md:text-5xl font-display text-center mb-4">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          I'm a passionate developer who loves creating interactive, fun, and accessible web experiences. I combine clean code with creative design to build things people enjoy using.
        </p>
      </SectionWrapper>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {cards.map((card, i) => (
          <SectionWrapper key={card.title} delay={i * 0.1}>
            <motion.div
              className="glass-card rounded-2xl p-6 comic-shadow-hover cursor-default"
              whileHover={{ y: -4 }}
            >
              <div className={`w-12 h-12 ${card.bg} rounded-xl flex items-center justify-center mb-4`}>
                <card.icon className={`w-6 h-6 ${card.color}`} />
              </div>
              <h3 className="text-xl font-display mb-2">{card.title}</h3>
              <p className="text-sm text-muted-foreground">{card.desc}</p>
            </motion.div>
          </SectionWrapper>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
