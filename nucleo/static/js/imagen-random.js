const cantidad_productos = 14;
const path_productos = "static/img/productos/";

function updateImageSource() {
    const img = document.getElementById('img-random');
    const randomIndex = Math.floor(Math.random() * cantidad_productos + 1);
    img.src = `${path_productos}${randomIndex}.webp`;
    // console.log(randomIndex);
}

updateImageSource();
setInterval(updateImageSource, 3000);
