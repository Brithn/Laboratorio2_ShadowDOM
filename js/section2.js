
class SeccionGaleria extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
        <style>
        .galeria {
            // display: flex;
            overflow-x: scroll;
            padding: 10px;
            scrollbar-width: none; 
            padding-top:.65rem;
            object-fit: cover;
            padding-right: .75rem;
        }
        .galeria img {
            width: 200px;
            height: 200px;
            object-fit: cover;
            margin: 10px;
            border-radius: 10px;
        }
        </style>
            <div class="galeria">
                <img src="https://png.pngtree.com/thumb_back/fh260/background/20230516/pngtree-wolfs-full-hd-wallpaper-art-wallpaper-1920x1080-1080p-image_2571308.jpg" alt="galeria Image 1">
                <img src="https://png.pngtree.com/background/20230516/original/pngtree-full-hd-king-of-beasts-wallpapers-picture-image_2615200.jpg" alt="galeria Image 2">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMBV7Hsf4NLNtNg5vvKIoPAvI6lc5RGqWSi4jRuzAvWxyScshcHwMf89xs4LBvKiJ9_F0&usqp=CAU" alt="galeria Image 3">
                <img src="https://img.freepik.com/fotos-premium/otono-es-epoca-magica-ano-que-naturaleza-viste-sus-atuendos-mas-brillantes-hojas-amarillas-rojas-aire-fresco-calido-sol-crean-atmosfera-insuperable-belleza-melancolica_887181-7139.jpg" alt="galeria Image 4">
                <img src="https://img.freepik.com/fotos-premium/papel-pared-ambled-negro-4k-macro-minimalista-naturaleza-3d_1029679-14806.jpg?size=626&ext=jpg&ga=GA1.1.1908636980.1712966400&semt=ais" alt="galeria Image 5">
                <img src="https://img.freepik.com/foto-gratis/pintura-lago-montana-montana-al-fondo_188544-9126.jpg" alt="galeria Image 6">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmKCpmQo0lxq4iXUnaC3-Q0MGmc54082jP447M6ddfkShwmANS57yYoiJ2E5nw1ltHqbQ&usqp=CAU" alt="galeria Image 7">
                <img src="https://img.freepik.com/foto-gratis/fantastica-puesta-sol-sobre-lago-cielo-espectacular-mundo-belleza_587448-8136.jpg" alt="galeria Image 8">
                <img src="https://us.123rf.com/450wm/xanthius/xanthius2306/xanthius230605027/206102400-una-puesta-de-sol-sobre-un-cuerpo-de-agua.jpg?ver=6" alt="galeria Image 9">
                <img src="https://us.123rf.com/450wm/valio84sl/valio84sl2107/valio84sl210700226/172410337-hermoso-paisaje-nublado-sobre-el-mar-tiro-al-amanecer.jpg?ver=6" alt="galeria Image 10">
                <img src="https://us.123rf.com/450wm/xanthius/xanthius2306/xanthius230605027/206102400-una-puesta-de-sol-sobre-un-cuerpo-de-agua.jpg?ver=6" alt="galeria Image 9">
                <img src="https://us.123rf.com/450wm/valio84sl/valio84sl2107/valio84sl210700226/172410337-hermoso-paisaje-nublado-sobre-el-mar-tiro-al-amanecer.jpg?ver=6" alt="galeria Image 10">
                   
            </div>
        `;
    }
}

customElements.define('seccion-galeria', SeccionGaleria);