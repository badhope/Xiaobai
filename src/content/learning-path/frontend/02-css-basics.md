# CSS3基础与布局

## 🎨 CSS3：网页的化妆师

CSS（层叠样式表）是Web页面的**视觉设计师**，负责将HTML的骨架装扮成美观的界面。就像化妆师为演员设计造型一样，CSS为HTML元素添加颜色、布局和动画效果。

### CSS3的新特性

#### 1. 强大的选择器系统
CSS3引入了更精确的选择器，让样式控制更加灵活。

```css
/* 属性选择器 */
input[type="email"] {
    border: 2px solid #4f46e5;
}

/* 伪类选择器 */
button:hover {
    background-color: #4f46e5;
    transform: translateY(-2px);
}

/* 伪元素选择器 */
p::first-letter {
    font-size: 2em;
    color: #4f46e5;
}

/* 结构伪类 */
li:nth-child(odd) {
    background-color: #f3f4f6;
}
```

#### 2. 盒模型（Box Model）
理解盒模型是掌握CSS布局的基础。

```css
.box {
    width: 300px;           /* 内容宽度 */
    height: 200px;          /* 内容高度 */
    padding: 20px;          /* 内边距 */
    border: 2px solid #333; /* 边框 */
    margin: 30px;           /* 外边距 */
    
    /* 盒模型计算方式 */
    box-sizing: border-box; /* 推荐使用border-box */
}
```

**盒模型可视化**：
```
外边距(margin)
┌─────────────────────────────┐
│ 边框(border)                 │
│ ┌─────────────────────────┐ │
│ │ 内边距(padding)         │ │
│ │ ┌─────────────────────┐ │ │
│ │ │ 内容(content)       │ │ │
│ │ └─────────────────────┘ │ │
│ └─────────────────────────┘ │
└─────────────────────────────┘
```

#### 3. 现代布局系统：Flexbox
Flexbox是CSS3引入的革命性布局系统，解决了传统布局的许多痛点。

```css
.container {
    display: flex;          /* 启用Flexbox */
    flex-direction: row;    /* 主轴方向：行 */
    justify-content: center; /* 主轴对齐：居中 */
    align-items: center;    /* 交叉轴对齐：居中 */
    flex-wrap: wrap;        /* 允许换行 */
    gap: 20px;              /* 项目间距 */
}

.item {
    flex: 1;                /* 弹性比例 */
    min-width: 200px;       /* 最小宽度 */
}
```

#### 4. 网格布局：Grid
Grid布局是二维布局系统，适合复杂的页面结构。

```css
.grid-container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;  /* 三列，中间列是两倍宽 */
    grid-template-rows: 100px auto 100px; /* 三行 */
    gap: 20px;
    grid-template-areas: 
        "header header header"
        "sidebar main aside"
        "footer footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }
```

## 🎯 CSS选择器详解

### 基础选择器

#### 1. 元素选择器
```css
/* 选择所有p元素 */
p {
    color: #333;
    line-height: 1.6;
}

/* 选择所有h1元素 */
h1 {
    font-size: 2.5rem;
    font-weight: bold;
}
```

#### 2. 类选择器
```css
/* 选择所有class为"button"的元素 */
.button {
    padding: 12px 24px;
    background-color: #4f46e5;
    color: white;
    border: none;
    border-radius: 6px;
}

/* 选择同时具有多个类的元素 */
.button.primary {
    background-color: #10b981;
}
```

#### 3. ID选择器
```css
/* 选择id为"main-header"的元素 */
#main-header {
    background-color: #1f2937;
    color: white;
    padding: 20px;
}
```

### 组合选择器

#### 1. 后代选择器
```css
/* 选择nav元素内的所有a元素 */
nav a {
    color: #4f46e5;
    text-decoration: none;
}

/* 选择article内的p元素 */
article p {
    margin-bottom: 1rem;
}
```

#### 2. 子元素选择器
```css
/* 只选择直接子元素 */
ul > li {
    list-style-type: disc;
    margin-left: 20px;
}

/* 选择header的直接子元素h1 */
header > h1 {
    margin: 0;
}
```

#### 3. 相邻兄弟选择器
```css
/* 选择紧接在h2后面的p元素 */
h2 + p {
    font-weight: bold;
    color: #6b7280;
}

/* 选择紧接在input后面的label */
input + label {
    margin-left: 10px;
}
```

