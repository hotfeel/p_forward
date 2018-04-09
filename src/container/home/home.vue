<template>
  <div>
  <el-row>
    <el-col :span="14" class="el-col-advice"><c-advice></c-advice></el-col>
    <el-col :span="10 " class="el-col-caledar"><c-caledar></c-caledar></el-col>
  </el-row>
  <el-row>
    <c-flow></c-flow>
  </el-row>
  <el-row>
    <c-report></c-report>
  </el-row>
  </div>
</template>
<script>
  import CAdvice from './advice'
  import CCaledar from './caledar'
  import CFlow from './flow_status'
  import CReport from './report_forms'

  export default {
    name: 'Home',
    components:{
      CAdvice,
      CCaledar,
      CFlow,
      CReport
    }
  }
</script>
<style scoped lang="stylus">
  .el-col-advice{
    height 320px
    border 1px solid gainsboro
  }
  .el-col-caledar{
    height 320px
    border 1px solid gainsboro
  }
</style>
