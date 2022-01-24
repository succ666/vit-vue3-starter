<template>
  <div class="switch" @click="handleClick">
      <input type="checkbox" v-model="curChecked"/>
      <span :class="['core', curChecked ? 'on' : 'off']"></span>
  </div>
</template>

<script lang="ts">
export default {
    name: 'Switch',
    data: function () {
        return {
            curChecked: false
        }
    },
    methods: {
        handleClick(){
            this.curChecked = !this.curChecked
        }
    }

}
</script>

<style scoped>
  .switch{
      width: 70px;
      height: 32px;
      position: relative;
      border-radius: 30px;
  }
  input {
    position: absolute;
    width: 0;
    height: 0;
  }
  span.core:after {
    content: "";
    position: absolute;
    border-radius: 100%;
    transition: all 0.3s;
    width: 32px;
    height: 32px;
    background-color: #fff;
  }
  .core.off:after{
      left: 2px;
  }
  .core.on:after{
      left: 100%;
      margin-left: -34px;
  }
  .core{
      display: inline-block;
      height: 32px;
      border-radius: 30px;
      transition: background-color .3s;
  }
  .core.off{
      background-color: indianred;
  }
  .core.on{
      background-color: lightgreen;
  }



</style>
