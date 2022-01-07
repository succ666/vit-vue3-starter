<template>
  <div class="my-marker">
    <h3>我是子组件MyMarker</h3>
    <p>location: {{location}}</p>
    <p>geolocation: {{geolocation}}</p>
    <el-button @click="updateGeolocation"> 通过父组件的方法改变geolocation</el-button>

    <el-tooltip
        class="item"
        effect="dark"
        content="不能修改，因为是只读属性"
        placement="top-start"
    >
      <el-button @click="updateMyMarkerGeolocation"> 通过当前组件的方法改变geolocation</el-button>
    </el-tooltip>


  </div>
</template>

<script lang="ts">
import { inject } from 'vue'
export default {
  name: 'MyMarker',
  /**
   * inject: ['location','geolocation'], 选项API
   */

  /**
   *  组合API
   */
  setup(){
    const location = inject('location')
    const geolocation = inject('geolocation')
    const updateGeolocation = inject('updateGeolocation')
    const updateMyMarkerGeolocation = () => {
      geolocation.longitude += 1
      geolocation.latitude += 1
    }
    return{
      location,
      geolocation,
      updateGeolocation,
      updateMyMarkerGeolocation
    }
  }
}

</script>

<style scoped lang="stylus">
  .my-marker{
    width 800px
    height 200px
    border 1px solid #000
  }
</style>
