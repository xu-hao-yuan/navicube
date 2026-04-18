# 🧊 导航魔方 NaviCube

**[🌐 官网](https://www.shidao.biz/navicube)** · **[📥 下载](navicube.html)** · **[📄 文档](#-使用说明)**

一个功能丰富的个人导航站管理工具，**单文件、零依赖、即开即用**。双击 HTML 文件即可运行，所有数据存储在浏览器本地，无需服务器。

## 🔄 编辑 → 发布 → 再编辑，一个文件搞定

NaviCube 最精妙的设计在于：**它既是编辑器，也是导航页本身**。

```
┌─────────────┐     生成导航页      ┌─────────────┐
│   编辑器     │ ──────────────────→ │  独立导航页   │
│ navicube.html│                     │  .html 文件  │
└─────────────┘ ←────────────────── └─────────────┘
                  拖回即可再编辑
```

- **一键生成导航页** — 在编辑器中整理好分类和站点，点击「生成导航页」，即刻得到一个功能完备的独立 HTML 文件：自带搜索、分类目录、响应式布局，直接部署到任意静态托管即可上线
- **拖回来继续改** — 把生成的导航页 HTML 文件拖回编辑器，所有数据完整还原，继续增删改，无需手动维护 JSON 或数据库
- **文件即数据** — 导航页 HTML 文件本身就是数据源，不需要额外的配置文件或数据库。分享文件就是分享导航站，收到文件的人既能直接使用，也能拖进编辑器二次定制

> 💡 **简单说：编辑器里搭积木，生成出来就是成品网页，想改？拖回来接着搭。**

## 🔒 安全与隐私

NaviCube 将你的数据安全放在首位：

- **🌐 纯本地运行** — 无需服务器，无需注册账号，双击 HTML 文件即可使用
- **💾 数据存于浏览器** — 所有分类、站点、配置均存储在浏览器 localStorage 中，不经过任何第三方服务器
- **🔑 密钥本地保管** — API Key 等敏感信息仅保存在你的浏览器中，不会上传到任何云端
- **🚫 无数据采集** — 不收集任何用户数据、行为统计或使用追踪
- **📦 数据完全自主** — 随时导出 JSON 备份，数据迁移自由，不锁定平台
- **👁️ 代码透明** — 单文件 HTML，所有代码可审查，无隐藏行为

## ✨ 功能特点

### 📋 核心功能
- **分类管理** — 创建、编辑、删除、拖拽排序分类
- **站点管理** — 录入、编辑、删除站点，支持拖拽排序和跨分类移动
- **信息自动获取** — 输入网址自动获取标题、描述和图标
- **多地域节点** — 支持大陆/香港/美国节点，自动检测连通性并切换
- **本地搜索** — 实时过滤分类和站点，支持防抖优化

### 🤖 AI 功能
- **一键智能整理** — AI 自动分析站点内容，重新归类整理
- **一键生成内容** — 输入主题，AI 自动生成分类体系和站点内容
- **多模型支持** — 兼容 OpenAI 和 Anthropic 接口协议
- **连接测试** — 4 步诊断式测试，精确定位连接问题

### 📦 数据管理
- **导入/导出** — 支持 JSON 和 HTML 格式，可覆盖或追加导入
- **失效检测** — 批量检测站点可用性，标记失效链接
- **数据重置** — 可选清理分类站点、AI 配置、界面设置、检测缓存
- **容量预警** — 自动检测存储空间使用情况，接近上限时提醒备份
- **版本迁移** — 数据结构升级时自动迁移，向后兼容

### 🎨 界面定制
- **中英双语** — 完整的国际化支持，一键切换语言
- **卡片宽度调节** — 滑块控制站点卡片大小
- **自定义搜索引擎** — 预置主流引擎，支持添加自定义引擎
- **必应壁纸** — 每日自动更换必应美图作为背景
- **搜索栏配色** — 自定义搜索按钮和搜索栏背景颜色

### ⚡ 性能优化
- **增量渲染** — 增删改站点时只操作局部 DOM，避免全量重渲染
- **搜索防抖** — 300ms 防抖减少不必要的 DOM 操作
- **图标懒加载** — 视口外的图标延迟加载，加速首屏
- **错误边界** — 渲染函数独立 try-catch，防止单点错误导致白屏

## 🚀 快速开始

### 安装

无需安装任何依赖，只需下载 `navicube.html` 文件：

```bash
git clone https://github.com/xu-hao-yuan/navicube.git
cd navicube
```

或直接下载 [navicube.html](navicube.html) 文件。

### 运行

双击 `navicube.html` 文件即可在浏览器中打开使用。

也可以使用任意 HTTP 服务器：

```bash
# Python
python -m http.server 8080

# Node.js
npx serve .
```

然后访问 `http://localhost:8080/navicube.html`。

## 📖 使用说明

### 基础操作

1. **添加分类** — 点击右侧面板「+ 分类」按钮
2. **添加站点** — 点击分类标题旁的「+」按钮，或点击右侧「+ 站点」按钮
3. **自动获取** — 在站点表单中输入网址，点击「自动获取」按钮填充标题和描述
4. **拖拽排序** — 拖拽分类或站点卡片调整顺序，支持跨分类移动
5. **搜索** — 在搜索栏输入关键词，实时过滤匹配的分类和站点

### AI 功能配置

1. 点击右侧面板「AI 大模型配置」
2. 选择接口类型（OpenAI 兼容 / Anthropic 兼容）
3. 填写 API Endpoint、API Key、模型名称等参数
4. 点击「测试连接」验证配置
5. 配置成功后即可使用「一键智能整理」和「一键生成内容」

#### 推荐配置

| 服务商 | 接口类型 | API Endpoint | 模型 |
|--------|----------|-------------|------|
| DeepSeek | OpenAI 兼容 | `https://api.deepseek.com` | `deepseek-chat` |
| 火山引擎 Coding Plan | OpenAI 兼容 | `https://ark.cn-beijing.volces.com/api/coding/v3` | `doubao-seed-2.0-code` |
| 火山引擎 Coding Plan | Anthropic 兼容 | `https://ark.cn-beijing.volces.com/api/coding` | `doubao-seed-2.0-code` |

> ⚠️ 火山引擎等部分服务商不支持浏览器直接调用（CORS 限制），需启动本地代理：
> ```bash
> node cors-proxy.js
> ```
> 然后在 Anthropic 配置的「CORS 代理」字段填入 `http://localhost:8080/`

### 信息自动获取配置

1. 点击右侧面板「API 配置」
2. 填写开发者 ID 和通讯密钥（来自 [API盒子](https://www.apihz.cn)）
3. 选择节点地域（大陆/香港/美国）
4. 点击「测试地域」检测各节点连通性
5. 配置成功后，录入站点时可自动获取标题、描述和图标

### 数据管理

- **导出** — 支持 JSON 格式（可重新导入编辑）和 HTML 格式（可分享的静态导航页）
- **导入** — 支持 JSON 文件导入，可选择覆盖或追加模式
- **重置** — 可选择性清理分类站点、AI 配置、界面设置、失效检测缓存
- **备份** — 数据接近存储上限时自动提醒导出备份

## 🔌 API 文档

### 信息获取 API

本项目使用 [API盒子](https://www.apihz.cn) 的站点信息获取接口：

**请求地址：** `https://cn.apihz.cn/api/wangzhan/getdata.php`

**请求方式：** GET

**参数说明：**

| 参数 | 必填 | 说明 |
|------|------|------|
| `id` | 是 | 开发者 ID |
| `key` | 是 | 开发者通讯密钥 |
| `url` | 是 | 目标网址（`&` 需替换为 `@`） |
| `type` | 否 | 节点地域：1=国内，2=香港，3=美国 |

**返回示例：**
```json
{
  "code": 200,
  "ico": "www.example.com/favicon.ico",
  "title": "网站标题",
  "keywords": "关键词",
  "description": "网站描述"
}
```

### AI 大模型接口

支持 OpenAI 和 Anthropic 两种兼容接口协议，请求格式遵循各自标准：

- **OpenAI 兼容** — `POST {endpoint}/chat/completions`
- **Anthropic 兼容** — `POST {endpoint}/v1/messages`

## 🛠️ 技术架构

| 技术 | 用途 |
|------|------|
| HTML5 + CSS3 + Vanilla JS | 核心技术栈，无框架依赖 |
| CSS Custom Properties | 主题变量系统 |
| localStorage | 本地数据持久化 |
| SortableJS (CDN) | 拖拽排序（唯一外部依赖） |
| Fetch API | 网络请求 |
| AbortController | 请求超时控制 |

### 项目结构

```
navicube/
├── navicube.html      # 主应用文件（单文件包含 HTML/CSS/JS）
├── cors-proxy.js      # CORS 代理脚本（可选，用于解决浏览器跨域限制）
├── README.md          # 项目文档
├── LICENSE            # 开源许可协议
└── .gitignore         # Git 忽略规则
```

## 🤝 贡献指南

欢迎贡献代码！请遵循以下步骤：

1. **Fork** 本仓库
2. 创建功能分支：`git checkout -b feature/your-feature`
3. 提交更改：`git commit -m 'Add some feature'`
4. 推送分支：`git push origin feature/your-feature`
5. 提交 **Pull Request**

### 开发注意事项

- 本项目为单文件 HTML 应用，所有代码在 `navicube.html` 中
- 修改时请确保保持「单文件、零依赖、即开即用」的核心定位
- 新增功能需提供中英文双语支持（`data-lang` 属性 + 翻译表）
- 请在提交前测试所有现有功能是否正常

### 代码风格

- JavaScript 使用 `const`/`let`，不使用 `var`
- CSS 使用 CSS Custom Properties 管理主题变量
- HTML 使用语义化标签
- 国际化文本使用 `data-lang` 属性标记

## 📄 开源许可

本项目基于 [MIT License](LICENSE) 开源。

## 📮 联系方式

- **官网** — [https://www.shidao.biz/navicube](https://www.shidao.biz/navicube)
- **邮箱** — [xuhaoyuan12@tsinghua.org.cn](mailto:xuhaoyuan12@tsinghua.org.cn)
- **Issues** — [提交问题或建议](https://github.com/xu-hao-yuan/navicube/issues)
- **Discussions** — [参与讨论](https://github.com/xu-hao-yuan/navicube/discussions)

---

<p align="center">如果这个项目对你有帮助，请给个 ⭐ Star 支持一下！</p>
