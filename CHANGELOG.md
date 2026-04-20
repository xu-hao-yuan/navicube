# 🧊 NaviCube Changelog

> All notable changes to this project will be documented in this file.
> 本项目的所有重要更新都将记录在此文件中。

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