#### 4. 通用兄弟选择器
```css
/* 选择所有在h2后面的p元素 */
h2 ~ p {
    margin-top: 10px;
}
```

### 属性选择器

```css
/* 选择具有href属性的a元素 */
a[href] {
    color: #4f46e5;
}

/* 选择href属性以"https"开头的a元素 */
a[href^="https"] {
    border-left: 2px solid green;
}

/* 选择href属性以".pdf"结尾的a元素 */
a[href$=".pdf"]::after {
    content: " 📄";
}

/* 选择href属性包含"example"的a元素 */
a[href*="example"] {
    background-color: #fef3c7;
}
```

### 伪类和伪元素

#### 伪类（状态选择器）
```css
/* 链接状态 */
a:link { color: #4f46e5; }      /* 未访问 */
a:visited { color: #9333ea; }   /* 已访问 */
a:hover { color: #7c3aed; }     /* 鼠标悬停 */
a:active { color: #5b21b6; }    /* 激活状态 */

/* 表单状态 */
input:focus {
    outline: 2px solid #4f46e5;
    outline-offset: 2px;
}

input:disabled {
    background-color: #f3f4f6;
    cursor: not-allowed;
}

/* 结构伪类 */
li:first-child { border-top-left-radius: 8px; }
li:last-child { border-bottom-left-radius: 8px; }
li:nth-child(odd) { background-color: #f9fafb; }
li:nth-child(even) { background-color: #f3f4f6; }
li:nth-child(3n) { color: #4f46e5; }  /* 每3个 */
```

#### 伪元素（虚拟元素）
```css
/* 首字母放大 */
p::first-letter {
    font-size: 2em;
    font-weight: bold;
    color: #4f46e5;
}

/* 首行样式 */
p::first-line {
    font-weight: bold;
    color: #1f2937;
}

/* 前后插入内容 */
blockquote::before {
    content: "❝";
    font-size: 3em;
    color: #4f46e5;
    margin-right: 10px;
}

blockquote::after {
    content: "❞";
    font-size: 3em;
    color: #4f46e5;
    margin-left: 10px;
}

/* 选中文本样式 */
::selection {
    background-color: #4f46e5;
    color: white;
}
```

## 🏗️ 布局系统详解

### 传统布局 vs 现代布局

#### 传统布局方法
```css
/* 浮动布局（已过时） */
.left-column {
    float: left;
    width: 30%;
}

.right-column {
    float: right;
    width: 70%;
}

/* 清除浮动 */
.container::after {
    content: "";
    display: table;
    clear: both;
}

/* 定位布局 */
.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
}
```

#### 现代布局：Flexbox

**Flexbox容器属性**：
```css
.flex-container {
    display: flex;
    
    /* 主轴方向 */
    flex-direction: row;            /* 水平排列（默认） */
    flex-direction: row-reverse;    /* 水平反向 */
    flex-direction: column;         /* 垂直排列 */
    flex-direction: column-reverse; /* 垂直反向 */
    
    /* 主轴对齐 */
    justify-content: flex-start;    /* 起始对齐 */
    justify-content: flex-end;      /* 末尾对齐 */
    justify-content: center;        /* 居中 */
    justify-content: space-between; /* 两端对齐 */
    justify-content: space-around;  /* 环绕对齐 */
    justify-content: space-evenly;  /* 均匀对齐 */
    
    /* 交叉轴对齐 */
    align-items: stretch;           /* 拉伸（默认） */
    align-items: flex-start;        /* 起始对齐 */
    align-items: flex-end;          /* 末尾对齐 */
    align-items: center;            /* 居中 */
    align-items: baseline;          /* 基线对齐 */
    
    /* 多行对齐 */
    align-content: stretch;         /* 拉伸 */
    align-content: flex-start;      /* 起始 */
    align-content: flex-end;        /* 末尾 */
    align-content: center;          /* 居中 */
    align-content: space-between;   /* 两端 */
    align-content: space-around;    /* 环绕 */
    
    /* 换行 */
    flex-wrap: nowrap;              /* 不换行（默认） */
    flex-wrap: wrap;                /* 换行 */
    flex-wrap: wrap-reverse;        /* 反向换行 */
    
    /* 简写属性 */
    flex-flow: row wrap;            /* direction + wrap */
}
```

