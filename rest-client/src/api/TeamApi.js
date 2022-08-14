/**
 * clash-bot-webapp-service
 * Clash Bot Webapp Service to support League of Legends Clash tournament scheduling with Discord.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: rixxroid@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CreateNewTeamRequest from '../model/CreateNewTeamRequest';
import Error from '../model/Error';
import Team from '../model/Team';
import UpdateTeamRequest from '../model/UpdateTeamRequest';

/**
* Team service.
* @module api/TeamApi
* @version 1.0.0
*/
export default class TeamApi {

    /**
    * Constructs a new TeamApi. 
    * @alias module:api/TeamApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createNewTeam operation.
     * @callback module:api/TeamApi~createNewTeamCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Team} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new Team
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateNewTeamRequest} opts.createNewTeamRequest All necessary parameters to create a Clash Bot League of Legends Clash Team
     * @param {module:api/TeamApi~createNewTeamCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Team}
     */
    createNewTeam(opts, callback) {
      opts = opts || {};
      let postBody = opts['createNewTeamRequest'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Team;
      return this.apiClient.callApi(
        '/team', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getTeam operation.
     * @callback module:api/TeamApi~getTeamCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Team>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a single Team or multiple Teams that match the filtering criteria.
     * @param {String} server the name of the Server to filter the Teams by.
     * @param {Object} opts Optional parameters
     * @param {String} opts.name the name of the Team to retrieve.
     * @param {String} opts.tournament the name of the Tournament to filter the Teams by.
     * @param {String} opts.day the day of the Tournament to filter the Teams by.
     * @param {module:api/TeamApi~getTeamCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Team>}
     */
    getTeam(server, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'server' is set
      if (server === undefined || server === null) {
        throw new Error("Missing the required parameter 'server' when calling getTeam");
      }

      let pathParams = {
      };
      let queryParams = {
        'name': opts['name'],
        'server': server,
        'tournament': opts['tournament'],
        'day': opts['day']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Team];
      return this.apiClient.callApi(
        '/team', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the removePlayerFromTeam operation.
     * @callback module:api/TeamApi~removePlayerFromTeamCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Team} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Removes a Player from a Team
     * @param {String} name the name of the Team to retrieve.
     * @param {String} serverName the name of the Server to filter the Teams by.
     * @param {String} tournament the name of the Tournament to filter the Teams by.
     * @param {String} tournamentDay the day of the Tournament to filter the Teams by.
     * @param {String} playerId the player id to remove from the Team.
     * @param {module:api/TeamApi~removePlayerFromTeamCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Team}
     */
    removePlayerFromTeam(name, serverName, tournament, tournamentDay, playerId, callback) {
      let postBody = null;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling removePlayerFromTeam");
      }
      // verify the required parameter 'serverName' is set
      if (serverName === undefined || serverName === null) {
        throw new Error("Missing the required parameter 'serverName' when calling removePlayerFromTeam");
      }
      // verify the required parameter 'tournament' is set
      if (tournament === undefined || tournament === null) {
        throw new Error("Missing the required parameter 'tournament' when calling removePlayerFromTeam");
      }
      // verify the required parameter 'tournamentDay' is set
      if (tournamentDay === undefined || tournamentDay === null) {
        throw new Error("Missing the required parameter 'tournamentDay' when calling removePlayerFromTeam");
      }
      // verify the required parameter 'playerId' is set
      if (playerId === undefined || playerId === null) {
        throw new Error("Missing the required parameter 'playerId' when calling removePlayerFromTeam");
      }

      let pathParams = {
      };
      let queryParams = {
        'name': name,
        'serverName': serverName,
        'tournament': tournament,
        'tournamentDay': tournamentDay,
        'playerId': playerId
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Team;
      return this.apiClient.callApi(
        '/team', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateTeam operation.
     * @callback module:api/TeamApi~updateTeamCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Team} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates the Team that matches the details passed.
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateTeamRequest} opts.updateTeamRequest The Team details to use to update a specific Team
     * @param {module:api/TeamApi~updateTeamCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Team}
     */
    updateTeam(opts, callback) {
      opts = opts || {};
      let postBody = opts['updateTeamRequest'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Team;
      return this.apiClient.callApi(
        '/team', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
