<template>
    <div class="title">
        <h2>请设置用户相关信息:</h2>
    </div>
    <el-form :model="form" label-position="top" label-width="auto">
      <el-form-item label="st_flpv">
        <el-input v-model="form.st_flpv" />
      </el-form-item>
      <el-form-item label="cusut">
        <el-input v-model="form.cusut" />
      </el-form-item>
      <el-form-item label="cuuserref">
        <el-input v-model="form.cuuserref" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">设置Header信息</el-button>
      </el-form-item>
    </el-form>
</template>

<script>

export default {
  name: 'CookieVue',
  props: {
    msg: String
  }
}

</script>

<script setup>

import {SetCookie} from "@/utils/request";
import {reactive} from "vue";

const form = reactive({
  st_flpv:'',
  cusut:'',
  cuuserref:''
})
const onSubmit = () => {
  SetCookie(form)
}
</script>
<style scoped>
.title {
    text-align: left;
    /*margin-left: 4rem;*/
}
</style>