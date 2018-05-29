import {post,get} from '@/api/ajax.js'

// 车牌绑定列表
export const queryOrderList = () => {
  return get({
    url: '/order/queryOrderList'
  })
}
// 根据订单号查询订单详情
export const queryOrderDetail = (orderNumber) => {
  return get({
    url:'/order/queryOrderDetail',
    data:{orderNumber:orderNumber}
  })
}

// 保存订单信息
export const saveOrder = (order)=>{
  return post({
    url:'/order/saveOrder',
    data:order
  })
}

// 批量删除订单产品信息
export const deleteOrderProducts = (idList)=>{
  return post({
    url:'/orderProduct/deleteOrderProducts',
    data:idList
  })
}

// 删除订单信息
export const deleteOrder = (order)=>{
  return post({
    url:'/order/deleteOrder',
    data:order
  })
}

// 根据条件查询订单列表
export const queryOrderByCondition=(orderCondition)=>{
  return post({
    url:'/order/queryByCondition',
    data:orderCondition
  })
}

// 根据ID批量删除订单费用信息
export  const deleteOrderCharges=(idList)=>{
  return post({
    url:'order/deleteOrderCharges',
    data:idList
  })
}
