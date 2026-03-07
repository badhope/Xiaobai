# 网站构建指南

本文档详细说明如何构建和部署 Xiaobai 学科分类与课程共享系统网站。

## 📁 项目目录结构

```
Xiaobai/
├── public/                          # 公共资源文件（构建时复制到输出目录）
│   ├── favicon.svg                  # 网站图标
│   ├── manifest.json                # PWA 清单文件
│   └── robots.txt                   # 搜索引擎爬虫配置
│
├── src/                             # 源代码目录
│   ├── components/                  # React 组件
│   │   └── layout/
│   │       └── Layout.tsx           # 布局组件（导航栏、页脚）
│   │
│   ├── pages/                       # 页面组件
│   │   ├── Home.tsx                 # 首页
│   │   ├── Subjects.tsx             # 学科列表页
│   │   ├── SubjectDetail.tsx        # 学科详情页
│   │   ├── CourseDetail.tsx         # 课程详情页
│   │   └── Search.tsx               # 搜索页
│   │
│   ├── content/                     # 学科内容数据
│   │   ├── courses/
│   │   │   └── index.ts             # 课程库数据
│   │   └── subjects/
│   │       └── index.ts             # 学科分类数据
│   │
│   ├── lib/                         # 工具库
│   │   └── subject-utils.ts         # 学科系统工具函数
│   │
│   ├── types/                       # TypeScript 类型定义
│   │   └── subject.ts               # 学科和课程类型
│   │
│   ├── styles/                      # 样式文件
│   │   └── globals.css              # 全局样式（Tailwind CSS）
│   │
│   ├── App.tsx                      # 应用主组件
│   ├── main.tsx                     # React 应用入口
│   └── index.ts                     # 统一导出
│
├── index.html                       # HTML5 核心文件（入口）
├── package.json                     # 项目配置文件
├── tsconfig.json                    # TypeScript 配置
├── vite.config.ts                   # Vite 构建配置
├── tailwind.config.js               # Tailwind CSS 配置
└── postcss.config.js                # PostCSS 配置
```

## 🚀 快速开始

### 1. 环境要求

- **Node.js**: 18.0 或更高版本
- **npm**: 9.0 或更高版本

### 2. 安装依赖

```bash
cd Xiaobai
npm install
```

### 3. 开发模式

启动开发服务器（自动热重载）：

```bash
npm run dev
```

访问 http://localhost:3000 查看网站

### 4. 构建生产版本

```bash
npm run build
```

构建产物输出到 `dist/` 目录

### 5. 预览生产构建

```bash
npm run preview
```

## 📦 核心文件说明

### HTML5 核心文件

**`index.html`** - 应用入口 HTML 文件
- 包含 meta 标签、SEO 信息
- 挂载点 `<div id="root"></div>`
- 引入 React 应用入口 `main.tsx`

### 配置文件

**`package.json`** - 项目配置和依赖管理
- 定义项目元信息
- 配置 npm 脚本命令
- 管理项目依赖

**`vite.config.ts`** - Vite 构建工具配置
- 配置 React 插件
- 设置路径别名 `@`
- 开发服务器配置（端口 3000）
- 生产构建优化（代码分割）

**`tsconfig.json`** - TypeScript 编译器配置
- 严格类型检查
- 路径映射配置
- ES2020 目标

**`tailwind.config.js`** - Tailwind CSS 配置
- 自定义主题颜色（primary、dark）
- 配置动画效果
- 内容文件扫描路径

### 样式文件

**`src/styles/globals.css`** - 全局样式
- 引入 Tailwind CSS
- 定义全局组件类（btn-primary、card 等）
- 设置基础样式

### React 组件

**`src/main.tsx`** - React 应用入口
- 渲染根组件 App
- 引入全局样式

**`src/App.tsx`** - 应用主组件
- 配置 React Router 路由
- 定义页面路由规则

**`src/components/layout/Layout.tsx`** - 布局组件
- 导航栏（响应式设计）
- 页脚
- 移动端菜单

### 页面组件

1. **`Home.tsx`** - 首页
   - Hero 区域
   - 统计数据展示
   - 核心特性介绍
   - 学科分类预览

2. **`Subjects.tsx`** - 学科列表页
   - 所有学科大类展示
   - 专业方向列表
   - 课程数量统计

3. **`SubjectDetail.tsx`** - 学科详情页
   - 专业信息展示
   - 统计信息（课程数、学时、学分）
   - 课程列表

4. **`CourseDetail.tsx`** - 课程详情页
   - 课程信息
   - 课程描述
   - 共享专业列表
   - 课程内容区域（预留）

5. **`Search.tsx`** - 搜索页
   - 搜索框
   - 搜索结果展示
   - 热门搜索标签

