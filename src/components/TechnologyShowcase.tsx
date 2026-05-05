"use client";

import { motion } from "framer-motion";
import { ScanFace, Timer, Wand, Wind, Box } from "lucide-react";
import { RevealSection } from "./RevealSection";

const technologies = [
  {
    icon: ScanFace,
    name: "3D Digital Smile Design",
    benefit: "See your result before we begin. You approve the vision; we execute the precision.",
  },
  {
    icon: Timer,
    name: "CEREC Same-Day Crowns",
    benefit: "No temporary. No second visit. Your restoration, milled and fitted in 60 minutes.",
  },
  {
    icon: Wand,
    name: "Computerised Anaesthesia",
    benefit: "You won't feel the needle, because there isn't one. Computerised delivery eliminates the sting.",
  },
  {
    icon: Wind,
    name: "Air-Polishing System",
    benefit: "The drill sound is gone. Biofilm removal via pressurised glycine powder — silent, gentle, thorough.",
  },
  {
    icon: Box,
    name: "CBCT 3D Imaging",
    benefit: "Full cranial mapping in 14 seconds. Radiation exposure 10× lower than a traditional CT.",
  },
];

function TechCard({ tech, index }: { tech: typeof technologies[0]; index: number }) {
  const Icon = tech.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white border border-border/50 border-l-2 border-l-accent p-6 flex flex-col hover:shadow-lg hover:border-accent/30 transition-all duration-500"
    >
      <Icon className="w-8 h-8 text-accent mb-4" />
      <h4 className="font-heading text-lg text-primary mb-2">{tech.name}</h4>
      <p className="text-sm text-muted-foreground leading-relaxed">{tech.benefit}</p>
    </motion.div>
  );
}

export function TechnologyShowcase() {
  return (
    <section id="technology" className="w-full py-24 px-4 md:px-12 lg:px-24 bg-white border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-primary mb-4">The Technology Suite</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Why this isn&apos;t your childhood dentist. Every instrument is chosen to eliminate anxiety and maximise precision.</p>
        </div>

        <RevealSection
          revealText="View All Technologies"
          collapseText="Show Less"
          previewContent={
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {technologies.slice(0, 3).map((tech, i) => (
                <TechCard key={tech.name} tech={tech} index={i} />
              ))}
            </div>
          }
          revealContent={
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {technologies.slice(3).map((tech, i) => (
                <TechCard key={tech.name} tech={tech} index={i} />
              ))}
            </div>
          }
        />
      </div>
    </section>
  );
}
