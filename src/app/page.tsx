'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, Layers, Share2, TrendingUp, Star, Clock, Award, GraduationCap } from 'lucide-react';
import { courses } from '../data/courses';

export default function Home() {
  const hotCourses = courses.slice(0, 6);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            学科分类与课程共享系统
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            涵盖 14 个学科门类、92 个专业类、150+ 门核心课程的现代化学习平台
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/subjects" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 inline-block text-center">
              开始探索
            </Link>
            <Link
              href="/search"
              className="px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200 inline-block text-center"
            >
              搜索课程
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Layers, label: '学科门类', value: '14' },
            { icon: BookOpen, label: '专业类', value: '92' },
            { icon: Share2, label: '核心课程', value: '150+' },
            { icon: TrendingUp, label: '学习时长', value: '8000+h' },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <Icon className="w-10 h-10 mx-auto mb-3 text-blue-600" />
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">核心特色</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: '全面学科覆盖',
              description: '基于中国高等教育专业目录，覆盖哲学、经济学、法学等 14 个学科门类',
              icon: Layers,
            },
            {
              title: '课程共享机制',
              description: '相同课程在不同专业间共享，避免重复建设，提高资源利用效率',
              icon: Share2,
            },
            {
              title: '科学学习路径',
              description: '基于先修关系和推荐学期，为学生提供科学的学习顺序建议',
              icon: TrendingUp,
            },
          ].map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <Icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Hot Courses Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">热门课程推荐</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link href={`/course/${course.id}`} className="block">
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                        {course.name}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {course.description}
                      </p>
                    </div>
                    <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 ml-3" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {course.difficulty && (
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
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
                      )}
                      {course.credits && (
                        <span className="flex items-center text-gray-500 text-xs">
                          <Award className="w-3 h-3 mr-1" />
                          {course.credits} 学分
                        </span>
                      )}
                    </div>
                    {course.estimatedHours && (
                      <span className="flex items-center text-gray-500 text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        {course.estimatedHours}h
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/search"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            查看更多课程
            <TrendingUp className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* Learning Paths Section */}
      <section className="container mx-auto px-4 py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">推荐学习路径</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: '计算机科学入门路径',
              description: '从零基础开始学习编程，掌握核心计算机知识',
              courses: ['计算机导论', 'C 语言程序设计', '数据结构', '算法设计'],
              color: 'blue',
            },
            {
              title: '人工智能学习路径',
              description: '深入学习机器学习和深度学习，掌握 AI 核心技术',
              courses: ['数学基础', 'Python 编程', '机器学习', '深度学习'],
              color: 'purple',
            },
          ].map((path, index) => (
            <motion.div
              key={path.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-xl shadow-md p-8"
            >
              <div className="flex items-center mb-4">
                <GraduationCap className={`w-8 h-8 mr-3 ${path.color === 'blue' ? 'text-blue-600' : 'text-purple-600'}`} />
                <h3 className="text-xl font-bold text-gray-900">{path.title}</h3>
              </div>
              <p className="text-gray-600 mb-6">{path.description}</p>
              <div className="flex flex-wrap gap-2">
                {path.courses.map((course) => (
                  <span
                    key={course}
                    className={`px-3 py-1 rounded-full text-sm ${
                      path.color === 'blue'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-purple-100 text-purple-700'
                    }`}
                  >
                    {course}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">学科分类与课程共享系统 v2.0</p>
          <p className="text-gray-400 text-sm">
            基于 Next.js 14 + TypeScript + Tailwind CSS 构建
          </p>
        </div>
      </footer>
    </main>
  );
}
