# 📌 Project Master Context & Architecture Guide

> **Project Name:** CA Kiran Bora — Portfolio Website  
> **Repository Type:** High-performance, single-page interactive personal portfolio & profile website  
> **Target Audience:** CXOs, Founders, Head of Product/Engineering/Finance, Investors, Collaborators  
> **Author & Subject:** CA Kiran Bora (Product Manager at Recykal | Chartered Accountant | AI, MCP & Systems Architect)  
> **Current Location:** Hyderabad, India  
> **Current Role:** Product Manager at Recykal (Legal Entity: Rapidue Technologies Pvt Ltd) — *Joined July 6, 2026*  
> **Last Updated:** August 20, 2026  

---

## 🧭 1. Executive Summary & Profile Context

This repository houses the personal portfolio website of **CA Kiran Bora**. It showcases his multi-disciplinary background combining Chartered Accountancy (Rank 5) with enterprise Product Management, Database Architecture, AI Agents, Model Context Protocol (MCP) tooling, and Founder's Office execution.

### Current Professional Scope @ Recykal (Rapidue Technologies Pvt Ltd) — Hyderabad:
* **Global DRS (Deposit Return System):** Leading end-to-end product discovery, operations workflow mapping, UX wireframes, and database architecture for large-scale multi-stakeholder recycling systems.
* **Finance & Fraud Detection Modules:** Architecting dedicated finance settlement and automated fraud mitigation rule engines within DRS to eliminate revenue leakage and ensure audit-grade reconciliation.
* **AI Agents & Simulation Automation:** Building and deploying AI agents and simulation engines to stress-test high-volume return operations and auto-validate operational flows.
* **Universal AI & MCP Product Architecture Tool:** Designed a universal PM visualization engine that turns raw product ideas into validated Swimlane flowcharts, proactively catches logic dead ends before coding, renders AS-IS vs. TO-BE comparisons, maps every workflow node directly to Database tables/columns and codebase files, and integrates via Model Context Protocol (MCP) to auto-generate PRDs, User Stories, Test Cases, and prompt execution recipes.

### Global Education & Curriculum Authoring:
* **Singapore Wealth Management Firm:** Authored comprehensive, institutional-grade finance & Smart Investment study materials and curriculum.
* **Professional Upskilling:** Trained 1,700+ professionals across AI tools, Advanced Excel, and Power BI.
* **ICSI (Institute of Company Secretaries of India):** Faculty for ICSI's AI courses for Company Secretary professionals; delivered multiple (2-3) sessions at ICSI and has also served as a Judge there.
* **ICAI (Institute of Chartered Accountants of India):** Delivered training at an ICAI study circle to 100+ Chartered Accountants.

### Previous Professional Background:
* **Contetra Pvt Ltd (Mumbai) [Jan 2025 – Jul 2026]:** Assistant Manager - Finance & Digital Transformation | Founder's Office Execution. Led 15 engagements, reduced close from 15 days to under half a day, slashed O&M billing from 30 to 7 days, and built PMO frameworks for ₹600 Cr enterprises.
* **IDFC FIRST Bank (Pune) [Mar 2023 – Jan 2025]:** Associate Relationship Manager - Corporate Banking. Credit appraisal, financial modelling, and borrower risk assessment.

---

## 🏗️ 2. File Directory & Asset Registry

```
.
├── index.html                   # Core single-page website (HTML + Inline CSS + Vanilla JS + SVGs)
├── PROJECT_MASTER_CONTEXT.md    # [THIS FILE] Master architecture, state, rules, and change log
├── KiBo-cut.png                 # Transparent profile cutout for 3D stage (Desktop/Retina)
├── KiBo-cut.webp                # Optimized WebP version of the profile cutout (91 KB)
├── KiBo.png                     # Original high-resolution profile portrait
├── social-card.png              # Open Graph & Twitter summary card (1200x630px)
├── CA_Kiran_Bora.pdf            # Current downloadable CV / Profile PDF (Preserved in storage)
└── CV - CA Kiran Bora Old.pdf   # Archive / previous CV document
```

---

## 🎨 3. Tech Stack & Design System

