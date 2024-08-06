const navmenu = () => {
  document.getElementById("navlinks").classList.toggle("show-nav");
  document.body.classList.toggle("overflow-hidden");
  document.getElementById("rotated-1").classList.toggle("rotated-1");
  document.getElementById("rotated-2").classList.toggle("rotated-2");
  document.getElementById("transparent").classList.toggle("bg-transparent");
};



$('.slick-slider-box').slick({
  dots: false,
  infinite: true,
  speed: 2000,
  slidesToShow: 3.7,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,

  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 982,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});