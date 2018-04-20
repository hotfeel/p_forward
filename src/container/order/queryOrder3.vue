<template>
  <div class="div_query">
    <el-row class="d_query_row">
      <c-top-query></c-top-query>
    </el-row>
    <el-row class="d_content_row">
      <el-table
        :data="tableDate"
        style="width: 100%"
        height="100%"
        border>
        <el-table-column
          fixed
          type="index"
          width="50">
        </el-table-column>
        <el-table-column
          fixed
          prop="orderNum"
          label="销售订单号"
          sortable
          width="150px">
        </el-table-column>
        <el-table-column
          prop="custCode"
          sortable
          label="客户编号"
          width="120">
        </el-table-column>
        <el-table-column
          prop="custShortName"
          sortable
          label="客户简称"
          width="120">
        </el-table-column>
        <el-table-column
          sortable
          prop="contractDate"
          label="合同日期"
          width="170">
        </el-table-column>
        <el-table-column
          prop="deliveryDate"
          label="交货日期"
          width="170">
        </el-table-column>
        <el-table-column
          prop="ownCompany"
          label="我方公司"
          width="120">
        </el-table-column>
        <el-table-column
          prop="currency"
          label="币种"
          width="120">
        </el-table-column>
        <el-table-column
          prop="courier"
          label="业务员"
          width="120">
        </el-table-column>
        <el-table-column
          prop="paymentWay"
          label="付款方式"
          width="120">
        </el-table-column>
        <el-table-column
          prop="totalGoodsValue"
          label="总货值"
          width="120">
        </el-table-column>
        <el-table-column
          prop="totalCost"
          label="费用合计"
          width="120">
        </el-table-column>
        <el-table-column
          prop="totalMoney"
          label="总金额"
          width="120">
        </el-table-column>
        <el-table-column
          prop="grossProfit"
          label="毛利金额"
          width="120">
        </el-table-column>
        <el-table-column
          prop="city"
          label="制单日期"
          width="120">
        </el-table-column>
        <el-table-column
          prop="city"
          label="制单人"
          width="120">
        </el-table-column>
      </el-table>
    </el-row>
    <el-row class="d_pagination_row">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </el-row>
  </div>
</template>