### A. Core Technologies
* **HTML5:** Semantic hierarchy, Schema.org JSON-LD `Person` metadata (Product Manager at Recykal, Hyderabad), Open Graph / Twitter Meta tags synchronized.
* **CSS3:** Custom properties (CSS variables), Glassmorphism, 5-theme runtime switcher, smooth layout grids.
* **Vanilla JavaScript:** Event-driven micro-interactions, custom cursor, Intersection Observers, theme engine.

### B. Third-Party Vendor CDNs
* **AOS (Animate On Scroll) v2.3.4:** Staggered scroll reveal animations.
* **VanillaTilt.js v1.8.1:** 3D parallax tilt effects on cards and interactive panels.
* **Typed.js v2.1.0:** Dynamic headline typing animation in the Hero header.
* **Google Fonts:** `DM Serif Display`, `DM Sans`, `Outfit`, `Space Mono`.

### C. Theme Engine
Managed via `data-theme` attribute on `<html>` and persisted in `localStorage('kb-theme')`:
1. `midnight` (Default): Deep luxury navy (`#070c15`) with warm gold accents (`#e8b84b`).
2. `obsidian`: Pitch dark (`#080808`) with cyber cyan accents (`#00e5ff`).
3. `slate`: Deep violet-black (`#0d0d12`) with lavender accents (`#a78bfa`).
4. `parchment`: Warm editorial light mode (`#f5f0e8`) with navy accents (`#1a3a6b`).
5. `arctic`: Clean crisp blue-gray light mode (`#f0f4f8`) with cobalt accents (`#1e40af`).

---

## 📊 4. Component & Section Visibility Matrix

