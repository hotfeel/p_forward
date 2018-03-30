<template>
  <el-row class="tac">
    <el-col :span="12">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>导航一</span>
          </template>
          <el-menu-item index="1-1">
            <i class="el-icon-arrow-right"></i>
            <span slot="title">菜单一</span>
          </el-menu-item>
          <el-menu-item index="1-2">
            <i class="el-icon-arrow-right"></i>
            <span slot="title">菜单二</span>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-goods"/>
            <span>导航二</span>
          </template>
          <el-menu-item index="2-1">
            <i class="el-icon-arrow-right"/>
            <span>菜单一</span>
          </el-menu-item>
          <el-menu-item index="2-2">
            <i class="el-icon-arrow-right"/>
            <span>菜单二</span>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>
<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style scoped lang="stylus" >
  .el-menu{
    border-right : solid 0px #171111;
    color: white;
    background-color: black;
    min-width: 200px;
  }

</style>
