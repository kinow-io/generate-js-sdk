const Pagination = require('./Model/Pagination')
const AttachCategoryRequest = require('./Model/AttachCategoryRequest')
const AttachEntityRequest = require('./Model/AttachEntityRequest')
const AttachMediaRequest = require('./Model/AttachMediaRequest')
const AttachProductRequest = require('./Model/AttachProductRequest')
const AttachSubscriptionRequest = require('./Model/AttachSubscriptionRequest')
const Categories = require('./Model/Categories')
const Category = require('./Model/Category')
const Entity = require('./Model/Entity')
const Entities = require('./Model/Entities')
const Media = require('./Model/Media')
const Medias = require('./Model/Medias')
const Product = require('./Model/Product')
const Products = require('./Model/Products')
const Price = require('./Model/Price')
const Prices = require('./Model/Prices')
const Subscription = require('./Model/Subscription')
const Subscriptions = require('./Model/Subscriptions')
const CategoriesApi = require('./Api/CategoriesApi')
const EntitiesApi = require('./Api/EntitiesApi')
const ProductsApi = require('./Api/ProductsApi')
const SubscriptionsApi = require('./Api/SubscriptionsApi')
const MediasApi = require('./Api/MediasApi')
const PricesApi = require('./Api/PricesApi')

module.exports = {
  Pagination,
  AttachCategoryRequest,
  AttachEntityRequest,
  AttachMediaRequest,
  AttachProductRequest,
  AttachSubscriptionRequest,
  Categories,
  Category,
  Entity,
  Entities,
  Media,
  Medias,
  Product,
  Products,
  Price,
  Prices,
  Subscription,
  Subscriptions,
  CategoriesApi,
  EntitiesApi,
  ProductsApi,
  SubscriptionsApi,
  MediasApi,
  PricesApi,
}