# 📋 Implementation Plan — Portfolio v2 (Content + UI/UX + Engineering)

> **Status:** COMPLETE — all items in Section 8 are now done, including the two that were previously left open. See **Section 9 — Visual QA & Final Engineering Pass (2026-08-20)** below for what changed in this pass: the full breakpoint-scale rewrite (real browser testing, 9 cutoffs → 4: 1080/860/768/480) and the full asymmetric bento mosaic for the standard 8-card grid, plus four real bugs found and fixed during first-ever browser verification.
> **Depends on:** `PROJECT_MASTER_CONTEXT.md` (read first, rules below are inherited from it)
> **Source review:** full line-cited audit conducted 2026-08-19 (design/engineering review of `index.html`)
> **Rule inherited from master context:** *"Ask for clarification, never assume."* Every new fact you gave me that lacks a specific name/date/title is listed under **Section 7 — Open Questions** instead of being guessed at.

---

## 0. Access confirmation

Confirmed: I can read and write every file in `c:\Users\cakir\Downloads\Kiran Bora Profile\` — this is the working directory for this session.

---

## 1. New Content to Add

### 1.1 Update the "professionals trained" number
- **Change:** `1,500+` → `1,700+` everywhere it appears.
- **Known locations to update** (from current file structure): hero rotating chip (`1,500+ Mentored / Artist`), stats-banner counter (`data-target="1500"`), About section body copy, chatbot `FALLBACK_RESPONSES`/`KIRAN_SYSTEM_PROMPT`, Schema.org JSON-LD if it references the number, `PROJECT_MASTER_CONTEXT.md` matrix/change log.
- **Confirm:** is 1,700+ the new *total* across ICAI + ICSI + Advanced Excel/Power BI/AI corporate training combined? (Affects whether ICAI's "100+ CAs" is additive on top of 1,700+, or already folded into it.) → **See Q1 in Section 7.**

### 1.2 New credential: ICSI (Institute of Company Secretaries of India)
Two distinct facts to add:
- **(a) Faculty for AI courses aimed at CS (Company Secretary) students/professionals.**
- **(b) Delivered 2–3 sessions at ICSI, and has also served as a Judge** (for a competition/event — name TBD).

**Proposed placement:**
- A new line item inside the existing **Beyond Work / Training** area, or a 4th "pillar" if About's 3-pillar layout expands to 4 — *your call, options given in Section 4.*
- A short badge/chip near the stats banner or About signature: `ICSI Faculty · AI for CS Professionals`
- Career timeline: only if there's a specific date range you want shown (a timeline entry needs a start date at minimum).

### 1.3 New credential: ICAI Study Circle
- Taught in an ICAI **study circle**, 100+ CAs trained specifically in that context (distinct from general corporate training).
- **Proposed placement:** same credential-badge treatment as ICSI, likely paired together as a "Faculty & Institutional Training" mini-section — since both ICSI and ICAI are professional-body engagements, not corporate clients, they read stronger grouped together than scattered.

### 1.4 Why this matters narratively
Right now the "trainer" identity is proven only by a single stat (1,500+/1,700+) with no institutional weight behind it. Naming ICSI and ICAI by name is a *credibility multiplier* — "faculty at ICSI" and "taught 100+ CAs at an ICAI study circle" are the kind of named-institution proof points that make a CXO or training coordinator trust the number instead of skimming past it. This should not be a footnote — it deserves its own visual moment, not just a folded-in phrase.

---

## 2. Content Architecture Changes (carried over from the design/engineering audit)

These were flagged in the prior review and are included here so this plan is the single source of truth for the full pass — not spread across two conversations.

| # | Section | Current problem | Fix |
|---|---|---|---|
| 1 | Impact — MCP tool card | One 70+ word jargon-dense sentence, no plain-English hook | Add a one-line "GPS for product decisions" style hook above the existing detailed sentence |
| 2 | Impact — Global DRS card | Leads with jargon ("zero-leakage financial settlement") before stakes | Reorder: plain stakes sentence first, technical detail second |
| 3 | About / Career | Headline metrics (97%, 75%, ₹600 Cr) buried in run-on prose | Introduce a reusable `.metric-chip` component; surface the same numbers used in the stats banner inline in About and Career, not just prose |
| 4 | Sitewide headings | Only H1 + H2 exist; every card/pillar/timeline title is a bare `<div>` | Promote card/pillar/timeline titles to `<h3>` |
| 5 | Sitewide landmarks | No `<main>`; sections aren't `aria-labelledby` their own heading | Add `<main>` wrapper; wire `aria-labelledby` on each `<section>` |

---

## 3. Design Language Direction

You listed 29 aesthetic movements to consider. Here's a blunt fit assessment for a **Chartered Accountant / Enterprise PM / Institutional Trainer** brand, audience = CXOs, founders, investors, training coordinators.

| Style | Verdict | Why |
|---|---|---|
| Minimalism | **Borrow** | Already close to this; tighten spacing/reduce visual noise further |
| Swiss Design | **Adopt — core direction** | Strong grid, generous whitespace, disciplined type hierarchy — matches "systems architect" positioning perfectly |
| Neo-classical | **Adopt — core direction** | Classical proportion, serif gravitas, restrained ornament — pairs with the CA/institutional credibility angle and the existing serif display face |
| Luxury Typography | **Adopt — core direction** | Oversized serif headlines, italic accents, tight cap tracking — already the site's best instinct, push it further |
| Editorial Design | **Adopt — core direction** | Magazine-style asymmetry, pull-quotes, dossier-style case studies — fits a "profile of an executive" framing |
| Bento Grid | **Adopt** | Ideal for Impact/Tools/new credential badges — turns dense institutional facts (ICSI, ICAI, Recykal, Contetra) into a scannable mosaic instead of a wall of text |
| Glassmorphism | **Refine, don't remove** | Already present and on-brand; the engineering audit flagged it as over-stacked/GPU-heavy — tune blur radius and count, keep the texture |
| Dark Mode UI | **Keep — already core** | The midnight/obsidian/slate themes are the foundation; refine contrast per the accessibility audit, don't redesign |
| Conceptual Sketch | **Borrow, scoped only to Beyond Work** | He's a portrait artist — a subtle hand-sketch line motif is *authentic* here, not decorative trend-chasing |
| Mixed Media | **Borrow, scoped only to Beyond Work** | Same logic — art/athlete/builder cards can carry more texture than the finance/product sections |
| Wabi-Sabi | **Borrow philosophically, not visually** | The *principle* (restraint, quiet materials, no unnecessary ornament) supports simplifying visual noise elsewhere — don't apply it as a literal texture |
| Ethereal | **Keep subtle, don't push further** | The hero's gold-glow/orbit-ring already flirts with this — enough as-is |
| Maximalism | **Avoid** | Fights scannability for a CXO audience skimming in seconds |
| Brutalism | **Avoid** | Raw/unpolished tone conflicts with a luxury/institutional brand |
| Neo-Brutalism | **Avoid** | Reads irreverent/startup-y — wrong register for CA gravitas |
| Surrealism | **Avoid** | Not brand-appropriate for professional/financial credibility |
| Neumorphism | **Avoid** | Known accessibility/contrast problems; looks dated on dark navy |
| Scrapbook | **Avoid as primary** | Too casual/handmade for the persona overall |
| Claymorphism | **Avoid** | Playful 3D-clay look is the wrong tone entirely |
| Pixel Art | **Avoid** | Wrong register, no connection to the subject |
| Y2K Aesthetic | **Avoid** | Nostalgia/chrome/bubbly signals the wrong demographic |
| Bohemian | **Avoid** | Casual/free-spirit conflicts with corporate/institutional credibility |
| Cyberpunk | **Avoid as primary** | The obsidian theme's cyan accent already flirts with "technical" — don't push further into neon/glitch |
| Anthropomorphic | **Avoid** | Not relevant to this content |
| Victorian | **Avoid** | Period ornamentation mismatched to the brand |
| Cybercore | **Avoid** | Subculture/gamer-coded, wrong audience signal |
| Synthwave | **Avoid** | Retro-neon, wrong tone |
| Graffiti | **Avoid** | Street-art/rebellious tone, wrong register |
| Gothic | **Avoid** | Dark ornate blackletter aesthetic, wrong tone |

**Chosen direction — "Editorial Luxury":** Swiss Design grid discipline + Neo-classical type gravitas + Luxury Typography + Editorial Design layout devices (pull-quotes, dossier numbering, drop caps) + Bento Grid for dense credential/case-study info + refined (not removed) Glassmorphism + Conceptual Sketch/Mixed Media accents *scoped only to Beyond Work*. Everything else on the list is explicitly avoided as tonally wrong for a CA/PM/institutional-trainer brand.

---

## 4. UI/UX Fix Checklist

### 4.1 Accessibility (highest priority — real users are blocked today)
- [x] Make the career timeline keyboard-operable (`role="button"`, `tabindex="0"`, keydown handler)
- [x] Add `aria-expanded`/`aria-controls` to every disclosure widget (services, projects, about, beyond-work, timeline) — currently **zero** exist sitewide
- [x] Add a minimal focus trap + focus-return to: chat window, email modal, side panel (theme panel gets Escape-to-close but no dedicated focus trap/return yet — low risk, it's a small non-modal popover)
- [x] Raise body-copy text opacity off decorative-tier alpha (0.5–0.55 → ~0.74) in: service detail lists, project outcome text, timeline detail lists, beyond-work paragraphs
- [x] Add `<main>` landmark
- [x] Wire `aria-labelledby` per section (about/what/tools/impact/testimonials/career/beyond/connect)
- [x] Promote card/pillar/timeline titles from `<div>` to `<h3>`

### 4.2 Performance
- [x] rAF-throttle the `scroll` listener, add `{passive:true}`
- [x] Move the custom cursor to `transform` instead of `left/top`, rAF-throttled
- [x] Reduce `#main-nav.scrolled` backdrop-filter blur from 24px → 14px
- [x] Audit the 4 simultaneously-animating blurred hero chips — reduced blur from 10px to 6px

