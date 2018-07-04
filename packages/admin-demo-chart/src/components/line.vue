<template>
  <div class="chart">
    <code>Here is just a simple example from <a href="https://github.com/LeungZ9/vue-echarts-lite" target="_blank">vue-echarts-lite</a>, please refer to this <a href="https://github.com/LeungZ9/vue-echarts-lite" target="_blank">link</a> for more detail</code>
    <lz-chart class="chart-main" :config="options"></lz-chart>
  </div>
</template>

<script>
export default {
  mounted() {
    var data = []
    for (var i = 0; i < 1000; i++) {
      data.push(this.randomData())
    }
    this.options.series[0].data = data
    this.options = Object.assign({}, this.options)

    setInterval(() => {
      var data = this.options.series[0].data
      for (var i = 0; i < 5; i++) {
        data.shift()
        data.push(this.randomData())
      }
      this.options = Object.assign({}, this.options)
    }, 1000)
  },
  methods: {
    randomData() {
      const con = this.con
      con.now = new Date(+con.now + con.oneDay)
      con.value = con.value + Math.random() * 21 - 10
      return {
        name: con.now.toString(),
        value: [
          [con.now.getFullYear(), con.now.getMonth() + 1, con.now.getDate()].join('/'),
          Math.round(con.value)
        ]
      }
    }
  },
  data() {
    return {
      options: {
        grid: {
          containLabel: true,
          left: 0,
          right: 20,
          top: 10,
          bottom: 0
        },
        tooltip: {
          trigger: 'axis',
          formatter: function(params) {
            params = params[0]
            var date = new Date(params.name)
            return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1]
          },
          axisPointer: {
            animation: false
          }
        },
        xAxis: {
          type: 'time',
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, '100%'],
          splitLine: {
            show: false
          }
        },
        series: [{
          name: '模拟数据',
          type: 'line',
          showSymbol: false,
          hoverAnimation: false,
          data: []
        }]
      },
      con: {
        now: +new Date(1997, 9, 3),
        value: Math.random() * 1000,
        oneDay: 24 * 3600 * 1000
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.chart {
  display: flex;
  flex-direction: column;
  height: 100%;
  &-main {
    flex: 1;
  }
}
code {
  background: #eef1f6;
  padding: 16px;
  margin-bottom: 24px;
  display: block;
}
</style>
