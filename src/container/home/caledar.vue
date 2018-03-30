<template>
  <vue-event-calendar :events="demoEvents" @monthChanged="" @dayChanged=""></vue-event-calendar>
</template>
<script>
  export default {
    data(){
      return {
        demoEvents:[{
          date : '2016/12/15',
          title : 'eat',
          desc : 'longlonglong description'
        },{
          date : '2016/11/12',
          title : ''
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
<style lang="stylus" >
  .__vev_calendar-wrapper .cal-wrapper{
    padding 10px 40px 0px 40px
  }
</style>
