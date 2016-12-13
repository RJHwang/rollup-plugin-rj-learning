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

<style>
.c1 {
  color: #fff;
}
</style>