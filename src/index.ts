/**
 * 学科分类系统统一导出
 */

// 类型导出
export type {
  SubjectCategory,
  SubjectSubcategory,
  Course,
  CourseLibrary,
  SubjectTree,
  CompleteSubjectSystem,
  ArticleInfo,
  CategoryMetadata,
  CourseMetadata,
  SearchResult,
  CourseSubjectRelation,
} from './types/subject';

// 数据导入
import { subjectTree } from './content/subjects';
import { courseLibrary } from './content/courses';

// 组合系统
export const completeSystem = {
  subjectTree,
  courseLibrary,
};

// 工具函数导出
export {
  // 学科分类
  getAllCategories,
  getById,
  getByCode,
  getSubcategoriesByCategory,
  getCourseIdsBySubcategory,
  getAllCourseIdsByCategory,
  
  // 课程库
  getAllCourses,
  getCourseById,
  getCourseByCode,
  getCoursesByTag,
  getAllCourseTags,
  searchCourses,
  
  // 组合系统
  getCoursesBySubcategory,
  getCourseRelations,
  getSharedCourses,
  getExclusiveCourses,
  searchAll,
  
  // 统计
  getSystemStatistics,
  getCategoryStatistics,
  getSubcategoryStatistics,
  
  // 学习路径
  getLearningPath,
  getRecommendedLearningOrder,
  
  // 验证
  validateCourseReferences,
} from './lib/subject-utils';
