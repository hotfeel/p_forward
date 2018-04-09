<template>
  <div>
    <div class="demo-input-suffix">
      <label>部门名称</label>
      <el-input
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        v-model="input21">
      </el-input>
    </div>
    <el-row class="condition_div">
      <div class="demo-input-suffix">
        <label>部门名称</label>
        <el-input
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          v-model="input21">
        </el-input>
      </div>
    </el-row>
  </div>
</template>
<script>
  export default {

  }
</script>
<style lang="stylus" >
  .condition_div{
    height 130px
    border 1px solid gainsboro
    margin 10px 10px 10px 10px
    border-radius 15px
    padding 8px
  }
  .el-input__inner{
    width 150px
    float left
    }
  .cccc{
    vertical-align: baseline
  }
</style>
