# CategoriesApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCategories**](CategoriesApi.md#getCategories) | **GET** /categories | Get categories
[**createCategory**](CategoriesApi.md#createCategory) | **POST** /categories | Create category
[**getCategory**](CategoriesApi.md#getCategory) | **GET** /categories/{uuid} | Get category
[**updateCategory**](CategoriesApi.md#updateCategory) | **PUT** /categories/{uuid} | Update category
[**deleteCategory**](CategoriesApi.md#deleteCategory) | **DELETE** /categories/{uuid} | Delete category
[**getCategoryEntities**](CategoriesApi.md#getCategoryEntities) | **GET** /categories/{uuid}/entities | Get entities attached to category
[**attachEntityToCategory**](CategoriesApi.md#attachEntityToCategory) | **POST** /categories/{uuid}/entities | Attach Entity to Category
[**detachEntityFromCategory**](CategoriesApi.md#detachEntityFromCategory) | **DELETE** /categories/{uuid}/entities | Detach entity from category
[**getCategoryProducts**](CategoriesApi.md#getCategoryProducts) | **GET** /categories/{uuid}/products | Get products attached to category
[**attachProductToCategory**](CategoriesApi.md#attachProductToCategory) | **POST** /categories/{uuid}/products | Attach product to category
[**detachProductFromCategory**](CategoriesApi.md#detachProductFromCategory) | **DELETE** /categories/{uuid}/products | Detach product from category
[**getCategorySubscriptions**](CategoriesApi.md#getCategorySubscriptions) | **GET** /categories/{uuid}/subscriptions | Get subscriptions attached to categories
[**attachSubscriptionToCategory**](CategoriesApi.md#attachSubscriptionToCategory) | **POST** /categories/{uuid}/subscriptions | Attach subscription to category
[**detachSubscriptionFromCategory**](CategoriesApi.md#detachSubscriptionFromCategory) | **DELETE** /categories/{uuid}/subscriptions | Detach subscription from category
[**getEntityCategories**](CategoriesApi.md#getEntityCategories) | **GET** /entities/{uuid}/categories | Get categories attached to entity
[**attachCategoryToEntity**](CategoriesApi.md#attachCategoryToEntity) | **POST** /entities/{uuid}/categories | Attach category to entity
[**detachCategoryFromEntity**](CategoriesApi.md#detachCategoryFromEntity) | **DELETE** /entities/{uuid}/categories | Detach category from entity
[**getProductCategories**](CategoriesApi.md#getProductCategories) | **GET** /products/{uuid}/categories | Get categories attached to product
[**attachCategoryToProduct**](CategoriesApi.md#attachCategoryToProduct) | **POST** /products/{uuid}/categories | Attach category to product
[**detachCategoryFromProduct**](CategoriesApi.md#detachCategoryFromProduct) | **DELETE** /products/{uuid}/categories | Detach category from product
[**getSubscriptionCategories**](CategoriesApi.md#getSubscriptionCategories) | **GET** /subscriptions/{uuid}/categories | Get categories attached to subscription
[**attachCategoryToSubscription**](CategoriesApi.md#attachCategoryToSubscription) | **POST** /subscriptions/{uuid}/categories | Attach category to subscription
[**detachCategoryFromSubscription**](CategoriesApi.md#detachCategoryFromSubscription) | **DELETE** /subscriptions/{uuid}/categories | Detach category from subscription


# **getCategories**
> getCategories()

Get categories

### Example
```js
import { CategoriesApi } from 'sdk-js-catalog-service'

try {
  let api = new CategoriesApi()
  let response = api.getCategories()
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
# **createCategory**
> createCategory(body)

Create category

### Example
```js
import { CategoriesApi } from 'sdk-js-catalog-service'

try {
  let api = new CategoriesApi()
  let response = api.createCategory(body)
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
# **getCategory**
> getCategory(uuid)

Get category

### Example
```js
import { CategoriesApi } from 'sdk-js-catalog-service'

try {
  let api = new CategoriesApi()
  let response = api.getCategory(uuid)
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
# **updateCategory**
> updateCategory(uuid, body)

Update category

### Example
```js
import { CategoriesApi } from 'sdk-js-catalog-service'

try {
  let api = new CategoriesApi()
  let response = api.updateCategory(uuid, body)
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
# **deleteCategory**
> deleteCategory(uuid)

Delete category

### Example
```js
import { CategoriesApi } from 'sdk-js-catalog-service'

try {
  let api = new CategoriesApi()
  let response = api.deleteCategory(uuid)
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
# **getCategoryEntities**
> getCategoryEntities(uuid)

Get entities attached to category

### Example
```js
import { CategoriesApi } from 'sdk-js-catalog-service'

try {
  let api = new CategoriesApi()
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
import { CategoriesApi } from 'sdk-js-catalog-service'

try {
  let api = new CategoriesApi()
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
import { CategoriesApi } from 'sdk-js-catalog-service'

try {
  let api = new CategoriesApi()
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
# **getCategoryProducts**
> getCategoryProducts(uuid)

Get products attached to category

### Example
```js
import { CategoriesApi } from 'sdk-js-catalog-service'

try {
  let api = new CategoriesApi()
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
import { CategoriesApi } from 'sdk-js-catalog-service'

try {
  let api = new CategoriesApi()
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
import { CategoriesApi } from 'sdk-js-catalog-service'

try {
  let api = new CategoriesApi()
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
# **getCategorySubscriptions**
> getCategorySubscriptions(uuid)

Get subscriptions attached to categories

### Example
```js
import { CategoriesApi } from 'sdk-js-catalog-service'

try {
  let api = new CategoriesApi()
  let response = api.getCategorySubscriptions(uuid)
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
# **attachSubscriptionToCategory**
> attachSubscriptionToCategory(uuid, body)

Attach subscription to category

### Example
```js
import { CategoriesApi } from 'sdk-js-catalog-service'

try {
  let api = new CategoriesApi()
  let response = api.attachSubscriptionToCategory(uuid, body)
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
# **detachSubscriptionFromCategory**
> detachSubscriptionFromCategory(uuid, subscriptionUuid)

Detach subscription from category

### Example
```js
import { CategoriesApi } from 'sdk-js-catalog-service'

try {
  let api = new CategoriesApi()
  let response = api.detachSubscriptionFromCategory(uuid, subscriptionUuid)
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
import { CategoriesApi } from 'sdk-js-catalog-service'

try {
  let api = new CategoriesApi()
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
import { CategoriesApi } from 'sdk-js-catalog-service'

try {
  let api = new CategoriesApi()
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
import { CategoriesApi } from 'sdk-js-catalog-service'

try {
  let api = new CategoriesApi()
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
# **getProductCategories**
> getProductCategories(uuid)

Get categories attached to product

### Example
```js
import { CategoriesApi } from 'sdk-js-catalog-service'

try {
  let api = new CategoriesApi()
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
import { CategoriesApi } from 'sdk-js-catalog-service'

try {
  let api = new CategoriesApi()
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
import { CategoriesApi } from 'sdk-js-catalog-service'

try {
  let api = new CategoriesApi()
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
# **getSubscriptionCategories**
> getSubscriptionCategories(uuid)

Get categories attached to subscription

### Example
```js
import { CategoriesApi } from 'sdk-js-catalog-service'

try {
  let api = new CategoriesApi()
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
# **attachCategoryToSubscription**
> attachCategoryToSubscription(uuid, body)

Attach category to subscription

### Example
```js
import { CategoriesApi } from 'sdk-js-catalog-service'

try {
  let api = new CategoriesApi()
  let response = api.attachCategoryToSubscription(uuid, body)
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
# **detachCategoryFromSubscription**
> detachCategoryFromSubscription(uuid, categoryUuid)

Detach category from subscription

### Example
```js
import { CategoriesApi } from 'sdk-js-catalog-service'

try {
  let api = new CategoriesApi()
  let response = api.detachCategoryFromSubscription(uuid, categoryUuid)
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

