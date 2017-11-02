const Model = require('./Model')

class AttachCategoryRequest extends Model {
  get categoryUuid () {
    return this.attributes.uuid
  }
  set categoryUuid (categoryUuid) {
    this.attributes.categoryUuid = categoryUuid
  }
}

module.exports = AttachCategoryRequest
