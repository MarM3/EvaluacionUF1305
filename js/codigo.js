function copyAno(){
    document.getElementById("copyano").innerHTML = new Date().getFullYear();
}

function muestraFecha(){
    var miHora = new Date();
    var diaSemana = '';

    switch (new Date().getDay()){
        case 0:
            diaSemana = 'Domingo';
            break;
        case 1:
            diaSemana = 'Lunes';
            break;
        case 2:
            diaSemana = 'Martes';
            break;
        case 3:
            diaSemana = 'Miércoles';
            break;
        case 4:
            diaSemana = 'Jueves';
            break;
        case 5:
            diaSemana = 'Viernes';
            break;
        case 6:
            diaSemana = 'Sábado';
            break;
    }

    document.getElementById("mostrardatos").innerHTML = "RESULTADOS: Hoy es " + diaSemana + ". La hora actual es " +
            miHora.getHours() + ":" + miHora.getMinutes() + "."; // + (miHora.getMinutes()<10?'0':''), para los minutos menores de 10
}

function voltear(){
    var numero = window.prompt("Por favor, introduce un número:");

    if (numero!=null){
        var volteado = numero.split("");
        volteado.reverse();
        alert("El numero volteado es " + volteado.join("") + ".");
    }else{
        alert("El número introducido no es correcto.");
    }
}