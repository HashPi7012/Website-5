# Implementation Update 1: Dental Industry Enhancements

> 8 new sections and component upgrades for the Sydney CBD Dental-Spa single-page site.  
> All additions stay on `page.tsx` with collapsible reveal buttons for longer sections.

---

## Design Decisions

### Single-Page Section Order (Top → Bottom)

```
1.  Hero                          ← existing (unchanged)
2.  Trust Bar                     ← existing (unchanged)
3.  Dual-Track Engine             ← existing (unchanged)
4.  ★ The Atelier Portfolio       ← NEW (Before/After Reveal)
5.  The Sanctuary Gallery         ← existing (unchanged)
6.  ★ The Technology Suite        ← NEW (Animated Equipment)
7.  ★ The Clinical Artisans      ← NEW (Practitioner Profiles)
8.  Social Proof + ★ Animated Stats  ← existing UPGRADED
9.  ★ The Aesthetic Blueprint    ← NEW (Smile Assessment Quiz)
10. FAQ                           ← existing (unchanged)
11. ★ The Virtual Sanctuary      ← NEW (Clinic Tour)
12. ─── Footer ───               ← existing (in layout.tsx)
```

> [!NOTE]
> The Emergency Concierge (Proposal 5) is a **floating overlay**, not a section. It persists across the page.  
> The Enhanced Booking Modal (Proposal 8) replaces the existing `BookingModal.tsx`.

### Reveal/Expand Button Pattern

For sections that are long or contain many items (Atelier Portfolio, Technology Suite, Virtual Tour), we use a **consistent reveal pattern**:

- Show a curated preview (2–3 items) by default
- A centered "Reveal All" button below the preview
- Clicking expands the full content with a smooth height animation
- Button text changes to "Show Less" when expanded
- Works identically on mobile and desktop

**Implementation**: A shared `RevealSection` wrapper component that handles the expand/collapse state and animation via Framer Motion's `AnimatePresence` + `motion.div` with `layout` prop.

---

## Proposed Changes

---

### Design Tokens

#### [MODIFY] [globals.css](file:///c:/Users/navad/Projects/Antigravity/Dental%20Clinic%20Websites/Website%205/src/app/globals.css)

Add new semantic tokens to the `:root` block for the new sections:

```css
/* New tokens for enhancement sections */
--success: #22C55E;          /* Green for quiz completion, form success */
--success-foreground: #FFFFFF;
--emergency: #EF4444;         /* Red for emergency concierge pulse */
--emergency-foreground: #FFFFFF;
--overlay: rgba(15, 23, 42, 0.85); /* Dark overlay for virtual tour */
```

Add new keyframe definitions at the bottom of the file:

```css
@keyframes count-up {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fade-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes pulse-ring {
  0% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(239, 68, 68, 0); }
  100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
}
```

Also add new color mappings in the `@theme inline` block:

```css
--color-success: var(--success);
--color-success-foreground: var(--success-foreground);
--color-emergency: var(--emergency);
--color-emergency-foreground: var(--emergency-foreground);
--color-overlay: var(--overlay);
```

---

### Image Assets

#### [NEW] public/images/ directory

Copy all generated images from the conversation artifacts into the project:

| Source File | Destination | Usage |
|---|---|---|
| `practitioner_dr_chen_*.png` | `public/images/team/dr-chen.png` | Practitioner grid |
| `practitioner_dr_mehta_*.png` | `public/images/team/dr-mehta.png` | Practitioner grid |
| `practitioner_dr_park_*.png` | `public/images/team/dr-park.png` | Practitioner grid |
| `smile_before_case1_*.png` | `public/images/cases/case-1-before.png` | Before/After slider |
| `smile_after_case1_*.png` | `public/images/cases/case-1-after.png` | Before/After slider |
| `smile_before_case2_*.png` | `public/images/cases/case-2-before.png` | Before/After slider |
| `smile_after_case2_*.png` | `public/images/cases/case-2-after.png` | Before/After slider |
| `smile_before_case3_*.png` | `public/images/cases/case-3-before.png` | Before/After slider |
| `smile_after_case3_*.png` | `public/images/cases/case-3-after.png` | Before/After slider |
| `clinic_reception_*.png` | `public/images/tour/reception.png` | Virtual tour |
| `clinic_treatment_suite_*.png` | `public/images/tour/treatment-suite.png` | Virtual tour |
| `clinic_recovery_lounge_*.png` | `public/images/tour/recovery-lounge.png` | Virtual tour |

