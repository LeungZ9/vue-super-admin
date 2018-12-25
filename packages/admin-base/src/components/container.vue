<template>
  <div class="container" :class="{'container--expand':collapse}">
    <menubar v-if="!menuHidden"></menubar>
    <div class="container-body" :class="{'container-body--full':menuHidden}">
      <div v-if="loading" class="loading">
        <div class="loading-body">
          <div class="cube"></div>
          <div class="cube1 cube"></div>
          <div class="cube3 cube"></div>
          <div class="cube2 cube"></div>
        </div>
      </div>
      <el-container v-else>
        <el-header v-if="!headHidden" class="padding-h-3">
          <div>
            <router-link :to="{name:back, params:params}"
            v-if="back"><i class="el-icon-arrow-left"></i></router-link>
            {{title || this.bcLast}}
          </div>
          <div>
            <el-breadcrumb>
              <el-breadcrumb-item :to="{path:'/'}">{{bcFst}}</el-breadcrumb-item>
              <template v-for="(item,index) in breadcrumb">
                <el-breadcrumb-item :key="index" :to="{name: item.url, params:params}">{{item.name}}</el-breadcrumb-item>
              </template>
              <el-breadcrumb-item >{{bcLast}}</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </div>
  </div>
</template>
<script>
import menubar from './menubar'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      bcFst: '',
      bcLast: '',
      back: ''
    }
  },
  computed: mapState({
    menuHidden: state => state.bsHead.hidden,
    headHidden: state => state.bsMenu.hidden,
    title: state => state.bsHead.title,
    loading: state => state.bsShell.loading,
    params: state => state.bsMenu.params,
    collapse: state => state.bsMenu.collapse,
    breadcrumb: function(state) {
      const current = state.bsMenu.current
      const last = current.length - 1
      if (~last) {
        let back = ''
        if (~this.$route.name.indexOf('.')) {
          back = current[last].url
        }
        if (current.length > 2) {
          back = current[current.length - 2].url
        }
        this.back = back
        this.bcFst = current[0].name
        this.bcLast = current[last].name
      }
      return current.slice(1, last)
    }
  }),
  components: {
    menubar
  }
}
</script>
<style lang="scss" scoped>
@import '~@base/theme/var';
.container {
  position: absolute;
  left: $aside-w;
  top: $header-h;
  bottom: 0;
  right: 0;
  transition: left 0.3s ease;
  &--expand {
    left: $aside-collapsed-w;
  }
  &-body {
    height: 100%;
    margin-left: $menubar-w;
    &--full {
      margin-left: 0;
    }
  }
}
.el-header {
  display: flex;
  height: $menubar-head-h !important;
  line-height: $menubar-head-h;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  align-items: center;
}
.el-container,
.el-main {
  height: 100%;
}
.el-breadcrumb {
  font-size: 12px;
  /deep/ &__item:last-child {
    .el-breadcrumb__inner {
      color: #99a9bf;
    }
  }
  /deep/ &__inner {
    font-weight: normal;
    &:not(:hover) {
      color: #475669;
    }
  }
}
.loading {
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  &-body {
    width: 80px;
    height: 80px;
    transform: rotateZ(45deg);
  }
}
.cube {
  position: relative;
  float: left;
  width: 50%;
  height: 50%;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #33b5e5;
    animation: foldCube 2.4s infinite linear both;
    transform-origin: 100% 100%;
  }
  @for $i from 1 through 3 {
    &#{$i} {
      transform: rotateZ(#{90 * $i}deg);
      &:before {
        animation-delay: #{0.3 * $i}s;
      }
    }
  }
}
@keyframes foldCube {
  0%,
  10% {
    transform: perspective(140px) rotateX(-180deg);
    opacity: 0;
  }
  25%,
  75% {
    transform: perspective(140px) rotateX(0deg);
    opacity: 1;
  }
  90%,
  100% {
    transform: perspective(140px) rotateY(180deg);
    opacity: 0;
  }
}
</style>
