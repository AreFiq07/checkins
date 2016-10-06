angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('GPSService', ['$cordovaGeolocation','$localStorage', '$http' ,function($cordovaGeolocation, $localStorage, $http){
	return {
		getLocation : function()
		{
			var location = {};
			var posOptions = {timeout: 10000, enableHighAccuracy: false};
			  $cordovaGeolocation
			    .getCurrentPosition(posOptions)
			    .then(function (position) {
			      $localStorage.lat  = position.coords.latitude;
			      $localStorage.long = position.coords.longitude;
			      $http.get('http://maps.googleapis.com/maps/api/geocode/json?latlng='+$localStorage.lat+','+$localStorage.long+'&sensor=true', {})
			      	.then(function(json){
			      		console.log(json);
			      		var location = json.data.results[0];
			      		$localStorage.address = location.formatted_address;
			      	}, function(err){
			      		console.log(err);
			      });
			    }, function(err) {
			      // error
			    });
			return location;
		}
	}
}])

.service('LocationService', ['$localStorage',function($localStorage){
	return {
		getLocationById : function(id) {
			return $localStorage.checkins.reduce(function(carry, location){
		        if(location.id == id)
		            carry = location;
		        return carry;
		    }, {});
		},
		addLocation : function(data) {
			$localStorage.checkins.push(data);
		},
		deleteLocation : function(id) {
			// do delete on array
			// how to remove an array element
		},
		updateLocation : function(id, data) {
			// do update
			// how to update an array element
		}
	}
}]);