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
              <el-col :span="12" class="el-col-advice"><c-advice></c-advice></el-col>
              <el-col :span="12"><div></div></el-col>
            </el-row>
            <el-row>
              <el-col :span="12"><div></div></el-col>
              <el-col :span="12"><div></div></el-col>
            </el-row>
          </el-main>
        </el-container>
      </el-container>
    <!--<img src="./assets/logo.png">-->

  </div>
</template>

<script>
  import CHeader from '@/components/m_header/head'
  import MMeau from '@/components/m_side/meau'
  import CAdvice from '@/container/home/advice'

  export default {
   name: 'App',
    components:{
      CHeader,
      MMeau,
      CAdvice
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
  height 800px
}
.el-main{
  padding 0px 0px 0px 0px
}
.el-col-advice{
  height 400px
  border 1px solid gainsboro
}

</style>
