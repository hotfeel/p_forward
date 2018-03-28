<template>
  <div id="app">
    <c-header></c-header>
    <div class="container">
      <div class="sidebar">
        <m-meau></m-meau>
      </div>

      <router-view/>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>

    </div>

    <!--<img src="./assets/logo.png">-->

  </div>
</template>

<script>
  import CHeader from '@/components/m_header/head'
  import MMeau from '@/components/m_side/meau'
  export default {
   name: 'App',
    components:{
      CHeader,
      MMeau
    }
  }
</script>

<style  scoped lang="stylus">
#app {
  margin-top: 0px;
}
.sidebar{
  float: left;
  background-color: #20252a;
  height: 940px;
}
</style>
