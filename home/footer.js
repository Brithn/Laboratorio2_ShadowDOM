document.addEventListener('DOMContentLoaded', () => {
    const footerTemplate = document.getElementById('footer-template');
    const footerClone = footerTemplate.content.cloneNode(true);

    footerClone.getElementById('footer-text').textContent = 'PhotoFolio'; 

    footerClone.getElementById('icon1').href = 'https://facebook.com';
    footerClone.getElementById('icon2').href = 'https://twitter.com';
    footerClone.getElementById('icon3').href = 'https://instagram.com';
    footerClone.getElementById('icon4').href = 'https://linkedin.com';

    document.getElementById('footer-container').appendChild(footerClone);
});