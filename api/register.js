import request from '@/utils/request'

export default {
  // 根据手机号发验证码
  sendCode(phone) {
    return request({
      url: `/msmservice/msm/send/${phone}`,
      method: 'get'
    })
  },

  // 注册的方法
  registerMember(formItem) {
    return request({
      url: `/ucenterservice/member/register`,
      method: 'post',
      data: formItem
    })
  }

}