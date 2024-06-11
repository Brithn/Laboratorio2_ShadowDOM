document.addEventListener("DOMContentLoaded", function() {
    const paragraph = document.getElementById("animated-text");
    setTimeout(() => {
        paragraph.style.opacity = 1;
    }, 500); 
});

document.addEventListener('DOMContentLoaded', function() {
    AOS.init();
});
