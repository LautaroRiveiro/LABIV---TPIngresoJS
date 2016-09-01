/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
var miAplicacion = angular.module('FerreteFacturacion', []);


miAplicacion.controller('ControladorFerrete', function($scope){
	$scope.PrecioUno;
	$scope.PrecioDos;
	$scope.PrecioTres;

	$scope.Sumar = function(){
		$scope.resultado = parseFloat($scope.PrecioUno) + parseFloat($scope.PrecioDos) + parseFloat($scope.PrecioTres);
		alert("La suma es: $" + $scope.resultado);
	};

	$scope.Promedio = function(){
		$scope.resultado = parseFloat($scope.PrecioUno) + parseFloat($scope.PrecioDos) + parseFloat($scope.PrecioTres);
		$scope.resultado = Math.round($scope.resultado/3*100)/100;
		alert("El promedio es: $" + $scope.resultado);
	};

	$scope.PrecioFinal = function(){
		$scope.resultado = parseFloat($scope.PrecioUno) + parseFloat($scope.PrecioDos) + parseFloat($scope.PrecioTres);
		$scope.resultado *= 1.21;
		alert("El precio final es: $" + $scope.resultado + " (IVA incluido).");
	};
})