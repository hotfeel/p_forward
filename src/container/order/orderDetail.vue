<template>
  <el-container class="d_orderDetail">
      <el-header style="height: 50px;">
        <el-row class="e_row_header e_common">
          <el-button icon="iconfont icon-baocun" class="btn_common">保存</el-button>
        </el-row>
      </el-header>
      <el-main class="content_div">
        <el-row class="e_common orderDeatail_content">
        <el-collapse v-model="activeNames">
          <el-collapse-item title="主要信息" name="1">
            <el-row>
              <el-col :span="1" class="col_span">  <label>销售订单号</label></el-col><el-col :span="4">  <el-input :readonly = "readOnly" v-model="order.orderNumber">  </el-input></el-col>
              <el-col :span="1" class="col_span">  <label>合同日期</label></el-col><el-col :span="4">  <el-date-picker :readonly = "readOnly"  v-model="order.constractDate" type="date"/></el-col>
              <el-col :span="1" class="col_span">  <label>客户编号</label></el-col><el-col :span="4">  <el-input :readonly = "readOnly" v-model="order.custNumber">  </el-input></el-col>
              <el-col :span="1" class="col_span">  <label>客户简称</label></el-col><el-col :span="4">  <el-input :readonly = "readOnly" v-model="order.custShortName">  </el-input></el-col>
            </el-row>
            <el-row>
              <el-col :span="1" class="col_span">  <label>客户订单号</label></el-col><el-col :span="4">  <el-input :readonly = "readOnly">  </el-input></el-col>
              <el-col :span="1" class="col_span">  <label>交货日期</label></el-col><el-col :span="4">  <el-date-picker :readonly = "readOnly"  v-model="order.deliveryDate" type="date"/></el-col>
              <el-col :span="1" class="col_span">  <label>我方公司</label></el-col><el-col :span="4">  <el-input :readonly = "readOnly" v-model="order.ownCompany">  </el-input></el-col>
              <el-col :span="1" class="col_span">  <label>币种</label></el-col><el-col :span="4">  <el-input :readonly = "readOnly" v-model="order.currency">  </el-input></el-col>
            </el-row>
            <el-row>
              <el-col :span="1" class="col_span">  <label>汇率</label></el-col><el-col :span="4">  <el-input :readonly = "readOnly">  </el-input></el-col>
              <el-col :span="1" class="col_span">  <label>保险比率</label></el-col><el-col :span="4">  <el-input :readonly = "readOnly">  </el-input></el-col>
              <el-col :span="1" class="col_span">  <label>佣金比率</label></el-col><el-col :span="4">  <el-input :readonly = "readOnly">  </el-input></el-col>
              <el-col :span="1" class="col_span">  <label>业务员</label></el-col><el-col :span="4">  <el-input :readonly = "readOnly" v-model="order.courier">  </el-input></el-col>
            </el-row>
            <el-row>
              <el-col :span="1" class="col_span">  <label>制单日期</label></el-col><el-col :span="4">  <el-date-picker :readonly = "readOnly"  v-model="order.createDate" type="date"/></el-col>
              <el-col :span="1" class="col_span">  <label>制单人</label></el-col><el-col :span="4">  <el-input :readonly = "readOnly" v-model="order.creator">  </el-input></el-col>
            </el-row>
          </el-collapse-item>
          <el-collapse-item title="辅助信息" name="2">
            <el-row>
              <el-col :span="1" class="col_span">  <label>付款方式</label></el-col><el-col :span="4">  <el-input :readonly = "readOnly" v-model="order.paymentWay"></el-input></el-col>
              <el-col :span="1" class="col_span">  <label>签约地点</label></el-col><el-col :span="4">  <el-input :readonly = "readOnly">  </el-input></el-col>
              <el-col :span="1" class="col_span">  <label>运输方式</label></el-col><el-col :span="4">  <el-input :readonly = "readOnly">  </el-input></el-col>
              <el-col :span="1" class="col_span">  <label>交货地点</label></el-col><el-col :span="4">  <el-input :readonly = "readOnly">  </el-input></el-col>
            </el-row>
            <el-row>
              <el-col :span="1" class="col_span">  <label>费用承担</label></el-col><el-col :span="4">  <el-input :readonly = "readOnly">  </el-input></el-col>
              <el-col :span="1" class="col_span">  <label>包装要求</label></el-col><el-col :span="4">  <el-input :readonly = "readOnly">  </el-input></el-col>
              <el-col :span="1" class="col_span">  <label>品质保证</label></el-col><el-col :span="4">  <el-input :readonly = "readOnly">  </el-input></el-col>
              <el-col :span="1" class="col_span">  <label>违约责任</label></el-col><el-col :span="4">  <el-input :readonly = "readOnly">  </el-input></el-col>
            </el-row>
            <el-row>
              <el-col :span="1" class="col_span">  <label>合同纠纷</label></el-col><el-col :span="4">  <el-input :readonly = "readOnly">  </el-input></el-col>
            </el-row>
          </el-collapse-item>
          <el-collapse-item title="订单产品明细" name="3">
            <div class="div_product">
              <el-button icon="iconfont icon-xinzeng" class="btn_fun" @click="addProduct">新建</el-button>
              <el-button icon="iconfont icon-xinzeng" class="btn_fun"  @click="addProduct">复制</el-button>
              <el-button icon="iconfont icon-baocun" class="btn_fun">保存</el-button>
              <el-button icon="el-icon-delete" class="btn_fun" @click="delete_row">删除</el-button>
            </div>
            <el-table
              :data="order.orderProducts"
              border
              style="width: 100%" ref="productTable"
              @select="tableSelect">
              <el-table-column
                fixed
                type="selection"
                width="35">
              </el-table-column>
              <el-table-column
                type="index"
                v-if="false">
              </el-table-column>
              <el-table-column prop="id" width="0" v-if="false" label="id"/>
              <el-table-column prop="orderNumber" width="150" label="订单编号"/>
              <el-table-column prop="name" fixed  width="150" label="中文名称"/>
              <el-table-column prop="code" width="150" label="产品编码"/>
              <el-table-column prop="barCode"  width="150" label="条形码"/>
              <el-table-column prop="productImg"  width="150" label="产品图片"/>
              <el-table-column prop="enName"  width="150" label="英文名称"/>
              <el-table-column prop="model"  width="150" label="型号规格"/>
              <el-table-column prop="description"  width="150" label="产品描述"/>
              <el-table-column prop="brand"  width="150" label="品牌"/>
              <el-table-column prop="netWeight"  width="150" label="净重"/>
              <el-table-column prop="roughWeight"  width="150" label="毛重"/>
              <el-table-column prop="unit"  width="150" label="单位"/>
              <el-table-column prop="size"  width="150" label="产品尺寸"/>
              <el-table-column prop="outBoxWeight"  width="150" label="外箱重量"/>
              <el-table-column prop="outBoxWidth"  width="150" label="外箱宽度"/>
              <el-table-column prop="outBoxVolume"  width="150" label="外箱体积"/>
              <el-table-column prop="freightNum"  width="150" label="客户货号"/>
              <el-table-column prop="packageMethod"  width="150" label="包装方式"/>
              <el-table-column prop="deliveryDate"  width="150" :formatter="dateFormat" label="交货日期"/>
              <el-table-column prop="ticket"  width="150" :formatter="convertBoolean" label="是否开票"/>
              <el-table-column prop="dealCount"  width="150" label="合同数量"/>
              <el-table-column prop="salePrice"  width="150" label="销售单价"/>
              <el-table-column prop="saleTotal"  width="150" label="销售总价"/>
              <el-table-column prop="supplierNum"  width="150" label="默认供应商编号"/>
              <el-table-column prop="purchasePrice"  width="150" label="默认采购单价"/>
              <el-table-column prop="purchaseTotalPrice"  width="150" label="默认采购总监"/>
              <el-table-column prop="totalBox"  width="150" label="总箱数"/>
              <el-table-column prop="totalVolume"  width="150" label="总体积"/>
              <el-table-column prop="totalRoughWeight"  width="150" label="总毛总"/>
              <el-table-column prop="totalNetWeight"  width="150" label="总净重"/>
              <el-table-column prop="orderCount"  width="150" label="下单数量"/>
              <el-table-column prop="noOrderCount"  width="150" label="未下单数"/>
              <el-table-column prop="sendCount"  width="150" label="发货数量"/>
              <el-table-column prop="unsentCount"  width="150" label="未发货数量"/>
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
        <!--新增产品订单信息-->
        <el-dialog
          title="产品信息"
          :visible.sync="dialogVisible"
          width="70%"
          center
          :before-close="handleClose" class="dialog_product">
            <el-row class="row_pro_content">
              <el-form ref="form" :model="form">
                <el-row class="row_product">
                  <el-col :span="2"><span>中文名称</span> </el-col> <el-col :span="5"><el-input v-model="orderProduct.name"></el-input></el-col>
                  <el-col :span="3"><span>英文名称</span> </el-col> <el-col :span="5"><el-input placeholder="请输入内容"></el-input> </el-col>
                  <el-col :span="3"><span>产品编码</span> </el-col> <el-col :span="5"><el-input placeholder="请输入内容"></el-input> </el-col>
                </el-row>
                <el-row class="row_product">
                  <el-col :span="2"><span>型号规格</span> </el-col> <el-col :span="5"><el-input placeholder="请输入内容"></el-input> </el-col>
                  <el-col :span="3"><span>产品描述</span> </el-col> <el-col :span="5"><el-input placeholder="请输入内容"></el-input> </el-col>
                  <el-col :span="3"><span>品牌</span> </el-col> <el-col :span="5"><el-input placeholder="请输入内容"></el-input> </el-col>
                </el-row>
                <el-row class="row_product">
                  <el-col :span="2"> <span>净重</span></el-col><el-col :span="5"> <el-input placeholder="请输入内容"></el-input></el-col>
                  <el-col :span="3"> <span>毛重</span></el-col><el-col :span="5"> <el-input placeholder="请输入内容"></el-input></el-col>
                  <el-col :span="3"> <span>单位</span></el-col><el-col :span="5"> <el-input placeholder="请输入内容"></el-input></el-col>
                </el-row><el-row class="row_product">
                <el-col :span="2"> <span>产品尺寸</span></el-col><el-col :span="5"> <el-input placeholder="请输入内容"></el-input></el-col>
                <el-col :span="3"><span>外箱重量</span></el-col><el-col :span="5"> <el-input placeholder="请输入内容"></el-input></el-col>
                <el-col :span="3"> <span>外箱宽度</span></el-col><el-col :span="5"> <el-input placeholder="请输入内容"></el-input></el-col>
              </el-row>
                <el-row class="row_product">
                  <el-col :span="2"> <span>外箱体积</span></el-col><el-col :span="5"> <el-input placeholder="请输入内容"></el-input></el-col>
                  <el-col :span="3"> <span>客户货号</span></el-col><el-col :span="5"> <el-input placeholder="请输入内容"></el-input></el-col>
                  <el-col :span="3"> <span>包装方式</span></el-col><el-col :span="5"> <el-input placeholder="请输入内容"></el-input></el-col>
                </el-row>
                <el-row class="row_product">
                  <el-col :span="2"> <span>交货日期</span></el-col><el-col :span="5"> <el-input placeholder="请输入内容"></el-input></el-col>
                  <el-col :span="3"> <span>是否开票</span></el-col><el-col :span="5"> <el-input placeholder="请输入内容"></el-input></el-col>
                  <el-col :span="3"> <span>合同数量</span></el-col><el-col :span="5"> <el-input placeholder="请输入内容"></el-input></el-col>
                </el-row>
                <el-row class="row_product">
                  <el-col :span="2"> <span>销售单价</span></el-col><el-col :span="5"> <el-input placeholder="请输入内容"></el-input></el-col>
                  <el-col :span="3"> <span>默认供应商编号</span></el-col><el-col :span="5"> <el-input placeholder="请输入内容"></el-input></el-col>
                  <el-col :span="3"> <span>默认采购单价</span></el-col><el-col :span="5"> <el-input placeholder="请输入内容"></el-input></el-col>
                </el-row>
                <el-row class="row_product">
                  <el-col :span="2"> <span>默认采购总价</span></el-col><el-col :span="5"> <el-input placeholder="请输入内容"></el-input></el-col>
                  <el-col :span="3"> <span>总箱数</span></el-col><el-col :span="5"> <el-input placeholder="请输入内容"></el-input></el-col>
                  <el-col :span="3"> <span>总体积</span></el-col><el-col :span="5"> <el-input placeholder="请输入内容"></el-input></el-col>
                </el-row>
                <el-row class="row_product">
                  <el-col :span="2"> <span>总毛重</span></el-col><el-col :span="5"> <el-input placeholder="请输入内容"></el-input></el-col>
                  <el-col :span="3"> <span>总净重</span></el-col><el-col :span="5"> <el-input placeholder="请输入内容"></el-input></el-col>
                  <el-col :span="3"> <span>下单数量</span></el-col><el-col :span="5"> <el-input placeholder="请输入内容"></el-input></el-col>
                </el-row>
                <el-row class="row_product">
                  <el-col :span="2"> <span>未下单数量</span></el-col><el-col :span="5"> <el-input placeholder="请输入内容"></el-input></el-col>
                  <el-col :span="3"> <span>发货数量</span></el-col><el-col :span="5"> <el-input placeholder="请输入内容"></el-input></el-col>
                  <el-col :span="3"> <span>未发货数量</span></el-col><el-col :span="5"> <el-input placeholder="请输入内容"></el-input></el-col>
                </el-row>
              <el-row style="text-align: right;">
                <el-button type="primary" @click="cancelProduct">取消</el-button>
                <el-button type="primary" @click="saveProduct">保存</el-button>
              </el-row>
              </el-form>
            </el-row>
        </el-dialog>
      </el-main>
  </el-container>
