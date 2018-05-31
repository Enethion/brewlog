const InvalidAccessException = use('App/Exceptions/InvalidAccessException')
const ResourceNotExistsException = use('App/Exceptions/ResourceNotExistException')

class AuthorizationService {
  verifyPermission (resource, user) {
    if (!resource) {
      throw new ResourceNotExistsException()
    }

    if (resource.user_id !== user.id) {
      throw new InvalidAccessException() /// TODO: invalidaccess exception
    }
  }
}

module.exports = new AuthorizationService()
