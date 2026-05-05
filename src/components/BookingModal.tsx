"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Clock, Star, ShieldCheck, ArrowLeft, ArrowRight, Check } from "lucide-react";

const rituals = [
  {
    icon: Clock,
    name: "The Executive Ritual",
    duration: "60 minutes",
    price: "$295 flat fee",
    desc: "Streamlined check-up and clean for the CBD professional.",
  },
  {
    icon: Star,
    name: "The Transformation Suite",
    duration: "90 minutes",
    price: "From $34/week",
    desc: "Invisalign, veneers, and cosmetic transformations.",
  },
  {
    icon: ShieldCheck,
    name: "The Sanctuary Experience",
    duration: "75 minutes",
    price: "$395 flat fee",
    desc: "Full sensory relaxation with noise-cancelling and aromatherapy.",
  },
];

const timeSlots = [
  { label: "Pre-Market", time: "7:30 – 9:00 AM", desc: "Before the city wakes." },
  { label: "Executive Hours", time: "9:00 AM – 5:00 PM", desc: "Seamless lunch-hour scheduling." },
  { label: "Sunset Sessions", time: "5:00 – 7:00 PM", desc: "Wind down after market close." },
];

export function BookingModal({ children }: { children: React.ReactElement }) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [selectedRitual, setSelectedRitual] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<number | null>(null);
  const [firstAvailable, setFirstAvailable] = useState(false);
  const [location, setLocation] = useState<"barangaroo" | "martin-place">("barangaroo");
  const [formData, setFormData] = useState({ name: "", email: "", notes: "" });

  const reset = () => {
    setStep(0);
    setSelectedRitual(null);
    setSelectedTime(null);
    setFirstAvailable(false);
    setLocation("barangaroo");
    setFormData({ name: "", email: "", notes: "" });
  };

  const handleClose = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) reset();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogTrigger render={children} />
      <DialogContent className="sm:max-w-[520px] bg-white p-0 overflow-hidden">
        {/* Progress bar */}
        <div className="flex h-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`flex-1 transition-colors duration-500 ${
                i <= step && step < 3 ? "bg-accent" : step === 3 ? "bg-success" : "bg-border"
              }`}
            />
          ))}
        </div>

        <div className="p-6">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl text-primary">
              {step === 0 && "Select Your Ritual"}
              {step === 1 && "Your Details"}
              {step === 2 && "Preferred Timing"}
              {step === 3 && "Reservation Confirmed"}
            </DialogTitle>
          </DialogHeader>

          <div className="mt-6 min-h-[320px]">
            <AnimatePresence mode="wait">
              {/* Step 0: Ritual Selection */}
              {step === 0 && (
                <motion.div
                  key="step-0"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-3"
                >
                  {rituals.map((ritual, i) => {
                    const Icon = ritual.icon;
                    return (
                      <button
                        key={ritual.name}
                        onClick={() => {
                          setSelectedRitual(i);
                          setTimeout(() => setStep(1), 250);
                        }}
                        className={`w-full text-left p-4 border flex gap-4 items-start transition-all duration-300 ${
                          selectedRitual === i
                            ? "border-accent bg-accent/5"
                            : "border-border/50 hover:border-accent/50"
                        }`}
                      >
                        <Icon className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-primary">{ritual.name}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{ritual.desc}</p>
                          <div className="flex gap-3 mt-2 text-xs">
                            <span className="text-accent font-medium">{ritual.duration}</span>
                            <span className="text-foreground/60">{ritual.price}</span>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </motion.div>
              )}

              {/* Step 1: Details */}
              {step === 1 && (
                <motion.div
                  key="step-1"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-4"
                >
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-1.5">Full Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full border border-border p-2.5 text-sm focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-1.5">Corporate Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@firm.com.au"
                      className="w-full border border-border p-2.5 text-sm focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-1.5">Preferred Location</label>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setLocation("barangaroo")}
                        className={`flex-1 py-2.5 text-sm font-medium border transition-all duration-300 ${
                          location === "barangaroo"
                            ? "border-accent bg-accent/10 text-primary"
                            : "border-border/50 text-muted-foreground hover:border-accent/50"
                        }`}
                      >
                        Barangaroo
                      </button>
                      <button
                        onClick={() => setLocation("martin-place")}
                        className={`flex-1 py-2.5 text-sm font-medium border transition-all duration-300 ${
                          location === "martin-place"
                            ? "border-accent bg-accent/10 text-primary"
                            : "border-border/50 text-muted-foreground hover:border-accent/50"
                        }`}
                      >
                        Martin Place
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-1.5">
                      Any concerns? <span className="text-muted-foreground font-normal">(Optional)</span>
                    </label>
                    <textarea
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g., I'm anxious about dental work..."
                      rows={2}
                      className="w-full border border-border p-2.5 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                    />
                  </div>
                  <div className="flex gap-3 pt-2">
                    <Button
                      variant="outline"
                      onClick={() => setStep(0)}
                      className="rounded-none border-border gap-1"
                    >
                      <ArrowLeft className="w-4 h-4" /> Back
                    </Button>
                    <Button
                      onClick={() => setStep(2)}
                      className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 rounded-none gap-1"
                    >
                      Continue <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Timing */}
              {step === 2 && (
                <motion.div
                  key="step-2"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-3"
                >
                  {timeSlots.map((slot, i) => (
                    <button
                      key={slot.label}
                      onClick={() => setSelectedTime(i)}
                      disabled={firstAvailable}
                      className={`w-full text-left p-4 border transition-all duration-300 ${
                        selectedTime === i && !firstAvailable
                          ? "border-accent bg-accent/5"
                          : firstAvailable
                          ? "border-border/30 opacity-50"
                          : "border-border/50 hover:border-accent/50"
                      }`}
                    >
                      <p className="font-medium text-primary">{slot.label}</p>
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-muted-foreground">{slot.desc}</span>
                        <span className="text-xs text-accent font-medium">{slot.time}</span>
                      </div>
                    </button>
                  ))}

                  <label className="flex items-center gap-3 p-4 border border-border/50 cursor-pointer hover:border-accent/50 transition-colors">
                    <input
                      type="checkbox"
                      checked={firstAvailable}
                      onChange={(e) => {
                        setFirstAvailable(e.target.checked);
                        if (e.target.checked) setSelectedTime(null);
                      }}
                      className="w-4 h-4 accent-accent"
                    />
                    <div>
                      <p className="text-sm font-medium text-primary">First Available</p>
                      <p className="text-xs text-muted-foreground">We&apos;ll find the earliest opening.</p>
                    </div>
                  </label>

                  <div className="flex gap-3 pt-2">
                    <Button
                      variant="outline"
                      onClick={() => setStep(1)}
                      className="rounded-none border-border gap-1"
                    >
                      <ArrowLeft className="w-4 h-4" /> Back
                    </Button>
                    <Button
                      onClick={() => setStep(3)}
                      disabled={selectedTime === null && !firstAvailable}
                      className="flex-1 bg-accent text-primary hover:bg-accent/90 rounded-none"
                    >
                      Confirm Reservation
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Confirmation */}
              {step === 3 && (
                <motion.div
                  key="step-3"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center justify-center py-8 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 12 }}
                    className="w-16 h-16 bg-accent/10 border-2 border-accent rounded-full flex items-center justify-center mb-6"
                  >
                    <Check className="w-8 h-8 text-accent" />
                  </motion.div>
                  <h3 className="font-heading text-xl text-primary mb-2">Reservation Received</h3>
                  <p className="text-muted-foreground text-sm mb-6 max-w-xs">
                    Your concierge will confirm within 2 hours via email at{" "}
                    <span className="text-primary font-medium">{formData.email || "your email"}</span>.
                  </p>
                  {selectedRitual !== null && (
                    <div className="bg-muted/50 border border-border/50 p-4 w-full text-left text-sm mb-6">
                      <p className="text-accent text-xs uppercase tracking-wider mb-1">Selected Ritual</p>
                      <p className="font-medium text-primary">{rituals[selectedRitual].name}</p>
                      <p className="text-muted-foreground text-xs mt-1">
                        {location === "barangaroo" ? "Barangaroo" : "Martin Place"} •{" "}
                        {firstAvailable
                          ? "First available"
                          : selectedTime !== null
                          ? timeSlots[selectedTime].label
                          : ""}
                      </p>
                    </div>
                  )}
                  <Button
                    onClick={() => handleClose(false)}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8"
                  >
                    Done
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
