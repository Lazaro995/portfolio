let currentChapter = 0; // Índice para el capítulo actual

function closeCard() {
    const card = document.getElementById("persona5-card");
    const music = document.getElementById("backgroundMusic"); // Referencia al audio
    const chapters = document.querySelectorAll(".chapter"); // Selecciona todas las secciones
    const nav = document.querySelector('nav');
    
    // Hacemos visible la barra de navegación
    nav.style.opacity = '1';
    
    // Desvanecemos la tarjeta
    card.style.opacity = '0';
    
    // Ocultamos la tarjeta después de la animación
    setTimeout(() => {
        card.style.display = 'none';
        
        // Intentamos reproducir la música
        music.play().catch(function (error) {
            console.log('Error al intentar reproducir la música:', error);
        });
        
        // Añadimos clase activa al nav
        nav.classList.add("active");

        // Mostrar solo el capítulo correspondiente
        showChapter(currentChapter);
    }, 0);
}

// Función para mostrar el capítulo basado en el índice
function showChapter(index) {
    const chapters = document.querySelectorAll(".chapter");
    chapters.forEach((chapter, i) => {
        if (i === index) {
            chapter.classList.add("active");
        } else {
            chapter.classList.remove("active");
        }
    });
}

// Funciones para navegar entre capítulos
function nextChapter() {
    const chapters = document.querySelectorAll(".chapter");
    if (currentChapter < chapters.length - 1) {
        currentChapter++;
        showChapter(currentChapter);
    }
}

function prevChapter() {
    if (currentChapter > 0) {
        currentChapter--;
        showChapter(currentChapter);
    }
}

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown") {
        nextChapter();
    } else if (event.key === "ArrowUp") {
        prevChapter();
    }
});

const navLinks = document.querySelectorAll('nav a');
navLinks.forEach((link, index) =>{
    link.addEventListener('click', function(e){
        e.preventDefault();
        currentChapter = index;
        showChapter(currentChapter);
    })
})
