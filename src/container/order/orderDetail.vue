<template>
  <el-container class="d_orderDetail">
    <el-header style="height: 50px;">
      <el-row class="e_row_header e_common">
        <el-button icon="el-icon-back" class="btn_common" @click="backToOrder">返回</el-button>
        <el-button icon="iconfont icon-baocun" class="btn_common" @click="saveOrder">保存</el-button>
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
              <el-col :span="1" class="col_span">  <label>客户订单号</label></el-col><el-col :span="4">  <el-input :readonly = "readOnly" v-model="order.custOrderNumber">  </el-input></el-col>
              <el-col :span="1" class="col_span">  <label>交货日期</label></el-col><el-col :span="4">  <el-date-picker :readonly = "readOnly"  v-model="order.deliveryDate" type="date"/></el-col>
              <el-col :span="1" class="col_span">  <label>我方公司</label></el-col><el-col :span="4">  <el-input :readonly = "readOnly" v-model="order.ownCompany">  </el-input></el-col>
              <el-col :span="1" class="col_span">  <label>币种</label></el-col><el-col :span="4">  <el-input :readonly = "readOnly" v-model="order.currency">  </el-input></el-col>
            </el-row>
            <el-row>
              <el-col :span="1" class="col_span">  <label>汇率</label></el-col><el-col :span="4">  <el-input :readonly = "readOnly" v-model="order.exchargeRate">  </el-input></el-col>
              <el-col :span="1" class="col_span">  <label>保险比率</label></el-col><el-col :span="4">  <el-input :readonly = "readOnly" v-model="order.insuranceRatio">  </el-input></el-col>
              <el-col :span="1" class="col_span">  <label>佣金比率</label></el-col><el-col :span="4">  <el-input :readonly = "readOnly"  v-model="order.commissionRatio">  </el-input></el-col>
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
              <el-col :span="1" class="col_span">  <label>签约地点</label></el-col><el-col :span="4">  <el-input :readonly = "readOnly" v-model="order.contractAddress">  </el-input></el-col>
              <el-col :span="1" class="col_span">  <label>运输方式</label></el-col><el-col :span="4">  <el-input :readonly = "readOnly" v-model="order.transWay">  </el-input></el-col>
              <el-col :span="1" class="col_span">  <label>交货地点</label></el-col><el-col :span="4">  <el-input :readonly = "readOnly" v-model="order.deliveryAddress">  </el-input></el-col>
            </el-row>
            <el-row>
              <el-col :span="1" class="col_span">  <label>费用承担</label></el-col><el-col :span="4">  <el-input :readonly = "readOnly" v-model="order.chargeBear">  </el-input></el-col>
              <el-col :span="1" class="col_span">  <label>包装要求</label></el-col><el-col :span="4">  <el-input :readonly = "readOnly" v-model="order.bagRequire">  </el-input></el-col>
              <el-col :span="1" class="col_span">  <label>品质保证</label></el-col><el-col :span="4">  <el-input :readonly = "readOnly" v-model="order.qualityAss">  </el-input></el-col>
              <el-col :span="1" class="col_span">  <label>违约责任</label></el-col><el-col :span="4">  <el-input :readonly = "readOnly" v-model="order.liability">  </el-input></el-col>
            </el-row>
            <el-row>
              <el-col :span="1" class="col_span">  <label>合同纠纷</label></el-col><el-col :span="4">  <el-input :readonly = "readOnly" v-model="order.contractDispute">  </el-input></el-col>
            </el-row>
          </el-collapse-item>
          <el-collapse-item title="订单产品明细" name="3">
            <div class="div_product">
              <el-button icon="iconfont icon-xinzeng" class="btn_fun" @click="addProduct">新建</el-button>
              <el-button icon="iconfont icon-xinzeng" class="btn_fun"  @click="copyProduct">复制</el-button>
              <el-button icon="el-icon-edit" class="btn_fun"  @click="editProduct">编辑</el-button>
              <el-button icon="el-icon-delete" class="btn_fun" @click="deleteRowProduct">删除</el-button>
            </div>
            <el-table :data="order.orderProductList" border style="width: 100%" ref="productTable"
                      @select="tableSelectProduct" :row-class-name="tableRowClassName">
              <el-table-column fixed type="selection" width="35"></el-table-column>
              <el-table-column type="index" v-if="false"></el-table-column>
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
            <div class="div_product">
              <el-button icon="iconfont icon-xinzeng" class="btn_fun" @click="addCharge">新建</el-button>
              <el-button icon="iconfont icon-xinzeng" class="btn_fun"  @click="copyCharge">复制</el-button>
              <el-button icon="el-icon-edit" class="btn_fun"  @click="editCharge">编辑</el-button>
              <el-button icon="el-icon-delete" class="btn_fun" @click="deleteRowCharge">删除</el-button>
            </div>
            <el-table :data="order.orderChargeList" border style="width: 100%" @select="tableSelectCharge" :row-class-name="tableRowClassName">
              <el-table-column fixed type="selection" width="35"></el-table-column>
              <el-table-column prop="chargeName" label="费用名称" width="120"></el-table-column>
              <el-table-column prop="chargeMoney" label="金额" width="120"></el-table-column>
              <el-table-column prop="description" label="备注"> </el-table-column>
            </el-table>
          </el-collapse-item>
          <el-collapse-item title="合计信息" name="5">
            <el-row class="total_el">
              <el-col :span="1" class="col_span"><label>总货值(元)</label></el-col><el-col :span="4"><el-input :readonly = "readOnly"/></el-col>
              <el-col :span="1" class="col_span d_t_span"><label>总数量</label></el-col>
              <el-col :span="4"><el-input :readonly = "readOnly"></el-input></el-col>
              <el-col :span="1" class="col_span d_t_span"><label>总箱数</label></el-col>
              <el-col :span="4"><el-input :readonly = "readOnly"></el-input></el-col>
              <el-col :span="1" class="col_span"><label>总毛重(kg)</label></el-col>
              <el-col :span="4"><el-input :readonly = "readOnly"></el-input></el-col>
            </el-row>
            <el-row>
              <el-col :span="1" class="col_span"><label>总净重(kg)</label></el-col>
              <el-col :span="4"><el-input :readonly = "readOnly"></el-input></el-col>
              <el-col :span="1" class="col_span d_t_span"><label>总体积(立方)</label></el-col>
              <el-col :span="4"><el-input :readonly = "readOnly"></el-input></el-col>
              <el-col :span="1" class="col_span d_t_span"><label>费用合计(元)</label></el-col>
              <el-col :span="4"><el-input :readonly = "readOnly"></el-input></el-col>
              <el-col :span="1" class="col_span"><label>总金额(元)</label></el-col>
              <el-col :span="4"><el-input :readonly = "readOnly"></el-input></el-col>
            </el-row>
          </el-collapse-item>
        </el-collapse>
      </el-row>
      <!--新增产品订单信息-->
      <el-dialog
        title="产品信息"
        :visible.sync="product_dialogVisible"
        width="70%"
        center
        :before-close="handleClose" class="dialog_product">
        <el-row class="row_pro_content">
          <el-form ref="form" :model="form">
            <el-row v-if="false">
              <el-col :span="0"><span>ID</span> </el-col> <el-col :span="5"><el-input v-model="orderProduct.id"></el-input></el-col>
              <el-col :span="0"><span>orderNumber</span> </el-col> <el-col :span="5"><el-input v-model="orderProduct.orderNumber"></el-input></el-col>
              <el-col :span="0"><span>index</span> </el-col> <el-col :span="5"><el-input v-model="orderProduct.index"></el-input></el-col>
            </el-row>
            <el-row class="row_product">
              <el-col :span="2"><span>中文名称</span> </el-col> <el-col :span="5"><el-input v-model="orderProduct.name"></el-input></el-col>
              <el-col :span="3"><span>英文名称</span> </el-col> <el-col :span="5"><el-input v-model="orderProduct.enName"></el-input> </el-col>
              <el-col :span="3"><span>产品编码</span> </el-col> <el-col :span="5"><el-input v-model="orderProduct.code"></el-input> </el-col>
            </el-row>
            <el-row class="row_product">
              <el-col :span="2"><span>型号规格</span> </el-col> <el-col :span="5"><el-input v-model="orderProduct.model"></el-input> </el-col>
              <el-col :span="3"><span>产品描述</span> </el-col> <el-col :span="5"><el-input v-model="orderProduct.description"></el-input> </el-col>
              <el-col :span="3"><span>品牌</span> </el-col> <el-col :span="5"><el-input v-model="orderProduct.brand"></el-input> </el-col>
            </el-row>
            <el-row class="row_product">
              <el-col :span="2"> <span>净重</span></el-col><el-col :span="5"> <el-input v-model="orderProduct.netWeight"></el-input></el-col>
              <el-col :span="3"> <span>毛重</span></el-col><el-col :span="5"> <el-input v-model="orderProduct.roughWeight"></el-input></el-col>
              <el-col :span="3"> <span>单位</span></el-col><el-col :span="5"> <el-input v-model="orderProduct.unit"></el-input></el-col>
            </el-row><el-row class="row_product">
            <el-col :span="2"> <span>产品尺寸</span></el-col><el-col :span="5"> <el-input v-model="orderProduct.size"></el-input></el-col>
            <el-col :span="3"><span>外箱重量</span></el-col><el-col :span="5"> <el-input v-model="orderProduct.outBoxWeight"></el-input></el-col>
            <el-col :span="3"> <span>外箱宽度</span></el-col><el-col :span="5"> <el-input v-model="orderProduct.outBoxWidth"></el-input></el-col>
          </el-row>
            <el-row class="row_product">
              <el-col :span="2"> <span>外箱体积</span></el-col><el-col :span="5"> <el-input v-model="orderProduct.outBoxVolume"></el-input></el-col>
              <el-col :span="3"> <span>客户货号</span></el-col><el-col :span="5"> <el-input v-model="orderProduct.freightNum"></el-input></el-col>
              <el-col :span="3"> <span>包装方式</span></el-col><el-col :span="5"> <el-input v-model="orderProduct.packageMethod"></el-input></el-col>
            </el-row>
            <el-row class="row_product">
              <el-col :span="2"> <span>交货日期</span></el-col><el-col :span="5"> <el-date-picker v-model="orderProduct.deliveryDate" type="date"/></el-col>
              <el-col :span="3"> <span>是否开票</span></el-col><el-col :span="5"> <el-select v-model="orderProduct.ticket"><el-option label="是" :value="true"></el-option><el-option label="否" :value="false"></el-option></el-select></el-col>
              <el-col :span="3"> <span>合同数量</span></el-col><el-col :span="5"> <el-input v-model="orderProduct.dealCount"></el-input></el-col>
            </el-row>
            <el-row class="row_product">
              <el-col :span="2"> <span>销售单价</span></el-col><el-col :span="5"> <el-input v-model="orderProduct.salePrice"></el-input></el-col>
              <el-col :span="3"> <span>供应商编号</span></el-col><el-col :span="5"> <el-input v-model="orderProduct.supplierNum"></el-input></el-col>
              <el-col :span="3"> <span>采购单价</span></el-col><el-col :span="5"> <el-input v-model="orderProduct.purchasePrice"></el-input></el-col>
            </el-row>
            <el-row class="row_product">
              <el-col :span="2"> <span>采购总价</span></el-col><el-col :span="5"> <el-input v-model="orderProduct.purchaseTotalPrice"></el-input></el-col>
              <el-col :span="3"> <span>总箱数</span></el-col><el-col :span="5"> <el-input v-model="orderProduct.totalBox"></el-input></el-col>
              <el-col :span="3"> <span>总体积</span></el-col><el-col :span="5"> <el-input v-model="orderProduct.totalVolume"></el-input></el-col>
            </el-row>
            <el-row class="row_product">
              <el-col :span="2"> <span>总毛重</span></el-col><el-col :span="5"> <el-input v-model="orderProduct.totalRoughWeight"></el-input></el-col>
              <el-col :span="3"> <span>总净重</span></el-col><el-col :span="5"> <el-input v-model="orderProduct.totalNetWeight"></el-input></el-col>
              <el-col :span="3"> <span>下单数量</span></el-col><el-col :span="5"> <el-input v-model="orderProduct.orderCount"></el-input></el-col>
            </el-row>
            <el-row class="row_product">
              <el-col :span="2"> <span>未下单数量</span></el-col><el-col :span="5"> <el-input v-model="orderProduct.noOrderCount"></el-input></el-col>
              <el-col :span="3"> <span>发货数量</span></el-col><el-col :span="5"> <el-input v-model="orderProduct.sendCount"></el-input></el-col>
              <el-col :span="3"> <span>未发货数量</span></el-col><el-col :span="5"> <el-input v-model="orderProduct.unsentCount"></el-input></el-col>
            </el-row>
            <el-row style="text-align: right;">
              <el-button type="primary" @click="cancelProduct">取消</el-button>
              <el-button type="primary" @click="saveProduct">保存</el-button>
            </el-row>
          </el-form>
        </el-row>
      </el-dialog>

      <!--新增费用明细信息-->
      <el-dialog
        title="费用信息"
        :visible.sync="charge_dialogVisible"
        width="70%"
        center
        :before-close="handleClose" class="dialog_product">
        <el-row class="row_pro_content">
          <el-form ref="form" :model="form">
            <el-row v-if="false"> <!-- v-if="false">-->
              <el-col :span="0"><span>ID</span> </el-col> <el-col :span="5"><el-input v-model="orderCharge.id"></el-input></el-col>
              <el-col :span="0"><span>orderNumber</span> </el-col> <el-col :span="5"><el-input v-model="orderCharge.orderNumber"></el-input></el-col>
              <el-col :span="0"><span>index</span> </el-col> <el-col :span="5"><el-input v-model="orderCharge.index"></el-input></el-col>
            </el-row>
            <el-row class="row_product">
              <el-col :span="2"><span>费用名称</span> </el-col> <el-col :span="5"><el-input v-model="orderCharge.chargeName"></el-input></el-col>
              <el-col :span="3"><span>金额</span> </el-col> <el-col :span="5"><el-input v-model="orderCharge.chargeMoney"></el-input> </el-col>
              <el-col :span="3"><span>描述</span> </el-col> <el-col :span="5"><el-input v-model="orderCharge.description"></el-input> </el-col>
            </el-row>
            <el-row style="text-align: right;">
              <el-button type="primary" @click="cancelCharge">取消</el-button>
              <el-button type="primary" @click="saveCharge">保存</el-button>
            </el-row>
          </el-form>
        </el-row>
      </el-dialog>
    </el-main>
  </el-container>
