// menu open close //

// const menuButton = document.querySelector('.menu-button');
// const topOverlay = document.querySelector('.top-overlay');
// const menuOverlay = document.querySelector('.menu-overlay');
// const menuItems = document.querySelectorAll('.menu a');
// const html = document.documentElement;
// const body = document.body;

// let isOpen = false;

// menuButton.addEventListener('click', () => {
//   if (!isOpen) {
//     html.classList.add('no-scroll');
//     body.classList.add('no-scroll');
    
//     gsap.to(topOverlay, { duration: 0.5, top: '0%', ease: 'power3.out' });
//     gsap.to(menuOverlay, { duration: 0.5, right: '0%', delay: 0.5, ease: 'power3.out' });
//     gsap.to(menuItems, {
//       duration: 0.5,
//       opacity: 1,
//       x: 0,
//       stagger: 0.1,
//       delay: 1,
//       ease: "power3.out"
//     });
//   } else {
//     html.classList.remove('no-scroll');
//     body.classList.remove('no-scroll');
    
//     gsap.to(menuItems, { duration: 0.3, opacity: 0, x: 20, stagger: -0.1 });
//     gsap.to(menuOverlay, { duration: 0.5, right: '-50%', delay: 0.5 });
//     gsap.to(topOverlay, { duration: 0.5, top: '-100%', delay: 0.10, ease: 'power3.in' });
//   }

//   isOpen = !isOpen;
//   menuButton.classList.toggle('open', isOpen);
// });



 //// loader
  document.addEventListener('DOMContentLoaded', function() {
    const loader = document.querySelector('.loader');
    
    // Hide loader after content loads
    window.addEventListener('load', function() {
        setTimeout(() => {
            gsap.to(loader, {
                opacity: 0,
                duration: 0.5,
                onComplete: () => {
                    loader.style.display = 'none';
                }
            });
        }, 2000); // Adjust time as needed
    });
  });

// END pre loader








// menu open close //


//Animations
// gsap.registerPlugin(ScrollTrigger);

// gsap.from(".pfolio .owl-carousel .item", {
//   duration: 200,
//   x: 100,
//   opacity:0,
//   stagger: 50,
//   scrollTrigger: {
//     trigger: ".pfolio .owl-carousel .item",
//     start: "top 130%",
//     end:"center 50%",
//     scrub: true, 
//     markers: false,
//     toggleActions: "play reverse play reverse",
//   },
// });

// gsap.from(".pfolio2 .owl-carousel .item", {
//   duration: 200,
//   x: -100,
//   opacity:0,
//   stagger: 50,
//   scrollTrigger: {
//     trigger: ".pfolio2 .owl-carousel .item",
//     start: "top 130%",
//     end:"center 50%",
//     scrub: true, 
//     markers: false,
//     toggleActions: "play none none reverse",
//   },
// });


// about
// gsap.from(".left-about-cont", {
//   duration: 1,
//   x: -100,
//   opacity: 0,
//   stagger: 0.3,
//   scrollTrigger: {
//       trigger: ".left-about-cont",
//       start: "top 90%",
//       end: "bottom 50%",
//       scrub: true,
//       markers: false,
//       toggleActions: "play reverse play reverse",
//   }
// });
// gsap.from(".right-about-cont", {
//   duration: 1,
//   x: 100,
//   opacity: 0,
//   stagger: 0.3,
//   scrollTrigger: {
//       trigger: ".right-about-cont",
//       start: "top 90%",
//       end: "bottom 50%",
//       scrub: true,
//       markers: false,
//       toggleActions: "play reverse play reverse",
//   }
// });

// gsap.to(".right-about-cont img", {
//   y: -20,
//   duration: 2,
//   repeat: -1,
//   yoyo: true,
//   ease: "sine.inOut"
// });


// custom-tab
gsap.from(".custom-tab .container", {
  duration: 1,
  x: 300,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
      trigger: ".custom-tab .container",
      start: "top 80%",
      end: "top 20%",
      scrub: true,
      markers: false,
      toggleActions: "play none none reverse",
  },
});


// pfolio
gsap.from(".clients", {
  duration: 1,
  x: -300,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
      trigger: ".clients",
      start: "top 80%",
      end: "top 20%",
      scrub: true,
      markers: false,
      toggleActions: "play none none reverse",
  },
});

// future-content
gsap.from(".future-content", {
  duration: 1,
  y: -300,
  opacity: 0,
  stagger: 3,
  scrollTrigger: {
    trigger: ".future-content",
    start: "top 50%",
    end: "bottom 20%",
    scrub: true,
    markers: false,
    toggleActions: "play reverse play reverse",
    onEnter: () => startCounting(),
  }
});

// solution-content
gsap.from(".solution-content", {
  duration: 1,
  x: -300,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
      trigger: ".solution-content",
      start: "top 80%",
      end: "top 20%",
      scrub: true,
      markers: false,
      toggleActions: "play none none reverse",
  },
});


