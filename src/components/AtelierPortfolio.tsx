"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { RevealSection } from "./RevealSection";

const cases = [
  {
    id: 1,
    title: "The Executive Refresh",
    treatment: "10 Porcelain Veneers",
    timeline: "3 sessions over 2 weeks",
    investment: "$34/week",
    before: "/images/cases/case-1-before.png",
    after: "/images/cases/case-1-after.png",
  },
  {
    id: 2,
    title: "The Alignment Protocol",
    treatment: "Invisalign Lite",
    timeline: "12-week program",
    investment: "$28/week",
    before: "/images/cases/case-2-before.png",
    after: "/images/cases/case-2-after.png",
  },
  {
    id: 3,
    title: "The Complete Transformation",
    treatment: "8 Veneers + Boutique Whitening",
    timeline: "4 sessions over 3 weeks",
    investment: "$52/week",
    before: "/images/cases/case-3-before.png",
    after: "/images/cases/case-3-after.png",
  },
];

function CaseCard({ caseData, index }: { caseData: typeof cases[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <BeforeAfterSlider
        beforeSrc={caseData.before}
        afterSrc={caseData.after}
        beforeAlt={`${caseData.title} - Before`}
        afterAlt={`${caseData.title} - After`}
      />
      <div className="bg-white border border-border/50 p-6 mt-0">
        <h4 className="font-heading text-xl text-primary mb-2">{caseData.title}</h4>
        <div className="grid grid-cols-3 gap-4 text-sm text-muted-foreground">
          <div>
            <p className="text-xs uppercase tracking-wider text-accent mb-1">Treatment</p>
            <p className="font-medium text-foreground">{caseData.treatment}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-accent mb-1">Timeline</p>
            <p className="font-medium text-foreground">{caseData.timeline}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-accent mb-1">Investment</p>
            <p className="font-medium text-foreground">{caseData.investment}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function AtelierPortfolio() {
  return (
    <section id="atelier" className="w-full py-24 px-4 md:px-12 lg:px-24 bg-muted/30 border-t border-border/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-primary mb-4">The Atelier Portfolio</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Precision transformations, curated. Drag to reveal the artistry.</p>
        </div>

        <RevealSection
          revealText="View All Cases"
          collapseText="Show Less"
          previewContent={
            <CaseCard caseData={cases[0]} index={0} />
          }
          revealContent={
            <div className="space-y-12 mt-12">
              {cases.slice(1).map((c, i) => (
                <CaseCard key={c.id} caseData={c} index={i + 1} />
              ))}
            </div>
          }
        />
      </div>
    </section>
  );
}
