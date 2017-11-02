const Service = require('./Service')

class SubscriptionsApi extends Service {
  getCategorySubscriptions (uuid) {
    return this.get(`/categories/${uuid}/subscriptions`)
  }
  attachSubscriptionToCategory (uuid, body) {
    return this.post(`/categories/${uuid}/subscriptions`, body)
  }
  detachSubscriptionFromCategory (uuid, subscriptionUuid) {
    return this.delete(`/categories/${uuid}/subscriptions`, subscriptionUuid)
  }
  getSubscriptions () {
    return this.get(`/subscriptions`)
  }
  createSubscription (body) {
    return this.post(`/subscriptions`, body)
  }
  getSubscription (uuid) {
    return this.get(`/subscriptions/${uuid}`)
  }
  updateSubscription (uuid, body) {
    return this.put(`/subscriptions/${uuid}`, body)
  }
  deleteSubscription (uuid, subscriptionUuid) {
    return this.delete(`/subscriptions/${uuid}`, subscriptionUuid)
  }
  attachCategoryToSubscription (uuid, body) {
    return this.post(`/subscriptions/${uuid}/categories`, body)
  }
  detachCategoryFromSubscription (uuid, categoryUuid) {
    return this.delete(`/subscriptions/${uuid}/categories`, categoryUuid)
  }
  getSubscriptionProducts (uuid) {
    return this.get(`/subscriptions/${uuid}/products`)
  }
  attachProductToSubscription (uuid, body) {
    return this.post(`/subscriptions/${uuid}/products`, body)
  }
  detachProductFromSusbcription (uuid, productUuid) {
    return this.delete(`/subscriptions/${uuid}/products`, productUuid)
  }
}

module.exports = SubscriptionsApi
