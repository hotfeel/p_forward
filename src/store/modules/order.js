import {post,get} from  '@/api/ajax'
const order = {
  TYPES:{
    QUERY_ORDERLIST : "QUERY_ORDERLIST"
  },
  state:{
    orderData:[{
      id : "",
      orderNumber: "", // 订单编号
      custNumber: "",  // 客户编码
      custShortName: "", //客户简码
      constractDate: "", //合同日期
      deleveryDate: "", //交货日期
      wonCompany: "", //我方公司
      courier: "", //业务员
      paymentWay: "", //付款方式
      totalGoodsValue: 0.0, //总货值
      totalCost: 0.0, //费用合计
      totalMoney: 0.0, //总金额
      grossProfit: 0.0, //毛利金额
      createDate: "", //创建日期
      creator: ""  //创建人
    }]
  },getters : {
    orderData: state => state.orderData
  },action:{
    queryOrder:({commit},data) =>{
      return new Pomise((resolve, reject) => {
        commit(QUERY_ORDERLIST);
      })
    }
    },
  mutations:{
    queryOrder({ commit, state }, params) {
      get({url:"/order/queryData",data:""}).then(res=>{
        commit('QUERY_ORDERLIST', res[0])
      })
    }
  }
}
