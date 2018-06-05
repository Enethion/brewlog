<template>
  <div id="app">
    <v-app>
      <toolbar />
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <router-view/>
    </v-app>
  </div>
</template>

<script>
import router from '@/router'
import { mapGetters } from 'vuex'
import Toolbar from '@/components/Toolbar'

export default {
  data () {
    return {}
  },
  components: {
    Toolbar
  },
  computed: {
    ...mapGetters('authentication', ['isLoggedIn'])
  },
  mounted () {
    if (!this.isLoggedIn) {
      return router.push('/login')
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
