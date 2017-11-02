# MediasApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**getEntityMedias**](MediasApi.md#getEntityMedias) | **GET** /entities/{uuid}/medias | Get medias attached to entity
[**attachMediaToEntity**](MediasApi.md#attachMediaToEntity) | **POST** /entities/{uuid}/medias | Attach media to entity
[**detachMediaFromEntity**](MediasApi.md#detachMediaFromEntity) | **DELETE** /entities/{uuid}/medias | Detach media from entity
[**getMedias**](MediasApi.md#getMedias) | **GET** /medias | Get medias
[**createMedia**](MediasApi.md#createMedia) | **POST** /medias | Create media
[**GetMedia**](MediasApi.md#GetMedia) | **GET** /medias/{uuid} | Get media
[**updateMedia**](MediasApi.md#updateMedia) | **PUT** /medias/{uuid} | Update media
[**deleteMedia**](MediasApi.md#deleteMedia) | **DELETE** /medias/{uuid} | Delete media
[**getMediaEntities**](MediasApi.md#getMediaEntities) | **GET** /medias/{uuid}/entities | Get entities attached to media
[**attachEntityToMedia**](MediasApi.md#attachEntityToMedia) | **POST** /medias/{uuid}/entities | Attach entity to media
[**detachEntityFromMedia**](MediasApi.md#detachEntityFromMedia) | **DELETE** /medias/{uuid}/entities | Detach entity from media
[**getMediaProducts**](MediasApi.md#getMediaProducts) | **GET** /medias/{uuid}/products | Get products attached to medias
[**attachProductToMedia**](MediasApi.md#attachProductToMedia) | **POST** /medias/{uuid}/products | Attach product to media
[**detachProductFromMedia**](MediasApi.md#detachProductFromMedia) | **DELETE** /medias/{uuid}/products | Detach a product from a media
[**getProductMedias**](MediasApi.md#getProductMedias) | **GET** /products/{uuid}/medias | Get medias attached to product
[**attachMediaToProduct**](MediasApi.md#attachMediaToProduct) | **POST** /products/{uuid}/medias | Attach media to product
[**detachMediaFromProduct**](MediasApi.md#detachMediaFromProduct) | **DELETE** /products/{uuid}/medias | Detach media from product


# **getEntityMedias**
> getEntityMedias(uuid)

Get medias attached to entity

### Example
```js
import { MediasApi } from 'sdk-js-catalog-service'

try {
  let api = new MediasApi()
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
import { MediasApi } from 'sdk-js-catalog-service'

try {
  let api = new MediasApi()
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
import { MediasApi } from 'sdk-js-catalog-service'

try {
  let api = new MediasApi()
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
# **getMedias**
> getMedias()

Get medias

### Example
```js
import { MediasApi } from 'sdk-js-catalog-service'

try {
  let api = new MediasApi()
  let response = api.getMedias()
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
# **createMedia**
> createMedia(body)

Create media

### Example
```js
import { MediasApi } from 'sdk-js-catalog-service'

try {
  let api = new MediasApi()
  let response = api.createMedia(body)
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
# **GetMedia**
> GetMedia(uuid)

Get media

### Example
```js
import { MediasApi } from 'sdk-js-catalog-service'

try {
  let api = new MediasApi()
  let response = api.GetMedia(uuid)
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
# **updateMedia**
> updateMedia(uuid, body)

Update media

### Example
```js
import { MediasApi } from 'sdk-js-catalog-service'

try {
  let api = new MediasApi()
  let response = api.updateMedia(uuid, body)
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
# **deleteMedia**
> deleteMedia(uuid)

Delete media

### Example
```js
import { MediasApi } from 'sdk-js-catalog-service'

try {
  let api = new MediasApi()
  let response = api.deleteMedia(uuid)
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
import { MediasApi } from 'sdk-js-catalog-service'

try {
  let api = new MediasApi()
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
import { MediasApi } from 'sdk-js-catalog-service'

try {
  let api = new MediasApi()
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
import { MediasApi } from 'sdk-js-catalog-service'

try {
  let api = new MediasApi()
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
# **getMediaProducts**
> getMediaProducts(uuid)

Get products attached to medias

### Example
```js
import { MediasApi } from 'sdk-js-catalog-service'

try {
  let api = new MediasApi()
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
import { MediasApi } from 'sdk-js-catalog-service'

try {
  let api = new MediasApi()
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
import { MediasApi } from 'sdk-js-catalog-service'

try {
  let api = new MediasApi()
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
# **getProductMedias**
> getProductMedias(uuid)

Get medias attached to product

### Example
```js
import { MediasApi } from 'sdk-js-catalog-service'

try {
  let api = new MediasApi()
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
import { MediasApi } from 'sdk-js-catalog-service'

try {
  let api = new MediasApi()
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
import { MediasApi } from 'sdk-js-catalog-service'

try {
  let api = new MediasApi()
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

