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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ClashBotRestClient&#x3D;projectVersion&#x3D;100);
  }
}(this, function(expect, ClashBotRestClient&#x3D;projectVersion&#x3D;100) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ClashBotRestClient&#x3D;projectVersion&#x3D;100.PlacePlayerOnTentativeRequest();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('PlacePlayerOnTentativeRequest', function() {
    it('should create an instance of PlacePlayerOnTentativeRequest', function() {
      // uncomment below and update the code to test PlacePlayerOnTentativeRequest
      //var instance = new ClashBotRestClient&#x3D;projectVersion&#x3D;100.PlacePlayerOnTentativeRequest();
      //expect(instance).to.be.a(ClashBotRestClient&#x3D;projectVersion&#x3D;100.PlacePlayerOnTentativeRequest);
    });

    it('should have the property serverName (base name: "serverName")', function() {
      // uncomment below and update the code to test the property serverName
      //var instance = new ClashBotRestClient&#x3D;projectVersion&#x3D;100.PlacePlayerOnTentativeRequest();
      //expect(instance).to.be();
    });

    it('should have the property tournamentDetails (base name: "tournamentDetails")', function() {
      // uncomment below and update the code to test the property tournamentDetails
      //var instance = new ClashBotRestClient&#x3D;projectVersion&#x3D;100.PlacePlayerOnTentativeRequest();
      //expect(instance).to.be();
    });

    it('should have the property playerId (base name: "playerId")', function() {
      // uncomment below and update the code to test the property playerId
      //var instance = new ClashBotRestClient&#x3D;projectVersion&#x3D;100.PlacePlayerOnTentativeRequest();
      //expect(instance).to.be();
    });

  });

}));
