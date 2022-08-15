# ClashBotRestClient.TeamApi

All URIs are relative to *http://localhost:8080/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNewTeam**](TeamApi.md#createNewTeam) | **POST** /team | 
[**getTeam**](TeamApi.md#getTeam) | **GET** /team | 
[**removePlayerFromTeam**](TeamApi.md#removePlayerFromTeam) | **DELETE** /team | 
[**updateTeam**](TeamApi.md#updateTeam) | **PATCH** /team | 



## createNewTeam

> Team createNewTeam(opts)



Create a new Team

### Example

```javascript
import ClashBotRestClient from 'clash-bot-rest-client';

let apiInstance = new ClashBotRestClient.TeamApi();
let opts = {
  'createNewTeamRequest': {"serverName":"LoL-ClashBotSupport","tournamentName":"awesome_sauce","tournamentDay":"4","playerDetails":{"id":"1","role":"Top"}} // CreateNewTeamRequest | All necessary parameters to create a Clash Bot League of Legends Clash Team
};
apiInstance.createNewTeam(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createNewTeamRequest** | [**CreateNewTeamRequest**](CreateNewTeamRequest.md)| All necessary parameters to create a Clash Bot League of Legends Clash Team | [optional] 

### Return type

[**Team**](Team.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getTeam

> [Team] getTeam(server, opts)



Returns a single Team or multiple Teams that match the filtering criteria.

### Example

```javascript
import ClashBotRestClient from 'clash-bot-rest-client';

let apiInstance = new ClashBotRestClient.TeamApi();
let server = "server_example"; // String | the name of the Server to filter the Teams by.
let opts = {
  'name': "name_example", // String | the name of the Team to retrieve.
  'tournament': "tournament_example", // String | the name of the Tournament to filter the Teams by.
  'day': "day_example" // String | the day of the Tournament to filter the Teams by.
};
apiInstance.getTeam(server, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **server** | **String**| the name of the Server to filter the Teams by. | 
 **name** | **String**| the name of the Team to retrieve. | [optional] 
 **tournament** | **String**| the name of the Tournament to filter the Teams by. | [optional] 
 **day** | **String**| the day of the Tournament to filter the Teams by. | [optional] 

### Return type

[**[Team]**](Team.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## removePlayerFromTeam

> Team removePlayerFromTeam(name, serverName, tournament, tournamentDay, playerId)



Removes a Player from a Team

### Example

```javascript
import ClashBotRestClient from 'clash-bot-rest-client';

let apiInstance = new ClashBotRestClient.TeamApi();
let name = "name_example"; // String | the name of the Team to retrieve.
let serverName = "serverName_example"; // String | the name of the Server to filter the Teams by.
let tournament = "tournament_example"; // String | the name of the Tournament to filter the Teams by.
let tournamentDay = "tournamentDay_example"; // String | the day of the Tournament to filter the Teams by.
let playerId = "playerId_example"; // String | the player id to remove from the Team.
apiInstance.removePlayerFromTeam(name, serverName, tournament, tournamentDay, playerId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| the name of the Team to retrieve. | 
 **serverName** | **String**| the name of the Server to filter the Teams by. | 
 **tournament** | **String**| the name of the Tournament to filter the Teams by. | 
 **tournamentDay** | **String**| the day of the Tournament to filter the Teams by. | 
 **playerId** | **String**| the player id to remove from the Team. | 

### Return type

[**Team**](Team.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateTeam

> Team updateTeam(opts)



Updates the Team that matches the details passed.

### Example

```javascript
import ClashBotRestClient from 'clash-bot-rest-client';

let apiInstance = new ClashBotRestClient.TeamApi();
let opts = {
  'updateTeamRequest': new ClashBotRestClient.UpdateTeamRequest() // UpdateTeamRequest | The Team details to use to update a specific Team
};
apiInstance.updateTeam(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateTeamRequest** | [**UpdateTeamRequest**](UpdateTeamRequest.md)| The Team details to use to update a specific Team | [optional] 

### Return type

[**Team**](Team.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

