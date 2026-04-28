# Design Tokens: Sydney CBD Dental-Spa

## 1. Core Color Palette
| Token | HEX | Role | Tailwind Class |
| :--- | :--- | :--- | :--- |
| **Primary (Midnight)** | `#0F172A` | Branding, Headlines, Primary Buttons | `bg-slate-950` / `text-slate-950` |
| **Accent (Champagne)** | `#D4AF37` | Highlights, Icons, Interactive Elements | `text-[#D4AF37]` / `border-[#D4AF37]` |
| **Neutral (Slate)** | `#F8FAFC` | Secondary Backgrounds, Subtle Borders | `bg-slate-50` |
| **Surface (White)** | `#FFFFFF` | Core Page Background | `bg-white` |
| **Glass** | `RGBA(255, 255, 255, 0.8)` | Navigation Blur, Interactive Overlays | `backdrop-blur-md` |

## 2. Typography (Premium Pairing)
- **Headlines:** `Fraunces` (Google Fonts)
  - *Weights:* 300 (Light), 600 (Semi-Bold)
  - *Character:* High-contrast editorial serif.
- **Body & UI:** `Plus Jakarta Sans` (Google Fonts)
  - *Weights:* 400 (Regular), 500 (Medium)
  - *Character:* Clean, modern, high legibility.

## 3. High-Frequency CTA Strategy
To ensure maximum conversion, the "Reserve Your Session" CTA is strategically placed:
1.  **Header:** Right-aligned (Primary Button).
2.  **Hero:** Under the sub-headline (Primary Button + Secondary "View Gallery").
3.  **Professional Track:** Bottom of the track (Primary Button).
4.  **Investor Track:** Next to the Investment Slider (Primary Button).
5.  **Mobile:** Persistent sticky bottom bar (Full-width Primary Button).
6.  **Footer:** Pre-footer banner (Primary Button).

## 4. Visual Language
- **Borders:** Thin (1px), subtle colors.
- **Radius:** `rounded-none` or `rounded-sm` (Sharp corners = More professional/architectural).
- **Icons:** `Lucide React` (Stroke width: 1.25px).
- **Shadows:** Soft, long-offset shadows or no shadows (Flat-luxury).
