<template>
  <el-row class="mb-4">
    <el-button @click="onSubmit">获取演出列表</el-button>
  </el-row>
  <el-table
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
import OrderVue from "./OrderVue"

export default {
  name: 'TicketList',
  components: {
    OrderVue
  }
}
</script>


<script setup>
import {ref} from "vue";
import {ElMessage, ElTable} from 'element-plus'
import {GetTicketList} from "@/api/ticket";

const tableData = ref([])
const props = defineProps({
      activity_id: Number
    }
)

const onSubmit = async () => {
  console.log('submit!')
  tableData.value = []
  const res = await GetTicketList({activity_id: props.activity_id});
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
  ticket.value.activity_id = props.activity_id
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
