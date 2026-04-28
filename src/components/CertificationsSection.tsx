import { certifications as certs } from "@/data";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const CertificationsSection = () => (
  <section id="certifications" className="py-24 px-6">
    <div className="max-w-5xl mx-auto">
      <SectionWrapper>
        <h2 className="text-4xl md:text-5xl font-display text-center mb-12">
          <span className="gradient-text">Certifications</span>
        </h2>
      </SectionWrapper>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certs.map((cert, i) => (
          <SectionWrapper key={i} delay={i * 0.1}>
            <motion.div
              className="glass-card rounded-2xl p-5 comic-shadow-hover flex flex-col"
              whileHover={{ y: -4 }}
            >
              <div
                className={`w-10 h-10 ${cert.color}/15 rounded-xl flex items-center justify-center mb-3`}
              >
                <Award
                  className={`w-5 h-5 ${cert.color.replace("bg-", "text-")}`}
                />
              </div>
              <h3 className="font-display text-lg mb-1">{cert.title}</h3>
              <p className="text-xs font-semibold text-muted-foreground mb-3">
                {cert.platform}
              </p>
              <motion.a
                href={cert.url}
                className="mt-auto inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline"
                whileHover={{ x: 4 }}
              >
                View Certificate <ExternalLink className="w-3.5 h-3.5" />
              </motion.a>
            </motion.div>
          </SectionWrapper>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;
