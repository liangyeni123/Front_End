'use strict';

angular.module('lendingrealApp')
  .controller('StatinfoCtrl',function ($scope, $location, $anchorScroll, $timeout) {
			$scope.gotoAnchor = function(anchor) {
				if ($location.path() !== '/about') {
						$location.path('/about');
						$location.hash(anchor);
						$anchorScroll();
				} else {
					$timeout(function() {
						$location.hash('contact');
  					$anchorScroll();
			 	});

				}
	   };

	 	});
