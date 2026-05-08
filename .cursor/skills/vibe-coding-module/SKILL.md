---
name: vibe-coding-module
description: >-
  Agilit-e website: src/modules route pages versus src/core layout and UI;
  Tailwind and FontAwesome; ThemeContext; Ant Design per project rules but
  currently unused in source. Use when building or refactoring screens and
  sections.
---

# Vibe coding — modules, core, and UI

Use this when creating or extending **route screens**, **home-page sections**, or **shared chrome**.

## Base directories

| Area | Base directory |
|------|----------------|
| **Route-level pages** (one URL per folder) | `src/modules/<segment>/<segment>.js` |
| **Marketing sections** (composed only on `/`) | `src/core/layout/` (e.g. `Hero.js`, `Features.js`, `Contact.js`) |
| **Shared primitives** (logo, theme toggle, effects) | `src/core/ui/` |
| **App-wide theme React context** | `src/context/ThemeContext.js` |

**Naming:** folder name and primary file name match the URL segment (`login` → `login/login.js`). Use **kebab-case** for multi-word segments (`forgot-password` → `forgot-password/forgot-password.js`).

## Route modules (`src/modules`)

- Each **folder** is one **top-level route** (or one conceptual “page type”).
- The **entry file** reuses the folder name: `changelog/changelog.js`, `login/login.js`, etc.
- **Imports** from core use **`../../core/layout/...`** and **`../../core/ui/...`** from a typical module file.
- Keep modules focused on **that screen’s layout and content**; extract repeated pieces to **`src/core`** (see below).

**Optional structure:** if a screen grows large (forms, complex state), you may add **`components/`**, **`hooks/`**, or **`utils.js`** *inside* that module folder — keep the **default route component** at `/<segment>/<segment>.js` or re-export from a small barrel only if the team adopts that pattern consistently.

## Core layout (`src/core/layout`)

- **Navbar**, **Footer**, and **home sections** live here.
- They may use **`react-router-dom`** (`Link`, `useLocation`, `useNavigate`) where needed.
- **Section components** should expose stable **`id`** attributes for in-page navigation (see **vibe-coding-navigation**).

## Core UI (`src/core/ui`)

- **Logo**, **ThemeToggle**, **BackgroundEffect**, and similar **cross-cutting visual pieces**.
- **Icons:** use **FontAwesome** (`@fortawesome/react-fontawesome` and solid/free packages). **Do not** use Ant Design’s icon package — project standard is FontAwesome only.
- **`ThemeToggle`** uses **`useTheme()`** from **`ThemeContext`** (`darkMode`, **`toggleDarkMode`**). The context **`ThemeProvider`** wraps the app in **`App.js`** and syncs **`document.documentElement`** with the **`dark`** class for Tailwind’s **`dark:`** utilities.

## Thin screens, logic placement

- **Prefer** presentational React in layout and module files; use **`useState` / `useEffect` / `useMemo` / `useCallback`** where appropriate per project rules.
- **Avoid** duplicating strings, validators, or API shapes — extract **small pure helpers** next to the module or under a future `src/utils` if introduced.
- This repo is **Create React App**; keep **bundler-agnostic** client code unless ejecting.

## Ant Design (AntD)

- **Current code:** there are **no** `antd` imports under **`src/`**; screens use **HTML + Tailwind** (e.g. login/register inputs and buttons).
- **Project rules:** Ant Design is part of the intended stack. When you **introduce** Ant components, compose with **Tailwind** on wrappers and **`className` / `rootClassName`** on Ant components when needed.
- **Icons:** always **FontAwesome** — do **not** use **`@ant-design/icons`** for this app.

## Styling: Tailwind first

- Use **Tailwind** for spacing, typography, flex/grid, responsive breakpoints, and light/dark variants (`dark:`).
- **Avoid** new global CSS unless necessary; **`src/App.css`** and **`src/index.css`** are the existing global layers.
- **Dark mode:** prefer **`dark:`** utilities consistent with **`html.dark`** (see `ThemeContext` / `App.js`).

## Reusable building blocks → `src/core`

**Promotion flow:** implement inside **one** module or layout file → when a **second** consumer appears, extract to **`src/core/ui/`** or **`src/core/layout/`** and import from both.

**Default is not** to grow `src/core` for one-off content; keep copy and one-route-only layout in **`src/modules`**.

## Create React App notes

- Entry: **`src/index.js`**, root component **`src/App.js`**.
- Do not assume **path aliases** unless added; use **relative imports** consistent with nearby files.

## Quick reference

| Task | Where |
|------|--------|
| New URL screen | `src/modules/<segment>/<segment>.js` + `App.js` route |
| New home “band” | New or existing file under `src/core/layout/`, composed in `MainPage` |
| Logo, theme, visual chrome | `src/core/ui/` |
| Router list | `src/App.js` |
| Navbar / footer links | **vibe-coding-navigation** |

When unsure, open a **neighboring** module (`login`, `changelog`) or layout file (`Hero`, `Contact`) and mirror **import depth**, **Tailwind patterns**, and **FontAwesome** usage.
