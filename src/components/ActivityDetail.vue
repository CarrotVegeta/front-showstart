<template>
    <el-form :model="form" label-width="120px">
      <el-form-item label="演出id">
        <el-input v-model="form.activity_id" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">获取演出详情</el-button>
      </el-form-item>
    </el-form>
</template>


<script>

export default {
  name: 'ActivityDetailVue',
  props: {
    msg: String
  }
}
</script>


<script setup>

import {reactive} from "vue";
import {GetActivityDetail} from "@/api/activity";


const form = reactive({
  activity_id: '',
})
const onSubmit = async () => {
  console.log('submit!')
  const res = await GetActivityDetail({activity_id:form.activity_id})
  console.log(res)
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
