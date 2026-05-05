# Implementation Plan: Premium Editorial Footer

## Goal
Transform the current basic footer into a high-fidelity, 4-column editorial layout that establishes the "Sydney CBD Dental-Spa" as a premier, professional institution for the elite CBD workforce.

## Proposed Changes

### 1. Component Extraction
- **Action:** Move the footer logic from `src/app/page.tsx` into a dedicated `src/components/Footer.tsx` component.
- **Rationale:** Better maintainability and cleaner page structure.

### 2. Layout Structure (The Grid)
- **Top Border:** A refined 2px solid border using the **Accent (Champagne Gold)** token.
- **4-Column Grid:**
    - **Col 1 (Identity):** Logo (Fraunces serif) + a short ethos statement ("Precision clinical care meet sanctuary-level relaxation for the modern professional.").
    - **Col 2 (Services/Rituals):** Text links for *The Executive Ritual, The Transformation Suite, Corporate Packages, Concierge Booking.*
    - **Col 3 (Locations):** Barangaroo and Martin Place addresses with "Get Directions" utility links.
    - **Col 4 (Schedule):** Highlighting the 7:30 AM and 7:00 PM sessions to emphasize efficiency for the "time-poor" persona.

### 3. Trust & Affiliations Bar
- **Content:** A subtle horizontal row featuring HICAPS, ADA, and a "Corporate Partner" slot.
- **Styling:** Monochromatic (grayscale) logos with low opacity, becoming full color/gold on hover.

### 4. The "Ritual Bulletin" (Newsletter)
- **Component:** A minimalist input field with no border (only a bottom border) and a Gold "Join" CTA.
- **Copy:** "Insights on performance and aesthetics. Join the Ritual Bulletin."

### 5. Aesthetic Refinement
- **Colors:** Background: `bg-primary` (#0F172A). Text: `text-white/80` with Gold headers.
- **Typography:** Headers in **Fraunces** (Semi-bold), links in **Plus Jakarta Sans** (Medium).
- **Interactions:** "Soft-glow" gold hover effects on all links.

## Verification Plan
- **Desktop:** Verify 4-column alignment and hover states.
- **Mobile:** Ensure columns stack elegantly with appropriate padding.
- **Accessibility:** Ensure all links have proper aria-labels and contrast ratios.
