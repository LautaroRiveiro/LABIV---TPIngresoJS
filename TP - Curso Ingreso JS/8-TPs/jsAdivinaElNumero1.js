/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/

//Creo el app
var miAplicacion = angular.module('AdivinaElNumero1', []);

//Creo el controller
miAplicacion.controller('ControladorADV1', function($scope){

    $scope.Comenzar = function(){
        $scope.numeroSecreto = Math.floor((Math.random() * 100) + 1);
        console.log($scope.numeroSecreto);
        $scope.numeroIngresado = "";
        $scope.intentos = "";
    };

    $scope.Verificar = function(){
        $scope.intentos ++;
        console.log($scope.intentos);
        
        if($scope.numeroIngresado == $scope.numeroSecreto){
            alert("Usted es un ganador!!! y en solo " + $scope.intentos + " intentos");
            $scope.Comenzar();
        }
        else if($scope.numeroIngresado > $scope.numeroSecreto){
            alert("se pasó…");
            $scope.numeroIngresado = "";
        }
        else{
            alert("falta…");
            $scope.numeroIngresado = "";
        }
    };
    
    window.document.onload = $scope.Comenzar();
});