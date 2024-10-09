let menuVisible = false;

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("nav").classList.remove("responsive");
});

function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList.remove("responsive");
        menuVisible = false;
    } else {
        document.getElementById("nav").classList.add("responsive");
        menuVisible = true;
    }
}

function seleccionar(){
    
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

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

window.onscroll = function(){
    efectoHabilidades();
} 
