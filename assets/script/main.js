// ++++++++++++++++> HEADER SCROLL BLUR <++++++++++++++++
const header = document.querySelector('.header')

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled')
  } else {
    header.classList.remove('scrolled')
  }
})

// ++++++++++++++++> HUMBURGER MENU <++++++++++++++++
const navList = document.querySelector('.nav__menu')

// Show menu //
document.querySelector('#nav-toggle').onclick = () => {
  navList.classList.toggle('show-menu')
}

// Click Outside to Close //
const humburger = document.querySelector('#nav-toggle')

document.addEventListener('click', function (e) {
  if (!humburger.contains(e.target) && !navList.contains(e.target)) {
    navList.classList.remove('show-menu')
  }
})

// Click Menu List to Close //
const menuLinks = document.querySelectorAll('.nav__link')

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('show-menu')
  })
})

// ++++++++++++++++> SCROLL SECTION ACTIVE LINK <++++++++++++++++
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
  const w = window.innerWidth

  // ============================
  // THRESHOLD — Responsive Condition
  // Mobile  (< 1150px) : 800
  // Desktop (< 2048px) : 800
  // 2K+     (>= 2048px): 400
  // ============================
  const threshold = w >= 2048 ? 900 : w >= 1150 ? 500 : 100

  let closestSection = null
  let closestDistance = Infinity

  sections.forEach(section => {
    const rect = section.getBoundingClientRect()
    const distance = Math.abs(rect.top - threshold)

    if (rect.top <= threshold && rect.bottom >= threshold) {
      if (distance < closestDistance) {
        closestDistance = distance
        closestSection = section
      }
    }
  })

  sections.forEach(section => {
    const id = section.id
    const link = document.querySelector('.nav__menu a[href*=' + id + ']')
    if (!link) return

    if (section === closestSection) {
      link.classList.add('active-link')
    } else {
      link.classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll', scrollActive)

// ++++++++++++++++> CARD SWIPER <++++++++++++++++

// Ingredients Card Swiper
const ingSwiper = new Swiper('.ing__slider', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 16,
  centeredSlides: true,
  grabCursor: true,
  speed: 600,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  }
})

// Products Card Swiper
const productsSwiper = new Swiper('.products__slider', {
  effect: 'cards',
  grabCursor: true,
  rewind: true,
  speed: 600,
  cardsEffect: {
    perSlideOffset: 8,
    perSlideRotate: 2,
    rotate: true,
    slideShadows: true
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  on: {
    slideChange: function () {
      document.querySelector('.pagination').textContent = this.realIndex + 1 + ' / ' + this.slides.length
    },
    init: function () {
      document.querySelector('.pagination').textContent = '1 / ' + this.slides.length
    }
  }
})

// Testimonial Card Swiper
const testiSwiper = new Swiper('.testi__slider', {
  slidesPerView: 1,
  spaceBetween: 16,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.testi__slider .swiper-pagination',
    clickable: true
  }
})

/*=============== CURRENT YEAR OF THE FOOTER ===============*/
// Desktop
const textYear = document.getElementById('footer-year'),
  currentYear = new Date().getFullYear()

textYear.textContent = currentYear

// Mobile
const textYearMobile = document.getElementById('footer-year-mobile'),
  currentYearMobile = new Date().getFullYear()

textYearMobile.textContent = currentYearMobile

// ++++++++++++++++> SCROLL TOP BUTTON <++++++++++++++++
const scrollTopBtn = document.getElementById('scrollTop')
const footer = document.querySelector('.footer-mobile')

window.addEventListener('scroll', () => {
  const footerTop = footer.getBoundingClientRect().top

  if (footerTop <= window.innerHeight * 0.5) {
    scrollTopBtn.classList.add('show')
  } else {
    scrollTopBtn.classList.remove('show')
  }
})

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})

// ++++++++++++++++> SCROLL REVEAL <++++++++++++++++
const sr = ScrollReveal({
  origin: 'bottom',
  distance: '50px',
  duration: 800,
  delay: 100,
  easing: 'ease-in-out',
  reset: false
})

// Home
sr.reveal('.home__title', { delay: 200 })
sr.reveal('.home__description', { delay: 300 })
sr.reveal('.home__cta', { delay: 400 })
sr.reveal('.one', { delay: 500, origin: 'right' })
sr.reveal('.two', { delay: 500, origin: 'top' })

// About
sr.reveal('.about__badge', { delay: 100 })
sr.reveal('.about__title', { delay: 200 })
sr.reveal('.about__description', { delay: 300 })
sr.reveal('.about__btn', { delay: 400 })
sr.reveal('.about__card', { delay: 200, interval: 150 })

// Ingredients
sr.reveal('.ingredients__badge', { delay: 100 })
sr.reveal('.ingredients__title', { delay: 200 })
sr.reveal('.ingredients__description', { delay: 300 })
sr.reveal('.ingredients__btn', { delay: 400 })
sr.reveal('.ing__item', { delay: 200, interval: 100 })
sr.reveal('.ing__master', { delay: 300, origin: 'bottom' })

// Products
sr.reveal('.products__bedge', { delay: 100 })
sr.reveal('.products__title', { delay: 200 })
sr.reveal('.products__description', { delay: 300 })
sr.reveal('.products__btn--desktop', { delay: 400 })
sr.reveal('.products__btn--mobile', { delay: 400 })
sr.reveal('.products__card', { delay: 200, interval: 150 })

// Testimonial
sr.reveal('.testi__badge', { delay: 100 })
sr.reveal('.testi__title', { delay: 200 })
sr.reveal('.testi__description', { delay: 300 })
sr.reveal('.testi__desktop', { delay: 200, interval: 150 })

// Bridge
sr.reveal('.bridge__title', { delay: 200 })
sr.reveal('.bridge__description', { delay: 300 })
sr.reveal('.bridge__cta', { delay: 400 })

// Journal
sr.reveal('.journal__bedge', { delay: 100 })
sr.reveal('.journal__title', { delay: 200 })
sr.reveal('.journal__card', { delay: 200, interval: 150 })
sr.reveal('.journal__cta', { delay: 300 })

// Place Holder Page
sr.reveal(`.page__data`, {origin: 'top', delay: 400})
sr.reveal(`.page__img`, {origin: 'bottom', delay: 600})