| Section / Component | Identifier / Selector | Status | Purpose & Visibility Notes |
| :--- | :--- | :---: | :--- |
| **Interactive Loader** | `#kb-loader` | 🟢 **ACTIVE** | Intro animation bridging "Finance" and "Technology" pillars with typing tagline. |
| **Theme Switcher** | `#theme-switcher` | 🟢 **ACTIVE** | Floating control to switch between 5 themes. |
| **Navigation & Drawer** | `#main-nav`, `#side-panel` | 🟢 **ACTIVE** | Sticky glassmorphic nav + sliding off-canvas menu for mobile & desktop. |
| **Hero Section** | `#hero` | 🟢 **ACTIVE** | 3D portrait tilt stage, typed roles (Recykal PM, Global DRS, AI/MCP), badges, and CTAs. |
| **Stats Banner** | `#stats-banner` | 🟢 **ACTIVE** | Dynamic counting stats (97% close speed, 75% billing cut, 15+ clients, 1500+ trained). |
| **About Section** | `#about` | 🟢 **ACTIVE** | Bio highlighting PM at Recykal in Hyderabad + 3 pillars (Product & Ops, AI/DB/MCP, Domain & Scale). |
| **Capabilities** | `#what` | 🟢 **ACTIVE** | 4 expandable tilt cards (Product Management, AI Agents & MCP, Fraud & Finance Systems, Founder's Office). |
| **Tools & Stack** | `#tools` | 🟢 **ACTIVE** | Categorized view of Product Stacks, MCP, DB Design, AI Agents, ERPs, Power BI, and Financial Controls. |
| **Impact / Case Studies** | `#impact` | 🟢 **ACTIVE** | Flagship projects (Global DRS Platform & Universal AI + MCP PM Tool) + legacy high-impact case studies. Full Detail / Close Detail toggle enabled. |
| **Testimonials** | `#testimonials` | 🟢 **ACTIVE** | Colleague and stakeholder recommendations. |
| **Career Timeline** | `#career` | 🟢 **ACTIVE** | Interactive SVG timeline: Recykal (PM, Jul 2026–Present) ➔ Contetra (Jan 2025–Jul 2026) ➔ IDFC FIRST Bank ➔ CA Rank. Header-only accordion toggle enabled. |
| **Beyond Work** | `#beyond` | 🟢 **ACTIVE** | Highlights artist career (100+ sketches sold), athlete, and builder projects. |
| **Profile / Resume** | `#resume` | 🟡 **DORMANT (HIDDEN)** | **Disabled on frontend:** Code preserved in comments inside `index.html`. All nav links, buttons, and PDF viewer elements are removed/hidden as per request. |
| **Connect / Contact** | `#connect` | 🟢 **ACTIVE** | Interactive contact cards + Mailto form handler. |
| **Profile Guide Chatbot** | `#chat-bubble` | 🟢 **ACTIVE** | Interactive assistant with FAQ menu + fallback dictionary + Vercel LLM proxy ready. |
| **Email Chooser Modal** | `#em-overlay` | 🟢 **ACTIVE** | Modal for Gmail Web, Outlook Web, Default Mail, and 1-click clipboard copy. |
| **Floating WhatsApp** | `.whatsapp-float` | 🟢 **ACTIVE** | Quick direct WhatsApp message trigger. |

---

## 🔒 5. Mandatory Maintenance Rules for Developers & AI Agents

Whenever anyone (human developer or AI assistant) works on this codebase, they **MUST follow these rules strictly**:

1. **Always Check and Update this Master Context:**
   * Before making changes, inspect this file to understand active vs. dormant components.
   * Immediately after completing changes, update the **Visibility Matrix** and the **Change Log** below.
2. **Ask for Clarification & Never Assume (Strict Rule):**
   * If any requirement, date, company detail, feature scope, or design instruction is vague or ambiguous, **always proactively ASK the user for clarification before taking action**. Never invent or assume facts.
3. **Preserve Dormant Code with Clean Comments:**
   * When disabling a section or feature (e.g. the Resume section), do not delete working logic or assets. Comment it cleanly with explanations so it can be restored on demand in seconds.
4. **Keep Zero Broken Links:**
   * If a section is hidden (e.g., `#resume`), verify that no navigation links, hero buttons, footer links, side drawers, or chatbot prompts point to the missing anchor.
5. **Maintain Aesthetics & Performance:**
   * Maintain the rich, dark-mode luxury design language with gold accents and smooth interactions.
   * Avoid introducing heavy npm packages or external framework overhead unless explicitly directed by the project owner.

---

## 📝 6. Change Log & Version History

### Version 1.6.0 — August 20, 2026
* **Major factual correction pass (owner-confirmed):**
  * Removed all "Global DRS" language — Kiran is part of Recykal's **DRS (Deposit Return Scheme) team** (which also runs programs internationally); his actual current work is on **Poland's Kaucja DRS**.
  * Removed "Rank 5" from all identity/bio surfaces (hero summary, hero chips, hero rotating chip JS, about pillars, chatbot system prompt & fallback dictionary) — kept only in the dedicated CA/education achievement sections where it's a real, specific accomplishment rather than a repeated identity label.
  * Replaced the fabricated "led end-to-end Global DRS operations, financial settlement, multi-party settlement" claims with the real, owner-confirmed scope: Kiran owns the **Fraud & Operational Intelligence module** (19 fact-checked fraud scenarios, Milestone 1 scope locked, Python data simulator with ground-truth fraud labeling for benchmarking) and has **just started scoping the Finance module** (no shipped deliverable yet — described honestly as early-stage).
  * Replaced the vague "Universal AI & MCP Product Architecture Tool" project card with its real identity: **Recykal Flowchart Studio** — an internal Node.js/Express tool with an MCP server (~12 tools), map.json linked map, Quality Engine, and forward/reverse Impact Analysis for the ~100-person engineering org.
  * Rewrote the About section to lead with Kiran as a person (CA who builds; product, finance, AI, teaching, and art) rather than only a job-title/company description, across both the hero summary and the About lead paragraphs.
  * Full sweep of the chatbot `KIRAN_SYSTEM_PROMPT` and `FALLBACK_RESPONSES` dictionary to match the above — added `flowchart studio` and `data simulator` keys, updated `FAQ_MENU`.
* **Design fixes:**
  * `.hero-status` / `.hero-dot` (hero identity badge) and `.footer-status` / `.footer-status-dot` ("Open to Connect") recolored from generic green (`#4ade80`) to the site's gold accent (`var(--gold2)`) — the green pill read as a default/generic AI-generated look, inconsistent with the rest of the luxury gold design language.
  * Fixed blank space in the `.proj-grid` Impact cards (P2P vs. Revenue Assurance row): `align-items:stretch` (grid default) plus `.proj-card{height:100%}` was forcing shorter cards to stretch to the tallest sibling's height, leaving a dead gap above "Full Detail". Changed to `align-items:start` + `height:auto` so each card sizes to its own content.

### Version 1.5.0 — August 20, 2026
* **First real browser QA pass** (everything before this version was verified by static analysis only — no browser access):
  * Fixed the mobile side-panel focus trap: opening it never moved focus inside, so the first Tab press escaped to the page behind it. Now focuses the close button on open.
  * Fixed the Global DRS AS-IS/TO-BE drag-to-compare slider: the "after" panel's near-transparent background let the "before" text bleed through and overlap it, and a fixed-height container caused the two texts to overflow and interleave on narrow screens. Both panels are now readable at every width in every theme.
  * Fixed the About section drop-cap grabbing the apostrophe in "I'm" and rendering it as an oversized floating mark.
  * Fixed the `.btn-ghost` hero button's border being invisible on the two light themes (parchment, arctic) — it was hardcoded to a white-tinted border that only works on dark backgrounds.
  * Minor: joined "Building ·" in the hero's typed-text prefix with a non-breaking space so it can't wrap mid-phrase.
* **Breakpoint scale rewrite (previously deferred):** consolidated 9 cutoffs (~57 media-query blocks) onto a 4-tier scale — 1080 / 860 / 768 / 480px. 768px was deliberately kept in place (rather than moved to the originally-suggested 640px) because it drives the single largest ruleset in the file, the full mobile hero rebuild. Verified with a continuous resize sweep from 1440px to 320px.
* **Full asymmetric bento mosaic (previously deferred):** the standard 8-card Impact grid (`.proj-grid`) is now a genuine mosaic — two cards span 2 columns in a zigzag, the last card closes full-width, and every row fills with no dead cells at any of the 3/2/1-column breakpoints. The two featured cards above it (Global DRS, MCP tool) are unchanged.
* Both items above close out `IMPLEMENTATION_PLAN.md` Section 8 — see its Section 9 for full detail.

### Version 1.4.0 — August 19, 2026
* **New Institutional Training Credentials Added (ICSI & ICAI):**
  * Updated "professionals trained" figure sitewide from 1,500+ to 1,700+ (hero summary, stats banner counter, Beyond Work "Teaching" card, hero rotating chip, chatbot knowledge base).
  * Added ICSI credentials to the Beyond Work "Teaching, Faculty & Curriculum Author" card: faculty for ICSI's AI courses for Company Secretary professionals, 2-3 sessions delivered, and a Judge role at ICSI.
  * Added ICAI credential: 100+ Chartered Accountants trained at an ICAI study circle.
  * Synced `KIRAN_SYSTEM_PROMPT`, `FALLBACK_RESPONSES` (new `icsi`/`icai`/`judge`/`faculty` keys), and JSON-LD `knowsAbout` with the above.
  * **Open items pending owner confirmation** (see `IMPLEMENTATION_PLAN.md` Section 7): exact ICSI session dates/topics, ICSI chapter/branch, the specific ICSI event judged, and the ICAI study circle name/date — current copy intentionally avoids inventing these specifics.
* **Accessibility fixes:**
  * Career timeline is now fully keyboard-operable (`role="button"`, `tabindex`, `aria-expanded`, Enter/Space handling) — previously click-only.
  * Added `aria-expanded`/`aria-controls` to every disclosure widget (services, projects, about, beyond-work, timeline) — previously zero existed sitewide.
  * Added a minimal focus trap + focus-return to the chat window, email modal, and side panel; expanded Escape handling to also close the side panel and theme panel.
  * Raised body-copy text opacity from decorative-tier (0.5/0.55 alpha) to 0.74 alpha in service detail lists, project outcome text, timeline detail lists, and beyond-work paragraphs.
  * Added a `<main>` landmark around the primary content region (hero through connect).
  * Promoted card/pillar/timeline titles (`pillar-title`, `svc-title`, `beyond-title`, `tl-role`, `proj-title`) from bare `<div>` to semantic `<h3>`.
* **Performance fixes:**
  * `scroll` listener is now rAF-throttled with `{passive:true}` (previously ran unthrottled on every scroll event with no passive flag).
  * Custom cursor now moves via `transform` instead of `left`/`top`, also rAF-throttled and `{passive:true}`.
  * Reduced `#main-nav.scrolled` backdrop-filter blur from 24px to 14px (same visual read, lower compositing cost).
* **Remaining from the design/engineering audit (not yet done, tracked in `IMPLEMENTATION_PLAN.md`):** CSS architecture cleanup (light-theme override consolidation, dead/duplicate rule removal, breakpoint standardization), and the "Editorial Luxury" visual upgrades (bento-style Impact grid, metric chips reused in About/Career, grain texture, magnetic CTA hover, AS-IS/TO-BE slider, scroll-drawn swimlane connector).

### Version 1.3.1 — August 19, 2026
* **Personalized Hero Section & Multi-Dimensional Persona:**
  * Refocused Hero Section on **CA Kiran Bora as an Individual Builder & Product Architect** rather than solely a corporate position.
  * Updated Hero Tag to: `Chartered Accountant · Product & Systems Builder`.
  * Updated Typed.js strings to: `Product & Systems Architectures`, `AI Agents & MCP Tooling`, `Scalable Enterprise Platforms`, `Zero-to-One Business Workflows`, `Finance Transformation & PMO`, `Curriculum & Global Training`.
  * Updated Hero rotating chips to multi-dimensional identity: `CA · Rank 5`, `Product Architect`, `AI & MCP Engine`, `1,500+ Mentored / Artist`.
* **Minimalist Executive Social Sharing Card (`social-card.png`):**
  * Rendered pixel-perfect `social-card.png` (1200x630px): *CA Kiran Bora · Product Manager · Chartered Accountant · Trainer* — *"Building scalable product systems and empowering teams through practical, high-impact training."* Tailored for professional talks, workshops, and networking.

### Version 1.3.0 — August 19, 2026
* **Updated Social Sharing Banner Graphic & Meta Tags:**
  * Synchronized Open Graph, Twitter Cards, and SEO description for multi-disciplinary persona.
* **JavaScript & UX Micro-Interaction Bug Fixes:**
  * Fixed `toggleProj()` button text toggle and refined timeline header click triggers.

### Version 1.2.0 — August 19, 2026
* **Updated Current Employment & Location to Recykal (Hyderabad):**
  * Added **Product Manager @ Recykal (Rapidue Technologies Pvt Ltd)** in Hyderabad (Joined July 6, 2026).
  * Updated Schema.org JSON-LD `Person` metadata to reflect Product Manager title, Recykal organization, and Hyderabad address.
  * Updated Career Timeline with Recykal as the current active position and adjusted Contetra dates to Jan 2025 – Jul 2026.
* **Added Global DRS & Universal AI + MCP Tooling to Portfolio:**
  * Added **Global DRS (Deposit Return System)** operations, database schema design, and finance & fraud detection modules.
  * Added **Universal AI & MCP Product Architecture Tool** (Idea visualization, Swimlane flowcharts, dead-end validation, AS-IS vs TO-BE, deep DB table/column mapping, and MCP-automated PRD generation).
  * Updated Hero section, Typed.js strings, cycling status chips, About section, Capabilities cards (`#what`), Tools & Stack (`#tools`), and Featured Impact cards (`#impact`).
* **Chatbot Knowledge Base Updated:**
  * Updated `KIRAN_SYSTEM_PROMPT`, `FALLBACK_RESPONSES`, and `FAQ_MENU` to recognize queries regarding Recykal, Rapidue, Global DRS, Fraud engines, MCP, AI agents, Database design, and Hyderabad.
* **Strict Rule Added:**
  * Enforced strict maintenance rule: "Always ask if in doubt / do not assume".

### Version 1.1.0 — August 19, 2026
* **Resume / Profile Section Hidden:**
  * Commented out `<section id="resume">` to remove PDF preview and direct download buttons from the frontend while preserving files.
  * Updated Hero CTA button from `View Profile` to `Explore Work`.
  * Removed `#resume` links from Main Nav, Mobile Menu Drawer (`#mobile-menu`), Side Panel (`#side-panel`), and Footer.
* **Master Context Created:**
  * Created `PROJECT_MASTER_CONTEXT.md` to document system architecture, component visibility status, and maintenance rules.

---
*End of Master Context Document.*
