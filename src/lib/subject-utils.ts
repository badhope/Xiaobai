/**
 * 学科分类系统工具函数（优化版 - 支持课程共享）
 * 提供科目分类系统的常用操作
 */

import {
  SubjectCategory,
  SubjectSubcategory,
  Course,
  CourseLibrary,
  SubjectTree,
  CompleteSubjectSystem,
  SearchResult,
  CourseSubjectRelation,
} from '../types/subject';

// ============================================
// 学科分类相关工具函数
// ============================================

/**
 * 获取所有一级分类（学科大类）
 */
export function getAllCategories(tree: SubjectTree): SubjectCategory[] {
  return tree.categories;
}

/**
 * 根据 ID 获取分类（支持一级、二级分类）
 */
export function getById(
  tree: SubjectTree,
  id: string
): SubjectCategory | SubjectSubcategory | undefined {
  return tree.index.byId[id];
}

/**
 * 根据代码获取分类（支持一级、二级分类）
 */
export function getByCode(
  tree: SubjectTree,
  code: string
): SubjectCategory | SubjectSubcategory | undefined {
  return tree.index.byCode[code];
}

/**
 * 获取指定大类的所有一级子分类（专业方向）
 */
export function getSubcategoriesByCategory(
  tree: SubjectTree,
  categoryId: string
): SubjectSubcategory[] {
  const category = tree.index.byId[categoryId] as SubjectCategory;
  if (!category || !('children' in category)) {
    return [];
  }
  return category.children || [];
}

/**
 * 获取指定专业的所有课程 ID
 */
export function getCourseIdsBySubcategory(
  tree: SubjectTree,
  subcategoryId: string
): string[] {
  const subcategory = tree.index.byId[subcategoryId] as SubjectSubcategory;
  if (!subcategory || !('courseIds' in subcategory)) {
    return [];
  }
  return subcategory.courseIds || [];
}

/**
 * 获取指定大类的所有课程 ID（包含所有专业方向）
 */
export function getAllCourseIdsByCategory(
  tree: SubjectTree,
  categoryId: string
): string[] {
  const subcategories = getSubcategoriesByCategory(tree, categoryId);
  const allCourseIds = new Set<string>();
  subcategories.forEach((sub) => {
    sub.courseIds.forEach((id) => allCourseIds.add(id));
  });
  return Array.from(allCourseIds);
}

// ============================================
// 课程库相关工具函数
// ============================================

/**
 * 获取所有课程
 */
export function getAllCourses(library: CourseLibrary): Course[] {
  return library.courses;
}

/**
 * 根据 ID 获取课程
 */
export function getCourseById(
  library: CourseLibrary,
  courseId: string
): Course | undefined {
  return library.index.byId[courseId];
}

/**
 * 根据代码获取课程
 */
export function getCourseByCode(
  library: CourseLibrary,
  code: string
): Course | undefined {
  return library.index.byCode[code];
}

/**
 * 根据标签获取课程
 */
export function getCoursesByTag(
  library: CourseLibrary,
  tag: string
): Course[] {
  const normalizedTag = tag.toLowerCase();
  return library.index.byTag[normalizedTag] || [];
}

/**
 * 获取所有标签
 */
export function getAllCourseTags(library: CourseLibrary): string[] {
  return Object.keys(library.index.byTag).sort();
}

/**
 * 搜索课程
 */
export function searchCourses(
  library: CourseLibrary,
  keyword: string
): Course[] {
  const normalizedKeyword = keyword.toLowerCase().trim();
  if (!normalizedKeyword) {
    return [];
  }

  return library.courses.filter((course) => {
    // 搜索名称
    if (course.name.toLowerCase().includes(normalizedKeyword)) {
      return true;
    }
    // 搜索描述
    if (course.description.toLowerCase().includes(normalizedKeyword)) {
      return true;
    }
    // 搜索简介
    if (course.summary && course.summary.toLowerCase().includes(normalizedKeyword)) {
      return true;
    }
    // 搜索标签
    if (course.tags && course.tags.some(tag => tag.toLowerCase().includes(normalizedKeyword))) {
      return true;
    }
    // 搜索分类
    if (course.categories && course.categories.some(cat => cat.toLowerCase().includes(normalizedKeyword))) {
      return true;
    }
    return false;
  });
}

// ============================================
// 组合系统相关工具函数
// ============================================

/**
 * 获取指定专业的所有课程详情
 */
export function getCoursesBySubcategory(
  system: CompleteSubjectSystem,
  subcategoryId: string
): Course[] {
  const courseIds = getCourseIdsBySubcategory(system.subjectTree, subcategoryId);
  return courseIds
    .map((id) => system.courseLibrary.index.byId[id])
    .filter((course): course is Course => course !== undefined);
}