### 4.3 CSS architecture cleanup
- [x] Consolidated the light-theme (`parchment`/`arctic`) override block from ~20 fragmented, sometimes-duplicated rules down to ~14, grouped by shared computed value, with zero visual change to any theme (verified value-by-value, including one special case: `.svc-card` uses the page background rather than a translucent card, unlike its 5 siblings). Also fixed a genuine bug found in the process: `.proj-outcome-desc` was declared twice with different alpha values (0.6 and 0.65) — only the winning 0.65 is kept now.
- [x] Remove dead duplicate rules: `#chat-win` (conflicting border-radius, two declarations), `#chat-toggle` (byte-identical duplicate), `.testi-text` (overridden twice, was silently *lowering* contrast), `.proj-card:hover` (split shadow/transform merged)
- [x] Breakpoints: merged the one redundant `760px` breakpoint into the dominant `768px` (2 occurrences, purely cosmetic collapse points, zero visual risk). Did **not** attempt the full 10→4 breakpoint rewrite — that touches real per-section layout logic and needs actual device/browser testing, not blind editing.
- [x] Raised `.pf-btn`, `.svc-learn-btn`, `.about-read-more` to a 44px minimum touch height

### 4.4 Visual/interaction upgrades (Editorial Luxury direction)
- [x] Bento-style asymmetry for the Impact section — the two featured cards are now 1.15fr/1fr (Global DRS slightly larger) instead of an even split. The full asymmetric mosaic across all 8 standard-grid cards was left alone; that's a bigger, riskier restructure better done with real visual testing.
- [x] ICSI/ICAI credentials — placed in the Beyond Work "Teaching, Faculty & Curriculum Author" card per your direct instruction, superseding the earlier "new bento tile" proposal
- [x] Metric-chip component — used inline in both About and the Career timeline (Contetra entry)
- [x] Subtle grain/noise texture overlay
- [x] Magnetic hover effect on primary CTA buttons
- [x] AS-IS vs TO-BE drag-reveal slider for the Global DRS case study
- [x] Scroll-drawn swimlane connector line for the MCP tool card
- [x] Editorial touches: pull-quote treatment on one testimonial phrase, dossier-style numbering (CSS counters, auto-numbered) on the 8 standard case-study cards, drop cap on the About opening paragraph
- [x] Conceptual-sketch accent — a hand-drawn, slightly-wobbly dashed ring behind each Beyond Work icon, scoped only to that section

