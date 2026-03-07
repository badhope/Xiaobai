import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { completeSystem, getAllCategories } from '../index';

export default function Subjects() {
  const categories = getAllCategories(completeSystem.subjectTree);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 页面头部 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">学科分类</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            基于中国高等教育专业目录，涵盖多个学科门类
          </p>
        </div>

        {/* 学科大类列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="card h-full">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4">{category.icon}</div>
                    <div>
                      <h2 className="text-2xl font-bold">{category.name}</h2>
                      {category.code && (
                        <span className="text-sm text-gray-500">代码：{category.code}</span>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  
                  {category.tags && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {category.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* 专业方向列表 */}
                  <div className="space-y-3">
                    <h3 className="font-semibold text-gray-700">专业方向：</h3>
                    {category.children.map((subcategory) => (
                      <Link
                        key={subcategory.id}
                        to={`/subject/${subcategory.id}`}
                        className="block p-3 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors duration-200 group"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
                              {subcategory.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {subcategory.courseIds.length} 门课程
                            </div>
                          </div>
                          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-600 transition-colors duration-200" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
