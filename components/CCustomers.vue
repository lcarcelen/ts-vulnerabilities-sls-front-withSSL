<template lang="pug">
  div
    div(v-if='customers.length')
      div(v-for='customer in customers' :key='customer.reason')
        CCard.h-20.flex.justify-content.items-center.mb-6(:class="[ $store.getters.darkIsActive ? 'bg-red-700' : 'bg-green-700']") 
          template(slot='content')
            span 
                nuxt-link.pl-4.text-md.font-mono.text-white(:to='customer.link') {{customer.reason}}
</template>

<script>
import CCard from '~/components/CCard.vue'
export default {
  name: 'CCustomers',
  components: {
    CCard
  },
  data() {
    return {
      customers: [
        {
          reason: '1.) Inyeccion de datos y funciones de eventos',
          link: '/vulnerability1'
        },
        {
          reason: '2.)  Problemas de autenticacion',
          link: '/vulnerability2'
        },
        {
          reason: '3.) Configuracion insegura de despliegues',
          link: '/vulnerability3'
        },
        {
          reason: '4.) Permisos y roles de fucnion con priveligios excesivos',
          link: '/vulnerability4'
        },
        {
          reason: '5.) Monitoreo y registro de funciones inadecuadas',
          link: '/vulnerability5'
        },
        {
          reason: '6.) Dependencias de terceros inseguras.',
          link: '/vulnerability6'
        },
        {
          reason: '7.) Denegacion de servicios',
          link: '/vulnerability7'
        },
        {
          reason: '8.) Manipulacion de flujo de ejecicon de funciones',
          link: '/vulnerability8'
        },
        {
          reason:
            ' 9. ) Manejo inadecuado de excepciones y mensajes de erro muy detallados',
          link: '/vulnerability9'
        },
        {
          reason: '10.) Sql Inyeccion',
          link: '/vulnerability10'
        }
      ]
    }
  }
}
</script>
