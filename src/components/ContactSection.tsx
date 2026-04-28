import { socials } from "@/data";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const ContactSection = () => (
  <section id="contact" className="py-24 px-6">
    <div className="max-w-2xl mx-auto text-center">
      <SectionWrapper>
        <h2 className="text-4xl md:text-5xl font-display mb-4">
          Let's <span className="gradient-text">Connect</span>
        </h2>
        <p className="text-muted-foreground mb-10">
          Have a project in mind or just want to say hi? I'd love to hear from
          you!
        </p>
      </SectionWrapper>

      <SectionWrapper delay={0.2}>
        <motion.a
          href="mailto:john@example.com"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-lg comic-shadow-hover"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          <Mail className="w-5 h-5" /> Say Hello
        </motion.a>
      </SectionWrapper>

      <SectionWrapper delay={0.3}>
        <div className="flex justify-center gap-4 mt-10">
          {socials.map((s) => (
            <motion.a
              key={s.label}
              href={s.url}
              className={`w-12 h-12 rounded-xl glass-card flex items-center justify-center ${s.color} comic-shadow-hover`}
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title={s.label}
            >
              <s.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>
      </SectionWrapper>

      <p className="mt-16 text-xs text-muted-foreground">
        © 2026 Rajat Sharma. Built with ❤️ and React.
      </p>
    </div>
  </section>
);

export default ContactSection;
