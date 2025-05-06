// product-slider
$('.pfolio .owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      780: {
        items: 2
      },
      900: {
        items: 2
      },
      1000: {
        items: 3
      },
      1300: {
        items: 5
      }
    }
  })
  // close


  $('.pfolio2 .owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    rtl:true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      780: {
        items: 2
      },
      900: {
        items: 2
      },
      1000: {
        items: 3
      },
      1300: {
        items: 5
      }
    }
  })
  // close

   // client 
 $('.clients .owl-carousel').owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    780: {
      items: 2
    },
    900: {
      items: 2
    },
    1000: {
      items: 3
    },
    1300: {
      items: 4
    }
  }
})
// close



/*---returnTop-----*/
window.onscroll = function() {
  const topButton = document.getElementById("topButton");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
};

// Function to scroll to the top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}




