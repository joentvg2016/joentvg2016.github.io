//Función que me aplica el estilo a la opción seleccionada y quita la seleccionada anteriormente
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

   
}


//detecto el scrolling para aplicar la animación del las barras
window.onscroll = function() { efectoidiomas(), efectoHabilidades() };

//funcion que aplica la animación de la barra de idiomas
function efectoidiomas() {
    var idiomas = document.getElementById("idiomas");
    var distancia_idiomas = window.innerHeight - idiomas.getBoundingClientRect().top;
    if (distancia_idiomas >= 300) {
        document.getElementById("ingles").classList.add("barra-progreso1b");
        document.getElementById("aleman").classList.add("barra-progreso2b");
        document.getElementById("italiano").classList.add("barra-progreso3b");
        document.getElementById("portugues").classList.add("barra-progreso4b");
    }

}



//funcion que aplica la animación de la barra de habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("ps").classList.add("barra-progreso4");
    }

}
