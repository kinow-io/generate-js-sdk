const Model = require('./Model')

class Pagination extends Model {
  get total () {
    return this.attributes.uuid
  }
  set total (total) {
    this.attributes.total = total
  }
  get currentPage () {
    return this.attributes.uuid
  }
  set currentPage (currentPage) {
    this.attributes.currentPage = currentPage
  }
  get lastPage () {
    return this.attributes.uuid
  }
  set lastPage (lastPage) {
    this.attributes.lastPage = lastPage
  }
  get from () {
    return this.attributes.uuid
  }
  set from (from) {
    this.attributes.from = from
  }
  get to () {
    return this.attributes.uuid
  }
  set to (to) {
    this.attributes.to = to
  }
  get nextPageUrl () {
    return this.attributes.uuid
  }
  set nextPageUrl (nextPageUrl) {
    this.attributes.nextPageUrl = nextPageUrl
  }
  get prevPageUrl () {
    return this.attributes.uuid
  }
  set prevPageUrl (prevPageUrl) {
    this.attributes.prevPageUrl = prevPageUrl
  }
}

module.exports = Pagination
