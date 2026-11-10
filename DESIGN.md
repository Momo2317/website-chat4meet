---
name: Chat4Meet Website
description: Guided English marketing landing — teal immersion, story imagery, scroll tour
colors:
  brand: "#009C9C"
  brand-deep: "#007A7A"
  brand-soft: "#E6F7F7"
  ink: "#111418"
  ink-muted: "#6B7280"
  surface: "#FFFFFF"
  surface-soft: "#F4FBFB"
  border: "#D7ECEC"
  on-brand: "#FFFFFF"
  phone-mid: "#045858"
  phone-dark: "#033F3F"
typography:
  display:
    fontFamily: "Ubuntu, system-ui, sans-serif"
    fontSize: "3rem"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Ubuntu, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0em"
  label:
    fontFamily: "Ubuntu, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: "0em"
rounded:
  phone: "2.25rem"
  panel: "1.75rem"
  pill: "9999px"
spacing:
  section-y: "5rem"
  shell: "1.5rem"
components:
  cta-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-brand}"
    rounded: "{rounded.pill}"
    padding: "0.75rem 2rem"
  cta-on-brand:
    backgroundColor: "{colors.on-brand}"
    textColor: "{colors.brand}"
    rounded: "{rounded.pill}"
    padding: "0.75rem 2rem"
---

## Overview

English **Persuade** landing with a guided scroll path: teal hero with phone preview → Chat → Stories → Profiles → trust → download. Brand assets and story photography from the Chat4Meet app. Ubuntu throughout.

## Colors

Committed teal world: hero and Stories chapter are full brand fields; Chat/Profiles rest on soft mint whites. On teal, secondary text is white/80 — never gray.

## Typography

Ubuntu 400–700. Hero display ~3–3.5rem. Section titles ~2–2.5rem. Body 17px where narrative matters.

## Layout

`max-w-6xl` shell. Alternating two-column chapters (copy + visual). Sticky translucent header. Progress chips/dots between hero and chapters.

## Elevation & Depth

Soft teal-tinted shadows on phone and panels (`shadow-soft` / `shadow-lift`). Ambient blurred orbs for atmosphere, not glass cards.

## Shapes

Phone shell ~2.25rem; panels ~1.75rem; CTAs and story rings full pills.

## Components

- **Hero phone:** stylized chat + story rings (illustrative, not store screenshots)
- **Journey guide:** dots + chips synced to scroll
- **Story rings:** rotating conic gradient border
- **Download:** dual store CTAs (disabled until URLs exist)

## Motion

Focal: hero rise-in. Continuity: scroll-linked guide active state + reveal blur→sharp. Ambient: slow orb drift, story-ring spin. All gated by `prefers-reduced-motion`.

## Do's and Don'ts

**Do:** Lead visitors chapter by chapter; use real app story art; keep teal identity.

**Don't:** Fake testimonials; invent store ratings; eyebrow kickers above headings; identical icon-card grids as the page structure.
