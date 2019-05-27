<template>
  <div class="div_meau_manage">
    <el-table
      :data="meauList"
      height="100%"
      border
      @row-dblclick="rowDblclick"
      style="width: 100%">
      <el-table-column
        type="index"
        width="40">
      </el-table-column>
      <el-table-column
        prop="name"
        label="名称"
        width="120">
      </el-table-column>
      <el-table-column
        prop="code"
        label="编码"
        width="200">
      </el-table-column>
      <el-table-column
        prop="level"
        label="级别"
        width="60">
      </el-table-column>
      <el-table-column
        prop="url"
        label="URL地址"
        width="250">
      </el-table-column>
      <el-table-column
        prop="componentUrl"
        label="组件地址"
        width="120">
      </el-table-column>
      <el-table-column
        prop="iconName"
        label="图标样式"
        width="120">
        <template slot-scope="scope">
          <li :class="scope.row.iconName"/>
        </template>
      </el-table-column>
      <el-table-column
        prop="type"
        label="类别"
        width="120">
      </el-table-column>
      <el-table-column
        prop="parentCode"
        label="父级编码"
        width="120">
      </el-table-column>
      <el-table-column
        prop="isAuth"
        label="是否权限"
        width="120">
      </el-table-column>
      <el-table-column
        prop="createDate"
        :formatter="dateFormat"
        label="创建日期"
        width="160">
      </el-table-column>
      <el-table-column
        prop="modifyDate"
        label="修改日期"
        width="160"
        :formatter="dateFormat">
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
    <el-dialog
      title="菜单信息编辑"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <div>
        <el-row>
          <el-col :span="4">姓名:</el-col>
          <el-col :span="7"><el-input /></el-col>
          <el-col :span="1">&nbsp;</el-col>
          <el-col :span="4">编码:</el-col>
          <el-col :span="7"><el-input /></el-col>
        </el-row>

      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>

  import {queryMeauByCondition} from '@/api/modules/base'
  import Moment from 'moment'

  export default {
    data(){
      return {
        dialogVisible:false,
        meauList:[]
      }
    },
    created(){
     this.queryMeauByCondition();
    },
    methods:{
      handleClick(row){

      },
      handleClose(){

      },
      // 表格内容双击事件
      rowDblclick(row, column, event){
        this.dialogVisible = true;
      },
      queryMeauByCondition(){
        queryMeauByCondition("{}").then(res=>{
          this.meauList = res.data;
        })
      },
      // 时间日期格式转换
      dateFormat:function(row, column, cellValue, index){
        // ("YYYY-MM-DD HH:mm:ss");
        if(cellValue){
          return Moment(cellValue).format("YYYY-MM-DD HH:mm:ss");
        }else{
          return "";
        }
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .div_meau_manage{
    height 100%;
  }
</style>
