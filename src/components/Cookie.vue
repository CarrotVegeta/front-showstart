<template>
    <el-form :model="form" label-width="120px">
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
  st_flpv:'498RPjmiiwD9w8fYIRL2',
  cusut:'c21be397146ad201331e904dfbcf6332',
  cuuserref:'fc84fe840b09cbd65a5cc1930d6993ad'
})
const onSubmit = () => {
  SetCookie(form)
}
</script>
