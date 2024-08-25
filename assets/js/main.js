/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  const navMenu = document.getElementById("nav-menu");

  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
    resetSkills(skillsContent[i])
  }
  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
    animateSkills(this.parentNode);
  }
}

function animateSkills(content) {
  const skillBars = content.querySelectorAll(".skills__percentage");

  skillBars.forEach((bar) => {
    const percentage = bar.getAttribute("data-percentage");
    bar.style.width = percentage; // Set the width based on the data attribute
  });
}

function resetSkills(content) {
  const skillBars = content.querySelectorAll(".skills__percentage");

  skillBars.forEach((bar) => {
    bar.style.width = "0"; // Reset the width to 0
  })
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

/*==================== QUALIFICATION TABS ====================*/
document.addEventListener('DOMContentLoaded',function(){
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");
    tab.classList.add("qualification__active");
    if (target.id === "work") {
      triggerWorkQualificationTransition();
    }
    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});
})

function triggerWorkQualificationTransition() {
  const firstRound = document.querySelector(".qualification__round--first");
  const firstLine = document.querySelector(".qualification_round--first");
  const firstContent = document.querySelector(".qualification__new");

  setTimeout(() => {
    firstRound.classList.add("qualification__visible");
    firstContent
      .querySelector(".qualification__title")
      .classList.add("qualification__visible");
    firstContent
      .querySelector(".qualification__subtitle")
      .classList.add("qualification__visible");
    firstContent
      .querySelector(".qualification__calender")
      .classList.add("qualification__visible");
  }, 300);

  setTimeout(() => {
    firstLine.classList.add("qualification__visible");
  }, 900);


    const secondRound = document.querySelector(".qualification__round--second");
    const secondLine = document.querySelector(".qualification_round--second");
    const secondContent = document.querySelector(".qualification__new2");

    setTimeout(() => {
      secondRound.classList.add("qualification__visible");
      secondContent
        .querySelector(".qualification__title")
        .classList.add("qualification__visible");
      secondContent
        .querySelector(".qualification__subtitle")
        .classList.add("qualification__visible");
      secondContent
        .querySelector(".qualification__calender")
        .classList.add("qualification__visible");
    }, 300);

    setTimeout(() => {
      secondLine.classList.add("qualification__visible");
    }, 900);
}

/*==================== SERVICES MODAL ====================*/
const modalVeiws = document.querySelectorAll('.services__model'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')
let modal = function(modalClick){
  modalVeiws[modalClick].classList.add('active-modal')
}
modalBtns.forEach((modalBtn,i) => {
  modalBtn.addEventListener('click', () => {
    modal(i)
  }) 
})
modalCloses.forEach((modalClose) => {
  modalClose.addEventListener('click',() => {
    modalVeiws.forEach((modalVeiw) => {
      modalVeiw.classList.remove('active-modal')
    })
  })
})
/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper('.portfolio__container', {
  cssMode: true,
  loop:true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  mousewheel: true,
  keyboard: true,
});
/*==================== Eduction ====================*/
let swiperEducation = new Swiper('.education__container', {
  loop:true,
  grabCursor:true,
  spaceBetween: 48,

  pagination: {
    el: ".swiper-pagination",
    clickable:true,
    dynamicBullets:true,
  },
  breakpoints:{
      568:{
        slidesPerView: 2,
      }
  },
  mousewheel: true,
  keyboard: true,
});
/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        // Find the corresponding navigation link
        const navLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
        
        // Null check to prevent errors
        if (navLink) {
            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                navLink.classList.add('active-link');
            } else {
                navLink.classList.remove('active-link');
            }
        }
    });
}

window.addEventListener("scroll", scrollActive);
/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
  const nav = document.getElementById('header')
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
/*==================== SHOW SCROLL UP ====================*/
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  if(this.scrollY >= 560 ) scrollUp.classList.add('show-scroll');else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)
/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-brightness'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon-eclipse' : 'uil-brightness'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon-eclipse' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
let currentProjectNumber = 1;
const maxProjectNumber = 5;
const projectNumberElement = document.getElementById("number");

