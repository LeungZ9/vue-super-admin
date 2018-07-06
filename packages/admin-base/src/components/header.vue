<template>
  <header class="padding-h-3">
    <div class="header-left" @click="$router.go(0)">{{brand}}</div>
    <div class="header-center"></div>
    <div class="header-right">
      <el-dropdown class="padding-h-2">
        <div>{{user.name}}</div>
        <el-dropdown-menu class="header-userDropdown" slot="dropdown">
          <el-dropdown-item>Github</el-dropdown-item>
          <el-dropdown-item divided>Log Out</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      user: {
        name: 'LeungZ'
      },
      brand: 'Super Admin'
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@base/theme/var';
header {
  position: fixed;
  top: 0;
  width: 100%;
  height: $header-h;
  line-height: $header-h;
  z-index: 999;
  display: flex;
  align-items: center;
  background: $header-bg;
}
.header {
  &-left {
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    width: #{$theme-radix * 27}px;
    cursor: pointer;
    border-right: 1.1px solid $header-item-border;
  }
  &-center {
    flex: 1;
  }
  &-right {
    border-left: 1.1px solid $header-item-border;
    width: auto;
    .el-dropdown{
      cursor: pointer;
      color: #eee;
    }
  }
  &-userDropdown{
    margin: 0;
    border-radius: 0;
    li{
      line-height: 32px;
    }
  }
}
</style>