</template>

<script>
  import {queryOrderDetail,saveOrder,deleteOrderProducts,deleteOrderCharges}  from '@/api/modules/order'
  import Moment from 'moment'

  export default {
    data() {
      return {
        form:{
          name:""
        },
        product_dialogVisible : false,
        charge_dialogVisible:false,
        value4: '',
        dateValue :'2018-03-25 09:29:24',
        activeNames: ['1','3','5'],
        readOnly : false,
        order:{},
        orderProduct:{},
        orderCharge:{},
        checkedRowsProduct:[],
        checkedRowsCharge:[]
      }
    },
    computed:{
      isTicket:function () {
        return this.orderProduct.ticket ? '是':'否';
      }
    },
    created:function () {
      const orderNumber = this.$route.query.orderNumber;
      // 详情查询
      if(orderNumber){
        queryOrderDetail(orderNumber).then(res=>{
          this.order = res;
          // 为每条产品信息复制index下标，方便后期操作
          if(this.order.orderProductList){
            for(var i =0 ;i< this.order.orderProductList.length;i++){
              this.order.orderProductList[i].index = i;
            }
          }
          // 为每条订单费用信息复制Index下标，方便后期操作
          if(this.order.orderChargeList){
            for(var i =0 ;i<this.order.orderChargeList.length;i++){
              this.order.orderChargeList[i].index = i;
            }
          }
        })
      }
    },
    methods:{
      // 表格的类样式方法，本处用来存储每条数据的index
      tableRowClassName({row, rowIndex}){
        row.index = rowIndex;
      },
      // 时间日期格式转换
      dateFormat:function(row, column, cellValue, index){
        // ("YYYY-MM-DD HH:mm:ss");
        if(cellValue){
          return Moment(cellValue).format("YYYY-MM-DD");
        }else{
          return "";
        }
      },
      // 转换boolean类型为汉字
      convertBoolean:function(row, column, cellValue, index){
        if(cellValue){
          return cellValue ? '是':'否';
        }else{
          return "";
        }
      },
      // 返回上一页
      backToOrder:function(){
        this.$router.push({name:'queryOrder'});
      },
      // 订单产品表格前面的选择复选框，选择后将选中的行放入临时数据集合中
      tableSelectProduct:function(selected,row){
        this.checkedRowsProduct.length = 0;
        for(var indx = 0 ; indx < selected.length;indx++){
          this.checkedRowsProduct.push(selected[indx]);
        }
      },
      // 新增销售订单产品信息（打开模态框）
      addProduct:function(){
        this.orderProduct.orderNumber = this.order.orderNumber;
        this.product_dialogVisible = true;
      },
      // 保存销售订单产品信息
      saveProduct:function(){
        // 没有index，则是新增数据
        if(this.orderProduct.index == '' || this.orderProduct.index == undefined){
          this.order.orderProductList.push(this.orderProduct);
        }
        // 有ID一般为修改
        else{
          this.order.orderProductList.index = this.order.orderProductList.length;
          this.order.orderProductList.splice(this.orderProduct.index,1);
          this.order.orderProductList.splice(this.orderProduct.index,0,JSON.parse(JSON.stringify(this.orderProduct)));
        }
        this.orderProduct = {};
        this.product_dialogVisible = false;
      },
      // 编辑订单产品信息
      editProduct:function () {
        if(this.checkedRowsProduct.length != 1){
          this.$message({
            showClose: true,
            message: '请选择一条数据',
            type: 'warning'
          });
          return;
        } else{
          this.orderProduct = JSON.parse(JSON.stringify(this.checkedRowsProduct[0]));
          this.product_dialogVisible = true;
        }
      },
      // 复制销售订单产品信息
      copyProduct:function () {
        if(this.checkedRowsProduct.length != 1){
          this.$message({
            showClose: true,
            message: '请选择一条数据',
            type: 'warning'
          });
        }else{
          this.orderProduct = JSON.parse(JSON.stringify(this.checkedRowsProduct[0]));
          this.orderProduct.id = '';
          this.orderProduct.index = '';
          this.product_dialogVisible = true;
        }
      },
      // 取消销售订单产品信息的编辑
      cancelProduct:function(){
        this.$confirm('关闭后将不做任何操作，确认关闭？')
          .then(_ => {
            this.product_dialogVisible = false;
            this.orderProduct = {};
          })
          .catch(_ => {});
      },
      // 自带关闭销售订单窗口事件
      handleClose:function(done){

      },
      // 删除选中的元素
      deleteRowProduct:function() {
        if(this.checkedRowsProduct.length <= 0){
          this.$message({
            showClose: true,
            message: '请至少选择一条数据',
            type: 'warning'
          });
          return;
        }
        // 给出确认删除的提示
        else{
          this.$confirm('此删除操作将即时生效, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            // 保存需要后台删除数据的Id集合
            const idList = [];
            // 先从页面上去除数据
            for(var i = this.checkedRowsProduct.length -1 ; i>= 0;i--){
              if(this.checkedRowsProduct[i].id){
                idList.push(this.checkedRowsProduct[i].id);
              }
              if(this.checkedRowsProduct[i].index >= 0){
                this.order.orderProductList.splice(this.checkedRowsProduct[i].index,1);
              }
            }
            this.checkedRowsProduct.splice(0,this.checkedRowsProduct.length);
            // 调用后台删除数据
            if(idList != null && idList.length > 0){
              deleteOrderProducts(idList);
            }
            this.$message({
              showClose: true,
              message: '删除成功~',
              type: 'success'
            });
          }).catch(() => {
            return;
          });
        }
      },

      // 订单费用表格前面的选择复选框，
      tableSelectCharge:function (selected,row){
        this.checkedRowsCharge.length = 0;
        for(var indx = 0 ; indx < selected.length;indx++){
          this.checkedRowsCharge.push(selected[indx]);
        }
      },
      // 订单费用表格前面的选择复选框，选择后将选中的行放入临时数据集合中
      tableSelectCharge:function(selected,row){
        this.checkedRowsCharge.length = 0;
        for(var indx = 0 ; indx < selected.length;indx++){
          this.checkedRowsCharge.push(selected[indx]);
        }
      },
      // 新增销售订单费用信息（打开模态框）
      addCharge:function(){
        this.orderCharge.orderNumber = this.order.orderNumber;
        this.charge_dialogVisible = true;
      },
      // 保存销售订单费用信息
      saveCharge:function(){
        console.log("保存销售订单费用");
        console.log(this.orderCharge);
     // 没有index，则是新增数据
        if(this.orderCharge.index == '' || this.orderCharge.index == undefined){
          this.orderCharge.index = this.order.orderChargeList.length;
          this.order.orderChargeList.push(this.orderCharge);
        }
          // 有index一般为修改
        else{
          this.order.orderChargeList.splice(this.orderCharge.index,1);
          this.order.orderChargeList.splice(this.orderCharge.index,0,JSON.parse(JSON.stringify(this.orderCharge)));
        }
        this.orderCharge = {};
        this.charge_dialogVisible = false;
      },
      // 编辑订单费用信息
      editCharge:function () {
        if(this.checkedRowsCharge.length != 1){
          this.$message({
            showClose: true,
            message: '请选择一条数据',
            type: 'warning'
          });
          return;
        } else{
          this.orderCharge = JSON.parse(JSON.stringify(this.checkedRowsCharge[0]));
          this.charge_dialogVisible = true;
        }
      },
      // 复制销售订单费用信息
      copyCharge:function () {
        if(this.checkedRowsCharge.length != 1){
          this.$message({
            showClose: true,
            message: '请选择一条数据',
            type: 'warning'
          });
        }else{
          this.orderCharge = JSON.parse(JSON.stringify(this.checkedRowsCharge[0]));
          this.orderCharge.id = '';
          this.orderCharge.index = '';
          this.charge_dialogVisible = true;
        }
      },
      // 取消销售订单费用信息的编辑
      cancelCharge:function(){
        this.$confirm('关闭后将不做任何操作，确认关闭？')
          .then(_ => {
            this.charge_dialogVisible = false;
            this.orderCharge = {};
          })
          .catch(_ => {});
      },
      // 自带关闭销售订单窗口事件
      handleClose:function(done){

      },
      // 删除选中的元素
      deleteRowCharge:function() {
        if(this.checkedRowsCharge.length <= 0){
          this.$message({
            showClose: true,
            message: '请至少选择一条数据',
            type: 'warning'
          });
          return;
        }
        // 给出确认删除的提示
        else{
          this.$confirm('此删除操作将即时生效, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            // 保存需要后台删除数据的Id集合
            const idList = [];
            // 先从页面上去除数据
            for(var i = this.checkedRowsCharge.length -1 ; i>= 0;i--){
              if(this.checkedRowsCharge[i].id){
                idList.push(this.checkedRowsCharge[i].id);
              }
              if(this.checkedRowsCharge[i].index >= 0){
                this.order.orderChargeList.splice(this.checkedRowsCharge[i].index,1);
              }
            }
            this.checkedRowsCharge.splice(0,this.checkedRowsCharge.length);
            // 调用后台删除数据
            if(idList != null && idList.length > 0){
              deleteOrderCharges(idList);
            }
            this.$message({
              showClose: true,
              message: '删除成功~',
              type: 'success'
            });
          }).catch(() => {
            return;
          });
        }
      },
      // 保存订单产品信息
      saveOrder:function(){
        saveOrder(this.order).then(res=>{
          if(res.status == 0){
            this.$message({
              showClose: true,
              message: '保存成功~',
              type: 'success'
            });
            this.$router.push({name:'queryOrder'});
          }
        })
      }







      /*// 新增费用信息(按钮)
      addCharge:function () {
        this.orderCharge.orderNumber = this.order.orderNumber;
        this.charge_dialogVisible =true;
      },
      // 复制订单费用信息(按钮)
      copyCharge:function () {
        if(this.checkedRowsCharge.length != 1){
          this.$message({
            showClose: true,
            message: '请选择一条数据',
            type: 'warning'
          });
        }else{
          this.orderCharge = JSON.parse(JSON.stringify(this.checkedRowsCharge[0]));
          this.orderCharge.id = '';
          this.product_dialogVisible = true;
        }
      },
      // 关闭费用信息模态框
      cancelCharge:function () {
        this.$confirm('关闭后将不做任何操作，确认关闭？')
          .then(_ => {
            this.charge_dialogVisible = false;
            this.orderCharge = {};
          })
          .catch(_ => {});
      },
      // 保存费用信息
      saveCharge:function () {
        // 存在ID则是修改
        if(this.orderCharge.id){

        }
        // 不存在ID则是新增
        else{
          addCharge(this.orderCharge).then(res=>{
            this.$message({
              showClose: true,
              message: '保存成功~',
              type: 'success'
            });
            this.charge_dialogVisible = false;
            this.order.orderChargeList.push(this.orderCharge);
            this.orderCharge = {};
          })
        }
      }*/
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
