<template lang="pug">
  div
    h2.text-3xl.mt-4.pb-4 Iniciar Sesion
    p.text-gray-700.pb-4 Ingresa tu email y contraseña
    p.text-red-900.bg-red-200.rounded(class="w-11/12") {{ messageLogin }}
    form.w-full
      p.text-red-700 Ingresa tu email
      input.text-gray-700.mt-2(style="focus:outline-none" placeholder="Ingresa tu Email" type="email" v-model="form.username" class="w-11/12")
      p.text-red-700 Contraseña
      input.mb-2.text-gray-700.mt-2(style="focus:outline-none" placeholder="Ingresa tu contraseña" type="password" v-model="form.password" class="w-11/12")
      div.mt-8.flex.justify-content
        button.bg-red-700.text-gray-200.text-lg.rounded-lg.py-4.shadow-xl.hover_bg-blue-700.focus_outline-none(@click.prevent="signIn" class="w-11/12") Iniciar Sesión 
</template>

<script>
import { Auth } from 'aws-amplify'
import { AmplifyEventBus } from 'aws-amplify-vue'
import messagesJson from './mapMessage.json'

export default {
  name: 'Home',
  data() {
    return {
      messageLogin: '',
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async signIn() {
      const { username, password } = this.form
      try {
        await Auth.signIn(username, password)
        this.messageLogin = ''
        AmplifyEventBus.$emit('authState', 'signedIn')
        this.$router.push('/profile')
      } catch (e) {
        console.log(e.message)
        this.messageLogin = messagesJson[e.message]
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.formcontainer
	display flex
	flex-direction column
	width 500px
	margin 0 auto
.input
	margin-bottom 7px
	height 38px
	border none
	outline none
	border-bottom 2px solid #ddd
	font-size 20px
.button
	height 45px
	border none
	outline none
	background-color #dddddd
	margin-top 8px
	cursor pointer
	font-size 18px
	&:hover
		opacity .7
</style>
