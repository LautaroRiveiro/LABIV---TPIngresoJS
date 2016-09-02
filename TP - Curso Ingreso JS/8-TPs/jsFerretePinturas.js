/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").

(celsius * 9 / 5) + 32 = F

*/

var miAplicacion = angular.module('FerreteApp', []);

miAplicacion.controller('FerreteController', function($scope){
    $scope.temperaturaIngresada;
    
    $scope.FahrenheitCentigrados = function(){
        $scope.temperaturaConvertida = (parseFloat($scope.temperaturaIngresada) - 32) * 5/9;
        alert($scope.temperaturaConvertida);
    };
    
    $scope.CentigradosFahrenheit = function(){
        $scope.temperaturaConvertida = (parseFloat($scope.temperaturaIngresada) * 9 / 5) + 32;
        alert($scope.temperaturaConvertida);
    };
});