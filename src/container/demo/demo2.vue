<template>
  <div>
    <el-dialog title="收货地址" :visible.sync="dialog"  :before-close="handleClose">
      {{formData.name}}
    </el-dialog>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    props:['dialog'],
    data(){
      return {
        index : ""
      }
    },
    computed: {
      ...mapGetters({
        formData: 'formData'
      })
    },
    methods:{
      handleClose(){
        this.$emit('dealDialog')
      }
    }
  }
</script>
