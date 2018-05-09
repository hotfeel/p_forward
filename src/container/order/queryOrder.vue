<template>
  <el-container class="e_main">
    <el-header height="50px">
      <el-row class="e_common e_row_header">
        <c-top-query style="float: left"></c-top-query>
        <el-button icon="el-icon-edit" class="btn_common" @click="toOrderDetail">新建</el-button>
        <!--<el-button icon="el-icon-delete" class="btn_common">删除</el-button>-->
      </el-row>
    </el-header>
      <el-main style="height: 100%;">
        <el-row class="e_common" style="padding: 7px 5px 0px 7px">
              <el-table
                :data="tableDate"
                style="width: 100%"
                height="94%"
                stripe
                border>
                <el-table-column
                  fixed
                  type="selection"
                  width="35">
                </el-table-column>
                <el-table-column
                  fixed
                  label="操作"
                  width="90">
                  <template slot-scope="scope">
                    <a class="el-icon-search" title="详情查询" @click="queryOrderDetail(scope.$index, scope)"></a>
                    <a class="el-icon-edit" title="编辑" @click="queryOrderDetail(scope.$index, scope)"></a>
                    <a class="el-icon-delete" title="删除" @click="deleteRow(scope.$index, scope)"></a>
                  </template>
                </el-table-column>

                <el-table-column
                  fixed
                  prop="orderNumber"
                  label="销售订单号"
                  sortable
                  width="150px">
                </el-table-column>
                <el-table-column
                  prop="custNumber"
                  sortable
                  label="客户编号"
                  width="160">
                </el-table-column>
                <el-table-column
                  prop="custShortName"
                  sortable
                  label="客户简称"
                  width="120">
                </el-table-column>
                <el-table-column
                  sortable
                  prop="constractDate"
                  label="合同日期"
                  :formatter="dateFormat"
                  width="170">
                </el-table-column>
                <el-table-column
                  prop="deliveryDate"
                  label="交货日期"
                  :formatter="dateFormat"
                  width="170">
                </el-table-column>
                <el-table-column
                  prop="ownCompany"
                  label="我方公司"
                  width="140">
                </el-table-column>
                <el-table-column
                  prop="currency"
                  label="币种"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="courier"
                  label="业务员"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="paymentWay"
                  label="付款方式"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="totalGoodsValue"
                  label="总货值"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="totalCost"
                  label="费用合计"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="totalMoney"
                  label="总金额"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="grossProfit"
                  label="毛利金额"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="createDate"
                  label="制单日期"
                  width="120"
                  :formatter="dateFormat">
                </el-table-column>
                <el-table-column
                  prop="creator"
                  label="制单人"
                  width="120">
                </el-table-column>
              </el-table>
          <el-row style="height:6%;text-align:center;">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage4"
              :page-sizes="[100, 200, 300, 400]"
              :page-size="100"
              layout="total, sizes, prev, pager, next, jumper"
              :total="400">
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
  import { queryOrderList,deleteOrder} from '@/api/modules/order'

  export  default {
    components:{
      ElFooter,
      CTopQuery
    },
    created(){
      this.queryOrderList();
    },
    methods:{
      // 删除某条数据
      deleteRow:function (index,row) {
        deleteOrder(row.row);
        this.tableDate.splice(index,1);
        this.$message({
          showClose: true,
          message: '删除成功~',
          type: 'success'
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
        queryOrderList().then(res=>{
          this.tableDate.length = 0;
          this.tableDate = res;
        })
      },
      handleSizeChange(){

      },
      handleCurrentChange(){

      }
    },
    data() {
      return{
        index : "",
        input1:509,
        input2:341,
        input3:189,
        input4:123,
        currentPage4:1,
        tableDate:[]
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
</style>
