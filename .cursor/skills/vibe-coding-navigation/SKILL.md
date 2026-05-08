---
name: vibe-coding-navigation
description: >-
  How to register routes in App.js, keep path strings consistent, and update
  Navbar and Footer links for the Agilit-e marketing site. Use with the
  vibe-coding index skill when working on URLs or site navigation.
---

# Vibe coding — navigation and routes

Use this when adding or changing **URLs**, **React Router** entries, or **Navbar / Footer** links.

## Single route table

**File:** `src/App.js`

All **page-level** routes are declared in `<Routes>`:

- **`/`** — `MainPage`: marketing home with `Navbar`, section stack (`Hero`, `Features`, …), `Footer`.
- **`/changelog`**, **`/roadmap`**, **`/login`**, **`/register`**, **`/forgot-password`** — imported screens from `src/modules/...`.

**Parity rule:** the `path` string (e.g. `/login`), the **`src/modules`** folder name for that screen (e.g. `login/login.js`), and **`react-router-dom` `Link` `to` props** should stay aligned. Multi-word paths use kebab-case folders (e.g. `forgot-password/forgot-password.js`).

## Adding a new marketing route

1. **Create** `src/modules/<segment>/<segment>.js` exporting a default React component (see **vibe-coding-module**).
2. **Import** it at the top of `App.js` (follow existing import style).
3. **Add** `<Route path='/your-segment' element={<YourPage />} />` next to sibling routes.
4. **Link** from Navbar and/or Footer using **`Link`** from **`react-router-dom`** (`to='/your-segment'`), matching existing patterns in those files.

## Home page section IDs (hash / scroll)

**File:** `src/core/layout/Navbar.js`

- **Section list** used for scroll-spy and “jump to section” behavior: IDs such as `features`, `services`, `modules`, `team`, `about`, `contact` must match **`id` attributes** on sections rendered on **`/`** (in `src/core/layout/*` components).
- If you add a **new band** on the home page, add a stable **`id`** on the section wrapper, append that id to the `sections` array (and any duplicate lists) in `Navbar.js`, and use **`#id` links** only from routes where those elements exist (typically `/`).

## Standalone routes vs home

On **`/`**, Navbar may use hash links (`#contact`) or `navigate` logic. On **other paths** (e.g. `/changelog`), the same Navbar often routes back to **`/#section`** or `/` first — mirror existing behavior when adding links.

## Footer

**File:** `src/core/layout/Footer.js`

Update **`Link`** / **`to`** / **`href`** values when adding public pages so legal, product, and auth links stay consistent with `App.js` routes.

## Checklist: new page users reach from the header

1. `src/modules/<segment>/<segment>.js` exists and default export is wired.
2. `<Route>` in `src/App.js` with matching `path`.
3. Navbar and/or Footer updated if the page should be discoverable from chrome.
4. No duplicate `path` values; prefer kebab-case URL segments.

## `src/core` policy for navigation

**Small, targeted edits** to `Navbar.js` and `Footer.js` are expected for new links. Avoid rewriting scroll/spy or mobile menu behavior unless the product requires it.

For **what belongs in modules vs core**, see **vibe-coding-module**.

## Quick reference

| What | Where |
|------|--------|
| Route definitions | `src/App.js` (`<Routes>`, `<Route>`) |
| Home composition | `MainPage` in `src/App.js` |
| Top nav, section IDs, mobile menu | `src/core/layout/Navbar.js` |
| Footer links | `src/core/layout/Footer.js` |
| Route screen implementation | `src/modules/<segment>/<segment>.js` |
