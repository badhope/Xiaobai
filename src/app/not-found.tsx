import Link from 'next/link';
import { Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-200 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">页面未找到</h2>
        <p className="text-gray-600 mb-8">
          抱歉，您访问的页面不存在或已被移除
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/"
            className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Home className="w-5 h-5 mr-2" />
            返回首页
          </Link>
          <Link
            href="/search"
            className="flex items-center px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
          >
            <Search className="w-5 h-5 mr-2" />
            搜索课程
          </Link>
        </div>
      </div>
    </main>
  );
}
