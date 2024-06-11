const imagenes = [
    {
        "url": "https://static-cse.canva.com/blob/984400/Planosfotograficos.08c8c0db.avif",
        "nombre": "La Belleza de lo Cotidiano",
        "descripcion": " 'La fotografía es el arte de congelar el tiempo, capturando la esencia de un momento en una imagen.' "
    },
    {
        "url": "https://blog.foto24.com/wp-content/uploads/2019/04/Foto-3-1152x770.jpg",
        "nombre": "Historias a Través del Lente",
        "descripcion": " 'Cada foto cuenta una historia; cada historia guarda un recuerdo.' "
    },
    {
        "url": "https://www.prensalibre.com/wp-content/uploads/2022/08/EDN-27082022-FOTOS-MASCOTAS-FEBE-AVILA.jpg?quality=52",
        "nombre": "Naturaleza en su Máxima Expresión",
        "descripcion": " 'La belleza de la vida se revela en los pequeños detalles capturados por la cámara.' "
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
