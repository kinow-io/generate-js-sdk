const Service = require('./Service')

class MediasApi extends Service {
  getEntityMedias (uuid) {
    return this.get(`/entities/${uuid}/medias`)
  }
  attachMediaToEntity (uuid, body) {
    return this.post(`/entities/${uuid}/medias`, body)
  }
  detachMediaFromEntity (uuid, mediaUuid) {
    return this.delete(`/entities/${uuid}/medias`, mediaUuid)
  }
  getMedias () {
    return this.get(`/medias`)
  }
  createMedia (body) {
    return this.post(`/medias`, body)
  }
  GetMedia (uuid) {
    return this.get(`/medias/${uuid}`)
  }
  updateMedia (uuid, body) {
    return this.put(`/medias/${uuid}`, body)
  }
  deleteMedia (uuid) {
    return this.delete(`/medias/${uuid}`)
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
  getMediaProducts (uuid) {
    return this.get(`/medias/${uuid}/products`)
  }
  attachProductToMedia (uuid, body) {
    return this.post(`/medias/${uuid}/products`, body)
  }
  detachProductFromMedia (uuid, productUuid) {
    return this.delete(`/medias/${uuid}/products`, productUuid)
  }
  getProductMedias (uuid) {
    return this.get(`/products/${uuid}/medias`)
  }
  attachMediaToProduct (uuid, body) {
    return this.post(`/products/${uuid}/medias`, body)
  }
  detachMediaFromProduct (uuid, mediaUuid) {
    return this.delete(`/products/${uuid}/medias`, mediaUuid)
  }
}

module.exports = MediasApi