**Flexbox项目属性**：
```css
.flex-item {
    /* 弹性比例 */
    flex: 1;                        /* 简写：grow shrink basis */
    flex-grow: 1;                   /* 放大比例 */
    flex-shrink: 1;                 /* 缩小比例 */
    flex-basis: auto;               /* 基础尺寸 */
    
    /* 单独对齐 */
    align-self: auto;               /* 继承容器 */
    align-self: flex-start;         /* 起始 */
    align-self: flex-end;           /* 末尾 */
    align-self: center;             /* 居中 */
    align-self: baseline;           /* 基线 */
    align-self: stretch;            /* 拉伸 */
    
    /* 顺序 */
    order: 0;                       /* 默认顺序 */
    order: 1;                       /* 排在后面 */
    order: -1;                      /* 排在前面 */
}
```

#### 现代布局：Grid

**Grid容器属性**：
```css
.grid-container {
    display: grid;
    
    /* 定义列 */
    grid-template-columns: 100px 1fr 2fr;       /* 固定+弹性 */
    grid-template-columns: repeat(3, 1fr);      /* 重复模式 */
    grid-template-columns: minmax(200px, 1fr);  /* 最小最大值 */
    grid-template-columns: [col1] 1fr [col2] 2fr; /* 命名线 */
    
    /* 定义行 */
    grid-template-rows: 100px auto 100px;
    grid-template-rows: repeat(3, minmax(100px, auto));
    
    /* 网格区域 */
    grid-template-areas: 
        "header header header"
        "sidebar main main"
        "footer footer footer";
    
    /* 间距 */
    gap: 20px;                      /* 行列间距 */
    column-gap: 20px;               /* 列间距 */
    row-gap: 30px;                  /* 行间距 */
    
    /* 对齐 */
    justify-items: stretch;         /* 单元格水平对齐 */
    align-items: stretch;           /* 单元格垂直对齐 */
    justify-content: start;         /* 网格水平对齐 */
    align-content: start;           /* 网格垂直对齐 */
    
    /* 自动布局 */
    grid-auto-flow: row;            /* 自动排列方向 */
    grid-auto-columns: 100px;       /* 自动列尺寸 */
    grid-auto-rows: minmax(100px, auto); /* 自动行尺寸 */
}
```

**Grid项目属性**：
```css
.grid-item {
    /* 位置 */
    grid-column: 1 / 3;             /* 从第1列到第3列 */
    grid-column: span 2;            /* 跨越2列 */
    grid-row: 2 / 4;                /* 从第2行到第4行 */
    grid-row: span 3;               /* 跨越3行 */
    
    /* 使用命名区域 */
    grid-area: header;              /* 使用命名区域 */
    grid-area: 1 / 1 / 3 / 3;       /* 行开始/列开始/行结束/列结束 */
    
    /* 单独对齐 */
    justify-self: stretch;          /* 水平对齐 */
    align-self: stretch;            /* 垂直对齐 */
}
```

## 🎨 样式和视觉效果

### 颜色和渐变

#### 颜色表示法
```css
/* 关键字 */
color: red;
color: darkblue;

/* 十六进制 */
color: #ff0000;           /* 红色 */
color: #f00;              /* 简写 */
color: #ff000080;         /* 带透明度 */

/* RGB */
color: rgb(255, 0, 0);    /* 红色 */
color: rgb(255 0 0 / 0.5); /* 带透明度 */

/* HSL（色相、饱和度、亮度） */
color: hsl(0, 100%, 50%); /* 红色 */
color: hsl(0 100% 50% / 0.5); /* 带透明度 */
```

#### 渐变背景
```css
/* 线性渐变 */
background: linear-gradient(to right, #4f46e5, #7c3aed);
background: linear-gradient(45deg, #4f46e5, #7c3aed, #10b981);

/* 径向渐变 */
background: radial-gradient(circle, #4f46e5, #7c3aed);

/* 锥形渐变 */
background: conic-gradient(from 0deg, #4f46e5, #7c3aed, #10b981);

/* 重复渐变 */
background: repeating-linear-gradient(
    45deg,
    #4f46e5,
    #4f46e5 10px,
    #7c3aed 10px,
    #7c3aed 20px
);
```

### 阴影和边框

#### 盒子阴影
```css
/* 基础阴影 */
box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);

/* 多重阴影 */
box-shadow: 
    0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);

/* 内阴影 */
box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);

/* 高级阴影效果 */
.card {
    box-shadow: 
        0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
    transition: box-shadow 0.3s ease;
}

.card:hover {
    box-shadow: 
        0 20px 25px -5px rgba(0, 0, 0, 0.1),
        0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
```

