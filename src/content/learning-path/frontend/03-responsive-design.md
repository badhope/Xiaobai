# 响应式设计

## 📱 响应式设计：多设备时代的必备技能

响应式设计不是简单的"让网站在手机上能看"，而是**一种设计哲学和开发方法**，确保网站在任何设备上都能提供最佳的用户体验。就像水能适应任何容器一样，响应式网站能适应任何屏幕尺寸。

### 为什么需要响应式设计？

#### 设备多样性挑战
```
设备屏幕尺寸范围：
├── 小屏手机：320px - 480px
├── 大屏手机：481px - 768px  
├── 平板电脑：769px - 1024px
├── 笔记本电脑：1025px - 1440px
└── 桌面显示器：1441px+
```

#### 用户行为变化
- **移动优先**：超过60%的流量来自移动设备
- **多设备使用**：用户在不同设备间切换使用
- **触摸交互**：移动设备需要不同的交互方式

## 🎯 响应式设计核心原则

### 1. 移动优先（Mobile First）
**先为小屏幕设计，再逐步增强到大屏幕**

```css
/* 移动优先的CSS编写顺序 */

/* 1. 基础样式（移动端） */
.container {
    padding: 1rem;
    margin: 0 auto;
    max-width: 100%;
}

/* 2. 平板设备增强 */
@media (min-width: 768px) {
    .container {
        padding: 2rem;
        max-width: 720px;
    }
}

/* 3. 桌面设备增强 */
@media (min-width: 1024px) {
    .container {
        max-width: 960px;
    }
}

/* 4. 大屏设备增强 */
@media (min-width: 1200px) {
    .container {
        max-width: 1140px;
    }
}
```

### 2. 流体网格（Fluid Grid）
**使用相对单位而非固定像素**

```css
/* 固定布局（不推荐） */
.fixed-layout {
    width: 960px;       /* 固定宽度 */
    margin: 0 auto;
}

.fixed-column {
    width: 300px;       /* 固定列宽 */
    float: left;
    margin-right: 30px;
}

/* 流体网格（推荐） */
.fluid-layout {
    width: 90%;         /* 相对宽度 */
    max-width: 1200px;  /* 最大宽度限制 */
    margin: 0 auto;
}

.fluid-column {
    width: 100%;        /* 移动端全宽 */
    margin-bottom: 2rem;
}

@media (min-width: 768px) {
    .fluid-column {
        width: calc(50% - 1rem);  /* 平板端两列 */
        float: left;
        margin-right: 2rem;
    }
    
    .fluid-column:nth-child(2n) {
        margin-right: 0;
    }
}

@media (min-width: 1024px) {
    .fluid-column {
        width: calc(33.333% - 1.333rem);  /* 桌面端三列 */
        margin-right: 2rem;
    }
    
    .fluid-column:nth-child(3n) {
        margin-right: 0;
    }
}
```

### 3. 弹性图片（Flexible Images）
**图片随容器大小自动调整**

```css
/* 基础图片响应式 */
img {
    max-width: 100%;    /* 最大宽度不超过容器 */
    height: auto;       /* 高度自动调整保持比例 */
}

/* 背景图片响应式 */
.hero-banner {
    background-image: url('hero-small.jpg');
    background-size: cover;
    background-position: center;
    height: 300px;
}

@media (min-width: 768px) {
    .hero-banner {
        background-image: url('hero-medium.jpg');
        height: 400px;
    }
}

@media (min-width: 1024px) {
    .hero-banner {
        background-image: url('hero-large.jpg');
        height: 500px;
    }
}
```

### 4. 媒体查询（Media Queries）
**根据设备特性应用不同样式**

```css
/* 基于宽度的媒体查询 */
@media (max-width: 767px) {
    /* 手机样式 */
    .mobile-menu { display: block; }
    .desktop-menu { display: none; }
}

@media (min-width: 768px) and (max-width: 1023px) {
    /* 平板样式 */
    .mobile-menu { display: none; }
    .desktop-menu { display: block; }
}

@media (min-width: 1024px) {
    /* 桌面样式 */
    .mobile-menu { display: none; }
    .desktop-menu { display: block; }
}

/* 基于方向的媒体查询 */
@media (orientation: portrait) {
    /* 竖屏样式 */
    .container { padding: 1rem; }
}

@media (orientation: landscape) {
    /* 横屏样式 */
    .container { padding: 2rem; }
}

/* 基于分辨率的媒体查询 */
@media (min-resolution: 2dppx) {
    /* 高分辨率设备 */
    .logo {
        background-image: url('logo@2x.png');
        background-size: contain;
    }
}
```

