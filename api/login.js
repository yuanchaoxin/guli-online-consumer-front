import request from '@/utils/request'

export default {
  // 登录
  login(userInfo) {
    return request({
      url: `/ucenterservice/member/login`,
      method: 'post',
      data: userInfo
    })
  },

  // 获取用户信息
  getMemberInfo() {
    return request({
      url: `/ucenterservice/member/getMemberInfo`,
      method: 'get'
    })
  }

}