#### 文字阴影
```css
/* 基础文字阴影 */
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

/* 多重文字阴影 */
text-shadow: 
    1px 1px 0 #fff,
    2px 2px 0 rgba(0, 0, 0, 0.1);

/* 发光效果 */
text-shadow: 0 0 10px #4f46e5, 0 0 20px #4f46e5;
```

#### 边框样式
```css
/* 基础边框 */
border: 2px solid #4f46e5;

/* 圆角 */
border-radius: 8px;
border-radius: 50%;  /* 圆形 */

/* 单独设置圆角 */
border-radius: 8px 4px 12px 0;  /* 左上 右上 右下 左下 */

/* 边框图片 */
border: 10px solid transparent;
border-image: url(border.png) 30 round;

/* 轮廓（不占空间） */
outline: 2px solid #4f46e5;
outline-offset: 4px;  /* 轮廓偏移 */
```

### 动画和过渡

#### CSS过渡
```css
.button {
    background-color: #4f46e5;
    transition: all 0.3s ease;
}

.button:hover {
    background-color: #7c3aed;
    transform: translateY(-2px);
}

/* 多个过渡 */
.card {
    transition: 
        transform 0.3s ease,
        box-shadow 0.3s ease,
        opacity 0.3s ease;
}

.card:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}
```

#### CSS动画
```css
/* 关键帧动画 */
@keyframes slideIn {
    from {
        transform: translateX(-100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

/* 应用动画 */
.slide-in {
    animation: slideIn 0.5s ease forwards;
}

/* 复杂动画 */
@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-30px);
    }
    60% {
        transform: translateY(-15px);
    }
}

.bounce {
    animation: bounce 2s infinite;
}
```

## 🛠️ 实践项目：个人博客样式设计

### 项目目标
为之前创建的语义化博客页面添加精美的CSS样式，实现现代化的设计效果。

### 全局样式设计

```css
/* 重置样式 */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* 根变量 */
:root {
    /* 颜色系统 */
    --primary-color: #4f46e5;
    --primary-dark: #4338ca;
    --primary-light: #818cf8;
    
    --secondary-color: #10b981;
    --accent-color: #f59e0b;
    --danger-color: #ef4444;
    
    /* 中性色 */
    --gray-50: #f9fafb;
    --gray-100: #f3f4f6;
    --gray-200: #e5e7eb;
    --gray-300: #d1d5db;
    --gray-400: #9ca3af;
    --gray-500: #6b7280;
    --gray-600: #4b5563;
    --gray-700: #374151;
    --gray-800: #1f2937;
    --gray-900: #111827;
    
    /* 渐变 */
    --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --gradient-secondary: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    
    /* 阴影 */
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    
    /* 字体 */
    --font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    --font-size-sm: 0.875rem;
    --font-size-base: 1rem;
    --font-size-lg: 1.125rem;
    --font-size-xl: 1.25rem;
    --font-size-2xl: 1.5rem;
    --font-size-3xl: 1.875rem;
    --font-size-4xl: 2.25rem;
    
    /* 间距 */
    --space-1: 0.25rem;
    --space-2: 0.5rem;
    --space-3: 0.75rem;
    --space-4: 1rem;
    --space-5: 1.25rem;
    --space-6: 1.5rem;
    --space-8: 2rem;
    --space-10: 2.5rem;
    --space-12: 3rem;
    --space-16: 4rem;
    --space-20: 5rem;
    
    /* 圆角 */
    --radius-sm: 0.125rem;
    --radius: 0.25rem;
    --radius-md: 0.375rem;
    --radius-lg: 0.5rem;
    --radius-xl: 0.75rem;
    --radius-2xl: 1rem;
    --radius-full: 9999px;
}

/* 基础样式 */
body {
    font-family: var(--font-family);
    line-height: 1.6;
    color: var(--gray-800);
    background-color: var(--gray-50);
}

/* 链接样式 */
a {
    color: var(--primary-color);
    text-decoration: none;
    transition: color 0.2s ease;
}

a:hover {
    color: var(--primary-dark);
}

/* 标题样式 */
h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.25;
    margin-bottom: var(--space-4);
    color: var(--gray-900);
}

h1 { font-size: var(--font-size-4xl); }
h2 { font-size: var(--font-size-3xl); }
h3 { font-size: var(--font-size-2xl); }
h4 { font-size: var(--font-size-xl); }
h5 { font-size: var(--font-size-lg); }
h6 { font-size: var(--font-size-base); }

/* 段落样式 */
p {
    margin-bottom: var(--space-4);
}

/* 列表样式 */
ul, ol {
    margin-bottom: var(--space-4);
    padding-left: var(--space-6);
}

li {
    margin-bottom: var(--space-2);
}

/* 代码样式 */
code {
    background-color: var(--gray-100);
    padding: var(--space-1) var(--space-2);
    border-radius: var(--radius);
    font-family: 'Monaco', 'Consolas', monospace;
    font-size: 0.9em;
}

pre {
    background-color: var(--gray-900);
    color: var(--gray-100);
    padding: var(--space-4);
    border-radius: var(--radius-lg);
    overflow-x: auto;
    margin-bottom: var(--space-4);
}

pre code {
    background: none;
    padding: 0;
    color: inherit;
}
```

