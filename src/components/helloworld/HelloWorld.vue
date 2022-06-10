<template>
  <div>
    <el-form :model="form" label-width="120px">
      <el-form-item label="st_flpv">
        <el-input v-model="form.st_flpv" />
      </el-form-item>
      <el-form-item label="cusut">
        <el-input v-model="form.cusut" />
      </el-form-item>
      <el-form-item label="cuuseref">
        <el-input v-model="form.cuuseref" />
      </el-form-item>
      <el-form-item label="演出id">
        <el-input v-model="form.activity_id" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>


<script setup>

import {reactive} from "vue";
import axios from "axios";

const form = reactive({
  cusut:'',
  st_flpv:'',
  cuuseref:'',
  activity_id: '',
})

const onSubmit = () => {
  console.log('submit!')
  axios({
    method:"post",
    url:"//填入接口地址",
    data:{value:this.value}
}).then(res=>{
    console.log(res)
  })
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
