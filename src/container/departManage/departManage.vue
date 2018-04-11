<template>
  <div class="c_deptmanage">
    <el-row class="condition_div">
    <el-row>
      <el-col :span="3" class="col_span">
        <label>销售订单号</label>
      </el-col>
      <el-col :span="3">
        <el-input
        placeholder="请输入内容">
        </el-input>
      </el-col>
      <el-col :span="3" class="col_span">
        <label>客户编号</label>
      </el-col>
      <el-col :span="3">
        <el-input
          placeholder="请输入内容">
        </el-input>
      </el-col>
      <el-col :span="3" class="col_span">
        <label>客户简称</label>
      </el-col>
      <el-col :span="3">
        <el-input
          placeholder="请输入内容">
        </el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="3" class="col_span">
        <label>客户订单号</label>
      </el-col>
      <el-col :span="3">
        <el-input
          placeholder="请输入内容">
        </el-input>
      </el-col>
      <el-col :span="3" class="col_span">
        <label>付款方式</label>
      </el-col>
      <el-col :span="3">
        <el-select
          placeholder="请选择内容"
          v-model="value4"
          clearable >
          <el-option v-for="item in options"
                     :key="item.value"
                     :label="item.label"
                     :value="item.label">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="3" class="col_span">
        <label>交货地点</label>
      </el-col>
      <el-col :span="3">
        <el-input
          placeholder="请输入内容">
        </el-input>
      </el-col>
      <el-col :span="2" class="col_query_btn">
        <el-button >重置</el-button>
        <el-button type="primary">查询</el-button>
      </el-col>
    </el-row>
    </el-row>
    <el-row class="content_div">
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="主要信息" name="1">
          <el-row>
            <el-col :span="1" class="col_span">
              <label>销售订单号</label>
            </el-col>
            <el-col :span="4">
              <el-input :readonly = "readOnly" value="A100213948123">
              </el-input>
            </el-col>
            <el-col :span="1" class="col_span">
              <label>合同日期</label>
            </el-col>
            <el-col :span="4">
              <el-input :readonly = "readOnly" value="2018-03-25 09:29:24">
              </el-input>
            </el-col>
            <el-col :span="1" class="col_span">
              <label>客户编号</label>
            </el-col>
            <el-col :span="4">
              <el-input :readonly = "readOnly" value="XHR00234">
              </el-input>
            </el-col>
            <el-col :span="1" class="col_span">
              <label>客户简称</label>
            </el-col>
            <el-col :span="4">
              <el-input :readonly = "readOnly" value="王司徒">
              </el-input>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="1" class="col_span">
              <label>客户订单号</label>
            </el-col>
            <el-col :span="4">
              <el-input :readonly = "readOnly" value="B10234234123">
              </el-input>
            </el-col>
            <el-col :span="1" class="col_span">
              <label>交货日期</label>
            </el-col>
            <el-col :span="4">
              <el-input :readonly = "readOnly" value="2018-03-27 11:04:34">
              </el-input>
            </el-col>
            <el-col :span="1" class="col_span">
              <label>我方公司</label>
            </el-col>
            <el-col :span="4">
              <el-input :readonly = "readOnly" value="杭州阿里巴巴股份有限公司">
              </el-input>
            </el-col>
            <el-col :span="1" class="col_span">
              <label>币种</label>
            </el-col>
            <el-col :span="4">
              <el-input :readonly = "readOnly" value="人民币">
              </el-input>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="1" class="col_span">
              <label>汇率</label>
            </el-col>
            <el-col :span="4">
              <el-input :readonly = "readOnly" value="0">
              </el-input>
            </el-col>
            <el-col :span="1" class="col_span">
              <label>保险比率</label>
            </el-col>
            <el-col :span="4">
              <el-input :readonly = "readOnly" value="0.94">
              </el-input>
            </el-col>
            <el-col :span="1" class="col_span">
              <label>佣金比率</label>
            </el-col>
            <el-col :span="4">
              <el-input :readonly = "readOnly" value="0.86">
              </el-input>
            </el-col>
            <el-col :span="1" class="col_span">
              <label>业务员</label>
            </el-col>
            <el-col :span="4">
              <el-input :readonly = "readOnly" value="赵艳">
              </el-input>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="1" class="col_span">
              <label>制单日期</label>
            </el-col>
            <el-col :span="4">
              <el-input :readonly = "readOnly" value="2018-03-25 09:29:24">
              </el-input>
            </el-col>
            <el-col :span="1" class="col_span">
              <label>制单人</label>
            </el-col>
            <el-col :span="4">
              <el-input :readonly = "readOnly" value="王磊">
              </el-input>
            </el-col>
          </el-row>
        </el-collapse-item>
        <el-collapse-item title="辅助信息" name="2">
          <el-row>
            <el-col :span="1" class="col_span">
              <label>付款方式</label>
            </el-col>
            <el-col :span="4">
              <el-input :readonly = "readOnly" value="现金支付">
              </el-input>
            </el-col>
            <el-col :span="1" class="col_span">
              <label>签约地点</label>
            </el-col>
            <el-col :span="4">
              <el-input :readonly = "readOnly" value="上海青浦区">
              </el-input>
            </el-col>
            <el-col :span="1" class="col_span">
              <label>运输方式</label>
            </el-col>
            <el-col :span="4">
              <el-input :readonly = "readOnly" value="汽运">
              </el-input>
            </el-col>
            <el-col :span="1" class="col_span">
              <label>交货地点</label>
            </el-col>
            <el-col :span="4">
              <el-input :readonly = "readOnly" value="上海杨浦区">
              </el-input>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="1" class="col_span">
              <label>费用承担</label>
            </el-col>
            <el-col :span="4">
              <el-input :readonly = "readOnly" value="平摊">
              </el-input>
            </el-col>
            <el-col :span="1" class="col_span">
              <label>包装要求</label>
            </el-col>
            <el-col :span="4">
              <el-input :readonly = "readOnly" value="打木架">
              </el-input>
            </el-col>
            <el-col :span="1" class="col_span">
              <label>品质保证</label>
            </el-col>
            <el-col :span="4">
              <el-input :readonly = "readOnly" value="">
              </el-input>
            </el-col>
            <el-col :span="1" class="col_span">
              <label>违约责任</label>
            </el-col>
            <el-col :span="4">
              <el-input :readonly = "readOnly" value="">
              </el-input>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="1" class="col_span">
              <label>合同纠纷</label>
            </el-col>
            <el-col :span="4">
              <el-input :readonly = "readOnly" value="">
              </el-input>
            </el-col>
          </el-row>
        </el-collapse-item>
        <el-collapse-item title="订单产品明细" name="3">
          <el-table
            :data="orderDetail"
            border
            style="width: 100%">
            <el-table-column prop="productCode"  width="150" label="产品编码"></el-table-column>    <el-table-column prop="barCode"  width="150" label="条形码"></el-table-column>    <el-table-column prop="productImge"  width="150" label="产品图片"></el-table-column>    <el-table-column prop="zhName"  width="150" label="中文名称"></el-table-column>    <el-table-column prop="enName"  width="150" label="英文名称"></el-table-column>    <el-table-column prop="model"  width="150" label="型号规格"></el-table-column>    <el-table-column prop="descript"  width="150" label="产品描述"></el-table-column>    <el-table-column prop="address"  width="150" label="品牌"></el-table-column>    <el-table-column prop="address"  width="150" label="净重"></el-table-column>    <el-table-column prop="address"  width="150" label="毛重"></el-table-column>    <el-table-column prop="address"  width="150" label="单位"></el-table-column>    <el-table-column prop="address"  width="150" label="产品尺寸"></el-table-column>    <el-table-column prop="address"  width="150" label="外箱重量"></el-table-column>    <el-table-column prop="address"  width="150" label="外箱宽度"></el-table-column>    <el-table-column prop="address"  width="150" label="外箱体积"></el-table-column>    <el-table-column prop="address"  width="150" label="客户货号"></el-table-column>    <el-table-column prop="address"  width="150" label="包装方式"></el-table-column>    <el-table-column prop="address"  width="150" label="交货日期"></el-table-column>    <el-table-column prop="address"  width="150" label="是否开票"></el-table-column>    <el-table-column prop="address"  width="150" label="合同数量"></el-table-column>    <el-table-column prop="address"  width="150" label="销售单价"></el-table-column>    <el-table-column prop="address"  width="150" label="销售总价"></el-table-column>    <el-table-column prop="address"  width="150" label="默认供应商编号"></el-table-column>    <el-table-column prop="address"  width="150" label="默认采购单价"></el-table-column>    <el-table-column prop="address"  width="150" label="默认采购总监"></el-table-column>    <el-table-column prop="address"  width="150" label="总箱数"></el-table-column>    <el-table-column prop="address"  width="150" label="总体积"></el-table-column>    <el-table-column prop="address"  width="150" label="总毛总"></el-table-column>    <el-table-column prop="address"  width="150" label="总净重"></el-table-column>    <el-table-column prop="address"  width="150" label="下单数量"></el-table-column>    <el-table-column prop="address"  width="150" label="未下单数"></el-table-column>    <el-table-column prop="address"  width="150" label="发货数量"></el-table-column>    <el-table-column prop="address"  width="150" label="未发货数量"></el-table-column>
          </el-table>
        </el-collapse-item>
        <el-collapse-item title="费用明细" name="4">
          <el-table
            :data="costDetail"
            border
            style="width: 100%">
            <el-table-column
              prop="costName"
              label="费用名称"
              width="120">
            </el-table-column>
            <el-table-column
              prop="price"
              label="金额"
              width="120">
            </el-table-column>
            <el-table-column
              prop="descript"
              label="备注">
            </el-table-column>
          </el-table>
        </el-collapse-item>
        <el-collapse-item title="合计信息" name="5">
          <el-row class="total_el">
            <el-col :span="1" class="col_span">
              <label>总货值(元)</label>
            </el-col>
            <el-col :span="4">
              <el-input :readonly = "readOnly" value="87985">
              </el-input>
            </el-col>
            <el-col :span="1" class="col_span d_t_span">
              <label>总数量</label>
            </el-col>
            <el-col :span="4">
              <el-input :readonly = "readOnly" value="492">
              </el-input>
            </el-col>
            <el-col :span="1" class="col_span d_t_span">
              <label>总箱数</label>
            </el-col>
            <el-col :span="4">
              <el-input :readonly = "readOnly" value="231">
              </el-input>
            </el-col>
            <el-col :span="1" class="col_span">
              <label>总毛重(kg)</label>
            </el-col>
            <el-col :span="4">
              <el-input :readonly = "readOnly" value="2341">
              </el-input>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="1" class="col_span">
              <label>总净重(kg)</label>
            </el-col>
            <el-col :span="4">
              <el-input :readonly = "readOnly" value="4123">
              </el-input>
            </el-col>
            <el-col :span="1" class="col_span d_t_span">
              <label>总体积(立方)</label>
            </el-col>
            <el-col :span="4">
              <el-input :readonly = "readOnly" value="234">
              </el-input>
            </el-col>
            <el-col :span="1" class="col_span d_t_span">
              <label>费用合计(元)</label>
            </el-col>
            <el-col :span="4">
              <el-input :readonly = "readOnly" value="58755">
              </el-input>
            </el-col>
            <el-col :span="1" class="col_span">
              <label>总金额(元)</label>
            </el-col>
            <el-col :span="4">
              <el-input :readonly = "readOnly" value="545855">
              </el-input>
            </el-col>
          </el-row>
        </el-collapse-item>
      </el-collapse>
    </el-row>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        options: [{
          value: '现金',
          label: '现金'
        }, {
          value: '刷卡',
          label: '刷卡'
        }, {
          value: '到付',
          label: '到付'
        }, {
          value: '支付宝',
          label: '支付宝'
        }, {
          value: '微信',
          label: '微信'
        }],
        value4: '',
        dateValue :'2018-03-25 09:29:24',
        activeNames: ['1','5'],
        readOnly : true,
        costDetail:[{
          costName : '车辆损耗',
          price:'50',
          descript:'有发票'
        },{
          costName : '其它',
          price:'460',
          descript:'请人搬货进仓库'
        }],
        orderDetail:[{
          productCode:"UYU0923018883",
          barCode:"12903810298312",
          productImge:"",
          zhName:"铁皮石斛",
          enName:"tiepishihu",
          model:"5斤/袋",
          descript:"延年益寿"
        },{
          productCode:"UYU1235223123",
          barCode:"1234464574546",
          productImge:"",
          zhName:"冬虫夏草",
          enName:"dongchongxiacao",
          model:"10支/盒",
          descript:"能治百病"
        }]
      }
    },
    methods:{
      handleChange(val) {
        console.log(val);
      }
    }
  }
