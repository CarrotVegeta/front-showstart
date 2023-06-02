<template>
    <div class="title">
        <h2>观演人(如果没有显示去app添加):</h2>
    </div>
    <el-table
            class="spectatorList"
            ref="singleTableRef"
            :data="tableData"
            highlight-current-row
            style="width: 100%"
            @current-change="handleCurrentChange"
            :hidden="!tableData.length"
    >
        <el-table-column prop="id" label="ID" width="180"/>
        <el-table-column prop="name" label="姓名" width="180"/>
        <el-table-column prop="user_id" label="用户id" width="180"/>
    </el-table>
</template>

<script setup>
import {GetSpectator} from "@/api/spectator";
import {ElMessage} from "element-plus";
import {ref} from "vue";
import { onMounted } from 'vue'


const tableData = ref([])
onMounted(() => {
    GetSpectatorList()
})
const GetSpectatorList = async () => {
    tableData.value = []
    const res = await GetSpectator();
    if (res.data.error !== "") {
        ElMessage.error(res.data.error)
    }
    res.data.data.forEach(item => {
        tableData.value.push(item)
    })
}

let spectator = ref({})
const handleCurrentChange = (val) => {
    spectator.value = val
}
</script>

<style scoped>
.spectatorList {
    padding-left: 4rem;
}
.title {
    text-align: left;
    /*margin-left: 4rem;*/
}
</style>