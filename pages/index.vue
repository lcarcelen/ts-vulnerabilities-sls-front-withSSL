<template lang="pug">
  .w-screen.h-screen.bg-white
    CBackground
    .w-screen.h-screen.absolute.flex.justify-center.items-center.p-4.md_p-32
      .bg-white.rounded-lg.shadow-lg.lg_flex.lg_h-full(class="w-11/12")
        div.lg_p-20.lg_w-full.m-8(class="lg_w-1/2")
          div.w-ful.shadow-focus_outline
            div.text-red-700.text-3xl.lg_text-6xl.font-bold.font-mono.w-full.justify-center.flex CRONO
            div.text-red-700.text-2xl.font-bold.font-mono.justify-center.flex Aplicacion de Servicios Web Vulnerables
          div.flex.justify-center
            img.pt-8(src="./logo.png" class="w-11/12")
        div.flex.justify-content.w-full.lg_h-full.items-center.h-full.m-8(class="lg_w-1/2")
          div.w-full.flex.items-center.justify-center
            CAuth
</template>

<script>
import CAuth from '@/components/CAuth.vue'
import CBackground from '~/components/CBackground.vue'

export default {
  components: {
    CAuth,
    CBackground
  }
}
</script>

<style lang="stylus" scoped>
.container
  @apply w-full h-screen flex justify-center items-center text-center
</style>
