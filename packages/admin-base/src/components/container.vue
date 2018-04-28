<template>
  <div class="container">
    <el-container>
      <el-header></el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
@import "~@base/theme/var";
.container {
  position: absolute;
  left: $aside-w;
  top: $header-h;
  bottom: 0;
  right: 0;
}
</style>
