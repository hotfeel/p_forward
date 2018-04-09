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
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
  </div>
</template>

<script>
  import CHeader from '@/components/m_header/head'
  import MMeau from '@/components/m_side/meau'
  import CHome from '@/container/home/home'
  import ElRow from "element-ui/packages/row/src/row";


  export default {
   name: 'App',
    components:{
      ElRow,
      CHeader,
      MMeau,
      CHome
    }
  }
</script>

<style scoped lang="stylus">
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
</style>
