<template>
  <div>
    <el-row class="report_title">数据报表</el-row>
    <el-row class="report_row">
      <el-col :span="12">
        <schart canvasId="myCanvas" :type="type" :width="width"
                       :height="height" :data="data" :options="options1"></schart>
      </el-col>
      <el-col :span="12">
        <schart canvasId="ccanvasId" type="line" :width="width"
                :height="height" :data="data2" :options="options2"></schart>
      </el-col>
    </el-row>
    <el-row class="report_row">
      <el-col :span="12">
        <schart canvasId="mcyRing" type="ring" :width="width"
                :height="height" :data="data3" :options="options3"></schart>
      </el-col>
      <el-col :span="12">
        <schart canvasId="caanvasId" type="pie" :width="width"
                :height="height" :data="data4" :options="options4"></schart>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Schart from 'vue-schart';

  export default {
    data() {
      return {
        canvasId: 'myCanvas',
        type: 'bar',
        width: 550,
        height: 450,
        data: [
          {name: 'Michael', value: 1154},
          {name: 'Anthony', value: 1342},
          {name: 'David', value: 2123},
          {name: 'John', value: 1654},
          {name: 'Daisy', value: 1795},
          {name: 'Emily', value: 1154},
          {name: 'Mary', value: 1342},
          {name: 'Chris', value: 2123},
          {name: 'Jack', value: 1654},
          {name: 'Robert', value: 1795},
          {name: 'Fiona', value: 1654},
          {name: 'Jessica', value: 1795}
        ],data2: [
          {name: '01', value: 19585},
          {name: '02', value: 21346},
          {name: '03', value: 27500},
          {name: '04', value: 16543},
          {name: '05', value: 21468},
          {name: '06', value: 23294},
          {name: '07', value: 27524},
          {name: '08', value: 24843},
          {name: '09', value: 25062},
          {name: '10', value: 25749},
          {name: '11', value: 28983},
          {name: '12', value: 27530}
        ],data3: [
        {name: 'XSKH0001', value: 1154},
        {name: 'XSKH0007', value: 1342},
        {name: 'XSKH0015', value: 2123},
        {name: 'XSKH0020', value: 1654},
        {name: 'XSKH0026', value: 1795},
        {name: 'XSKH0031', value: 1154},
        {name: 'XSKH0040', value: 1342},
        {name: 'XSKH0042', value: 2123},
        {name: 'XSKH0049', value: 1654},
        {name: 'XSKH0068', value: 1795}
      ],data4: [
          {name: 'GYS0003', value: 1154},
          {name: 'GYS0009', value: 1342},
          {name: 'GYS0012', value: 2123},
          {name: 'GYS0015', value: 1654},
          {name: 'GYS0026', value: 1795},
          {name: 'GYS0033', value: 1154},
          {name: 'GYS0059', value: 1342},
          {name: 'GYS0063', value: 2123},
          {name: 'GYS0067', value: 1654}
        ],options1: {
          padding: 70,                    // canvas 内边距
          yEqual: 5,                      // y轴分成5等分
          bgColor: '#ffffff',             // 默认背景颜色
          fillColor: '#1E9FFF',           // 默认填充颜色
          axisColor: '#666666',           // 坐标轴颜色
          contentColor: '#eeeeee',        // 内容横线颜色
          title: '业务员业绩分析表',       // 图表标题
          titleColor: '#000000',          // 图表标题颜色
          titlePosition: 'top'            // 图表标题位置: top / bottom
        },
        options2: {
          padding: 50,                    // canvas 内边距
          yEqual: 5,                      // y轴分成5等分
          bgColor: '#ffffff',             // 默认背景颜色
          fillColor: '#1E9FFF',           // 默认填充颜色
          axisColor: '#666666',           // 坐标轴颜色
          contentColor: '#eeeeee',        // 内容横线颜色
          title: '当年公司业绩趋势图',                      // 图表标题
          titleColor: '#000000',          // 图表标题颜色
          titlePosition: 'top'            // 图表标题位置: top / bottom
        },
        options3: {
          bgColor: '#ffffff',             // 默认背景颜色
          title: '前20客户销售量占比分析图',                      // 图表标题
          titleColor: '#000000',          // 图表标题颜色
          titlePosition: 'top',            // 图表标题位置: top / bottom
          legendColor: '#000000',         // 图例文本颜色
          legendTop: 40,                  // 图例距离顶部的长度
          colorList: ['#1E9FFF', '#13CE66', '#F7BA2A', '#FF4949', '#72f6ff'],    // 饼图颜色列表
          radius: 100                    // 饼图半径
        },
        options4: {
          padding: 50,                   // canvas 内边距
          bgColor: '#FFFFFF',            // 默认背景颜色
          title: '前20位供应商采购量占比图',// 图表标题
          titleColor: '#000000',         // 图表标题颜色
          titlePosition: 'top',      // 图表标题位置: top / bottom
          legendColor: '#000000',         // 图例文本颜色
          legendTop: 40,               // 图例距离顶部的长度
          colorList: ['#1E9FFF','#13CE66','#F7BA2A','#FF4949','#72f6ff'],   // 环形图颜色列表
          radius: 100,                     // 环形图外圆半径
          innerRadius: 70            // 环形图内圆半径
        }
      }
    },
    components:{
      Schart
    }
  }
</script>
<style lang="stylus" >
.report-form{
  height 300px
  border 1px solid gainsboro
}
  .report_title{
    font-size 18px
    padding-left 20px
    font-family "微软雅黑"
    font-weight bold
    display flex
    align-items center
    height 40px
    border 1px solid gainsboro
  }
  .report_row .el-col{
    border 1px solid gainsboro
  }
</style>
