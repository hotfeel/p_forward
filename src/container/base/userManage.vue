<template>
  <div class="div_userManage">
    <el-row class="backgroud_el_row">
      <el-row class="row_user_title">
        <span>基本信息</span>
        <el-button type="primary" icon="el-icon-edit" title="编辑" style="float: right;"/>
<!--
        <el-button-group style="float: right;">
          <el-button type="primary" icon="el-icon-edit" title="编辑"/>
          <el-button type="primary" icon="iconfont icon-baocun" title="保存"/>
        </el-button-group>-->
      </el-row>
      <el-row class="row_user_base">
        <el-col :span="4" style="text-align: center;">
          <svg class="icon" style="font-size: 60px;" aria-hidden="true">
            <use xlink:href="#icon-boy"></use>
          </svg>
          <div style="font-size: 12px;color: gray;padding: 4px 2px 4px 0px;">用户头像</div>
        </el-col>
        <el-col :span="20">
          <el-row>
            <el-col :span="6" class="col_info" >
                <span class="span_title">姓名:</span>
                <span class="span_content">罗典</span>
            </el-col>
            <el-col :span="6" class="col_info" >
                <span class="span_title">性别:</span>
                <span class="span_content">男</span>
            </el-col>
            <el-col :span="6" class="col_info" >
              <span class="span_title">联系电话:</span>
              <span class="span_content">13512345678</span>
            </el-col>
            <el-col :span="6" class="col_info" >
              <span class="span_title">岗位:</span>
              <span class="span_content">架构师</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6" class="col_info" >
              <span class="span_title">所属部门:</span>
              <span class="span_content">IT部-架构组</span>
            </el-col>
            <el-col :span="6" class="col_info" >
              <span class="span_title">上级领导:</span>
              <span class="span_content">罗越</span>
            </el-col>
            <el-col :span="6" class="col_info" >
              <span class="span_title">办公地点:</span>
              <span class="span_content">上海</span>
            </el-col>
            <el-col :span="6" class="col_info" >
              <span class="span_title">目前状态:</span>
              <span class="span_content">在职</span>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-row>
    <el-row class="backgroud_el_row">
      <el-row class="row_user_title">
        <span>账号信息</span>
        <el-button type="primary" icon="el-icon-edit" title="编辑" style="float: right;"/>
      </el-row>
      <el-row>
        <el-col :span="2"><br></el-col>
        <el-col :span="5" class="col_info" >
          <span class="span_title">账号:</span>
          <span class="span_content">luodian</span>
        </el-col>
        <el-col :span="5" class="col_info" >
          <span class="span_title">密码:</span>
          <span class="span_content">******</span>
        </el-col>
        <el-col :span="10" class="col_info" >
          <span class="span_title">当前角色:</span>
          <span class="span_content">超级管理员、销售员、业务员</span>
        </el-col>
        <el-col :span="2"><br></el-col>
      </el-row>
    </el-row>
    <el-row class="backgroud_el_row">
      <el-row class="row_user_title">
        <span>通讯信息</span>
        <el-button type="primary" icon="el-icon-edit" title="编辑" style="float: right;"/>
      </el-row>
      <el-row>
        <el-col :span="2"><br></el-col>
        <el-col :span="5" class="col_info" >
          <span class="span_title">手机号:</span>
          <span class="span_content">13512345678</span>
        </el-col>
        <el-col :span="5" class="col_info" >
          <span class="span_title">办公电话:</span>
          <span class="span_content">021-12345678</span>
        </el-col>
        <el-col :span="5" class="col_info" >
          <span class="span_title">邮箱:</span>
          <span class="span_content">123456789@qq.com</span>
        </el-col>
        <el-col :span="5" class="col_info" >
          <span class="span_title">传真:</span>
          <span class="span_content">021-12345678</span>
        </el-col>
        <el-col :span="2"><br></el-col>
      </el-row>
      <el-row>
        <el-col :span="2"><br></el-col>
        <el-col :span="10" class="col_info" >
          <span class="span_title">通讯地址:</span>
          <span class="span_content">上海-上海市-青浦区明珠路1618号易通世界南区</span>
        </el-col>
        <el-col :span="2"><br></el-col>
      </el-row>
    </el-row>  </div>
</template>
<style scoped lang="stylus">
  .div_userManage{
    padding 10px
  }
   .backgroud_el_row{
     color gray
     border-radius 5px
     box-shadow: darkgrey 2px 2px 3px 1px ;
     border 1px solid #dcdfe6
     margin-bottom 30px
     min-width 900px
   }
  .row_user_title{
    align-items center
    line-height 28px
    font-size 16px
    padding 5px 10px 5px 20px
    border-bottom solid 0.8px gainsboro
    background-color #fafafa
    .el-button--primary{
      font-size 14px
      padding 5px
    }
  }
  .row_user_title>>>.iconfont{
    font-size 14px
  }
  .row_user_base{
    padding 10px 0px
  }
  .col_info{
    line-height: 40px;
    font-size 14px
    .span_title{
      font-weight: bold;
      margin-right: 8px;
      width: 60px;
      display: block;
      float: left;
    }
    .span_content{
      display:block;
      min-width: 100px;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
    }
  }

</style>
