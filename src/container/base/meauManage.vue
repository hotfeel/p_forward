<template>
  <div class="div_meau_manage">
    <el-table
      :data="meauList"
      height="100%"
      border
      style="width: 100%">
      <el-table-column
        type="index"
        width="50">
      </el-table-column>
      <el-table-column
        prop="name"
        label="名称"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="编码"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="级别"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="URL地址"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="组件地址"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="图标样式"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="类别"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="父级编码"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="是否权限"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="菜单排序"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="创建日期"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="修改日期"
        width="120">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

  import {queryMeauByCondition} from '@/api/modules/base'

  export default {
    data(){
      return {
        meauList:[]
      }
    },
    created(){
     this.queryMeauByCondition();
    },
    methods:{
      handleClick(row){

      },
      queryMeauByCondition(){
        queryMeauByCondition("{}").then(res=>{
          this.meauList = res.data;
        })
      }
    }
  }
</script>
<style lang="stylus" >
  .div_meau_manage{
    height 100%;
    .el-table thead{
      color #444444;
      font-weight bold
    }
  }
</style>
