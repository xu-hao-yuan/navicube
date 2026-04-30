# 🧊 NaviCube Changelog

> All notable changes to this project will be documented in this file.
> 本项目的所有重要更新都将记录在此文件中。

---

## [v1.8] - 2026-04-30

### Fixed | 修复
- **Editor Category** — Fixed category display issues in editor mode
- **Card Spacing** — Optimized card grid gap for better mobile layout

### Improved | 优化
- **Back-to-Top Button** — Enhanced styling with dashed border and golden gradient
- **Export Style Tabs** — Added scrollbar hiding and scroll-snap support for smoother scrolling
- **Search Engine Default** — Changed default search engine from Baidu to Google
- **Language Normalization** — Fixed language code normalization on state load

### Added | 新增
- **Missing i18n Strings** — Added translations for `categorySaveSuccess`, `siteSaveSuccess`, `siteInfoFetchSuccess`, `saveSuccess`, `backupReminder`

---

## [v1.7] - 2026-04-23

### Added | 新增
- **Style Settings Module** — New comprehensive style configuration panel for exported navigation pages. Includes:
  - Layout styles: Immersive, Standard, Compact
  - Header styles: Hero, Minimal, Centered, Banner, Split
  - Theme presets: Light/Dark with accent color options
  - Search bar styles: Default, Underline, Pill
  - Category styles: Default, Divider, Badge, Poster
  - Color customization: Accent, Card, Background, Border
  - Card layout: Size, Padding, Gap, Rounded corners

### Improved | 优化
- **UI Refinement** — Unified visual design with refined gradients, shadows, border-radius and spacing. Improved button styles with depth and hierarchy. Better backdrop blur effects. Overall more polished and professional appearance.
- **Code Architecture** — Comprehensive refactoring of internal code logic for better maintainability and performance.

---

## [v1.6] - 2026-04-21

### Added | 新增
- **Storage Indicator** — New data storage size indicator in the right toolbar. Shows usage with a color-coded progress bar:
  - 🟦 Blue (normal): < 3MB
  - 🟨 Yellow (warning): 3MB ~ 4MB  
  - 🟥 Red (danger): > 4MB
  (5MB used as localStorage upper limit reference)

---

## [v1.5] - 2026-04-21

### Fixed | 修复
- **Bookmark Export** — Fixed data export to support browser bookmark format (Netscape Bookmark HTML format).

### Added | 新增
- **SEO Settings** — New page SEO configuration modal. Supports custom page title, meta description, keywords, and author. These will be embedded when generating the navigation page.

---

## [v1.4] - 2026-04-20

### Fixed | 修复
- **Toast on Mobile** — Fixed toast notification being blocked by mobile toolbar on small screens. Position adjusted to avoid overlap.

---

## [v1.3] - 2026-04-20

### Added | 新增
- **Changelog** — Added this bilingual changelog file to track version history

### Fixed | 修复
- **Bookmark Import** — Fixed inaccurate directory structure recognition when importing browser bookmarks. Nested folders are now parsed more reliably.
- **Large Data Batching** — When organizing large datasets, data is now sent to the LLM in batches to avoid errors caused by exceeding token limits.

### Improved | 优化
- **Mobile Layout** — Optimized UI layout on small screens for a better responsive experience.

---

## [v1.0] - 2026-04-18

### Added | 新增
- **Initial Release** — First public release of NaviCube
- **Single-File Architecture** — Single HTML file with zero dependencies
- **Core Features** — Category management, site management, drag-and-drop reordering
- **AI Integration** — Smart organize and AI content generation
- **Multi-Region API** — Support for Mainland China / Hong Kong / US nodes
- **Import/Export** — JSON backup and browser bookmark import/export
- **Bilingual Support** — Full i18n with Chinese and English
- **Bing Wallpaper** — Daily auto-updating background images
- **CORS Proxy** — Optional proxy script for cross-origin API calls

---

*This changelog follows [Keep a Changelog](https://keepachangelog.com/) format.*
