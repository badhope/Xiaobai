'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Layers } from 'lucide-react';
import { subjectTree } from '../../data/subjects';
import { courses } from '../../data/courses';

export default function SubjectDetailPage() {
  const params = useParams();
  const subjectId = params.id as string;
  const category = subjectTree.categories.find((cat) => cat.id === subjectId);

  if (!category) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">学科未找到</h1>
          <p className="text-gray-600 mb-8">抱歉，您访问的学科不存在</p>
          <Link
            href="/subjects"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            返回学科列表
          </Link>
        </div>
      </main>
    );
  }

  const categoryCourses = courses.filter((course) =>
    course.categories?.includes(subjectId)
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/subjects"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            返回学科列表
          </Link>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8">
              <div className="flex items-center">
                <div className="bg-white/20 p-4 rounded-xl mr-4">
                  <BookOpen className="w-12 h-12" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold mb-2">{category.name}</h1>
                  <p className="text-blue-100">学科门类 {category.id}</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center mb-2">
                    <Layers className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-sm text-gray-600">专业类数量</span>
                  </div>
                  <p className="text-3xl font-bold text-gray-900">
                    {category.children?.length || 0}
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center mb-2">
                    <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-sm text-gray-600">相关课程</span>
                  </div>
                  <p className="text-3xl font-bold text-gray-900">
                    {categoryCourses.length}
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center mb-2">
                    <svg
                      className="w-5 h-5 text-blue-600 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm text-gray-600">覆盖度</span>
                  </div>
                  <p className="text-3xl font-bold text-gray-900">
                    {category.children && category.children.length > 0
                      ? `${Math.round(((category.children.length || 0) / 10) * 100)}%`
                      : '0%'}
                  </p>
                </div>
              </div>

              {category.children && category.children.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    包含专业类
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.children.map((child) => {
                      const childCourses = courses.filter((course) =>
                        course.categories?.includes(child.id)
                      );

                      return (
                        <div
                          key={child.id}
                          className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <h3 className="font-semibold text-gray-900 mb-2">
                            {child.name}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {childCourses.length} 门课程
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          {categoryCourses.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                相关课程
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryCourses.map((course, index) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                  >
                    <Link href={`/course/${course.id}`} className="block">
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {course.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {course.description}
                        </p>
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
            </div>
          )}
        </motion.div>
      </div>
    </main>
  );
}
