<template>
  <code v-html="content"></code>
</template>
<script>
export default {
  props: {
    content: {
      type: String,
      default:
        'Here is just a simple example from <a href="http://element-cn.eleme.io/#/en-US/" target="_blank">element</a>, please refer to this <a href="http://element-cn.eleme.io/#/en-US/component" target="_blank">link</a> for more detail'
    }
  },
  name: 'description'
}
</script>
<style lang="scss" scoped>
code {
  background: #eef1f6;
  padding: 16px;
  margin-bottom: 24px;
  display: block;
}
</style>
