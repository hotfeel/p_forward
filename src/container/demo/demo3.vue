<template>
  <el-row>
    <el-button @click="queryOrderList">点击我</el-button>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="custNumber"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="custShortName"
        label="地址">
      </el-table-column>
    </el-table>
  </el-row>
</template>
<script>

  import { queryOrderList } from '@/api/modules/order'

  export default {
    data(){
      return {
        tableData:[]
      }
    },
    created(){
      this.queryOrderList();
    },
    methods:{
      queryOrderList(){
        queryOrderList().then(res=>{
          this.tableData.length = 0;
          this.tableData = res;
        })
      }
    }
  }
</script>
