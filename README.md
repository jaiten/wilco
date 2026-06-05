# Wilco Civil Inc. Website

A responsive marketing and operations website for Wilco Civil Inc., focused on civil infrastructure, parks, landscapes, sportsfields, environmental work, streetscapes, and public realm construction in the GVRD and Vancouver Island service area.

The site is built as a polished single-page React experience with hash-based navigation for the main views: home, about, services, portfolio, safety, environment, contact, and careers. It emphasizes project credibility, the specific Wilco Civil Inc. service area, safety practices, environmental stewardship, and clear local inquiry workflows.

## Tools Used

- React for component-driven UI
- TypeScript for safer component props and data structures
- Vite for local development and production builds
- Tailwind CSS for responsive styling and design tokens
- Lucide React for consistent interface icons

## Build Approach

The interface is structured around the way a civil contractor is evaluated: evidence of completed work, service capabilities, safety posture, regional availability, and fast inquiry routing. The design uses durable industrial visual cues, project imagery, concise operational language, and clear calls to action instead of a generic landing-page layout.

Several sections are intentionally built as reusable data-driven views. Projects, divisions, offices, careers, and FAQ content are centralized in `src/data.ts`, making it easier to expand the website without rewriting the page components.

## Run Locally

Prerequisites: Node.js 20 or newer.

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL printed by Vite. The default project script uses:

```text
http://localhost:3000
```

Run type checking:

```bash
npm run lint
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```
