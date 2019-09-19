<template>
  <div ref="list" class="list-view" @scroll="handleScroll($event)">
    <div class="list-view-phantom" :style="{ height: data.length * 30 + 'px' }"></div>
    <div ref="content" class="list-view-content">
      <div class="list-view-item" :key="index" v-for="(item, index) in visibleData">{{ item.value }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    itemHeight: {
      type: Number,
      default: 30
    }
  },
  mounted() {
    this.visibleCount = Math.ceil(this.$el.clientHeight / this.itemHeight)
    this.start = 0;
    this.end = this.start + this.visibleCount
    this.visibleData = this.data.slice(this.start, this.end)
  },
  data() {
    const data = [];
    for (let i = 0; i < 10000; i++) {
      data.push({ value: i })
    }
    return {
      data,
      start: 0,
      end: null,
      visibleCount: null,
      visibleData: [],
      scrollTop: 0
    }
  },
  methods: {
    handleScroll() {
      const scrollTop = this.$refs.list.scrollTop
      const fixedScrollTop = scrollTop - (scrollTop % this.itemHeight)
      this.$refs.content.style.webkitTransform = `translate3d(0, ${fixedScrollTop}px, 0)`;

      this.start = Math.floor(scrollTop / this.itemHeight)
      this.end = this.start + this.visibleCount;
      this.visibleData = this.data.slice(this.start, this.end)
    }
  }
};
</script>
<style lang="scss" scoped>
.list-view {
  height: 400px;
  overflow: auto;
  position: relative;
  border: 1px solid #666;
  &-phantom {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    z-index: -1;
  }
  &-content {
    left: 0;
    right: 0;
    top: 0;
    position: absolute;
  }
  &-item {
    padding: 5px;
    color: #666;
    height: 30px;
    line-height: 30px;
    box-sizing: border-box;
  }
}
</style>
