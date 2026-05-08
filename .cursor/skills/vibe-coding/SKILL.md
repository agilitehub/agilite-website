---
name: vibe-coding
description: >-
  Main entry for the Agilit-e website frontend conventions. Points to skills for
  React Router wiring, navbar/footer links, and for route modules versus
  src/core layout and UI. CRA, Tailwind, FontAwesome, ThemeContext light/dark;
  Ant Design is a declared dependency and project standard but not yet used in src.
---

# Vibe coding (main)

Use this skill when adding **routes**, **marketing sections**, **auth-style pages**, or when refactoring **module** vs **core** layout.

## Sub-skills (read these for detail)

| Topic | Skill | Path |
|-------|--------|------|
| `App.js` routes, paths, Navbar/Footer `Link`s, home-page section hashes | **vibe-coding-navigation** | `.cursor/skills/vibe-coding-navigation/SKILL.md` |
| `src/modules` page folders, `src/core` layout/UI, Tailwind + FontAwesome (+ Ant when introduced) | **vibe-coding-module** | `.cursor/skills/vibe-coding-module/SKILL.md` |

**When wiring a new URL or nav link:** read **vibe-coding-navigation** (and **vibe-coding-module** for where the screen file lives).

**When building UI, sections, or shared chrome:** read **vibe-coding-module** (and **vibe-coding-navigation** if the feature needs a new path or menu item).

## One-minute overview

- **New top-level route (e.g. `/pricing`):** add `<Route path='...' element={...} />` in `src/App.js`, add a folder `src/modules/<segment>/<segment>.js` (file name matches folder), import the page into `App.js`, and add/update links in `src/core/layout/Navbar.js` and/or `Footer.js` as needed — full steps in **vibe-coding-navigation**.
- **Home page sections** (`/`, hash `#features`, etc.) live as **layout** pieces under `src/core/layout/` (Hero, Features, …) and are composed in `App.js` inside `MainPage`; new bands go there or as new layout files, not under `src/modules`.
- **Route screens** (changelog, roadmap, login, …) live under **`src/modules/<name>/<name>.js`**; they compose **core** layout pieces (Navbar, Footer) and **core** UI (Logo, ThemeToggle, BackgroundEffect).
- **UI stack (today):** **Tailwind** for layout and styling; **native HTML** form elements and buttons in route modules; **FontAwesome** for icons. **Ant Design** is in the stack per project rules but **not imported in `src/` yet**—if you add it, use FontAwesome for icons, not `@ant-design/icons`.
- **Theme:** `ThemeProvider` / `useTheme()` from `src/context/ThemeContext.js`; toggle drives **`document.documentElement`** `dark` class for `dark:` Tailwind.
- **`src/core`:** shared marketing chrome and primitives — **`layout/`** (Navbar, Footer, section bands), **`ui/`** (Logo, ThemeToggle, BackgroundEffect). Prefer adding reusable widgets here only when a second consumer exists; see **vibe-coding-module**.

## Quick map

| Task | Go to |
|------|--------|
| New path, Router entry, or nav/footer link | **vibe-coding-navigation** |
| New full-page screen, section component, or styling rules | **vibe-coding-module** |
| New route + link | Read **both**; navigation first, then the module file. |
