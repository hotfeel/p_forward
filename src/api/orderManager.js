import { get,post } from './ajax'

export const queryOrder=()=>{
  return get({
    url:'order/queryOrder'
  })
}
