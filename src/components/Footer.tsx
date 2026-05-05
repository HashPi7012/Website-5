"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BookingModal } from "@/components/BookingModal";
import { Camera, Users, MapPin, ArrowRight, ShieldCheck } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      // Simulate API call reset
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="w-full bg-primary text-primary-foreground border-t-2 border-accent relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-12 py-16 max-w-7xl">
        
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Col 1: Identity */}
          <div className="flex flex-col">
            <h2 className="font-heading text-2xl mb-4 text-white">
              Sydney CBD <span className="text-accent font-sans">Dental-Spa</span>
            </h2>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Precision clinical care meets sanctuary-level relaxation for the modern professional.
            </p>
            <div className="flex gap-4 mt-auto">
              <Button variant="ghost" size="icon-sm" className="text-white/50 hover:text-accent hover:bg-transparent px-0 transition-colors">
                <Camera className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon-sm" className="text-white/50 hover:text-accent hover:bg-transparent px-0 transition-colors">
                <Users className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>
          </div>

          {/* Col 2: Rituals */}
          <div className="flex flex-col">
            <h3 className="font-heading text-lg text-accent mb-4">The Rituals</h3>
            <nav className="flex flex-col space-y-3 text-sm">
              <BookingModal>
                <button className="text-left text-white/70 hover:text-accent hover:translate-x-1 transition-all duration-300 w-max">
                  The Executive Ritual
                </button>
              </BookingModal>
              <BookingModal>
                <button className="text-left text-white/70 hover:text-accent hover:translate-x-1 transition-all duration-300 w-max">
                  The Transformation Suite
                </button>
              </BookingModal>
              <a href="#sanctuary" className="text-white/70 hover:text-accent hover:translate-x-1 transition-all duration-300 w-max">
                The Sanctuary Experience
              </a>
              <a href="#rituals" className="text-white/70 hover:text-accent hover:translate-x-1 transition-all duration-300 w-max">
                Corporate Memberships
              </a>
            </nav>
          </div>

          {/* Col 3: Locations */}
          <div className="flex flex-col">
            <h3 className="font-heading text-lg text-accent mb-4">The Sanctuary</h3>
            <div className="flex flex-col space-y-5 text-sm text-white/70">
              <div>
                <p className="font-medium text-white mb-1">Barangaroo</p>
                <p className="mb-2">Level 42, International Tower 1<br/>Sydney NSW 2000</p>
                <button className="text-xs text-accent uppercase tracking-wider hover:text-white transition-colors flex items-center gap-1 group">
                  <MapPin className="w-3 h-3 group-hover:scale-110 transition-transform" /> Get Directions
                </button>
              </div>
              <div>
                <p className="font-medium text-white mb-1">Martin Place</p>
                <p className="mb-2">Suite 5, 1 Martin Place<br/>Sydney NSW 2000</p>
                <button className="text-xs text-accent uppercase tracking-wider hover:text-white transition-colors flex items-center gap-1 group">
                  <MapPin className="w-3 h-3 group-hover:scale-110 transition-transform" /> Get Directions
                </button>
              </div>
            </div>
          </div>

          {/* Col 4: Schedule & Bulletin */}
          <div className="flex flex-col">
            <h3 className="font-heading text-lg text-accent mb-4">The Schedule</h3>
            <div className="text-sm text-white/70 mb-8 space-y-2">
              <p className="flex justify-between border-b border-white/10 pb-1">
                <span>Pre-Market:</span> <span className="text-white">7:30 AM - 9:00 AM</span>
              </p>
              <p className="flex justify-between border-b border-white/10 pb-1">
                <span>Executive Hours:</span> <span className="text-white">9:00 AM - 5:00 PM</span>
              </p>
              <p className="flex justify-between border-b border-white/10 pb-1">
                <span>Sunset Sessions:</span> <span className="text-white">5:00 PM - 7:00 PM</span>
              </p>
            </div>

            <h3 className="font-heading text-lg text-accent mb-3">The Ritual Bulletin</h3>
            <p className="text-xs text-white/50 mb-3">Insights on performance and aesthetics.</p>
            <form onSubmit={handleSubscribe} className="relative">
              <input 
                type="email" 
                placeholder="Corporate Email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-b border-white/20 text-white placeholder:text-white/30 pb-2 text-sm focus:outline-none focus:border-accent transition-colors"
                disabled={subscribed}
              />
              <button 
                type="submit" 
                className="absolute right-0 top-0 text-accent hover:text-white transition-colors disabled:opacity-50"
                disabled={subscribed}
              >
                {subscribed ? <ShieldCheck className="w-5 h-5 text-green-400" /> : <ArrowRight className="w-5 h-5" />}
              </button>
              {subscribed && <p className="text-xs text-green-400 mt-2 absolute">Request received.</p>}
            </form>
          </div>
        </div>

        {/* Affiliations Bar */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-8 py-8 border-y border-white/10 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
          <div className="text-xs font-semibold tracking-widest uppercase">HICAPS Integrated</div>
          <div className="w-1 h-1 rounded-full bg-accent/50"></div>
          <div className="text-xs font-semibold tracking-widest uppercase">ADA Accredited</div>
          <div className="w-1 h-1 rounded-full bg-accent/50"></div>
          <div className="text-xs font-semibold tracking-widest uppercase">Equinox CBD Executive Health Partner</div>
        </div>

        {/* Utility Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Sydney CBD Dental-Spa. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            <span className="text-white/20 hidden md:inline">|</span>
            <span className="italic">Refined for Sydney CBD.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
