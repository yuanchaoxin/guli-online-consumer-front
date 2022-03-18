import request from '@/utils/request'

export default {
  // 生成订单
  createOrder(orderId) {
    return request({
      url: '/orderservice/order/createOrder/' + orderId,
      method: 'post'
    })
  },
  // 获取订单信息
  getOrderInfo(orderId) {
    return request({
      url: '/orderservice/order/getOrderInfo/' + orderId,
      method: 'get'
    })
  },
  // 查询支付二维吗
  createNatvie(orderNo) {
    return request({
      url: `/orderservice/payLog/createNative/${orderNo}`,
      method: 'get'
    })
  },
  // 查询支付二维码
  queryPayStatus(orderNo) {
    return request({
      url: `/orderservice/payLog/queryPayStatus/${orderNo}`,
      method: 'get'
    })
  }
}