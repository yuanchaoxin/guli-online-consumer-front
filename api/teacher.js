import request from '@/utils/request'

export default {
  // 登录
  getTeacherList(current, size) {
    return request({
      url: `/eduservice/eduteacherFront/listTeacher/${current}/${size}`,
      method: 'post'
    })
  },
  getTeacherInfo(id) {
    return request({
      url: `/eduservice/eduteacherFront/getTeacherInfo/${id}`,
      method: 'get'
    })
  }

}