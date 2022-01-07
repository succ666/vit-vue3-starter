<template>
  <div>
    <h3>为 JavaScript 对象创建响应式状态 两种方法: ref 和 reactive</h3>
    <span class="num">ref : {{refCount}}</span>
    <span class="num">reactiveCount : {{state.reactiveCount}}</span>
    <el-button @click="addCount" size="mini">AddCount</el-button>
    <h3>自定义指令 directives</h3>
    <input v-focus />
    <details>
      <summary>代码</summary>
      <div>
        <p>
          directives: {
          focus: {
          // 指令的定义
          mounted(el) {
          el.focus()
          }
          }
          }
        </p>
      </div>
    </details>
  </div>
</template>

<script lang="ts">
import { ref, reactive } from 'vue'
export default {
  name: 'setupDemo',
  setup(){
    const refCount = ref(0)
    const state = reactive({ reactiveCount: 0 })


    const addCount = () => {
      refCount.value++
      state.reactiveCount++
    }
    return {
      refCount,
      addCount,
      state
    }
  },
  directives: {
    focus: {
      // 指令的定义
      mounted(el) {
        el.focus()
      }
    }
  }

}
</script>

<style lang="stylus">
.num{
  margin 0 20px
}

</style>
