<template>
  <el-container class="e_main">
    <el-header height="50px">
      <el-row class="e_common e_row_header">
        <!--<c-top-query style="float: left"></c-top-query>-->
        <div class="query_div">
          <el-row class="query_row">
            <el-button type="primary"
                       class="q_query_btn"
                       @click="togglebox">
              <i class="iconfont icon-gengduo"
                 v-bind:class="[queryBtn_active ? 'q_active':'q_inactive']">
              </i>
              查询
            </el-button>
          </el-row>
          <transition name="q_trans">
            <div class="box" v-show="boxshow">
              <el-row>
                <el-input v-model="orderCondition.conditionKey" placeholder="请输入关键字" class="inpt_key"></el-input>
                <span>(销售订单号/客户订单号/客户编号)</span>
                <el-collapse>
                  <el-collapse-item> <template slot="title">  合同时间 </template>
                    <span>起：</span><el-date-picker v-model="orderCondition.startConstractDate" type="date" placeholder="选择日期(00:00:00)"> </el-date-picker>
                    <span>止：</span> <el-date-picker v-model="orderCondition.endConstractDate" type="date" placeholder="选择日期(23:59:59)"> </el-date-picker>
                  </el-collapse-item>
                  <el-collapse-item title="交货时间">
                    <span>起：</span> <el-date-picker v-model="orderCondition.startDeliveryDate" type="date" placeholder="选择日期(00:00:00)"> </el-date-picker>
                    <span>止：</span><el-date-picker v-model="orderCondition.endDeliveryDate" type="date" placeholder="选择日期(23:59:59)"> </el-date-picker>
                  </el-collapse-item>
                  <el-collapse-item title="客户简称"><el-input v-model="orderCondition.custShortName" placeholder="请输入内容"></el-input> </el-collapse-item>
                  <el-collapse-item title="付款方式">
                    <el-select v-model="orderCondition.paymentWay" clearable placeholder="请选择">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-collapse-item>
                  <el-collapse-item title="我方公司"><el-input v-model="orderCondition.ownCompany" placeholder="请输入内容"></el-input></el-collapse-item>
                  <el-collapse-item title="业务员"><el-input v-model="orderCondition.courier" placeholder="请输入内容"></el-input></el-collapse-item>
                </el-collapse>
              </el-row>
              <el-row class="box_bottom">
                <el-button @click="queryOrderByCondition">查询</el-button>
                <el-button @click="btn_reset">重置</el-button>
              </el-row>
            </div>
          </transition>
        </div>
        <el-button icon="el-icon-edit" class="btn_common" @click="toOrderDetail">新建</el-button>
        <!--<el-button icon="el-icon-delete" class="btn_common">删除</el-button>-->
      </el-row>
    </el-header>
    <el-main style="height: 100%;">
      <el-row class="e_common" style="padding: 7px 5px 0px 7px">
        <el-table :data="orderList" style="width: 100%"  height="94%" stripe border @cell-dblclick="cellDblclick">
          <el-table-column fixed type="selection" width="35"></el-table-column>
          <el-table-column fixed label="操作" width="90">
            <template slot-scope="scope">
              <a class="el-icon-search" title="详情查询" @click="queryOrderDetail(scope.$index, scope)"></a>
              <a class="el-icon-edit" title="编辑" @click="queryOrderDetail(scope.$index, scope)"></a>
              <a class="el-icon-delete" title="删除" @click="deleteRow(scope.$index, scope)"></a>
            </template>
          </el-table-column>
          <el-table-column fixed prop="orderNumber" label="销售订单号" sortable width="150px"> </el-table-column>
          <el-table-column prop="custNumber" sortable label="客户编号" width="160"> </el-table-column>
          <el-table-column prop="custShortName" sortable label="客户简称" width="120"> </el-table-column>
          <el-table-column sortable prop="constractDate" label="合同日期" :formatter="dateFormat" width="170"></el-table-column>
          <el-table-column prop="deliveryDate" label="交货日期" :formatter="dateFormat" width="170"> </el-table-column>
          <el-table-column prop="ownCompany" label="我方公司" width="140"> </el-table-column>
          <el-table-column prop="currency" label="币种" width="120"> </el-table-column>
          <el-table-column prop="courier" label="业务员" width="120"> </el-table-column>
          <el-table-column prop="paymentWay" label="付款方式" width="120"> </el-table-column>
          <el-table-column prop="totalGoodsValue" label="总货值" width="120"> </el-table-column>
          <el-table-column prop="totalCost" label="费用合计" width="120"> </el-table-column>
          <el-table-column prop="totalMoney" label="总金额" width="120"> </el-table-column>
          <el-table-column prop="grossProfit" label="毛利金额" width="120"> </el-table-column>
          <el-table-column prop="createDate" label="制单日期" width="120" :formatter="dateFormat"> </el-table-column>
          <el-table-column prop="creator" label="制单人" width="120"> </el-table-column>
        </el-table>
        <el-row style="height:6%;text-align:center;">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="page.currentPage"
            :page-sizes="[10, 50, 100, 200]"
            :page-size="page.pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="page.totalCount">
          </el-pagination>
        </el-row>
      </el-row>
    </el-main>
    <el-footer>
      <el-row class="e_common d_el_footer">
        <span>总货值</span>
        <el-input v-model="input1" placeholder="0"/>
        <span>费用合计</span>
        <el-input v-model="input2" placeholder="0"/>
        <span>总金额</span>
        <el-input v-model="input3" placeholder="0"/>
        <span>毛利金额</span>
        <el-input v-model="input4" placeholder="0"/>
      </el-row>
    </el-footer>
  </el-container>
