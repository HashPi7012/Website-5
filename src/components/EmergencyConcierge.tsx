"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, X, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function EmergencyConcierge() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && phone) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsSubmitted(false);
        setName("");
        setPhone("");
        setIsDismissed(true);
        // Re-appear after 60 seconds
        setTimeout(() => setIsDismissed(false), 60000);
      }, 3000);
    }
  };

  if (isDismissed) return null;

  return (
    <div className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-40">
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            key="expanded"
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="bg-white border border-border shadow-2xl w-[300px]"
          >
            <div className="bg-primary p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emergency" />
                <span className="text-white font-medium text-sm">Emergency Concierge</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-5">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <p className="text-sm text-muted-foreground">Priority slots available today. We&apos;ll call you back within 15 minutes.</p>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full border border-border p-2.5 text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="w-full border border-border p-2.5 text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                  <Button type="submit" className="w-full bg-emergency text-white hover:bg-emergency/90 rounded-none h-11">
                    Request Callback
                  </Button>
                </form>
              ) : (
                <div className="text-center py-4">
                  <ShieldCheck className="w-8 h-8 text-success mx-auto mb-3" />
                  <p className="font-medium text-primary text-sm">Request received.</p>
                  <p className="text-xs text-muted-foreground mt-1">We&apos;ll call within 15 minutes.</p>
                </div>
              )}
            </div>
          </motion.div>
        ) : (
          <motion.button
            key="collapsed"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2.5 bg-white border border-border shadow-lg px-4 py-3 hover:shadow-xl transition-shadow group"
          >
            <span
              className="relative flex h-3 w-3"
            >
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emergency opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emergency" />
            </span>
            <span className="text-sm font-medium text-primary group-hover:text-accent transition-colors">
              Dental Emergency?
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
