<template>
  <div>
    <div>test:{{testRef}}</div>

    <div class="header">
      <el-button type="primary" size="mini" @click="handleAdd">添加</el-button>
      <el-button type="danger" size="mini" @click="batchDelete">批量删除</el-button>
    </div>
    <el-table
        v-loading="loading"
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
    >
      <el-table-column type="selection" width="55" />
      <el-table-column prop="name" label="商品名称" width="auto" />
      <el-table-column label="跳转链接" width="auto">
        <template #default="scope">
          <span><a :href="scope.row.href" v-text="scope.row.href"></a></span>
        </template>
      </el-table-column>
      <el-table-column label="排序值" width="auto">
        <template #default="scope">
          <span>{{ scope.row.sort }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="number" label="商品编号" width="auto" />
      <el-table-column label="添加时间" width="auto">
        <template #default="scope">
          <span>{{ scope.row.time }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="auto">
        <template #default="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
          >Edit</el-button
          >
          <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
          >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>


<script lang="ts">
import { onMounted, reactive, ref, toRefs } from 'vue'
import { Delete} from '@element-plus/icons-vue'
export default {
  name: 'Goods',
  setup(){
    const multipleTable = ref(null)
    const testRef = ref(0)
    const state = reactive({
      loading: false,
      tableData: []
    })
    onMounted(()=>{
      getGoodsList()
    })
    // 获取商品数据
    const getGoodsList = () => {
      state.loading = true
      setTimeout(()=>{
        state.tableData = [
          { name: '橡胶', href: 'www.baidu.com', sort: '100', time: '2021-12-27 12:00:00' },
          { name: '口红', href: 'www.baidu.com', sort: '100', time: '2021-12-27 12:00:00' },
          { name: '手机', href: 'www.baidu.com', sort: '100', time: '2021-12-27 12:00:00' },
          { name: '电脑', href: 'www.baidu.com', sort: '100', time: '2021-12-27 12:00:00' },
          { name: '沙发', href: 'www.baidu.com', sort: '100', time: '2021-12-27 12:00:00' },
          { name: '窗户', href: 'www.baidu.com', sort: '100', time: '2021-12-27 12:00:00' },
          { name: '老虎', href: 'www.baidu.com', sort: '100', time: '2021-12-27 12:00:00' },
          { name: '大象', href: 'www.baidu.com', sort: '100', time: '2021-12-27 12:00:00' },
          { name: '电视', href: 'www.baidu.com', sort: '100', time: '2021-12-27 12:00:00' }]
        state.loading = false
      },1000)
    }

    const handleAdd = () =>{
      console.log('添加')
      testRef.value++
    }

    const batchDelete = () =>{
      console.log('批量删除');
    }

    const handleEdit = () =>{
      console.log('编辑')
    }

    const handleDelete = () =>{
      console.log('删除');
    }

    return {
      ...toRefs(state),
      getGoodsList,
      handleAdd,
      batchDelete,
      handleEdit,
      handleDelete,
      testRef
    }
  }
}
</script>

<style lang="stylus">

</style>
