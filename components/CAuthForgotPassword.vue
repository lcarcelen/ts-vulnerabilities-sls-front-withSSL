<template lang="pug">
  div
    h2.text-3xl.mt-4.pb-4 Restablece tu contraseña
    form.w-full(v-if="formState === 'forgotPassword'")
      p.text-red-700 Ingresa tu email
      input.text-gray-700.mt-2(style="focus:outline-none" placeholder="Ingresa tu Email" type="email" v-model="form.username" class="w-11/12")
      div.mt-8.flex.justify-content
        button.bg-red-700.text-gray-200.text-lg.rounded-lg.py-4.shadow-xl.hover_bg-blue-700.focus_outline-none(@click.prevent="sendCode" class="w-11/12") Enviar Código 
    form.w-full(v-if="formState === 'confirmNewPassword'")
      p.text-red-700 Email
      input.text-gray-700.mt-2(style="focus:outline-none" placeholder="Ingresa tu Email" type="email" v-model="form.username" class="w-11/12")
      p.text-red-700 Código
      input.input(v-model='form.authCode')
      p.text-red-700 Contraseña
      input.text-gray-700.mt-2(style="focus:outline-none" placeholder="Nueva tu contraseña" type="password" v-model="form.newPassword" class="w-11/12")
      button.bg-red-700.text-gray-200.text-lg.rounded-lg.py-4.shadow-xl.hover_bg-blue-700.focus_outline-none(@click.prevent='forgotPasswordSubmit' class="w-11/12") Enviar
</template>

<script>
import { Auth } from 'aws-amplify'
import { AmplifyEventBus } from 'aws-amplify-vue'

export default {
  name: 'Home',
  data() {
    return {
      formState: 'forgotPassword',
      form: {
        username: '',
        authCode: '',
        newPassword: ''
      }
    }
  },
  methods: {
    async sendCode() {
      const { username } = this.form
      await Auth.forgotPassword(username)
      this.formState = 'confirmNewPassword'
    },
    async forgotPasswordSubmit() {
      const { username, authCode, newPassword } = this.form
      await Auth.forgotPasswordSubmit(username, authCode, newPassword)
      await Auth.signIn(username, newPassword)
      AmplifyEventBus.$emit('authState', 'signedIn')
      this.$router.push('/profile')
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
