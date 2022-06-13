<template>
  <div>
    <el-form :model="form" label-width="120px">
      <el-form-item label="演出id">
        <el-input v-model="form.activity_id" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">获取演出票列表</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="session_id" label="SessionID" width="180" />
      <el-table-column prop="selling_price" label="SellingPrice" width="180" />
      <el-table-column prop="good_type" label="GoodType" width="180" />
      <el-table-column prop="ticket_num" label="TicketNum" width="180" />
      <el-table-column prop="member_num" label="MemberNum" width="180" />
      <el-table-column prop="show_time" label="ShowTime" width="180" />
      <el-table-column prop="ticket_id" label="TicketID" width="180" />
    </el-table>
  </div>
</template>


<script>

export default {
  name: 'TicketList',
  props: {
    msg: String,
  }
}
</script>


<script setup>

import {reactive} from "vue";
import Cookie from "@/router";


const form = reactive({
  activity_id: '',
})
let tableData = []
let onSubmit = async () => {
  console.log('submit!')
  tableData = await Cookie.methods.GetTicketList(form.activity_id);
  console.log(tableData)
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
