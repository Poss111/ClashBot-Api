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
import { Tournament } from './tournament';


export interface PlacePlayerOnTentativeRequest { 
    /**
     * The Server that the tentative queue belongs to.
     */
    serverName: string;
    tournamentDetails: Tournament;
    /**
     * The Player id to be placed on tentative with.
     */
    playerId: string;
}

