'use strict';

/**
 * @ngdoc function
 * @name lendingrealApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the lendingrealApp
 */

angular.module('lendingrealApp')
  .controller('HeaderCtrl', function($scope, $uibModal) {

		// Open Login Modal
		$scope.openLogin = function () {
	    var modalInstance = $uibModal.open({
	      animation: $scope.animationsEnabled,
	      templateUrl: '/views/shared/login.html',
	      controller: 'LoginCtrl'
	    });
		};

  });
