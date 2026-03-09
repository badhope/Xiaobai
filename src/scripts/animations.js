/* 🌟 编程学习平台 - 动画与交互效果 */

// ===== 页面加载动画 =====
document.addEventListener('DOMContentLoaded', function() {
    // 初始化所有动画效果
    initAnimations();
    initScrollEffects();
    initInteractiveElements();
    initTooltips();
});

// ===== 初始化动画效果 =====
function initAnimations() {
    // 元素进入视口时的动画
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 观察所有需要动画的元素
    document.querySelectorAll('.card, .feature-item, .module-card').forEach(el => {
        observer.observe(el);
    });

    // 英雄区域打字机效果
    initTypewriterEffect();
}

// ===== 打字机效果 =====
function initTypewriterEffect() {
    const heroText = document.querySelector('.hero-title');
    if (!heroText) return;

    const texts = [
        '编程学习平台',
        '从零开始学编程',
        '成为全栈开发者'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            heroText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            heroText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typingSpeed = 1000; // 暂停一下
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 500;
        }

        setTimeout(type, typingSpeed);
    }

    setTimeout(type, 1000);
}

// ===== 滚动效果 =====
function initScrollEffects() {
    // 导航栏滚动效果
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // 回到顶部按钮
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '↑';
    backToTop.className = 'back-to-top';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: var(--primary-color);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: var(--shadow-lg);
    `;

    document.body.appendChild(backToTop);

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.style.opacity = '1';
            backToTop.style.transform = 'translateY(0)';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.transform = 'translateY(20px)';
        }
    });

    // 视差滚动效果
    initParallaxEffect();
}

// ===== 视差滚动效果 =====
function initParallaxEffect() {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        parallaxElements.forEach(el => {
            el.style.transform = `translateY(${rate}px)`;
        });
    });
}

// ===== 交互元素 =====
function initInteractiveElements() {
    // 卡片悬停效果增强
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });

    // 按钮点击效果
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            // 创建涟漪效果
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.6);
                transform: scale(0);
                animation: ripple 0.6s linear;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // 添加涟漪动画样式
    if (!document.querySelector('#ripple-styles')) {
        const style = document.createElement('style');
        style.id = 'ripple-styles';
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
            .btn {
                position: relative;
                overflow: hidden;
            }
        `;
        document.head.appendChild(style);
    }

    // 进度条动画
    initProgressBars();
}

// ===== 进度条动画 =====
function initProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target;
                const width = progress.getAttribute('data-progress') || '100';
                progress.style.width = width + '%';
                progressObserver.unobserve(progress);
            }
        });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => {
        progressObserver.observe(bar);
    });
}

// ===== 工具提示系统 =====
function initTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', showTooltip);
        element.addEventListener('mouseleave', hideTooltip);
    });

    function showTooltip(e) {
        const tooltipText = this.getAttribute('data-tooltip');
        const tooltip = document.createElement('div');
        tooltip.className = 'custom-tooltip';
        tooltip.textContent = tooltipText;
        
        document.body.appendChild(tooltip);
        
        const rect = this.getBoundingClientRect();
        tooltip.style.cssText = `
            position: fixed;
            background: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 8px 12px;
            border-radius: 4px;
            font-size: 12px;
            z-index: 10000;
            white-space: nowrap;
            pointer-events: none;
            transform: translateY(-10px);
            opacity: 0;
            transition: all 0.3s ease;
            left: ${rect.left + rect.width / 2}px;
            top: ${rect.top - 10}px;
            transform: translate(-50%, -100%) translateY(-10px);
        `;
        
        // 触发动画
        setTimeout(() => {
            tooltip.style.opacity = '1';
            tooltip.style.transform = 'translate(-50%, -100%) translateY(0)';
        }, 10);
        
        this._tooltip = tooltip;
    }

    function hideTooltip() {
        if (this._tooltip) {
            this._tooltip.remove();
            this._tooltip = null;
        }
    }
}

// ===== 主题切换功能 =====
function initThemeSwitcher() {
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '🌙';
    themeToggle.className = 'theme-toggle';
    themeToggle.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        width: 40px;
        height: 40px;
        border: none;
        border-radius: 50%;
        background: var(--primary-color);
        color: white;
        cursor: pointer;
        z-index: 1000;
        font-size: 18px;
    `;

    document.body.appendChild(themeToggle);

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        themeToggle.innerHTML = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
    });

    // 添加暗色主题样式
    if (!document.querySelector('#dark-theme-styles')) {
        const style = document.createElement('style');
        style.id = 'dark-theme-styles';
        style.textContent = `
            .dark-theme {
                --primary-color: #8b5cf6;
                --secondary-color: #10b981;
                --gray-50: #111827;
                --gray-100: #1f2937;
                --gray-200: #374151;
                --gray-300: #4b5563;
                --gray-400: #6b7280;
                --gray-500: #9ca3af;
                --gray-600: #d1d5db;
                --gray-700: #e5e7eb;
                --gray-800: #f3f4f6;
                --gray-900: #f9fafb;
                background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
                color: var(--gray-200);
            }
            
            .dark-theme .card {
                background: rgba(30, 41, 59, 0.8);
                border: 1px solid rgba(255, 255, 255, 0.1);
            }
        `;
        document.head.appendChild(style);
    }
}

// ===== 页面加载进度条 =====
function initPageLoader() {
    const loader = document.createElement('div');
    loader.id = 'page-loader';
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background: var(--primary-color);
        z-index: 9999;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.3s ease;
    `;

    document.body.appendChild(loader);

    // 模拟页面加载进度
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 10;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            setTimeout(() => {
                loader.style.transform = 'scaleX(1)';
                setTimeout(() => {
                    loader.style.opacity = '0';
                    setTimeout(() => loader.remove(), 300);
                }, 300);
            }, 100);
        }
        loader.style.transform = `scaleX(${progress / 100})`;
    }, 100);
}

// ===== 导出函数供外部使用 =====
window.PlatformAnimations = {
    init: function() {
        initAnimations();
        initScrollEffects();
        initInteractiveElements();
        initTooltips();
        initThemeSwitcher();
        initPageLoader();
    },
    
    // 手动触发元素动画
    animateElement: function(element) {
        element.classList.add('animate-fadeInUp');
    },
    
    // 显示通知
    showNotification: function(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            background: white;
            border-radius: var(--radius-md);
            box-shadow: var(--shadow-lg);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
};

// 自动初始化
PlatformAnimations.init();