import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Code, TrendingUp, Users, Zap, ArrowRight } from 'lucide-react';
import { completeSystem, getSystemStatistics } from '../index';

export default function Home() {
  const stats = getSystemStatistics(completeSystem);

  const features = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: '学科分类',
      description: '基于高等教育专业目录，涵盖计算机、管理学、数学等学科大类',
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: '课程共享',
      description: '同一门课程可被多个专业共享，避免重复维护，数据一致',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: '现代化设计',
      description: '卡片式布局、沉浸式阅读、流畅动画，带来舒适的学习体验',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: '学习路径',
      description: '基于先修关系推荐学习顺序，帮助你系统掌握知识',
    },
  ];

  const categories = completeSystem.subjectTree.categories;

  return (
    <div className="bg-white">
      {/* Hero 区域 */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-purple-800 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              学科分类与课程共享系统
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
              为现代大学生提供全面的教程和学习资源，基于中国高等教育专业目录设计
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/subjects"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors duration-200"
              >
                开始学习
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="https://github.com/badhope/Xiaobai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary-800 text-white font-semibold rounded-lg hover:bg-primary-900 transition-colors duration-200"
              >
                <TrendingUp className="mr-2 w-5 h-5" />
                GitHub 项目
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 统计区域 */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">{stats.totalCategories}</div>
              <div className="text-gray-600">学科大类</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">{stats.totalSubcategories}</div>
              <div className="text-gray-600">专业方向</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">{stats.totalCourses}</div>
              <div className="text-gray-600">课程</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">{stats.sharedCourses}</div>
              <div className="text-gray-600">共享课程</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 特性区域 */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              核心特性
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              专为现代大学生设计，提供高效、便捷的学习体验
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 学科分类区域 */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              学科分类
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              涵盖多个学科门类，满足你的学习需求
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, idx) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link to={`/subject/${category.id}`} className="block group">
                  <div className="card p-6 hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
                    <div className="text-5xl mb-4">{category.icon}</div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary-600 transition-colors duration-200">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        {category.children.length} 个专业方向
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-600 transition-colors duration-200" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 区域 */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            准备好开始学习了吗？
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            浏览我们的学科分类，找到适合你的课程
          </p>
          <Link
            to="/subjects"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200"
          >
            浏览所有学科
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
