<template>
  <transition name="dialog-fade">
    <!-- 对话框的遮罩，.self代表只有点击自己才触发 -->
    <div class="gdp-dialog__wrapper" v-show="visible" @click.self="handleClose">
      <div class="gdp-dialog" :style="{ width, marginTop: top }">
        <div class="gdp-dialog__header">
          <slot name="title">
            <span class="gdp-dialog__title">{{ title }}</span>
          </slot>
          <button class="gdp-dialog__headerbtn" @click="handleClose">
            <i class="gdp-icon-close"></i>
          </button>
        </div>
        <div class="gdp-dialog__body">
          <!-- 默认插槽 -->
          <slot></slot>
        </div>
        <div class="gdp-dialog__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'GdpDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '30%'
    },
    top: {
      type: String,
      default: '150px'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose () {
      console.log(2222)
      // this.$emit('close', false)
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style lang="scss" scoped>
/*
  scoped add a random attribute like data-v-xxx to all elememt
  and add this attribute to style
*/
.gdp-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.5);
  .gdp-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;
    &__header {
      padding: 20px 20px 10px;
      .gdp-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .gdp-dialog__headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
      }
    }
    &__body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &__footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      /* see the vue-loader doc  */
      ::v-deep .gdp-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
.dialog-fade-enter-active {
  animation: dialog-fade-in .3s;
}

.dialog-fade-leave-active {
  animation: dialog-fade-out .3s;
}

@keyframes dialog-fade-in {
  0% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes dialog-fade-out {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
}
</style>