/**
 * 获取课程被哪些专业引用
 */
export function getCourseRelations(
  system: CompleteSubjectSystem,
  courseId: string
): CourseSubjectRelation | null {
  const course = system.courseLibrary.index.byId[courseId];
  if (!course) {
    return null;
  }

  const relation: CourseSubjectRelation = {
    courseId: course.id,
    courseName: course.name,
    subjects: [],
  };

  // 遍历所有专业，查找引用该课程的专业
  system.subjectTree.categories.forEach((category) => {
    category.children.forEach((subcategory) => {
      if (subcategory.courseIds.includes(courseId)) {
        relation.subjects.push({
          subcategoryId: subcategory.id,
          subcategoryName: subcategory.name,
          categoryId: category.id,
          categoryName: category.name,
        });
      }
    });
  });

  return relation;
}

/**
 * 获取共享课程（被多个专业引用）
 */
export function getSharedCourses(
  system: CompleteSubjectSystem,
  minRefCount: number = 2
): Course[] {
  return system.courseLibrary.courses.filter((course) => {
    const relations = getCourseRelations(system, course.id);
    return relations && relations.subjects.length >= minRefCount;
  });
}

/**
 * 获取专业的独有课程（不被其他专业共享）
 */
export function getExclusiveCourses(
  system: CompleteSubjectSystem,
  subcategoryId: string
): Course[] {
  const courseIds = getCourseIdsBySubcategory(system.subjectTree, subcategoryId);
  
  return courseIds.filter((courseId) => {
    const relations = getCourseRelations(system, courseId);
    return relations && relations.subjects.length === 1;
  }).map((id) => system.courseLibrary.index.byId[id])
    .filter((course): course is Course => course !== undefined);
}

/**
 * 综合搜索（搜索分类、专业、课程）
 */
export function searchAll(
  system: CompleteSubjectSystem,
  keyword: string
): SearchResult[] {
  const results: SearchResult[] = [];
  const normalizedKeyword = keyword.toLowerCase().trim();

  if (!normalizedKeyword) {
    return results;
  }

  // 搜索学科大类
  system.subjectTree.categories.forEach((category) => {
    if (
      category.name.toLowerCase().includes(normalizedKeyword) ||
      category.description.toLowerCase().includes(normalizedKeyword)
    ) {
      results.push({ type: 'category', data: category });
    }
  });

  // 搜索专业方向
  system.subjectTree.categories.forEach((category) => {
    category.children.forEach((subcategory) => {
      if (
        subcategory.name.toLowerCase().includes(normalizedKeyword) ||
        subcategory.description.toLowerCase().includes(normalizedKeyword)
      ) {
        results.push({ type: 'subcategory', data: subcategory });
      }
    });
  });

  // 搜索课程
  const courseResults = searchCourses(system.courseLibrary, keyword);
  courseResults.forEach((course) => {
    results.push({ type: 'course', data: course });
  });

  return results;
}

// ============================================
// 统计相关工具函数
// ============================================

/**
 * 获取系统统计信息
 */
export function getSystemStatistics(system: CompleteSubjectSystem): {
  totalCategories: number;
  totalSubcategories: number;
  totalCourses: number;
  sharedCourses: number;
  exclusiveCourses: number;
  totalEstimatedHours: number;
  totalCredits: number;
} {
  const totalCategories = system.subjectTree.categories.length;
  const totalSubcategories = system.subjectTree.categories.reduce(
    (sum, cat) => sum + cat.children.length,
    0
  );
  const totalCourses = system.courseLibrary.courses.length;
  
  // 计算共享课程和独有课程
  let sharedCourses = 0;
  let exclusiveCourses = 0;
  system.courseLibrary.courses.forEach((course) => {
    const relations = getCourseRelations(system, course.id);
    if (relations && relations.subjects.length > 1) {
      sharedCourses++;
    } else if (relations && relations.subjects.length === 1) {
      exclusiveCourses++;
    }
  });

  const totalEstimatedHours = system.courseLibrary.courses.reduce(
    (sum, course) => sum + (course.estimatedHours || 0),
    0
  );
  const totalCredits = system.courseLibrary.courses.reduce(
    (sum, course) => sum + (course.credits || 0),
    0
  );

  return {
    totalCategories,
    totalSubcategories,
    totalCourses,
    sharedCourses,
    exclusiveCourses,
    totalEstimatedHours,
    totalCredits,
  };
}

/**
 * 获取指定大类的统计信息
 */
