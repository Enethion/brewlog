<template>
  <v-container>
    <v-layout>
      <v-flex xs4>
        <project-list/>
      </v-flex>

      <v-flex xs8 pl-2>
        <panel title="Tasks">
          Something
        </panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
import ProjectList from '@/components/ProjectList'

export default {
  components: {
    ProjectList
  },
  mounted () {
    this.fetchProjects()
  },
  methods: {
    ...mapActions('projects', ['fetchProjects'])
  }
}
</script>
