# gdp-ui

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# 基本介绍

```
Vue进阶-从0到1搭建UI组件库
```

+ 哪些内容？

```
封装常见的功能性组件（Button、Modal、Form相关）
把组件封装成UI组件库并且发布到NPM上
```

+ 涉及知识点

```js
vue基础语法
组件基本语法
组件通讯(sync,provide,inject)
插槽的使用
props校验
过渡与动画处理
计算属性与监听属性
v-model语法糖
vue插件机制
npm发布
```

+ 课程收货

```js
掌握组件封装的语法和技巧
学会造轮子，了解element-ui组件库的实现原理
搭建和积累自己的组件库。
```

+ 学习前提

```
属于vue的进阶课程，所以要求
1. 有一定的vue基础，懂vue的基本语法
2. 熟悉ES6的一些常见语法
3. 对vue感兴趣。
```

## 效果演示

+ 初始化vue项目

```
vue create demo
```

+ 安装组件库

```js
yarn add gdp-ui
```

+ 全局导入

```js
import gdpUI from 'gdp-ui'
import 'gdp-ui/dist/gdp-ui.css'

Vue.use(gdpUI)
```

+ 使用组件

```html
<template>
  <div id="app">
    <gdp-button type="success" @click="visible=true">显示登录框</gdp-button>
    <gdp-dialog title="用户登录" :visible.sync="visible" width="30%">
      <gdp-form :model="model" label-width="80px">
        <gdp-form-item label="用户名">
          <gdp-input v-model="model.username" placeholder="请输入用户名" clearable></gdp-input>
        </gdp-form-item>
        <gdp-form-item label="用户密码">
          <gdp-input v-model="model.password" placeholder="请输入用户密码" show-password></gdp-input>
        </gdp-form-item>
        <gdp-form-item label="即时配送">
          <gdp-switch v-model="model.soon" active-color="green" inactive-color="red"></gdp-switch>
        </gdp-form-item>
        <gdp-form-item label="爱好">
          <gdp-checkbox-group v-model="model.hobby">
            <gdp-checkbox label="篮球"></gdp-checkbox>
            <gdp-checkbox label="足球"></gdp-checkbox>
            <gdp-checkbox label="乒乓球"></gdp-checkbox>
          </gdp-checkbox-group>
        </gdp-form-item>
        <gdp-form-item label="性别">
          <gdp-radio-group v-model="model.gender">
            <gdp-radio label="1">男</gdp-radio>
            <gdp-radio label="0">女</gdp-radio>
          </gdp-radio-group>
        </gdp-form-item>
      </gdp-form>
      <template v-slot:footer>
        <gdp-button type="primary" @click="login">登录</gdp-button>
        <gdp-button @click="visible=false">取消</gdp-button>
      </template>
    </gdp-dialog>
  </div>
</template>
```



# 常见组件封装

## 项目初始化

使用vue-cli脚手架快速搭建一个vue项目

```js
// 选择scss babel 和 eslint
vue create gdp-ui
```

启动项目

```js
cd gdp-ui
yarn serve
```

## button组件

### 前置知识

```js
组件通讯
组件插槽
props校验
```

### 参数支持

| 参数名   | 参数描述                                              | 参数类型 | 默认值  |
| -------- | ----------------------------------------------------- | -------- | ------- |
| type     | 按钮类型(primary / success / warning / danger / info) | string   | default |
| plain    | 是否是朴素按钮                                        | boolean  | false   |
| round    | 是否是圆角按钮                                        | boolean  | false   |
| circle   | 是否是圆形按钮                                        | boolean  | false   |
| disabled | 是否禁用按钮                                          | boolean  | false   |
| icon     | 图标类名                                              | string   | 无      |

### 事件支持

| 事件名 | 事件描述 |
| ------ | -------- |
| click  | 点击事件 |

### 基本结构

```html
<template>
  <button class="gdp-button">
    <span><slot></slot></span>
  </button>
</template>
```

样式

```scss
.gdp-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  // 禁止元素的文字被选中
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}
```

### type属性

结构

```html
<button class="gdp-button" :class="[`gdp-button--${type}`]">
```

