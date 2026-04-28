import { BookingModal } from "./BookingModal";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-20 max-w-screen-xl items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <a href="/" className="flex items-center space-x-2">
            <span className="font-heading font-bold text-xl tracking-tight text-primary">
              Sydney CBD <span className="text-accent font-sans">Dental-Spa</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-foreground/80">
            <a href="#rituals" className="hover:text-primary transition-colors">Rituals</a>
            <a href="#transformation" className="hover:text-primary transition-colors">Transformation</a>
            <a href="#sanctuary" className="hover:text-primary transition-colors">The Sanctuary</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <BookingModal>
            <Button className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm rounded-none">
              Reserve Your Session
            </Button>
          </BookingModal>
        </div>
      </div>
    </header>
  );
}
