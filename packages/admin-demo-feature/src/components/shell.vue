<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="Date"></el-table-column>
      <el-table-column prop="name" label="Name"></el-table-column>
      <el-table-column prop="address" label="Address"></el-table-column>
    </el-table>
    <pre ref="pre">
      <code class="javascript">
        // To enable shell when next delays in beforeRouteEnter as below
        beforeRouteEnter(to, from, next) {
          setTimeout(() => {
            next()
          }, 3000)
        }
      </code>
    </pre>
  </div>
</template>
<script>
import hljs from '@demo-feature/util/hljs'
export default {
  mounted() {
    hljs.highlightBlock(this.$refs.pre)
  },
  beforeRouteEnter(to, from, next) {
    setTimeout(() => {
      next()
    }, 3000)
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
<style lang="scss" scoped>
.el-table{
  padding-bottom: 24px;
  border-bottom: 1.1px solid #ccc;
}
</style>
