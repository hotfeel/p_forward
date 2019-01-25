import {post,get} from '@/api/ajax.js'

// 查询所有需要控制权限的菜单信息
export const queryAllMeau = () => {
  return post({
    url: '/base/queryAllMeau'
  })
}

