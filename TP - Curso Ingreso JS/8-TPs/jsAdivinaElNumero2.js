/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

//Creo el app
var miAplicacion = angular.module('AdivinaElNumero2', []);

//Creo el controller
miAplicacion.controller('ControladorADV2', function($scope){

    $scope.isNumber = angular.isNumber;
    
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
            //alert("Usted es un ganador!!! y en solo " + $scope.intentos + " intentos");
            switch($scope.intentos){
                case 1:
                    alert("usted es un Psíquico");
                    break;
                case 2:
                    alert("excelente percepción");
                    break;
                case 3:
                    alert("Esto es suerte");
                    break;
                case 4:
                    alert("Excelente técnica");
                    break;
                case 5:
                    alert("usted está en la media");
                    break;
                default:
                    alert("falta técnica");
                    break;
            }
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