function updateProjectNumber() {
  projectNumberElement.classList.add("fade");

  setTimeout(() => {
    if (currentProjectNumber <= maxProjectNumber) {
      projectNumberElement.textContent = currentProjectNumber;
      projectNumberElement.classList.remove("fade");
      currentProjectNumber++;
    }
  }, 500);
}

function startCounting() {
  const intervalId = setInterval(() => {
    if (currentProjectNumber <= maxProjectNumber) {
      updateProjectNumber();
    } else {
      clearInterval(intervalId);
    }
  }, 100);
}

// Set up the observer
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startCounting();
        observer.unobserve(entry.target); // Stop observing once animation starts
      }
    });
  },
  { threshold: 0.5 }
); // Trigger when 50% of the section is visible

// Observe the project section
observer.observe(document.getElementById("about"));


// hue adjuster 
const hueInput = document.getElementById("hue-input");

hueInput.addEventListener("input", function () {
  const hueValue = hueInput.value;
  document.documentElement.style.setProperty("--hue-color", hueValue);
});


/// for email
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the default form submission

  const form = e.target;
  const formData = new FormData(form);

  fetch("/send", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        form.style.display = "none"; // Hide the form
        document.getElementById("successMessage").style.display = "block"; // Show success message
      } else {
        alert("There was an error sending your message. Please try again.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("There was an error sending your message. Please try again.");
    });
});





document.addEventListener("DOMContentLoaded", function () {
  const firstRound = document.querySelectorAll(".qualification__round")[0];
  const firstLine = document.querySelectorAll(".qualification__line")[0];
  const firstContent = document.querySelector(".qualification__data");

  const secondRound = document.querySelector(".qualification__round--second");
  const secondLine = document.querySelector(".qualification__line--second");
  const secondContent = document.querySelectorAll(".qualification__data")[1];

   const thirdRound = document.querySelector(".qualification__round--third");
   const thirdLine = document.querySelector(".qualification__line--third");
   const thirdContent = document.querySelectorAll(".qualification__data")[2];

   const FourthRound = document.querySelector(".qualification__round--fourth");
   const FourthLine = document.querySelector(".qualification__line--fourth");
   const FourthContent = document.querySelectorAll(".qualification__data")[3];

  // First Qualification
  setTimeout(() => {
    firstRound.classList.add("qualification__visible");
    firstContent
      .querySelector(".qualification__title")
      .classList.add("qualification__visible");
    firstContent
      .querySelector(".qualification__subtitle")
      .classList.add("qualification__visible");
    firstContent
      .querySelector(".qualification__calender")
      .classList.add("qualification__visible");
  }, 300);

  setTimeout(() => {
    firstLine.classList.add("qualification__visible"); // Trigger the line height transition
  }, 900);

  // Second Qualification
  setTimeout(() => {
    secondRound.classList.add("qualification__visible");
    secondContent
      .querySelector(".qualification__title")
      .classList.add("qualification__visible");
    secondContent
      .querySelector(".qualification__subtitle")
      .classList.add("qualification__visible");
    secondContent
      .querySelector(".qualification__calender")
      .classList.add("qualification__visible");
  }, 1500);

  setTimeout(() => {
    secondLine.classList.add("qualification__visible"); // Trigger the second line height transition
  }, 2100);

  // Thrid Qualification
  setTimeout(() => {
    thirdRound.classList.add("qualification__visible");
    thirdContent
      .querySelector(".qualification__title")
      .classList.add("qualification__visible");
    thirdContent
      .querySelector(".qualification__subtitle")
      .classList.add("qualification__visible");
    thirdContent
      .querySelector(".qualification__calender")
      .classList.add("qualification__visible");
  }, 2700);

  setTimeout(() => {
    thirdLine.classList.add("qualification__visible");
  }, 3300);

  
    setTimeout(() => {
      FourthRound.classList.add("qualification__visible");
      FourthContent
        .querySelector(".qualification__title")
        .classList.add("qualification__visible");
      FourthContent
        .querySelector(".qualification__subtitle")
        .classList.add("qualification__visible");
      FourthContent
        .querySelector(".qualification__calender")
        .classList.add("qualification__visible");
    }, 2700);

    // setTimeout(() => {
    //   FourthLine.classList.add("qualification__visible");
    // }, 3300);
});

