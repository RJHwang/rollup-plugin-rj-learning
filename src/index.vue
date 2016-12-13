<template>
  <div>
    <h2>{{name}}:</h2>
    <c1></c1>
    <c2></c2>
  </div>
</template>

<script>
import component1 from './c1.vue'
import component2 from './c2.vue'
export default {
  components: {
    c1: component1,
    c2: component2
  },
  data: function() {
    return {
      name: 'Components'
    }
  }
}
</script>