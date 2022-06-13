<template>
  <div>
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
  </div>
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

import {reactive} from "vue";
import Cookie from "@/router";

const form = reactive({
  cusut: '',
  st_flpv: '',
  cuuserref: '',
  activity_id: '',
});

const onSubmit = () => {
  Cookie.state.Cusut = form.cusut
  Cookie.state.Cuuserref = form.cuuserref
  Cookie.state.St_flpv = form.st_flpv
}
</script>