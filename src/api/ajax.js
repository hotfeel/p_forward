import Axios from 'axios'
import { Loading, Message } from 'element-ui'
import { baseURL } from './config'

// config defaults
const instance = Axios.create({
    baseURL
})

// create cancle obj
const CancelToken = Axios.CancelToken
const source = CancelToken.source()

// loading实例
let loadingObj = null

export const post = ({url, data}) => {
    return new Promise((resolve, reject) => {
        instance.post(url, data, {
            headers: {
                'Content-Type': 'application/json'
            },
            cancelToken: source.token
        }).then(res => {
            if (res.data.status == 0) {
                resolve(res.data.data)
            } else { // 后端定义的错误
                Message({
                    message: String(res.data.message),
                    type: 'error',
                    diration: 3000
                })
            }
        }).catch(error => { // 请求服务器发生错误
            Message({
                message: String(error),
                type: 'error',
                diration: 3000
            })
        })
    })
}

export const get = ({url, data}) => {
    return new Promise((resolve, reject) => {
        instance.get(url, {
            cancelToken: source.token,
            params: data
        }).then(res => {
            if (res.data.status == 0) {
                resolve(res.data.data)
            } else { // 后端定义的错误
                Message({
                    message: String(res.data.message),
                    type: 'error',
                    diration: 3000
                })
            }
        }).catch(error => { // 请求服务器发生错误
            Message({
                message: String(error),
                type: 'error',
                diration: 3000
            })
        })
    })
}

export const del = ({url, data}) => {
    instance.delete(url, {
        cancelToken: source.token,
        params: data
    })
}

// 全局请求发送前处理
instance.interceptors.request.use((config) => {
    loadingObj = Loading.service({
        background: 'rgba(0,0,0,.6)',
        text: 'loading'
    })
    return config
}, error => {
    // 如果有个请求出错 则cancle掉所有请求
    loadingObj.close()
    Message({
        message: String(error),
        type: 'error',
        diration: 3000
    })
})

// 全局响应完成前处理
instance.interceptors.response.use((response) => {
    loadingObj.close()
    return response
}, error => {
    loadingObj.close()
    Message({
        message: String(error),
        type: 'error',
        diration: 3000
    })
})
