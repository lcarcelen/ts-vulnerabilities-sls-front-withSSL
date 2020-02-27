<template lang="pug">
  div
    h2.text-3xl.mt-4.pb-4 {{ formState === 'signUp' ? 'Registrate' : 'Confirma Registro' }}
    p.text-red-900.bg-red-200.rounded(class="w-11/12") {{ messageLogin }}
    form.w-full(v-if="formState === 'signUp'")
      p.text-red-700 Ingresa tu email
      input.text-gray-700.mt-2(style="focus:outline-none" placeholder="Ingresa tu Email" type="email" v-model="form.username" class="w-11/12")
      p.text-red-700 Contraseña
      input.text-gray-700.mt-2(style="focus:outline-none" placeholder="Ingresa tu contraseña" type="password" v-model="form.password" class="w-11/12")
      p.text-red-700 Email
      input.text-gray-700.mt-2(style="focus:outline-none" placeholder="Ingresa tu email" type="email" v-model="form.email" class="w-11/12")
      button.mt-8.bg-red-700.text-gray-200.text-lg.rounded-lg.py-4.shadow-xl.hover_bg-blue-700.focus_outline-none(@click.prevent='signUp' class="w-11/12") Registrarse
    form.w-full(v-if="formState === 'confirmSignUp'")
      input.input(v-model='form.authCode')
      button.bg-red-700.text-gray-200.text-lg.rounded-lg.py-4.shadow-xl.hover_bg-blue-700.focus_outline-none(@click.prevent='confirmSignUp' class="w-11/12") Ingresar código de validación.
      a.text-red-700.mt-8.cursor-pointer(@click.prevent="resendSignUp" class="focus:text-gray-500") Reenviar código
</template>

<script>
import { Auth } from 'aws-amplify'
import { AmplifyEventBus } from 'aws-amplify-vue'
import messagesJson from './mapMessage.json'

export default {
  name: 'Home',
  data() {
    return {
      formState: 'signUp',
      messageLogin: '',
      form: {
        username: '',
        password: '',
        email: ''
      }
    }
  },
  methods: {
    async signUp() {
      const { username, password, email } = this.form
      try {
        await Auth.signUp({
          username,
          password,
          attributes: { email }
        })
        this.formState = 'confirmSignUp'
      } catch (e) {
        console.log(e.message)
        this.messageLogin = messagesJson[e.message]
      }
    },
    async confirmSignUp() {
      const { username, authCode, password } = this.form
      try {
        await Auth.confirmSignUp(username, authCode)
        await Auth.signIn(username, password)
        AmplifyEventBus.$emit('authState', 'signedIn')
        this.$router.push('/profile')
      } catch (e) {
        console.log(e.message)
        this.messageLogin = messagesJson[e.message]
      }
    },
    async resendSignUp() {
      const { username } = this.form
      try {
        await Auth.resendSignUp(username)
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