## 🛠️ 媒体查询详解

### 媒体类型（Media Types）

```css
/* 所有设备 */
@media all {}

/* 屏幕设备（电脑、手机、平板） */
@media screen {}

/* 打印设备 */
@media print {
    .navigation { display: none; }
    .content { color: black; }
}

/* 语音设备 */
@media speech {}
```

### 媒体特性（Media Features）

#### 视口相关特性
```css
/* 宽度相关 */
@media (width: 600px) {}              /* 精确宽度 */
@media (min-width: 768px) {}          /* 最小宽度 */
@media (max-width: 1024px) {}         /* 最大宽度 */
@media (width >= 768px) {}            /* 范围查询（新语法） */

/* 高度相关 */
@media (min-height: 600px) {}
@media (max-height: 800px) {}

/* 宽高比 */
@media (aspect-ratio: 16/9) {}
@media (min-aspect-ratio: 4/3) {}
@media (max-aspect-ratio: 1/1) {}

/* 方向 */
@media (orientation: portrait) {}     /* 竖屏 */
@media (orientation: landscape) {}    /* 横屏 */
```

#### 显示特性
```css
/* 分辨率 */
@media (resolution: 150dpi) {}
@media (min-resolution: 2dppx) {}     /* 高分辨率 */

/* 颜色 */
@media (color) {}                     /* 彩色设备 */
@media (monochrome) {}                /* 单色设备 */
@media (color-index: 256) {}          /* 颜色数量 */

/* 更新频率 */
@media (update: slow) {}              /* 电子墨水屏 */
@media (update: fast) {}              /* 普通屏幕 */
```

#### 交互特性
```css
/* 指针设备 */
@media (pointer: coarse) {}           /* 触摸设备 */
@media (pointer: fine) {}             /* 鼠标设备 */
@media (pointer: none) {}             /* 无指针设备 */

/* 悬停能力 */
@media (hover: hover) {}              /* 支持悬停 */
@media (hover: none) {}               /* 不支持悬停 */

/* 任何指针 */
@media (any-pointer: coarse) {}
@media (any-hover: hover) {}
```

### 逻辑操作符

```css
/* AND 操作符（多个条件同时满足） */
@media (min-width: 768px) and (max-width: 1024px) {
    /* 平板设备样式 */
}

@media screen and (min-width: 768px) and (orientation: landscape) {
    /* 横屏的屏幕设备 */
}

/* OR 操作符（多个条件满足一个） */
@media (max-width: 600px), (orientation: portrait) {
    /* 小屏或竖屏设备 */
}

@media (min-width: 1200px), (min-height: 800px) and (orientation: landscape) {
    /* 大屏或高分辨率横屏 */
}

/* NOT 操作符（条件不满足） */
@media not (max-width: 600px) {
    /* 非小屏设备 */
}

@media not screen and (color) {
    /* 非彩色屏幕设备 */
}

/* 组合使用 */
@media screen and (min-width: 768px), 
       print and (min-width: 1024px) {
    /* 屏幕设备大屏或打印设备大屏 */
}
```

## 📐 响应式布局技术

### 1. Flexbox响应式布局

```css
/* 移动端：垂直排列 */
.flex-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.flex-item {
    flex: 1;
}

/* 平板端：两列布局 */
@media (min-width: 768px) {
    .flex-container {
        flex-direction: row;
        flex-wrap: wrap;
    }
    
    .flex-item {
        flex: 1 1 calc(50% - 1rem);
    }
}

/* 桌面端：三列布局 */
@media (min-width: 1024px) {
    .flex-item {
        flex: 1 1 calc(33.333% - 1rem);
    }
}

/* 大屏端：四列布局 */
@media (min-width: 1200px) {
    .flex-item {
        flex: 1 1 calc(25% - 1rem);
    }
}
```

### 2. Grid响应式布局

