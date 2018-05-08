import {post,get} from '@/api/ajax.js'

// 车牌绑定列表
export const queryOrderList = () => {
  return get({
    url: '/order/queryOrderList'
  })
}

// 查询订单产品详情
export const queryOrderProduct = (orderNumber) => {
  return get({
    url:'/orderProduct/queryByOrderNumber',
    data:{orderNumber:orderNumber}
  })
}

// 根据订单号查询订单详情
export const queryOrderDetail = (orderNumber) => {
  return get({
    url:'/order/queryOrderDetail',
    data:{orderNumber:orderNumber}
  })
}

