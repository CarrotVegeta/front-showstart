<template>
  <el-form :model="orderSettings" label-width="120px">
    <el-form-item label="订单张数">
      <el-input v-model.number="orderSettings.ticket_num"/>
    </el-form-item>
    <el-form-item label="订单数">
      <el-input v-model.number="orderSettings.order_num"/>
    </el-form-item>
    <el-form-item label="间隔时间:毫秒">
      <el-input v-model.number="orderSettings.ticker"/>
    </el-form-item>
    <el-form-item label="电话号码">
      <el-input v-model="orderSettings.telephone"/>
    </el-form-item>
    <el-form-item class="mb-4">
      <el-button type="primary" @click="start">开始抢票</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>

// eslint-disable-next-line no-undef
import {Order} from "@/api/ticket";
import {ElMessage} from "element-plus";
import {reactive, ref} from "vue";

const orderSettings = ref({
  ticket_num: 0,
  order_num: 0,
  ticker: 0,
  telephone: "",
  activity_id: 0,
  ticket_id: 0,
})

const result = reactive({
  msg: ""
})

const props = defineProps({
  ticket: {}
})

const start = () => {
  console.log('submit!')
  orderSettings.value.activity_id = props.ticket.activity_id
  orderSettings.value.ticket_id = props.ticket.ticket_id
  console.log(props)
  const timer = setInterval(async () => {
    const res = await Order(orderSettings.value)
    if (res.data.error !== "") {
      ElMessage.error(res.data.error)
      clearInterval(timer)
    }
    result.msg = res.data.data
    if (res.data.data === "抢票成功") {
      clearInterval(timer)
    }
  },3000)
}
</script>

<style scoped>

</style>
