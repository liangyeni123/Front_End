'use strict';

/**
 * @ngdoc overview
 * @name lendingrealApp
 * @description
 * # lendingrealApp
 *
 * Main module of the application.
 */
angular
  .module('lendingrealApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMessages',
    'uiGmapgoogle-maps',
    'ui.bootstrap',
    'ui.slider',
    'msieurtoph.ngCheckboxes',
    'lendingrealApp.config',
    'satellizer'
  ])
  .config(function ($routeProvider,
                    $locationProvider,
                    uiGmapGoogleMapApiProvider,
                    $authProvider
  ){
    // Routes
    $routeProvider
      .when('/', {
        templateUrl: '/views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: '/views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/broker', {
        templateUrl: '/views/broker.html',
        controller: 'BrokerCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);

    // Config Google map
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyABGWto424RnkCXFGIcpiDP2EBodbFYXGg',
        v: '3.23',
        libraries: 'weather,geometry,visualization'
    });

    // Config Satellizer for OAuth Login
    $authProvider.linkedin({
      clientId: '77i9z8qo62yo0a',
      url: '/auth/linkedin',
      authorizationEndpoint: 'https://www.linkedin.com/uas/oauth2/authorization',
      redirectUri: window.location.origin,
      requiredUrlParams: ['state'],
      scope: [],
      scopeDelimiter: ' ',
      state: 'STATE',
      type: '2.0',
      popupOptions: {
        width: 527,
        height: 582
      }
    });
  });
