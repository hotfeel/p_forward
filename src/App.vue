<template>
  <div id="app">
    <router-view/>
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
</style>
