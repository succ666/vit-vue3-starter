<template>
  <div class="my-marker">
    <h3>我是子组件YouMarker</h3>
    <p>location: {{location}}</p>
    <p>geolocation: {{geolocation}}</p>
  </div>
</template>

<script lang="ts">
import { inject } from 'vue'
export default {
  name: 'YouMarker',
  /**
   * inject: ['location','geolocation'], 选项API
   */

  /**
   *  组合API
   */
  setup(){
    const location = inject('location')
    const geolocation = inject('geolocation')
    return{
      location,
      geolocation
    }
  }
}

</script>

<style lang="stylus">
  .my-marker{
    width 500px
    height 200px
    border 1px solid #000
  }
</style>
