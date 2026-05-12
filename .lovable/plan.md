## Goal

Replace the current showcase with a **6-slide Forfeitness pitch deck**, styled with the Forfeitness design system (lime/forest primary, brand-black, warm off-white, Syne display + Plus Jakarta Sans body) and built data-viz-forward using Recharts.

## 1. Reskin slide tokens (scoped to slides only)

Edit `src/index.css` so anything inside `.slide-content` adopts Forfeitness brand. App chrome (toolbar/sidebar/grid) keeps its current look.

- Add Google Fonts import: **Syne** (700/800) + **Plus Jakarta Sans** (400/500/600/700).
- Override CSS vars on `.slide-content`:
  - `--slide-primary` → brand-black (≈ `#0A0A0A`) — used for dark slides + primary text
  - `--slide-accent` → Forfeitness lime/forest (≈ `#1F7A4D`)
  - `--slide-accent-muted` → lime-soft pale background
  - `--slide-bg` → warm off-white (≈ `#FAFAF6`)
  - `--slide-forfeit` → red `#E1493A` (used sparingly, only on "miss")
  - `--slide-warning` → amber
- Default `.slide-content` font-family → Plus Jakarta Sans; headings/`.type-display`, `.type-h1/h2/h3`, `.type-metric`, `.numeral` → Syne 800 with `letter-spacing: -0.02em`.
- Add a few branded utility classes scoped under `.slide-content`: `.fs-eyebrow` (uppercase 11px tracked), `.fs-pill` (rounded-full lime/forfeit chip), `.fs-card` (radius 24–28px, soft border, subtle shadow), `.fs-stat` (Syne tabular-nums big number).

`MSSlideLayout` change: swap the wordmark in `LogoMark` to **"FORFEITNESS"** in Syne 800. The bottom 1px accent bar already reads from `--slide-accent` and becomes lime automatically. Keep `variant="default" | "dark"`.

## 2. Authoring rules (apply to every slide)

- Use `MSSlideLayout` (or matching wrapper) so canvas scaling + 20px font floor stay enforced.
- Tokens only — no hardcoded hex; charts use `hsl(var(--slide-accent))`, `hsl(var(--slide-primary))`, `hsl(var(--slide-forfeit))`.
- Money always in £ with proper minus sign (e.g. `−£15.00`) per Forfeitness brand non-negotiables.
- No entrance/hover animations (project memory rule). Recharts default tween is fine.
- Headings in Syne via `.type-*`; body in Plus Jakarta.

## 3. The 6 slides

Created in `src/slides/forfeitness/`, exported via `index.ts` as `forfeitnessSlides`, then wired into `src/pages/Index.tsx` (replacing the current slides import).

### Slide 1 — Title (`Slide01Title`, dark)
Massive Syne wordmark **FORFEITNESS**. Lime divider. One-liner: *"Skipping the gym should cost something."* Footer: founder name + date placeholder. Small lime stake-chip motif (`£15` pill) bottom-right as the brand's signature element.

### Slide 2 — Vision (`Slide02Vision`, light)
Two-column: left = founder name + business name (FORFEITNESS) in Syne; right = single-sentence vision: *"A weekly fitness pact between mates — backed by money — so showing up beats skipping out."* Lime accent rule. Small `fs-pill` row underneath: `social` · `accountable` · `financial stake`.

### Slide 3 — Problem & Solution (`Slide03ProblemSolution`, light, **data viz**)
Split layout.
- **Left (Problem):** pull-quote "I'll go tomorrow." in Syne display, with a small Recharts line chart showing the typical gym-attendance decay (synthetic 12-week curve from 4→0 sessions/wk) in muted gray with a forfeit-red dropoff.
- **Right (Solution):** a tight 3-row mechanic: (1) Pod of 3–8 mates · (2) £15 weekly stake · (3) Hit target → keep £, miss → split among hitters. Small lime ProgressRing-style SVG showing 4/4 sessions hit.

