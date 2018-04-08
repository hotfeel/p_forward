<template>
  <div id="app">
      <el-container>
        <el-header style="height: 30px;">
          <c-header></c-header>
        </el-header>
        <el-container>
          <el-aside width="200px">
            <m-meau></m-meau>
          </el-aside>
          <el-main>
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
          </el-main>
        </el-container>
      </el-container>
  </div>
</template>

<script>
  import CHeader from '@/components/m_header/head'
  import MMeau from '@/components/m_side/meau'
  import CAdvice from '@/container/home/advice'
  import CCaledar from '@/container/home/caledar'
  import CFlow from '@/container/home/flow_status'
  import CReport from '@/container/home/report_forms'
  import ElRow from "element-ui/packages/row/src/row";


  export default {
   name: 'App',
    components:{
      ElRow,
      CHeader,
      MMeau,
      CAdvice,
      CCaledar,
      CFlow,
      CReport
    }
  }
</script>

<style  scoped lang="stylus">
#app {
  margin-top: 0px;
  display block
}
.el-header{
  padding 0px 0px 0px 0px
}
.el-aside{
  background-color rgb(84, 92, 100)
  height 1470px
}
.el-main{
  padding 0px 0px 0px 0px
}
.el-col-advice{
  height 320px
  border 1px solid gainsboro
}
.el-col-caledar{
  height 320px
  border 1px solid gainsboro
}
</style>
