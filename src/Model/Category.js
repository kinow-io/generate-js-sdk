const Model = require('./Model')

class Category extends Model {
  get uuid () {
    return this.attributes.uuid
  }
  set uuid (uuid) {
    this.attributes.uuid = uuid
  }
  get parentUuid () {
    return this.attributes.uuid
  }
  set parentUuid (parentUuid) {
    this.attributes.parentUuid = parentUuid
  }
  get nleft () {
    return this.attributes.uuid
  }
  set nleft (nleft) {
    this.attributes.nleft = nleft
  }
  get nright () {
    return this.attributes.uuid
  }
  set nright (nright) {
    this.attributes.nright = nright
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

module.exports = Category
