(function(){
  'use strict';
	
	var app = angular.module('qcn',['ui.router']);

	app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
		
		$stateProvider
			.state('home',{
			url:'/home',
			templateUrl:'./components/home/home.html'
		});

		$urlRouterProvider.otherwise('/home');
	}]);    
}());
