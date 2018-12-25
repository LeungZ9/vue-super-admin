<template>
  <div>
    <description :content="content"></description>
    <el-form>
      <el-form-item label="Count">{{count}}</el-form-item>
      <el-button @click="increase">+ 1</el-button><el-button @click="decrease">- 1</el-button>
    </el-form>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import description from './description'
export default {
  components: { description },
  methods: mapActions({
    increase: 'count/increase',
    decrease: 'count/decrease'
  }),
  computed: mapState({
    count: state => state.count.num
  }),
  data() {
    return {
      content:
        'Here is just a simple example from using <a href="https://vuex.vuejs.org/" target="_blank">Vuex</a>, please refer to this <a href="https://vuex.vuejs.org/" target="_blank">link</a> for more detail'
    }
  }
}
</script>
