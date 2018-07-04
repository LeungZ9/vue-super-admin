<template>
  <div>
    <el-form>
      <el-form-item label="Permission Test">
        <el-radio-group @change="switchRadio" v-model="radio">
          <el-radio-button :label="true">Enable</el-radio-button>
          <el-radio-button :label="false">Disable</el-radio-button>
        </el-radio-group>
        <router-link :to="{name:'permissionTest'}" class="el-button el-button--small">Go to Permission Test</router-link>
      </el-form-item>
    </el-form>
    <pre class="hljs javascript"><code class="javascript" v-html="json"></code></pre>
  </div>
</template>
<script>
import hljs from '@demo-feature/util/hljs'
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      radio: false,
      permission: {
        id: 99,
        name: 'Permission Test',
        url: 'permissionTest',
        icon: '',
        parent: 14
      }
    }
  },
  computed: {
    ...mapState({
      json: state => {
        const code = `// All permission checking comes from menu data as below\n${JSON.stringify(
          state.bsMenu.data,
          null,
          2
        )}`
        return hljs.highlightAuto(code).value
      }
    })
  },
  created() {
    this.radio = !!this.$store.state.bsMenu.data.find(
      ele => ele.id === this.permission.id
    )
  },
  methods: {
    switchRadio(v) {
      const data = JSON.parse(JSON.stringify(this.$store.state.bsMenu.data))
      v ? data.push(this.permission) : data.pop()
      this.setMenu(data)
    },
    ...mapActions({
      setMenu: 'bsMenu/setData'
    })
  }
}
</script>
<style lang="scss">
.el-button {
  margin-left: 8px;
  text-decoration: none;
}
</style>
