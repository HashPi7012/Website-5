"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookingModal } from "@/components/BookingModal";
import { AtelierPortfolio } from "@/components/AtelierPortfolio";
import { TechnologyShowcase } from "@/components/TechnologyShowcase";
import { PractitionerGrid } from "@/components/PractitionerGrid";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { SmileQuiz } from "@/components/SmileQuiz";
import { VirtualTour } from "@/components/VirtualTour";
import { CheckCircle2, Clock, ShieldCheck, Star } from "lucide-react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // For the Investor Slider
  const [weeklyInvestment, setWeeklyInvestment] = useState([34]);
  
  const getTransformationPlan = (val: number) => {
    if (val < 20) return { name: "Professional Whitening", desc: "The 2-Week Refresh" };
    if (val < 60) return { name: "Invisalign Lite", desc: "The 3-Month Alignment" };
    return { name: "Porcelain Veneers", desc: "The Ultimate Transformation" };
  };

  const plan = getTransformationPlan(weeklyInvestment[0]);

  return (
    <div className="flex flex-col w-full pb-20 md:pb-0">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[90vh] flex flex-col md:flex-row items-center justify-between overflow-hidden px-4 md:px-12 lg:px-24">
        <div className="flex-1 pt-20 md:pt-0 z-10 md:pr-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="font-heading text-5xl md:text-7xl leading-tight text-primary mb-6">
              The 60-Minute <br/><span className="text-accent italic">Dental Ritual</span><br/> for Sydney&apos;s Elite.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
              Experience a sanctuary of precision and calm in the heart of the CBD. Your time is respected; your comfort is prioritized.
            </p>
            <div className="flex flex-wrap gap-4">
              <BookingModal>
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg h-14 px-8 rounded-none shadow-xl">
                  Reserve Your Session
                </Button>
              </BookingModal>
              <Button variant="outline" size="lg" className="border-accent text-primary hover:bg-accent/10 h-14 px-8 rounded-none text-lg" onClick={() => document.getElementById('atelier')?.scrollIntoView({ behavior: 'smooth' })}>
                View Transformation Gallery
              </Button>
            </div>
          </motion.div>
        </div>
        
        <div className="flex-1 w-full mt-12 md:mt-0 h-[60vh] md:h-screen relative overflow-hidden flex items-center justify-center">
          <motion.div 
            className="absolute right-0 w-[90%] md:w-[80%] h-[80%] bg-muted rounded-bl-[100px] overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop" 
              alt="Luxury Dental Spa" 
              className="object-cover w-full h-full opacity-90"
            />
          </motion.div>
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <section className="w-full bg-primary text-primary-foreground py-6 border-y border-accent/30">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left px-4">
          <ShieldCheck className="w-6 h-6 text-accent" />
          <p className="text-sm md:text-base font-medium tracking-wide">
            Located for your lunch break. Minutes from <span className="text-accent">Barangaroo</span> and <span className="text-accent">Martin Place</span>.
          </p>
        </div>
      </section>

      {/* 3. DUAL-TRACK SECTION */}
      <section id="rituals" className="w-full py-24 px-4 md:px-12 lg:px-24 bg-white">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-primary mb-4">Choose Your Path</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Tailored approaches whether you are maintaining your health or investing in a transformation.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 max-w-7xl mx-auto">
          {/* Track A: The Professional */}
          <Card className="border border-border/50 shadow-lg rounded-none overflow-hidden group hover:border-accent transition-colors duration-500">
            <CardContent className="p-10 flex flex-col h-full bg-slate-50/50">
              <div className="mb-6 flex items-center gap-3 text-primary">
                <Clock className="w-8 h-8" />
                <h3 className="font-heading text-2xl">For The Professional</h3>
              </div>
              <p className="text-muted-foreground mb-8 text-lg">
                The 60-Minute Executive Ritual. A streamlined, high-efficiency check-up and clean designed to fit exactly within a Sydney CBD lunch hour. 
              </p>
              <ul className="space-y-4 mb-10 flex-1">
                <li className="flex gap-3 text-foreground/80"><CheckCircle2 className="w-5 h-5 text-accent shrink-0"/> Hard-capped at 60 minutes.</li>
                <li className="flex gap-3 text-foreground/80"><CheckCircle2 className="w-5 h-5 text-accent shrink-0"/> 7:30 AM pre-market & 7:00 PM sunset slots.</li>
                <li className="flex gap-3 text-foreground/80"><CheckCircle2 className="w-5 h-5 text-accent shrink-0"/> Flat-fee $295 transparent pricing.</li>
              </ul>
              <BookingModal>
                <Button className="w-full bg-primary hover:bg-primary/90 h-14 rounded-none text-lg">Book Executive Ritual</Button>
              </BookingModal>
            </CardContent>
          </Card>

          {/* Track B: The Investor */}
          <Card className="border border-border/50 shadow-lg rounded-none overflow-hidden group hover:border-accent transition-colors duration-500 bg-primary text-primary-foreground relative">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent to-transparent"></div>
            <CardContent className="p-10 flex flex-col h-full relative z-10">
              <div className="mb-6 flex items-center gap-3 text-accent">
                <Star className="w-8 h-8" />
                <h3 className="font-heading text-2xl text-white">For The Investor</h3>
              </div>
              <p className="text-white/80 mb-8 text-lg">
                The Transformation Suite. Luxury isn&apos;t a luxury. Your new smile for the cost of four coffees a week.
              </p>
              
              <div className="flex-1 bg-white/5 p-6 border border-white/10 mb-10">
                <div className="flex justify-between mb-4 items-end">
                  <div>
                    <p className="text-sm text-accent mb-1 uppercase tracking-wider">{plan.desc}</p>
                    <p className="font-heading text-xl">{plan.name}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-light">${weeklyInvestment[0]}<span className="text-sm text-white/50">/wk</span></p>
                  </div>
                </div>
                <Slider 
                  defaultValue={[34]} 
                  max={120} 
                  min={10} 
                  step={1}
                  onValueChange={(val) => setWeeklyInvestment(val as number[])}
                  className="py-4"
                />
                <p className="text-xs text-center text-white/40 mt-2">Drag to adjust investment level</p>
              </div>

              <BookingModal>
                <Button className="w-full bg-accent text-primary hover:bg-accent/90 h-14 rounded-none text-lg border-none">Start Transformation</Button>
              </BookingModal>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 4. THE ATELIER PORTFOLIO (Before/After) */}
      <AtelierPortfolio />

      {/* 5. THE SANCTUARY GALLERY (Parallax) */}
      <section id="sanctuary" className="w-full py-24 bg-muted overflow-hidden">
        <div className="container mx-auto px-4 md:px-12 text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-primary mb-4">The Sanctuary Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Noise-canceling headphones, aromatherapy, and weighted blankets provided in every suite to bridge the gap between clinical care and spa-level relaxation.</p>
        </div>
        
        <div className="flex gap-4 px-4 overflow-x-hidden opacity-90 h-[50vh]">
          <motion.img 
            style={{ y: yParallax }}
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop" 
            className="w-1/3 object-cover rounded-sm shadow-xl" alt="Spa interior" 
          />
          <motion.img 
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
            src="https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=2073&auto=format&fit=crop" 
            className="w-1/3 object-cover rounded-sm shadow-xl mt-12" alt="Relaxation" 
          />
          <motion.img 
            style={{ y: yParallax }}
            src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop" 
            className="w-1/3 object-cover rounded-sm shadow-xl" alt="Clean design" 
          />
        </div>
      </section>

      {/* 6. THE TECHNOLOGY SUITE */}
      <TechnologyShowcase />

      {/* 7. THE CLINICAL ARTISANS */}
      <PractitionerGrid />

      {/* 8. SOCIAL PROOF (Upgraded with Animated Counters) */}
      <section className="w-full py-24 px-4 md:px-12 bg-white border-t border-border/50">
        <div className="max-w-5xl mx-auto">
          {/* 4-Column Evidence Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 py-8 border-y border-border/50">
            <AnimatedCounter end={98} suffix="%" label="Punctuality Rate" />
            <AnimatedCounter end={1247} suffix="+" label="CBD Smiles Transformed" />
            <AnimatedCounter end={4.9} suffix="★" label="Patient Satisfaction" duration={1000} />
            <AnimatedCounter end={12} suffix=" min" label="Barangaroo to Suite" duration={800} />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center">
              <h2 className="font-heading text-4xl text-primary mb-8">Trusted by the professionals driving Sydney&apos;s Finance & Tech sectors.</h2>
              <div className="space-y-2">
                <span className="inline-block bg-muted px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary border border-border">Voted Premier Cosmetic Practice 2025</span>
                <span className="inline-block bg-muted px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary border border-border">Official Partner to Equinox</span>
              </div>
            </div>

            <div className="space-y-8">
              <Card className="rounded-none border-border/50 shadow-sm bg-slate-50 relative p-8">
                <div className="text-accent mb-4 text-4xl font-serif">&quot;</div>
                <p className="text-lg italic text-foreground/80 mb-6 relative z-10">
                  The efficiency is unmatched. I was in at 12:00 and back at my desk in Barangaroo by 1:05. It&apos;s the first time a dental visit felt like a productivity win rather than a time sink.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">SA</div>
                  <div>
                    <p className="font-bold text-sm">Senior Associate</p>
                    <p className="text-xs text-muted-foreground">Magic Circle Law Firm</p>
                  </div>
                </div>
              </Card>

              <Card className="rounded-none border-border/50 shadow-sm bg-slate-50 relative p-8">
                <div className="text-accent mb-4 text-4xl font-serif">&quot;</div>
                <p className="text-lg italic text-foreground/80 mb-6 relative z-10">
                  I&apos;ve always been anxious about dental work, but the &apos;Sanctuary&apos; vibe is real. The noise-canceling tech and the calm aesthetic made my veneer transformation actually enjoyable.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">CD</div>
                  <div>
                    <p className="font-bold text-sm">Creative Director</p>
                    <p className="text-xs text-muted-foreground">Tech Lead</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 9. THE AESTHETIC BLUEPRINT (Smile Quiz) */}
      <SmileQuiz />

      {/* 10. FAQ (Objection Removal) */}
      <section id="faq" className="w-full py-24 px-4 md:px-12 bg-muted/30 border-t border-border/50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl text-primary mb-4">Clarity & Transparency</h2>
            <p className="text-muted-foreground">We address your primary concerns with absolute precision.</p>
          </div>

          <Accordion className="w-full space-y-4">
            <AccordionItem value="item-1" className="border border-border/50 bg-white px-6">
              <AccordionTrigger className="text-lg font-medium hover:text-accent">How long does a standard session actually take?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Our Executive Ritual is hard-capped at 60 minutes. We provide a &quot;Punctuality Guarantee&quot;—if we aren&apos;t ready for you within 5 minutes of your reserved time, your next session is on us.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border border-border/50 bg-white px-6">
              <AccordionTrigger className="text-lg font-medium hover:text-accent">I hate the &apos;dentist smell&apos; and the sound of drills.</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                We&apos;ve eliminated both. Our clinic uses medical-grade air filtration infused with subtle essential oils and provides premium noise-canceling headphones to ensure your &quot;Session&quot; feels nothing like a traditional check-up.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-border/50 bg-white px-6">
              <AccordionTrigger className="text-lg font-medium hover:text-accent">Luxury sounds expensive. What am I looking at?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                We offer flat-fee transparency for our CBD rituals. For larger cosmetic transformations, our $34/week plans are interest-free and approved instantly on-site, making your investment as manageable as a gym membership.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-border/50 bg-white px-6">
              <AccordionTrigger className="text-lg font-medium hover:text-accent">How do I know the results will look natural?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Our &quot;Digital Smile Design&quot; allows you to see a 3D simulation of your result before we even begin. You approve the aesthetic; we simply execute the precision.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* 11. THE VIRTUAL SANCTUARY (Clinic Tour) */}
      <VirtualTour />

    </div>
  );
}
