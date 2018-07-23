'use strict'

const Post = use('App/Models/Post')
const AuthorizationService = use('App/Services/AuthorizationService')

class PostController {

  async index({ params, request }) {
    const { page } = request.get()
    const archiveDate = Object.values(params).reverse().reduce((prev, curr) => {
      if (prev) {
        return `${curr}/${prev}`
      } else {
        return curr
      }
    })
    const select = ['id', 'title', 'created_at', 'user_id']

    if (archiveDate) {
      return Post.query()
        .select(select)
        .where('slug', 'LIKE', `${archiveDate}/%`)
        .with('user')
        .paginate(page)
    } else {
      return Post.query()
        .select(select)
        .with('user')
        .paginate(page)
    }
  }

  async store({ auth, request }) {
    const user = await auth.getUser()
    const { title, body } = request.all()
    const post = new Post()

    post.fill({
      title,
      body
    })

    await user.posts().save(post)

    return post
  }

  async show({ params }) {
    const { year, month, day, titleSlug } = params
    const slug = `${year}/${month}/${day}/${titleSlug}`

    return Post.query().where('slug', slug).with('user').first()
  }

  async update({ auth, request, params }) {
    const user = await auth.getUser()
    const { id } = params
    const post = await Post.find(id)

    AuthorizationService.verifyPermission(post, user)

    post.merge(request.only(['title', 'body']))
    await post.save()
    return post
  }

  async destroy({ auth, request, params }) {
    const user = await auth.getUser()
    const { id } = params
    const post = await Post.find(id)

    AuthorizationService.verifyPermission(post, user)

    await post.delete()
    return post
  }
}

module.exports = PostController
