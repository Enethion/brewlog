import HTTP from '@/http.js'
import Vue from 'vue'

export default {
  namespaced: true,
  state: {
    projects: [],
    newProjectName: null
  },
  mutations: {
    setNewProjectName (state, name) {
      state.newProjectName = name
    },
    appendProject (state, project) {
      state.projects.push(project)
    },
    setProjects (state, projects) {
      state.projects = projects
    },
    setEditMode (state, project) {
      Vue.set(project, 'isEditMode', true)
    },
    unsetEditMode (state, project) {
      Vue.set(project, 'isEditMode', false)
    }
  },
  actions: {
    createProject ({ commit, state }) {
      return HTTP()
        .post('projects', {
          title: state.newProjectName
        })
        .then(({ data }) => {
          commit('appendProject', data)
          commit('setNewProjectName', null)
        })
        .catch(() => {
          // commit(
          //   'setRegisterError',
          //   'An error has occured trying to create your account'
          // )
        })
    },
    fetchProjects ({ commit, state }) {
      return HTTP()
        .get('projects')
        .then(({ data }) => {
          commit('setProjects', data)
        })
    },
    updateProject ({ commit, state }) {
      return HTTP()
        .post('projects', {
          title: state.newProjectName
        })
        .then(({ data }) => {
          commit('appendProject', data)
          commit('setNewProjectName', null)
        })
    }
  },
  getters: {}
}