---

### Shared Utility Component

#### [NEW] src/components/RevealSection.tsx

A reusable expand/collapse wrapper used by multiple new sections.

**Props:**
- `previewContent: React.ReactNode` — content visible when collapsed
- `revealContent: React.ReactNode` — content revealed on expand
- `revealText?: string` — button label (default: "Reveal the Collection")
- `collapseText?: string` — button label when expanded (default: "Show Less")

**Behavior:**
- Always renders `previewContent`
- On expand, renders `revealContent` below it via Framer Motion `AnimatePresence`
- Animates the revealed content with staggered `fade-up`
- Centered gold-outlined button controls the toggle
- Uses `useReducedMotion` from Framer for accessibility

---

### Section 4: The Atelier Portfolio (Before/After Reveal)

#### [NEW] src/components/BeforeAfterSlider.tsx

A single case card with a horizontal drag slider.

**Implementation details:**
- Uses a `useRef` + mouse/touch event handlers for the drag handle
- Two images layered via `position: absolute`, the "after" image clipped with `clip-path: inset(0 0 0 X%)` where X is the drag position
- Gold vertical drag handle line with a circular grip indicator
- Below the image: case narrative card (case name, treatment, timeline, investment)
- Responsive: full-width on mobile, contained max-width on desktop

#### [NEW] src/components/AtelierPortfolio.tsx

The section wrapper.

**Structure:**
- Section heading: "The Atelier Portfolio" / "Precision transformations, curated."
- Dot navigator at the bottom to switch between 3 cases
- Uses `useState` for active case index
- Case data array with before/after image paths and narrative text
- Wrapped in `RevealSection` — shows first case by default, reveals the case navigator and additional cases on expand

**Case data (fictional):**

| Case | Title | Treatment | Timeline | Investment |
|---|---|---|---|---|
| 1 | The Executive Refresh | 10 Porcelain Veneers | 3 sessions, 2 weeks | $34/week |
| 2 | The Alignment Protocol | Invisalign Lite | 12 weeks | $28/week |
| 3 | The Complete Transformation | 8 Veneers + Whitening | 4 sessions, 3 weeks | $52/week |

---

### Section 6: The Technology Suite

#### [NEW] src/components/TechnologyShowcase.tsx

Card grid showcasing 5 dental technologies.

**Structure:**
- Section heading: "The Technology Suite" / "Why this isn't your childhood dentist."
- 5 technology cards in a responsive grid (1 col mobile, 2–3 col tablet, 5 col desktop)
- Each card: icon (from lucide-react), technology name, single-sentence benefit
- Subtle gold left-border accent on each card
- Cards animate in with staggered `fade-up` on scroll via `useInView` from Framer Motion
- Wrapped in `RevealSection` — shows first 3 cards by default, reveals all 5 on expand

**Technology data:**

| # | Name | Icon | Benefit |
|---|---|---|---|
| 1 | 3D Digital Smile Design | `ScanFace` | "See your result before we begin." |
| 2 | CEREC Same-Day Crowns | `Timer` | "Your restoration, milled and fitted in 60 minutes." |
| 3 | Computerised Anaesthesia | `Wand` | "Computerised delivery eliminates the sting." |
| 4 | Air-Polishing System | `Wind` | "Silent biofilm removal via pressurised glycine powder." |
| 5 | CBCT 3D Imaging | `Box` | "Full cranial mapping in 14 seconds." |

> [!NOTE]
> Icon availability will be verified against installed `lucide-react@1.11.0` before implementation. Substitutes (e.g., `Sparkles` for `ScanFace`) will be used if specific icons are missing.

---

### Section 7: The Clinical Artisans (Practitioner Profiles)

#### [NEW] src/components/PractitionerGrid.tsx

Staggered editorial grid of 3 practitioner cards.

