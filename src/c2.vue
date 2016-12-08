<template>
  <p class='c2'>Hello {{name}}!</p>
</template>

<script>
  export default {
    data: function() {
      return {
        name: 'Component 2'
      }
    }
  }
</script>

<style>
  .c2 {
    color: #666;
  }
</style>