</template>

<script>
  import {queryOrderProduct,queryOrderDetail}  from '@/api/modules/order'
  import Moment from 'moment'

  export default {
    data() {
      return {
        form:{
          name:""
        },
        dialogVisible : false,
        value4: '',
        dateValue :'2018-03-25 09:29:24',
        activeNames: ['1','3','5'],
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
        order:{},
        orderProduct:{},
        checkedRows:[],

      }
    },
    created:function () {
      const orderNumber = this.$route.query.orderNumber;
      // 详情查询
      if(orderNumber){
        queryOrderDetail(orderNumber).then(res=>{
          this.order = res;
          this.order.orderProducts = res.orderProductList;
        })
      }
    },
    methods:{
      // 表格前面的选择复选框，选择后将选中的行放入临时数据集合中
      tableSelect:function(selected,row){
        this.checkedRows.splice(0,this.checkedRows.length);
        for(var indx = 0 ; indx < selected.length;indx++){
          this.checkedRows.push(selected[indx]);
        }
      },
      // 时间日期格式转换
      dateFormat:function(cellValue){
        // ("YYYY-MM-DD HH:mm:ss");
        return Moment(cellValue).format("YYYY-MM-DD");
      },
      // 转换boolean类型为汉字
      convertBoolean:function(row, column, cellValue, index){
        return cellValue ? '是':'否';
      },
      // 新增销售订单产品信息（打开模态框）
      addProduct:function(){

        this.dialogVisible = true;
      },
      // 保存销售订单产品信息
      saveProduct:function(){
        this.order.orderProducts.push(this.orderProduct);
        this.orderProduct = {};
        this.dialogVisible = false;
      },
      // 取消销售订单产品信息的编辑
      cancelProduct:function(){
      this.$confirm('关闭后将不做任何操作，确认关闭？')
        .then(_ => {
          this.dialogVisible = false;
        })
        .catch(_ => {});
      },
      // 自带关闭销售订单窗口事件
      handleClose:function(done){

      },
      // 删除选中的元素
      delete_row:function() {
        console.log(this.checkedRows.length);
        if(this.checkedRows.length <= 0){
          this.$message({
            showClose: true,
            message: '请至少选择一条数据',
            type: 'warning'
          });
          return;
        }
        var needRemoveIndexArray = [];
        if(this.checkedRows.length <= 0){
          return ;
        }
        for(var i = 0; i< this.checkedRows.length;i++){
          for(var j = 0 ; j< this.orderDetail.length;j++){
            if(this.checkedRows[i].productCode == this.orderDetail[j].productCode){
              needRemoveIndexArray.push(j);
            }
          }
        }
        needRemoveIndexArray. reverse();
        for(var i = 0;i<needRemoveIndexArray.length;i++){
          this.orderDetail.splice(needRemoveIndexArray[i],1);
        }
        this.checkedRows.splice(0,this.checkedRows.length);
        this.$message({
          showClose: true,
          message: '删除成功~',
          type: 'success'
        });
      }
    }
  }