js

```js
props: {
  type: {
    type: String,
    default: 'default'
  }
},
```

样式

```scss
.gdp-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;

  &:hover,
  &:focus {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
  }
}
.gdp-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover,
  &:focus {
    background: #85ce61;
    border-color: #85ce61;
    color: #fff;
  }
}
.gdp-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  &:hover,
  &:focus {
    background: #a6a9ad;
    border-color: #a6a9ad;
    color: #fff;
  }
}
.gdp-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover,
  &:focus {
    background: #ebb563;
    border-color: #ebb563;
    color: #fff;
  }
}
.gdp-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover,
  &:focus {
    background: #f78989;
    border-color: #f78989;
    color: #fff;
  }
}
```

### plain属性

```scss
// 朴素的按钮
.gdp-button.is-plain {
  &:hover,
  &:focus {
    background: #fff;
    border-color: #409eff;
    color: #409eff;
  }
}
.gdp-button--primary.is-plain {
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
```

### round属性

```scss
.gdp-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}
```

### circle属性

```scss
// 原形按钮
.gdp-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}
```

### icon的支持

在main.js中引入字体图标文件

```js
import './assets/fonts/font.scss'
```

结构

```html
<i :class="icon" v-if="icon"></i>
<slot></slot>
```

js

```js
icon: {
  type: String,
  default: ''
}
```

样式

```scss
// 按钮后的文本
.gdp-button [class*=gdp-icon-]+span {
    margin-left: 5px;
}
```

### 禁用按钮

+ props

```js
disabled: Boolean
```

+ 结构

```js
  <button class="gdp-button" :class="[`gdp-button--${type}`, {
    'is-plain': plain,
    'is-round': round,
    'is-circle': circle,
    'is-disabled': disabled
    }]"
    :disabled="disabled"
    @click="handleClick"
  >
```

+ 样式

```scss
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
.gdp-button.is-disabled,
.gdp-button.is-disabled:focus,
.gdp-button.is-disabled:hover {
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
}
.gdp-button--primary.is-disabled,
.gdp-button--primary.is-disabled:active,
.gdp-button--primary.is-disabled:focus,
.gdp-button--primary.is-disabled:hover {
    color: #fff;
    background-color: #a0cfff;
    border-color: #a0cfff;
}
.gdp-button--success.is-disabled,
.gdp-button--success.is-disabled:active,
.gdp-button--success.is-disabled:focus,
.gdp-button--success.is-disabled:hover {
    color: #fff;
    background-color: #b3e19d;
    border-color: #b3e19d;
}
.gdp-button--info.is-disabled,
.gdp-button--info.is-disabled:active,
.gdp-button--info.is-disabled:focus,
.gdp-button--info.is-disabled:hover {
    color: #fff;
    background-color: #c8c9cc;
    border-color: #c8c9cc;
}
.gdp-button--warning.is-disabled,
.gdp-button--warning.is-disabled:active,
.gdp-button--warning.is-disabled:focus,
.gdp-button--warning.is-disabled:hover {
    color: #fff;
    background-color: #f3d19e;
    border-color: #f3d19e;
}
.gdp-button--danger.is-disabled,
.gdp-button--danger.is-disabled:active,
.gdp-button--danger.is-disabled:focus,
.gdp-button--danger.is-disabled:hover {
    color: #fff;
    background-color: #fab6b6;
    border-color: #fab6b6;
}
```



### click事件支持

结构

```html
@click="handleClick"
```

js

```js
methods: {
  handleClick (e) {
    this.$emit('click', e)
  }
}
```

## dialog组件

### 前置知识

```js
vue过渡与动画
sync修饰符
具名插槽与v-slot指令
```

### 参数支持

| 参数名  | 参数描述                         | 参数类型 | 默认值 |
| ------- | -------------------------------- | -------- | ------ |
| title   | 对话框标题                       | string   | 提示   |
| width   | 宽度                             | string   | 50%    |
| top     | 与顶部的距离                     | string   | 15vh   |
| visible | 是否显示dialog（支持sync修饰符） | boolean  | false  |

### 事件支持

