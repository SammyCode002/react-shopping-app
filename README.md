# FreshCart — React Shopping App

A grocery ordering SPA built with React and React Router. Started as an OSU CS 290 assignment, redesigned into a fully featured shopping experience.

## Features

- **Product card grid** with emoji, category, name, and price per item
- **Live cart total** — sticky bar slides up as you add items, shows count and running total
- **Cart state** lifted to app level so total is always accurate across the page
- **Active nav highlighting** with item count badge on the Order link
- **Registration form** with inline validation and a success state (no alert popups)
- **Responsive layout** — works on mobile and desktop
- Oregon State University orange accent theme (`#D73F09`)

## Tech Stack

| | |
|---|---|
| Framework | React 18 |
| Routing | React Router DOM v6 |
| Icons | React Icons |
| Build tool | Vite |
| Styling | Plain CSS with custom properties |

## Pages

| Page | Description |
|---|---|
| Home | Hero section with CTAs and feature highlights |
| Order | Product grid with +/− quantity controls and live cart total bar |
| Registration | Form with inline validation and success confirmation |

## Run Locally

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`

## Origin

Built for CS 290 Web Development at Oregon State University (Winter 2026, Assignment 8). Grade: 11/11.
