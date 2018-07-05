<template>
  <div>
    <h1>401! You don't have permission to access.</h1>
    <router-link :to="'/'" class="el-button el-button--small">返回首页</router-link>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  created() {
    this.hideHead(true)
    this.hideMenu(true)
  },
  methods: {
    ...mapActions({
      hideHead: 'bsHead/setHidden',
      hideMenu: 'bsMenu/setHidden'
    })
  }
}
</script>
