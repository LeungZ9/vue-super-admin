<template>
  <header class="padding-h-3">
    <div class="header-left" @click="$router.go(0)">{{brand}}</div>
    <div class="header-center"></div>
    <div class="header-right"></div>
  </header>
</template>
<script>
export default {
  data() {
    return {
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
    width: auto;
  }
}
</style>
