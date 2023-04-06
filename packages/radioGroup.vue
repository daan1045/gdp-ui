<template>
  <div class="gdp-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GdpRadioGroup',
  // provide: {
  //   foo: 'bar'
  // },
  provide () {
    return {
      RadioGroup: this
    }
  },
  props: {
    // gdp-radio-group接收到了 value 值
    // 将来还需要触发 当前组件的input事件
    // provido 与 inject
    value: null
  }
}
</script>

<style>

</style>