<template>
  <ul>
    <!-- 放入li -->
    <slot></slot>
  </ul>
</template>

<script>
export default {
    name:'my-ul'
}
</script>

<style scoped>
    ul{
        overflow: hidden;
    }
</style>
