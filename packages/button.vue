<template>
  <button class="gdp-button" :class="[`gdp-button--${type}`, {
    'is-plain': plain,
    'is-round': round,
    'is-circle': circle,
    'is-disabled': disabled
    }]"
    @click="handleClick"
    :disabled="disabled"
  >
    <i v-if="icon" :class="icon"></i>
    <!-- 如果没有传入任何的内容，当我们没有传入插槽的时候,就不显示span -->
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'gdpButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: ''
    }
  },
  created () {
    console.log(this.$slots)
  },
  mounted () {
    console.log(this.$options)
    console.log(this.$options.filters.capitalize)
    // console.log(this.$options.propsData.hasOwnProperty('disabled'))
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss" scoped>
$normal-color: #fff;
$normal-active-color: #409eff;
$primary-color: #409eff;
$primary-active-color: #66b1ff;
$info-color: #909399;
$info-active-color: #a6a9ad;
$success-color: #67c23a;
$success-active-color: #85ce61;
$warning-color: #e6a23c;
$warning-active-color: #ebb563;
$danger-color: #f56c6c;
$danger-active-color: #f78989;
.gdp-button {
  display: inline-block;
  position: relative;
  font-family: 'PingFang SC', 'Microsoft Yahei', sans-serif;
  line-height: 1;
  cursor: pointer;
  background-color: $normal-color;
  border: 1px solid #dcdfe6;
  white-space: nowrap;
  color: #606266;
  box-sizing: border-box;
  outline: none;
  transition: 0.1s;
  font-weight: 500;
  // 禁止文字被选中
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus {
    color: $normal-active-color;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}
.gdp-button--primary {
  color: #fff;
  background-color: $primary-color;
  border-color: $primary-color;
  //   box-shadow: inset 3px 6px 10px #337ecc, inset -3px -7px 10px #4dbeff;
  &:hover,
  &:focus {
    background: $normal-active-color;
    background-color: $normal-active-color;
    color: #fff;
  }
}
.gdp-button--success {
  color: #fff;
  background-color: $success-color;
  border-color: $success-color;
  &:hover,
  &:focus {
    background: $success-active-color;
    background-color: $success-active-color;
    color: #fff;
  }
}
.gdp-button--info {
  color: #fff;
  background-color: $info-color;
  border-color: $info-color;
  &:hover,
  &:focus {
    background: $info-active-color;
    background-color: $info-active-color;
    color: #fff;
  }
}
.gdp-button--warning {
  color: #fff;
  background-color: $warning-color;
  border-color: $warning-color;
  &:hover,
  &:focus {
    background: $warning-active-color;
    background-color: $warning-active-color;
    color: #fff;
  }
}
.gdp-button--danger {
  color: #fff;
  background-color: $danger-color;
  border-color: $danger-color;
  &:hover,
  &:focus {
    background: $danger-active-color;
    background-color: $danger-active-color;
    color: #fff;
  }
}
// 拟态
.gdp-button.is-mimicry {
  box-shadow: inset 3px 6px 10px #ccc, inset -3px -7px 10px #fff;
}
.gdp-button--primary.is-mimicry {
  box-shadow: inset 3px 6px 10px #337ecc, inset -3px -7px 10px #4dbeff;
}
.gdp-button--info.is-mimicry {
  box-shadow: inset 3px 6px 10px #73767a, inset -3px -7px 10px #adb0b8;
}
.gdp-button--success.is-mimicry {
  box-shadow: inset 3px 6px 10px #6aa54e, inset -3px -7px 10px #a0f774;
}
.gdp-button--warning.is-mimicry {
  box-shadow: inset 3px 6px 10px #bc914f, inset -3px -7px 10px #ffd977;
}
.gdp-button--danger.is-mimicry {
  box-shadow: inset 3px 6px 10px #c45656, inset -3px -7px 10px #ff8282;
}
// 朴素按钮
.gdp-button.is-plain {
  box-shadow: unset;
  &:hover,
  &:focus {
    background: #fff;
    border-color: #489eff;
    color: #409eff;
  }
}
.gdp-button--primary.is-plain {
  box-shadow: unset;
  color: #409eff;
  background: #ecf5ff;
  border-color: #b3d8ff;
  &:hover,
  &:focus {
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}
.gdp-button--success.is-plain {
  box-shadow: unset;
  color: #67c23a;
  background: #f0f9eb;
    border-color: #c2e7b0;
  &:hover,
  &:focus {
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
}
.gdp-button--info.is-plain {
  box-shadow: unset;
  color: #909399;
  background: #f4f4f5;
  border-color: #d3d4d6;
  &:hover,
  &:focus {
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
}
.gdp-button--warning.is-plain {
  box-shadow: unset;
  color: #e6a23c;
  background: #fdf6ec;
    border-color: #f5dab1;
  &:hover,
  &:focus {
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}
.gdp-button--danger.is-plain {
  box-shadow: unset;
  color: #f56c6c;
  background: #fef0f0;
  border-color: #fbc4c4;
  &:hover,
  &:focus {
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
}
// round
.gdp-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}
// 圆形按钮
.gdp-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}
// 让图标和文字之间空开
.gdp-button [class*='gdp-icon-'] + span {
  margin-left: 5px;
}
// 禁用
.gdp-button.is-disabled,
.gdp-button.is-disabled:focus,
.gdp-button.is-disabled:hover {
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
}
.gdp-button--primary.is-disabled, .gdp-button--primary.is-disabled:active, .gdp-button--primary.is-disabled:focus, .gdp-button--primary.is-disabled:hover {
    color: #fff;
    background-color: #a0cfff;
    border-color: #a0cfff;
}
.gdp-button--success.is-disabled, .gdp-button--success.is-disabled:active, .gdp-button--success.is-disabled:focus, .gdp-button--success.is-disabled:hover {
    color: #fff;
    background-color: #b3e19d;
    border-color: #b3e19d;
}
.gdp-button--info.is-disabled, .gdp-button--info.is-disabled:active, .gdp-button--info.is-disabled:focus, .gdp-button--info.is-disabled:hover {
    color: #fff;
    background-color: #c8c9cc;
    border-color: #c8c9cc;
}
.gdp-button--warning.is-disabled, .gdp-button--warning.is-disabled:active, .gdp-button--warning.is-disabled:focus, .gdp-button--warning.is-disabled:hover {
    color: #fff;
    background-color: #f3d19e;
    border-color: #f3d19e;
}
.gdp-button--danger.is-disabled, .gdp-button--danger.is-disabled:active, .gdp-button--danger.is-disabled:focus, .gdp-button--danger.is-disabled:hover {
    color: #fff;
    background-color: #fab6b6;
    border-color: #fab6b6;
}

// 朴素时禁用
.gdp-button.is-disabled.is-plain, .gdp-button.is-disabled.is-plain:focus, .gdp-button.is-disabled.is-plain:hover {
    background-color: #fff;
    border-color: #ebeef5;
    color: #c0c4cc;
}
.gdp-button--primary.is-plain.is-disabled, .gdp-button--primary.is-plain.is-disabled:active, .gdp-button--primary.is-plain.is-disabled:focus, .gdp-button--primary.is-plain.is-disabled:hover {
    color: #8cc5ff;
    background-color: #ecf5ff;
    border-color: #d9ecff;
}
.gdp-button--success.is-plain.is-disabled, .gdp-button--success.is-plain.is-disabled:active, .gdp-button--success.is-plain.is-disabled:focus, .gdp-button--success.is-plain.is-disabled:hover {
    color: #a4da89;
    background-color: #f0f9eb;
    border-color: #e1f3d8;
}
.gdp-button--info.is-plain.is-disabled, .gdp-button--info.is-plain.is-disabled:active, .gdp-button--info.is-plain.is-disabled:focus, .gdp-button--info.is-plain.is-disabled:hover {
    color: #bcbec2;
    background-color: #f4f4f5;
    border-color: #e9e9eb;
}
.gdp-button--warning.is-plain.is-disabled, .gdp-button--warning.is-plain.is-disabled:active, .gdp-button--warning.is-plain.is-disabled:focus, .gdp-button--warning.is-plain.is-disabled:hover {
    color: #f0c78a;
    background-color: #fdf6ec;
    border-color: #faecd8;
}
.gdp-button--danger.is-plain.is-disabled, .gdp-button--danger.is-plain.is-disabled:active, .gdp-button--danger.is-plain.is-disabled:focus, .gdp-button--danger.is-plain.is-disabled:hover {
    color: #f9a7a7;
    background-color: #fef0f0;
    border-color: #fde2e2;
}
.gdp-button.is-disabled {
  cursor: no-drop;
}
</style>
