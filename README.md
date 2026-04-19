# 🧊 NaviCube

<!-- HERO SECTION -->
<div align="center">

![NaviCube Banner](https://raw.githubusercontent.com/xu-hao-yuan/navicube/main/assets/navicube-banner.png)

**A feature-rich personal navigation site manager — single file, zero dependencies, ready to run.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![GitHub Release](https://img.shields.io/github/v/release/xu-hao-yuan/navicube?include_prereleases&label=Release)](https://github.com/xu-hao-yuan/navicube/releases)
[![HTML5](https://img.shields.io/badge/HTML5-Document-orange.svg)](navicube.html)

🌐 [Official Website](https://www.shidao.biz/navicube) · 📖 [中文文档](README.zh-CN.md)

</div>

---

## ✨ What is NaviCube?

**Edit → Generate → Publish → Re-edit — all in one file.**

NaviCube's genius is that it is *both* the editor and the navigation page itself.

```
┌─────────────┐     Generate      ┌─────────────┐
│   Editor    │ ───────────────→ │  Standalone  │
│ navicube.html│                    │  .html File  │
└─────────────┘ ←─────────────── └─────────────┘
                  Drag back to edit
```

- **One-click Navigation Page** — Organize your categories and sites in the editor, click "Generate", and get a fully-functional standalone HTML file: built-in search, category navigation, responsive layout — deploy to any static host instantly
- **Drag Back to Keep Editing** — Drag the generated HTML back into the editor and all data is fully restored — continue adding, editing, deleting without maintaining JSON or databases manually
- **File is Data** — The HTML file *is* the data source; no extra config files or databases needed. Sharing the file shares the entire navigation site — recipients can use it directly or drag it back into the editor to customize further

> 💡 **In short: build with blocks in the editor, export as a ready web page, drag back to keep building.**

---

## 🔑 Key Features

### 📋 Core Features
- **Category Management** — Create, edit, delete, drag-and-drop reorder categories
- **Site Management** — Add, edit, delete sites with drag-and-drop and cross-category moving
- **Auto-fetch Site Info** — Enter a URL and automatically get title, description, and favicon
- **Multi-region Nodes** — Support for Mainland China / Hong Kong / US nodes with automatic connectivity detection and switching
- **Local Search** — Real-time filtering with debounce optimization

### 🤖 AI Features
- **One-click Smart Organize** — AI analyzes site content and re-categorizes automatically
- **One-click Content Generate** — Enter a topic, AI generates category system and site content
- **Multi-model Support** — Compatible with OpenAI and Anthropic API protocols
- **Connection Test** — 4-step diagnostic test to precisely locate connectivity issues

### 📦 Data Management
- **Import/Export** — Supports JSON and HTML formats, merge or replace import options
- **Link Validity Check** — Batch detect site availability, mark broken links
- **Data Reset** — Selectively clear categories, sites, AI config, UI settings, detection cache
- **Storage Alert** — Auto-detect storage usage, warn when approaching limits
- **Version Migration** — Auto-migrate on data structure upgrades, backward compatible

### 🎨 Interface Customization
- **Bilingual** — Full i18n support with one-click language switch (EN / 中文)
- **Card Size Slider** — Control site card size with a slider
- **Custom Search Engine** — Preset mainstream engines, add custom engines
- **Bing Wallpaper** — Daily auto-updating Bing beautiful image backgrounds
- **Search Bar Styling** — Customize search button and search bar background colors

### ⚡ Performance
- **Incremental Rendering** — Add/edit/delete only touches local DOM, no full re-renders
- **Search Debounce** — 300ms debounce reduces unnecessary DOM operations
- **Lazy Icon Loading** — Icons outside viewport load lazily for faster first screen
- **Error Boundaries** — Independent try-catch in render functions prevents single-point white screens

---

## 🔒 Security & Privacy

NaviCube puts your data security first:

- **🌐 Pure Local Run** — No server needed, no account registration, double-click HTML to start
- **💾 Browser-local Storage** — All categories, sites, and config stored in browser localStorage — never touches third-party servers
- **🔑 Keys Stay Local** — API keys and sensitive info only saved in your browser, never uploaded to the cloud
- **🚫 No Data Collection** — No user data, analytics, or usage tracking
- **📦 Full Data Ownership** — Export JSON backup anytime, migrate freely, no platform lock-in
- **👁️ Transparent Code** — Single-file HTML, all code reviewable, no hidden behavior

---

## 🚀 Quick Start

### Install

No dependencies required — just download the `navicube.html` file:

```bash
git clone https://github.com/xu-hao-yuan/navicube.git
cd navicube
```

Or download [navicube.html](navicube.html) directly.

### Run

Double-click `navicube.html` to open in browser.

Or use any HTTP server:

```bash
# Python
python -m http.server 8080

# Node.js
npx serve .
```

Then visit `http://localhost:8080/navicube.html`.

---

## 📖 Usage Guide

### Basic Operations

1. **Add Category** — Click the "+ Category" button in the right panel
2. **Add Site** — Click "+" next to a category title, or use the "+ Site" button in the right panel
3. **Auto-fetch** — Enter a URL in the site form and click "Auto-fetch" to populate title and description
4. **Drag to Reorder** — Drag category or site cards to adjust order, supports cross-category moving
5. **Search** — Type keywords in the search bar for real-time filtering

### AI Configuration

1. Click "AI Model Config" in the right panel
2. Choose API type (OpenAI Compatible / Anthropic Compatible)
3. Fill in API Endpoint, API Key, model name and other parameters
4. Click "Test Connection" to verify
5. After successful config, use "One-click Smart Organize" and "One-click Content Generate"

#### Recommended Config

| Provider | API Type | API Endpoint | Model |
|----------|----------|---------------|-------|
| DeepSeek | OpenAI Compatible | `https://api.deepseek.com` | `deepseek-chat` |

> ⚠️ Some providers like Volcano Engine don't support browser direct calls (CORS restriction). Start a local proxy:
> ```bash
> node cors-proxy.js
> ```
> Then fill `http://localhost:8080/` in the "CORS Proxy" field of the Anthropic config.

### Site Info Auto-fetch Config

1. Click "API Config" in the right panel
2. Fill in Developer ID and Communication Key (from [API盒子](https://www.apihz.cn))
3. Select region (Mainland / Hong Kong / US)
4. Click "Test Region" to check connectivity
5. After successful config, URL entry can auto-fetch title, description and icon

---

## 🔌 API Reference

### Site Info API

This project uses [API盒子](https://www.apihz.cn) for site information retrieval:

**Endpoint:** `https://cn.apihz.cn/api/wangzhan/getdata.php`

**Method:** GET

**Parameters:**

| Param | Required | Description |
|-------|----------|-------------|
| `id` | Yes | Developer ID |
| `key` | Yes | Developer Key |
| `url` | Yes | Target URL (`&` replace with `@`) |
| `type` | No | Region: 1=China, 2=HK, 3=US |

**Response Example:**
```json
{
  "code": 200,
  "ico": "www.example.com/favicon.ico",
  "title": "Site Title",
  "keywords": "Keywords",
  "description": "Site Description"
}
```

### AI Model API

Supports OpenAI and Anthropic compatible protocols:

- **OpenAI Compatible** — `POST {endpoint}/chat/completions`
- **Anthropic Compatible** — `POST {endpoint}/v1/messages`

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| HTML5 + CSS3 + Vanilla JS | Core tech, no framework dependencies |
| CSS Custom Properties | Theme variable system |
| localStorage | Local data persistence |
| SortableJS (CDN) | Drag-and-drop sorting (only external dependency) |
| Fetch API | Network requests |
| AbortController | Request timeout control |

### Project Structure

```
navicube/
├── navicube.html      # Main application (single-file HTML/CSS/JS)
├── cors-proxy.js      # CORS proxy script (optional, for browser cross-origin)
├── README.md          # English documentation
├── README.zh-CN.md    # Chinese documentation
├── LICENSE            # MIT License
└── .gitignore         # Git ignore rules
```

---

## 🤝 Contributing

Contributions welcome! Please follow these steps:

1. **Fork** this repository
2. Create feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m 'Add some feature'`
4. Push branch: `git push origin feature/your-feature`
5. Submit a **Pull Request**

### Development Notes

- This project is a single-file HTML app, all code lives in `navicube.html`
- Please maintain the "single file, zero dependencies, ready to run" core principle
- New features need bilingual support (`data-lang` attribute + translation table)
- Please test all existing features before submitting

### Code Style

- JavaScript uses `const`/`let`, no `var`
- CSS uses CSS Custom Properties for theme variables
- HTML uses semantic tags
- i18n text uses `data-lang` attribute markers

---

## 📄 License

This project is open source under [MIT License](LICENSE).

---

<p align="center">

If this project is helpful to you, please give a ⭐ Star to show support!

</p>
