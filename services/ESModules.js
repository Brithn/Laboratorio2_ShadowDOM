const imagenes = [
    {
        "url": "https://static-cse.canva.com/blob/984400/Planosfotograficos.08c8c0db.avif",
        "nombre": "Proyecto 01",
        "descripcion": "Este es el proyecto 01 fue desarrollado para un video de youtube. Si te gusta el contenido dale like y suscribete"
    },
    {
        "url": "https://blog.foto24.com/wp-content/uploads/2019/04/Foto-3-1152x770.jpg",
        "nombre": "Proyecto 02",
        "descripcion": "Hola a todos este es el proyecto02 y fue desarrollado para un video de youtube. Si te gusta el contenido dale like y suscribete"
    },
    {
        "url": "https://www.prensalibre.com/wp-content/uploads/2022/08/EDN-27082022-FOTOS-MASCOTAS-FEBE-AVILA.jpg?quality=52",
        "nombre": "Proyecto 03",
        "descripcion": "Este proyecto, es el 03 y fue desarrollado para un video de youtube. Si te gusta el contenido dale like y suscribete"
    },
];

let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let imagen = document.getElementById('img');
let puntos = document.getElementById('puntos');
let texto = document.getElementById('texto');
let actual = 0;

function posicionCarrusel() {
    puntos.innerHTML = "";
    for (var i = 0; i < imagenes.length; i++) {
        if (i == actual) {
            puntos.innerHTML += '<p class="bold">.<p>';
        } else {
            puntos.innerHTML += '<p>.<p>';
        }
    }
}

function actualizarImagen() {
    imagen.innerHTML = `<img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`;
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>`;
    posicionCarrusel();
}

atras.addEventListener('click', function () {
    actual -= 1;
    if (actual == -1) {
        actual = imagenes.length - 1;
    }
    actualizarImagen();
});

adelante.addEventListener('click', function () {
    actual += 1;
    if (actual == imagenes.length) {
        actual = 0;
    }
    actualizarImagen();
});

posicionCarrusel();

export { posicionCarrusel, actualizarImagen };
