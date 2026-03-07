import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search as SearchIcon, BookOpen, Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { completeSystem, searchAll } from '../index';

export default function SearchPage() {
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (keyword.trim()) {
      const searchResults = searchAll(completeSystem, keyword);
      setResults(searchResults);
      setSearched(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 搜索框 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">搜索课程</h1>
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="输入课程名称、专业名称或关键词..."
                className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent text-lg"
              />
              <SearchIcon className="w-6 h-6 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            </div>
            <button
              type="submit"
              className="mt-4 px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200"
            >
              搜索
            </button>
          </form>
        </div>

        {/* 搜索结果 */}
        {searched && (
          <div>
            {results.length === 0 ? (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-xl text-gray-600">未找到相关结果</p>
                <p className="text-gray-500 mt-2">试试其他关键词</p>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-bold mb-6">
                  找到 {results.length} 个结果
                </h2>
                <div className="space-y-4">
                  {results.map((result, index) => (
                    <motion.div
                      key={result.type === 'course' ? result.data.id : result.data.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={
                          result.type === 'course'
                            ? `/course/${result.data.id}`
                            : result.type === 'subcategory'
                            ? `/subject/${result.data.id}`
                            : `/subjects`
                        }
                        className="block"
                      >
                        <div className="card p-6 hover:shadow-lg transition-shadow duration-300">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center mb-2">
                                <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded font-medium mr-2">
                                  {result.type === 'course' && '课程'}
                                  {result.type === 'subcategory' && '专业'}
                                  {result.type === 'category' && '学科大类'}
                                </span>
                                <h3 className="text-xl font-bold">{result.data.name}</h3>
                              </div>
                              <p className="text-gray-600">
                                {result.data.description || result.data.summary}
                              </p>
                              {result.type === 'course' && (
                                <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
                                  <div className="flex items-center">
                                    <Clock className="w-4 h-4 mr-1" />
                                    {result.data.estimatedHours}h
                                  </div>
                                  <div className="flex items-center">
                                    <Award className="w-4 h-4 mr-1" />
                                    {result.data.credits}学分
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* 热门搜索标签 */}
        {!searched && (
          <div className="mt-12">
            <h3 className="text-lg font-semibold mb-4">热门搜索</h3>
            <div className="flex flex-wrap gap-3">
              {['数据结构', '机器学习', '管理学原理', '数学分析', '算法', '操作系统'].map((tag) => (
                <button
                  key={tag}
                  onClick={() => {
                    setKeyword(tag);
                    const searchResults = searchAll(completeSystem, tag);
                    setResults(searchResults);
                    setSearched(true);
                  }}
                  className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-primary-50 hover:border-primary-300 transition-colors duration-200"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
