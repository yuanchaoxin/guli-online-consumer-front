import request from '@/utils/request'

export default {
  // 登录
  getCourseList(current, size, searchObject) {
    return request({
      url: `/eduservice/eduCourseFront/listCourse/${current}/${size}`,
      method: 'post',
      data: searchObject
    })
  },
  getAllSubject() {
    return request({
      url: `/eduservice/subject/getAllSubjectTree`,
      method: 'get'
    })
  },
  getFrontCourseInfo(courseId) {
    return request({
      url: `/eduservice/eduCourseFront/getFrontCourseInfo/${courseId}`,
      method: 'get'
    })
  }

}