| 事件名 | 事件描述         |
| ------ | ---------------- |
| opened | 模态框显示的事件 |
| closed | 模态框关闭的事件 |

### 插槽说明

| 插槽名称 | 插槽描述           |
| -------- | ------------------ |
| default  | dialog的内容       |
| title    | dialog的标题       |
| footer   | dialog的底部操作区 |

### 基本结构

结构

```html
<template>
  <div class="gdp-dialog__wrapper">
    <div class="gdp-dialog">
      <div class="gdp-dialog__header">
        <span class="gdp-dialog__title">提示</span>
        <button class="gdp-dialog__headerbtn">
          <i class="gdp-icon-close"></i>
        </button>
      </div>
      <div class="gdp-dialog__body">
        <span>这是一段信息</span>
      </div>
      <div class="gdp-dialog__footer">
        <gdp-button>取消</gdp-button>
        <gdp-button type="primary">确定</gdp-button>
      </div>
    </div>
  </div>
</template>
```

样式

```scss
.gdp-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0,0,0, .5);

  .gdp-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
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
        .el-icon-close {
          color: #909399;
        }
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
      .gdp-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
```

### title属性

> title属性既支持传入title属性，也只是传入title插槽

结构

```html
<slot name="title">
  <span class="gdp-dialog__title">{{title}}</span>
</slot>
```

js

```js
props: {
  title: {
    type: String,
    default: '提示'
  }
}
```

### width属性与top属性

结构

```html
<div class="gdp-dialog" :style="style">
```

js

```js
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      tpye: String,
      default: '15vh'
    }
  },
  computed: {
    style () {
      return {
        width: this.width,
        marginTop: this.top
      }
    }
  }
```

### 内容插槽

```html
<div class="gdp-dialog__body">
  <!-- 默认插槽 -->
  <slot></slot>
</div>
```

### 底部插槽

```html
<div class="gdp-dialog__footer" v-if="$slots.footer">
  <slot name="footer"></slot>
</div>
```

### 控制显示与隐藏

结构

```html
<div class="gdp-dialog__wrapper" v-show="visible">
```

点击遮罩层关闭

```html
<div class="gdp-dialog__wrapper" v-show="visible" @click.self="handleClose">
```

点击关闭按钮关闭

```html
 <button class="gdp-dialog__headerbtn" @click="handleClose">
```

关闭处理

```js
handleClose () {
	this.$emit('update:visible', false)
}
```



### 动画处理

结构

```html
<transition name="dialog-fade" @after-enter="afterEnter" @after-leave="afterLeave"></transition>
```

样式

```scss
.dialog-fade-enter-active {
  animation: dialog-fade-in .4s;
}

.dialog-fade-leave-active {
  animation: dialog-fade-out .4s;
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
```

js

```js
afterEnter () {
  this.$emit('opened')
},
afterLeave () {
  this.$emit('closed')
}
```

## input组件

### 参数支持

| 参数名称      | 参数描述                  | 参数类型 | 默认值 |
| ------------- | ------------------------- | -------- | ------ |
| placeholder   | 占位符                    | string   | 无     |
| type          | 文本框类型(text/password) | string   | text   |
| disabled      | 禁用                      | boolean  | false  |
| clearable     | 是否显示清空按钮          | boolean  | false  |
| show-password | 是否显示密码切换按钮      | boolean  | false  |
| name          | name属性                  | string   | 无     |



### 事件支持

| 事件名称 | 事件描述       |
| -------- | -------------- |
| blur     | 失去焦点事件   |
| change   | 内容改变事件   |
| focus    | 获取的焦点事件 |

### 基本结构

节本结构

```html
<template>
  <div class="gdp-input">
    <input type="text" class="gdp-input__inner">
  </div>
</template>
```

样式

```scss
.gdp-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .gdp-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }
  }
}
```

### props处理placeholde, type,name

+ placeholer

```html
<input type="text" class="gdp-input__inner" :placeholder="placeholder">
```

```js
  props: {
    placeholder: {
      type: String,
      default: ''
    }
  }
```

+ type属性-密码框