**Structure:**
- Section heading: "The Clinical Artisans" / "Your transformation is only as precise as the hands that craft it."
- 3 cards in a staggered grid (middle card offset vertically by ~40px on desktop)
- Each card: portrait image, name, title, specialisation, single-sentence philosophy
- Hover effect: subtle scale + gold border glow transition
- Image uses `next/image` for optimisation with `sizes` prop for responsive loading
- No `RevealSection` needed — only 3 items, all shown

**Practitioner data (fictional):**

| # | Name | Title | Specialisation | Philosophy |
|---|---|---|---|---|
| 1 | Dr. James Chen | Principal Aesthetic Architect | Porcelain Veneers, Full-Mouth Rehabilitation | "The mouth is architecture. Every angle is deliberate." |
| 2 | Dr. Anika Mehta | Aesthetic Director | Digital Smile Design, Cosmetic Bonding | "I design confidence. The clinical work is simply how I deliver it." |
| 3 | Dr. Liam Park | Alignment Specialist | Invisalign Diamond Provider, Orthodontics | "Straight teeth are the foundation. Everything else is refinement." |

---

### Section 8: Social Proof — Animated Statistics Upgrade

#### [MODIFY] Social Proof section in [page.tsx](file:///c:/Users/navad/Projects/Antigravity/Dental%20Clinic%20Websites/Website%205/src/app/page.tsx)

#### [NEW] src/components/AnimatedCounter.tsx

A scroll-triggered number counter component.

**Props:**
- `end: number` — target value
- `suffix?: string` — e.g., "%", "+", "★"
- `duration?: number` — animation duration in ms (default: 1500)
- `label: string` — descriptor text below the number

**Implementation:**
- Uses `useInView` from Framer Motion to trigger only once when scrolled into view
- Counts from 0 to `end` using `requestAnimationFrame` with easing
- Gold underline animation slides in after count completes
- Number uses `font-heading` (Fraunces) for editorial weight

**Upgrade the existing stats from 2 to 4 data points:**

| Metric | Value | Suffix | Label |
|---|---|---|---|
| Punctuality Rate | 98 | % | Under 2 min wait |
| CBD Smiles | 1247 | + | Transformed |
| Average Rating | 4.9 | ★ | Patient Satisfaction |
| Walk from Barangaroo | 12 | min | Station to Suite |

Restructure into a 4-column evidence bar above the testimonial cards.

---

### Section 9: The Aesthetic Blueprint (Smile Assessment Quiz)

#### [NEW] src/components/SmileQuiz.tsx

A multi-step qualification quiz rendered inline on the page.

**Structure:**
- Section heading: "Your Aesthetic Blueprint" / "Discover your personalised ritual in 60 seconds."
- 4 steps rendered as a single card with animated slide transitions
- Each step: question text + 3 option buttons (gold outline, fill on select)
- Progress indicator: 4 dots at the top, filled as steps complete
- Final step: personalised "Ritual Recommendation" card with treatment name, estimated investment, and a "Reserve This Ritual" CTA that opens the booking modal
- Wrapped in `RevealSection` — shows intro text + Step 1 by default, full quiz expands on "Begin Assessment"

**Quiz steps:**

| Step | Question | Options |
|---|---|---|
| 1 | "What brings you to the sanctuary?" | Maintain my edge / Refine my aesthetic / Correct and restore |
| 2 | "How would you describe your timeline?" | This week / Within the quarter / Exploring possibilities |
| 3 | "Your comfort philosophy?" | I'm clinical — just get it done / I value calm — the sanctuary matters / I need reassurance — take it slow |
| 4 | "Your investment comfort?" | Under $500 / $34–80/week / Investment is secondary to result |

**Result mapping logic:**
- Routine + Urgent + Clinical → "The Express Executive Ritual" ($295 flat fee)
- Cosmetic + Planning + Calm → "The Transformation Suite" ($34–52/week)
- Restorative + Any + Reassurance → "The Sanctuary Restoration" (custom quote)
- Default fallback → "The Executive Ritual" with "Book a consultation" CTA

---

### Section 11: The Virtual Sanctuary (Clinic Tour)

#### [NEW] src/components/VirtualTour.tsx

Full-width cinematic clinic walkthrough section.

