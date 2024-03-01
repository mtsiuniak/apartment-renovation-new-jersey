const buttonopen = document.querySelector('.mobile-open-btn'); 
const menu = document.querySelector('.mobile-menu'); 
const buttonclose = document.querySelector('.button-close');
const onToggleMenuHandlerOP = () => menu.classList.toggle('is-open'); 
const onToggleMenuHandlerCL = () => menu.classList.remove('is-open');
buttonopen.addEventListener('click', onToggleMenuHandlerOP); 
buttonclose.addEventListener('click', onToggleMenuHandlerCL);

const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
        menu.classList.remove('is-open'); // Закриваємо меню при натисканні на панель
    });
});

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}

const links = document.querySelectorAll('.mobile-menu a');

links.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('is-open'); // Закриваємо меню при натисканні на будь-яке посилання
    });
});

// hero js

const loadText = document.querySelector('.loading-title')
const bg = document.querySelector('.hero-section')

let load = 0

let int = setInterval(blurring, 30)

function blurring() {
  load++

  if (load > 99) {
    clearInterval(int)
  }

  loadText.innerText = `${load}%`
  loadText.style.opacity = scale(load, 0, 100, 1, 0)
  bg.style.filter = `blur(${scale(load, 0, 60, 30, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

// ------ scrol on hero section to order ----

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

// scroll top button -----

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

scrollToTopBtn.addEventListener("click", () => {
    // Значення 'document.documentElement.scrollTop' вказує на прокрутку сторінки вгору
    // 'behavior: "smooth"' забезпечує плавну анімацію прокрутки
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
