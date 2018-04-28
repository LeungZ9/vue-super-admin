<template>
  <header>
    <div class="header-brand" @click="$router.go(0)">{{brand}}</div>
    <div></div>
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
@import "~@base/theme/var";
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
  padding-right: 30px;
}
.header {
  &-brand {
    color: #fff;
    font-size: 20px;
    padding-left: 30px;
    font-weight: bold;
    width: $aside-w;
    cursor: pointer;
    border-right: 1px solid $theme-bg;
  }
}
</style>