### 数据文件

**`src/content/courses/index.ts`** - 课程库数据
- 28 门独立课程
- 课程详细信息（名称、描述、学时、学分等）
- 课程标签索引

**`src/content/subjects/index.ts`** - 学科分类数据
- 3 个学科大类
- 9 个专业方向
- 通过 courseIds 引用课程

### 工具库

**`src/lib/subject-utils.ts`** - 工具函数
- 学科分类查询函数
- 课程库查询函数
- 课程关联查询
- 统计分析函数
- 学习路径规划

**`src/index.ts`** - 统一导出
- 导出所有类型
- 导出数据
- 导出工具函数

## 🔧 自定义配置

### 修改主题颜色

编辑 `tailwind.config.js`：

```javascript
colors: {
  primary: {
    // 修改这里的颜色值
    500: '#3B82F6',
    600: '#2563EB',
  }
}
```

### 添加新课程

编辑 `src/content/courses/index.ts`：

```typescript
{
  id: 'course-new-001',
  name: '新课程名称',
  code: 'NEW001',
  summary: '课程简介',
  description: '详细描述...',
  estimatedHours: 48,
  credits: 3,
  recommendedSemester: 4,
  tags: ['标签 1', '标签 2'],
  categories: ['领域 1', '领域 2'],
  prerequisites: [],
  articles: [],
  metadata: {
    referencedByCount: 0,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
  },
}
```

### 添加新专业

编辑 `src/content/subjects/index.ts`，在对应大类下添加：

```typescript
{
  id: 'cs-0809-04',
  name: '新专业名称',
  code: '080904',
  description: '专业描述...',
  parentId: 'cs-0809',
  courseIds: [
    'course-prog-001',  // 引用已有课程
    'course-new-001',   // 引用新增课程
  ],
  metadata: {
    articleCount: 0,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
  },
}
```

## 📊 构建优化

### 代码分割

`vite.config.ts` 中配置了手动代码分割：

```typescript
manualChunks: {
  'react-vendor': ['react', 'react-dom', 'react-router-dom'],
  'motion': ['framer-motion'],
}
```

### 静态资源处理

- `public/` 目录下的文件在构建时直接复制到输出目录
- `src/assets/` 目录下的文件会被 Vite 处理（图片优化等）

## 🚀 部署指南

### 部署到 Vercel

1. 安装 Vercel CLI：
```bash
npm i -g vercel
```

2. 部署：
```bash
vercel
```

### 部署到 Netlify

1. 构建：
```bash
npm run build
```

2. 将 `dist/` 目录拖到 Netlify

### 部署到 GitHub Pages

1. 安装 gh-pages：
```bash
npm install -D gh-pages
```

2. 添加脚本到 `package.json`：
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. 部署：
```bash
npm run deploy
```

### 部署到服务器

1. 构建生产版本：
```bash
npm run build
```

2. 将 `dist/` 目录上传到服务器

3. 配置 Nginx：

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## 📱 PWA 支持

项目已配置 PWA 支持，修改 `public/manifest.json`：

```json
{
  "name": "Xiaobai",
  "short_name": "Xiaobai",
  "start_url": "/",
  "display": "standalone"
}
```

## 🔍 SEO 优化

### 修改 meta 标签

编辑 `index.html`：

```html
<meta name="description" content="你的网站描述" />
<meta name="keywords" content="关键词 1, 关键词 2" />
```

### 配置 robots.txt

编辑 `public/robots.txt`：

```
User-agent: *
Allow: /
```

## 🛠️ 故障排除

### 常见问题

**1. 依赖安装失败**

```bash
# 清除缓存
npm cache clean --force

# 删除 node_modules 和 package-lock.json
rm -rf node_modules package-lock.json

# 重新安装
npm install
```

**2. 开发服务器启动失败**

检查端口是否被占用，修改 `vite.config.ts`：

```typescript
server: {
  port: 3001,  // 修改端口
}
```

**3. 构建失败**

检查 TypeScript 错误：

```bash
npx tsc --noEmit
```

## 📝 开发规范

### 代码风格

- 使用 TypeScript 严格模式
- 组件使用函数式写法
- 使用 Tailwind CSS 进行样式开发
- 遵循 React Hooks 规则

### 文件命名

- 组件文件：PascalCase（如 `Home.tsx`）
- 工具文件：camelCase（如 `subject-utils.ts`）
- 样式文件：kebab-case（如 `globals.css`）

### Git 提交规范

```
feat: 新功能
fix: 修复 bug
docs: 文档更新
style: 代码格式调整
refactor: 重构代码
chore: 构建/工具链相关
```

## 📄 License

MIT
