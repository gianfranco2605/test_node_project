// Initialize Slick slider
$(document).ready(function () {
  $(".slider").slick({
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: "linear",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: false,
        },
      },
    ],
  });
});
