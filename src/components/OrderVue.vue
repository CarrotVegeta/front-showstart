<template>
  <div class="orderSettings">
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
        <el-button type="primary" @click="start" :disabled="!props.ticket.session_id">开始抢票</el-button>
        <el-button type="primary" @click="stop" :disabled="timer===null">停止抢票</el-button>
      </el-form-item>
    </el-form>
    <div class="log_title">
      <h1>日志输出:</h1>
    </div>
    <div class="result">
      <div>准备开始抢票====================>>>>>></div>
      <div v-for="item in result.msgs" v-bind:key="item.index">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script setup>

// eslint-disable-next-line no-undef
import {Order} from "@/api/ticket";
import {ElMessage} from "element-plus";
import {nextTick, reactive, ref} from "vue";
import {getNowTime} from "@/utils/date";

const orderSettings = ref({
  ticket_num: 1,
  order_num: 1,
  telephone: "",
  activity_id: 0,
  ticker: 200,
  ticket_id: 0,
  goods_type: 0,
  sky_type: 0,
  selling_price: "",
  session_id: 0,
})

const result = reactive({
  msgs: []
})

const props = defineProps({
  ticket: {}
})
let next = true
let orderNum = 0
const stop = () => {
  next = false
}
const start = () => {
  console.log('submit!')
  orderSettings.value.activity_id = props.ticket.activity_id
  orderSettings.value.ticket_id = props.ticket.ticket_id
  orderSettings.value.goods_type = props.ticket.good_type
  orderSettings.value.sku_type = props.ticket.type
  orderSettings.value.selling_price = props.ticket.selling_price
  orderSettings.value.session_id = props.ticket.session_id
  result.msgs = []
  next = true
  startOrder()
}
const startOrder = async () => {
  if (!next) {
    return
  }
  const res = await Order(orderSettings.value)
  if (res.data.error !== "") {
    ElMessage.error(res.data.error)
    return
  }
  const msg = getNowTime() + ":" + res.data.data
  result.msgs.push(msg)
  scrollToBottom();
  if (res.data.data === "抢票成功") {
    orderNum++
    if (orderNum === orderSettings.value.order_num) {
      next = false
      return
    }
  }
  setTimeout(() => {
    startOrder()
  }, orderSettings.value.ticker)
}
//滚动条保持最底部方法
const scrollToBottom = () => {
  nextTick(() => {
    let container = document.querySelector(".result");
    container.scrollTop = container.scrollHeight;
  })
}


</script>

<style scoped>
.result {
  overflow-y: auto;
  height: 15rem;
  text-align: left;
  border: 1px solid aliceblue;
  border-radius: 5px;
  margin-left: 4rem;
  padding-left: 0.5rem;
  background-color: black;
  color: aliceblue;
}

.orderSettings {
  padding-top: 2rem;
  margin-bottom: 10rem;
}

.log_title {
  text-align: left;
  margin-left: 4rem;
}
</style>
