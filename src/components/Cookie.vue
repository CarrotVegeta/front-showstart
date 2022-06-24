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
  st_flpv:'4u2mk6jWoe6C11eLJuvk',
  cusut:'ce618bcfc4c46b74a68de4c70b322aed',
  cuuserref:'961007ea504e70a7e5a902c5be803c3d'
})
const onSubmit = () => {
  SetCookie(form)
}
</script>
