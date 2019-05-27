import {post,get} from '@/api/ajax.js'

// 根据条件查询用户信息
export const queryByCondition = (userCondition) => {
  return post({
    url: '/user/queryByCondition',
    data:userCondition
  })
}

// 查询所有角色信息
export const queryAllRoles = () => {
  return get({
    url:'base/queryAllRoles'
  })
}

