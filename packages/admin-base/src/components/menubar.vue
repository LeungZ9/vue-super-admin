<template>
  <nav class="menu">
    <div class="menu-header padding-h-2">{{parent.name}}</div>
    <div class="menu-body" >
      <el-menu :default-active="active">
        <bs-menu-item v-for="item in setMenu" :item="item" :key="item.id"></bs-menu-item>
      </el-menu>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  data() {
    return {
      parent: {},
      menu: []
    }
  },
  computed: {
    ...mapGetters({
      getMenu: 'bsMenu/menuByParent'
    }),
    ...mapState({
      params: state => state.bsMenu.params,
      active: state => {
        const last = state.bsMenu.current[state.bsMenu.current.length - 1]
        return last && last.url
      },
      setMenu: function(state) {
        const parent = state.bsMenu.current[state.bsMenu.current.length - 2]
        if (!parent) {
          this.menu = []
        } else if (this.parent !== parent) {
          this.menu = this.getMenu(parent.id)
        }
        this.parent = parent || {}
        return this.menu
      }
    })
  }
}
</script>

<style scoped lang="scss">
@import '~@base/theme/var';
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
  /deep/ &-item {
    font-size: 12px;
    height: $menubar-menuItem-h;
    line-height: $menubar-menuItem-h;
  }
  /deep/ .el-submenu {
    &__title {
      font-size: 12px;
      height: $menubar-menuItem-h;
      line-height: $menubar-menuItem-h;
    }
  }
}
</style>
