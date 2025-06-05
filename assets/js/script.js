

//// mobile header
const menuButton = document.querySelector('.menu-button');
const menuOverlay = document.querySelector('.menu-overlay');
const menuItems = document.querySelectorAll('.menu a');
const html = document.documentElement;
const body = document.body;
 
let isOpen = false;
 
// Function to check if it's mobile view
function isMobileView() {
  return window.innerWidth <= 992;
}
 
// Function to open the menu
function openMenu() {
  html.classList.add('no-scroll');
  body.classList.add('no-scroll');
 
  // Slide in menu from right
  gsap.to(menuOverlay, {
    duration: 0.5,
    right: '0%',
    ease: 'power3.out'
  });
 
  // Animate menu links
  gsap.fromTo(menuItems, {
    opacity: 0,
    x: 20
  }, {
    duration: 0.5,
    opacity: 1,
    x: 0,
    stagger: 0.1,
    delay: 0.2,
    ease: 'power3.out'
  });
}
 
// Function to close the menu
function closeMenu() {
  html.classList.remove('no-scroll');
  body.classList.remove('no-scroll');
 
  // Animate links out
  gsap.to(menuItems, {
    duration: 0.3,
    opacity: 0,
    x: 20,
    stagger: -0.1
  });
 
  // Slide out menu to the right
  gsap.to(menuOverlay, {
    duration: 0.5,
    right: isMobileView() ? '-100%' : '-50%',
    delay: 0.3,
    ease: 'power3.in'
  });
}
 
// Toggle menu on button click
menuButton.addEventListener('click', () => {
  if (!isOpen) {
    openMenu();
  } else {
    closeMenu();
  }
  isOpen = !isOpen;
  menuButton.classList.toggle('open', isOpen);
});


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


// // menu dropdown
// const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

// dropdownToggles.forEach(toggle => {
//   toggle.addEventListener('click', (e) => {
//     e.preventDefault();
//     const parent = toggle.closest('.menu-dropdown');
//     parent.classList.toggle('open');
//   });
// }); 


// const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

// dropdownToggles.forEach(toggle => {
//   toggle.addEventListener('click', (e) => {
//     e.preventDefault();
    
//     const parent = toggle.closest('.menu-dropdown');

//     // Close all other dropdowns
//     document.querySelectorAll('.menu-dropdown').forEach(item => {
//       if (item !== parent) {
//         item.classList.remove('open');
//       }
//     });

//     // Toggle the clicked one
//     parent.classList.toggle('open');
//   });
// });


// // menu mouse hover show 
// const dropdowns = document.querySelectorAll('.menu-dropdown');
// dropdowns.forEach(dropdown => {
//   const toggle = dropdown.querySelector('.dropdown-toggle');

//   dropdown.addEventListener('mouseenter', () => {
//     // Close all other dropdowns
//     dropdowns.forEach(d => {
//       if (d !== dropdown) {
//         d.classList.remove('open');
//       }
//     });
//     // Open current
//     dropdown.classList.add('open');
//   });

//   dropdown.addEventListener('mouseleave', () => {
//     dropdown.classList.remove('open');
//   });
// });





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
// window.onscroll = function() {
//   const topButton = document.getElementById("topButton");
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     topButton.style.display = "block";
//   } else {
//     topButton.style.display = "none";
//   }
// };

// // Function to scroll to the top
// function scrollToTop() {
//   window.scrollTo({ top: 0, behavior: 'smooth' });
// }


// Function to start counting
let count = document.querySelectorAll(".count")
      let arr = Array.from(count)
      arr.map(function(item){
        let startnumber = 0

        function counterup(){
        startnumber++
        item.innerHTML= startnumber
        
        if(startnumber == item.dataset.number){
            clearInterval(stop)
        }
      }

      let stop =setInterval(function(){
        counterup()
      },10)

      })
      
// function startCounting() {
//   let counter = document.querySelectorAll(".counter");
//   let arr = Array.from(counter);

//   arr.map((item) => {
//     let count = 0;
//     function CounterUp() {
//       count++;
//       item.innerHTML = count;
//       if (count == item.dataset.number) {
//         clearInterval(stop);
//       }
//     }
//     let stop = setInterval(function () {
//       CounterUp();
//     }, 100 / item.dataset.speed);
//   });
// }
// close





// section wrapping

// $(document).ready(function() {
//   // Initialize Lenis smooth scroll
//   const lenis = new Lenis({
//     lerp: 0.1,
//     smooth: true,
//     direction: 'vertical'
//   });

//   // Get all sections
//   const sections = $('.section');
//   const sectionCount = sections.length;
//   let currentSection = 0;

//   // Function to snap to a specific section
//   function goToSection(index) {
//     if (index < 0 || index >= sectionCount) return;
    
//     currentSection = index;
//     const target = sections.eq(index)[0];
//     lenis.scrollTo(target, {
//       duration: 1.2,
//       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) // smooth easing
//     });
//   }

//   // Handle wheel events for section navigation
//   $(window).on('wheel', function(e) {
//     e.preventDefault();
    
//     if (e.originalEvent.deltaY > 0) {
//       // Scroll down - next section
//       goToSection(currentSection + 1);
//     } else {
//       // Scroll up - previous section
//       goToSection(currentSection - 1);
//     }
//   });

//   // Handle keyboard navigation
//   $(document).on('keydown', function(e) {
//     switch(e.which) {
//       case 38: // Up arrow
//         goToSection(currentSection - 1);
//         e.preventDefault();
//         break;
//       case 40: // Down arrow
//         goToSection(currentSection + 1);
//         e.preventDefault();
//         break;
//     }
//   });

//   // Update Lenis on each frame
//   function raf(time) {
//     lenis.raf(time);
//     requestAnimationFrame(raf);
//   }
//   requestAnimationFrame(raf);

//   // Update current section on scroll
//   lenis.on('scroll', ({ scroll, limit }) => {
//     const scrollPosition = scroll;
//     sections.each(function(index) {
//       const section = $(this);
//       const sectionTop = section.offset().top;
//       const sectionHeight = section.outerHeight();
      
//       if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionTop + sectionHeight - 100) {
//         currentSection = index;
//       }
//     });
//   });
// });





