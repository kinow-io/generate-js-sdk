const Model = require('./Model')

class Price extends Model {
  get uuid () {
    return this.attributes.uuid
  }
  set uuid (uuid) {
    this.attributes.uuid = uuid
  }
  get productUuid () {
    return this.attributes.uuid
  }
  set productUuid (productUuid) {
    this.attributes.productUuid = productUuid
  }
  get status () {
    return this.attributes.uuid
  }
  set status (status) {
    this.attributes.status = status
  }
  get price () {
    return this.attributes.uuid
  }
  set price (price) {
    this.attributes.price = price
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

module.exports = Price
