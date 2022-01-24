<template>
  <div class="popper-container">
      <transition name="fade-in-linear">
          <div
              class="popper"
              ref="popper"
              :style="{ top: popTop + 'px', marginLeft: popMarginLeft + 'px'}"
              v-show="showPopper">
              <slot name="popover"></slot>
          </div>
      </transition>
      <div ref="wrapper">
          <slot></slot>
      </div>
  </div>

</template>

<script lang="ts">
export default {
    name: 'Popover',
    props: {
      trigger: {
          type: String,
          default: 'click'
      },
      visibleArrow: {
          type: Boolean,
          default: true
      }
    },
    data: function () {
        return {
            showPopper: false,
            popTop: 0 ,
            popMarginLeft: 0
        }
    },
    watch: {
        showPopper: function (val, oldVla){
            if(val){
                this.update()
            }
        }
    },
    methods: {
      doToggle() {
          this.showPopper = !this.showPopper
      },
      update() {
          const temp = this.popper.style.display
          this.popper.style.display = "block"
          const popWidth = this.popper.offsetWidth
          const popHeight = this.popper.offsetHeight
          this.popper.style.display = temp
          const wrapperWidth = this.wrapper.offsetWidth
          this.popMarginLeft = - ((popWidth - wrapperWidth) / 2)
          this.popTop = -(popHeight + 10)
      }

    },
    mounted() {
        this.popper = this.$refs.popper
        this.wrapper = this.$refs.wrapper.children[0]
        if(this.trigger === 'click'){
            this.wrapper.addEventListener('click', this.doToggle)
        }else if(this.trigger === 'hover'){
            this.wrapper.addEventListener('mouseenter',this.doToggle)
            this.wrapper.addEventListener('mouseleave',this.doToggle)
        }
        // if (this.visibleArrow) {
        //     const arrow = document.createElement('div');
        //     arrow.className = 'popper-arrow';
        //     popper.appendChild(arrow);
        // }
    }

}
</script>

<style scoped>
.popper-container{
    position: relative;
}
.popper{
    position: absolute;
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    min-width: 150px;
    min-height: 40px;
    padding: 10px;
    box-sizing: border-box;
}
.popper:after{
    position: absolute;
    left: 50%;
    bottom: -12px;
    content: '';
    width: 0;
    height: 0;
    margin-left: -6px;
    border: 6px solid transparent;
    border-top-color: #FFFFFF;
}

</style>