### Slide 4 — Market Opportunity (`Slide04Market`, light, **data viz heavy**)
- Top: eyebrow "Market Opportunity" + headline "Big market, perfect timing."
- **TAM / SAM / SOM** as three concentric circles SVG (visual nest) with the numbers beside them:
  - TAM: UK health & fitness consumers ≈ **15M** gym members + active adults
  - SAM: UK 18–30 urban, active, owns wearable ≈ **3.5M**
  - SOM (Y1–2): early-adopter pods in 4 UK cities ≈ **80K** users
  - *(numbers presented as defensible estimates; I'll annotate them as such on-slide)*
- **Right column — "Why now" trends**, small Recharts bar/line combo with 4 mini-stats:
  - Wearables penetration trending up (line, last 5y)
  - Run-club boom (bar, "+X% YoY")
  - Health-conscious Gen Z (stat tile)
  - Social-fitness apps category growth (stat tile)
- Lime callout pill: *"Behaviour change is the unmet job — tracking is solved."*

### Slide 5 — Progress & Personal Commitment (`Slide05Progress`, dark)
Headline: *"Already built. Already tested."*
- Left: a stylised iPhone frame (pure CSS, rounded-[3rem] dark device) showing a mock of the Forfeitness Home screen — stake card + week progress + pod card — built directly from the UI kit's component vocabulary. No external image needed.
- Right: 3 `fs-stat` numerals (Syne):
  - **1** working prototype (clickable iOS UI kit)
  - **6** core screens shipped (Home, Pod, Feed, Profile, Reveal, Log)
  - **N** weeks of self-funded design/dev (placeholder for founder to set)
- Bottom row: 3 `fs-pill` tags — `Design system shipped` · `User flows tested` · `Brand identity defined`.
- Small footnote: link target text "see live prototype →".

### Slide 6 — Business Model & Growth (`Slide06BusinessModel`, light, **data viz**)
- Top eyebrow + headline "Two revenue streams. Friend-led growth."
- **Left — Revenue model**: small horizontal stacked bar (Recharts) breaking out per-active-user monthly economics:
  - Subscription **£4.99/mo** (lime)
  - Transaction fee **+2% of weekly stake** on top of Stripe processing (dark)
  - Annotation: *"At £15 stake × 4 wks = £1.20/user/mo from forfeit flow"*
- **Right — Growth engine**: 4-step radial/numbered list with lucide-style icons:
  1. Organic social (TikTok / Instagram UGC)
  2. Founder-seeded friend groups
  3. Gym & run-club partnerships
  4. Strava / Apple Health distribution
- Bottom strip: 3 milestone chips: `100 pods` → `1,000 paying users` → `Break-even`.

### Slide 7 — Why Me, Why Now (`Slide07WhyMe`, dark, **closing**)
Two columns.
- **Left — Why me**: founder name in Syne; credentials list:
  - Master's in Digital Transformation
  - Undergraduate degree in Business
  - Built and shipped the prototype solo
  - Lives the problem (in the ICP demographic)
- **Right — Why now**: 3 short bullets with lime check icons (wearables ubiquity · post-COVID accountability gap · Gen Z social-money comfort).
- Bottom — **What the support unlocks**: 3 lime pills:
  - `AI tools for build velocity`
  - `UGC content production`
  - `Paid social acquisition`
- CTA strip: lime bar with text *"Let's make skipping cost something."*

*(Note: user's brief listed 6 slides but described 7 distinct sections — Title, Vision, Problem+Solution, Market, Progress, Business Model, Why Me. I've kept all 7 since each is meaningfully different. Easy to merge Title+Vision later if you'd rather have 6.)*

## 4. Data-viz approach

- All charts use **Recharts** (already installed via shadcn). Colors via CSS vars only.
- Custom SVG only for: TAM/SAM/SOM concentric circles, ProgressRing on slide 3, the iPhone frame on slide 5. All inline, tokenized.
- Recharts: disable grid lines or use `stroke="hsl(var(--slide-gray-200))"`; axis labels in Plus Jakarta 14–16px.

## 5. Wire-up

- `src/slides/forfeitness/index.ts` exports `forfeitnessSlides` matching the shape of `showcaseSlides` (`{ component, name, template }`).
- `src/pages/Index.tsx`: change the active slide source to `forfeitnessSlides`.
- Leave `demo/` and `showcase/` directories untouched as reference.

## Out of scope
- No PPTX export, no real founder photo (text wordmark only — matches Forfeitness brand convention).
- No backend changes, no new dependencies (Recharts + lucide-react already present; only adds a Google Fonts `<link>` via CSS `@import`).
- App chrome (toolbar/sidebar/grid view) untouched.

## Files touched
- `src/index.css` — add Forfeitness tokens + fonts scoped under `.slide-content`
- `src/components/slides/MSSlideLayout.tsx` — wordmark → "FORFEITNESS" in Syne
- `src/slides/forfeitness/Slide01Title.tsx` … `Slide07WhyMe.tsx` (new, 7 files)
- `src/slides/forfeitness/index.ts` (new)
- `src/pages/Index.tsx` — point to `forfeitnessSlides`
