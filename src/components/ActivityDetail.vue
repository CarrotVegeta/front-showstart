<template>
    <el-form :model="form" label-width="120px">
      <el-form-item label="演出id">
        <el-input v-model.number="form.activity_id" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">获取演出详情</el-button>
      </el-form-item>
    </el-form>
  <el-carousel :interval="4000" type="card" height="600px" :hidden="!detail.album">
    <el-carousel-item v-for="item in detail.album" :key="item">
      <el-image  :key="item" :src="item" fit="fill"  />
    </el-carousel-item>
  </el-carousel>
  <div v-html="detail.document">
  </div>

  <el-table
      class="ticketList"
      ref="singleTableRef"
      :data="tableData"
      highlight-current-row
      style="width: 100%"
      @current-change="handleCurrentChange"
  >
    <el-table-column prop="session_id" label="SessionID" width="180"/>
    <el-table-column prop="ticket_id" label="TicketID" width="180"/>
    <el-table-column prop="ticket_type" label="类型" width="180"/>
    <el-table-column prop="selling_price" label="价格" width="180"/>
    <el-table-column prop="show_time" label="演出时间" width="180"/>
  </el-table>
  <OrderVue :ticket="ticket"/>
</template>


<script>
import OrderVue from "@/components/OrderVue"

export default {
  name: 'ActivityDetailVue',
  components:{
    OrderVue
  }
}
</script>


<script setup>

import {reactive, ref} from "vue";
import {GetActivityDetail} from "@/api/activity";
import {ElMessage} from "element-plus";
import {GetTicketList} from "@/api/ticket";



const form = reactive({
  activity_id: 0,
})
let detail = ref({})
const onSubmit = async () => {
  console.log('submit!')
  const res = await GetActivityDetail({activity_id:form.activity_id})
  if (res.data.error !== "") {
    ElMessage.error(res.data.error)
    return
  }
  detail.value = res.data.data.result
  await getTicketListDetail()
}


const tableData = ref([])

const getTicketListDetail = async () => {
  console.log('submit!')
  tableData.value = []
  const res = await GetTicketList({activity_id: form.activity_id});
  if (res.data.error !== "") {
    ElMessage.error(res.data.error)
  }
  console.log(res.data)
  res.data.data.forEach(item => {
    tableData.value.push(item)
  })
}
let ticket = ref({})
const handleCurrentChange = (val) => {
  ticket.value = val
  ticket.value.activity_id = form.activity_id
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ticketList{
  padding-left:4rem;
}


</style>
