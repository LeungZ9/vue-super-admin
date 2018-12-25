<template>
  <div>
    <el-form label-width="120px">
      <el-form-item label="Date">2016-05-03</el-form-item>
      <el-form-item label="Name">{{$route.params.name}}</el-form-item>
      <el-form-item label="Address">No. 189, Grove St, Los Angeles</el-form-item>
    </el-form>
    <pre ref="pre1">
      <code class="javascript">
        // Here is how to set router for '子级页面'
        {
          path: '/child-page',
          name: 'cpList',                 // Parent router config
          component: cpList
        },
        {
          path: '/child-page/:name',
          name: 'cpList.detail',          // Child router config, Using '.' to link with parent
          component: cpDetail
        }
      </code>
    </pre>
    <pre ref="pre2">
      <code class="javascript">
        // For '子级页面', you should set header title by yourself as below
        import { mapActions } from 'vuex'
        mounted() {
           this.setTitle('Detail')
        }
        methods: {
          ...mapActions({
            setTitle: 'bsHead/setTitle'
          })
        }
      </code>
    </pre>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import hljs from '@demo-feature/util/hljs'
export default {
  mounted() {
    this.setTitle('Detail')
    hljs.highlightBlock(this.$refs.pre1)
    hljs.highlightBlock(this.$refs.pre2)
  },
  methods: {
    ...mapActions({
      setTitle: 'bsHead/setTitle'
    })
  }
}
</script>
<style lang="scss" scoped>
.el-form{
  border-bottom: 1.1px solid #ccc;
}
</style>
