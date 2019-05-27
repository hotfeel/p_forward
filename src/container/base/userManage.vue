<template>
  <div class="div_userManage">
    <el-table
      :data="userTableData"
      highlight-current-row
      border
      @row-click="userRowClick"
      style="width: 100%;">
      <el-table-column prop="name" label="姓名" width="80"></el-table-column>
      <el-table-column prop="gender" label="性别" :formatter="genderFormat" width="80"></el-table-column>
      <el-table-column prop="mobile" label="手机号" width="120"></el-table-column>
      <el-table-column prop="userName" label="用户名" width="120"></el-table-column>
      <el-table-column prop="department.name" label="所属部门" width="160"></el-table-column>
      <el-table-column prop="parentUser.name" label="所属角色" width="160"></el-table-column>
      <el-table-column prop="createDate" label="创建日期" :formatter="dateFormat" width="180"></el-table-column>
      <el-table-column prop="createUser" label="创建人"></el-table-column>
    </el-table>
    <div class="div_roleManage" flex="{cross:stretch}">
      <div style="width: 350px;">
        <el-table
          :data="roleTableData"
          highlight-current-row
          border>
          <el-table-column type="selection" width="30"> </el-table-column>
          <el-table-column
            label="角色信息"
            width="190">
            <template slot-scope="scope">
              <!--<span>{{scope.row.name}}</span>-->
              <el-input v-model="scope.row.name"/>
            </template>
          </el-table-column>
          <el-table-column align="right"  width="120">
            <template slot="header" slot-scope="scope">
              <el-button icon="el-icon-plus" type="primary" circle/>
              <el-button icon="el-icon-check" type="primary" circle @click="saveRole"/>
            </template>
            <template slot-scope="scope">
              <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">编辑</el-button>
              <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">移除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div>
        <div class="div_meau_title">
          <span>权限信息</span>
        </div>
        <el-tree
          :data="meauData"
          show-checkbox
          node-key="id"
          :default-expand-all="defaultExpandAll"
          :default-expanded-keys="[2, 3]"
          :default-checked-keys="[5]"
          :props="meauProps">
        </el-tree>
      </div>
    </div>
  </div>
</template>
<script>

import {queryByCondition,queryAllRoles} from '@/api/modules/user'
import {queryAllMeau} from '@/api/modules/base'
import RoleManage from '@/container/base/roleManage'
import Moment from 'moment'

export default {
  components:{
    RoleManage
  },
  data(){
    return {
      user:{},
      role:{},
      userTableData:[],
      defaultExpandAll:true,
      roleTableData:[],
      meauData: [],
      meauProps: {
        children: 'meauList',
        label: 'name'
      }
    }
  },
  created(){
    queryByCondition({}).then(res=>{
      this.userTableData = res.data.data.list;
    }),
    queryAllRoles().then(res=>{
      this.roleTableData = res;
    });
    queryAllMeau().then(res=>{
      this.meauData = res.data;
    })
  },
  methods:{
    // 时间日期格式转换
    dateFormat(row, column, cellValue, index){
      // ("YYYY-MM-DD HH:mm:ss");
      if(cellValue){
        return Moment(cellValue).format("YYYY-MM-DD");
      }else{
        return "";
      }
    },
    // 性别格式转换
    genderFormat(row, column, cellValue, index){
      if(cellValue == 1){
        return '男';
      }else{
        return "女";
      }
    },
    // 用户信息单行点击事件
    userRowClick(row, column, event){
      console.log("row",row);
    },
    // 保存用户角色信息
    saveRole(){

    }
  }
}
</script>
<style scoped lang="stylus">
  .div_userManage{
    padding 10px 10px 0px 10px
    .el-tree{
      margin-left 5px;
      border 1px solid #eceff6
    }
  }
  .div_roleManage{
    margin-top 5px;
    display flex
    .el-button{
      padding 4px
    }
    .div_meau_title{
      height: 50px;
      background-color: #f0f0f0
      width 400px;
      margin-left 5px;
      span{
        color #505050
        line-height 49px;
        font-size 14px;
        font-family "Microsoft YaHei"
        margin-left 10px;
        font-weight bold
      }
    }
  }
</style>
