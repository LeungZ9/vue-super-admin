<template>
  <div>
    <description :content="content"></description>
  </div>
</template>
<script>
import description from './description'
export default {
  components: { description },
  data() {
    return {
      content: 'Here is just a simple example from using <a href="https://vuex.vuejs.org/" target="_blank">Vuex</a>, please refer to this <a href="https://vuex.vuejs.org/" target="_blank">link</a> for more detail'
    }
  }
}
</script>