gsap.to(".shape1 img", {
  y: -20,
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

gsap.to(".shape2 img", {
  y: -20,
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});


// counting
gsap.from(".counter-outr .container", {
  duration: 1,
  y: -300,
  opacity: 0,
  stagger: 3,
  scrollTrigger: {
    trigger: ".counter-outr .container",
    start: "top 50%",
    end: "bottom 20%",
    scrub: true,
    markers: false,
    toggleActions: "play reverse play reverse",
    onEnter: () => startCounting(),
  }
});

// Function to start counting
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
//     }, 200 / item.dataset.speed);
//   });
// }
// close


// about page //
gsap.from(".abt-page-out .container", {
  duration: 1,
  x: 300,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
      trigger: ".abt-page-out .container",
      start: "top 80%",
      end: "top 20%",
      scrub: true,
      markers: false,
      toggleActions: "play none none reverse",
  },
});
gsap.from(".empower-content", {
  duration: 1,
  x: -100,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
      trigger: ".empower-content",
      start: "top 90%",
      end: "bottom 50%",
      scrub: true,
      markers: false,
      toggleActions: "play reverse play reverse",
  }
});


// // Animate each right-sector-list item on scroll
// gsap.utils.toArray(".right-project-list").forEach((item) => {
//   gsap.from(item, {
//     duration: 1,
//     x: 300,
//     opacity: 0,
//     scrollTrigger: {
//       trigger: item,
//       start: "top 80%",
//       end: "top 20%",
//       scrub: true,
//       markers: false,
//       toggleActions: "play none none reverse",
//     },
//   });
// });

// // Animate each left-sector-list item on scroll
// gsap.utils.toArray(".left-project-list").forEach((item) => {
//   gsap.from(item, {
//     duration: 1,
//     x: -300,
//     opacity: 0,
//     scrollTrigger: {
//       trigger: item,
//       start: "top 80%",
//       end: "top 20%",
//       scrub: true,
//       markers: false,
//       toggleActions: "play none none reverse",
//     },
//   });
// });


gsap.set(".right-project-list", { x: 300, opacity: 0 });
gsap.set(".left-project-list", { x: -300, opacity: 0 });

gsap.utils.toArray(".right-project-list").forEach((item) => {
  gsap.to(item, {
    x: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: item,
      start: "top 80%",
      end: "top 20%",
      scrub: true,
      markers: false
    },
  });
});

gsap.utils.toArray(".left-project-list").forEach((item) => {
  gsap.to(item, {
    x: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: item,
      start: "top 80%",
      end: "top 20%",
      scrub: true,
      markers: false
    },
  });
});


// sectors
gsap.from(".sector-lising", {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.3,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".sector-lising",
        start: "top 60%",
        toggleActions: "play none none reverse",
    }
});

// group of companies
gsap.from(".group-lising", {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.3,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".group-lising",
        start: "top 60%",
        toggleActions: "play none none reverse",
    }
});

// group of companies details page
// gsap.from(".sector-details-in", {
//     duration: 1,
//     x: -100,
//     opacity: 0,
//     stagger: 0.3,
//     scrollTrigger: {
//         trigger: ".sector-details-in",
//         start: "top 90%",
//         end: "bottom 50%",
//         scrub: true,
//         markers: false,
//         toggleActions: "play reverse play reverse",
//     }
// });
gsap.from(".right-group-lising li", {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.3,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".right-sector-lising",
        start: "top 60%",
        toggleActions: "play none none reverse",
    }
});


// contact us
gsap.from(".contact-info", {
  duration: 1,
  x: -100,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
      trigger: ".contact-info",
      start: "top 90%",
      end: "bottom 50%",
      scrub: true,
      markers: false,
      toggleActions: "play reverse play reverse",
  }
});
gsap.from(".contact-form", {
  duration: 1,
  x: 100,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
      trigger: ".contact-form",
      start: "top 90%",
      end: "bottom 50%",
      scrub: true,
      markers: false,
      toggleActions: "play reverse play reverse",
  }
});



// history
window.addEventListener("load", () => {
  document.querySelectorAll(".timeline-content").forEach((content) => {
    gsap.fromTo(content,
      { x: -100, opacity: 0 },
      {
        duration: 1,
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: content,
          start: "top 90%",
          end: "bottom 50%",
          scrub: true,
          toggleActions: "play reverse play reverse",
          markers: false
        }
      });
  });

  document.querySelectorAll(".timeline-image").forEach((image) => {
    gsap.fromTo(image,
      { x: 100, opacity: 0 },
      {
        duration: 1,
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: image,
          start: "top 90%",
          end: "bottom 50%",
          scrub: true,
          toggleActions: "play reverse play reverse",
          markers: false
        }
      });
  });

  // Refresh after everything is loaded
  ScrollTrigger.refresh();
});



//scroller-smooth
const lenis = new Lenis()
lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 300)
})
gsap.ticker.lagSmoothing(0)

// close


// // Lenis disabled
// const disableLenisSections = document.querySelectorAll('sec3');
// disableLenisSections.forEach((section) => {
//   section.addEventListener('wheel', (e) => {
//     lenis.stop();
   
//     section.scrollTop += e.deltaY;
   
//     e.preventDefault();
   
//     setTimeout(() => lenis.start(), 100);
//   }, { passive: false });
// });


