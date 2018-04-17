<template>
  <div class="query_div">
    <el-row class="query_row">
      <el-button type="button"
                 class="q_query_btn"
                 @click="togglebox">
        <i class="iconfont icon-gengduo"
           v-bind:class="[queryBtn_active ? 'q_active':'q_inactive']">
        </i>
        查询
      </el-button>
    </el-row>
    <transition name="q_trans">
      <div class="box" v-show="boxshow">
        <el-row>
          <el-input v-model="input" placeholder="请输入关键字" class="inpt_key"></el-input>
          <span>(销售订单号/客户订单号/客户编号)</span>
          <el-collapse>
            <el-collapse-item>
              <template slot="title">
                合同时间
              </template>
              <span>起：</span>
              <el-date-picker
                v-model="value3"
                type="date"
                placeholder="选择日期(00:00:00)">
              </el-date-picker>
              <span>止：</span>
              <el-date-picker
                v-model="value4"
                type="date"
                placeholder="选择日期(23:59:59)">
              </el-date-picker>
            </el-collapse-item>
            <el-collapse-item title="交货时间">
              <span>起：</span>
              <el-date-picker
                v-model="value5"
                type="date"
                placeholder="选择日期(00:00:00)">
              </el-date-picker>
              <span>止：</span>
              <el-date-picker
                v-model="value6"
                type="date"
                placeholder="选择日期(23:59:59)">
              </el-date-picker>
            </el-collapse-item>
            <el-collapse-item title="客户简称">
              <el-input v-model="value9" placeholder="请输入内容"></el-input>
            </el-collapse-item>
            <el-collapse-item title="付款方式">
              <el-select v-model="value8" clearable placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-collapse-item>
            <el-collapse-item title="我方公司">
              <el-input v-model="value7" placeholder="请输入内容"></el-input>
            </el-collapse-item>
            <el-collapse-item title="业务员">
              <el-input v-model="value10" placeholder="请输入内容"></el-input>
            </el-collapse-item>

          </el-collapse>
        </el-row>
        <el-row class="box_bottom">
          <el-button>查询</el-button>
          <el-button @click="btn_reset">重置</el-button>
        </el-row>
      </div>
    </transition>
  </div>
</template>
<script>
  export  default {
    name : "topQuery",
    data() {
      return {
        queryBtn_active : true,
        boxshow : false,
        input : "",
        value3:"",
        value4:"",
        value5:"",
        value6:"",
        value7:"",
        value8:"",
        value9:"",
        value10:"",
        options: [{
          value: '选项1',
          label: '现金'
        }, {
          value: '选项2',
          label: '支付宝'
        }, {
          value: '选项3',
          label: '微信'
        }, {
          value: '选项4',
          label: '银联'
        }]
      }
    },
    computed:{

    },
    methods:{
      togglebox:function(){
        this.boxshow = !this.boxshow;
        this.queryBtn_active = !this.queryBtn_active;
      },
      btn_reset:function(){
        this.input = "";
        this.value3 = "";
        this.value4 = "";
        this.value5 = "";
        this.value6 = "";
        this.value6 = "";
        this.value7 = "";
        this.value8 = "";
        this.value9 = "";
        this.value10 = "";
      }
    }
  }
</script>
<style lang="stylus" >
  // 整个大的查询头部DIV
  .query_row{
    height 30px
    border-bottom 1px solid gainsboro
    // 重置element-ui上的按钮样式
    .el-button:focus, .el-button:hover{
      color black
      border-color gainsboro
      background-color white
    }
    // 查询按钮样式
    .q_query_btn{
      height 28px
      width 80px
      line-height 29px
      padding 0px 10px 0px 4px
      margin  0px 10px
      border 0px
      border 1px solid gainsboro
      background-color white
      outline none
      font-size 16px
      margin 1px 0px 0px 1px
      // 查询按钮上的图标样式
      i{
        display block
        float left
        font-size 22px
        color gray
        margin-top -1px
      }
    }

    // 查询图表正常向下样式
    .q_active{
      transform:rotate(90deg);
    }
    // 查询图表向上样式
    .q_inactive{
      transform:rotate(270deg);
    }
  }
  // 可折叠搜索框整体样式
  .box{
    width 250px
    height 500px;
    padding 10px
    border 1px solid gray
    overflow auto
    border-radius 10px
    position absolute
    top 30px
    background-color #fcfcfc
    z-index 5
    // 折叠框内搜索输入框样式
    .el-input__inner{
      height 32px
      margin 5px 0px
      width 230px
    }
    // 按钮样式
    .el-button{
      height 30px
      line-height 30px
      padding 0px 10px
      margin 10px 3px
      background-color #409EFF
      float right
      span{
        color white
      }
    }
    // 文本样式
    span{
      font-size 14px
      color #5170b1
      text-align center
    }
    .el-collapse{
      margin-top 8px
      width: 240px
    }
    .el-collapse-item{
      line-height 40px
    }
    .el-collapse-item__header{
      background-color rgba(180, 188, 204, 0.06)
    }
    .el-collapse-item__header,.el-collapse-item__arrow{
      height 40px
      line-height 40px
    }
    .el-collapse-item__content{
      padding 5px 0px
    }
    .el-date-editor.el-input{
      width 200px
    }
  }
  // 以下为可折叠搜索框动态收放样式
  .q_trans-leave-active,.q_trans-enter-active{
    transition:  all 1s ease;
  }
  .q_trans-leave-active,.q_trans-enter{
    height:0px !important;
  }
  .q_trans-leave,.q_trans-enter-active{
    height: 500px;
  }
</style>