```css
/* 移动端：单列网格 */
.grid-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
}

/* 平板端：两列网格 */
@media (min-width: 768px) {
    .grid-container {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* 桌面端：自适应网格 */
@media (min-width: 1024px) {
    .grid-container {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
}

/* 复杂网格布局 */
.responsive-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
}

@media (min-width: 768px) {
    .responsive-grid {
        grid-template-columns: 1fr 2fr;
        grid-template-areas: 
            "sidebar main"
            "sidebar main"
            "footer footer";
    }
    
    .sidebar { grid-area: sidebar; }
    .main { grid-area: main; }
    .footer { grid-area: footer; }
}

@media (min-width: 1024px) {
    .responsive-grid {
        grid-template-columns: 1fr 3fr 1fr;
        grid-template-areas: 
            "sidebar main aside"
            "sidebar main aside"
            "footer footer footer";
    }
    
    .aside { grid-area: aside; }
}
```

### 3. 响应式导航菜单

```html
<!-- HTML结构 -->
<nav class="navbar">
    <div class="nav-brand">
        <a href="/">网站名称</a>
    </div>
    
    <!-- 移动端汉堡菜单 -->
    <button class="nav-toggle" aria-label="切换菜单">
        <span></span>
        <span></span>
        <span></span>
    </button>
    
    <!-- 导航链接 -->
    <ul class="nav-menu">
        <li><a href="/">首页</a></li>
        <li><a href="/about">关于</a></li>
        <li><a href="/services">服务</a></li>
        <li><a href="/contact">联系</a></li>
    </ul>
</nav>
```

```css
/* 移动端样式 */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background: #333;
    color: white;
}

.nav-menu {
    position: fixed;
    top: 0;
    left: -100%;
    width: 80%;
    height: 100vh;
    background: #333;
    flex-direction: column;
    padding: 2rem;
    transition: left 0.3s ease;
}

.nav-menu.active {
    left: 0;
}

.nav-toggle {
    display: block;
    background: none;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
}

/* 平板和桌面端样式 */
@media (min-width: 768px) {
    .nav-toggle {
        display: none;
    }
    
    .nav-menu {
        position: static;
        width: auto;
        height: auto;
        flex-direction: row;
        padding: 0;
        background: none;
    }
    
    .nav-menu li {
        margin: 0 1rem;
    }
}
```

```javascript
// JavaScript交互
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// 点击链接后关闭移动菜单
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 768) {
            navMenu.classList.remove('active');
        }
    });
});
```

## 🖼️ 响应式图片技术

### 1. srcset和sizes属性

```html
<!-- 响应式图片 -->
<img 
    src="image-small.jpg"
    srcset="
        image-small.jpg 320w,
        image-medium.jpg 768w,
        image-large.jpg 1024w,
        image-xlarge.jpg 1440w
    "
    sizes="
        (max-width: 320px) 280px,
        (max-width: 768px) 720px,
        (max-width: 1024px) 940px,
        1200px
    "
    alt="描述文字"
    loading="lazy"
>

<!-- 艺术指导（不同裁剪） -->
<picture>
    <!-- 小屏：正方形裁剪 -->
    <source 
        media="(max-width: 768px)"
        srcset="image-square-small.jpg 320w, image-square-medium.jpg 768w"
        sizes="100vw"
    >
    
    <!-- 大屏：宽屏裁剪 -->
    <source 
        media="(min-width: 769px)"
        srcset="image-wide-small.jpg 1024w, image-wide-large.jpg 1440w"
        sizes="80vw"
    >
    
    <!-- 默认图片 -->
    <img src="image-default.jpg" alt="描述文字" loading="lazy">
</picture>
```

### 2. 响应式背景图片

```css
.hero-section {
    background-image: url('hero-mobile.jpg');
    background-size: cover;
    background-position: center;
    height: 300px;
}

@media (min-width: 768px) {
    .hero-section {
        background-image: url('hero-tablet.jpg');
        height: 400px;
    }
}

@media (min-width: 1024px) {
    .hero-section {
        background-image: url('hero-desktop.jpg');
        height: 500px;
    }
}

/* 高分辨率支持 */
@media 
  (min-width: 768px) and (min-resolution: 2dppx),
  (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2) {
    .hero-section {
        background-image: url('hero-tablet@2x.jpg');
    }
}
```

### 3. CSS Grid实现响应式图库

```css
.image-gallery {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.gallery-item {
    position: relative;
    overflow: hidden;
    border-radius: 8px;
}

.gallery-item img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.gallery-item:hover img {
    transform: scale(1.05);
}

/* 移动端单列 */
@media (max-width: 767px) {
    .image-gallery {
        grid-template-columns: 1fr;
    }
    
    .gallery-item img {
        height: 250px;
    }
}

/* 平板端两列 */
@media (min-width: 768px) and (max-width: 1023px) {
    .image-gallery {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* 桌面端自适应 */
@media (min-width: 1024px) {
    .image-gallery {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
    
    .gallery-item img {
        height: 250px;
    }
}
```

