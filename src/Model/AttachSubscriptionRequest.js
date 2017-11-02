const Model = require('./Model')

class AttachSubscriptionRequest extends Model {
  get subscriptionUuid () {
    return this.attributes.uuid
  }
  set subscriptionUuid (subscriptionUuid) {
    this.attributes.subscriptionUuid = subscriptionUuid
  }
}

module.exports = AttachSubscriptionRequest
