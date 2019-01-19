<template>
  <div class="head">
    <div class="head_left">
      <span>【 {{date}} 】</span>
      <span>罗典的系统</span>
    </div>
    <div class="head_right">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-submenu index="2">
          <template slot="title" style="height:40px;">
            <svg class="icon" style="font-size: 30px;" aria-hidden="true">
            <use xlink:href="#icon-boy"></use>
          </svg>
          </template>
          <el-menu-item index="2-1">个人资料</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </div>

</template>
<script>
  import Moment from 'moment'

  export default {
    data(){
      return {
        date : ""
      }
    },
    created(){
      this.date = Moment().format('YYYY年M月DD日   dddd')
    },
    methods: {
      logoutEvent () {
        console.log('退出')
      }
    }
  }
</script>
<style scoped lang="stylus" >
  .head{
    height 40px
    background-color #225184
    justify-content space-between
    display flex
    color white
    font-size 14px
    font-family "微软雅黑"
  }
  .el-submenu{
    background-color #225184
  }
  .el-menu--horizontal>>>.el-submenu .el-submenu__title{
    height 40px
    line-height 40px
  }
  .el-menu--horizontal>>>.el-submenu .el-submenu__title:hover{
    background-color #3673b1
  }
    .el-menu-demo{
      border none
    }
  .head_left{
    display flex
    height 40px
    align-items center
    text-indent 20px
    justify-content space-between
    color rgba(54,115,177,0.26)
  }
  .head_right{
    height 40px
    display flex
    align-items center
    color white
    font-family "微软雅黑"
    margin-right 20px
    cursor pointer
  }
  .head_right li{
    font-size 15px
  }
  .el-badge__content.is-fixed{
      width 10px
    }

</style>
