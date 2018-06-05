<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs6 offset-xs3>
        <h1>Register</h1>
        <v-form @submit.prevent="register">
          <v-text-field type="email" name="email" :value="registerEmail" @input="setRegisterEmail" label="E-mail" required />
          <v-text-field type="password" name="password" :value="registerPassword" @input="setRegisterPassword" :counter="8" label="Password" required />

          <v-alert type="error" :value="registerError" v-text="registerError"></v-alert>

          <v-btn type="submit">
            <v-icon class="mr-1">account_circle</v-icon>
            Register
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
    ...mapActions('authentication', ['register']),
    ...mapMutations('authentication', [
      'setRegisterEmail',
      'setRegisterPassword'
    ])
  },
  computed: {
    ...mapState('authentication', [
      'registerEmail',
      'registerPassword',
      'registerError'
    ])
  }
}
</script>
