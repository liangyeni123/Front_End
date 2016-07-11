'use strict';

/**
 * @ngdoc function
 * @name lendingrealApp.controller:BrokerCtrl
 * @description
 * # BrokerCtrl
 * Controller of the lendingrealApp
 */
angular.module('lendingrealApp')
  .controller('BrokerCtrl', function ($scope) {
    $scope.imageText = 'Canada\’s First Marketplace for Homeowners and Private Lenders';
    $scope.imageSubText = '';

		$scope.reasons = [
			'You get more deals and make more money',
			'We provide you with one of the Largest Private Money Pools',
			'Receive a finder’s fee, in addition to the full broker fee',
			'We promise Same Day Turn-Around-Bridge Ends',
			'We send deals to you too'
		];

		$scope.steps = [
			{
				image: '',
				title: 'Create a Broker Profile',
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nulla magna, tempus in efficitur sit amet, iaculis nec orci. In hac habitasse platea dictumst.'
			},
			{
				image: '',
				title: 'Provide Deal Information',
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nulla magna, tempus in efficitur sit amet, iaculis nec orci. In hac habitasse platea dictumst.'
			},
			{
				image: '',
				title: 'Close Deal and Earn Finder’s Fee',
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nulla magna, tempus in efficitur sit amet, iaculis nec orci. In hac habitasse platea dictumst.'
			}
		];

		$scope.testimonials = [
			{
				image: '',
				name: 'LULU HOFFMAN',
				quote: 'Two weeks before closing, I’ve tried all banks but still wasn’t able to get money in time. That was the time when I met P2P. They helped me complete the whole process within a week. I feel really grateful.'
			},
			{
				image: '',
				name: 'DUSTIN GONZALES',
				quote: 'I feel much more flexible working with P2P compared to traditional banks. They will sit down with you, listen to your needs, and tailor the contacts to meet every single item important to you.'
			},
			{
				image: '',
				name: 'ELSIE DUNKAN',
				quote: 'I got the lowest rate from P2P among all the second mortgage lending companies that I’ve tried. I would definitely recommend it to my other friends.'
			}
		];

		$scope.faqs = [
			{
				title: 'What products do you offer?',
				content: 'We are currently focusing on second mortgages. First mortgages and appreciation.'
			},
			{
				title: 'How long does it take to get a loan?',
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nulla magna, tempus in efficitur sit amet, iaculis nec orci. In hac habitasse platea dictumst.'
			},
			{
				title: 'How does the process of getting a loan work?',
				content: 'We are currently focusing on '
			},
			{
				title: 'What documents are required for application?',
				content: 'We are currently focusing on '
			},
			{
				title: 'Where do you currently operate?',
				content: 'We are currently focusing on '
			}
		];
  });
