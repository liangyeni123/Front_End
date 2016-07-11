'use strict';

/**
 * @ngdoc function
 * @name lendingrealApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the lendingrealApp
 */
angular.module('lendingrealApp')
  .controller('AboutCtrl', function ($scope, $http, Config) {
    $scope.imageText = 'Canada\’s First Marketplace for Homeowners and Private Lenders';
    $scope.imageSubText = '';

    $scope.closeFormMsg = function () {
      angular.element('.form-msg').hide();
    }

    $scope.customerInfo = {};
    $scope.diasble_btn = false;
    $scope.submitCustomer = function () {
      var data = $scope.customerInfo;
      $http.post(Config.api + '/customer', data).success(function(data, status) {
          $scope.form_msg = 'You have successfully submitted your application.';
          $scope.diasble_btn = true;
      })
    };

    $scope.team = [
        {'img':'http://placehold.it/250x250', 'name':'Xin Yi Shen', 'title':'Co-founder & CEO', 'description':'Christian is a qualified lawyer with corporate finance, real estate experience and has been involved in the mortgage industry in the UK and Australia for over 10 years. He was previously a securitisation lawyer at Clifford Chance, and in-house legal counsel for Deutsche Bank; and was involved in a mortgage lending business in Australia.'},
        {'img':'http://placehold.it/250x250', 'name':'Wei Huang', 'title':'Co-founder & CEO', 'description':'Christian is a qualified lawyer with corporate finance, real estate experience and has been involved in the mortgage industry in the UK and Australia for over 10 years. He was previously a securitisation lawyer at Clifford Chance, and in-house legal counsel for Deutsche Bank; and was involved in a mortgage lending business in Australia.'}
    ];
  });
