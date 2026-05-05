"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

interface RevealSectionProps {
  previewContent: React.ReactNode;
  revealContent: React.ReactNode;
  revealText?: string;
  collapseText?: string;
}

export function RevealSection({
  previewContent,
  revealContent,
  revealText = "Reveal the Collection",
  collapseText = "Show Less",
}: RevealSectionProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      {previewContent}

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            {revealContent}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex justify-center mt-10">
        <Button
          variant="outline"
          onClick={() => setExpanded(!expanded)}
          className="border-accent text-accent hover:bg-accent/10 hover:text-accent gap-2 rounded-none px-8 h-12 text-sm uppercase tracking-wider font-medium"
        >
          {expanded ? (
            <>
              {collapseText} <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              {revealText} <ChevronDown className="w-4 h-4" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