---

## 5. Execution Phases & Sequencing

| Phase | Focus | Depends on |
|---|---|---|
| **Phase 0** | Lock content facts (Section 7 answers) | You |
| **Phase 1** | Accessibility fixes (4.1) | Nothing — can start immediately |
| **Phase 2** | Performance fixes (4.2) | Nothing — can start immediately, parallel to Phase 1 |
| **Phase 3** | CSS architecture cleanup (4.3) | Should land before Phase 5 so new components inherit clean tokens |
| **Phase 4** | New content: 1,700+, ICSI, ICAI (Section 1) | Phase 0 |
| **Phase 5** | Editorial Luxury visual upgrades (4.4) + content architecture fixes (Section 2) | Phase 3 (clean tokens), Phase 4 (final copy) |
| **Phase 6** | Sync `PROJECT_MASTER_CONTEXT.md` change log + Visibility Matrix, update chatbot knowledge base (`FALLBACK_RESPONSES`, `KIRAN_SYSTEM_PROMPT`, `FAQ_MENU`) with ICSI/ICAI facts | After Phase 4 |

---

## 6. Master Context / Chatbot Sync Tasks (mandatory per `PROJECT_MASTER_CONTEXT.md` rule #1 and #4)

- [x] Update `PROJECT_MASTER_CONTEXT.md` — new version entry (v1.4.0) in Change Log documenting this pass
- [x] Component & Section Visibility Matrix — no new section/component was added (ICSI/ICAI went inside the existing Beyond Work card), so no matrix change was needed
- [x] Update chatbot `KIRAN_SYSTEM_PROMPT` and `FALLBACK_RESPONSES` to recognize ICSI, ICAI, judge role, and the 1,700+ figure
- [x] Added "Faculty" as a new question under the Background category in `FAQ_MENU`, mapped to the existing `faculty` fallback response covering ICSI + ICAI
- [x] Update Schema.org JSON-LD `knowsAbout` with ICSI/ICAI

