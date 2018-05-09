<template>
  <div>
    <el-button @click="clickMe">点击我</el-button>
    <el-select v-model="flag">
      <el-option label="是" :value="true"></el-option>
      <el-option label="否" :value="false"></el-option>
    </el-select>
    <demo2  :dialog="dialog" @dealDialog="dialog=!dialog"></demo2>
  </div>
</template>
<script>

  import {post,get} from '@/api/ajax.js'
  import demo2 from './demo2'
  import { mapGetters, mapActions } from 'vuex'
  export default {
    components:{demo2},
    data(){
      return {
        dialog:false,
        index : "",
        flag:false
      }
    },
    computed: {
      ...mapGetters({
        formData: 'formData'
      })
    },
    methods:{
      ...mapActions(['getData']),
      clickMe :function () {
        this.getData()
          .then(res => {
            this.dialog=true
          }, reason => {

          })
        }
    }
  }
</script>
