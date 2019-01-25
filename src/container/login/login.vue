<template>
  <el-container class="div_container">
    <el-main style="overflow-x: hidden;min-height: 550px;height: 100%;">
      <div class="div_main">
        <div class="div_loginForm">
          <div style="text-align: center;padding: 4px 0px;">
            <svg v-for="item in ([1,2,3,4])" class="icon" aria-hidden="true" style="font-size: 50px;">
              <use xlink:href="#icon-meishi_manyuemei"></use>
            </svg>
          </div>
          <div class="div_content">
            <el-tabs v-model="activeName" style="height: 200px;" @tab-click="tabClick">
              <el-tab-pane label="" :disabled="true" ></el-tab-pane>
              <el-tab-pane label="账号登录" name="accountLogin">
                <el-input v-model="userName" placeholder="输入账号/手机号/邮箱"/>
                <el-input type="password" autocomplete="off" placeholder="输入密码"/>
              </el-tab-pane>
              <el-tab-pane label="" :disabled="true" ></el-tab-pane>
              <el-tab-pane label="手机登录" name="mobileLogin">
                <el-input placeholder="输入手机号" v-model="mobileNum" class="input-with-select">
                  <el-select v-model="phonePre" slot="prepend" style="width: 70px;">
                    <el-option
                      v-for="item in phonePres"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-input>
                <div class="div_identifyCode">
                  <el-input placeholder="输入验证码" v-model="identifyCode"/>
                  <el-button type="primary" plain class="btn_identifyCode">{{identifyCodeBtn}}</el-button>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
          <div style="padding-bottom: 15px;justify-content:space-between;display:flex;}">
            <a href="#" style="color: #4386F4;padding-left: 20px;font-size: 14px;"><!--{{leftLinkLabel}}--></a>
            <a href="#" style="color: #4386F4;padding-right: 20px;font-size: 14px;">忘记密码</a>
          </div>
          <el-button type="primary" style="width: 300px;border: none">登录</el-button>
        </div>
      </div>
    </el-main>
    <el-footer class="div_footer">
      <p style="font-size: 14px;color: #b0b0b0;">© 2019 luodian Technology Ltd. All rights reserved</p>
    </el-footer>
  </el-container>
</template>
<script>
  export default {
    data(){
      return {
        phonePre:'+86',
        phonePres:[{label:'+86',value:'+86'}],
        activeName:'accountLogin',
        userName:'',
        mobileNum:'',
        identifyCode:'',
        identifyCodeBtn:'获取验证码',
        leftLinkLabel:'手机登录'
      }
    },
    methods:{
      tabClick(tab, event) {
        //this.leftLinkLabel = (tab.name=='mobileLogin'?'账号登录':'手机登录');
      }
    }
  }
</script>
<style scoped lang="stylus">
  .div_container{
    height 100%
    width 100%
    background-image: linear-gradient(to top, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, #efefef 48%, #d9d9d9 75%, #bcbcbc 100%);
  }
  .div_main{
    display:flex;
    justify-content: center;//使子项目水平居中
    align-items: center;//使子项目垂直居中
    max-height 700px
    height 100%
    margin-right: calc(100% - 100vw);
  }
  .div_loginForm{
    padding 40px 54px
    background-color white
    margin-top -10px;
    width 280px
    height 380px
    box-shadow: darkgrey 3px 3px 10px 2px ;
    border-radius 14px
  }
  .div_loginForm:hover{
    box-shadow: darkgrey 3px 3px 20px 2px ;
  }
  .div_footer{
    text-align center
  }
  .el-input{
    margin-top 13px
  }
  .div_identifyCode{
    display flex
    .btn_identifyCode{
      margin-top 13px
      height 40px
      padding 0px 10px
      width 82px
      font-size 10px
    }
  }
</style>
