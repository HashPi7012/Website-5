"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function BookingModal({ children }: { children: React.ReactElement }) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={children} />
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl text-primary">Reserve Your Session</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Enter your details to secure a 60-minute Executive Ritual or Transformation Consultation.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium">Full Name</label>
            <input id="name" className="border border-border p-2" placeholder="Jane Doe" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="firm" className="text-sm font-medium">Corporate Firm (Optional)</label>
            <input id="firm" className="border border-border p-2" placeholder="e.g., Magic Circle Law Firm" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="session-type" className="text-sm font-medium">Session Type</label>
            <select id="session-type" className="border border-border p-2 bg-white">
              <option>The 60-Minute Executive Ritual</option>
              <option>Transformation Consultation ($34/wk)</option>
              <option>The Sanctuary Experience</option>
            </select>
          </div>
        </div>
        <div className="flex justify-end">
          <Button onClick={() => setOpen(false)} className="bg-primary text-primary-foreground hover:bg-primary/90">Confirm Reservation</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