export function getCategoryStatistics(
  system: CompleteSubjectSystem,
  categoryId: string
): {
  subcategoryCount: number;
  courseCount: number;
  uniqueCourseCount: number;
  totalEstimatedHours: number;
  totalCredits: number;
} {
  const subcategories = getSubcategoriesByCategory(system.subjectTree, categoryId);
  const courseIds = getAllCourseIdsByCategory(system.subjectTree, categoryId);
  const courses = courseIds.map((id) => system.courseLibrary.index.byId[id])
    .filter((course): course is Course => course !== undefined);

  return {
    subcategoryCount: subcategories.length,
    courseCount: courseIds.length,
    uniqueCourseCount: courses.length,
    totalEstimatedHours: courses.reduce((sum, c) => sum + (c.estimatedHours || 0), 0),
    totalCredits: courses.reduce((sum, c) => sum + (c.credits || 0), 0),
  };
}

/**
 * 获取指定专业的统计信息
 */
export function getSubcategoryStatistics(
  system: CompleteSubjectSystem,
  subcategoryId: string
): {
  courseCount: number;
  totalEstimatedHours: number;
  totalCredits: number;
  sharedCourseCount: number;
  exclusiveCourseCount: number;
} {
  const courses = getCoursesBySubcategory(system, subcategoryId);
  
  let sharedCourseCount = 0;
  let exclusiveCourseCount = 0;
  courses.forEach((course) => {
    const relations = getCourseRelations(system, course.id);
    if (relations && relations.subjects.length > 1) {
      sharedCourseCount++;
    } else {
      exclusiveCourseCount++;
    }
  });

  return {
    courseCount: courses.length,
    totalEstimatedHours: courses.reduce((sum, c) => sum + (c.estimatedHours || 0), 0),
    totalCredits: courses.reduce((sum, c) => sum + (c.credits || 0), 0),
    sharedCourseCount,
    exclusiveCourseCount,
  };
}

// ============================================
// 学习路径相关工具函数
// ============================================

/**
 * 获取课程的学习路径（基于先修关系）
 */
export function getLearningPath(
  library: CourseLibrary,
  courseId: string,
  visited: Set<string> = new Set()
): Course[] {
  const course = library.index.byId[courseId];
  if (!course || visited.has(course.id)) {
    return [];
  }

  visited.add(course.id);
  const path: Course[] = [];

  // 先添加先修课程
  if (course.prerequisites) {
    course.prerequisites.forEach((prereqId) => {
      const prereqPath = getLearningPath(library, prereqId, visited);
      path.push(...prereqPath);
    });
  }

  // 添加当前课程
  path.push(course);

  return path;
}

/**
 * 获取专业的推荐学习顺序
 */
export function getRecommendedLearningOrder(
  system: CompleteSubjectSystem,
  subcategoryId: string
): Course[] {
  const courses = getCoursesBySubcategory(system, subcategoryId);
  
  // 按推荐学期排序
  const sortedCourses = [...courses].sort(
    (a, b) => (a.recommendedSemester || 999) - (b.recommendedSemester || 999)
  );

  return sortedCourses;
}

// ============================================
// 验证相关工具函数
// ============================================

/**
 * 验证课程引用是否有效
 */
export function validateCourseReferences(
  system: CompleteSubjectSystem
): {
  valid: boolean;
  errors: string[];
  warnings: string[];
} {
  const errors: string[] = [];
  const warnings: string[] = [];

  // 检查所有专业的课程引用
  system.subjectTree.categories.forEach((category) => {
    category.children.forEach((subcategory) => {
      subcategory.courseIds.forEach((courseId) => {
        const course = system.courseLibrary.index.byId[courseId];
        if (!course) {
          errors.push(`专业 [${subcategory.name}] 引用了不存在的课程：${courseId}`);
        }
      });
    });
  });

  // 检查课程的先修关系
  system.courseLibrary.courses.forEach((course) => {
    if (course.prerequisites) {
      course.prerequisites.forEach((prereqId) => {
        const prereq = system.courseLibrary.index.byId[prereqId];
        if (!prereq) {
          errors.push(`课程 [${course.name}] 的先修课程不存在：${prereqId}`);
        }
      });
    }
  });

  // 检查课程的推荐学期是否合理
  system.courseLibrary.courses.forEach((course) => {
    if (course.prerequisites && course.recommendedSemester) {
      course.prerequisites.forEach((prereqId) => {
        const prereq = system.courseLibrary.index.byId[prereqId];
        if (prereq && prereq.recommendedSemester) {
          if (prereq.recommendedSemester >= (course.recommendedSemester || 0)) {
            warnings.push(
              `课程 [${course.name}] 的先修课程 [${prereq.name}] 推荐学期 (${prereq.recommendedSemester}) 不早于当前课程 (${course.recommendedSemester})`
            );
          }
        }
      });
    }
  });

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  };
}