## 📱 移动端优化技巧

### 1. 触摸友好的交互

```css
/* 触摸目标大小 */
.button {
    min-height: 44px;           /* 最小触摸目标 */
    min-width: 44px;
    padding: 12px 24px;
    font-size: 16px;            /* 防止iOS缩放 */
}

/* 触摸反馈 */
.button:active {
    transform: scale(0.95);
    transition: transform 0.1s ease;
}

/* 防止双击缩放 */
* {
    -webkit-tap-highlight-color: transparent;
}

/* 长按菜单 */
img {
    -webkit-touch-callout: none;  /* 禁用长按菜单 */
    -webkit-user-select: none;
    user-select: none;
}

/* 可选择的文本 */
.selectable {
    -webkit-user-select: text;
    user-select: text;
}
```

### 2. 视口配置

```html
<!-- 正确的视口配置 -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- 禁止缩放 -->
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

<!-- 允许缩放但限制范围 -->
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=2.0">
```

### 3. 移动端性能优化

```css
/* 减少重绘和重排 */
.sticky-header {
    position: sticky;
    top: 0;
    will-change: transform;  /* 提示浏览器优化 */
}

/* 硬件加速 */
.animated-element {
    transform: translateZ(0);
    backface-visibility: hidden;
    perspective: 1000px;
}

/* 减少动画复杂度 */
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}

/* 优化滚动性能 */
.scroll-container {
    -webkit-overflow-scrolling: touch;  /* 惯性滚动 */
    overflow-scrolling: touch;
}
```

## 🛠️ 实践项目：响应式电商网站

### 项目目标
构建一个完整的响应式电商网站，实现在所有设备上的完美展示。

### HTML结构

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>响应式电商网站</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- 顶部导航 -->
    <header class="header">
        <div class="container">
            <div class="header-content">
                <!-- 品牌标识 -->
                <div class="brand">
                    <a href="/" class="logo">
                        <img src="logo.svg" alt="品牌名称">
                    </a>
                </div>
                
                <!-- 主导航 -->
                <nav class="main-nav">
                    <ul class="nav-list">
                        <li><a href="/products">商品</a></li>
                        <li><a href="/categories">分类</a></li>
                        <li><a href="/deals">促销</a></li>
                        <li><a href="/about">关于</a></li>
                    </ul>
                </nav>
                
                <!-- 用户操作 -->
                <div class="user-actions">
                    <button class="search-btn" aria-label="搜索">🔍</button>
                    <button class="cart-btn" aria-label="购物车">🛒</button>
                    <button class="menu-toggle" aria-label="菜单">☰</button>
                </div>
            </div>
        </div>
    </header>

    <!-- 主要内容 -->
    <main class="main">
        <!-- 英雄区域 -->
        <section class="hero">
            <div class="container">
                <div class="hero-content">
                    <h1>发现优质商品</h1>
                    <p>精选好物，品质生活</p>
                    <button class="cta-button">立即购买</button>
                </div>
            </div>
        </section>

        <!-- 商品网格 -->
        <section class="products">
            <div class="container">
                <h2>热门商品</h2>
                <div class="product-grid">
                    <!-- 商品卡片 -->
                    <article class="product-card">
                        <div class="product-image">
                            <img src="product1.jpg" alt="商品名称" loading="lazy">
                        </div>
                        <div class="product-info">
                            <h3>商品名称</h3>
                            <p class="price">¥199.00</p>
                            <button class="add-to-cart">加入购物车</button>
                        </div>
                    </article>
                    
                    <!-- 更多商品卡片... -->
                </div>
            </div>
        </section>
    </main>

    <!-- 页脚 -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <!-- 页脚内容 -->
            </div>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>
```

### CSS样式实现

```css
/* 基础样式和重置 */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    /* 设计系统变量 */
    --primary-color: #4f46e5;
    --text-color: #374151;
    --bg-color: #ffffff;
    --border-color: #e5e7eb;
    
    /* 间距系统 */
    --space-xs: 0.5rem;
    --space-sm: 1rem;
    --space-md: 1.5rem;
    --space-lg: 2rem;
    --space-xl: 3rem;
    
    /* 断点 */
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.6;
    color: var(--text-color);
}

.container {
    width: 100%;
    max-width: 100%;
    padding: 0 var(--space-sm);
    margin: 0 auto;
}

