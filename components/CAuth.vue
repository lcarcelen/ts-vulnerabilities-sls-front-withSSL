<template lang="pug">
  .auth
    c-auth-sign-up(:toggle="toggle" v-if="formState === 'signUp'")
    c-auth-sign-in(v-if="formState === 'signIn' && formStateForgotPassword=== 'main'")
    c-auth-forgot-password(v-if="formState === 'signIn' && formStateForgotPassword=== 'forgotPassword'")
    a.text-red-700.mt-8.cursor-pointer(v-if="formState === 'signIn'" @click.prevent="forgotPassword" class="focus:text-gray-500") {{formStateForgotPassword === 'main' ? 'Olvide mi contraseña' :  'Regresar a Iniciar Sesión'}}
    p.text-purple-900.toggle(@click="toggle") {{formState === 'signUp' ? 'Ya tengo una cuenta ContApp? Iniciar Sesión' :  'Necesito una cuenta? Registrarme'}}
</template>

<script>
// import { AmplifyEventBus } from 'aws-amplify-vue'
import CAuthSignIn from '~/components/CAuthSignIn'
import CAuthSignUp from '~/components/CAuthSignUp'
import CAuthForgotPassword from '~/components/CAuthForgotPassword'

export default {
  name: 'App',
  components: {
    CAuthSignUp,
    CAuthSignIn,
    CAuthForgotPassword
  },
  data() {
    return {
      formState: 'signUp',
      formStateForgotPassword: 'main'
    }
  },
  mounted() {
    this.formState = 'signIn'
    this.formStateForgotPassword = 'main'
  },
  methods: {
    toggle() {
      this.formStateForgotPassword === 'none'
        ? (this.formStateForgotPassword = 'none')
        : (this.formStateForgotPassword = 'main')
      this.formState === 'signUp'
        ? (this.formState = 'signIn')
        : (this.formState = 'signUp')
    },
    forgotPassword() {
      this.formStateForgotPassword === 'forgotPassword'
        ? (this.formStateForgotPassword = 'main')
        : (this.formStateForgotPassword = 'forgotPassword')
    }
  }
}
</script>

<style lang="stylus" scoped>
.auth
  margin: 0 auto
  width: 460px
.toggle
  cursor: pointer
  font-size: 18px
</style>
