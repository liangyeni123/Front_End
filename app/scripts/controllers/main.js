'use strict';

/**
 * @ngdoc function
 * @name lendingrealApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lendingrealApp
 */
angular.module('lendingrealApp')

    .controller('MainCtrl', function($scope, $timeout, uiGmapGoogleMapApi, uiGmapIsReady, Deal) {
        // Do stuff with your $scope.
        // Note: Some of the directives require at least something to be defined originally!

        // text to show on image
        $scope.imageText = 'Canada\'s First Marketplace for Homeowners and Private Lenders';

        // Search inputs
        // annual return slider
        $scope.annualReturnSlider = [9, 12];
        $scope.ltvSlider = 85;
        function addTickNumber() {
          $timeout(function() {
            var divUpdate = angular.element('.ui-slider-tick');
            var ltvIndex = 100;
            var tip;
            angular.forEach(divUpdate, function(div, index) {

              if (div.parentNode.className.indexOf('ltv') === 0) {
                ltvIndex = ltvIndex - 5;
                tip = ltvIndex;
              } else {
                tip = 14-index;
              }

              var divElement = angular.element(div);
              divElement.html('<span class=\'tip\'>|</span><span class=\'tick-number\'>'+tip+'</span>');
              //
            });

          }, 1000);

        }
        addTickNumber();

        // set up deals, map and markers
        $scope.deal = {};
        $scope.search = {};
        $scope.markers = [];

        function initMaps() {
            $scope.map = {
                center: {
                    latitude: 43.6532,
                    longitude: -79.3832
                },
                zoom: 12,
                bounds: {},
                control : {}
            };
        }

        $scope.marker = {
          options:{
              icon: '/images/icon_pin_map.svg'
          }
        };

        // uiGmapGoogleMapApi is a promise.
        // The "then" callback function provides the google.maps object.
        uiGmapGoogleMapApi.then(function(maps) {

        });

        // When google map is ready
        uiGmapIsReady.promise().then(function (maps) {
          var map =  maps[0].map;

          $scope.toggleMap = function (size) {
            if (size === 'full') {
              angular.element('.deal-box').hide();
              angular.element('.map-box').css('width','100%');
            } else {
              angular.element('.deal-box').show();
              angular.element('.map-box').css('width','50%');
            }
            angular.element('.toggle-map-btn').toggleClass('map-toggle-hover');
            var center = map.getCenter();
            var latlon = {};
            latlon.latitude = center.lat();
            latlon.longitude = center.lng();
            $scope.map.control.refresh(latlon);
          };
        });

        function setLocations(){
          Deal.getLocations({}, function(result){
            $scope.locations = result.locations;
          }, function(err){
            console.log('setLocations error: '+ err);
          });
        }

        function search(){
          $scope.search.annualReturnMin = $scope.annualReturnSlider[0]/100;
          $scope.search.annualReturnMax = $scope.annualReturnSlider[1]/100;
          // console.log('location: '+ $scope.search.locations);
          // console.log('status:'+$scope.search.status);
          var params = {
            id: $scope.search.id,
            annual_return_min: $scope.search.annualReturnMin,
            annual_return_max: $scope.search.annualReturnMax,
            ltv_min: $scope.search.ltvMin,
            ltv_max: $scope.ltvSlider,
            'locations[]': $scope.search.locations,
            'statuses[]': $scope.search.status
          };
          // console.log(params);
          Deal.search(params, function(result){
            var deals = result.deals.data;
            console.log(deals);
            $scope.deals = deals;
            $scope.markers = deals;
          }, function(err){
            console.log(err);
          });
        }

        $scope.search = function(){
          search();
        };

        initMaps();
        setLocations();
        search();

        // helper functions
        // override dropdown events so that the dropdown does not close when chick inside
        $scope.openDropdown = function ($event){
          if ($($event.target).parent().is('.open')) {
            $('.select-btn').removeClass('open');
          } else {
            $('.select-btn').removeClass('open');
            $($event.target).parent().toggleClass('open');
          }
        };

        angular.element('body').on('click', function (e) {
          if (!$('.dropdown-menu').is(e.target) &&
              $('.dropdown-menu').has(e.target).length === 0 &&
              $('.open').has(e.target).length === 0
          ) {
            $('.select-btn').removeClass('open');
          }
      });
      // Helper function end
    })
    .factory('Deal', ['$resource', 'Config', dealFactory]);

    //dealFactory
    function dealFactory($resource, Config) {
        return $resource('/', {}, {
            search: {
                url: Config.api + '/deal',
                method: 'GET'
            },
            getLocations: {
                url: Config.api + '/deal/location',
                method: 'GET'
            }
        });
    }
