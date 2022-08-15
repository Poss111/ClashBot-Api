# ClashBotRestClient.UserApi

All URIs are relative to *http://localhost:8080/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addToListOfPreferredChampions**](UserApi.md#addToListOfPreferredChampions) | **PATCH** /user/{id}/champions | 
[**createNewListOfPreferredChampions**](UserApi.md#createNewListOfPreferredChampions) | **POST** /user/{id}/champions | 
[**createUser**](UserApi.md#createUser) | **POST** /user | 
[**getUser**](UserApi.md#getUser) | **GET** /user | 
[**removeFromListOfPreferredChampions**](UserApi.md#removeFromListOfPreferredChampions) | **DELETE** /user/{id}/champions | 
[**retrieveListOfUserPreferredChampions**](UserApi.md#retrieveListOfUserPreferredChampions) | **GET** /user/{id}/champions | 
[**retrieveUserSubscriptions**](UserApi.md#retrieveUserSubscriptions) | **GET** /user/{id}/subscriptions | 
[**subscribeUser**](UserApi.md#subscribeUser) | **POST** /user/{id}/subscriptions | 
[**unsubscribeUser**](UserApi.md#unsubscribeUser) | **DELETE** /user/{id}/subscriptions | 
[**updateUser**](UserApi.md#updateUser) | **PATCH** /user | 



## addToListOfPreferredChampions

> [String] addToListOfPreferredChampions(id, opts)



Adds the requested champion to the users preferred champions. Cannot be greater than a length of 5.

### Example

```javascript
import ClashBotRestClient from 'clash-bot-rest-client';

let apiInstance = new ClashBotRestClient.UserApi();
let id = "id_example"; // String | The Clash bot Player's id
let opts = {
  'addToListOfPreferredChampionsRequest': new ClashBotRestClient.AddToListOfPreferredChampionsRequest() // AddToListOfPreferredChampionsRequest | A League of Legends Champion to updated or remove with.
};
apiInstance.addToListOfPreferredChampions(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The Clash bot Player&#39;s id | 
 **addToListOfPreferredChampionsRequest** | [**AddToListOfPreferredChampionsRequest**](AddToListOfPreferredChampionsRequest.md)| A League of Legends Champion to updated or remove with. | [optional] 

### Return type

**[String]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createNewListOfPreferredChampions

> [String] createNewListOfPreferredChampions(id, opts)



Updates the users preferred champions with an entirely new list. Cannot be greater than a length of 5.

### Example

```javascript
import ClashBotRestClient from 'clash-bot-rest-client';

let apiInstance = new ClashBotRestClient.UserApi();
let id = "id_example"; // String | The Clash bot Player's id
let opts = {
  'createNewListOfPreferredChampionsRequest': new ClashBotRestClient.CreateNewListOfPreferredChampionsRequest() // CreateNewListOfPreferredChampionsRequest | A list of champions.
};
apiInstance.createNewListOfPreferredChampions(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The Clash bot Player&#39;s id | 
 **createNewListOfPreferredChampionsRequest** | [**CreateNewListOfPreferredChampionsRequest**](CreateNewListOfPreferredChampionsRequest.md)| A list of champions. | [optional] 

### Return type

**[String]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createUser

> Player createUser(opts)



Create a new Clash Bot Player.

### Example

```javascript
import ClashBotRestClient from 'clash-bot-rest-client';

let apiInstance = new ClashBotRestClient.UserApi();
let opts = {
  'createUserRequest': new ClashBotRestClient.CreateUserRequest() // CreateUserRequest | All necessary parameters to create a new Player
};
apiInstance.createUser(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createUserRequest** | [**CreateUserRequest**](CreateUserRequest.md)| All necessary parameters to create a new Player | [optional] 

### Return type

[**Player**](Player.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getUser

> Player getUser(id)



Retrieve a Clash Bot Player Details

### Example

```javascript
import ClashBotRestClient from 'clash-bot-rest-client';

let apiInstance = new ClashBotRestClient.UserApi();
let id = "id_example"; // String | The id of the user to retrieve.
apiInstance.getUser(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the user to retrieve. | 

### Return type

[**Player**](Player.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## removeFromListOfPreferredChampions

> [String] removeFromListOfPreferredChampions(id, champion)



Removes the requested champion to the users preferred champions.

### Example

```javascript
import ClashBotRestClient from 'clash-bot-rest-client';

let apiInstance = new ClashBotRestClient.UserApi();
let id = "id_example"; // String | The Clash bot Player's id
let champion = "champion_example"; // String | the champion name to remove from the user's list of champions
apiInstance.removeFromListOfPreferredChampions(id, champion).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The Clash bot Player&#39;s id | 
 **champion** | **String**| the champion name to remove from the user&#39;s list of champions | 

### Return type

**[String]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retrieveListOfUserPreferredChampions

> [String] retrieveListOfUserPreferredChampions(id)



Returns a list of preferred champions that the User has.

### Example

```javascript
import ClashBotRestClient from 'clash-bot-rest-client';

let apiInstance = new ClashBotRestClient.UserApi();
let id = "id_example"; // String | The Clash bot Player's id
apiInstance.retrieveListOfUserPreferredChampions(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The Clash bot Player&#39;s id | 

### Return type

**[String]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retrieveUserSubscriptions

> [Subscription] retrieveUserSubscriptions(id)



Returns if the user is subscribed to receive Monday morning Discord DMs.

### Example

```javascript
import ClashBotRestClient from 'clash-bot-rest-client';

let apiInstance = new ClashBotRestClient.UserApi();
let id = "id_example"; // String | The Clash bot Player's id
apiInstance.retrieveUserSubscriptions(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The Clash bot Player&#39;s id | 

### Return type

[**[Subscription]**](Subscription.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscribeUser

> [Subscription] subscribeUser(id)



Adds user to Monday morning subscription

### Example

```javascript
import ClashBotRestClient from 'clash-bot-rest-client';

let apiInstance = new ClashBotRestClient.UserApi();
let id = "id_example"; // String | The Clash bot Player's id
apiInstance.subscribeUser(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The Clash bot Player&#39;s id | 

### Return type

[**[Subscription]**](Subscription.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## unsubscribeUser

> [Subscription] unsubscribeUser(id)



Removes user from Monday morning subscription.

### Example

```javascript
import ClashBotRestClient from 'clash-bot-rest-client';

let apiInstance = new ClashBotRestClient.UserApi();
let id = "id_example"; // String | The Clash bot Player's id
apiInstance.unsubscribeUser(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The Clash bot Player&#39;s id | 

### Return type

[**[Subscription]**](Subscription.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateUser

> Player updateUser(opts)



Update an existing Clash Bot Player.

### Example

```javascript
import ClashBotRestClient from 'clash-bot-rest-client';

let apiInstance = new ClashBotRestClient.UserApi();
let opts = {
  'createUserRequest': new ClashBotRestClient.CreateUserRequest() // CreateUserRequest | All necessary parameters to create a new Player
};
apiInstance.updateUser(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createUserRequest** | [**CreateUserRequest**](CreateUserRequest.md)| All necessary parameters to create a new Player | [optional] 

### Return type

[**Player**](Player.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

