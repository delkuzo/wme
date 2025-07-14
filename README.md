# Design System & Interface Playground

This project is your laboratory for creating, developing, and testing a design system and user interfaces.

## About the project

- **Flexible design system**: colors, spacing, buttons, fields, icons, etc.
- **Experiments**: rapid prototyping of new interfaces in separate files.
- **Integration with real projects**: ability to test elements in a production environment.
- **Support for multiple design systems**: you can run parallel experiments for different services.

## Structure

- `design-system-library.html` — main component library
- `experiments/` — experimental files and playground
  - `gravity-ui-playground.html` — CSS-only experiments with Gravity UI
  - `gravity-ui-demo/` — full React project with Gravity UI
- `styles/`, `font/` — styles and fonts
- `EXPERIMENTS.md` — how to run and structure playground files
- `PROJECT_PLAN.md` — roadmap and directions
- `MILESTONES.md` — key milestones and progress
- `CONTRIBUTING.md` — contribution guidelines
- `STYLE_GUIDE.md` — code and component style guide
- `GRAVITY_UI_INTEGRATION.md` — integration with external design system

## Quick Start

### Main library
1. Open `design-system-library.html` in your browser
2. Read the documentation (see above)
3. Start creating or improving interfaces!

### Gravity UI experiments
1. **CSS-only**: Open `experiments/gravity-ui-playground.html`
2. **React project**:
   ```bash
   cd experiments/gravity-ui-demo
   npm install
   npm start
   ```
   Open http://localhost:3000

---

> For details, see other markdown files in the project root. 