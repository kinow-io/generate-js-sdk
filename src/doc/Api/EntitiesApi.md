# EntitiesApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCategoryEntities**](EntitiesApi.md#getCategoryEntities) | **GET** /categories/{uuid}/entities | Get entities attached to category
[**attachEntityToCategory**](EntitiesApi.md#attachEntityToCategory) | **POST** /categories/{uuid}/entities | Attach Entity to Category
[**detachEntityFromCategory**](EntitiesApi.md#detachEntityFromCategory) | **DELETE** /categories/{uuid}/entities | Detach entity from category
[**getEntities**](EntitiesApi.md#getEntities) | **GET** /entities | Get entities
[**createEntity**](EntitiesApi.md#createEntity) | **POST** /entities | Create entity
[**getEntity**](EntitiesApi.md#getEntity) | **GET** /entities/{uuid} | Get entity
[**updateEntity**](EntitiesApi.md#updateEntity) | **PUT** /entities/{uuid} | Update entity
[**deleteEntity**](EntitiesApi.md#deleteEntity) | **DELETE** /entities/{uuid} | Delete entity
[**getEntityCategories**](EntitiesApi.md#getEntityCategories) | **GET** /entities/{uuid}/categories | Get categories attached to entity
[**attachCategoryToEntity**](EntitiesApi.md#attachCategoryToEntity) | **POST** /entities/{uuid}/categories | Attach category to entity
[**detachCategoryFromEntity**](EntitiesApi.md#detachCategoryFromEntity) | **DELETE** /entities/{uuid}/categories | Detach category from entity
[**getEntityMedias**](EntitiesApi.md#getEntityMedias) | **GET** /entities/{uuid}/medias | Get medias attached to entity
[**attachMediaToEntity**](EntitiesApi.md#attachMediaToEntity) | **POST** /entities/{uuid}/medias | Attach media to entity
[**detachMediaFromEntity**](EntitiesApi.md#detachMediaFromEntity) | **DELETE** /entities/{uuid}/medias | Detach media from entity
[**getEntityProducts**](EntitiesApi.md#getEntityProducts) | **GET** /entities/{uuid}/products | Get products attached to entity
[**attachProductToEntity**](EntitiesApi.md#attachProductToEntity) | **POST** /entities/{uuid}/products | Attach product to entity
[**detachProductFromEntity**](EntitiesApi.md#detachProductFromEntity) | **DELETE** /entities/{uuid}/products | Detach product from entity
[**getMediaEntities**](EntitiesApi.md#getMediaEntities) | **GET** /medias/{uuid}/entities | Get entities attached to media
[**attachEntityToMedia**](EntitiesApi.md#attachEntityToMedia) | **POST** /medias/{uuid}/entities | Attach entity to media
[**detachEntityFromMedia**](EntitiesApi.md#detachEntityFromMedia) | **DELETE** /medias/{uuid}/entities | Detach entity from media
[**getProductEntities**](EntitiesApi.md#getProductEntities) | **GET** /products/{uuid}/entities | Get entities attached to product
[**attachEntityToProduct**](EntitiesApi.md#attachEntityToProduct) | **POST** /products/{uuid}/entities | Attach entity to product
[**detachEntityFromProduct**](EntitiesApi.md#detachEntityFromProduct) | **DELETE** /products/{uuid}/entities | Detach entity from product


# **getCategoryEntities**
> getCategoryEntities(uuid)

Get entities attached to category

### Example
```js
import { EntitiesApi } from 'sdk-js-catalog-service'

try {
  let api = new EntitiesApi()
  let response = api.getCategoryEntities(uuid)
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
# **attachEntityToCategory**
> attachEntityToCategory(uuid, body)

Attach Entity to Category

### Example
```js
import { EntitiesApi } from 'sdk-js-catalog-service'

try {
  let api = new EntitiesApi()
  let response = api.attachEntityToCategory(uuid, body)
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
# **detachEntityFromCategory**
> detachEntityFromCategory(uuid, entityUuid)

Detach entity from category

### Example
```js
import { EntitiesApi } from 'sdk-js-catalog-service'

try {
  let api = new EntitiesApi()
  let response = api.detachEntityFromCategory(uuid, entityUuid)
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
# **getEntities**
> getEntities()

Get entities

### Example
```js
import { EntitiesApi } from 'sdk-js-catalog-service'

try {
  let api = new EntitiesApi()
  let response = api.getEntities()
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
# **createEntity**
> createEntity(body)

Create entity

### Example
```js
import { EntitiesApi } from 'sdk-js-catalog-service'

try {
  let api = new EntitiesApi()
  let response = api.createEntity(body)
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
# **getEntity**
> getEntity(uuid)

Get entity

### Example
```js
import { EntitiesApi } from 'sdk-js-catalog-service'

try {
  let api = new EntitiesApi()
  let response = api.getEntity(uuid)
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
# **updateEntity**
> updateEntity(uuid, body)

Update entity

### Example
```js
import { EntitiesApi } from 'sdk-js-catalog-service'

try {
  let api = new EntitiesApi()
  let response = api.updateEntity(uuid, body)
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
# **deleteEntity**
> deleteEntity(uuid)

Delete entity

### Example
```js
import { EntitiesApi } from 'sdk-js-catalog-service'

try {
  let api = new EntitiesApi()
  let response = api.deleteEntity(uuid)
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
# **getEntityCategories**
> getEntityCategories(uuid)

Get categories attached to entity

### Example
```js
import { EntitiesApi } from 'sdk-js-catalog-service'

try {
  let api = new EntitiesApi()
  let response = api.getEntityCategories(uuid)
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
# **attachCategoryToEntity**
> attachCategoryToEntity(uuid, body)

Attach category to entity

### Example
```js
import { EntitiesApi } from 'sdk-js-catalog-service'

try {
  let api = new EntitiesApi()
  let response = api.attachCategoryToEntity(uuid, body)
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
# **detachCategoryFromEntity**
> detachCategoryFromEntity(uuid, categoryUuid)

Detach category from entity

### Example
```js
import { EntitiesApi } from 'sdk-js-catalog-service'

try {
  let api = new EntitiesApi()
  let response = api.detachCategoryFromEntity(uuid, categoryUuid)
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
# **getEntityMedias**
> getEntityMedias(uuid)

Get medias attached to entity

### Example
```js
import { EntitiesApi } from 'sdk-js-catalog-service'

try {
  let api = new EntitiesApi()
  let response = api.getEntityMedias(uuid)
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
# **attachMediaToEntity**
> attachMediaToEntity(uuid, body)

Attach media to entity

### Example
```js
import { EntitiesApi } from 'sdk-js-catalog-service'

try {
  let api = new EntitiesApi()
  let response = api.attachMediaToEntity(uuid, body)
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
# **detachMediaFromEntity**
> detachMediaFromEntity(uuid, mediaUuid)

Detach media from entity

### Example
```js
import { EntitiesApi } from 'sdk-js-catalog-service'

try {
  let api = new EntitiesApi()
  let response = api.detachMediaFromEntity(uuid, mediaUuid)
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
import { EntitiesApi } from 'sdk-js-catalog-service'

try {
  let api = new EntitiesApi()
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
import { EntitiesApi } from 'sdk-js-catalog-service'

try {
  let api = new EntitiesApi()
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
import { EntitiesApi } from 'sdk-js-catalog-service'

try {
  let api = new EntitiesApi()
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
# **getMediaEntities**
> getMediaEntities(uuid)

Get entities attached to media

### Example
```js
import { EntitiesApi } from 'sdk-js-catalog-service'

try {
  let api = new EntitiesApi()
  let response = api.getMediaEntities(uuid)
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
# **attachEntityToMedia**
> attachEntityToMedia(uuid, body)

Attach entity to media

### Example
```js
import { EntitiesApi } from 'sdk-js-catalog-service'

try {
  let api = new EntitiesApi()
  let response = api.attachEntityToMedia(uuid, body)
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
# **detachEntityFromMedia**
> detachEntityFromMedia(uuid, entityUuid)

Detach entity from media

### Example
```js
import { EntitiesApi } from 'sdk-js-catalog-service'

try {
  let api = new EntitiesApi()
  let response = api.detachEntityFromMedia(uuid, entityUuid)
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
import { EntitiesApi } from 'sdk-js-catalog-service'

try {
  let api = new EntitiesApi()
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
import { EntitiesApi } from 'sdk-js-catalog-service'

try {
  let api = new EntitiesApi()
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
import { EntitiesApi } from 'sdk-js-catalog-service'

try {
  let api = new EntitiesApi()
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

