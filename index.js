const btn = document.querySelector('#confirm')
const box1 = document.querySelector('.box-1')
const bgImgVar = '--bg-image'
const images = [`url(./imagenes/IMG-20231129-WA0010.jpg)`, `url(./imagenes/IMG-20231129-WA0009.jpg)`, `url(./imagenes/darwin-vegher-IAc1x02D9K0-unsplash.jpg)`,`url(./imagenes/why-kei-8e2gal_GIE8-unsplash.jpg)`, `url(./imagenes/thaddaeus-lim-RBthQZJd_vU-unsplash.jpg)`, `url(./imagenes/joey-kyber-45FJgZMXCK8-unsplash.jpg)`]
let index = 0

btn.addEventListener('click', () => {
    if (index >= images.length -1) {
        index = 0
    } else index++
    document.documentElement.style.setProperty(bgImgVar, images[index]);
})