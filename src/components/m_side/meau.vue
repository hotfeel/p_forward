<template>
  <el-row class="tac">
    <el-col :span="12">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#5170b1"
        text-color="#fff"
        :router="true"
        active-text-color="#ffd04b">
        <el-menu-item index="/home">
          <i class="iconfont icon-shouye"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu index="2-2">
          <template slot="title">
            <i class="iconfont icon-yewu"></i>
            <span>基础资料</span>
          </template>
          <el-menu-item index="/1-1-1">
            <i class="el-icon-arrow-right"></i>
            <span slot="title">产品档案</span>
          </el-menu-item>
          <el-menu-item index="/customer">
            <i class="el-icon-arrow-right"></i>
            <span slot="title">客户档案</span>
          </el-menu-item>
          <el-menu-item index="/Supplier">
            <i class="el-icon-arrow-right"></i>
            <span slot="title">供应商档案</span>
          </el-menu-item>
          <el-menu-item index="1-1-3">
            <i class="el-icon-arrow-right"></i>
            <span slot="title">物流公司</span>
          </el-menu-item>
          <el-menu-item index="1-1-5">
            <i class="el-icon-arrow-right"></i>
            <span slot="title">仓库信息</span>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="iconfont icon-yewu"></i>
            <span>业务管理</span>
          </template>
          <el-menu-item index="/undo">
            <i class="el-icon-arrow-right"></i>
            <span slot="title">报价单</span>
          </el-menu-item>
          <el-menu-item index="/queryOrder">
            <i class="el-icon-arrow-right"></i>
            <span slot="title">销售订单</span>
          </el-menu-item>
          <el-menu-item index="/departManage">
            <i class="el-icon-arrow-right"></i>
            <span slot="title">销售订单(废弃)</span>
          </el-menu-item>
          <el-menu-item index="1-3">
            <i class="el-icon-arrow-right"></i>
            <span slot="title">发货单</span>
          </el-menu-item>
          <el-menu-item index="1-4">
            <i class="el-icon-arrow-right"></i>
            <span slot="title">开票申请</span>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="iconfont icon-caigoudingdan"/>
            <span>采购管理</span>
          </template>
          <el-menu-item index="3-1">
            <i class="el-icon-arrow-right"/>
            <span>供应商报价</span>
          </el-menu-item>
          <el-menu-item index="3-2">
            <i class="el-icon-arrow-right"/>
            <span>申购单</span>
          </el-menu-item>
          <el-menu-item index="3-3">
            <i class="el-icon-arrow-right"/>
            <span>采购订单</span>
          </el-menu-item>
          <el-menu-item index="3-4">
            <i class="el-icon-arrow-right"/>
            <span>验货记录</span>
          </el-menu-item>
        </el-submenu>

        <el-submenu index="4">
          <template slot="title">
            <i class="iconfont icon-cangku"/>
            <span>仓库管理</span>
          </template>
          <el-menu-item index="4-1">
            <i class="el-icon-arrow-right"/>
            <span>入库单</span>
          </el-menu-item>
          <el-menu-item index="4-2">
            <i class="el-icon-arrow-right"/>
            <span>出库单</span>
          </el-menu-item>
          <el-menu-item index="4-3">
            <i class="el-icon-arrow-right"/>
            <span>盘点单</span>
          </el-menu-item>
          <el-menu-item index="4-4">
            <i class="el-icon-arrow-right"/>
            <span>报损单</span>
          </el-menu-item>
          <el-menu-item index="4-5">
            <i class="el-icon-arrow-right"/>
            <span>库存明细</span>
          </el-menu-item>
          <el-menu-item index="4-6">
            <i class="el-icon-arrow-right"/>
            <span>期初期末结存</span>
          </el-menu-item>
        </el-submenu>

        <el-submenu index="5">
          <template slot="title">
            <i class="iconfont icon-hangzhengguanli"/>
            <span>行政管理</span>
          </template>
          <el-menu-item index="5-1">
            <i class="el-icon-arrow-right"/>
            <span>员工档案</span>
          </el-menu-item>
          <el-menu-item index="5-2">
            <i class="el-icon-arrow-right"/>
            <span>劳动合同</span>
          </el-menu-item>
          <el-menu-item index="5-3">
            <i class="el-icon-arrow-right"/>
            <span>保密协议</span>
          </el-menu-item>
          <el-menu-item index="5-4">
            <i class="el-icon-arrow-right"/>
            <span>员工离职手续单</span>
          </el-menu-item>
          <el-menu-item index="5-5">
            <i class="el-icon-arrow-right"/>
            <span>工资表</span>
          </el-menu-item>
          <el-menu-item index="5-6">
            <i class="el-icon-arrow-right"/>
            <span>请假单</span>
          </el-menu-item>
          <el-menu-item index="5-7">
            <i class="el-icon-arrow-right"/>
            <span>证照盖章申请</span>
          </el-menu-item>
          <el-menu-item index="5-8">
            <i class="el-icon-arrow-right"/>
            <span>会议记录</span>
          </el-menu-item>
          <el-menu-item index="5-9">
            <i class="el-icon-arrow-right"/>
            <span>快递登记</span>
          </el-menu-item>
        </el-submenu>

        <el-submenu index="6">
          <template slot="title">
            <i class="iconfont icon-caiwu"/>
            <span>财务管理</span>
          </template>
          <el-menu-item index="6-1">
            <i class="el-icon-arrow-right"/>
            <span>收款登记</span>
          </el-menu-item>
          <el-menu-item index="6-2">
            <i class="el-icon-arrow-right"/>
            <span>收票登记</span>
          </el-menu-item>
          <el-menu-item index="6-3">
            <i class="el-icon-arrow-right"/>
            <span>付款申请</span>
          </el-menu-item>
          <el-menu-item index="6-4">
            <i class="el-icon-arrow-right"/>
            <span>付款登记</span>
          </el-menu-item>
          <el-menu-item index="6-5">
            <i class="el-icon-arrow-right"/>
            <span>记账本</span>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="7">
          <template slot="title">
            <i class="iconfont icon-xitongpeizhi"/>
            <span>系统管理</span>
          </template>
          <el-menu-item index="7-1">
            <i class="el-icon-arrow-right"/>
            <span>业务字典</span>
          </el-menu-item>
          <el-menu-item index="7-2">
            <i class="el-icon-arrow-right"/>
            <span>用户管理</span>
          </el-menu-item>
          <el-menu-item index="/Department">
            <i class="el-icon-arrow-right"/>
            <span>部门管理</span>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>
<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style scoped lang="stylus" >
  .el-menu{
    border-right : solid 0px #171111;
    color: white;
    background-color: black;
    min-width: 200px;
  }
  .tac {
    .iconfont {
      margin 0px 9px 0px 4px
    }
  }
</style>
