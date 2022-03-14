import request from '@/utils/request'

export default {
  // 获取评论列表 
  getCommentList(page, size, courseId) {
    return request({
      url: `/eduservice/comment/getCommentList/${page}/${size}/${courseId}`,
      method: 'get'
    })
  },
  addComment(comment) {
    return request({
      url: `/eduservice/comment/addComment`,
      method: 'post',
      data: comment
    })
  }

}