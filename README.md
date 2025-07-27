# 🐾 CatQuest

[![Netlify Status](https://api.netlify.com/api/v1/badges/<your‑site‑id>/deploy-status)](https://app.netlify.com/sites/catquest/deploys)

![📸 Screenshot](./screenshot.png) <!-- add the image to the repo -->

**CatQuest** is an interactive encyclopedia of cat breeds built with **React 18 + TypeScript + Vite**.  
Search or filter breeds, browse a photo slider on the breed page and learn a random cat fact — all inside a single‑page app that supports 💡 light and 🌑 dark themes.
All cartoon 🐱cat illustrations and the CatQuest logo were AI‑generated specifically for this app.

Live demo → **https://catquest.netlify.app/**

---

## ✨ Key Features

| 🚀 Feature                              | ⚙️ Implementation                                                    |
| --------------------------------------- | -------------------------------------------------------------------- |
| 🔎 Instant search & multi‑facet filters | Local state (useState) exposed through Context                       |
| 🖼️ Breed photo slider                   | Fetches 10 images per breed from The Cat API; arrow navigation       |
| 🌗 Light / Dark theme                   | CSS variables, system preference detection, manual toggle            |
| 🐈 Random cat facts                     | Real‑time facts from catfact.ninja                                   |
| 🗺️ Routing                              | `react-router-dom` v6 (`/` and `/breed/:id`)                         |
| 📱 Full responsiveness                  | mobile‑first layout (320 px up to 1920 px); burger menu under 768 px |
| ⚡  Netlify deploy                      | Automatic production build on every push to main                     |

---

## 🛠 Tech Stack

| Front‑end                            | State / Routing                                         | Data & APIs                                          | Tooling                     |
| ------------------------------------ | ------------------------------------------------------- | ---------------------------------------------------- | --------------------------- |
| **React 18 • TypeScript 4.9 • Vite** | Context (createContext) + useState, react-router-dom v6 | The Cat API (breeds, images) · catfact.ninja (facts) | ESLint • Prettier • Netlify |

---

## 🚀 Getting Started

```bash
git clone https://github.com/KateKlu/CatQuest.git
cd CatQuest
npm install
cp .env.example .env          # add your VITE_API_KEY
npm run dev                   # open http://localhost:5173

```

## 📂 Folder Structure

```bash
src/
├── api/ # small fetch helpers
├── components/ # UI blocks and pages
│ ├── header/ # Header, burger, light‑dark toggle
│ ├── search‑page/
│ ├── search-results-page/
│ ├── breed-page/
│ └── fact-page/
├── context/ # CatQualitiesContext (filters)
├── hooks/ # FetchData (generic async hook)
└── styles/ # global & module CSS
```
