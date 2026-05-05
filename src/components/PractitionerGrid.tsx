"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const practitioners = [
  {
    name: "Dr. James Chen",
    title: "Principal Aesthetic Architect",
    specialisation: "Porcelain Veneers, Full-Mouth Rehabilitation",
    philosophy: "\"The mouth is architecture. Every angle is deliberate.\"",
    image: "/images/team/dr-chen.png",
  },
  {
    name: "Dr. Anika Mehta",
    title: "Aesthetic Director",
    specialisation: "Digital Smile Design, Cosmetic Bonding",
    philosophy: "\"I design confidence. The clinical work is simply how I deliver it.\"",
    image: "/images/team/dr-mehta.png",
  },
  {
    name: "Dr. Liam Park",
    title: "Alignment Specialist",
    specialisation: "Invisalign Diamond Provider, Orthodontics",
    philosophy: "\"Straight teeth are the foundation. Everything else is refinement.\"",
    image: "/images/team/dr-park.png",
  },
];

export function PractitionerGrid() {
  return (
    <section id="artisans" className="w-full py-24 px-4 md:px-12 lg:px-24 bg-muted/30 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-primary mb-4">The Clinical Artisans</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Your transformation is only as precise as the hands that craft it.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {practitioners.map((doc, i) => (
            <motion.div
              key={doc.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`group ${i === 1 ? "md:mt-10" : ""}`}
            >
              <div className="relative overflow-hidden bg-primary aspect-[3/4] mb-4 border border-transparent group-hover:border-accent/50 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]">
                <Image
                  src={doc.image}
                  alt={doc.name}
                  fill
                  className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Gold corner accent */}
                <div className="absolute bottom-0 left-0 w-16 h-0.5 bg-accent" />
                <div className="absolute bottom-0 left-0 w-0.5 h-16 bg-accent" />
              </div>
              <h3 className="font-heading text-xl text-primary mb-1">{doc.name}</h3>
              <p className="text-accent text-sm font-medium uppercase tracking-wider mb-2">{doc.title}</p>
              <p className="text-xs text-muted-foreground mb-3">{doc.specialisation}</p>
              <p className="text-sm italic text-foreground/70">{doc.philosophy}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