```html
    <input
      class="gdp-input__inner"
      :placeholder="placeholder"
      :type="type"
      :disabled="disabled"
    >
```

```js
    type: {
      type: String,
      default: 'text'
    },
```



### 禁用按钮-disabled

结构

```html
<div class="gdp-input">
  <input
         class="gdp-input__inner"
         :class="{'is-disabled': disabled}"
         :placeholder="placeholder"
         :type="type"
         :disabled="disabled"
         >
</div>
```

js

```js
    disabled: {
      type: Boolean,
      default: false
    }
```

样式

```html
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
```

### v-model语法糖

+ v-model语法糖

```js
给普通表单元素元素使用v-model
<input type="text" v-model="mes">
<input v-bind:value="mes"  v-on:input="mes= $event.target.value"/>
  
给组件使用v-model指令,实质上相当于给组件传递了value属性以及监听了input事件
<gdp-input v-model="msg">
等价与
<gdp-input v-bind:value="mes"  v-on:input="mes= arguments[0]"/>
```

+ html结构

```html
<div class="gdp-input">
  <input
         class="gdp-input__inner"
         :class="{'is-disabled': disabled}"
         :placeholder="placeholder"
         :type="type"
         :disabled="disabled"
         :value="value"
         @input="handleInput"
         >
</div>
```

js

```js
  
props: {
  value: [String, Number]
},
methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    }
  }
```

### clearable与show-password处理

如果给input组件传入clearable属性，会显示一个清空的按钮，如果传入show-password，则会显示一个用于切换密码显示的处理

+ 基本结构

```html
<span class="gdp-input__suffix">
  <i class="gdp-input__icon gdp-icon-circle-close"></i>
  <i class="gdp-input__icon gdp-icon-view"></i>
</span>
```

+ props接收

```js
clearable: {
  type: Boolean,
  default: false
},
showPassword: {
  type: Boolean,
  default: false
}
```

+ 控制按钮显示和隐藏

```html
<span class="gdp-input__suffix">
  <i class="gdp-input__icon gdp-icon-circle-close" v-if="clearable"></i>
  <i class="gdp-input__icon gdp-icon-view" v-if="showPassword"></i>
</span>
```

样式

```scss
.gdp-input--suffix {
  .gdp-input__inner {
    padding-right: 30px;
  }
  .gdp-input__suffix {
    position: absolute;
    height: 100%;
    right: 10px;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all .3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color .2s cubic-bezier(.645,.045,.355,1);
    }
  }
}
```

+ 控制`gdp-input--suffix`的类名

```html
<div class="gdp-input" :class="{'gdp-input--suffix': this.clearable || this.showPassword}">

<span class="gdp-input__suffix" v-if="this.clearable || this.showPassword">
```

+ 使用计算属性优化

```js
computed: {
  showSuffix () {
    return this.clearable || this.showPassword
  }
}
```

+ 注册事件-清空内容和切换密码显示

```js
    clear () {
      // console.log('123')
      this.$emit('input', '')
    }
```

+ 控制密码显示

```js
data () {
  return {
    // 是否显示密码
    passwordVisible: false
  }
},
  
<input
  class="gdp-input__inner"
  :class="{'is-disabled': disabled}"
  :placeholder="placeholder"
  :type="showPassword ? (passwordVisible ? 'text': 'password') : type"
  :name="name"
  :disabled="disabled"
  :value="value"
  @input="handleInput"
  ref="input"
>
    
handlePasswordVisible () {
  // 切换type类型
  this.passwordVisible = !this.passwordVisible
}
```

### 其他常见事件的支持

```js
    handleFocus (e) {
      this.$emit('focus', e)
    },
    handleBlur (e) {
      this.$emit('blur', e)
    },
    handleChange (e) {
      this.$emit('change', e.target.value)
    }
```

## switch组件

### 参数支持

| 参数名称      | 参数描述             | 参数类型 | 默认值 |
| ------------- | -------------------- | -------- | ------ |
| v-model       | 双向绑定             | 布尔类型 | false  |
| name          | name属性             | string   | text   |
| activeColor   | 自定义的激活的颜色   | string   |        |
| inactiveColor | 自定义的不激活的颜色 | string   |        |

