import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Clock, Award } from 'lucide-react';
import { completeSystem, getCoursesBySubcategory, getSubcategoryStatistics } from '../index';

export default function SubjectDetail() {
  const { id } = useParams<{ id: string }>();
  
  if (!id) {
    return <div>未找到专业</div>;
  }

  const subcategory = completeSystem.subjectTree.index.byId[id];
  
  if (!subcategory || !('courseIds' in subcategory)) {
    return <div>未找到专业信息</div>;
  }

  const courses = getCoursesBySubcategory(completeSystem, id);
  const stats = getSubcategoryStatistics(completeSystem, id);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 返回按钮 */}
        <Link
          to="/subjects"
          className="inline-flex items-center mb-8 text-gray-600 hover:text-primary-600 transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          返回学科列表
        </Link>

        {/* 专业信息 */}
        <div className="card p-8 mb-8">
          <div className="mb-6">
            <h1 className="text-4xl font-bold mb-2">{subcategory.name}</h1>
            {subcategory.code && (
              <p className="text-gray-500">专业代码：{subcategory.code}</p>
            )}
          </div>
          <p className="text-gray-700 text-lg mb-6">{subcategory.description}</p>

          {/* 统计信息 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <BookOpen className="w-8 h-8 text-primary-600 mr-3" />
              <div>
                <div className="text-2xl font-bold">{stats.courseCount}</div>
                <div className="text-sm text-gray-600">课程数</div>
              </div>
            </div>
            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <Clock className="w-8 h-8 text-primary-600 mr-3" />
              <div>
                <div className="text-2xl font-bold">{stats.totalEstimatedHours}h</div>
                <div className="text-sm text-gray-600">总学时</div>
              </div>
            </div>
            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <Award className="w-8 h-8 text-primary-600 mr-3" />
              <div>
                <div className="text-2xl font-bold">{stats.totalCredits}</div>
                <div className="text-sm text-gray-600">总学分</div>
              </div>
            </div>
            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 text-primary-600 mr-3 text-2xl font-bold">✓</div>
              <div>
                <div className="text-2xl font-bold">{stats.sharedCourseCount}</div>
                <div className="text-sm text-gray-600">共享课程</div>
              </div>
            </div>
          </div>
        </div>

        {/* 课程列表 */}
        <div>
          <h2 className="text-2xl font-bold mb-6">专业课程</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link to={`/course/${course.id}`} className="block group">
                  <div className="card p-6 hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors duration-200">
                      {course.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {course.summary || course.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {course.estimatedHours}h
                      </div>
                      <div className="flex items-center">
                        <Award className="w-4 h-4 mr-1" />
                        {course.credits}学分
                      </div>
                      {course.recommendedSemester && (
                        <div>
                          第{course.recommendedSemester}学期
                        </div>
                      )}
                    </div>
                    {course.tags && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {course.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
