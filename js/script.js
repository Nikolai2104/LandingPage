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