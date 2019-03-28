<template>
  <el-container>
    <el-main>
      <el-menu default-active="1-4-1" class="el-menu-vertical-demo" :unique-opened="true"
               @open="handleOpen" @close="handleClose" :collapse="isCollapse"  :router="true">
        <el-menu-item index="/aaa">
          <i class="iconfont icon-shouye"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </template>
          <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="/userManage">用户详情</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </el-main>
    <el-footer>
      <div class="span_class" @click="btn_openPanel">
        <a class="iconfont icon-gengduo" style="float:right" v-bind:class="[isCollapse ? 'collapse_active':'collapse_inactive']"  title="收缩侧边栏" />
      </div>
    </el-footer>
  </el-container>
</template>

<script>

  import {queryAllMeau} from '@/api/modules/base'

  export default {
    data() {
      return {
        isCollapse: true
      };
    },
    created:function(){
      /*queryAllMeau().then(res=>{
        console.log("queryAllMeau",res)
      });*/
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      btn_openPanel:function() {
        this.isCollapse=!this.isCollapse
      }
    }
  }
</script>

<style scoped lang="stylus">
  .iconfont {
      margin-right: 5px;
      width: 24px;
      text-align: center;
      font-size: 18px;
      vertical-align: middle;
      padding-left 5px
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-container{
    border-right 0.5px #ccc solid
  }

  .el-menu{
    background-color #f5f5f5
    border-right 0px
  }
  .el-footer{
    padding 0px 0px 0px 0px
    height 35px !important
    background-color #f5f5f5
    border-top 0.7px solid #ccc
    //background-color #dedede;
  }
  .el-main{
    background-color #f5f5f5
    padding 0px
  }
  .span_class{
    color gray
    text-align: center;
    line-height: 34px;
    width 64px
    display block
    font-size 18px
    float right
    a{
      display block
      margin-top 0.5px
    }
  }
  .span_class:hover{
    cursor:pointer
  }
  // 查询图表正常向下样式
  .collapse_active{
    transform rotate(0deg)
  }
  // 查询图表向上样式
  .collapse_inactive{
    transform rotate(180deg)
  }
</style>
