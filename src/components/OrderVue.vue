<template>
  <el-row class="mb-4">
    <el-button type="success" @click="start">开始抢票</el-button>
  </el-row>
</template>

<script setup>

// eslint-disable-next-line no-undef
import {Order} from "@/api/ticket";

const props = defineProps({
  ticket:Object
})

const start = async () => {
  console.log('submit!')
  const res = await Order({activity_id:props.ticket.activity_id,ticket_id:props.ticket.ticket_id})
  console.log(res)
}
</script>

<style scoped>

</style>