### 事件支持

| 事件名称 | 事件描述           |
| -------- | ------------------ |
| change   | change时触发的事件 |



### 基本结构

+ 页面

```html
<template>
  <label class="gdp-switch">
    <span class="gdp-switch__core">
      <span class="gdp-switch__button"></span>
    </span>
  </label>
</template>
```

+ 样式

```scss
.gdp-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  .gdp-switch__core {
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
    transition: border-color .3s,background-color .3s;
    vertical-align: middle;
    .gdp-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all .3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}
```

### v-mode双向绑定

+ 接收value值

```js
props: {
  value: {
    type: Boolean,
    default: false
  }
},
```

+ 注册点击事件

```html
<div class="gdp-switch" @click="handleClick">
```

+ 事件处理程序

```js
methods: {
  handleClick () {
    this.$emit('input', !this.value)
  }
}
```

+ 选中样式

```scss
.gdp-switch.is-checked {
  .gdp-switch__core {
    border-color: #409eff;
    background-color: #409eff;
    .gdp-switch__button {
      transform: translateX(20px);
    }
  }
}
```

+ 控制选中样式

```html
<div class="gdp-switch" @click="handleClick" :class="{'is-checked': value}">
```

### 自定义颜色

在使用switch时，希望能够自定义开关的颜色

```html
<gdp-switch
  v-model="value"
  active-color="#13ce66"
  inactive-color="#ff4949">
</gdp-switch>
```

+ props接收

```js
activeColor: {
  type: String,
  default: ''
},
inactiveColor: {
  type: String,
  default: ''
}
```

+ 封装设置颜色的方法

```js
setColor () {
  if (this.activeColor || this.inactiveColor) {
    let color = this.value ? this.activeColor : this.inactiveColor
    this.$refs.core.style.borderColor = color
    this.$refs.core.style.backgroundColor = color
  }
}
```

+ 页面一进入调用

```js
mounted () {
  // 设置颜色
  this.setColor()
},
```

+ 改变状态后调用

```js
async handleClick () {
  this.$emit('input', !this.value)
  // 改变input框的值
  await this.$nextTick()
  this.setColor()
},
```

### name属性支持

用户在使用switch组件的时候，实质上是当成表单元素来使用的。因此可能会用到组件的name属性。**因此需要在switch组件中添加一个checkbox，并且当值改变的时候，也需要设置checkbox的value值**

+ 结构

```html
<input
  class="gdp-switch__input"
  type="checkbox"
>
```

+ 样式

```scss
.gdp-switch__input {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  margin: 0;
}
```

+ name属性的支持

```js
name: {
  type: String,
  default: ''
}
```

+ 控制checkbox的值与value同步

```js
  mounted () {
    this.$refs.input.checked = this.value
  },
  methods: {
    async handleChange () {
      this.$emit('input', !this.value)
      // 修改checkbox的值
      await this.$nextTick()
      this.$refs.input.checked = this.value
    }
  }
```

## radio组件

### 前置知识点

```js
radio的基本使用
```

### 参数支持

| 参数名称 | 参数描述        | 参数类型            | 默认值 |
| -------- | --------------- | ------------------- | ------ |
| v-model  | 双向绑定        | 布尔类型            | false  |
| label    | 单选框的value值 | string，num,boolean | ''     |
| name     | name属性        | string              |        |

### 基本结构

+ html结构

```html
<template>
  <label class="gdp-radio">
    <span class="gdp-radio__input">
      <span class="gdp-radio__inner"></span>
      <input
        class="gdp-radio__original"
        type="radio"
      >
    </span>
    <span class="gdp-radio__label">
      我是label
    </span>
  </label>
</template>
```

+ 样式

```scss
.gdp-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  .gdp-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .gdp-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%) scale(0);
        transition: transform .15s ease-in;
      }
    }
    .gdp-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0px;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .gdp-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
}
```

### 选中的样式

```js
.gdp-radio.is-checked {
  .gdp-radio__input {
    .gdp-radio__inner {
      border-color: #409eff;
      background: #409eff;
      &:after {
        transform: translate(-50%,-50%) scale(1);
      }
    }
  }
  .gdp-radio__label {
    color: #409eff;
  }
}
```

