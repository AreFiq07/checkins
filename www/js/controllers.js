angular.module('app.controllers', [])

.run(function($rootScope, $localStorage){
	$rootScope.$storage = $localStorage;

	if($rootScope.$storage.checkins == undefined)
	{
		$rootScope.$storage.checkins = [];
	}
})
  
.controller('checkInCtrl', ['$scope', '$stateParams', 
function ($scope, $stateParams) {


}])
   
.controller('newCheckInCtrl', ['$scope', '$stateParams', '$state', 'LocationService', 'GPSService',
function ($scope, $stateParams, $state, LocationService, GPSService) {

	$scope.getPosition = function()
	{
		// get GPS Location
		GPSService.getLocation();
	}

	$scope.save = function()
	{
		// save the record
		var data = {
			id : Math.floor((Math.random() * 100000000) + 1),
			name : $scope.name,
			description : $scope.description,
			review : $scope.review,
			rating : $scope.rating,
			coordinate : {
				latitude : $scope.$storage.lat,
				longitude : $scope.$storage.long,
				address : $scope.$storage.address
			}
		}
		LocationService.addLocation(data);
		$state.go('checkIn');
	}
}])
   
.controller('editCheckInCtrl', ['$scope', '$stateParams', 
function ($scope, $stateParams) {


}])
   
.controller('checkInDetailsCtrl', ['$scope', '$stateParams', 'LocationService',
function ($scope, $stateParams, LocationService) {
	$scope.checkin = LocationService.getLocationById($stateParams.id);
}])
 