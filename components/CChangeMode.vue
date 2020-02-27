<template lang="pug">
  div.w-full.flex.justify-center
    CCard.h-32.bg-white.m-8(class="w-11/12")
      template(slot='content')
        p.pl-4.text-lg.font-mono(:class="[ $store.getters.darkIsActive ? 'text-red-700' : 'text-green-700']") PRESIONA PARA CAMBIAR MODO
        CCard.h-16.flex.justify-content.items-center.m-8(class="w-11/12" :class="[ $store.getters.darkIsActive ? 'bg-red-700' : 'bg-green-700']")
          template(slot='content')
            span.text-white.m-8.w.full(@click="toggleMenu") {{$store.getters.darkIsActive ? 'MODO INSEGURO' : 'MODO SEGURO'}}
</template>

<script>
import CCard from '~/components/CCard.vue'
export default {
  components: {
    CCard
  },
  methods: {
    toggleMenu() {
      this.$store.commit('TOGGLE_DARK')
    }
  }
}
</script>