### label与插槽的处理

+ props接收

```js
props: {
  label: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  }
}
```

+ 处理插槽

```html
<span class="gdp-radio__label">
  <slot></slot>
  <!-- 如果没有插槽内容，那么label就是内容 -->
  <template v-if="!$slots.default">{{label}}</template>
</span>
```

### v-model处理

+ 接收props数据

```js
name: {
  type: String,
  default: ''
},
value: {
  type: [String, Boolean, Number],
  default: ''
}
```

+ 结构

```html
<input
  class="gdp-radio__original"
  type="radio"
  :name="name"
  value="label"
  v-model="model"
>
```

+ 提供计算属性

```html
computed: {
  model: {
    get () {
      return this.value
    },
    set (value) {
      this.$emit('input', value)
    }
  }
},

```

+ 控制选中样式

```html
<label class="gdp-radio" :class="{'is-checked': model === label}">

```

## radio-group组件

使用radio组件的缺点，需要给每个组件都绑定v-mode,可以使用radio-group包裹

### 	前置知识

```js
provide与inject

```

### 基本结构

结构

```html
<template>
  <div class="radio-group">
    <slot></slot>
  </div>
</template>

```

数据

```html
export default {
  name: 'GdpRadioGroup',
  provide () {
    return {
      RadioGroup: this
    }
  },
  props: {
    value: null
  }
}

```

### 修改radio组件

+ 接收inject

```js
inject: {
  RadioGroup: {
    default: ''
  }
},

```

+ 计算属性判断是否包裹在group中

```js
// 判断包裹在group中
isGroup () {
  return !!this.RadioGroup
}

```

+ 修改代码

```js
model: {
  get () {
    return this.isGroup ? this.RadioGroup.value : this.value
  },
  set (value) {
    this.isGroup ? this.RadioGroup.$emit('input', value) : this.$emit('input', value)
  }
}

```

## checkbox组件

###  基本结构

```html
<template>
  <label class="gdp-checkbox">
    <span class="gdp-checkbox__input">
      <span class="gdp-checkbox__inner"></span>
      <input type="checkbox" class="gdp-checkbox__original">
    </span>
    <span class="gdp-checkbox__label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

```

样式

```scss
.gdp-checkbox {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
  margin-right: 30px;
  .gdp-checkbox__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .gdp-checkbox__inner {
      display: inline-block;
      position: relative;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      background-color: #fff;
      z-index: 1;
      transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);
      &:after {
        box-sizing: content-box;
        content: "";
        border: 1px solid #fff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 4px;
        position: absolute;
        top: 1px;
        transform: rotate(45deg) scaleY(0);
        width: 3px;
        transition: transform .15s ease-in .05s;
        transform-origin: center;
      }
    }
    .gdp-checkbox__original {
      opacity: 0;
      outline: none;
      position: absolute;
      left: 10px;
      margin: 0;
      width: 0;
      height: 0;
      z-index: -1;
    }
  }
  .gdp-checkbox__label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }
}

```

### 选中的样式

```scss
.gdp-checkbox.is-checked {
  .gdp-checkbox__input {
    .gdp-checkbox__inner {
      background-color: #409eff;
      border-color: #409eff;
      &:after {
        transform: rotate(45deg) scaleY(1);
      }
    }
  }
  .gdp-checkbox__label {
    color: #409eff;
  }
}

```

### 接收props数据

```js
value: {
  type: Boolean,
  default: false
},
name: {
  type: String,
  default: ''
},
label: {
  type: String,
  default: ''
}

```

### 控制checked样式

+ 控制label

```html
<span class="gdp-checkbox__label">
  <slot></slot>
  <template v-if="!$slots.default">{{label}}</template>
</span>

```

+ 提供model计算属性

```js
model: {
  get () {
    return this.value
  },
  set (value) {
    this.$emit('input', value)
  }
}

```

+ 判断是否选中

```js
<label class="gdp-checkbox" :class="{'is-checked': value}">

```

## checkbox-group组件

使用checkbox-group组件包裹checkbox