<script>
  import CTopQuery from '@/components/m_common/topQuery'

  export  default {
    data() {
      return {
        index : "",
        tableDate:[
          {
            sortNum:"1",
            orderNum:'A1232345234534',
            custCode:'AXDF8846675',
            custShortName:'李魁',
            contractDate:'2018-04-11 14:38:03',
            deliveryDate:'2018-04-16 15:14:32',
            ownCompany:'阿里巴巴',
            currency:'人民币',
            courier:'杨志',
            paymentWay:'现金',
            totalGoodsValue:'5034',
            totalCost:'2467',
            totalMoney:'48966',
            grossProfit:'1084',
            createDate:'2018-04-05 08:09:12',
            creator:'宋江'
          },{
            orderNum:'A1116224344D',
            custCode:'AXDF8846675',
            custShortName:'李魁',
            contractDate:'2018-04-11 14:38:03',
            deliveryDate:'2018-04-16 15:14:32',
            ownCompany:'阿里巴巴',
            currency:'人民币',
            courier:'杨志',
            paymentWay:'现金',
            totalGoodsValue:'5034',
            totalCost:'2467',
            totalMoney:'48966',
            grossProfit:'1084',
            createDate:'2018-04-05 08:09:12',
            creator:'宋江'
          },{
            orderNum:'A1254753523423',
            custCode:'AXDF8846675',
            custShortName:'李魁',
            contractDate:'2018-04-11 14:38:03',
            deliveryDate:'2018-04-16 15:14:32',
            ownCompany:'阿里巴巴',
            currency:'人民币',
            courier:'杨志',
            paymentWay:'现金',
            totalGoodsValue:'5034',
            totalCost:'2467',
            totalMoney:'48966',
            grossProfit:'1084',
            createDate:'2018-04-05 08:09:12',
            creator:'宋江'
          },{
            orderNum:'A123523534673',
            custCode:'AXDF8846675',
            custShortName:'李魁',
            contractDate:'2018-04-11 14:38:03',
            deliveryDate:'2018-04-16 15:14:32',
            ownCompany:'阿里巴巴',
            currency:'人民币',
            courier:'杨志',
            paymentWay:'现金',
            totalGoodsValue:'5034',
            totalCost:'2467',
            totalMoney:'48966',
            grossProfit:'1084',
            createDate:'2018-04-05 08:09:12',
            creator:'宋江'
          },{
            orderNum:'A123019S234FASD',
            custCode:'AXDF8846675',
            custShortName:'李魁',
            contractDate:'2018-04-11 14:38:03',
            deliveryDate:'2018-04-16 15:14:32',
            ownCompany:'阿里巴巴',
            currency:'人民币',
            courier:'杨志',
            paymentWay:'现金',
            totalGoodsValue:'5034',
            totalCost:'2467',
            totalMoney:'48966',
            grossProfit:'1084',
            createDate:'2018-04-05 08:09:12',
            creator:'宋江'
          },{
            orderNum:'A123019S234FASD',
            custCode:'AXDF8846675',
            custShortName:'李魁',
            contractDate:'2018-04-11 14:38:03',
            deliveryDate:'2018-04-16 15:14:32',
            ownCompany:'阿里巴巴',
            currency:'人民币',
            courier:'杨志',
            paymentWay:'现金',
            totalGoodsValue:'5034',
            totalCost:'2467',
            totalMoney:'48966',
            grossProfit:'1084',
            createDate:'2018-04-05 08:09:12',
            creator:'宋江'
          },{
            orderNum:'A123019S234FASD',
            custCode:'AXDF8846675',
            custShortName:'李魁',
            contractDate:'2018-04-11 14:38:03',
            deliveryDate:'2018-04-16 15:14:32',
            ownCompany:'阿里巴巴',
            currency:'人民币',
            courier:'杨志',
            paymentWay:'现金',
            totalGoodsValue:'5034',
            totalCost:'2467',
            totalMoney:'48966',
            grossProfit:'1084',
            createDate:'2018-04-05 08:09:12',
            creator:'宋江'
          },{
            orderNum:'A123019S234FASD',
            custCode:'AXDF8846675',
            custShortName:'李魁',
            contractDate:'2018-04-11 14:38:03',
            deliveryDate:'2018-04-16 15:14:32',
            ownCompany:'阿里巴巴',
            currency:'人民币',
            courier:'杨志',
            paymentWay:'现金',
            totalGoodsValue:'5034',
            totalCost:'2467',
            totalMoney:'48966',
            grossProfit:'1084',
            createDate:'2018-04-05 08:09:12',
            creator:'宋江'
          },{
            orderNum:'A123019S234FASD',
            custCode:'AXDF8846675',
            custShortName:'李魁',
            contractDate:'2018-04-11 14:38:03',
            deliveryDate:'2018-04-16 15:14:32',
            ownCompany:'阿里巴巴',
            currency:'人民币',
            courier:'杨志',
            paymentWay:'现金',
            totalGoodsValue:'5034',
            totalCost:'2467',
            totalMoney:'48966',
            grossProfit:'1084',
            createDate:'2018-04-05 08:09:12',
            creator:'宋江'
          },{
            orderNum:'A123019S234FASD',
            custCode:'AXDF8846675',
            custShortName:'李魁',
            contractDate:'2018-04-11 14:38:03',
            deliveryDate:'2018-04-16 15:14:32',
            ownCompany:'阿里巴巴',
            currency:'人民币',
            courier:'杨志',
            paymentWay:'现金',
            totalGoodsValue:'5034',
            totalCost:'2467',
            totalMoney:'48966',
            grossProfit:'1084',
            createDate:'2018-04-05 08:09:12',
            creator:'宋江'
          },{
            orderNum:'A123019S234FASD',
            custCode:'AXDF8846675',
            custShortName:'李魁',
            contractDate:'2018-04-11 14:38:03',
            deliveryDate:'2018-04-16 15:14:32',
            ownCompany:'阿里巴巴',
            currency:'人民币',
            courier:'杨志',
            paymentWay:'现金',
            totalGoodsValue:'5034',
            totalCost:'2467',
            totalMoney:'48966',
            grossProfit:'1084',
            createDate:'2018-04-05 08:09:12',
            creator:'宋江'
          },{
            orderNum:'A123019S234FASD',
            custCode:'AXDF8846675',
            custShortName:'李魁',
            contractDate:'2018-04-11 14:38:03',
            deliveryDate:'2018-04-16 15:14:32',
            ownCompany:'阿里巴巴',
            currency:'人民币',
            courier:'杨志',
            paymentWay:'现金',
            totalGoodsValue:'5034',
            totalCost:'2467',
            totalMoney:'48966',
            grossProfit:'1084',
            createDate:'2018-04-05 08:09:12',
            creator:'宋江'
          },{
            orderNum:'A123019S234FASD',
            custCode:'AXDF8846675',
            custShortName:'李魁',
            contractDate:'2018-04-11 14:38:03',
            deliveryDate:'2018-04-16 15:14:32',
            ownCompany:'阿里巴巴',
            currency:'人民币',
            courier:'杨志',
            paymentWay:'现金',
            totalGoodsValue:'5034',
            totalCost:'2467',
            totalMoney:'48966',
            grossProfit:'1084',
            createDate:'2018-04-05 08:09:12',
            creator:'宋江'
          },{
            orderNum:'A123019S234FASD',
            custCode:'AXDF8846675',
            custShortName:'李魁',
            contractDate:'2018-04-11 14:38:03',
            deliveryDate:'2018-04-16 15:14:32',
            ownCompany:'阿里巴巴',
            currency:'人民币',
            courier:'杨志',
            paymentWay:'现金',
            totalGoodsValue:'5034',
            totalCost:'2467',
            totalMoney:'48966',
            grossProfit:'1084',
            createDate:'2018-04-05 08:09:12',
            creator:'宋江'
          },{
            orderNum:'A123019S234FASD',
            custCode:'AXDF8846675',
            custShortName:'李魁',
            contractDate:'2018-04-11 14:38:03',
            deliveryDate:'2018-04-16 15:14:32',
            ownCompany:'阿里巴巴',
            currency:'人民币',
            courier:'杨志',
            paymentWay:'现金',
            totalGoodsValue:'5034',
            totalCost:'2467',
            totalMoney:'48966',
            grossProfit:'1084',
            createDate:'2018-04-05 08:09:12',
            creator:'宋江'
          },{
            orderNum:'A123019S234FASD',
            custCode:'AXDF8846675',
            custShortName:'李魁',
            contractDate:'2018-04-11 14:38:03',
            deliveryDate:'2018-04-16 15:14:32',
            ownCompany:'阿里巴巴',
            currency:'人民币',
            courier:'杨志',
            paymentWay:'现金',
            totalGoodsValue:'5034',
            totalCost:'2467',
            totalMoney:'48966',
            grossProfit:'1084',
            createDate:'2018-04-05 08:09:12',
            creator:'宋江'
          },{
            orderNum:'A123019S234FASD',
            custCode:'AXDF8846675',
            custShortName:'李魁',
            contractDate:'2018-04-11 14:38:03',
            deliveryDate:'2018-04-16 15:14:32',
            ownCompany:'阿里巴巴',
            currency:'人民币',
            courier:'杨志',
            paymentWay:'现金',
            totalGoodsValue:'5034',
            totalCost:'2467',
            totalMoney:'48966',
            grossProfit:'1084',
            createDate:'2018-04-05 08:09:12',
            creator:'宋江'
          },{
            orderNum:'A123019S234FASD',
            custCode:'AXDF8846675',
            custShortName:'李魁',
            contractDate:'2018-04-11 14:38:03',
            deliveryDate:'2018-04-16 15:14:32',
            ownCompany:'阿里巴巴',
            currency:'人民币',
            courier:'杨志',
            paymentWay:'现金',
            totalGoodsValue:'5034',
            totalCost:'2467',
            totalMoney:'48966',
            grossProfit:'1084',
            createDate:'2018-04-05 08:09:12',
            creator:'宋江'
          },{
            orderNum:'A123019S234FASD',
            custCode:'AXDF8846675',
            custShortName:'李魁',
            contractDate:'2018-04-11 14:38:03',
            deliveryDate:'2018-04-16 15:14:32',
            ownCompany:'阿里巴巴',
            currency:'人民币',
            courier:'杨志',
            paymentWay:'现金',
            totalGoodsValue:'5034',
            totalCost:'2467',
            totalMoney:'48966',
            grossProfit:'1084',
            createDate:'2018-04-05 08:09:12',
            creator:'宋江'
          },{
            orderNum:'A123019S234FASD',
            custCode:'AXDF8846675',
            custShortName:'李魁',
            contractDate:'2018-04-11 14:38:03',
            deliveryDate:'2018-04-16 15:14:32',
            ownCompany:'阿里巴巴',
            currency:'人民币',
            courier:'杨志',
            paymentWay:'现金',
            totalGoodsValue:'5034',
            totalCost:'2467',
            totalMoney:'48966',
            grossProfit:'1084',
            createDate:'2018-04-05 08:09:12',
            creator:'宋江'
          },{
            orderNum:'A123019S234FASD',
            custCode:'AXDF8846675',
            custShortName:'李魁',
            contractDate:'2018-04-11 14:38:03',
            deliveryDate:'2018-04-16 15:14:32',
            ownCompany:'阿里巴巴',
            currency:'人民币',
            courier:'杨志',
            paymentWay:'现金',
            totalGoodsValue:'5034',
            totalCost:'2467',
            totalMoney:'48966',
            grossProfit:'1084',
            createDate:'2018-04-05 08:09:12',
            creator:'宋江'
          }
        ]
      }
    },
    components:{
      CTopQuery
    }
  }
</script>
<style scoped lang="stylus" >
  .div_query{
    height 95%
  }
  .d_content_row{
    height 93%
  }
  .el-table__header-wrapper cell{
    padding: 5px 0px;
    font-size: 16px;
    font-weight: 700;
    color: black;
  }
.d_pagination_row{
  text-align center
  border-bottom 1px solid gainsboro
  padding 5px 0px
}
</style>
