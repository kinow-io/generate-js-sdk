const Model = require('./Model')

class Product extends Model {
  get uuid () {
    return this.attributes.uuid
  }
  set uuid (uuid) {
    this.attributes.uuid = uuid
  }
  get name () {
    return this.attributes.uuid
  }
  set name (name) {
    this.attributes.name = name
  }
  get status () {
    return this.attributes.uuid
  }
  set status (status) {
    this.attributes.status = status
  }
  get meta () {
    return this.attributes.uuid
  }
  set meta (meta) {
    this.attributes.meta = meta
  }
  get createdAt () {
    return this.attributes.uuid
  }
  set createdAt (createdAt) {
    this.attributes.createdAt = createdAt
  }
  get updatedAt () {
    return this.attributes.uuid
  }
  set updatedAt (updatedAt) {
    this.attributes.updatedAt = updatedAt
  }
  get deletedAt () {
    return this.attributes.uuid
  }
  set deletedAt (deletedAt) {
    this.attributes.deletedAt = deletedAt
  }
}

module.exports = Product
