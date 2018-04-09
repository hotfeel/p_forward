<template>
  <div class="c-caledar">
    <el-row  class="e-advice">
      日历提醒
    </el-row>
    <vue-event-calendar :events="demoEvents" @monthChanged="" @dayChanged=""></vue-event-calendar>
  </div>

</template>
<script>
  export default {
    data(){
      return {
        demoEvents:[{
          date : '2018/04/07',
          title : '会议',
          desc : '2018年阿里年度总结会'
        },{
          date : '2018/04/06',
          title : '生日',
          desc : '王小明生日提醒'
        }],
      }
    },methods : {
      monthChange (month) {
        console.log(month)
      },
      dayChange (day) {
        console.log(day)
      }
    }
  }
</script>
<style lang="stylus">
  .__vev_calendar-wrapper .cal-wrapper{
    padding 15px 20px 0px 15px
  }
  .__vev_calendar-wrapper .cal-wrapper .date-num{
    line-height 30px
  }
  .cal-wrapper{
    font-size 12px
  }
  .cal-header{
    height 30px
  }
  .__vev_calendar-wrapper .cal-wrapper .cal-header>div{
    padding 5px
  }
  .__vev_calendar-wrapper .events-wrapper .date{
      min-width 140px
      font-size 17px
      padding 2px
  }
  .__vev_calendar-wrapper .events-wrapper{
    padding 20px 5px 0px 5px
  }
  .__vev_calendar-wrapper .cal-wrapper .cal-body .dates .item .is-event{
    width 30px
    height 30px
    margin-left -15px
    margin-top -15px


  }
</style>
