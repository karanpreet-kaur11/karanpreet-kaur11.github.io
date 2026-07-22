# Karanpreet Kaur — Portfolio

Live at [karanpreet-kaur11.github.io](https://karanpreet-kaur11.github.io/).

A single-page portfolio built with plain HTML, CSS, and JavaScript — no build step, no
framework, deploys directly from this repo via GitHub Pages.

## Structure

```
index.html                   Page markup/shell (SEO meta, sections, modal, command palette)
assets/css/style.css         Design system: theme tokens, layout, components, animations
assets/js/main.js            Fetches content.json and renders every section + all interactions
assets/data/content.json     ALL editable content lives here
assets/img/                  Favicon, generated OG share image
assets/resume.pdf            Not committed yet — add your resume PDF here (see below)
robots.txt / sitemap.xml     SEO
site.webmanifest             PWA-ish manifest / icon metadata
```

## Updating content (no code changes needed)

Everything on the page — profile info, stats, skills, projects, experience, education,
timeline, achievements, certifications, and FAQs — is read from
[`assets/data/content.json`](assets/data/content.json). Edit that file and refresh the page.

- **Add a project**: append an object to the `projects` array. Each project automatically
  gets a card and a detail modal (problem / features / architecture / challenges / lessons /
  impact / tech stack / links).
- **Add a certification**: append `{ "name", "provider", "date", "link", "description" }` to
  the `certifications` array. The Certifications section is hidden automatically while that
  array is empty, so it only appears once real credentials are added.
- **Add a skill category**: append to the `skills` array with an `icon` name from the set
  defined in `assets/js/main.js` (`layout`, `server`, `database`, `cpu`, `cloud`, `tool`).
- **Update experience/education/timeline/achievements/FAQs**: same pattern — edit the
  corresponding array.

## Adding your resume

Drop your resume PDF at `assets/resume.pdf`. The Resume section checks for that file at load
time: if it's present, it renders an inline preview plus a working Download button; if it's
missing, it shows a friendly fallback message instead of a broken link/preview.

## Notes on a few deliberate choices

- **No photo**: per preference, the hero/about sections use an animated initials monogram
  instead of a headshot.
- **Contact form**: since GitHub Pages has no backend, the contact form builds a `mailto:`
  link client-side (pre-filled subject/body) rather than posting to a third-party form
  service.
- **GitHub stats**: the "GitHub Activity" section embeds live, real-time images from the
  public `github-readme-stats` and `ghchart` services — not hardcoded numbers.
- **Certifications**: intentionally left empty until real credentials are added, rather than
  shipping with placeholder entries.

## Local preview

Any static file server works, e.g.:

```
npx http-server .
```

Opening `index.html` directly via `file://` will *not* load `content.json` (browsers block
local `fetch` of JSON files under `file://`), so use a local server for development.
