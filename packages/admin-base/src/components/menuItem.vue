<template>
  <div>
    <el-menu-item v-if="item.url" @click="routerTo(item.url)" :index="item.url">{{item.name}}</el-menu-item>
    <el-submenu :index="''+item.id" v-else>
      <template slot="title">{{item.name}}</template>
      <bs-menu-item v-for="item in getMenu(item.id)" :item="item" :key="item.id"></bs-menu-item>
    </el-submenu>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    item: {}
  },
  computed: {
    ...mapGetters({
      getMenu: 'bsMenu/menuByParent'
    })
  },
  methods: {
    routerTo(url) {
      let query = {}
      if (this.$route.name === url && this.$store.state.bsShell.loading) {
        query[new Date().getTime()] = null
      }
      this.$router.push({ name: url, params: this.params, query })
    }
  }
}
</script>
