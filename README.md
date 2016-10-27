# geoModule
Geolocate with Browser

An useful Angularjs service to geolocate with browser

## How to use

- Install via Bower

```
bower install geoModule --save-dev
```

- Include the file in you index.html

```javascript
<script src="[path]/[to]/geoModule.js"></script>
```

- Inject the dependency in you angular app.js

```javascript
var app = angular.module('myApp', ['geoModule']);
```

- Include the service in your controller

```javascript
app.controller('ExampleCtrl', ['$geoService', '$log', function($geoService, $log){

	$log.info($geoService);

}]);
```

