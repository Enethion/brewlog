<template>
  <panel title="Projects">
    <div class="project mb-1 mt-2" v-for="project in projects" :key="project.id">
      <v-layout>
        <v-flex xs9 class="text-xs-left">
          <span v-if="!project.isEditMode">{{project.title}}</span>
          <v-text-field v-else :value="project.title"></v-text-field>
        </v-flex>
        <v-flex xs3>
          <v-icon v-if="!project.isEditMode" @click="setEditMode(project)">edit</v-icon>
          <span v-else>
            <v-icon @click="updateProject(project)">check</v-icon>
            <v-icon @click="unsetEditMode(project)">cancel</v-icon>
          </span>
        </v-flex>
      </v-layout>
    </div>
    <v-form @submit.prevent="createProject">
      <v-layout row wrap>
        <v-flex xs8>
          <v-text-field name="title" :value="newProjectName" @input="setNewProjectName" label="My project name..."></v-text-field>
        </v-flex>
        <v-flex xc4>
          <v-btn type="submit" color="green darken-1" dark>
            <v-icon>add_circle</v-icon>
            Create
          </v-btn>
        </v-flex>
      </v-layout>
    </v-form>
  </panel>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('projects', [
      'newProjectName',
      'projects'
    ])
  },
  methods: {
    ...mapMutations('projects', [
      'setNewProjectName',
      'setEditMode'
    ]),
    ...mapActions('projects', ['createProject'])
  }
}
</script>

<style lang="sass">
.project
  font-size: 16px;
</style>
