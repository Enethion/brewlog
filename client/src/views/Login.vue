<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs6 offset-xs3>
        <h1>Login</h1>
        <v-form @submit.prevent="login">
          <v-text-field type="email" name="email" :value="loginEmail" @input="setLoginEmail" label="E-mail" required />
          <v-text-field type="password" name="password" :value="loginPassword" @input="setLoginPassword" label="Password" required />

          <v-alert type="error" :value="loginError" v-text="loginError"></v-alert>

          <v-btn type="submit">
            <v-icon class="mr-1">account_circle</v-icon>
            Login
          </v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions('authentication', ['login']),
    ...mapMutations('authentication', [
      'setLoginEmail',
      'setLoginPassword'
    ])
  },
  computed: {
    ...mapState('authentication', [
      'loginEmail',
      'loginPassword',
      'loginError'
    ])
  }
}
</script>
