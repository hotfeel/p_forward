<template>
  <div>
    <el-row  class="e-advice">
      通知公告
    </el-row>
    <el-tabs v-model="activeName"   @tab-click="handleClick">

      <el-tab-pane label="审批" name="first">
        <el-row class="ad_row">
          <el-col class="iconfont icon-tongzhi el-col1" :span="17">
            <span> 公告：国务院调整证券交易印花税中央与地方分享比例的通知</span>
          </el-col>
          <el-col class = "el-col2" :span="7">
            <span>2018-03-29 18:36</span>
          </el-col>
        </el-row>
        <el-row class="ad_row">
          <el-col class="iconfont icon-tongzhi el-col1" :span="17">
            <span> 公告：中宣部将召开部分省区市宣传部长座谈会</span>
          </el-col>
          <el-col class = "el-col2" :span="7">
            <span>2018-03-27 13:41</span>
          </el-col>
        </el-row>
        <el-row class="ad_row">
          <el-col class="iconfont icon-huiyikaihuitaolun el-col1" :span="17">
            <span> 会议：2018年阿里年度总结会-马云</span>
          </el-col>
          <el-col class = "el-col2" :span="7">
            <span>2018-03-24 05:54</span>
          </el-col>
        </el-row>
        <el-row class="ad_row">
          <el-col class="iconfont icon-wendang el-col1" :span="17">
            <span> 资料：一条数据的HBase之旅，简明HBase入门教程-开篇</span>
          </el-col>
          <el-col class = "el-col2" :span="7">
            <span>2018-03-21 03:41</span>
          </el-col>
        </el-row>
        <el-row class="ad_row">
          <el-col class="iconfont icon-wendang el-col1" :span="17">
            <span> 资料：200 行 Python 代码实现简单图片人像识别换脸</span>
          </el-col>
          <el-col class = "el-col2" :span="7">
            <span>2018-03-21 03:41</span>
          </el-col>
        </el-row>
        <el-row class="ad_row">
          <el-col class="iconfont icon-wendang el-col1" :span="17">
            <span> 资料：ICEGrid部署和测试</span>
          </el-col>
          <el-col class = "el-col2" :span="7">
            <span>2018-03-21 03:41</span>
          </el-col>
        </el-row>
      </el-tab-pane>

      <el-tab-pane label="警示" name="second">
        <el-row class="ad_row">
          <el-col class="iconfont icon-tongzhi el-col1" :span="17">
            <span> 公告：国务院关于调整证券交易印花税中央与地方分享比例的通知</span>
          </el-col>
          <el-col class = "el-col2" :span="7">
            <span>2018-03-29 18:36</span>
          </el-col>
        </el-row>
      </el-tab-pane>

      <el-tab-pane label="公告" name="third">
        <el-row class="ad_row">
          <el-col class="iconfont icon-tongzhi el-col1" :span="17">
            <span> 公告：国务院关于调整证券交易印花税中央与地方分享比例的通知</span>
          </el-col>
          <el-col class = "el-col2" :span="7">
            <span>2018-03-29 18:36</span>
          </el-col>
        </el-row>
        <el-row class="ad_row">
          <el-col class="iconfont icon-tongzhi el-col1" :span="17">
            <span> 公告：中宣部将召开部分省区市宣传部长座谈会</span>
          </el-col>
          <el-col class = "el-col2" :span="7">
            <span>2018-03-27 13:41</span>
          </el-col>
        </el-row>
      </el-tab-pane>


      <el-tab-pane label="会议" name="four">
        <el-row class="ad_row">
          <el-col class="iconfont icon-wendang el-col1" :span="17">
            <span> 资料：一条数据的HBase之旅，简明HBase入门教程-开篇</span>
          </el-col>
          <el-col class = "el-col2" :span="7">
            <span>2018-03-21 03:41</span>
          </el-col>
        </el-row>
        <el-row class="ad_row">
          <el-col class="iconfont icon-wendang el-col1" :span="17">
            <span> 资料：200 行 Python 代码实现简单图片人像识别换脸</span>
          </el-col>
          <el-col class = "el-col2" :span="7">
            <span>2018-03-21 03:41</span>
          </el-col>
        </el-row>
        <el-row class="ad_row">
          <el-col class="iconfont icon-wendang el-col1" :span="17">
            <span> 资料：ICEGrid部署和测试</span>
          </el-col>
          <el-col class = "el-col2" :span="7">
            <span>2018-03-21 03:41</span>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  import ElRow from "element-ui/packages/row/src/row";

  export default {
    components: {ElRow},
    data(){
      return {
        activeIndex: '1',
        activeName: 'first',
        date : ""
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>
<style lang="stylus" >
  .e-advice{
    font-size 18px
    padding-left 20px
    font-family "微软雅黑"
    border-bottom solid gainsboro 1px
    font-weight bold
    display flex
    align-items center
    height 40px
  }
  .el-tabs__active-bar{
    padding:0 12px 0px 12px !important;
  }
  .el-tabs__nav{
    padding:0 13px !important;
  }
  .ad_row{
    margin 6px 20px 0px 15px
  }
  .ad_row span:hover{
    border-bottom #048CFF solid 1px
    color #048CFF
    cursor pointer
  }
  .el-col1{
    font-size 15px
    margin 2px 0px
  }
  .el-col2{
    min-width 110px
    font-size 80%
    display flex
    justify-content flex-end
  }
</style>
