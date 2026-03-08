'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, ChevronRight, Layers } from 'lucide-react';
import { subjectTree } from '../../data/subjects';

export default function SubjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            学科分类
          </h1>
          <p className="text-xl text-gray-600">
            基于中国高等教育专业目录的完整学科体系
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjectTree.categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <Link href={`/subjects/${category.id}`} className="block">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <BookOpen className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {category.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          学科门类 {category.id}
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>

                  {category.children && category.children.length > 0 && (
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-600 mb-2">
                        <Layers className="w-4 h-4 mr-2" />
                        <span>包含 {category.children.length} 个专业类</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {category.children.slice(0, 5).map((child) => (
                          <span
                            key={child.id}
                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                          >
                            {child.name}
                          </span>
                        ))}
                        {category.children.length > 5 && (
                          <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded">
                            +{category.children.length - 5} 更多
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 bg-blue-50 rounded-xl p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-blue-900 mb-2">
            没有找到想要的学科？
          </h2>
          <p className="text-blue-700 mb-4">
            我们正在持续扩展学科覆盖范围，敬请期待更多分类
          </p>
          <Link
            href="/search"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            搜索课程
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
