'use strict';



/**
 * PRELOAD
 * 
 * loading will be end after document is loaded
 */

const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});
// This script dynamically sets the Google Map URL for the specific Arman Hosiery location
document.addEventListener('DOMContentLoaded', function () {
  const googleMapLink = document.getElementById('google-map-link');
  
  // The specific Google Maps link for Arman Hosiery
  const dynamicLocation = 'https://www.google.com/maps/place/ARMAN+HOSIERY+CORRBEE/@28.7857281,77.2834236,17z/data=!3m1!4b1!4m6!3m5!1s0x390cff006445be63:0x35f4abb20e4e8a1d!8m2!3d28.7857234!4d77.2859985!16s%2Fg%2F11v_9w9kzb?entry=ttu&g_ep=EgoyMDI1MDEwMi4wIKXMDSoASAFQAw%3D%3D';
  
  googleMapLink.href = dynamicLocation;  // Update the href attribute with the specific Google Maps URL
});
// This script dynamically sets the YouTube channel URL
document.addEventListener('DOMContentLoaded', function () {
  const youtubeLink = document.getElementById('youtube-link');
  
  // The specific YouTube channel link for CORRBEE International
  const dynamicLocation = 'https://youtube.com/@corrbeeinternational?si=bgiGZosZVPPPbTuK';
  
  youtubeLink.href = dynamicLocation;  // Update the href attribute with the specific YouTube URL
});
// This script dynamically sets the social media and email URLs
document.addEventListener('DOMContentLoaded', function () {
  // Get all the link elements by their IDs
  const facebookLink = document.getElementById('facebook-link');
  const instagramLink = document.getElementById('instagram-link');
  const twitterLink = document.getElementById('twitter-link');
  const emailLink = document.getElementById('email-link');
  
  // Set the URLs dynamically
  facebookLink.href = 'https://www.facebook.com/YourPage';  // Replace with your actual Facebook URL
  instagramLink.href = 'https://www.instagram.com/corrbee_international';  // Replace with your actual Instagram URL
  twitterLink.href = 'https://twitter.com/YourProfile';  // Replace with your actual Twitter URL
  emailLink.href = 'mailto:youremail@example.com';  // Replace with your actual email address
});




/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * NAVBAR
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);



/**
 * HEADER & BACK TOP BTN
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

let lastScrollPos = 0;

const hideHeader = function () {
  const isScrollBottom = lastScrollPos < window.scrollY;
  if (isScrollBottom) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }

  lastScrollPos = window.scrollY;
}

window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
    hideHeader();
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



/**
 * HERO SLIDER
 */

const heroSlider = document.querySelector("[data-hero-slider]");
const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
const heroSliderNextBtn = document.querySelector("[data-next-btn]");

let currentSlidePos = 0;
let lastActiveSliderItem = heroSliderItems[0];

const updateSliderPos = function () {
  lastActiveSliderItem.classList.remove("active");
  heroSliderItems[currentSlidePos].classList.add("active");
  lastActiveSliderItem = heroSliderItems[currentSlidePos];
}

const slideNext = function () {
  if (currentSlidePos >= heroSliderItems.length - 1) {
    currentSlidePos = 0;
  } else {
    currentSlidePos++;
  }

  updateSliderPos();
}

heroSliderNextBtn.addEventListener("click", slideNext);

const slidePrev = function () {
  if (currentSlidePos <= 0) {
    currentSlidePos = heroSliderItems.length - 1;
  } else {
    currentSlidePos--;
  }

  updateSliderPos();
}

heroSliderPrevBtn.addEventListener("click", slidePrev);

/**
 * auto slide
 */

let autoSlideInterval;

const autoSlide = function () {
  autoSlideInterval = setInterval(function () {
    slideNext();
  }, 7000);
}

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseover", function () {
  clearInterval(autoSlideInterval);
});

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseout", autoSlide);

window.addEventListener("load", autoSlide);



/**
 * PARALLAX EFFECT
 */

const parallaxItems = document.querySelectorAll("[data-parallax-item]");

let x, y;

window.addEventListener("mousemove", function (event) {

  x = (event.clientX / window.innerWidth * 10) - 5;
  y = (event.clientY / window.innerHeight * 10) - 5;

  // reverse the number eg. 20 -> -20, -5 -> 5
  x = x - (x * 2);
  y = y - (y * 2);

  for (let i = 0, len = parallaxItems.length; i < len; i++) {
    x = x * Number(parallaxItems[i].dataset.parallaxSpeed);
    y = y * Number(parallaxItems[i].dataset.parallaxSpeed);
    parallaxItems[i].style.transform = `translate3d(${x}px, ${y}px, 0px)`;
  }

});