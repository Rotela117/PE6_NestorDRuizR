// Resaltar el botón actual del menú
document.querySelectorAll(".menu a").forEach(link => {
    if (link.href.includes(location.pathname.split("/").pop())) {
        link.style.borderBottom = "2px solid #e50914";
    }
});


//imagen.html//  
// Resaltar menú actual
document.querySelectorAll(".menu a").forEach(link => {
    if (link.href.includes(location.pathname.split("/").pop())) {
        link.style.borderBottom = "2px solid #4da3ff";
    }
});

// Modal de imágenes
const modal = document.getElementById("modal");
const modalImg = document.getElementById("imgModal");
const cerrar = document.getElementById("cerrarModal");

document.querySelectorAll(".imagen").forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
    });
});

cerrar.onclick = () => {
    modal.style.display = "none";
};

window.onclick = e => {
    if (e.target == modal) modal.style.display = "none";
};



// audio //

// Resaltar la página actual en el menú
document.querySelectorAll(".menu a").forEach(link => {
    if (link.href.includes(location.pathname.split("/").pop())) {
        link.style.borderBottom = "2px solid #4da3ff";
    }
});

// Reproductor simple
const players = document.querySelectorAll(".player");
const playButtons = document.querySelectorAll(".play-btn");
const pauseButtons = document.querySelectorAll(".pause-btn");

// Para que solo suene un audio a la vez
function pausarTodos() {
    players.forEach(p => p.pause());
}

playButtons.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        pausarTodos();
        players[i].play();
    });
});

pauseButtons.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        players[i].pause();
    });
});


// video //


// Resaltar sección activa
document.querySelectorAll(".menu a").forEach(link => {
    if (link.href.includes(location.pathname.split("/").pop())) {
        link.style.borderBottom = "2px solid #4da3ff";
    }
});

// Reproductor principal de YouTube
const visor = document.getElementById("visorPrincipal");
const botonesVer = document.querySelectorAll(".ver-btn");

botonesVer.forEach(btn => {
    btn.addEventListener("click", () => {
        const tarjeta = btn.closest(".video-card");
        const videoURL = tarjeta.getAttribute("data-video");
        visor.src = videoURL + "?autoplay=1";
        visor.scrollIntoView({ behavior: "smooth" });
    });
});





// Mapa //

// Resaltar sección activa en menú
document.querySelectorAll(".menu a").forEach(link => {
    if (link.href.includes(location.pathname.split("/").pop())) {
        link.style.borderBottom = "2px solid #4da3ff";
    }
});



//opcional //
// Resaltar sección activa
document.querySelectorAll(".menu a").forEach(link => {
    if (link.href.includes(location.pathname.split("/").pop())) {
        link.style.borderBottom = "2px solid #4da3ff";
    }
});

// GIF opcional — pausa y reproducción
const gif = document.getElementById("gifAnimado");
const pausarBtn = document.getElementById("pausarGif");
const reproducirBtn = document.getElementById("reproducirGif");

// Guardamos el src original del gif
const gifSrc = gif.src;

// Para "pausar", reemplazamos con la primera frame (puede ser un PNG del GIF o frame inicial)
pausarBtn.addEventListener("click", () => {
    const staticFrame = "https://i.imgur.com/0RzvXnC.png"; // primera frame o imagen estática
    gif.src = staticFrame;
});

reproducirBtn.addEventListener("click", () => {
    gif.src = gifSrc;
});
