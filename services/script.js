document.addEventListener("DOMContentLoaded", function() {
    const paragraph = document.getElementById("animated-text");
    setTimeout(() => {
        paragraph.style.opacity = 1;
    }, 500); 
});

document.addEventListener('DOMContentLoaded', function() {
    AOS.init();
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-button');
    const toggleIcon = document.getElementById('toggle-icon');
    const body = document.body;

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        if (body.classList.contains('light-mode')) {
            toggleIcon.classList.remove('fa-moon');
            toggleIcon.classList.add('fa-sun');
        } else {
            toggleIcon.classList.remove('fa-sun');
            toggleIcon.classList.add('fa-moon');
        }
    });
});
