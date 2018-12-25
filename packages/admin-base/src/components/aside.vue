<template>
  <aside :class="{'aside-collapsed':collapse}">
    <div class="aside-wrapper">
      <el-menu :collapse="collapse" :default-active="active">
        <el-menu-item :index="item.url" v-for="item in menu" :key="item.id">
          <a class="aside-link" :href="item.url"></a>
          <i :class="item.icon"></i>
          <span>{{item.name}}</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div @click="toggle" class="el-menu-item aside-toggle">
      <i :class="`el-icon-caret-${collapse?'right':'left'}`"></i>
    </div>
  </aside>
</template>
<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState({
      collapse: state => state.bsMenu.collapse,
      active: state => state.bsMenu.current[0] && state.bsMenu.current[0].url
    }),
    ...mapGetters({
      menu: 'bsMenu/menu'
    })
  },
  methods: {
    ...mapActions({
      toggle: 'bsMenu/toggleCollapse'
    })
  }
}
</script>
<style lang="scss" scoped>
@import "~@base/theme/var";
aside {
  position: fixed;
  top: $header-h;
  left: 0;
  bottom: 0;
  width: $aside-w;
  background: $aside-bg;
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease;
}
.aside {
  &-wrapper {
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
  }
  &-link {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  &-toggle {
    text-align: center;
    background: $aside-menu-bg;
  }
  &-collapsed {
    width: $aside-collapsed-w;
  }
}
.el-menu {
  border: none;
  background: $aside-menu-bg;
  width: 100%;
  transition: none;
  &-item {
    position: relative;
    font-size: 12px;
    color: #fff;
    height: $aside-menuItem-h;
    line-height: $aside-menuItem-h;
    i {
      color: #fff;
    }
    &:hover,
    &:focus {
      background: $aside-menuItem-hover;
    }
    &.is-active {
      background: $theme-color;
    }
  }
}
</style>