/* 移动端样式（默认） */
.header {
    background: var(--bg-color);
    border-bottom: 1px solid var(--border-color);
    position: sticky;
    top: 0;
    z-index: 1000;
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--space-sm) 0;
}

.logo img {
    height: 32px;
    width: auto;
}

.main-nav {
    display: none; /* 移动端隐藏导航 */
}

.user-actions {
    display: flex;
    gap: var(--space-xs);
}

.menu-toggle {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
}

/* 英雄区域 */
.hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: var(--space-xl) 0;
    text-align: center;
}

.hero-content h1 {
    font-size: 2rem;
    margin-bottom: var(--space-sm);
}

.cta-button {
    background: white;
    color: var(--primary-color);
    padding: var(--space-sm) var(--space-lg);
    border: none;
    border-radius: 8px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.2s ease;
}

.cta-button:active {
    transform: scale(0.95);
}

/* 商品网格 */
.products {
    padding: var(--space-xl) 0;
}

.product-grid {
    display: grid;
    gap: var(--space-md);
    grid-template-columns: 1fr;
}

.product-card {
    background: var(--bg-color);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.product-image img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.product-info {
    padding: var(--space-md);
}

.price {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--primary-color);
    margin: var(--space-xs) 0;
}

.add-to-cart {
    width: 100%;
    background: var(--primary-color);
    color: white;
    border: none;
    padding: var(--space-sm);
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
}

/* 平板端适配 */
@media (min-width: 768px) {
    .container {
        max-width: 720px;
        padding: 0 var(--space-md);
    }
    
    .menu-toggle {
        display: none;
    }
    
    .main-nav {
        display: block;
    }
    
    .nav-list {
        display: flex;
        gap: var(--space-lg);
        list-style: none;
    }
    
    .nav-list a {
        text-decoration: none;
        color: var(--text-color);
        font-weight: 500;
    }
    
    .product-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .hero-content h1 {
        font-size: 2.5rem;
    }
}

/* 桌面端适配 */
@media (min-width: 992px) {
    .container {
        max-width: 960px;
    }
    
    .product-grid {
        grid-template-columns: repeat(3, 1fr);
    }
    
    .hero-content h1 {
        font-size: 3rem;
    }
}

/* 大屏端适配 */
@media (min-width: 1200px) {
    .container {
        max-width: 1140px;
    }
    
    .product-grid {
        grid-template-columns: repeat(4, 1fr);
    }
}

/* 超大屏优化 */
@media (min-width: 1400px) {
    .container {
        max-width: 1320px;
    }
}

/* 高分辨率设备优化 */
@media (min-resolution: 2dppx) {
    .logo img {
        background-image: url('logo@2x.svg');
    }
}

/* 减少动画偏好 */
@media (prefers-reduced-motion: reduce) {
    .product-card {
        transition: none;
    }
    
    .cta-button:active {
        transform: none;
    }
}

/* 深色模式支持 */
@media (prefers-color-scheme: dark) {
    :root {
        --bg-color: #1f2937;
        --text-color: #f9fafb;
        --border-color: #374151;
    }
}
```

## 📊 测试和调试

### 浏览器开发者工具

```javascript
// 响应式设计测试脚本
function testResponsive() {
    // 测试不同断点
    const breakpoints = [320, 768, 1024, 1200, 1440];
    
    breakpoints.forEach(width => {
        console.log(`测试宽度: ${width}px`);
        // 模拟窗口大小变化
        window.resizeTo(width, 800);
        
        // 检查布局
        const container = document.querySelector('.container');
        console.log('容器宽度:', container.offsetWidth);
        
        // 检查网格列数
        const grid = document.querySelector('.product-grid');
        const computedStyle = window.getComputedStyle(grid);
        console.log('网格模板:', computedStyle.gridTemplateColumns);
    });
}

