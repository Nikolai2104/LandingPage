$('.slider').slick({
  dots: true,
  infinite: true,
  speed: 500,
});
$('#blog').slick({
  centerMode: true,
  centerPadding: '80px',
  slidesToShow: 4,
  arrows: false,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '80px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1000,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 900,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '80px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 700,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '150px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 520,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 1
      }
    }
  ]
});

// burger-menu

var button = document.querySelector('.burger-menu__button');
var menu = document.querySelector('.burger-menu');
var overlay = document.querySelector('.burger-menu__overlay');

function burgerMenu() {
  if(menu.classList.contains('burger-menu_active')){
    menu.classList.remove('burger-menu_active');
  } else {
      menu.classList.add('burger-menu_active');
  }
}
console.log(button);
console.log(menu);
button.addEventListener('click', burgerMenu);
overlay.addEventListener('click', burgerMenu);




























// function burgerMenu(selector) {
//   let menu = $(selector);
//   let button = menu.find('.burger-menu__button');
//   let links = menu.find('.burger-menu__link');
//   let overlay = menu.find('.burger-menu__overlay');
//   button.on('click', (e) => {
//     e.preventDefault();
//     toggleMenu();
//   })

//   links.on('click', () => toggleMenu());
//   overlay.on('click', () => toggleMenu());

//   function toggleMenu() {
//     menu.toggleMenu('burger-menu_active');

//     if(menu.hasClass('burger-menu_active')){
//       $('body').css('overflow', 'hidden');
//     } else {
//       $('body').css('overflow', 'visible');
//     }
//   }
// }


// burgerMenu('.burger-menu');