**Structure:**
- Section heading: "Step Inside the Sanctuary" / "Your environment, before you arrive."
- 3 large images in a horizontal scroll strip (mobile) or side-by-side grid (desktop)
- Each image has a dark gradient overlay with a label: "The Reception", "The Treatment Suite", "The Recovery Lounge"
- Images use `next/image` with `priority` loading
- Subtle parallax on desktop (different scroll speeds per image via Framer `useTransform`)
- Wrapped in `RevealSection` — shows first image (Reception) by default, reveals all 3 on expand

---

### Emergency Concierge (Floating Overlay)

#### [NEW] src/components/EmergencyConcierge.tsx

Persistent floating widget.

**Structure:**
- Fixed position: bottom-right on desktop (bottom-20 right-6), bottom-center on mobile (above MobileCTA bar)
- Collapsed state: small pill with pulsing red dot + "Dental Emergency?" text
- Expanded state (on click): card with heading, 2 input fields (name, phone), submit button
- Submit shows "We'll call within 15 minutes" confirmation with green checkmark
- Close button (X) to dismiss — re-appears after 60s or on next page scroll
- Uses `AnimatePresence` for smooth expand/collapse
- z-index: 40 (below MobileCTA at 50)

**Render location:** `layout.tsx`, placed between `<Footer />` and `<MobileCTA />`

---

### Enhanced Booking Modal

#### [MODIFY] [BookingModal.tsx](file:///c:/Users/navad/Projects/Antigravity/Dental%20Clinic%20Websites/Website%205/src/components/BookingModal.tsx)

Transform from single-step 3-field form into a polished 3-step flow.

**Step 1 — Select Your Ritual:**
- 3 visual cards (not a dropdown): Executive Ritual, Transformation Suite, Sanctuary Experience
- Each card: icon, name, duration, price indicator
- Selecting a card highlights it with gold border and auto-advances to step 2

**Step 2 — Your Details:**
- Name (text input, styled)
- Corporate Email (email input, styled)
- Preferred Location: Barangaroo / Martin Place (two toggle pill buttons)
- Optional textarea: "Any concerns we should know about?"

**Step 3 — Preferred Timing:**
- 3 time slot cards: Pre-Market (7:30–9:00 AM) / Executive Hours (9:00 AM–5:00 PM) / Sunset Sessions (5:00–7:00 PM)
- "First available" toggle switch
- "Confirm Reservation" primary button

**Confirmation screen:**
- Animated gold checkmark (CSS keyframe animation)
- "Your concierge will confirm within 2 hours"
- "Done" button to close the dialog

**Implementation notes:**
- Gold progress bar at top (3 segments, fills left-to-right as steps advance)
- Framer Motion `AnimatePresence` for step transitions (horizontal slide)
- Back arrow button on steps 2 and 3
- Dialog size increased to `sm:max-w-[520px]` to accommodate cards
- All state managed with `useState` (step index, selections object)

---

### Header Navigation Update

#### [MODIFY] [Header.tsx](file:///c:/Users/navad/Projects/Antigravity/Dental%20Clinic%20Websites/Website%205/src/components/Header.tsx)

Update nav links to include new sections:

**New nav order:**
```
Rituals | Transformations | The Sanctuary | Team | FAQ
```

- "Transformations" → `#atelier` (Before/After section)
- "Team" → `#artisans` (Practitioner section)
- Replace existing "Transformation" (singular) with "Transformations"

---

## Open Questions

> [!IMPORTANT]
> **No open questions remain** — all decisions are resolved per the user's answers:
> 1. ✅ Generate AI images (done — 12 assets generated)
> 2. ✅ Fictional practitioner identities (defined above)
> 3. ✅ All 8 proposals selected
> 4. ✅ Single page with reveal buttons

---

## Verification Plan

### Automated Tests
- `npm run build` — must pass with zero TypeScript errors
- Visual check on `localhost:3000` at 3 viewports: 375px (mobile), 768px (tablet), 1440px (desktop)

### Manual Verification
- All reveal buttons expand and collapse correctly on both mobile and desktop
- Before/After slider is draggable via mouse and touch
- Smile Quiz progresses through all 4 steps and shows a valid recommendation
- Emergency Concierge expands, submits, and shows confirmation
- Enhanced Booking Modal navigates all 3 steps and shows confirmation
- Animated counters trigger exactly once when scrolled into view
- All generated images load correctly from `/public/images/`
- No hydration errors in the browser console
