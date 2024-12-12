let menuVisible = false;  // Inicialmente el menú no es visible

// Al cargar el DOM, configurar eventos y el estado inicial del menú
document.addEventListener("DOMContentLoaded", function() {
    // Ocultar el menú (quitar la clase 'responsive' al cargar)
    document.getElementById("nav").classList.remove("responsive");

    // Seleccionar los enlaces del menú
    const enlaces = document.querySelectorAll("nav ul li a");

    // Agregar evento click a cada enlace para ejecutar la función seleccionar
    enlaces.forEach(enlace => {
        enlace.addEventListener("click", seleccionar);
    });

    // Agregar evento para mostrar/ocultar el menú
    document.querySelector(".nav-responsive").addEventListener("click", mostrarOcultarMenu);
});

function seleccionar() {
    document.getElementById("nav").classList.remove("responsive");
    menuVisible = false;  // Asegurarse de que el menú no esté visible
}

function mostrarOcultarMenu() {
    const nav = document.getElementById("nav");
    if (menuVisible) {
        nav.classList.remove("responsive");
    } else {
        nav.classList.add("responsive");
    }
    menuVisible = !menuVisible;  // Alternar el estado de visibilidad
}

// Función para el efecto de habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("HTML");
        habilidades[2].classList.add("CSS");
        habilidades[3].classList.add("GIT");
        habilidades[4].classList.add("Python");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("project");
    }
}

// Evento para ejecutar el efecto de habilidades al hacer scroll
window.onscroll = function(){
    efectoHabilidades();
}
