// HALO
document.addEventListener("mousemove", (e) => {
  let x = e.clientX;
  let y = e.clientY;
  const halo = document.querySelector("#halo");
  halo.style.top = (y - 300) + 'px';
  halo.style.left = (x - 300) + 'px';
});

//ENTRY ANIMATIONS

const loader = document.querySelector(".loader");
const navElements = document.querySelectorAll(".menu-desktop__item");
const arrows = document.querySelectorAll("#welcome p");

function disableScroll() {
  document.body.classList.add("no-scroll");
}
function enableScroll() {
  document.body.classList.remove("no-scroll");
}

const introTimeline = gsap.timeline({
  defaults: {
    ease: "Power2.easeInOut",
  },
});
introTimeline
  .to(loader, {
    y: -1000,
    duration: 0.5,
    delay: 3,
    display: "none",
    onComplete: () => {
      enableScroll();
    },
  })
  .from(navElements, {
    y: -100,
    autoAlpha: 0,
    stagger: 0.2,
  })
  .from(arrows, {
    y: 15,
    autoAlpha: 0,
    stagger: 0.2,
  });


//SCROLL ANIMATIONS

gsap.to(".stack p", {
  scrollTrigger: {
    trigger: "#clients",
  },
  x: 20,
  autoAlpha: 1,
  ease: "power-4",
  duration: 1,
});

gsap.from(".accordeon__client p", {
  scrollTrigger: {
    trigger: "#clients",
    start: "top 25%",
  },
  y: 50,
  autoAlpha: 0,
});

for (let card of document.querySelectorAll(".desktop-card--right")) {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
      toggleActions: "play reset play none",
    },
    translateX: 100,
    duration: 1,
    autoAlpha: 0,
  });
}
for (let card of document.querySelectorAll(".desktop-card--left")) {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
      toggleActions: "play reset play none",
    },
    translateX: -100,
    duration: 1,
    autoAlpha: 0,
  });
}

gsap.from(".mobile-card:nth-child(1)", {
  scrollTrigger: {
    trigger: ".mobile-card:nth-child(1)",
    scrub: true,
    end: "bottom center",
  },
  autoAlpha: 0,
});

gsap.from("#wordpress", {
  scrollTrigger: {
    trigger: "#wordpress",
    scrub: 1,
  },
  autoAlpha: 0,
  duration: 1,
});

//HAMBURGER

const burger = document.querySelector(".hamburger");
const menuMobile = document.querySelector(".menu-mobile");
const menuMobileLinks = document.querySelectorAll(".menu-mobile__item a");
burger.addEventListener("click", () => {
  burger.classList.toggle("hamburger--close");
  menuMobile.classList.toggle("menu-mobile--close");
});
for (menuMobileLink of menuMobileLinks) {
  menuMobileLink.addEventListener("click", () => {
    burger.classList.toggle("hamburger--close");
    menuMobile.classList.toggle("menu-mobile--close");
  });
}

//SCROLL NAV DESKTOP

let nav = document.querySelector("nav");
window.addEventListener("scroll", (e) => {
  if (scrollY > 150) {
    nav.classList.add("nav--scroll");
  } else if (scrollY <= 150 || nav.classList.contains("nav--scroll")) {
    nav.classList.remove("nav--scroll");
  }
});

//ACCORDEON CLIENTS

const accordeons = document.querySelectorAll(".accordeon");
function openAccordeon(accordeon) {
  let quote = accordeon.querySelector(".accordeon__quote");
  accordeon.classList.add("accordeon--active");
  quote.style.maxHeight = quote.scrollHeight + 25 + "px";
}
function closeAccordeon(accordeon) {
  let quote = accordeon.querySelector(".accordeon__quote");
  accordeon.classList.remove("accordeon--active");
  quote.style.maxHeight = 0;
}
for (let accordeon of accordeons) {
  accordeon.addEventListener("click", () => {
    if (accordeon.classList.contains("accordeon--active")) {
      closeAccordeon(accordeon);
    } else {
      for (let accordeon of accordeons) {
        closeAccordeon(accordeon);
      }
      openAccordeon(accordeon);
    }
  });
}
