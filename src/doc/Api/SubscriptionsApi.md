# SubscriptionsApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCategorySubscriptions**](SubscriptionsApi.md#getCategorySubscriptions) | **GET** /categories/{uuid}/subscriptions | Get subscriptions attached to categories
[**attachSubscriptionToCategory**](SubscriptionsApi.md#attachSubscriptionToCategory) | **POST** /categories/{uuid}/subscriptions | Attach subscription to category
[**detachSubscriptionFromCategory**](SubscriptionsApi.md#detachSubscriptionFromCategory) | **DELETE** /categories/{uuid}/subscriptions | Detach subscription from category
[**getSubscriptions**](SubscriptionsApi.md#getSubscriptions) | **GET** /subscriptions | Get subscriptions
[**createSubscription**](SubscriptionsApi.md#createSubscription) | **POST** /subscriptions | Create subscription
[**getSubscription**](SubscriptionsApi.md#getSubscription) | **GET** /subscriptions/{uuid} | Get subscription
[**updateSubscription**](SubscriptionsApi.md#updateSubscription) | **PUT** /subscriptions/{uuid} | Update subscription
[**deleteSubscription**](SubscriptionsApi.md#deleteSubscription) | **DELETE** /subscriptions/{uuid} | Delete subscription
[**attachCategoryToSubscription**](SubscriptionsApi.md#attachCategoryToSubscription) | **POST** /subscriptions/{uuid}/categories | Attach category to subscription
[**detachCategoryFromSubscription**](SubscriptionsApi.md#detachCategoryFromSubscription) | **DELETE** /subscriptions/{uuid}/categories | Detach category from subscription
[**getSubscriptionProducts**](SubscriptionsApi.md#getSubscriptionProducts) | **GET** /subscriptions/{uuid}/products | Get products attached to subscription
[**attachProductToSubscription**](SubscriptionsApi.md#attachProductToSubscription) | **POST** /subscriptions/{uuid}/products | Attach product to subscription
[**detachProductFromSusbcription**](SubscriptionsApi.md#detachProductFromSusbcription) | **DELETE** /subscriptions/{uuid}/products | Detach product from subscription


# **getCategorySubscriptions**
> getCategorySubscriptions(uuid)

Get subscriptions attached to categories

### Example
```js
import { SubscriptionsApi } from 'sdk-js-catalog-service'

try {
  let api = new SubscriptionsApi()
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
import { SubscriptionsApi } from 'sdk-js-catalog-service'

try {
  let api = new SubscriptionsApi()
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
import { SubscriptionsApi } from 'sdk-js-catalog-service'

try {
  let api = new SubscriptionsApi()
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
# **getSubscriptions**
> getSubscriptions()

Get subscriptions

### Example
```js
import { SubscriptionsApi } from 'sdk-js-catalog-service'

try {
  let api = new SubscriptionsApi()
  let response = api.getSubscriptions()
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
# **createSubscription**
> createSubscription(body)

Create subscription

### Example
```js
import { SubscriptionsApi } from 'sdk-js-catalog-service'

try {
  let api = new SubscriptionsApi()
  let response = api.createSubscription(body)
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
# **getSubscription**
> getSubscription(uuid)

Get subscription

### Example
```js
import { SubscriptionsApi } from 'sdk-js-catalog-service'

try {
  let api = new SubscriptionsApi()
  let response = api.getSubscription(uuid)
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
# **updateSubscription**
> updateSubscription(uuid, body)

Update subscription

### Example
```js
import { SubscriptionsApi } from 'sdk-js-catalog-service'

try {
  let api = new SubscriptionsApi()
  let response = api.updateSubscription(uuid, body)
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
# **deleteSubscription**
> deleteSubscription(uuid, subscriptionUuid)

Delete subscription

### Example
```js
import { SubscriptionsApi } from 'sdk-js-catalog-service'

try {
  let api = new SubscriptionsApi()
  let response = api.deleteSubscription(uuid, subscriptionUuid)
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
import { SubscriptionsApi } from 'sdk-js-catalog-service'

try {
  let api = new SubscriptionsApi()
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
import { SubscriptionsApi } from 'sdk-js-catalog-service'

try {
  let api = new SubscriptionsApi()
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
# **getSubscriptionProducts**
> getSubscriptionProducts(uuid)

Get products attached to subscription

### Example
```js
import { SubscriptionsApi } from 'sdk-js-catalog-service'

try {
  let api = new SubscriptionsApi()
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
import { SubscriptionsApi } from 'sdk-js-catalog-service'

try {
  let api = new SubscriptionsApi()
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
import { SubscriptionsApi } from 'sdk-js-catalog-service'

try {
  let api = new SubscriptionsApi()
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