### 布局样式设计

```css
/* 页面布局 */
body {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
}

/* 头部样式 */
header[role="banner"] {
    background: var(--gradient-primary);
    color: white;
    padding: var(--space-8) 0;
    box-shadow: var(--shadow-lg);
}

header h1 {
    font-size: var(--font-size-4xl);
    font-weight: 700;
    margin-bottom: var(--space-2);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

header p {
    font-size: var(--font-size-lg);
    opacity: 0.9;
    margin-bottom: var(--space-6);
}

/* 主导航 */
nav[aria-label="主要导航"] ul {
    display: flex;
    gap: var(--space-6);
    list-style: none;
    padding: 0;
    margin: 0;
}

nav[aria-label="主要导航"] a {
    color: white;
    font-weight: 500;
    padding: var(--space-2) var(--space-4);
    border-radius: var(--radius-full);
    transition: all 0.3s ease;
}

nav[aria-label="主要导航"] a:hover,
nav[aria-label="主要导航"] a[aria-current="page"] {
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
}

/* 搜索框 */
form[role="search"] {
    display: flex;
    gap: var(--space-2);
    margin-top: var(--space-6);
}

form[role="search"] input {
    flex: 1;
    padding: var(--space-3) var(--space-4);
    border: none;
    border-radius: var(--radius-full);
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
}

form[role="search"] button {
    padding: var(--space-3) var(--space-6);
    background: white;
    color: var(--primary-color);
    border: none;
    border-radius: var(--radius-full);
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

form[role="search"] button:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
}

/* 主要内容区域 */
main {
    display: grid;
    grid-template-columns: 1fr 300px;
    gap: var(--space-8);
    padding: var(--space-8) 0;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
}

/* 文章样式 */
article {
    background: white;
    border-radius: var(--radius-xl);
    padding: var(--space-8);
    box-shadow: var(--shadow-md);
    transition: box-shadow 0.3s ease;
}

article:hover {
    box-shadow: var(--shadow-lg);
}

.article-meta {
    display: flex;
    gap: var(--space-4);
    align-items: center;
    margin-bottom: var(--space-4);
    font-size: var(--font-size-sm);
    color: var(--gray-600);
}

.tags {
    display: flex;
    gap: var(--space-2);
    flex-wrap: wrap;
    margin-bottom: var(--space-6);
}

.tags a {
    background: var(--gray-100);
    padding: var(--space-1) var(--space-3);
    border-radius: var(--radius-full);
    font-size: var(--font-size-sm);
    transition: all 0.3s ease;
}

.tags a:hover {
    background: var(--primary-color);
    color: white;
}

/* 侧边栏 */
aside {
    display: flex;
    flex-direction: column;
    gap: var(--space-6);
}

aside section {
    background: white;
    padding: var(--space-6);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
}

.tag-cloud {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
}

.tag-size-1 { font-size: 0.8em; }
.tag-size-2 { font-size: 0.9em; }
.tag-size-3 { font-size: 1em; }
.tag-size-4 { font-size: 1.1em; font-weight: 600; }

/* 页脚样式 */
footer[role="contentinfo"] {
    background: var(--gray-900);
    color: var(--gray-300);
    padding: var(--space-8) 0;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--space-8);
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--space-4);
}

footer h4 {
    color: white;
    margin-bottom: var(--space-4);
}

footer nav ul {
    list-style: none;
    padding: 0;
}

footer nav a {
    color: var(--gray-400);
    transition: color 0.2s ease;
}

footer nav a:hover {
    color: white;
}

.copyright {
    text-align: center;
    margin-top: var(--space-8);
    padding-top: var(--space-4);
    border-top: 1px solid var(--gray-700);
}
```

