'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, BookOpen, Filter, X } from 'lucide-react';
import { courses } from '../../data/courses';
import { subjectTree } from '../../data/subjects';

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch =
        course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesDifficulty =
        selectedDifficulty === 'all' || course.difficulty === selectedDifficulty;

      return matchesSearch && matchesDifficulty;
    });
  }, [searchTerm, selectedDifficulty]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedDifficulty('all');
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">搜索课程</h1>
          <p className="text-xl text-gray-600">
            从 {courses.length} 门课程中找到你需要的内容
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
            <input
              type="text"
              placeholder="搜索课程名称或描述..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none text-lg"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          <div className="flex items-center justify-between mt-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Filter className="w-5 h-5 mr-2" />
              筛选
            </button>

            {(searchTerm || selectedDifficulty !== 'all') && (
              <button
                onClick={clearFilters}
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                清除筛选
              </button>
            )}
          </div>

          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-4 p-4 bg-white rounded-lg border border-gray-200"
            >
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    难度等级
                  </label>
                  <div className="flex gap-2">
                    {['all', 'beginner', 'intermediate', 'advanced'].map((diff) => (
                      <button
                        key={diff}
                        onClick={() => setSelectedDifficulty(diff)}
                        className={`px-4 py-2 rounded-lg transition-colors ${
                          selectedDifficulty === diff
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {diff === 'all'
                          ? '全部'
                          : diff === 'beginner'
                          ? '入门'
                          : diff === 'intermediate'
                          ? '进阶'
                          : '高级'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        <div className="text-center mb-8">
          <p className="text-gray-600">
            找到 <span className="font-bold text-blue-600">{filteredCourses.length}</span> 门课程
          </p>
        </div>

        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <Link href={`/course/${course.id}`} className="block">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {course.name}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-2">
                          {course.description}
                        </p>
                      </div>
                      <BookOpen className="w-6 h-6 text-blue-600 flex-shrink-0 ml-4" />
                    </div>

                    <div className="flex items-center justify-between">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          course.difficulty === 'beginner'
                            ? 'bg-green-100 text-green-700'
                            : course.difficulty === 'intermediate'
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {course.difficulty === 'beginner'
                          ? '入门'
                          : course.difficulty === 'intermediate'
                          ? '进阶'
                          : '高级'}
                      </span>
                      {course.version && (
                        <span className="text-xs text-gray-500">
                          v{course.version}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              未找到相关课程
            </h3>
            <p className="text-gray-600 mb-4">
              尝试更换搜索关键词或调整筛选条件
            </p>
            <button
              onClick={clearFilters}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              清除所有筛选
            </button>
          </motion.div>
        )}
      </div>
    </main>
  );
}
