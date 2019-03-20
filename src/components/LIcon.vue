<template>
  <div class="layout" :style="{ color: color}">
    <q-icon :class="icon" size="16px"/>
    {{ text }}
  </div>
</template>

<script>
export default {
  props:{
    text: String,
    icon: String,
    color: String,
  }
}
</script>


<style lang="stylus" scoped>
  .layout
    display inline-block
    font-size 20px
     .q-icon
      font-size 20px
      size '6px'
</style>
