var clima = angular.module("clima",[])
clima.controller("Listaclima",function ($scope,$rootscope,$http) {
	$http({
		method:"GET",
		url: "api or pro.openweathermap.org/data/2.5/"
	})then(function clim(c))
})