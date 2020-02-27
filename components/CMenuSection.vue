<template lang="pug">
details.relative.py-2.lg_py-0
  summary.outline-none.text-red-700.cursor-pointer
    .flex.content-center
      .pl-4.lg_pb-1 {{ title }}
      span.flex.justify-center.absolute.right-0.mr-6
        //- fa.h-4.text-gray-600.menu-items-desactive(:icon="['fas', 'angle-down']")
  ol.px-8.text-gray-600
    li.my-2.lg_my-0.lg_mt-2.lg_py-1(v-for='(item, index) in items' :key='`menu-item-${index}`')
      nuxt-link.menu__link.truncate(:to='item.link' class='lg:my-2')
        span.absolute.left-0.pl-6
          //- fa.h-4.text-red-700(:icon="['fas', item.icon]")
        span.ml-2  {{ item.label }} 
</template>
<script>
export default {
  name: 'CMenuSection',
  props: {
    title: {
      type: String,
      default: null
    },
    items: {
      type: Array,
      default: null
    }
  }
}
</script>
