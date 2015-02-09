var app = angular.module('LoanCalculator')

app.service('bankService', function($http){

	this.getIntRate = function(){
		return $http({
			method: 'GET', 
			url: '/api/interest_rate'
		}).then(function(res){
			return res.data;
		})
	}

	
})