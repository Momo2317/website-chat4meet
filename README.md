# website-chat4meet

Statische **Chat4Meet**-Präsenzseite (DE): Landing mit App-CI, gebaut mit [Astro](https://astro.build) und Tailwind.

## Entwicklung

```bash
cd website-chat4meet
npm install
npm run dev
```

Öffne die URL **mit Base-Pfad**, z. B. `http://localhost:4321/website-chat4meet/` (nicht nur `/`, sonst können Public-Assets fehlen). `npm run dev` öffnet diesen Pfad per Vite-Konfiguration.

```bash
npm run build    # Ausgabe in dist/
npm run preview  # Vorschau des Builds
```

**Node:** 20.19+ oder 22 empfohlen (CI nutzt Node 22).

## Inhalt & CI

Farben, Ubuntu-Typo und Tagline entsprechen der Flutter-App unter `Develop/Chat4Meet`. Store-URLs in [`src/config/site.ts`](src/config/site.ts) (`storesAvailable` auf `true` setzen, wenn Links stehen).

## Deploy (GitHub Pages)

1. Repository: `Momo2317/website-chat4meet`
2. Unter **Settings → Pages** die Quelle **GitHub Actions** wählen.
3. Push auf `main` startet [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

Live-URL (Project Site): `https://momo2317.github.io/website-chat4meet/`

Bei eigener Domain `site` und `base` in `astro.config.mjs` anpassen.

## Nächste Schritte

- App Store / Google Play Links in `site.ts`
- Impressum & Datenschutz (für öffentliches DE-Hosting)
- Optional: Impeccable Hook (`impeccable hooks on`)

## Lizenz

Proprietär — Chat4Meet / MSquare.
