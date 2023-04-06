<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GdpCheckboxGroup',
  props: {
    value: {
      type: Array,
      default: () => []
    }
  },
  provide () {
    return {
      CheckboxGroup: this
    }
  }
}
</script>

<style lang="scss" scoped>

</style>