const Model = require('./Model')

class Subscriptions extends Model {
  get pagination () {
    return this.attributes.uuid
  }
  set pagination (pagination) {
    this.attributes.pagination = pagination
  }
  get data () {
    return this.attributes.uuid
  }
  set data (data) {
    this.attributes.data = data
  }
}

module.exports = Subscriptions
