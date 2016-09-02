/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

var miAplicacion = angular.module('FerreteApp', []);

miAplicacion.controller('FerreteControlador', function($scope){
    $scope.largo;
    $scope.ancho;
    $scope.radio;
    
    $scope.Rectangulo = function(){
        $scope.resultado = $scope.largo * 2 + $scope.ancho * 2;
        $scope.resultado *= 3;
        alert($scope.resultado);
    };
    
    $scope.Circulo = function(){
        $scope.resultado = 2 * Math.PI * parseFloat($scope.radio);
        $scope.resultado *= 3;
        alert(Math.ceil($scope.resultado));
    };
    
    $scope.Materiales = function(){
        $scope.resultado = Math.ceil($scope.largo * $scope.ancho);
        alert("Se necesitan " + 2*$scope.resultado + " bolsas de cemento y " +  3*$scope.resultado + " de cal");
    };
    
});