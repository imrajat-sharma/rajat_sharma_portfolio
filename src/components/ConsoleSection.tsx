import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const lines = [
  { prompt: "$ whoami", output: "rajat-sharma — full-stack developer", delay: 0 },
  { prompt: "$ cat skills.txt", output: "React, TypeScript, Node.js, Python, Tailwind, PostgreSQL", delay: 1.5 },
  { prompt: "$ ls projects/", output: "e-commerce/  ai-chatbot/  dashboard/  portfolio-builder/", delay: 3 },
  { prompt: "$ echo $PASSION", output: "Building beautiful, interactive web experiences ✨", delay: 4.5 },
  { prompt: "$ uptime", output: "Coding for 4+ years and counting…", delay: 6 },
];

const ConsoleSection = () => {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const timers = lines.map((_, i) =>
      setTimeout(() => setVisibleLines(i + 1), lines[i].delay * 1000)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section id="console" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionWrapper>
          <h2 className="text-4xl md:text-5xl font-display text-center mb-12">
            <span className="gradient-text">Console</span>
          </h2>
        </SectionWrapper>

        <SectionWrapper delay={0.2}>
          <div className="rounded-2xl overflow-hidden comic-shadow bg-sidebar border border-sidebar-border">
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-sidebar-border">
              <div className="w-3 h-3 rounded-full bg-comic-pink" />
              <div className="w-3 h-3 rounded-full bg-comic-orange" />
              <div className="w-3 h-3 rounded-full bg-comic-lime" />
              <span className="ml-2 text-xs text-sidebar-foreground/60 font-mono">terminal</span>
            </div>

            {/* Content */}
            <div className="p-5 font-mono text-sm space-y-3 min-h-[240px]">
              {lines.slice(0, visibleLines).map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-comic-lime">{line.prompt}</p>
                  <p className="text-sidebar-foreground/80 ml-2">{line.output}</p>
                </motion.div>
              ))}
              {visibleLines < lines.length && (
                <motion.span
                  className="inline-block w-2 h-4 bg-comic-lime"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity }}
                />
              )}
            </div>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
};

export default ConsoleSection;
