<template>
  <div id="app">
    <gdp-button type="primary">按钮</gdp-button>
    <br>
    <!-- sync修饰符是一个语法糖 -->
    <gdp-button type="primary" @click="visible = true">显示遮罩按钮</gdp-button>
    <gdp-dialog title="提示66" :visible.sync="visible">
      <span>这是一段信息</span>
      <template slot="footer">
        <gdp-button @click="visible = false">取消</gdp-button>
        <gdp-button type="primary" @click="visible = false">确定</gdp-button>
      </template>
    </gdp-dialog>
  </div>
</template>

<script>


export default {
  name: 'App',
  data () {
    return {
      visible: false
    }
  }
}
</script>

<style lang="scss">
</style>
