'use strict';

angular.module('lendingrealApp')
  .controller('CarouselCtrl', function ($scope, $window) {
    $scope.myInterval = 4000;
    $scope.noWrapSlides = false;
    $scope.active = 0;

    $window.onresize = function() {
      updateImage();
      $scope.$apply();
    };
    updateImage();

    function updateImage() {
      var screenWidth = $window.innerWidth;
      if (screenWidth < 768) {
        $scope.slides = [
          {
            id: 0,
            image: '/images/slider-0-m.png'
          },
          {
            id: 1,
            image: '/images/slider-1-m.png'
          },
          {
            id: 2,
            image: '/images/slider-2-m.png'
          },
          {
            id: 3,
            image: '/images/slider-3-m.png'
          },
          {
            id: 4,
            image: '/images/slider-4-m.png'
          }
        ];
      } else if (screenWidth >= 768) {
        $scope.slides = [
          {
            id: 0,
            image: '/images/slider-0.jpg'
          },
          {
            id: 1,
            image: '/images/slider-1.jpg'
          },
          {
            id: 2,
            image: '/images/slider-2.jpg'
          },
          {
            id: 3,
            image: '/images/slider-3.jpg'
          },
          {
            id: 4,
            image: '/images/slider-4.jpg'
          }
        ];
      }
    }


});
