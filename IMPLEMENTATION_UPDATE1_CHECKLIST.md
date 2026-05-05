# Implementation Update 1 — Checklist

> Track progress for all 8 dental industry enhancements.

---

## Phase 0: Foundation
- [x] Add new design tokens to `globals.css` (success, emergency, overlay colors + keyframes)
- [x] Create `public/images/team/` directory and copy practitioner images
- [x] Create `public/images/cases/` directory and copy before/after images
- [x] Create `public/images/tour/` directory and copy clinic interior images
- [x] Verify all lucide-react icons exist (`ScanFace`, `Timer`, `Wand`, `Wind`, `Box`)
- [x] Build `RevealSection.tsx` shared component

## Phase 1: The Atelier Portfolio (Before/After Reveal)
- [x] Build `BeforeAfterSlider.tsx` component (drag handle, clip-path, touch support)
- [x] Build `AtelierPortfolio.tsx` section wrapper (3 cases, dot navigator)
- [x] Add case data (fictional narratives for 3 transformation cases)
- [x] Integrate into `page.tsx` after Dual-Track section
- [x] Wrap in `RevealSection` (show 1 case, expand for all 3)
- [ ] Test drag on mobile (touch) and desktop (mouse)

## Phase 2: The Technology Suite
- [x] Build `TechnologyShowcase.tsx` component (5 tech cards, staggered animation)
- [x] Add gold left-border accent styling
- [x] Integrate into `page.tsx` after Sanctuary Gallery
- [x] Wrap in `RevealSection` (show 3 cards, expand for all 5)
- [ ] Test scroll-triggered animations

## Phase 3: The Clinical Artisans (Practitioner Profiles)
- [x] Build `PractitionerGrid.tsx` component (3 cards, staggered layout)
- [x] Implement hover effects (scale + gold glow)
- [x] Use `next/image` for optimised portrait loading
- [x] Integrate into `page.tsx` after Technology Suite
- [ ] Test responsive layout (stacked mobile, staggered desktop)

## Phase 4: Animated Statistics Upgrade
- [x] Build `AnimatedCounter.tsx` component (scroll-triggered, requestAnimationFrame)
- [x] Expand from 2 to 4 data points (add rating + walk time)
- [x] Restructure Social Proof section into 4-column evidence bar + testimonials
- [x] Add gold underline animation after count completes
- [ ] Test that counters trigger exactly once

## Phase 5: The Aesthetic Blueprint (Smile Quiz)
- [x] Build `SmileQuiz.tsx` component (4 steps + result card)
- [x] Implement step navigation with Framer Motion slide transitions
- [x] Add progress dots indicator
- [x] Implement result mapping logic (3 treatment paths + fallback)
- [x] Connect result CTA to `BookingModal`
- [x] Integrate into `page.tsx` after Social Proof section
- [x] Wrap in `RevealSection` (show intro + step 1, expand for full quiz)

## Phase 6: The Virtual Sanctuary (Clinic Tour)
- [x] Build `VirtualTour.tsx` component (3 images, overlay labels)
- [x] Implement horizontal scroll on mobile, grid on desktop
- [x] Add subtle parallax via Framer `useTransform`
- [x] Integrate into `page.tsx` after FAQ section
- [x] Wrap in `RevealSection` (show reception, expand for all 3)

## Phase 7: Emergency Concierge (Floating Widget)
- [x] Build `EmergencyConcierge.tsx` component
- [x] Implement collapsed pill state (pulsing red dot)
- [x] Implement expanded card state (name + phone + submit)
- [x] Add confirmation state ("We'll call within 15 minutes")
- [x] Add dismiss + re-appear logic (60s timeout or scroll)
- [x] Add to `layout.tsx` between Footer and MobileCTA
- [ ] Test positioning on mobile (above MobileCTA bar) and desktop (bottom-right)

## Phase 8: Enhanced Booking Modal
- [x] Redesign `BookingModal.tsx` into 3-step flow
- [x] Step 1: Visual ritual selection cards (3 options)
- [x] Step 2: Details form (name, email, location toggle, notes)
- [x] Step 3: Timing selection cards (3 slots + first-available toggle)
- [x] Confirmation screen (animated checkmark + message)
- [x] Add gold progress bar at top
- [x] Add back navigation on steps 2–3
- [x] Increase dialog width to `sm:max-w-[520px]`
- [ ] Test full flow end-to-end

## Phase 9: Navigation & Integration
- [x] Update `Header.tsx` nav links (add Transformations, Team)
- [x] Ensure all section `id` attributes match nav `href` anchors
- [x] Final `npm run build` — zero errors
- [ ] Visual QA at 375px, 768px, and 1440px viewports
- [ ] Check browser console for hydration errors
- [ ] Test all reveal buttons expand/collapse on mobile and desktop

---

**Total items: 52 | Completed: 45 | Remaining: 7 (all visual/manual QA)**
