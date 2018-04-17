<template>
  <div>
    <el-row  class="e-advice">
      通知公告
    </el-row>
    <el-tabs v-model="activeName"   @tab-click="handleClick">

      <el-tab-pane label="审批" name="first">
        <el-row class="ad_row">
          <el-col class="iconfont icon-shengpi el-col1" :span="12">
            <span> 经理审批：请假单：Q20180001</span>
          </el-col>
          <el-col class="el-col1" :span="5">
            <span>递交者：John</span>
          </el-col>
          <el-col class = "el-col2" :span="7">
            <span>2018-04-02 14:25</span>
          </el-col>
        </el-row>
        <el-row class="ad_row">
          <el-col class="iconfont icon-shengpi el-col1" :span="12">
            <span> 经理审批：销售订单：S1804021</span>
          </el-col>
          <el-col class="el-col1" :span="5">
            <span>递交者：George</span>
          </el-col>
          <el-col class = "el-col2" :span="7">
            <span>2018-03-29 18:36</span>
          </el-col>
        </el-row>
        <el-row class="ad_row">
          <el-col class="iconfont icon-shengpi el-col1" :span="12">
            <span> 经理审批：销售订单：S1804015</span>
          </el-col>
          <el-col class="el-col1" :span="5">
            <span>递交者：Green</span>
          </el-col>
          <el-col class = "el-col2" :span="7">
            <span>2018-03-27 23:36</span>
          </el-col>
        </el-row>
        <el-row class="ad_row">
          <el-col class="iconfont icon-shengpi el-col1" :span="12">
            <span> 经理审批：销售订单：S1804027</span>
          </el-col>
          <el-col class="el-col1" :span="5">
            <span>递交者：Tony</span>
          </el-col>
          <el-col class = "el-col2" :span="7">
            <span>2018-02-19 04:13</span>
          </el-col>
        </el-row>
      </el-tab-pane>

      <el-tab-pane label="警示" name="second">
        <el-row class="ad_row">
          <el-col class="iconfont icon-09jingshi el-col1" :span="17">
            <span> 警示：今日需给SHFZ025报价</span>
          </el-col>
          <el-col class = "el-col2" :span="7">
            <span>2018-03-29 18:36</span>
          </el-col>
        </el-row>
      </el-tab-pane>

      <el-tab-pane label="公告" name="third">
        <el-row class="ad_row">
          <el-col class="iconfont icon-tongzhi el-col1" :span="17">
            <span> 公告：恭喜Mary签约，签约金额＄5,957.42</span>
          </el-col>
          <el-col class = "el-col2" :span="7">
            <span>2018-02-14 04:31</span>
          </el-col>
        </el-row>
        <el-row class="ad_row">
          <el-col class="iconfont icon-tongzhi el-col1" :span="17">
            <span> 公告：恭喜John签约，签约金额＄523.32</span>
          </el-col>
          <el-col class = "el-col2" :span="7">
            <span>2018-03-27 16:47</span>
          </el-col>
        </el-row>
        <el-row class="ad_row">
          <el-col class="iconfont icon-tongzhi el-col1" :span="17">
            <span> 公告：恭喜Anthony签约，签约金额＄256.83</span>
          </el-col>
          <el-col class = "el-col2" :span="7">
            <span>2018-04-01 14:51</span>
          </el-col>
        </el-row>
        <el-row class="ad_row">
          <el-col class="iconfont icon-tongzhi el-col1" :span="17">
            <span> 公告：恭喜William签约，签约金额＄6,396.14</span>
          </el-col>
          <el-col class = "el-col2" :span="7">
            <span>2018-04-02 15:23</span>
          </el-col>
        </el-row>
        <el-row class="ad_row">
          <el-col class="iconfont icon-tongzhi el-col1" :span="17">
            <span> 公告：恭喜David签约，签约金额＄482.53</span>
          </el-col>
          <el-col class = "el-col2" :span="7">
            <span>2018-04-05 17:48</span>
          </el-col>
        </el-row>
        <el-row class="ad_row">
          <el-col class="iconfont icon-tongzhi el-col1" :span="17">
            <span> 公告：恭喜Brandon签约，签约金额＄8,832.82</span>
          </el-col>
          <el-col class = "el-col2" :span="7">
            <span>2018-04-18 09:06</span>
          </el-col>
        </el-row>
      </el-tab-pane>


      <el-tab-pane label="会议" name="four">
        <el-row class="ad_row">
          <el-col class="iconfont icon-huiyikaihuitaolun el-col1" :span="17">
            <span> 会议：4月11日上午9：00业务部全体人员在会议室01举行会议</span>
          </el-col>
          <el-col class = "el-col2" :span="7">
            <span>2018-03-21 03:41</span>
          </el-col>
        </el-row>
        <el-row class="ad_row">
          <el-col class="iconfont icon-huiyikaihuitaolun el-col1" :span="17">
            <span> 会议：4月12日下午2：00采购部全体人员在会议室02举行会议</span>
          </el-col>
          <el-col class = "el-col2" :span="7">
            <span>2018-03-24 09:30</span>
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
