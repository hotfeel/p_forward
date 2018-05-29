<template>
  <el-container class="e_main">
    <el-header height="50px">
      <el-row class="e_common e_row_header">
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
                <el-input v-model="customerCondition.conditionKey" placeholder="请输入关键字" class="inpt_key"></el-input>
                <span>(客户编号/客户简称/客户名称)</span>
                <el-collapse>
                  <el-collapse-item title="地址"><el-input v-model="customerCondition.address" placeholder="请输入内容"></el-input> </el-collapse-item>
                  <el-collapse-item title="城市"><el-input v-model="customerCondition.city" placeholder="请输入内容"></el-input> </el-collapse-item>
                  <el-collapse-item title="客户来源"><el-input v-model="customerCondition.source" placeholder="请输入内容"></el-input> </el-collapse-item>
                  <el-collapse-item title="合作等级"><el-input v-model="customerCondition.corporateLevel" placeholder="请输入内容"></el-input> </el-collapse-item>
                  <el-collapse-item title="业务员"><el-input v-model="customerCondition.salesman" placeholder="请输入内容"></el-input> </el-collapse-item>
                  <el-collapse-item title="经营业务"><el-input v-model="customerCondition.business" placeholder="请输入内容"></el-input> </el-collapse-item>
                  <el-collapse-item title="建档时间">
                    <span>起：</span> <el-date-picker v-model="customerCondition.startCreateDate" type="date" placeholder="选择日期(00:00:00)"> </el-date-picker>
                    <span>止：</span><el-date-picker v-model="customerCondition.endCreateDate" type="date" placeholder="选择日期(23:59:59)"> </el-date-picker>
                  </el-collapse-item>
                </el-collapse>
              </el-row>
              <el-row class="box_bottom">
                <el-button @click="queryCustomerByCondition">查询</el-button>
                <el-button @click="btn_reset">重置</el-button>
              </el-row>
            </div>
          </transition>
        </div>
        <el-button icon="el-icon-edit" class="btn_common" @click="toCustomerDetail">新建</el-button>
        <!--<el-button icon="el-icon-delete" class="btn_common">删除</el-button>-->
      </el-row>
    </el-header>
    <el-main style="height: 100%;">
      <el-row class="e_common" style="padding: 7px 5px 0px 7px">
        <el-table :data="customerList" style="width: 100%"  height="94%" stripe bcustomer @cell-dblclick="cellDblclick">
          <el-table-column fixed type="selection" width="35"></el-table-column>
          <el-table-column fixed label="操作" width="90">
            <template slot-scope="scope">
              <a class="el-icon-search" title="详情查询" @click="queryCustomerDetail(scope.$index, scope)"></a>
              <a class="el-icon-edit" title="编辑" @click="queryCustomerDetail(scope.$index, scope)"></a>
              <a class="el-icon-delete" title="删除" @click="deleteRow(scope.$index, scope)"></a>
            </template>
          </el-table-column>
          <el-table-column fixed prop="code" label="客户编号" sortable width="150px"> </el-table-column>
          <el-table-column prop="shortName" sortable label="客户简称" width="160"> </el-table-column>
          <el-table-column prop="name" sortable label="客户名称" width="120"> </el-table-column>
          <el-table-column prop="county" label="区域" width="120"> </el-table-column>
          <el-table-column prop="province" label="省份" width="120"> </el-table-column>
          <el-table-column prop="source" label="客户来源" width="120"> </el-table-column>
          <el-table-column prop="corporateLevel" sortable label="合作等级" width="120"> </el-table-column>
          <el-table-column prop="salesman" label="业务员" width="120"> </el-table-column>
          <el-table-column prop="paymentWay" label="付款方式" width="120"> </el-table-column>
          <el-table-column prop="business" label="经营业务" width="120"> </el-table-column>
          <el-table-column prop="ticketInfo" label="开票信息" width="120"> </el-table-column>
          <el-table-column prop="modifyDate" label="修改时间" :formatter="dateFormat" width="120"> </el-table-column>
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
  </el-container>
</template>
<script>
  import Moment from 'moment'
  import CTopQuery from '@/components/m_common/topQuery'
  import ElFooter from "element-ui/packages/footer/src/main";
  import { queryCustomerByCondition} from '@/api/modules/customer'

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
        customerList:[],
        queryBtn_active : true,
        boxshow : false,
        customerCondition:{},
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
      this.queryCustomerByCondition();
    },
    methods:{
      // 删除某条数据
      deleteRow:function (index,row) {
        deleteOrder(row.row);
        this.customerList.splice(index,1);
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
      // 根据条件查询客户列表
      queryCustomerByCondition:function(){
        queryCustomerByCondition(this.customerCondition).then(res=>{
          this.boxshow = false;
          this.queryBtn_active = false;
          this.customerList = res.data;
          this.page = res.page;
        });
      },
      // 查看客户详情
      queryCustomerDetail:function(index,row){
        this.$router.push({name:'CustomerDetail',query:{customerCode:row.row.code}});
      },
      dateFormat:function(row, column, cellValue, index){
        // ("YYYY-MM-DD HH:mm:ss");
        if(cellValue){
          return Moment(cellValue).format("YYYY-MM-DD");
        }else{
          return "";
        }
      },
      toCustomerDetail:function(){
        this.$router.push({name:'CustomerDetail'});
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
        this.customerCondition={};
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
    // 客户列表前方操作按钮样式
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
