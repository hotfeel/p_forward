import {post,get} from '@/api/ajax.js'

// 根据条件查询客户列表
export const queryCustomerByCondition = (customerCondition) => {
  return post({
    url: '/customer/queryByCondition',
    data:customerCondition
  })
}

// 根据客户编码查询客户详情
export  const queryCustomerDetail = (customerCode) =>{
  return get({
    url:'/customer/queryCustomerDetail',
    data:{customerCode:customerCode}
  })
}
