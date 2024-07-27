function openclock() {
    // window.open() abre una nueva ventana con las siguientes propiedades
    window.open("reloj.html", "", "top=300, left=200, "
        + "scrollbars=no, resizable=no, location=no, toolbar=no, "
        + "menubar=no, height=175, width=210");
}

// intevalId almacena el id del intervalo
var intervalId;
function closeclock() {
    // clearInterval() detiene el intervalo utilizando el id almacenado
    clearInterval(intervalId);
    // window.close() cierra la ventana actual
    window.close();
}

// updateClock() actualiza el reloj
function updateClock() {
    // document.getElementById() obtiene referencias a los elementos html
    // que mostraran las horas minutos y segundos
    const h = document.getElementById("hours");
    const m = document.getElementById("minutes");
    const s = document.getElementById("seconds");
    // establece un intervalo que se ejecutara cada 500 milisegundos
    intervalId = setInterval(() => {
        // Date() obtiene la hora actual
        let now = new Date();
        // now.getHours() now.getMinutes() y now.getSeconds()
        // obtienen las horas los minutos y los segundos
        let h = now.getHours();
        let m = now.getMinutes();
        let s = now.getSeconds();
        // hours.innerHTML minutes.innerHTML y seconds.innerHTML
        // actualizan el contenido de los elementos HTML con
        // las horas los minutos y los segundos formateados
        hours.innerHTML = changeFormat(h) + ":";
        minutes.innerHTML = changeFormat(m) + ":";
        seconds.innerHTML = changeFormat(s);
    }, 500);
}

// changeFormat() formatea los numeros menores que 10
// agregando un cero a la izquierda
function changeFormat(date) {
    return (date < 10) ? "0" + date : date;
}

// window.addEventListener() espera el evento de carga de la pagina
// antes de ejecutar la funcion updateClock()
window.addEventListener("load", updateClock, false);

function goHome() {

    window.location.href = '/';

}

function goGit() {

    window.location.href = 'https://github.com/s7rg77/predefined-javaScript-objects';

}

function goDoc() {

    window.location.href = '/doc';

}