const Model = require('./Model')

class AttachMediaRequest extends Model {
  get mediaUuid () {
    return this.attributes.uuid
  }
  set mediaUuid (mediaUuid) {
    this.attributes.mediaUuid = mediaUuid
  }
}

module.exports = AttachMediaRequest
