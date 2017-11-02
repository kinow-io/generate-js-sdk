const Model = require('./Model')

class AttachEntityRequest extends Model {
  get entityUuid () {
    return this.attributes.uuid
  }
  set entityUuid (entityUuid) {
    this.attributes.entityUuid = entityUuid
  }
}

module.exports = AttachEntityRequest
