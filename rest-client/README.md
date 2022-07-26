# clash-bot-rest-client

ClashBotRestClient - JavaScript client for clash-bot-rest-client
Clash Bot Webapp Service to support League of Legends Clash tournament scheduling with Discord.
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install clash-bot-rest-client --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your clash-bot-rest-client from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var ClashBotRestClient = require('clash-bot-rest-client');


var api = new ClashBotRestClient.SREApi()
api.getApplicationHealth().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *http://localhost:8080/api/v2*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ClashBotRestClient.SREApi* | [**getApplicationHealth**](docs/SREApi.md#getApplicationHealth) | **GET** /health | 
*ClashBotRestClient.TeamApi* | [**createNewTeam**](docs/TeamApi.md#createNewTeam) | **POST** /team | 
*ClashBotRestClient.TeamApi* | [**getTeam**](docs/TeamApi.md#getTeam) | **GET** /team | 
*ClashBotRestClient.TeamApi* | [**removePlayerFromTeam**](docs/TeamApi.md#removePlayerFromTeam) | **DELETE** /team | 
*ClashBotRestClient.TeamApi* | [**updateTeam**](docs/TeamApi.md#updateTeam) | **PATCH** /team | 
*ClashBotRestClient.TentativeApi* | [**getTentativeDetails**](docs/TentativeApi.md#getTentativeDetails) | **GET** /tentative | 
*ClashBotRestClient.TentativeApi* | [**placePlayerOnTentative**](docs/TentativeApi.md#placePlayerOnTentative) | **POST** /tentative | 
*ClashBotRestClient.TentativeApi* | [**removePlayerFromTentative**](docs/TentativeApi.md#removePlayerFromTentative) | **DELETE** /tentative | 
*ClashBotRestClient.TournamentApi* | [**getTournaments**](docs/TournamentApi.md#getTournaments) | **GET** /tournaments | 
*ClashBotRestClient.UserApi* | [**addToListOfPreferredChampions**](docs/UserApi.md#addToListOfPreferredChampions) | **PATCH** /user/{id}/champions | 
*ClashBotRestClient.UserApi* | [**createNewListOfPreferredChampions**](docs/UserApi.md#createNewListOfPreferredChampions) | **POST** /user/{id}/champions | 
*ClashBotRestClient.UserApi* | [**createUser**](docs/UserApi.md#createUser) | **POST** /user | 
*ClashBotRestClient.UserApi* | [**getUser**](docs/UserApi.md#getUser) | **GET** /user | 
*ClashBotRestClient.UserApi* | [**removeFromListOfPreferredChampions**](docs/UserApi.md#removeFromListOfPreferredChampions) | **DELETE** /user/{id}/champions | 
*ClashBotRestClient.UserApi* | [**retrieveListOfUserPreferredChampions**](docs/UserApi.md#retrieveListOfUserPreferredChampions) | **GET** /user/{id}/champions | 
*ClashBotRestClient.UserApi* | [**retrieveUserSubscriptions**](docs/UserApi.md#retrieveUserSubscriptions) | **GET** /user/{id}/subscriptions | 
*ClashBotRestClient.UserApi* | [**subscribeUser**](docs/UserApi.md#subscribeUser) | **POST** /user/{id}/subscriptions | 
*ClashBotRestClient.UserApi* | [**unsubscribeUser**](docs/UserApi.md#unsubscribeUser) | **DELETE** /user/{id}/subscriptions | 
*ClashBotRestClient.UserApi* | [**updateUser**](docs/UserApi.md#updateUser) | **PATCH** /user | 


## Documentation for Models

 - [ClashBotRestClient.AddToListOfPreferredChampionsRequest](docs/AddToListOfPreferredChampionsRequest.md)
 - [ClashBotRestClient.CreateNewListOfPreferredChampionsRequest](docs/CreateNewListOfPreferredChampionsRequest.md)
 - [ClashBotRestClient.CreateNewTeamRequest](docs/CreateNewTeamRequest.md)
 - [ClashBotRestClient.CreateNewTeamRequestPlayerDetails](docs/CreateNewTeamRequestPlayerDetails.md)
 - [ClashBotRestClient.CreateUserRequest](docs/CreateUserRequest.md)
 - [ClashBotRestClient.Error](docs/Error.md)
 - [ClashBotRestClient.GetApplicationHealth200Response](docs/GetApplicationHealth200Response.md)
 - [ClashBotRestClient.PlacePlayerOnTentativeRequest](docs/PlacePlayerOnTentativeRequest.md)
 - [ClashBotRestClient.Player](docs/Player.md)
 - [ClashBotRestClient.Role](docs/Role.md)
 - [ClashBotRestClient.Subscription](docs/Subscription.md)
 - [ClashBotRestClient.Team](docs/Team.md)
 - [ClashBotRestClient.TeamPlayerDetails](docs/TeamPlayerDetails.md)
 - [ClashBotRestClient.Tentative](docs/Tentative.md)
 - [ClashBotRestClient.Tournament](docs/Tournament.md)
 - [ClashBotRestClient.UpdateTeamRequest](docs/UpdateTeamRequest.md)


## Documentation for Authorization

All endpoints do not require authorization.
