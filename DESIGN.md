---
name: Chat4Meet Website
description: Clean App-CI marketing landing — turquoise hero, Ubuntu, white feature bands
colors:
  brand: "#009C9C"
  brand-deep: "#007A7A"
  ink: "#111418"
  ink-muted: "#6B7280"
  surface: "#FFFFFF"
  surface-soft: "#F9FAFB"
  border: "#E5E7EB"
  on-brand: "#FFFFFF"
  on-brand-muted: "rgba(255, 255, 255, 0.8)"
typography:
  display:
    fontFamily: "Ubuntu, system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.01em"
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
  card: "1rem"
  pill: "9999px"
spacing:
  section-y: "5rem"
  card-pad: "2rem"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-brand}"
    rounded: "{rounded.pill}"
    padding: "0.75rem 2rem"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.brand}"
    rounded: "{rounded.pill}"
    padding: "0.75rem 2rem"
---

## Overview

Einseitige **Persuade**-Landing: oben Vollfläche in App-Türkis (Splash-Handoff), darunter weiße und soft-graue Bänder für Features, Vertrauen und Download. Ubuntu durchgängig; keine Marketing-Gadgets.

## Colors

| Rolle | Token | Verwendung |
|-------|-------|------------|
| Brand | `brand` | Hero-Hintergrund, Outline-Buttons |
| Text | `ink` / `ink-muted` | Überschriften / Fließtext |
| Flächen | `surface`, `surface-soft` | Sektionen, Karten |
| Rand | `border` | Karten, Footer-Trenner |

Auf Türkis: Text `on-brand` / `on-brand-muted` — nie neutrales Grau.

## Typography

Ubuntu von Google Fonts. Überschriften 700, Fließtext 400, Buttons/Labels 600. Max. Breite für längere Absätze ~42rem (Trust).

## Layout

Vertikaler Scroll; zentrierte Container `max-w-5xl` / `max-w-2xl`. Feature-Grid ab `sm`: 3 Spalten. Section-Padding `py-16`–`py-20`, horizontal `px-6`.

## Elevation & Depth

Flach: 1px Borders statt Schatten. Keine Glows oder Glass.

## Shapes

Karten `rounded-2xl`; CTAs `rounded-full` (Pill). Hero ohne zusätzliche Rahmen.

## Components

- **Hero:** Logo-Stack (Icon + Wordmark), Tagline
- **Feature cards:** Border + soft fill
- **Download:** Primary (filled ink) + secondary (brand outline), disabled state wenn keine Store-URLs
- **Footer:** Muted small text

## Do's and Don'ts

**Do:** App-Farben und Tagline wörtlich übernehmen; semantische `<section>` mit `aria-labelledby`.

**Don't:** Erfundene Testimonials, Stat-Hero, Eyebrow-Kicker über H1, Gradient-Text, Store-Links ohne echte URLs aktiv schalten.
