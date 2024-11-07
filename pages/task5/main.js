const burgerMenu = document.querySelector('.burger-menu');
const nav = document.querySelector('.menu');
const burgerBars = document.querySelectorAll('.burger-bar');
let isOpenMenu = false;

burgerMenu.addEventListener('click', function () {
    isOpenMenu =! isOpenMenu;

    if(isOpenMenu){
        burgerBars[0].style.transform = 'rotate(45deg) translateY(11px)';
        burgerBars[1].style.opacity = '0';
        burgerBars[2].style.transform = 'rotate(-45deg) translateY(-11px)';
        burgerBars.forEach(bar => {
  
            bar.style.marginLeft = '15px';
        });
        nav.style.display = 'flex';
    } else {
        burgerBars[0].style.transform = 'rotate(0deg)';
        burgerBars[1].style.opacity = '1';
        burgerBars[2].style.transform = 'rotate(0deg)';
        burgerBars.forEach(bar => {
  
            bar.style.marginLeft = '0px';
        });
        nav.style.display = 'none';

    }

})

window.addEventListener('resize', function () {
    const screenWidth = window.innerWidth;

    if (screenWidth > 768) {
        // Если ширина больше 768px, показываем меню и сбрасываем бургер и его стили
        nav.style.display = 'flex'; // Показываем меню
        burgerBars[0].style.transform = 'rotate(0deg)';
        burgerBars[1].style.opacity = '1';
        burgerBars[2].style.transform = 'rotate(0deg)';
        isOpenMenu = false; // Сбрасываем состояние бургера
    } else {
        // Если ширина меньше 768px, скрываем меню, чтобы управлять бургером
        if (!isOpenMenu) {
            nav.style.display = 'none'; // Меню скрыто по умолчанию
        }
    }
})

const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable :true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

