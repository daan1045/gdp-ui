<template>
  <div class="gdp-switch" :class="{'is-checked': value}" @click="handleClick">
    <input class="gdp-switch__input" type="checkbox" ref="input" :name="name">
    <span class="gdp-switch__core" ref="core">
      <span class="gdp-switch__button"></span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'GdpSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  watch: {
    value () {
      this.coreStyle()
    }
  },
  mounted () {
    // 修改开关的颜色
    this.coreStyle()
  },
  methods: {
    handleClick () {
      this.$emit('input', !this.value)
    },
    coreStyle () {
      if (this.activeColor || this.inactiveColor) {
        let color = this.value ? this.activeColor : this.inactiveColor
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
      }
      this.$refs.input.checked = this.value
    }
  }
}
</script>

<style lang="scss" scoped>
.gdp-switch {
  display: inline-block;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  vertical-align: middle;
  &__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .gdp-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
  // checked style
  &.is-checked {
    .gdp-switch__core {
      border-color: #409eff;
      background-color: #409eff;
      .gdp-switch__button {
        transform: translateX(20px);
      }
    }
  }
}
// hide input
.gdp-switch__input {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  margin: 0;
}
</style>