<template>
    <el-form :model="form" label-width="120px">
      <el-form-item label="演出id">
        <el-input v-model="form.activity_id" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">获取演出票列表</el-button>
      </el-form-item>
    </el-form>
    <el-table
        ref="singleTableRef"
        :data="tableData"
        highlight-current-row
        style="width: 100%"
        @current-change="handleCurrentChange"
    >
      <el-table-column prop="session_id" label="SessionID" width="180" />
      <el-table-column prop="ticket_id" label="TicketID" width="180" />
      <el-table-column prop="ticket_type" label="类型" width="180" />
      <el-table-column prop="selling_price" label="价格" width="180" />
      <el-table-column prop="show_time" label="演出时间" width="180" />
    </el-table>
    <OrderVue :ticket="ticket"/>
</template>


<script>
import OrderVue from "./OrderVue"
export default {
  name: 'TicketList',
  components:{
    OrderVue
  }
}
</script>


<script  setup>
import {reactive} from "vue";
import { ElTable } from 'element-plus'
import {GetTicketList} from "@/api/ticket";

const form = reactive({
  activity_id: '',
})
const tableData = reactive([])


const onSubmit = async () => {
  console.log('submit!')
  const res = await GetTicketList({activity_id:Number(form.activity_id)});
  res.data.data.forEach(item=>{
    tableData.push(item)
  })
}

let ticket = {
  session_id:'',
  activity_id:'',
  ticket_id:''
}
const handleCurrentChange = (val) => {
  ticket = val
  console.log(ticket)
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
