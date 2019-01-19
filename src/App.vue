<template>
  <div id="app">
      <el-container>
        <el-header style="height: 40px;">
          <c-header></c-header>
        </el-header>
        <el-container>
          <el-aside style="width: auto">
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
  import MMeau from '@/components/m_side/meau2'
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
  height 100%
}
.el-header{
  padding 0px 0px 0px 0px
}
.el-aside{
  background-color #5170b1
  height 100%
}
.el-container{
  height 100%
}
.el-main{
  padding 0px 0px 0px 0px
}
</style>
