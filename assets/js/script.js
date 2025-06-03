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













// const sections = document.querySelectorAll(".section");
//   let currentIndex = 0;
//   let isAnimating = false;

//   function goToSection(index) {
//     if (isAnimating || index < 0 || index >= sections.length) return;
//     isAnimating = true;

//     gsap.to(".sections-container", {
//       y: `-${index * 100}vh`,
//       duration: 1,
//       ease: "power2.inOut",
//       onComplete: () => {
//         isAnimating = false;
//         currentIndex = index;
//       }
//     });
//   }

//   // Mouse wheel navigation
//   window.addEventListener("wheel", (e) => {
//     if (e.deltaY > 0) {
//       goToSection(currentIndex + 1);
//     } else {
//       goToSection(currentIndex - 1);
//     }
//   });

//   // Optional: Allow arrow key navigation
//   window.addEventListener("keydown", (e) => {
//     if (e.key === "ArrowDown") {
//       goToSection(currentIndex + 1);
//     } else if (e.key === "ArrowUp") {
//       goToSection(currentIndex - 1);
//     }
//   });



//   let currentSection = 0;
// const totalSections = 2;

// window.addEventListener('wheel', (e) => {
//   e.preventDefault();
//   if (e.deltaY > 0 && currentSection < totalSections - 1) {
//     currentSection++;
//   } else if (e.deltaY < 0 && currentSection > 0) {
//     currentSection--;
//   }
//   document.querySelector('.sections-container').scrollTo({
//     top: currentSection * window.innerHeight,
//     behavior: 'smooth'
//   });
// }, { passive: false });








// const sections = document.querySelectorAll(".section");
// const sectionsContainer = document.querySelector(".sections-container");
// let currentIndex = 0;
// let isAnimating = false;

// // Elements that should allow normal scrolling
// const scrollableElements = document.querySelectorAll('.normal-content, .pfolio, .inner-all-outer, .custom-tab, .clients, .future, .solution');

// function goToSection(index) {
//   if (isAnimating || index < 0 || index >= sections.length) return;
  
//   isAnimating = true;
//   currentIndex = index;

//   gsap.to(sectionsContainer, {
//     y: `-${index * 100}vh`,
//     duration: 1,
//     ease: "power2.inOut",
//     onComplete: () => {
//       isAnimating = false;
//     }
//   });
// }

// // Check if element or its parents should allow normal scrolling
// function shouldAllowScroll(target) {
//   return Array.from(scrollableElements).some(el => 
//     el.contains(target) || target === el
//   );
// }

// // Mouse wheel navigation
// window.addEventListener("wheel", (e) => {
//   // Check if we're inside a scrollable area
//   if (shouldAllowScroll(e.target)) {
//     return; // Allow normal scrolling
//   }

//   // Prevent default only for section navigation
//   e.preventDefault();
  
//   if (e.deltaY > 0) {
//     goToSection(currentIndex + 1);
//   } else if (e.deltaY < 0) {
//     goToSection(currentIndex - 1);
//   }
// }, { passive: false });

// // Arrow key navigation
// window.addEventListener("keydown", (e) => {
//   // Don't prevent default if we're in a content area
//   if (shouldAllowScroll(document.activeElement)) {
//     return;
//   }

//   if (e.key === "ArrowDown") {
//     goToSection(currentIndex + 1);
//     e.preventDefault();
//   } else if (e.key === "ArrowUp") {
//     goToSection(currentIndex - 1);
//     e.preventDefault();
//   }
// });



// $(document).ready(function() {
//   var delay = false;
//   var currentPage = 1;
//   var pageCount = $(".section").length;
//   var swipe = document.getElementsByTagName('.section');

//   $(document).on('mousewheel DOMMouseScroll', function(event) {
//         event.preventDefault();
//         if (delay) return;
//         delay = true;
//         setTimeout(function() { delay = false }, 100)

//         var wd = event.originalEvent.wheelDelta || -event.originalEvent.detail;
//         console.log(wd);

//         if (wd < 0) {
//             if (currentPage < pageCount) {
//                 currentPage++;
//             }
//         } else {
//             if (1 < currentPage) {
//                 currentPage--;
//             }
//         }
    
//         $('html,body').animate({
//             scrollTop: $('#sec' + currentPage).offset().top
//         }, 700);

//         $('#tag' + currentPage).addClass('active');
//         for (var i = 1; i <= pageCount; i++) {
//             if (i != currentPage) {
//                 $('#tag' + i).removeClass('active');
//             }
//         }
//     });
// }); 


// $(document).ready(function () {
//   let delay = false;
//   let currentPage = 1;
//   const $sections = $(".section");
//   const pageCount = $sections.length;

//   $(document).on("mousewheel DOMMouseScroll", function (event) {
//     const wd = event.originalEvent.wheelDelta || -event.originalEvent.detail;

//     if (delay) return;

//     if (currentPage < pageCount || (currentPage === pageCount && wd > 0)) {
//       event.preventDefault();
//     }

//     delay = true;
//     setTimeout(function () {
//       delay = false;
//     }, 100);

//     if (wd < 0) {
//       // scroll down
//       if (currentPage < pageCount) {
//         currentPage++;
//         $("html,body").stop().animate(
//           {
//             scrollTop: $("#sec" + currentPage).offset().top,
//           },
//           700
//         );
//       }
//     } else {
//       // scroll up
//       if (currentPage > 1) {
//         currentPage--;
//         $("html,body").stop().animate(
//           {
//             scrollTop: $("#sec" + currentPage).offset().top,
//           },
//           700
//         );
//       }
//     }
//   });
// });


$(document).ready(function() {
  // Initialize Lenis smooth scroll
  const lenis = new Lenis({
    lerp: 0.1,
    smooth: true,
    direction: 'vertical'
  });

  // Get all sections
  const sections = $('.section');
  const sectionCount = sections.length;
  let currentSection = 0;

  // Function to snap to a specific section
  function goToSection(index) {
    if (index < 0 || index >= sectionCount) return;
    
    currentSection = index;
    const target = sections.eq(index)[0];
    lenis.scrollTo(target, {
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) // smooth easing
    });
  }

  // Handle wheel events for section navigation
  $(window).on('wheel', function(e) {
    e.preventDefault();
    
    if (e.originalEvent.deltaY > 0) {
      // Scroll down - next section
      goToSection(currentSection + 1);
    } else {
      // Scroll up - previous section
      goToSection(currentSection - 1);
    }
  });

  // Handle keyboard navigation
  $(document).on('keydown', function(e) {
    switch(e.which) {
      case 38: // Up arrow
        goToSection(currentSection - 1);
        e.preventDefault();
        break;
      case 40: // Down arrow
        goToSection(currentSection + 1);
        e.preventDefault();
        break;
    }
  });

  // Update Lenis on each frame
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Update current section on scroll
  lenis.on('scroll', ({ scroll, limit }) => {
    const scrollPosition = scroll;
    sections.each(function(index) {
      const section = $(this);
      const sectionTop = section.offset().top;
      const sectionHeight = section.outerHeight();
      
      if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionTop + sectionHeight - 100) {
        currentSection = index;
      }
    });
  });
});





