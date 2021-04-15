<template>
  <div ref="list" class="list-view">
    <div :style="{ paddingTop: itemHeight * start + 'px', paddingBottom: itemHeight * (last - start - visibleCount) + 'px'}" >
      <div class="list-view-item" :class="{ first: index === listFirst, last: index === listLast }" :key="index" v-for="(item, index) in visibleData">{{ item.value }}</div>
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
    this.listFirst = Math.ceil(this.visibleData.length / 2)
    this.listLast = Math.ceil(this.visibleData.length / 8 * 5)
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
      visibleData: [],
      listFirst: 0,
      listLast: 0
    }
  },
  methods: {
    topCb(item) {
      if (!item.isIntersecting && this.start > 0) {
        let diff = Math.ceil(this.visibleCount / 8)
        this.start -= diff
        if (this.start < 0) this.start = 0
        this.visibleData = this.data.slice(this.start, this.start + this.visibleCount)
      }
    },
    bottomCb(item) {
      console.log(item, item.target.innerText)
      if (item.isIntersecting && this.last < this.data.length) {
        let diff = Math.ceil(this.visibleCount / 8)
        this.start += diff
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
