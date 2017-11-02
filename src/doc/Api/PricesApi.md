# PricesApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**getProductPrices**](PricesApi.md#getProductPrices) | **GET** /products/products/{uuid}/prices | Get prices attached to product
[**createPrice**](PricesApi.md#createPrice) | **POST** /prices | Create price
[**getPrice**](PricesApi.md#getPrice) | **GET** /prices/{uuid} | Get price
[**updatePrice**](PricesApi.md#updatePrice) | **PUT** /prices/{uuid} | Update price
[**deletePrice**](PricesApi.md#deletePrice) | **DELETE** /prices/{uuid} | Delete price


# **getProductPrices**
> getProductPrices(uuid)

Get prices attached to product

### Example
```js
import { PricesApi } from 'sdk-js-catalog-service'

try {
  let api = new PricesApi()
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
# **createPrice**
> createPrice(body)

Create price

### Example
```js
import { PricesApi } from 'sdk-js-catalog-service'

try {
  let api = new PricesApi()
  let response = api.createPrice(body)
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
# **getPrice**
> getPrice(uuid)

Get price

### Example
```js
import { PricesApi } from 'sdk-js-catalog-service'

try {
  let api = new PricesApi()
  let response = api.getPrice(uuid)
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
# **updatePrice**
> updatePrice(uuid, body)

Update price

### Example
```js
import { PricesApi } from 'sdk-js-catalog-service'

try {
  let api = new PricesApi()
  let response = api.updatePrice(uuid, body)
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
# **deletePrice**
> deletePrice(uuid)

Delete price

### Example
```js
import { PricesApi } from 'sdk-js-catalog-service'

try {
  let api = new PricesApi()
  let response = api.deletePrice(uuid)
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

