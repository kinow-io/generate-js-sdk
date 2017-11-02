const Model = require('./Model')

class AttachProductRequest extends Model {
  get productUuid () {
    return this.attributes.uuid
  }
  set productUuid (productUuid) {
    this.attributes.productUuid = productUuid
  }
}

module.exports = AttachProductRequest
