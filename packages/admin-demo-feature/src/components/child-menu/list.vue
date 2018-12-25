<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="Date"></el-table-column>
      <el-table-column prop="name" label="Name"></el-table-column>
      <el-table-column prop="address" label="Address"></el-table-column>
      <el-table-column label="Detail">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text">Click into detial</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  methods: {
    handleClick(row) {
      this.$router.push({ name: 'cmDetail', params: { name: row.name } })
    }
  },
  data() {
    return {
      tableData: [
        {
          date: '2016-05-03',
          name: 'Jeff',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-02',
          name: 'Jack',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-04',
          name: 'Jason',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }
      ]
    }
  }
}
</script>
