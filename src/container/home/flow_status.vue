<template>
  <div>
    <el-row class="flow_title">我的工作流</el-row>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="date"
        label="提交日期"
        width="110">
      </el-table-column>
      <el-table-column
        prop="name"
        label="工作流名称"
        width="110">
      </el-table-column>
      <el-table-column
        prop="name"
        label="当前审批人"
        width="110">
      </el-table-column>
      <el-table-column
        prop="name"
        label="当前审批人"
        width="110">
      </el-table-column>
      <el-table-column
        prop="name"
        label="当前审批人"
        width="110">
      </el-table-column>
      <el-table-column
        label="工作流状态">
        <template slot-scope="scope">
        <el-steps :active="scope.row.status" simple>
          <el-step title="步骤 1" ></el-step>
          <el-step title="步骤 2" ></el-step>
          <el-step title="步骤 3" ></el-step>
          <el-step title="步骤 4" ></el-step>
          <el-step title="步骤 5" ></el-step>
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
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          status: 1
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          status: 2
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          status: 3
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          status: 1
        }],
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
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
