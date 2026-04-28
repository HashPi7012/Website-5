import { BookingModal } from "./BookingModal";
import { Button } from "@/components/ui/button";

export function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/80 backdrop-blur-md border-t border-border/40 md:hidden">
      <BookingModal>
        <Button className="w-full h-14 bg-primary text-primary-foreground hover:bg-primary/90 text-lg shadow-lg rounded-none">
          Reserve Your Session
        </Button>
      </BookingModal>
    </div>
  );
}
