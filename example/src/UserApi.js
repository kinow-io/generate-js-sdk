const Service = require('./Service')

class UserApi extends Service {
  constructor (config) {
    super (config)
    this.service = 'user.service'
  }
  getUsers () {
    return this.get('users')
  }
  getUser (userId) {
    return this.get(`users/${userId}`)
  }
  createUser (user) {
    return this.post('users', user)
  }
  updateUser (uuid, user) {
    return this.put(`users/${uuid}`, user)
  }
  deleteUser(uuid) {
    return this.delete(`users/${uuid}`)
  }
}

module.exports = UserApi
