<template>
<!--  <Switch></Switch>-->
  <Popover trigger="hover">
      <template v-slot:popover>
          <span>我是一个tip</span>
      </template>
      <el-button>点我呀</el-button>
  </Popover>
</template>

<script>
import Switch from '@/components/switch/index.vue'
import Popover from '@/components/popover/index.vue'
export default {
  name: 'Home',
  components:{
      Switch,
      Popover
  }
}
</script>

<style lang="sass"></style>
