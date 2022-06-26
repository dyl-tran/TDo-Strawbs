

const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})

var swiper = new Swiper('.swiper', {
                slidesPerView: 2,
                spaceBetween: 30,
                freeMode: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: false,
                },
            });
var mobile = new Swiper('.mobile', {
                slidesPerView: 1,
                spaceBetween: 30,
                freeMode: true,
                pagination: {
                    el: '.mobile-pagination',
                    clickable: false,
                },
            });