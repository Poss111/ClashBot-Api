# ClashBotRestClient.SREApi

All URIs are relative to *http://localhost:8080/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getApplicationHealth**](SREApi.md#getApplicationHealth) | **GET** /health | 



## getApplicationHealth

> GetApplicationHealth200Response getApplicationHealth()



### Example

```javascript
import ClashBotRestClient from 'clash-bot-rest-client';

let apiInstance = new ClashBotRestClient.SREApi();
apiInstance.getApplicationHealth((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetApplicationHealth200Response**](GetApplicationHealth200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