</script>
<style lang="stylus" >
  // 头部条件样式
  .condition_div{
    display block
    height 100px
    border 2px solid gainsboro
    margin 10px 10px 10px 10px
    border-radius 10px
    padding 8px
    line-height 38px
    font-size 15px
    min-width 1200px
    .el-input__inner{
      height 30px
      max-width 160px
      min-width 120px
    }
    .col_query_btn{
      min-width  200px
      padding-left 55px
      float left
      .el-button{
        height 30px
        padding 0px 14px
      }
      .el-button+.el-button{
        margin-left 0px
      }
    }
    .el-date-editor.el-input, .el-date-editor.el-input__inner{
      min-width 100px

    }
    // label标题样式
    .col_span{
      display block
      text-align right
      width 120px
      padding-right 10px
      font-size 15px
    }
  }

    // 下部内容展示样式
  .content_div{
    min-width 1200px
    border-bottom: 1px solid #ebeef5;
    display block
    margin 10px 10px 10px 10px
    border-radius 10px
    .el-input__icon{
      line-height 0px
    }
    // label标题样式
    .col_span{
      display block
      font-size 15px
      min-width 80px
      padding-right 5px
    }
      // 折叠标题样式
    .el-collapse-item__header{
      font-size 16px
      height 30px
      line-height 30px
      align-items center
      background-color #e4e7ed3d
      font-weight:700
      font-family "微软雅黑"
      color #5170b1
    }
    // 设置行距
    .el-row{
      padding 10px 0px 10px 20px
      border: 1px solid #ebeef5;
    }
    .el-collapse-item__arrow{
      float none
      line-height 0px
    }
    // 设置数据展示文本框样式
    .el-input__inner{
      height 30px
      width 170px
    }
    // 设置合计信息下的文本信息
    .d_t_span{
      min-width 100px
    }
  }
</style>
