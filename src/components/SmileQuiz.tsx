"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookingModal } from "@/components/BookingModal";
import { RevealSection } from "./RevealSection";
import { ArrowRight, ArrowLeft, Sparkles } from "lucide-react";

const steps = [
  {
    question: "What brings you to the sanctuary?",
    options: [
      { label: "Maintain my edge", value: "routine" },
      { label: "Refine my aesthetic", value: "cosmetic" },
      { label: "Correct and restore", value: "restorative" },
    ],
  },
  {
    question: "How would you describe your timeline?",
    options: [
      { label: "This week", value: "urgent" },
      { label: "Within the quarter", value: "planning" },
      { label: "Exploring possibilities", value: "research" },
    ],
  },
  {
    question: "Your comfort philosophy?",
    options: [
      { label: "I'm clinical — just get it done", value: "clinical" },
      { label: "I value calm — the sanctuary matters", value: "calm" },
      { label: "I need reassurance — take it slow", value: "reassurance" },
    ],
  },
  {
    question: "Your investment comfort?",
    options: [
      { label: "Under $500", value: "low" },
      { label: "$34–80/week", value: "subscription" },
      { label: "Investment is secondary to result", value: "premium" },
    ],
  },
];

type Answers = Record<number, string>;

function getResult(answers: Answers) {
  const goal = answers[0];
  const comfort = answers[2];

  if (goal === "routine" && comfort === "clinical") {
    return { name: "The Express Executive Ritual", price: "$295 flat fee", desc: "Streamlined efficiency for the time-conscious professional." };
  }
  if (goal === "cosmetic") {
    return { name: "The Transformation Suite", price: "$34–52/week", desc: "Your aesthetic evolution, structured around your schedule." };
  }
  if (goal === "restorative" || comfort === "reassurance") {
    return { name: "The Sanctuary Restoration", price: "Custom consultation", desc: "Comprehensive care at your pace, in complete comfort." };
  }
  return { name: "The Executive Ritual", price: "$295 flat fee", desc: "Our signature 60-minute clinical experience." };
}

function QuizContent() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (value: string) => {
    const newAnswers = { ...answers, [currentStep]: value };
    setAnswers(newAnswers);

    if (currentStep < steps.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    } else {
      setTimeout(() => setShowResult(true), 300);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const result = getResult(answers);

  return (
    <div className="max-w-xl mx-auto">
      {/* Progress dots */}
      <div className="flex justify-center gap-2 mb-8">
        {steps.map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i < currentStep || showResult
                ? "bg-accent"
                : i === currentStep
                ? "bg-accent/60 scale-125"
                : "bg-border"
            }`}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {!showResult ? (
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="font-heading text-2xl text-primary text-center mb-8">
              {steps[currentStep].question}
            </h3>
            <div className="space-y-3">
              {steps[currentStep].options.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => handleSelect(opt.value)}
                  className={`w-full p-4 text-left border text-lg transition-all duration-300 ${
                    answers[currentStep] === opt.value
                      ? "border-accent bg-accent/10 text-primary"
                      : "border-border/50 bg-white hover:border-accent/50 text-foreground/80"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
            {currentStep > 0 && (
              <button
                onClick={handleBack}
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mt-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Previous
              </button>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="bg-primary text-primary-foreground p-8 border border-accent/20">
              <Sparkles className="w-8 h-8 text-accent mx-auto mb-4" />
              <p className="text-xs uppercase tracking-widest text-accent mb-2">Your Recommendation</p>
              <h3 className="font-heading text-2xl text-white mb-2">{result.name}</h3>
              <p className="text-white/70 text-sm mb-4">{result.desc}</p>
              <p className="text-accent font-heading text-xl mb-6">{result.price}</p>
              <BookingModal>
                <Button className="bg-accent text-primary hover:bg-accent/90 h-12 px-8 rounded-none text-base gap-2">
                  Reserve This Ritual <ArrowRight className="w-4 h-4" />
                </Button>
              </BookingModal>
            </div>
            <button
              onClick={() => {
                setShowResult(false);
                setCurrentStep(0);
                setAnswers({});
              }}
              className="text-sm text-muted-foreground hover:text-primary mt-6 transition-colors"
            >
              Retake Assessment
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function SmileQuiz() {
  return (
    <section id="blueprint" className="w-full py-24 px-4 md:px-12 lg:px-24 bg-white border-t border-border/50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl text-primary mb-4">Your Aesthetic Blueprint</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Discover your personalised ritual in 60 seconds.</p>
        </div>

        <RevealSection
          revealText="Begin Assessment"
          collapseText="Close Assessment"
          previewContent={
            <div className="text-center py-8 bg-muted/30 border border-border/50">
              <Sparkles className="w-10 h-10 text-accent mx-auto mb-4" />
              <p className="text-foreground font-medium text-lg mb-2">4 questions. Personalised recommendation.</p>
              <p className="text-muted-foreground text-sm">Tell us about your goals and we&apos;ll match you with the ideal ritual.</p>
            </div>
          }
          revealContent={
            <div className="mt-8">
              <QuizContent />
            </div>
          }
        />
      </div>
    </section>
  );
}