---

## 7. Open Questions Needing Your Input

These are the specifics I will **not** guess at, per the master context's own rule. Please answer inline or reply with corrections:

1. **Is 1,700+ the new grand total** across all training (corporate AI/Excel/Power BI + ICAI + ICSI combined), or is the 100+ ICAI figure *separate* and additive on top of a different corporate-training number?
2. **ICSI sessions** — what were they on (AI for CS professionals specifically, or a broader topic)? Roughly which dates/year? Which ICSI chapter/branch (if applicable)?
3. **ICSI Judge role** — judge for what, exactly? (a competition, a moot, an event name) Roughly when?
4. **ICSI AI course faculty** — what is the course actually called, and is it an ongoing/current engagement or a past one-time thing? Online or in-person?
5. **ICAI study circle** — which branch/study circle (if it has a name), what topic(s) did you teach, and roughly when (one occasion or recurring)?
6. **Placement preference** — do you want ICSI/ICAI shown as: (a) a new 4th "pillar" in About, (b) a dedicated new "Faculty & Institutional Training" mini-section/bento tile, or (c) folded into the existing Beyond Work section alongside the "Teaching" card? My recommendation is **(b)** — it's currently the credential with the least visual weight relative to its actual prestige (named-institution faculty positions are rare and worth their own moment), but it's your call.

---

## 8. What's Left

Everything from the original roadmap is done, including the two items that previously needed real browser testing (see Section 9 for how they were finished).

**Blocked on you (Section 7 above):** the exact ICSI session dates/topics, the ICSI event judged, the ICSI course name, and the ICAI study circle name — current copy stays intentionally general until you provide these, per your instruction to only include what you actually told me.

