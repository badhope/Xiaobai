import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Search, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: '首页', path: '/' },
    { name: '学科分类', path: '/subjects' },
    { name: '搜索', path: '/search' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* 导航栏 */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="w-8 h-8 text-primary-600" />
              <span className="text-xl font-bold gradient-text">Xiaobai</span>
            </Link>

            {/* 桌面端导航 */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-primary-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="relative">
                <input
                  type="text"
                  placeholder="搜索课程..."
                  className="w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            {/* 移动端菜单按钮 */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>

        {/* 移动端导航 */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-gray-200"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block text-base font-medium text-gray-600 hover:text-gray-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <input
                type="text"
                placeholder="搜索课程..."
                className="w-full pl-4 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </motion.div>
        )}
      </header>

      {/* 主内容区 */}
      <main className="flex-1">
        {children}
      </main>

      {/* 页脚 */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <BookOpen className="w-6 h-6 text-primary-400" />
                <span className="text-lg font-bold">Xiaobai</span>
              </div>
              <p className="text-gray-400 text-sm">
                基于中国高等教育专业目录设计的学科分类与课程共享系统
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">快速链接</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/" className="hover:text-white">首页</Link></li>
                <li><Link to="/subjects" className="hover:text-white">学科分类</Link></li>
                <li><Link to="/search" className="hover:text-white">搜索</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">联系我们</h3>
              <p className="text-gray-400 text-sm">
                GitHub: <a href="https://github.com/badhope/Xiaobai" className="hover:text-white" target="_blank" rel="noopener noreferrer">badhope/Xiaobai</a>
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            <p>&copy; 2024 Xiaobai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
