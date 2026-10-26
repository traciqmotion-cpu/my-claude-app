# Traciq Motion website

Astro static site. Deploys to Netlify as plain HTML, CSS, and a little JavaScript.

## Run it locally
```
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs /dist
```

## Deploy (Netlify)
Build command `npm run build`, publish directory `dist`. Both are already set in `netlify.toml`.
Test on a branch deploy first, then merge to main to go live. After the first deploy, submit
`https://traciqmotion.com/sitemap-index.xml` in Google Search Console. The old `/sitemap.xml` redirects to it.

## Where things live
- `src/data/projects.ts` : every project. Add one here and it shows on /work and gets its own page.
- `src/data/site.ts` : email, booking link, LinkedIn URL, Trustpilot settings.
- `src/data/testimonial.ts` : set `enabled: true` and fill in the quote to show the testimonial section on Home.
- `src/styles/global.css` : design tokens (same names as the Figma variables) and styles.
- `public/media` : videos. Per project: `<slug>-card.mp4` (short loop), `<slug>.mp4` (full), `<slug>-poster.jpg`.

## Adding or swapping a video
1. Put `<slug>-card.mp4` (960x540, muted, a few MB), `<slug>.mp4`, and `<slug>-poster.jpg` in `public/media`.
2. Add or edit the entry in `src/data/projects.ts`.
Quick card loop from a source video:
`ffmpeg -i source.mp4 -an -vf scale=960:540 -c:v libx264 -crf 27 -pix_fmt yuv420p -movflags +faststart slug-card.mp4`

## Case study text
`brief`, `approach`, and `outcome` in `projects.ts` are optional. Each block shows only when filled in.

## Trustpilot
In your Trustpilot Business dashboard, pick a TrustBox and note its template ID and your business unit ID.
Put them in `site.trustpilot`, set `enabled: true`. If the dashboard's embed code differs from what
`src/components/TrustpilotSlot.astro` outputs, use the dashboard's version.

## Forms and booking
The brief form uses Netlify Forms (works automatically after deploy; see Forms in the Netlify dashboard).
The calendar is a Calendly embed of `site.calendly`.
