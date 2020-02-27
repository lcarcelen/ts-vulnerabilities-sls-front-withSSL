<template lang="pug">
  .fixed.z-30.flex.align-middle.pl-4
    .py-8.px-4.order-2.flex.items-center.rounded.relative.z-30.lg_hidden(@click="toggleMenu")
      .w-16.h-8.relative.bg-transparent.menu-dots(:class="{ on: $store.getters.menuIsActive }")
        span 
          a.pl-4.text-lg.font-mono.text-red-700 Vulnerabilidades
</template>

<script>
export default {
  methods: {
    toggleMenu() {
      this.$store.commit('TOGGLE_MENU')
    }
  }
}
</script>

<style lang="stylus" scoped>
div.menu-dots
  left: -50%
  &.menu-dots
    &:after,
      &:before,
      span
      width: 10%
      height: 20%
      border-radius: 100px
      position: absolute
      left: 0px
      background: red
      transform: rotate(0deg)
      transition: all 0.4s
      left: 1%
      right: 1%
      margin: 0 auto
    &:after,
      &:before
      content: ''
    &:after
      top: -10%
      margin-top: 0px
      background: red
    &:before
      bottom: -10%
      margin-bottom: 0px
      background: green
    span
      top: 50%
      margin-top: -2px
    &.on
      &:after
        transform: rotate(135deg) translate(10px, -11px)
        width: 60%
      &:before
        transform: rotate(225deg)
        bottom: 50%
        margin-bottom: -2px
        width: 60%
      span
        display: none
        transform: rotate(135deg)
#circle_menu:hover #rouded_button
  transition: border-top-left-radius 0.1s ease, border-top-rigth-radius 0.1s ease, border-bottom-left-radius 0.1s ease,width 0.5s ease, height 0.5s ease, rotate 2s ease
  @apply
</style>