</template>
<script>
  import Moment from 'moment'
  import CTopQuery from '@/components/m_common/topQuery'
  import ElFooter from "element-ui/packages/footer/src/main";
  import { queryOrderList,deleteOrder,queryOrderByCondition} from '@/api/modules/order'

  export  default {
    components:{
      ElFooter,
      CTopQuery
    },
    data() {
      return{
        index : "",
        input1:509,
        input2:341,
        input3:189,
        input4:123,
        page:{
          currentPage:1,
          pageSize:10,
          totalCount:0
        },
        orderList:[],
        queryBtn_active : true,
        boxshow : false,
        orderCondition:{},
        options: [{
          value: '选项1',
          label: '现金'
        }, {
          value: '选项2',
          label: '支付宝'
        }, {
          value: '选项3',
          label: '微信'
        }, {
          value: '选项4',
          label: '银联'
        }]
      }
    },
    created(){
      this.queryOrderList();
    },
    methods:{
      // 删除某条数据
      deleteRow:function (index,row) {
        deleteOrder(row.row);
        this.orderList.splice(index,1);
        this.page.totalCount = this.page.totalCount-1;
        this.$message({
          showClose: true,
          message: '删除成功~',
          type: 'success'
        });
      },
      cellDblclick:function(row, column, cell, event){
        const row2 = {};
        row2.row = row;
        this.queryOrderDetail(0,row2);
      },
      // 根据条件查询订单列表
      queryOrderByCondition:function(){
        queryOrderByCondition(this.orderCondition).then(res=>{
          this.togglebox();
          this.orderList = res.data;
          this.page = res.page;
        });
      },
      // 查看订单详情
      queryOrderDetail:function(index,row){
        this.$router.push({name:'orderDetail',query:{orderNumber:row.row.orderNumber}});
      },
      dateFormat:function(row, column, cellValue, index){
        // ("YYYY-MM-DD HH:mm:ss");
        if(cellValue){
          return Moment(cellValue).format("YYYY-MM-DD");
        }else{
          return "";
        }
      },
      toOrderDetail:function(){
        this.$router.push({name:'orderDetail'});
      },
      queryOrderList(){
        queryOrderByCondition(this.orderCondition).then(res=>{
          //this.togglebox();
          this.orderList = res.data;
          this.page = res.page;
        });
        /*queryOrderList().then(res=>{
          this.orderList.length = 0;
          this.orderList = res;
          if(res.page){
            this.page = res.page;
          }
        })*/
      },
      handleSizeChange(){

      },
      handleCurrentChange(){

      },
      // 以下为条件查询框的样式方法
      togglebox:function(){
        this.boxshow = !this.boxshow;
        this.queryBtn_active = !this.queryBtn_active;
      },
      btn_reset:function(){
        this.orderCondition={};
      }
    }

  }
