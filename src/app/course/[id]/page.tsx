'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Clock, Layers, Star, User, Calendar } from 'lucide-react';
import { courses } from '../../data/courses';

export default function CourseDetailPage() {
  const params = useParams();
  const courseId = params.id as string;
  const course = courses.find((c) => c.id === courseId);

  if (!course) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">课程未找到</h1>
          <p className="text-gray-600 mb-8">抱歉，您访问的课程不存在</p>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            返回首页
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            返回首页
          </Link>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-4xl font-bold mb-4">{course.name}</h1>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center">
                      <Star className="w-5 h-5 mr-2" />
                      <span>{course.difficulty === 'beginner' ? '入门' : course.difficulty === 'intermediate' ? '进阶' : '高级'}</span>
                    </div>
                    {course.version && (
                      <div className="flex items-center">
                        <BookOpen className="w-5 h-5 mr-2" />
                        <span>版本 {course.version}</span>
                      </div>
                    )}
                    {course.lastUpdated && (
                      <div className="flex items-center">
                        <Calendar className="w-5 h-5 mr-2" />
                        <span>更新于 {course.lastUpdated}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="bg-white/20 p-4 rounded-xl">
                  <BookOpen className="w-16 h-16" />
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center mb-2">
                    <Clock className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-sm text-gray-600">建议学习学期</span>
                  </div>
                  <p className="text-lg font-semibold text-gray-900">
                    {course.recommendedSemester === 'fall' ? '秋季学期' : course.recommendedSemester === 'spring' ? '春季学期' : '任意学期'}
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center mb-2">
                    <Layers className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-sm text-gray-600">先修课程</span>
                  </div>
                  <p className="text-lg font-semibold text-gray-900">
                    {course.prerequisites && course.prerequisites.length > 0
                      ? `${course.prerequisites.length} 门`
                      : '无'}
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center mb-2">
                    <User className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-sm text-gray-600">适用专业</span>
                  </div>
                  <p className="text-lg font-semibold text-gray-900">
                    全专业开放
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">课程介绍</h2>
                <p className="text-gray-700 leading-relaxed">{course.description}</p>
              </div>

              {course.prerequisites && course.prerequisites.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">先修课程</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {course.prerequisites.map((prereqId) => {
                      const prereqCourse = courses.find((c) => c.id === prereqId);
                      return prereqCourse ? (
                        <Link
                          key={prereqId}
                          href={`/course/${prereqId}`}
                          className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <h3 className="font-semibold text-gray-900">{prereqCourse.name}</h3>
                          <p className="text-sm text-gray-600 mt-1">{prereqCourse.description}</p>
                        </Link>
                      ) : null;
                    })}
                  </div>
                </div>
              )}

              <div className="bg-blue-50 rounded-xl p-6">
                <h2 className="text-xl font-bold text-blue-900 mb-2">学习建议</h2>
                <ul className="space-y-2 text-blue-800">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>建议按照课程难度循序渐进，不要跳级学习</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>完成先修课程后再开始本课程效果更佳</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>理论与实践相结合，多做练习和项目</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
