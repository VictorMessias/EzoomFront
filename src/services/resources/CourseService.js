import Rest from '@/services/Rest';

/**
 * @typedef {CourseService}
 */
export default class CourseService extends Rest {
  /**
   * @type {String}
   */
  static resource = '/courses'
}
