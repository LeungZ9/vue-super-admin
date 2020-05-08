// FCP 通过Mutation Observer观察到首次节点变动的时间
const domEntries = []
const observer = new MutationObserver((mutationsList)=>{
    for(var mutation of mutationsList) {
        if (mutation.type == 'childList') {
            console.log('A child node has been added or removed.');
        }
        if (mutation.type == 'addedNodes') {
            //TODO新增了节点，做处理，计算此时的可见性/位置/出现时间等信息，然后 push 进数组
            domEntries.push(mutation)
        }
    }
})

export default {
  // FP，全称 First Paint，首次绘制,是时间线上的第一个时间点，
  // 代表网页的第一个像素渲染到屏幕上所用时间，页面在屏幕上首次发生视觉变化的时间。
  FP() {
    const timings = performance.getEntriesByType('paint')[0]
    return timings ? Math.round(timings.startTime) : null
  },
  // 首次内容绘制，代表浏览器第一次向屏幕绘内容。
  // 只有首次绘制文本、图片（包含背景图）、非白色的canvas或SVG时才是
  FCP() {
    //算 DOM 变化时的最小那个时间，即节点首次变动的时间
    return Math.round(domEntries.length ? Math.min(...domEntries.map(entry => entry.time)) : 0);
  },
  // FMP 首次有意义的绘制，是页面主要内容出现在屏幕上的时间, 用户感知加载体验的主要指标。
  // 尚无标准化的定义, 因为很难以通用的方式去确定各种类型页面的关键内容
  FMP() {
   // 通 Mutation Observer 观察页面加载的一段时间(如前20s)内页面节点的变化,
   // 即元素新增/移除/隐藏等变化记录下来，这样可以得到页面元素的可见时间点及元素与可视区域的交叉信息
   // 自定义一个计算公式，比如根据元素的类型进行权重取值(div 权重1，img 权重2等),
   // 取元素与可视区域的交叉区域面积、可见度、 权重值之间的乘积为元素评分
  },
  // 首次输入延迟，是测量用户首次与您的站点交互时的时间
  //（即当他们单击链接/点击按钮/使用自定义的JavaScript驱动控件时）
  // 到浏览器实际能够回应这种互动的时间
  FID() {
    const timings = performance.getEntriesByType('first-input')[0];
    return timings ? timings : null
  },
  // 每秒帧率
  FPS() {
    //利用requestAnimationFrame, 标记次数count，当now大于lastTime+1S时, 计算FPS
  }
}
