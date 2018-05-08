import {post,get} from '@/api/ajax.js'
const test={
  Types : {
    GET_DATA: 'GET_DATA',
  },
  state:{
    formData:{
      name:''
    }
  },
  getters : {
    formData: state => state.formData
  },
  actions:{
    getData({ commit, state }, params) {
      get({url:"/queryData",data:""}).then(res=>{
        console.log("1111111",res);
        commit('GET_DATA', res[0])
      })
    }
  },
  mutations:{
    GET_DATA:(state, result)=>{
      state.formData = result
    }
  }

}
export default test
