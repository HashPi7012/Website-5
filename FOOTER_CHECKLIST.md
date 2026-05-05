# Footer Overhaul Checklist

## Phase 1: Preparation
- [x] Create `src/components/Footer.tsx`.
- [x] Remove existing footer code from `src/app/page.tsx`.
- [x] Import and place new `<Footer />` in `src/app/page.tsx` (or `layout.tsx`).

## Phase 2: Core Structure
- [x] Implement the `bg-primary` container with Gold top border.
- [x] Define the 4-column responsive grid (1 col on mobile, 2 on tablet, 4 on desktop).
- [x] Add the Brand Identity column with the ethos statement.

## Phase 3: Content & Links
- [x] Add the "Rituals" link column.
- [x] Add the "Locations" column (Barangaroo & Martin Place).
- [x] Add the "Schedule" column with business hours.
- [x] Style all links with Gold hover effects.

## Phase 4: Premium Features
- [x] Implement "The Ritual Bulletin" (Newsletter) with the minimalist bottom-border input.
- [x] Add the Trust/Affiliations bar with grayscale logos.
- [x] Ensure HICAPS and ADA mentions are clear.

## Phase 5: Polish & QA
- [x] Check mobile responsiveness and stacking behavior.
- [x] Verify font variable usage (`--font-fraunces` and `--font-plus-jakarta-sans`).
- [x] Final visual check against the "Quiet Luxury" persona.
