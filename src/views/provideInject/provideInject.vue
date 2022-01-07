<template>
  <div>
    <h3>我是父组件</h3>
    <my-marker></my-marker>
    <you-marker></you-marker>
    <el-button size="mini" @click="setLocation">改变location</el-button>
    <el-button size="mini" @click="setGeolocation">改变geolocation</el-button>
  </div>
</template>

<script lang="ts">
import { provide, ref, reactive, readonly } from 'vue'
import MyMarker from './components/MyMarker.vue'
import YouMarker from './components/YouMarker.vue'
export default {
  name: 'provideInject',
  components: {
    MyMarker,
    YouMarker
  },
  /** 选项API
   provide:{
      location: 'North Pole',
      geolocation: {
        longitude: 90,
        latitude: 135
      }
    }
   */
  /**
   * 组合API
   */
  setup() {
    const location = ref('North Pole')
    const geolocation = reactive({
      longitude: 90, latitude: 135
    })




    const setLocation = () => {
      location.value = '改变了'
    }

    const setGeolocation = () => {
      geolocation.longitude += 1
      geolocation.latitude += 1
    }

    const updateGeolocation = () => {
      geolocation.longitude += 1
      geolocation.latitude += 1
    }

    provide('location', location)
    provide('geolocation', readonly(geolocation)) //设置为只读
    provide('updateGeolocation', updateGeolocation)
    return {
      setLocation,
      setGeolocation
    }
  }

}
</script>

<style lang="stylus">

</style>
