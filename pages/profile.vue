<template lang="pug">
  .h-screen.w-screen.bg-gray-200
    .h-screen
      CDotsMenuContacts
      .h-screen.overflow-hidden
        div.w-full.bg-white.shadow-xl.h-20
          div.absolute.right-0
            div.flex.items-center
              div.text-red-700.text-xl.pr-4.text- {{$store.getters.getcurrentUser}}
              amplify-sign-out
        CMenu
        div.flex.justify-end
          div(class="w-full h-screen lg_w-9/12 overflow-y-scroll")
      
</template>

<script>
import { components, AmplifyEventBus } from 'aws-amplify-vue'
import { Auth } from 'aws-amplify'
import CDotsMenuContacts from '~/components/CDotsMenuContacts.vue'
import CMenu from '~/components/CMenu.vue'

export default {
  components: {
    ...components,
    CDotsMenuContacts,
    CMenu
  },
  data() {
    return {
      body: ''
    }
  },
  async mounted() {
    AmplifyEventBus.$on('authState', (info) => {
      console.log('auth', info)
      if (info === 'signedOut') {
        this.$router.push('/')
      }
    })
    const userObject = await Auth.currentAuthenticatedUser()
    this.$store.commit('SET_CURRENT_USER', userObject.username)
  }
}
</script>
