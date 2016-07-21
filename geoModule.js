/**
 * Created by Marco on 21/07/2016.
 */

angular.module('geoModule', [])

.factory('$geoService', function($window, $log) {

    var _service = {
        latitude: 0,
        longitude: 0
    };

    var _success = function (position) {

        _service.latitude = position.coords.latitude;
        _service.longitude = position.coords.longitude;

        $log.info(_service);
    };

    var _error = function (error) {
        $log.error(error);
    };

    if ($window.navigator.geolocation) {

        $window.navigator.geolocation.getCurrentPosition(_success, _error, {
            enableHighAccuracy: true,
            maximumAge: 600000
        });

    }

    return _service;


});