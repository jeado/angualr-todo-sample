/**
 * todoApp Module
 *
 * Description
 */
var todoApp = angular.module('todoApp', []);

todoApp.controller('AppCtrl',function($scope){
	var items = [
		{text:'task 1+', done: false},
		{text:'task 2+', done: false}
	];

	$scope.items = items;

	$scope.remaining = function(){
		return items.reduce(function(count, item){
			return item.done ? count : count +1;
		}, 0);
	};
	
	$scope.add = function(newItem){
		var item = {text: newItem.text};
		items.push(item);
		newItem.text = "";

		console.log(window.newItemFrom.newItemText.$error);
	};

	$scope.archive = function(){
		items=$scope.items = items.filter(function(item){
			return !item.done;
		});
	};


});