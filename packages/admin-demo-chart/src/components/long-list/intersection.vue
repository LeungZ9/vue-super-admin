<template>
  <div ref="list" class="list-view">
    <div :style="{ paddingTop: itemHeight * start + 'px', paddingBottom: itemHeight * (last - start - visibleCount) + 'px'}" >
      <div class="list-view-item" :class="{ first: index === 0, last: index === visibleData.length - 1 }" :key="index" v-for="(item, index) in visibleData">{{ item.value }}</div>
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
    this.visibleCount = Math.ceil(this.$el.clientHeight / this.itemHeight) * 2
    this.start = 0
    this.last = this.start + this.visibleCount
    this.visibleData = this.data.slice(this.start, this.start + this.visibleCount)
    this.handleInersection()
  },
  data() {
    const data = []
    for (let i = 0; i < 1000; i++) {
      data.push({ value: i })
    }
    return {
      data,
      start: 0,
      last: 0,
      visibleCount: 0,
      visibleData: []
    }
  },
  methods: {
    topCb(item) {
      console.log(item)
      // if (item.isIntersecting && this.start > 0) {
      //   this.start -= this.visibleCount / 2
      //   this.visibleData = this.data.slice(this.start, this.start + this.visibleCount)
      // }
    },
    bottomCb(item) {
      if (item.isIntersecting && this.last < this.data.length) {
        this.start += this.visibleCount / 2
        this.visibleData = this.data.slice(this.start, this.start + this.visibleCount)
        if (this.last < this.start + this.visibleCount) this.last = this.start + this.visibleData.length
      }
    },
    handleInersection() {
      setTimeout(() => {
        this.observer = new IntersectionObserver(entries => {
          entries.forEach(item => {
            if (item.target.classList.contains('first')) {
              this.topCb(item)
            }
            if (item.target.classList.contains('last')) {
              this.bottomCb(item)
            }
          })
        }, {
          root: this.$refs.list
        })
        this.observer.observe(this.$refs.list.querySelector('.first'))
        this.observer.observe(this.$refs.list.querySelector('.last'))
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.list-view {
  height: 100%;;
  overflow: auto;
  position: relative;
  &-item {
    padding: 5px;
    color: #666;
    height: 30px;
    line-height: 30px;
    box-sizing: border-box;
  }
}
</style>
