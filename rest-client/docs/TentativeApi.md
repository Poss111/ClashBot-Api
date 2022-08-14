# ClashBotRestClient.TentativeApi

All URIs are relative to *http://localhost:8080/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTentativeDetails**](TentativeApi.md#getTentativeDetails) | **GET** /tentative | 
[**placePlayerOnTentative**](TentativeApi.md#placePlayerOnTentative) | **POST** /tentative | 
[**removePlayerFromTentative**](TentativeApi.md#removePlayerFromTentative) | **DELETE** /tentative | 



## getTentativeDetails

> [Tentative] getTentativeDetails(serverName, opts)



A list of people on the tentative queue for upcoming Tournaments.

### Example

```javascript
import ClashBotRestClient from 'clash-bot-rest-client';

let apiInstance = new ClashBotRestClient.TentativeApi();
let serverName = "serverName_example"; // String | The Server to filter the tentative queue by.
let opts = {
  'tournamentName': "tournamentName_example", // String | The Tournament name to filter by.
  'tournamentDay': "tournamentDay_example" // String | The Tournament day to filter by.
};
apiInstance.getTentativeDetails(serverName, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverName** | **String**| The Server to filter the tentative queue by. | 
 **tournamentName** | **String**| The Tournament name to filter by. | [optional] 
 **tournamentDay** | **String**| The Tournament day to filter by. | [optional] 

### Return type

[**[Tentative]**](Tentative.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## placePlayerOnTentative

> Tentative placePlayerOnTentative(opts)



Places a player on the tentative queue for an upcoming Tournament.

### Example

```javascript
import ClashBotRestClient from 'clash-bot-rest-client';

let apiInstance = new ClashBotRestClient.TentativeApi();
let opts = {
  'placePlayerOnTentativeRequest': new ClashBotRestClient.PlacePlayerOnTentativeRequest() // PlacePlayerOnTentativeRequest | Parameters to place a Player into the tentative queue
};
apiInstance.placePlayerOnTentative(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **placePlayerOnTentativeRequest** | [**PlacePlayerOnTentativeRequest**](PlacePlayerOnTentativeRequest.md)| Parameters to place a Player into the tentative queue | [optional] 

### Return type

[**Tentative**](Tentative.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## removePlayerFromTentative

> Tentative removePlayerFromTentative(serverName, playerId, tournament, tournamentDay)



Remove a player from the tentative queue for an upcoming Tournament.

### Example

```javascript
import ClashBotRestClient from 'clash-bot-rest-client';

let apiInstance = new ClashBotRestClient.TentativeApi();
let serverName = "serverName_example"; // String | the name of the Server the queue falls under.
let playerId = "playerId_example"; // String | the player id to remove from the tentative queue with.
let tournament = "tournament_example"; // String | the Tournament that the tentative queue belongs to.
let tournamentDay = "tournamentDay_example"; // String | the Tournament day that the tentative queue belongs to.
apiInstance.removePlayerFromTentative(serverName, playerId, tournament, tournamentDay).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverName** | **String**| the name of the Server the queue falls under. | 
 **playerId** | **String**| the player id to remove from the tentative queue with. | 
 **tournament** | **String**| the Tournament that the tentative queue belongs to. | 
 **tournamentDay** | **String**| the Tournament day that the tentative queue belongs to. | 

### Return type

[**Tentative**](Tentative.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

