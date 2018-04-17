<template>
  <div>
    <el-row class="flow_title">订单执行进程</el-row>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="orderNum"
        label="订单编号"
        width="110">
      </el-table-column>
      <el-table-column
        prop="custName"
        label="客户简称"
        width="110">
      </el-table-column>
      <el-table-column
        prop="orderDate"
        label="订单日期"
        width="110">
      </el-table-column>
      <el-table-column
        prop="deliveryDate"
        label="交货日期"
        width="110">
      </el-table-column>
      <el-table-column
        prop="salesMan"
        label="业务员"
        width="110">
      </el-table-column>
      <el-table-column
        label="当前状态">
        <template slot-scope="scope">
        <el-steps :active="scope.row.status" simple>
          <el-step title="报价" ></el-step>
          <el-step title="订单" ></el-step>
          <el-step title="采购" ></el-step>
          <el-step title="出货" ></el-step>
          <el-step title="结算" ></el-step>
        </el-steps>
        </template>
      </el-table-column>
    </el-table>
    <div class="block" style="text-align: center">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage3"
        :page-size="100"
        layout="prev, pager, next, jumper"
        :total="200">
      </el-pagination>
    </div>
  </div>
</template>
<script>
  import ElRow from "element-ui/packages/row/src/row";

  export default {
    components: {ElRow},
    data(){
      return {
        tableData: [{
          orderNum: 'A201801189',
          custName: '王小虎',
          orderDate: '2018-01-18',
          deliveryDate: '2018-01-20',
          salesMan:'小李',
          status: 2
        }, {
          orderNum: 'A201801141',
          custName: '白雪',
          orderDate: '2018-01-14',
          deliveryDate: '2018-01-16',
          salesMan:'小王',
          approval:'赵倩',
          status: 1
        }, {
          orderNum: 'B201803157',
          custName: '刘子千',
          orderDate: '2018-03-15',
          deliveryDate: '2018-03-28',
          salesMan:'游天明',
          status: 4
        }, {
          orderNum: 'B201802019',
          custName: '白兰度',
          orderDate: '2018-02-19',
          deliveryDate: '2018-03-12',
          salesMan:'焦良艮',
          status: 3
        }],
        currentPage3: 1
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
  }
</script>
<style lang="stylus">
 .flow_title{
     font-size 18px
     padding-left 20px
     font-family "微软雅黑"
     font-weight bold
     display flex
     align-items center
     height 40px
 }
 .el-steps--simple{
   padding 1px 10px 0px 10px
 }
 .el-step.is-simple .el-step__head{
   padding 10px 10px 0px 0px
 }
 .el-table td, .el-table th{
   padding 5px 0px
 }
</style>