// 设备特性检测
function detectDeviceFeatures() {
    const features = {
        touch: 'ontouchstart' in window,
        hover: matchMedia('(hover: hover)').matches,
        reducedMotion: matchMedia('(prefers-reduced-motion: reduce)').matches,
        darkMode: matchMedia('(prefers-color-scheme: dark)').matches
    };
    
    console.log('设备特性:', features);
    return features;
}
```

### 自动化测试

```javascript
// 响应式测试用例
describe('响应式设计测试', () => {
    test('移动端布局正确', () => {
        // 模拟移动端视图
        global.innerWidth = 375;
        global.dispatchEvent(new Event('resize'));
        
        const nav = document.querySelector('.main-nav');
        expect(window.getComputedStyle(nav).display).toBe('none');
    });
    
    test('桌面端布局正确', () => {
        // 模拟桌面端视图
        global.innerWidth = 1200;
        global.dispatchEvent(new Event('resize'));
        
        const nav = document.querySelector('.main-nav');
        expect(window.getComputedStyle(nav).display).toBe('block');
    });
});
```

## 📈 性能优化

### 1. 图片优化策略

```html
<!-- WebP格式优先 -->
<picture>
    <source type="image/webp" srcset="image.webp">
    <source type="image/jpeg" srcset="image.jpg">
    <img src="image.jpg" alt="描述">
</picture>

<!-- 懒加载 -->
<img src="placeholder.jpg" data-src="real-image.jpg" loading="lazy" alt="描述">

<script>
// 懒加载实现
const lazyImages = document.querySelectorAll('img[data-src]');

const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));
</script>
```

### 2. CSS优化

```css
/* 关键CSS内联 */
<style>
/* 首屏关键样式 */
.header, .hero { /* 关键样式 */ }
</style>

/* 非关键CSS异步加载 */
<link rel="preload" href="non-critical.css" as="style" onload="this.rel='stylesheet'">

/* 媒体查询优化 */
@media (min-width: 768px) {
    /* 平板样式 */
}

@media (min-width: 1024px) {
    /* 桌面样式 */
}
```

## 📊 学习检查清单

### 完成本章后你应该掌握：
- ✅ 理解响应式设计的核心原则
- ✅ 掌握媒体查询的使用方法
- ✅ 能够实现流体网格和弹性布局
- ✅ 掌握移动端优化技巧
- ✅ 完成响应式电商网站项目

### 常见错误与避免方法

#### 错误1：固定像素布局
```css
/* 错误：使用固定像素 */
.container { width: 960px; }
.column { width: 300px; }

/* 正确：使用相对单位 */
.container { max-width: 1200px; width: 90%; }
.column { width: 100%; }
@media (min-width: 768px) { .column { width: 50%; } }
```

#### 错误2：忽略触摸交互
```css
/* 错误：小触摸目标 */
.button { padding: 5px 10px; height: 30px; }

/* 正确：合适的触摸目标 */
.button { 
    min-height: 44px; 
    min-width: 44px; 
    padding: 12px 24px; 
}
```

#### 错误3：性能考虑不足
```css
/* 错误：大量重排 */
.element { width: calc(100% - 20px); } /* 每帧重排 */

/* 正确：优化性能 */
.element { 
    width: 100%; 
    transform: translateX(-20px); /* GPU加速 */
}
```

## 🔗 扩展学习资源

### 官方文档
- [MDN响应式设计](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [CSS媒体查询](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Media_Queries)
- [Google响应式设计指南](https://developers.google.com/web/fundamentals/design-and-ux/responsive)

### 在线工具
- [响应式设计测试工具](https://responsivedesignchecker.com/)
- [浏览器开发者工具](https://developer.chrome.com/docs/devtools/)
- [CSS Grid生成器](https://cssgrid-generator.netlify.app/)

### 推荐书籍
- 《响应式Web设计》
- 《移动优先》
- 《CSS揭秘》

## 🚀 下一步学习

完成响应式设计学习后，建议继续：
- **[JavaScript入门](04-javascript-basics.md)**：为网站添加交互功能
- **[前端框架](06-modern-frameworks.md)**：学习现代开发工具
- **[性能优化](08-performance-optimization.md)**：提升网站性能

---

## 💡 实用技巧

### 开发工作流
1. **移动优先设计**：从小屏幕开始设计
2. **渐进增强**：逐步添加大屏幕功能
3. **实时测试**：使用浏览器开发者工具测试不同尺寸

### 调试技巧
1. **设备模拟**：使用浏览器设备模拟器
2. **真实设备测试**：在真实设备上测试
3. **网络条件测试**：模拟不同网络速度

### 性能监控
1. **Core Web Vitals**：关注LCP、FID、CLS指标
2. ** Lighthouse测试**：使用自动化工具测试性能
3. **真实用户监控**：收集真实用户数据

> **记住：响应式设计不是功能，而是用户体验。好的响应式设计应该让用户感觉不到设备差异，只关注内容本身。**

---

*下一章我们将开始学习JavaScript，为你的网站添加丰富的交互功能！*