*Once you confirm the answers above, I'll proceed phase-by-phase per Section 5 — starting with Phase 1 (accessibility) and Phase 2 (performance), which don't depend on any open questions and can start immediately if you'd like.*

---

## 9. Visual QA & Final Engineering Pass (2026-08-20)

This pass had real browser access for the first time — everything before this was static analysis only. Tested all 5 themes at desktop (~1440px), tablet (~800px), and mobile (~375px), plus a continuous resize sweep from 1440px down to 320px.

### 9.1 Bugs found and fixed
- **Mobile side-panel focus trap was incomplete:** opening the panel never moved focus into it, so the very first Tab press escaped to the page's nav logo behind the overlay. Fixed by focusing `#side-close` on open (`toggleSidePanel()`); Tab-cycling and Escape-to-return were already correct once focus actually started inside the panel.
- **AS-IS/TO-BE compare slider (Global DRS featured card) had two compounding bugs:** the "after" panel's background (`--gold-glass`) was only ~5-6% opaque in every theme, so the "before" text bled through and visually overlapped the "after" text. Separately, both panels were absolutely stretched to a fixed ~64px height, so on narrower screens where the copy wraps to 3-4 lines, both texts overflowed that box and interleaved outside the masked region. Fixed by giving `.atb-after` an opaque `var(--bg3)` background and letting `.atb-before` sit in normal flow so the container's height follows its content (both fixes verified across all 5 themes and down to 320px).
- **Drop-cap on the About section's opening paragraph grabbed the apostrophe in "I'm":** `::first-letter` on `.about-lead` pulled in the following `'`, rendering it as an oversized, disconnected mark next to the big "I". Fixed by wrapping just the letter in `<span class="dropcap">` and styling that instead of `::first-letter` — the copy itself is untouched.
- **`.btn-ghost` (the "Explore Work & Products" hero button) used a hardcoded `rgba(255,255,255,0.12)` border,** which is correct on the three dark themes but nearly invisible on the two light themes (parchment, arctic). Added a `border-color: rgba(0,0,0,0.18)` override for both light themes in the existing light-theme consolidation block.
- Also fixed an unrelated text-wrap nit while testing narrow widths: "Building ·" in the hero's typed-text prefix could wrap the "·" onto its own line; joined with `&nbsp;`.

### 9.2 Breakpoint consolidation (previously left open)
Consolidated all 9 plain `max-width` cutoffs (1100/900/860/768/600/520/500/480/380px, ~57 media-query blocks) onto a 4-tier scale: **1080 / 860 / 768 / 480**. This is deliberately not the literal `1080/860/640/400` suggestion — 768px was kept as its own tier because it drives the single largest rule in the file (the full mobile hero rebuild, plus the standard-tile card/testimonial/timeline/connect simplification cluster), and moving it either direction touches too much surface area for the risk to be worth it. 900 and 860 were close enough to merge with zero behavior loss; 600/520/500/380 all merged into 480 since none of the affected rules needed a wider window than that in practice. Verified with a real continuous resize sweep (1440→320px) via layout assertions (grid-template-columns, `scrollWidth` overflow checks) at every tier boundary and several points in between — zero horizontal overflow and zero broken wraps anywhere in the range, in addition to visual spot-checks. The two compound queries (`hover: none` and the landscape phone query) were left untouched as instructed.

### 9.3 Bento mosaic (previously left open)
Rebuilt `.proj-grid` (the standard 8 case-study cards) from a uniform `auto-fit` grid into a real asymmetric mosaic: fixed 3-column grid with `grid-auto-flow: dense`, card 1 (P2P & Vendor Management) and card 4 (Finance & Business Process Transformation) each span 2 columns in a zigzag (wide-left/narrow-right, then narrow-left/wide-right), and the last card (Credit Appraisal) spans the full width as a closing element — chosen specifically so every row fills completely with no dead grid cells at any breakpoint. Collapses to a 2-column grid at the 768px tier (card 1 and the closing card go full-width, everything else pairs up) and a single column at 480px. Verified gap-free at 1440/768/375px via exact box-position checks, not just eyeballing.
