<template>
  <el-container class="div_index" style="height: 100%;">
    <el-header>
      <m-head/>
    </el-header>
    <el-container>
      <el-aside>
        <m-meau/>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
  import MHead from '@/components/m_header/head'
  import MMeau from '@/components/m_side/meau2'

  export default {
    components:{
      MHead,
      MMeau
    },
    data() {
      return {
        isCollapse: true
      };
    }
  }
</script>
<style lang="stylus" scoped>
  .div_index{
    .el-header{
      padding 0px
      height 40px !important
    }
    .el-container{
      height 100%
    }
    .el-aside{
      width auto !important
    }
    .el-main{
      padding 0px
    }
  }
</style>
