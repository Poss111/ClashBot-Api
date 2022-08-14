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
 */


export interface CreateUserRequest { 
    /**
     * The id of the player
     */
    id: string;
    /**
     * The name of the player
     */
    name: string;
    /**
     * The server the player is from.
     */
    serverName: string;
}