### 响应式设计

```css
/* 平板设备 */
@media (max-width: 1024px) {
    main {
        grid-template-columns: 1fr;
        gap: var(--space-6);
        padding: var(--space-6) var(--space-4);
    }
    
    aside {
        order: -1;
    }
    
    .footer-content {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* 移动设备 */
@media (max-width: 768px) {
    header[role="banner"] {
        padding: var(--space-6) var(--space-4);
    }
    
    nav[aria-label="主要导航"] ul {
        flex-direction: column;
        gap: var(--space-2);
    }
    
    form[role="search"] {
        flex-direction: column;
    }
    
    article {
        padding: var(--space-6);
    }
    
    .article-meta {
        flex-direction: column;
        align-items: flex-start;
        gap: var(--space-2);
    }
    
    .footer-content {
        grid-template-columns: 1fr;
        gap: var(--space-6);
    }
}

/* 小屏手机 */
@media (max-width: 480px) {
    :root {
        --space-8: 1.5rem;
        --space-6: 1rem;
        --space-4: 0.75rem;
    }
    
    h1 { font-size: var(--font-size-3xl); }
    h2 { font-size: var(--font-size-2xl); }
    h3 { font-size: var(--font-size-xl); }
    
    article {
        padding: var(--space-4);
    }
    
    aside section {
        padding: var(--space-4);
    }
}
```

## 📊 学习检查清单

### 完成本章后你应该掌握：
- ✅ 理解CSS选择器系统和优先级
- ✅ 掌握盒模型和布局基础
- ✅ 熟练使用Flexbox和Grid布局
- ✅ 能够实现复杂的样式效果
- ✅ 完成个人博客的样式设计

### 常见错误与避免方法

#### 错误1：选择器优先级混乱
```css
/* 错误：样式被覆盖 */
.button { color: blue; }
#special-button { color: red; }

/* 正确：理解优先级 */
/* ID选择器 > 类选择器 > 元素选择器 */
```

#### 错误2：布局方式选择不当
```css
/* 错误：用浮动实现复杂布局 */
.left { float: left; width: 30%; }
.right { float: right; width: 70%; }

/* 正确：使用现代布局 */
.container { display: flex; }
.left { flex: 3; }
.right { flex: 7; }
```

#### 错误3：忽略响应式设计
```css
/* 错误：固定宽度 */
.container { width: 1200px; }

/* 正确：响应式设计 */
.container { 
    max-width: 1200px; 
    width: 100%; 
    margin: 0 auto;
}
```

## 🔗 扩展学习资源

### 官方文档
- [MDN CSS参考](https://developer.mozilla.org/zh-CN/docs/Web/CSS)
- [CSS规范](https://www.w3.org/Style/CSS/)
- [Flexbox指南](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Grid指南](https://css-tricks.com/snippets/css/complete-guide-grid/)

### 在线工具
- [CSS Grid生成器](https://cssgrid-generator.netlify.app/)
- [Flexbox练习](https://flexboxfroggy.com/)
- [CSS动画生成器](https://animista.net/)

### 推荐书籍
- 《CSS权威指南》
- 《CSS揭秘》
- 《响应式Web设计》

## 🚀 下一步学习

完成CSS3基础学习后，建议继续：
- **[响应式设计](03-responsive-design.md)**：掌握移动端适配技术
- **[JavaScript入门](04-javascript-basics.md)**：开始学习交互编程
- **[前端框架](06-modern-frameworks.md)**：了解现代开发工具

---

## 💡 实用技巧

### CSS调试技巧
1. **使用开发者工具**：实时修改和调试样式
2. **边框调试法**：给元素添加临时边框查看布局
3. **控制台检查**：使用`$0`快速访问选中元素

### 性能优化
1. **避免过度嵌套**：减少选择器复杂度
2. **使用CSS变量**：提高代码可维护性
3. **压缩和合并**：减少HTTP请求

### 代码组织
1. **BEM命名规范**：Block__Element--Modifier
2. **组件化思维**：将样式按功能模块组织
3. **样式指南**：建立统一的设计系统

> **记住：CSS不仅仅是样式，它是用户体验的重要组成部分。好的CSS设计能够显著提升产品的质量和用户满意度。**

---

*下一章我们将深入学习响应式设计，让你的网站在各种设备上都能完美展示！*