### 结构

```html
<template>
  <div class="gdp-checkbox-group">
    <slot></slot>
  </div>
</template>


```

+ 提供provide

```js
props: {
  value: {
    type: Array,
    default: function () {
      return []
    }
  }
},
provide () {
  return {
    CheckboxGroup: this
  }
}

```

### 修改checkbox

+ 接收inject

```js
inject: {
  CheckboxGroup: {
    default: ''
  }
},

```

+ 修改

```js
    model: {
      get () {
        return this.isGroup ? this.CheckboxGroup.value : this.value
      },
      set (value) {
        if (this.isGroup) {
          // 修改value属性
          console.log(value, this.label)
          this.CheckboxGroup.$emit('input', value)
        } else {
          this.$emit('input', value)
        }
      }
    },  
isGroup () {
    return !!this.CheckboxGroup
  },
  isChecked () {
    // 判断是否选中
    // console.log(this.model)
    if (this.isGroup) {
      return this.model.includes(this.label)
    } else {
      return this.model
    }
  }

```

## form组件

基本结构

```html
<template>
  <div class="gdp-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GdpForm',
  provide () {
    return {
      Form: this
    }
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    labelWidth: {
      type: String,
      default: '80px'
    }
  }
}
</script>

<style>

</style>

```

## form-item组件

基本结构

```html
<template>
  <div class="gdp-form-item">
    <label class="gdp-form-item__label" :style="labelStyle">{{label}}</label>
    <div class="gdp-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GdpFormItem',
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  inject: ['Form'],
  computed: {
    labelStyle () {
      return {
        width: this.Form.labelWidth
      }
    }
  }
}
</script>

<style lang="scss">
.gdp-form-item {
  margin-bottom: 25px;
  .gdp-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .gdp-form-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidden;
  }
}
</style>


```



# 封装成UI组件库

## 目录调整

+ 根目录创建两个文件夹`packages`和`examples`

```js
packages: 用于存放所有的组件
examples: 用于进行测试,把src改成examples

```

+ 把components中所有的组件放入到packages中

+ 把fonts放到packages中

+ 删除原来的src目录

## vue.config.js配置

新增`vue.config.js`配置

```js
const path = require('path')
module.exports = {
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: config => {
    config.module
      .rule('js')
      .include.add(path.resolve(__dirname, 'packages')).end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
  }
}

```

+ 统一导出packages中所有的组件

```js
// 统一导出
// 导入颜色选择器组件
import Button from './button'
import Dialog from './dialog'
import Input from './input'
import Checkbox from './checkbox'
import Radio from './radio'
import RadioGroup from './radio-group'
import Switch from './switch'
import CheckboxGroup from './checkbox-group'
import Form from './form'
import FormItem from './form-item'
import './fonts/font.scss'

// 存储组件列表
const components = [
  Button,
  Dialog,
  Input,
  Checkbox,
  Radio,
  RadioGroup,
  Switch,
  CheckboxGroup,
  Form,
  FormItem
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 遍历注册全局组件
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

// 判断是否是直接引入文件,如果是，就不用调用 Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// 导出的对象必须具有 install，才能被 Vue.use() 方法安装
export default {
  install
}


```

## 测试

在examples中的main.js中进行导入测试

```js
import Vue from 'vue'
import App from './App.vue'

import GdpUI from '../packages'

Vue.use(GdpUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')


```





# 发布到npm与github

## 发布到github



## 发布到npm

 [https://cli.vuejs.org/zh/guide/build-targets.html#%E5%BA%93](https://cli.vuejs.org/zh/guide/build-targets.html#库) 

+ 在scripts中新增一条 打包命令

```js
"lib": "vue-cli-service build --target lib packages/index.js"

```



+ 发布到npm

修改package.json文件

```js
"private": false,
"main": "dist/gdp-ui.umd.min.js",
"author": {
  "name": "答案"
},

```



增加 ``.npmignore`文件

```js
# 忽略目录
examples/
packages/
public/
 
# 忽略指定文件
vue.config.js
babel.config.js
*.map

```



+ npm发布

```js
npm login
npm publish

```

