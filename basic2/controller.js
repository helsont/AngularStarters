// When you use '[]' you define something
// To get the module MyApp, you would do:
// var anotherReference = angular.module('MyApp');
var app = angular.module('MyApp', []);
app.service('DataService', function() {

	// A service needs to return an object with functions
	var service = {
		sayHi: sayHi,
		doSomething
	};

	return service;

	// These functions are referenced above
	function sayHi() {
		return "This is Joey!";
	}

	function doSomething(x, y) {
		return x + y;
	}
});

app.controller('AppController', function($scope, DataService) {
	// This will return "This is Joey!"
	$scope.dataToShow = DataService.sayHi();
});