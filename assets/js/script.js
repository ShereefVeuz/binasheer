// // menu dropdown
// const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

// dropdownToggles.forEach(toggle => {
//   toggle.addEventListener('click', (e) => {
//     e.preventDefault();
//     const parent = toggle.closest('.menu-dropdown');
//     parent.classList.toggle('open');
//   });
// }); 


const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

dropdownToggles.forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    
    const parent = toggle.closest('.menu-dropdown');

    // Close all other dropdowns
    document.querySelectorAll('.menu-dropdown').forEach(item => {
      if (item !== parent) {
        item.classList.remove('open');
      }
    });

    // Toggle the clicked one
    parent.classList.toggle('open');
  });
});




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
        items: 5
      }
    }
  })
  // close

// client 
//  $('.clients .owl-carousel').owlCarousel({
//   loop: true,
//   margin: 30,
//   nav: false,
//   autoplay: true,
//   autoplayHoverPause: true,
//   responsive: {
//     0: {
//       items: 1
//     },
//     350: {
//       items: 2
//     },
//     780: {
//       items: 3
//     },
//     900: {
//       items: 3
//     },
//     1000: {
//       items: 3
//     },
//     1300: {
//       items: 4
//     }
//   }
// })
// close




// section scrolling animation


// END section scrolling



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




