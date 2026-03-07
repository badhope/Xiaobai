import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Award, BookOpen, Tags, Link2 } from 'lucide-react';
import { completeSystem, getCourseById, getCourseRelations } from '../index';

export default function CourseDetail() {
  const { id } = useParams<{ id: string }>();
  
  if (!id) {
    return <div>未找到课程</div>;
  }

  const course = getCourseById(completeSystem.courseLibrary, id);
  const relations = getCourseRelations(completeSystem, id);

  if (!course) {
    return <div>未找到课程信息</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 返回按钮 */}
        <Link
          to="/subjects"
          className="inline-flex items-center mb-8 text-gray-600 hover:text-primary-600 transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          返回
        </Link>

        {/* 课程信息 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card p-8 mb-8"
        >
          <div className="mb-6">
            <h1 className="text-4xl font-bold mb-2">{course.name}</h1>
            {course.code && (
              <p className="text-gray-500">课程代码：{course.code}</p>
            )}
          </div>

          {/* 课程元信息 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <Clock className="w-6 h-6 text-primary-600 mr-2" />
              <div>
                <div className="font-semibold">{course.estimatedHours || 0}h</div>
                <div className="text-xs text-gray-600">学时</div>
              </div>
            </div>
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <Award className="w-6 h-6 text-primary-600 mr-2" />
              <div>
                <div className="font-semibold">{course.credits || 0}学分</div>
                <div className="text-xs text-gray-600">学分</div>
              </div>
            </div>
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <BookOpen className="w-6 h-6 text-primary-600 mr-2" />
              <div>
                <div className="font-semibold">第{course.recommendedSemester || 0}学期</div>
                <div className="text-xs text-gray-600">推荐</div>
              </div>
            </div>
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <div className="w-6 h-6 text-primary-600 mr-2 font-semibold">{course.difficulty || 'N/A'}</div>
              <div>
                <div className="font-semibold">难度</div>
                <div className="text-xs text-gray-600">等级</div>
              </div>
            </div>
          </div>

          {/* 课程描述 */}
          <div className="prose max-w-none mb-6">
            <h2 className="text-2xl font-bold mb-3">课程介绍</h2>
            <p className="text-gray-700 leading-relaxed">{course.description}</p>
          </div>

          {/* 标签 */}
          {course.tags && course.tags.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <Tags className="w-5 h-5 text-gray-400 mr-2" />
                <h3 className="font-semibold">课程标签</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {course.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* 共享信息 */}
          {relations && relations.subjects.length > 0 && (
            <div className="border-t pt-6">
              <div className="flex items-center mb-4">
                <Link2 className="w-5 h-5 text-gray-400 mr-2" />
                <h3 className="font-semibold">
                  被 {relations.subjects.length} 个专业共享
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {relations.subjects.map((subject, index) => (
                  <div
                    key={subject.subcategoryId}
                    className="p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="text-sm text-gray-600">{subject.categoryName}</div>
                    <div className="font-medium">{subject.subcategoryName}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* 课程内容区域（预留） */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card p-8"
        >
          <h2 className="text-2xl font-bold mb-4">课程内容</h2>
          <div className="text-gray-600">
            <p>课程内容正在建设中...</p>
            <p className="text-sm mt-2">
              这里将包含详细的教程文章、代码示例、练习题等学习资源
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
