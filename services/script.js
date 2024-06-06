document.addEventListener("DOMContentLoaded", function() {
    const paragraph = document.getElementById("animated-text");
    setTimeout(() => {
        paragraph.style.opacity = 1;
    }, 500); // Espera 500 ms antes de iniciar la animación
});