</script>
<style lang="stylus" >
  // 整个页面的背景色等样式
  .e_main{
    background-color rgba(220, 220, 220, 0.51)
    .el-main,.el-footer,.el-header{
      padding 5px 10px
    }
    .el-table__header th{
      color black
      font-size 15px
      font-weight 700
    }
    .el-table__body th{
      padding 0
      height 30px
    }
    .el-table__row .cell{
      line-height 18px
      color gray
    }
    // 订单列表前方操作按钮样式
    .el-table__row{
      a{
        //color #409eff
        font-size 16px;
        margin-right 4px

      }
      a:hover{
        color #409eff
        cursor pointer
      }
    }
  }
  // 底部合计信息条样式
  .d_el_footer{
    line-height: 50px;
    align-items: center;
    padding-left: 30px;
    span{
      margin 0px 12px 0px 50px
    }
    .el-input{
      height 30px
      width 100px
      .el-input__inner{
        height 30px
      }
    }
  }

  // 以下为条件框的样式
  .query_div{
    width 90px
    float: left;
    // 整个大的查询头部DIV
    .query_row{
      // 重置element-ui上的按钮样式
      /*  .el-button:focus, .el-button:hover{
          color black
          border-color gainsboro
          background-color white
        }*/
      // 查询按钮样式
      .q_query_btn{
        height 28px
        width 80px
        line-height 28px
        padding 0px 10px 0px 4px
        /*margin  0px 10px
        border 0px
        border 1px solid gainsboro
        background-color white
        outline none
        font-size 16px
        margin 1px 0px 0px 1px*/
        // 查询按钮上的图标样式
        i{
          display block
          float left
          font-size 22px
          color white
          margin-top -1px
        }
      }

      // 查询图表正常向下样式
      .q_active{
        transform:rotate(90deg);
      }
      // 查询图表向上样式
      .q_inactive{
        transform:rotate(270deg);
      }
    }
    // 可折叠搜索框整体样式
    .box{
      width 250px
      height auto;
      padding 10px
      border 1px solid gray
      overflow hidden
      border-radius 10px
      position absolute
      top 35px
      background-color #fcfcfc
      z-index 5
      // 折叠框内搜索输入框样式
      .el-input__inner{
        height 32px
        margin 5px 0px
        width 230px
      }
      // 按钮样式
      .el-button{
        height 30px
        line-height 30px
        padding 0px 10px
        margin 10px 3px
        background-color #409EFF
        float right
        span{
          color white
        }
      }
      // 文本样式
      span{
        font-size 14px
        color #5170b1
        text-align center
      }
      .el-collapse{
        margin-top 8px
        width: 240px
      }
      .el-collapse-item{
        line-height 40px
      }
      .el-collapse-item__header{
        background-color rgba(180, 188, 204, 0.06)
      }
      .el-collapse-item__header,.el-collapse-item__arrow{
        height 40px
        line-height 40px
      }
      .el-collapse-item__content{
        padding 5px 0px
      }
      .el-date-editor.el-input{
        width 200px
      }
    }
    .q_trans-leave-active,.q_trans-enter-active{
      transition: all .1s ease;
    }
    .q_trans-enter,.q_trans-leave-to{
      transform: translateX(30px);
      opacity: 0;
    }
  }
</style>
