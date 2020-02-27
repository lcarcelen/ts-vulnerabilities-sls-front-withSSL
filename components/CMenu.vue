<template lang="pug">
  .shadow-lg.bg-white.h-screen.overflow-y-scroll.w-32.menu-container.z-20(:class="[ $store.getters.menuIsActive ? 'menu-container--active' : '']")
    CCustomers.pt-20.px-4
</template>
<script>
import CCustomers from '~/components/CCustomers.vue'

export default {
  components: {
    CCustomers
  }
}
</script>
<style lang="stylus" scoped>
.menu-container
  transition: width 0.3s ease-out, height 0.3s ease, border-bottom-right-radius 0.3s ease, opacity 0.1s ease
  @apply w-0 h-0 top-0 left-0 rounded-full opacity-0
  @apply fixed flex flex-col text-sm
  &--active
    @apply top-0 left-0 w-11/12 h-screen rounded-none opacity-100
 @screen lg
  .menu-container
    @apply w-3/12 h-full top-0 left-0 rounded-none opacity-100
</style>
