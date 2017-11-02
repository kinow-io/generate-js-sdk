const Model = require('./Model')
const Validate = require('../Validate')

class User extends Model {
  get uuid () {
    return this.attributes.uuid || uuid
  }
  set uuid (uuid) {
    if (Validate.isString(uuid)) {
      this.attributes.uuid = uuid
    } else {
      throw new TypeError()
    }
  }
  get meta () {
    return this.attributes.meta || {}
  }
  set meta (meta) {
    if (Validate.isJson(meta)) {
      this.attributes.meta = meta
    } else {
      throw new TypeError('meta is not a json')
    }
  }
  get password () {
    return this.attributes.password || {}
  }
  set password (password) {
    this.attributes.password = password
  }
  get email () {
    return this.attributes.email || {}
  }
  set email (email) {
    this.attributes.email = email
  }
  get status () {
    return this.attributes.status || {}
  }
  set status (status) {
    this.attributes.status = status
  }
}

module.exports = User
