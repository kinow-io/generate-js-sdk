const Service = require('./Service')

class EntitiesApi extends Service {
  getCategoryEntities (uuid) {
    return this.get(`/categories/${uuid}/entities`)
  }
  attachEntityToCategory (uuid, body) {
    return this.post(`/categories/${uuid}/entities`, body)
  }
  detachEntityFromCategory (uuid, entityUuid) {
    return this.delete(`/categories/${uuid}/entities`, entityUuid)
  }
  getEntities () {
    return this.get(`/entities`)
  }
  createEntity (body) {
    return this.post(`/entities`, body)
  }
  getEntity (uuid) {
    return this.get(`/entities/${uuid}`)
  }
  updateEntity (uuid, body) {
    return this.put(`/entities/${uuid}`, body)
  }
  deleteEntity (uuid) {
    return this.delete(`/entities/${uuid}`)
  }
  getEntityCategories (uuid) {
    return this.get(`/entities/${uuid}/categories`)
  }
  attachCategoryToEntity (uuid, body) {
    return this.post(`/entities/${uuid}/categories`, body)
  }
  detachCategoryFromEntity (uuid, categoryUuid) {
    return this.delete(`/entities/${uuid}/categories`, categoryUuid)
  }
  getEntityMedias (uuid) {
    return this.get(`/entities/${uuid}/medias`)
  }
  attachMediaToEntity (uuid, body) {
    return this.post(`/entities/${uuid}/medias`, body)
  }
  detachMediaFromEntity (uuid, mediaUuid) {
    return this.delete(`/entities/${uuid}/medias`, mediaUuid)
  }
  getEntityProducts (uuid) {
    return this.get(`/entities/${uuid}/products`)
  }
  attachProductToEntity (uuid, body) {
    return this.post(`/entities/${uuid}/products`, body)
  }
  detachProductFromEntity (uuid, productUuid) {
    return this.delete(`/entities/${uuid}/products`, productUuid)
  }
  getMediaEntities (uuid) {
    return this.get(`/medias/${uuid}/entities`)
  }
  attachEntityToMedia (uuid, body) {
    return this.post(`/medias/${uuid}/entities`, body)
  }
  detachEntityFromMedia (uuid, entityUuid) {
    return this.delete(`/medias/${uuid}/entities`, entityUuid)
  }
  getProductEntities (uuid) {
    return this.get(`/products/${uuid}/entities`)
  }
  attachEntityToProduct (uuid, body) {
    return this.post(`/products/${uuid}/entities`, body)
  }
  detachEntityFromProduct (uuid, entityUuid) {
    return this.delete(`/products/${uuid}/entities`, entityUuid)
  }
}

module.exports = EntitiesApi
