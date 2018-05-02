<template>
  <nav class="menu">
    <div class="menu-header padding-h-2">组件</div>
    <div class="menu-body" >
      <el-menu>
        <el-menu-item :index="item.code" v-for="item in menu" :key="item.code">{{item.name}}</el-menu-item>
      </el-menu>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      menu: 'bsMenu/subMenu'
    })
  }
}
</script>

<style scoped lang="scss">
@import "~@base/theme/var";
.menu {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: $menubar-w;
  background: $menubar-bg;
  box-shadow: 0 0 14px 0 rgba(2, 7, 30, 0.21);
  display: flex;
  flex-direction: column;
  &-header {
    font-size: 16px;
    color: #333;
    height: $menubar-head-h;
    line-height: $menubar-head-h;
    overflow: hidden;
    text-overflow: ellipsis;
    border-bottom: 1px solid #eee;
  }
  &-body {
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
  }
}
.el-menu {
  border: none;
  &-item {
    font-size: 12px;
    height: $menubar-menuItem-h;
    line-height: $menubar-menuItem-h;
  }
}
</style>
