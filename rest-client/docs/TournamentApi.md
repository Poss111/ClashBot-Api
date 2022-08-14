# ClashBotRestClient.TournamentApi

All URIs are relative to *http://localhost:8080/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTournaments**](TournamentApi.md#getTournaments) | **GET** /tournaments | 



## getTournaments

> [Tournament] getTournaments(opts)



### Example

```javascript
import ClashBotRestClient from 'clash-bot-rest-client';

let apiInstance = new ClashBotRestClient.TournamentApi();
let opts = {
  'tournament': "tournament_example", // String | The Tournament name to filter by.
  'day': "day_example" // String | The tournament day to filter by.
};
apiInstance.getTournaments(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tournament** | **String**| The Tournament name to filter by. | [optional] 
 **day** | **String**| The tournament day to filter by. | [optional] 

### Return type

[**[Tournament]**](Tournament.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

