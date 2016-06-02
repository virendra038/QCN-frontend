(function(){
  'use strict';
	
	var app = angular.module('qcn',['ui.router']);

	app.config(function($stateProvider,$urlRouterProvider){

		$urlRouterProvider.otherwise('/src');

		$stateProvider
		.state('home',{
			url:'/src/home',
			templateUrl:'../components/home/home.html'
		})
	});    
}());
