<template>
  <div class="head">
    <div class="head_left">
      <span>【 {{date}} 】</span>
      <span>上海-运输智能化部-罗典</span>
    </div>
    <div class="head_right">
      <ul>
        <li class="iconfont icon-tuichu"> 退出</li>
      </ul>
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
    height 30px
    background-color #5170b1
    justify-content space-between
    display flex
    color white
    font-size 14px
    font-family "微软雅黑"
  }
  .head_left{
    display flex
    height 30px
    align-items center
    text-indent 20px
    justify-content space-between
  }
  .head_right{
    height 30px
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
