<template>

</template>

<script>
  import {queryAllRoles} from '@/api/modules/user'
  import {queryAllMeau} from '@/api/modules/base'

  export default {
    data(){
      return {
        defaultExpandAll:true,
        roleTableData:[],
        data: [{
          id: 1,
          label: '一级 2',
          children: [{
            id: 3,
            label: '二级 2-1',
            children: [{
              id: 4,
              label: '三级 3-1-1'
            }, {
              id: 5,
              label: '三级 3-1-2',
              disabled: true
            }]
          }, {
            id: 2,
            label: '二级 2-2',
            disabled: true,
            children: [{
              id: 6,
              label: '三级 3-2-1'
            }, {
              id: 7,
              label: '三级 3-2-2',
              disabled: true
            }]
          }]
        }],
        defaultProps: {
          children: 'meauList',
          label: 'name'
        }
      }
    },
    created(){
      queryAllRoles().then(res=>{
        this.roleTableData = res;
      });
      queryAllMeau().then(res=>{
        this.data = res.data;
      })
    }
  }
</script>

<style scoped lang="stylus">
  .div_roleManage{
    display flex
    .el-table{
      width 400px !important;
    }
    .el-button{
      padding 4px
    }
    .div_meau_title{
      height: 50px;
      background-color: #f0f0f0
      width 400px;
      span{
        line-height 49px;
        font-size 14px;
        font-family "Microsoft YaHei"
        margin-left 10px;
      }
    }
  }
</style>
