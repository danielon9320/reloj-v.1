//Este metodo me ayuda a ejecutar una funcion despues de un tiempo establecido
/*window.setTimeout(saludar, 4000)

function saludar(){
    alert("Hola");
}

let contador = 1;
let tiempo = window.setInterval(contar, 1000);

function contar() {
    document.write(contador + "<br>");
    contador++;
    if(contador > 15){
        clearInterval(tiempo);
    }
}*/

function crearHora() {
    let fecha = new Date(),
    hora = fecha.getHours(),
    minutos = fecha.getMinutes(),
    segundos = fecha.getSeconds(),
    diaSemana = fecha.getDay(),
    dia = fecha.getDate(),
    mes = fecha.getMonth(),
    anio = fecha.getFullYear();

    //Enviar al html las variables
    let pDiaSemana = document.getElementById("diaSemana"),
        pDia = document.getElementById("dia"),
        pMes = document.getElementById("mes"),
        pAnio = document.getElementById("anio");

    //Asignar valors a los objetos del html

    pDia.innerText = dia;
    pAnio.innerText = anio;
    
    let semana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"],
        meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    pDiaSemana.innerText = semana[diaSemana];
    pMes.innerText = meses[mes];

    //Obtener los objetos del html

    let pHora = document.getElementById("horas"),
    pMinutos = document.getElementById("minutos"),
    pSegundos = document.getElementById("segundos"),
    pAmPm = document.getElementById("ampm");

    if(hora >= 12) {
        pAmPm.innerText = "pm";
        hora = hora - 12;
    } else {
        pAmPm.innerText = "am";
    }


    //mejorar formato de segundos < 10
    if(segundos < 10) {
        pSegundos.innerText = "0" + segundos;
    } else{
        pSegundos.innerText =  segundos;
    }

    //mejorar formato de minutos < 10
    if (minutos < 10) {
        pMinutos.innerText = "0" + minutos;
    } else {
        pMinutos.innerText = minutos;
    }
    
      //mejorar formato de horas < 10
      if (hora < 10) {
        pHora.innerText = "0" + hora;
    } else {
        pHora.innerText = hora;
    }
    
    
   
}

window.setInterval(crearHora, 1000);


