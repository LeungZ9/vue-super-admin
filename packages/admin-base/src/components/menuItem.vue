<template>
  <el-menu-item v-if="item.url" :index="item.url">{{item.name}}</el-menu-item>
  <el-submenu :index="''+item.id" v-else>
    <template slot="title">{{item.name}}</template>
    <bs-menu-item v-for="item in getMenu(item.id)" :item="item" :key="item.id"></bs-menu-item>
  </el-submenu>
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
  }
}
</script>
