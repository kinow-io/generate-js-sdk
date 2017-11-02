# ProductsApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCategoryProducts**](ProductsApi.md#getCategoryProducts) | **GET** /categories/{uuid}/products | Get products attached to category
[**attachProductToCategory**](ProductsApi.md#attachProductToCategory) | **POST** /categories/{uuid}/products | Attach product to category
[**detachProductFromCategory**](ProductsApi.md#detachProductFromCategory) | **DELETE** /categories/{uuid}/products | Detach product from category
[**getEntityProducts**](ProductsApi.md#getEntityProducts) | **GET** /entities/{uuid}/products | Get products attached to entity
[**attachProductToEntity**](ProductsApi.md#attachProductToEntity) | **POST** /entities/{uuid}/products | Attach product to entity
[**detachProductFromEntity**](ProductsApi.md#detachProductFromEntity) | **DELETE** /entities/{uuid}/products | Detach product from entity
[**getMediaProducts**](ProductsApi.md#getMediaProducts) | **GET** /medias/{uuid}/products | Get products attached to medias
[**attachProductToMedia**](ProductsApi.md#attachProductToMedia) | **POST** /medias/{uuid}/products | Attach product to media
[**detachProductFromMedia**](ProductsApi.md#detachProductFromMedia) | **DELETE** /medias/{uuid}/products | Detach a product from a media
[**getProducts**](ProductsApi.md#getProducts) | **GET** /products | Get products
[**createProduct**](ProductsApi.md#createProduct) | **POST** /products | Create product
[**getProduct**](ProductsApi.md#getProduct) | **GET** /products/{uuid} | Get product
[**updateProduct**](ProductsApi.md#updateProduct) | **PUT** /products/{uuid} | Update product
[**deleteProduct**](ProductsApi.md#deleteProduct) | **DELETE** /products/{uuid} | Delete product
[**getProductCategories**](ProductsApi.md#getProductCategories) | **GET** /products/{uuid}/categories | Get categories attached to product
[**attachCategoryToProduct**](ProductsApi.md#attachCategoryToProduct) | **POST** /products/{uuid}/categories | Attach category to product
[**detachCategoryFromProduct**](ProductsApi.md#detachCategoryFromProduct) | **DELETE** /products/{uuid}/categories | Detach category from product
[**getProductEntities**](ProductsApi.md#getProductEntities) | **GET** /products/{uuid}/entities | Get entities attached to product
[**attachEntityToProduct**](ProductsApi.md#attachEntityToProduct) | **POST** /products/{uuid}/entities | Attach entity to product
[**detachEntityFromProduct**](ProductsApi.md#detachEntityFromProduct) | **DELETE** /products/{uuid}/entities | Detach entity from product
[**getProductMedias**](ProductsApi.md#getProductMedias) | **GET** /products/{uuid}/medias | Get medias attached to product
[**attachMediaToProduct**](ProductsApi.md#attachMediaToProduct) | **POST** /products/{uuid}/medias | Attach media to product
[**detachMediaFromProduct**](ProductsApi.md#detachMediaFromProduct) | **DELETE** /products/{uuid}/medias | Detach media from product
[**getProductPrices**](ProductsApi.md#getProductPrices) | **GET** /products/products/{uuid}/prices | Get prices attached to product
[**getSubscriptionCategories**](ProductsApi.md#getSubscriptionCategories) | **GET** /subscriptions/{uuid}/categories | Get categories attached to subscription
[**getSubscriptionProducts**](ProductsApi.md#getSubscriptionProducts) | **GET** /subscriptions/{uuid}/products | Get products attached to subscription
[**attachProductToSubscription**](ProductsApi.md#attachProductToSubscription) | **POST** /subscriptions/{uuid}/products | Attach product to subscription
[**detachProductFromSusbcription**](ProductsApi.md#detachProductFromSusbcription) | **DELETE** /subscriptions/{uuid}/products | Detach product from subscription


# **getCategoryProducts**
> getCategoryProducts(uuid)

Get products attached to category

### Example
```js
import { ProductsApi } from 'sdk-js-catalog-service'

try {
  let api = new ProductsApi()
  let response = api.getCategoryProducts(uuid)
} catch (e) {
  console.error(e)
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**uuid** | **string**|  |
**body** | [**\Kinow\OrderService\Client\Model\AttachTaxRequest**](../Model/\Kinow\OrderService\Client\Model\AttachTaxRequest.md)|  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
# **attachProductToCategory**
> attachProductToCategory(uuid, body)

Attach product to category

### Example
```js
import { ProductsApi } from 'sdk-js-catalog-service'

try {
  let api = new ProductsApi()
  let response = api.attachProductToCategory(uuid, body)
} catch (e) {
  console.error(e)
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**uuid** | **string**|  |
**body** | [**\Kinow\OrderService\Client\Model\AttachTaxRequest**](../Model/\Kinow\OrderService\Client\Model\AttachTaxRequest.md)|  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
# **detachProductFromCategory**
> detachProductFromCategory(uuid, productUuid)

Detach product from category

### Example
```js
import { ProductsApi } from 'sdk-js-catalog-service'

try {
  let api = new ProductsApi()
  let response = api.detachProductFromCategory(uuid, productUuid)
} catch (e) {
  console.error(e)
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**uuid** | **string**|  |
**body** | [**\Kinow\OrderService\Client\Model\AttachTaxRequest**](../Model/\Kinow\OrderService\Client\Model\AttachTaxRequest.md)|  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
# **getEntityProducts**
> getEntityProducts(uuid)

Get products attached to entity

### Example
```js
import { ProductsApi } from 'sdk-js-catalog-service'

try {
  let api = new ProductsApi()
  let response = api.getEntityProducts(uuid)
} catch (e) {
  console.error(e)
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**uuid** | **string**|  |
**body** | [**\Kinow\OrderService\Client\Model\AttachTaxRequest**](../Model/\Kinow\OrderService\Client\Model\AttachTaxRequest.md)|  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
# **attachProductToEntity**
> attachProductToEntity(uuid, body)

Attach product to entity

### Example
```js
import { ProductsApi } from 'sdk-js-catalog-service'

try {
  let api = new ProductsApi()
  let response = api.attachProductToEntity(uuid, body)
} catch (e) {
  console.error(e)
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**uuid** | **string**|  |
**body** | [**\Kinow\OrderService\Client\Model\AttachTaxRequest**](../Model/\Kinow\OrderService\Client\Model\AttachTaxRequest.md)|  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
# **detachProductFromEntity**
> detachProductFromEntity(uuid, productUuid)

Detach product from entity

### Example
```js
import { ProductsApi } from 'sdk-js-catalog-service'

try {
  let api = new ProductsApi()
  let response = api.detachProductFromEntity(uuid, productUuid)
} catch (e) {
  console.error(e)
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**uuid** | **string**|  |
**body** | [**\Kinow\OrderService\Client\Model\AttachTaxRequest**](../Model/\Kinow\OrderService\Client\Model\AttachTaxRequest.md)|  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
# **getMediaProducts**
> getMediaProducts(uuid)

Get products attached to medias

### Example
```js
import { ProductsApi } from 'sdk-js-catalog-service'

try {
  let api = new ProductsApi()
  let response = api.getMediaProducts(uuid)
} catch (e) {
  console.error(e)
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**uuid** | **string**|  |
**body** | [**\Kinow\OrderService\Client\Model\AttachTaxRequest**](../Model/\Kinow\OrderService\Client\Model\AttachTaxRequest.md)|  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
# **attachProductToMedia**
> attachProductToMedia(uuid, body)

Attach product to media

### Example
```js
import { ProductsApi } from 'sdk-js-catalog-service'

try {
  let api = new ProductsApi()
  let response = api.attachProductToMedia(uuid, body)
} catch (e) {
  console.error(e)
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**uuid** | **string**|  |
**body** | [**\Kinow\OrderService\Client\Model\AttachTaxRequest**](../Model/\Kinow\OrderService\Client\Model\AttachTaxRequest.md)|  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
# **detachProductFromMedia**
> detachProductFromMedia(uuid, productUuid)

Detach a product from a media

### Example
```js
import { ProductsApi } from 'sdk-js-catalog-service'

try {
  let api = new ProductsApi()
  let response = api.detachProductFromMedia(uuid, productUuid)
} catch (e) {
  console.error(e)
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**uuid** | **string**|  |
**body** | [**\Kinow\OrderService\Client\Model\AttachTaxRequest**](../Model/\Kinow\OrderService\Client\Model\AttachTaxRequest.md)|  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
# **getProducts**
> getProducts()

Get products

### Example
```js
import { ProductsApi } from 'sdk-js-catalog-service'

try {
  let api = new ProductsApi()
  let response = api.getProducts()
} catch (e) {
  console.error(e)
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**uuid** | **string**|  |
**body** | [**\Kinow\OrderService\Client\Model\AttachTaxRequest**](../Model/\Kinow\OrderService\Client\Model\AttachTaxRequest.md)|  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
# **createProduct**
> createProduct(body)

Create product

### Example
```js
import { ProductsApi } from 'sdk-js-catalog-service'

try {
  let api = new ProductsApi()
  let response = api.createProduct(body)
} catch (e) {
  console.error(e)
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**uuid** | **string**|  |
**body** | [**\Kinow\OrderService\Client\Model\AttachTaxRequest**](../Model/\Kinow\OrderService\Client\Model\AttachTaxRequest.md)|  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
# **getProduct**
> getProduct(uuid)

Get product

### Example
```js
import { ProductsApi } from 'sdk-js-catalog-service'

try {
  let api = new ProductsApi()
  let response = api.getProduct(uuid)
} catch (e) {
  console.error(e)
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**uuid** | **string**|  |
**body** | [**\Kinow\OrderService\Client\Model\AttachTaxRequest**](../Model/\Kinow\OrderService\Client\Model\AttachTaxRequest.md)|  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
# **updateProduct**
> updateProduct(uuid, body)

Update product

### Example
```js
import { ProductsApi } from 'sdk-js-catalog-service'

try {
  let api = new ProductsApi()
  let response = api.updateProduct(uuid, body)
} catch (e) {
  console.error(e)
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**uuid** | **string**|  |
**body** | [**\Kinow\OrderService\Client\Model\AttachTaxRequest**](../Model/\Kinow\OrderService\Client\Model\AttachTaxRequest.md)|  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
# **deleteProduct**
> deleteProduct(uuid)

Delete product

### Example
```js
import { ProductsApi } from 'sdk-js-catalog-service'

try {
  let api = new ProductsApi()
  let response = api.deleteProduct(uuid)
} catch (e) {
  console.error(e)
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**uuid** | **string**|  |
**body** | [**\Kinow\OrderService\Client\Model\AttachTaxRequest**](../Model/\Kinow\OrderService\Client\Model\AttachTaxRequest.md)|  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
# **getProductCategories**
> getProductCategories(uuid)

Get categories attached to product

### Example
```js
import { ProductsApi } from 'sdk-js-catalog-service'

try {
  let api = new ProductsApi()
  let response = api.getProductCategories(uuid)
} catch (e) {
  console.error(e)
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**uuid** | **string**|  |
**body** | [**\Kinow\OrderService\Client\Model\AttachTaxRequest**](../Model/\Kinow\OrderService\Client\Model\AttachTaxRequest.md)|  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
# **attachCategoryToProduct**
> attachCategoryToProduct(uuid, body)

Attach category to product

### Example
```js
import { ProductsApi } from 'sdk-js-catalog-service'

try {
  let api = new ProductsApi()
  let response = api.attachCategoryToProduct(uuid, body)
} catch (e) {
  console.error(e)
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**uuid** | **string**|  |
**body** | [**\Kinow\OrderService\Client\Model\AttachTaxRequest**](../Model/\Kinow\OrderService\Client\Model\AttachTaxRequest.md)|  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
# **detachCategoryFromProduct**
> detachCategoryFromProduct(uuid, categoryUuid)

Detach category from product

### Example
```js
import { ProductsApi } from 'sdk-js-catalog-service'

try {
  let api = new ProductsApi()
  let response = api.detachCategoryFromProduct(uuid, categoryUuid)
} catch (e) {
  console.error(e)
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**uuid** | **string**|  |
**body** | [**\Kinow\OrderService\Client\Model\AttachTaxRequest**](../Model/\Kinow\OrderService\Client\Model\AttachTaxRequest.md)|  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
# **getProductEntities**
> getProductEntities(uuid)

Get entities attached to product

### Example
```js
import { ProductsApi } from 'sdk-js-catalog-service'

try {
  let api = new ProductsApi()
  let response = api.getProductEntities(uuid)
} catch (e) {
  console.error(e)
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**uuid** | **string**|  |
**body** | [**\Kinow\OrderService\Client\Model\AttachTaxRequest**](../Model/\Kinow\OrderService\Client\Model\AttachTaxRequest.md)|  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
# **attachEntityToProduct**
> attachEntityToProduct(uuid, body)

Attach entity to product

### Example
```js
import { ProductsApi } from 'sdk-js-catalog-service'

try {
  let api = new ProductsApi()
  let response = api.attachEntityToProduct(uuid, body)
} catch (e) {
  console.error(e)
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**uuid** | **string**|  |
**body** | [**\Kinow\OrderService\Client\Model\AttachTaxRequest**](../Model/\Kinow\OrderService\Client\Model\AttachTaxRequest.md)|  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
# **detachEntityFromProduct**
> detachEntityFromProduct(uuid, entityUuid)

Detach entity from product

### Example
```js
import { ProductsApi } from 'sdk-js-catalog-service'

try {
  let api = new ProductsApi()
  let response = api.detachEntityFromProduct(uuid, entityUuid)
} catch (e) {
  console.error(e)
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**uuid** | **string**|  |
**body** | [**\Kinow\OrderService\Client\Model\AttachTaxRequest**](../Model/\Kinow\OrderService\Client\Model\AttachTaxRequest.md)|  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
# **getProductMedias**
> getProductMedias(uuid)

Get medias attached to product

### Example
```js
import { ProductsApi } from 'sdk-js-catalog-service'

try {
  let api = new ProductsApi()
  let response = api.getProductMedias(uuid)
} catch (e) {
  console.error(e)
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**uuid** | **string**|  |
**body** | [**\Kinow\OrderService\Client\Model\AttachTaxRequest**](../Model/\Kinow\OrderService\Client\Model\AttachTaxRequest.md)|  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
# **attachMediaToProduct**
> attachMediaToProduct(uuid, body)

Attach media to product

### Example
```js
import { ProductsApi } from 'sdk-js-catalog-service'

try {
  let api = new ProductsApi()
  let response = api.attachMediaToProduct(uuid, body)
} catch (e) {
  console.error(e)
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**uuid** | **string**|  |
**body** | [**\Kinow\OrderService\Client\Model\AttachTaxRequest**](../Model/\Kinow\OrderService\Client\Model\AttachTaxRequest.md)|  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
# **detachMediaFromProduct**
> detachMediaFromProduct(uuid, mediaUuid)

Detach media from product

### Example
```js
import { ProductsApi } from 'sdk-js-catalog-service'

try {
  let api = new ProductsApi()
  let response = api.detachMediaFromProduct(uuid, mediaUuid)
} catch (e) {
  console.error(e)
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**uuid** | **string**|  |
**body** | [**\Kinow\OrderService\Client\Model\AttachTaxRequest**](../Model/\Kinow\OrderService\Client\Model\AttachTaxRequest.md)|  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
# **getProductPrices**
> getProductPrices(uuid)

Get prices attached to product

### Example
```js
import { ProductsApi } from 'sdk-js-catalog-service'

try {
  let api = new ProductsApi()
  let response = api.getProductPrices(uuid)
} catch (e) {
  console.error(e)
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**uuid** | **string**|  |
**body** | [**\Kinow\OrderService\Client\Model\AttachTaxRequest**](../Model/\Kinow\OrderService\Client\Model\AttachTaxRequest.md)|  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
# **getSubscriptionCategories**
> getSubscriptionCategories(uuid)

Get categories attached to subscription

### Example
```js
import { ProductsApi } from 'sdk-js-catalog-service'

try {
  let api = new ProductsApi()
  let response = api.getSubscriptionCategories(uuid)
} catch (e) {
  console.error(e)
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**uuid** | **string**|  |
**body** | [**\Kinow\OrderService\Client\Model\AttachTaxRequest**](../Model/\Kinow\OrderService\Client\Model\AttachTaxRequest.md)|  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
# **getSubscriptionProducts**
> getSubscriptionProducts(uuid)

Get products attached to subscription

### Example
```js
import { ProductsApi } from 'sdk-js-catalog-service'

try {
  let api = new ProductsApi()
  let response = api.getSubscriptionProducts(uuid)
} catch (e) {
  console.error(e)
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**uuid** | **string**|  |
**body** | [**\Kinow\OrderService\Client\Model\AttachTaxRequest**](../Model/\Kinow\OrderService\Client\Model\AttachTaxRequest.md)|  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
# **attachProductToSubscription**
> attachProductToSubscription(uuid, body)

Attach product to subscription

### Example
```js
import { ProductsApi } from 'sdk-js-catalog-service'

try {
  let api = new ProductsApi()
  let response = api.attachProductToSubscription(uuid, body)
} catch (e) {
  console.error(e)
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**uuid** | **string**|  |
**body** | [**\Kinow\OrderService\Client\Model\AttachTaxRequest**](../Model/\Kinow\OrderService\Client\Model\AttachTaxRequest.md)|  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
# **detachProductFromSusbcription**
> detachProductFromSusbcription(uuid, productUuid)

Detach product from subscription

### Example
```js
import { ProductsApi } from 'sdk-js-catalog-service'

try {
  let api = new ProductsApi()
  let response = api.detachProductFromSusbcription(uuid, productUuid)
} catch (e) {
  console.error(e)
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**uuid** | **string**|  |
**body** | [**\Kinow\OrderService\Client\Model\AttachTaxRequest**](../Model/\Kinow\OrderService\Client\Model\AttachTaxRequest.md)|  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