</script>

<style lang="stylus" >
  // 整体的背景色，以及元素直接的间距
  .d_orderDetail{
    background-color rgba(220, 220, 220, 0.51)
    .el-main,.el-footer,.el-header{
      padding 5px 10px
    }
  }

  // 下部内容展示样式
  .content_div{
    min-width 1200px
    display block
    border-radius 10px
    .el-input__icon{
      line-height 0px
    }
    .orderDeatail_content{
      padding 5px
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
    .el-collapse{
      // 设置行距
      .el-row{
        padding 10px 0px 10px 20px
        border: 1px solid #ebeef5;
      }
      .el-collapse-item__arrow{
        float none
        line-height 0px
      }
      .el-collapse-item__content{
        padding 2px
      }
      // 设置数据展示文本框样式
      .el-input__inner{
        height 30px
        width 170px
      }
      // 产品操作功能列表
      .div_product{
        border 1px solid gainsboro
        height 30px
        padding 2px 0px 0px 0px
        // 产品操作功能列表中的按钮样式
        .el-button{
          height 28px
          line-height 28px
          margin 0px 5px
          padding 0px 5px
          .iconfont{
            font-size 14px
            margin-right 5px
          }
        }
      }
    }
    // 订单产品弹出框样式
    .dialog_product{
      background-color rgba(228,231,237,0.239)
      // 标题样式
      .el-dialog__header{
        border 1px solid gainsboro
        padding 10px 0px
      }
      // 去除关闭叉叉
      .el-dialog__headerbtn{
        top -50px
      }
      // 输入框样式
      .el-input,.el-input__inner{
        height 30px
        width 170px
        margin 0px 10px
      }
      // 去除原本样式
      .el-dialog--center .el-dialog__body{
        padding 0px
      }
      .row_pro_content{
        background-color gainsboro
        padding 5px 2px

        .el-row{
          background-color white
          padding 5px
          border-bottom  gainsboro 1px solid
        }
        .row_product{
          span{
            float right
            line-height 30px
          }
        }
      }
      // 下方2个按钮
      .el-button{
        height 30px
        line-height 30px
        padding 0px
        width 80px
        span{
          float clear
        }
      }
    }
  }
</style>
