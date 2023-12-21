$(document).ready(function () {
  // Meniul de navigare
  const navLinks = $('.navbar-nav a.nav-link');

  navLinks.click(function () {
    // Elimină clasa "active" de la toate link-urile
    navLinks.removeClass('active');

    // Adaugă clasa "active" doar la link-ul selectat
    $(this).addClass('active');
  });

  // HERO SLIDER
  $('#hero-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 1,
    dots: false,
    smartSpeed: 1000,
    navText: ['PREV', 'NEXT'],
    responsive: {
      0: {
        nav: false,
      },
      768: {
        nav: true,
      }
    }
  });

  // PROJECT SLIDER
  $('#project-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    smartSpeed: 1000,
    margin: 24,
    navText: ["PREV", "NEXT"],
    responsive: {
      0: {
        items: 1,
        nav: false,
        margin: 0,
      },
      768: {
        items: 2,
      },
      1140: {
        items: 2,
        center: true,
        dots: false,
      }
    }
  });

  // REVIEW SLIDER (fără butoane PREV/NEXT)
  $('#reviews-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,  // Dezactivează butoanele PREV/NEXT
    dots: true,
    items: 1,
    smartSpeed: 800,
  });

  // Alte caruseluri
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    items: 1,
    smartSpeed: 800,
  });
});

