'use strict'

const Project = use('App/Models/Project')
const Task = use('App/Models/Task')
const AuthorizationService = use('App/Services/AuthorizationService')

class TaskController {
  async index ({ auth, params }) {
    const user = await auth.getUser()
    const projectId = params.id
    const project = await Project.find(projectId)

    AuthorizationService.verifyPermission(project, user)

    return project.tasks().fetch()
  }

  async store ({ auth, request, params }) {
    const user = await auth.getUser()
    const { description } = request.all()
    const projectId = params.id
    const project = await Project.find(projectId)
    const task = new Task()

    AuthorizationService.verifyPermission(project, user)

    task.fill({
      description
    })

    await project.tasks().save(task)
    return task
  }

  async update () {
  }

  async destroy () {
  }
}

module.exports = TaskController
