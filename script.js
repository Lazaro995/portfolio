function closeCard() {
    const card = document.getElementById("persona5-card");
    const music = document.getElementById("backgroundMusic"); // Referencia al audio
    const chapters = document.querySelectorAll(".chapter"); // Selecciona todas las secciones
    const nav = document.querySelector('nav');
    nav.style.opacity = '1';
    card.style.opacity = '0'; // Desvanecemos la tarjeta
    setTimeout(() => {
        card.style.display = 'none'; // Ocultamos la tarjeta
        music.play().catch(function (error) {
            console.log('Error al intentar reproducir la música:', error);
        });
nav.classList.add("active")
        // Hacemos visible el contenido de los capítulos
        chapters.forEach(chapter => {
            chapter.classList.add("active");
        });
    }, 0);
}
