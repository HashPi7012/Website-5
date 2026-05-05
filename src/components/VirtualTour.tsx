"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { RevealSection } from "./RevealSection";

const tourStops = [
  {
    image: "/images/tour/reception.png",
    label: "The Reception",
    desc: "Where your sanctuary experience begins.",
  },
  {
    image: "/images/tour/treatment-suite.png",
    label: "The Treatment Suite",
    desc: "State-of-the-art precision in absolute comfort.",
  },
  {
    image: "/images/tour/recovery-lounge.png",
    label: "The Recovery Lounge",
    desc: "Decompress before returning to the CBD.",
  },
];

function TourImage({ stop, index }: { stop: typeof tourStops[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? -30 : 30, index % 2 === 0 ? 30 : -30]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative overflow-hidden group"
    >
      <motion.div style={{ y }} className="relative aspect-[4/3]">
        <Image
          src={stop.image}
          alt={stop.label}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </motion.div>
      {/* Gradient overlay with label */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex flex-col justify-end p-6">
        <h4 className="font-heading text-xl text-white mb-1">{stop.label}</h4>
        <p className="text-white/70 text-sm">{stop.desc}</p>
      </div>
    </motion.div>
  );
}

export function VirtualTour() {
  return (
    <section id="tour" className="w-full py-24 px-4 md:px-12 lg:px-24 bg-primary border-t border-accent/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">Step Inside the Sanctuary</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">Your environment, before you arrive.</p>
        </div>

        <RevealSection
          revealText="Explore the Full Sanctuary"
          collapseText="Show Less"
          previewContent={
            <TourImage stop={tourStops[0]} index={0} />
          }
          revealContent={
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {tourStops.slice(1).map((stop, i) => (
                <TourImage key={stop.label} stop={stop} index={i + 1} />
              ))}
            </div>
          }
        />
      </div>
    </section>
  );
}
