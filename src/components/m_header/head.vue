<template>
  <div class="head">
    <div class="head_left">
      <span>【 {{date}} 】</span>
      <span>罗典的系统</span>
    </div>
    <div class="head_right" id="luodian">
      <el-input placeholder="请输入内容" v-model="topInput" class="input_topInput">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <el-badge :value="12">
        <el-button size="small" icon="el-icon-bell" class="btn-bell"></el-button>
      </el-badge>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-submenu index="2" popper-class="head-class">
          <template slot="title">
            <svg class="icon" style="font-size: 30px;" aria-hidden="true">
              <use xlink:href="#icon-boy"></use>
            </svg>
          </template>
          <el-menu-item index="2-1" style="border-bottom: #e7eaed solid 1px;padding-bottom: 10px;">个人资料</el-menu-item>
          <el-menu-item index="2-2" >我的任务</el-menu-item>
          <el-menu-item index="2-2" >关注</el-menu-item>
          <el-menu-item index="2-2" >收藏</el-menu-item>
          <el-menu-item index="2-3" style="border-bottom: #e7eaed solid 1px;padding-bottom: 10px;">设置</el-menu-item>
          <el-menu-item index="2-4">注销</el-menu-item>
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
        date : "",
        activeIndex:'1',
        topInput:''
      }
    },
    created(){
      this.date = Moment().format('YYYY年M月DD日   dddd')
    },
    methods: {
      logoutEvent () {
        console.log('退出')
      },
      handleSelect(){

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
    .el-menu-demo{
      border 0px
    }
  .el-submenu{
    background-color #225184
  }
  .el-menu--horizontal .el-menu .el-menu-item{
    color dimgray
    //background-color #f5f5f5
  }
  .el-menu--horizontal>>>.el-submenu .el-submenu__title{
    height 40px
    line-height 40px
    width 80px
  }
  .el-menu--horizontal>>>.el-submenu.is-active .el-submenu__title{
    border-bottom none
  }
  .el-menu--horizontal>>>.el-submenu .el-submenu__title:hover{
    background-color #3673b1;
  }

  .head_left{
    display flex
    height 40px
    align-items center
    text-indent 20px
    justify-content space-between
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
  .btn-bell{
    background-color #225184
    border none
    color white
    font-size 18px
    padding 9px 19px
  }
  .btn-bell:hover{
    background-color #3673b1;
  }
  .el-badge >>> .el-badge__content.is-fixed{
    top 11px
    right 24px
  }
  .el-badge >>> .el-badge__content{
    padding 0px 1px
    line-height 14px
    height 14px
  }
    .el-input-group>>>.el-input__inner{
      height 30px
      line-height 30px
      border none
      background-color gray
    }


</style>
<style lang="stylus">
  .head-class{
    .el-menu--popup{
      min-width 130px
      padding 0px
    }
    .el-menu-item{
      height 30px !important
      line-height 30px !important
    }
  }

</style>
