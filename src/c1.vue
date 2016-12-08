<template>
  <p class='c1'>Hello {{name}}!</p>
</template>

<script>
  export default {
    data: function() {
      return {
        name: 'Component 1'
      }
    }
  }
</script>

<style scoped>
  .c1 {
    color: #fff;
  }
</style>