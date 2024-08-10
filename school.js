//--------------------------------------- This is Our counter section

const counters = document.querySelectorAll(".counters .counter span");
const container = document.querySelector(".counters");

let activated = false;

window.addEventListener("scroll", () => {
    if(
        window.pageYOffset > container.offsetTop - window.innerHeight + 200
        && !activated
    ){
        counters.forEach(counter => {
            counter.innerText = 0;

            const updateCount = () => {
                const target = parseInt(counter.dataset.count);
                const count = parseInt(counter.innerText);

                if(count < target){
                    counter.innerText = Math.ceil(count + target / 200);
                    setTimeout(updateCount, 10);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
        activated = true;
    } else if(
        window.pageYOffset < container.offsetTop - window.innerHeight - 200
        || window.pageYOffset === 0
        && activated
    ){
        counters.forEach(counter => {
            counter.innerText = 0;
        });
        activated = false;
    }
});

//---------------------------------------- This is the Hexgonal Content changing Code

const galleryImages = document.querySelectorAll('.gallery img');

const quoteText = document.querySelector('.quote-text');
const arrow = document.querySelector('.arrow');

const quotes = [
  "Admissions open for 2024 at Vidya Niketan Academy! Enroll now for an early bird discount. Hurry, limited seats available!",
  "Vidya Niketan Academy has been elevating academic standards for the past 10 yrs, providing superior education to foster the growth and development of children.",
  "We believe in providing equal education and opportunities both boys and girls. Every child deserves the same priority for a bright future.",
  "At our academic school, we nurture every child with the care of a parent and the love of a mother.",
  "At our school, discipline and respect for teachers are essential. Students who don't comply face consequences.",
  "We, as teachers, empathize deeply with parents, recognizing their rights and sharing in their concerns for the well-being and success of their children.",
  "Childhood is the foundation of the future. Focus on nurturing your child and choose Vidya Niketan Academy for their education."
];
galleryImages.forEach((image, index) => {
  image.addEventListener('mouseenter', () => {
    quoteText.innerText = quotes[index];
    arrow.classList.add('shake');
  });

  image.addEventListener('mouseleave', () => {
    quoteText.innerText = "We believe in providing equal education and opportunities both boys and girls. Every child deserves the same priority for a bright future.";
    arrow.classList.remove('shake');
  });
});

//-------------------------------------------------- This is animation images slider section
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;
const slideCount = slides.length;
let direction = 1; // 1 for forward, -1 for backward
let slideInterval = setInterval(nextSlide, 15000); // Change slide every 15 seconds

function showSlide(index) {
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide() {
    currentIndex += direction;
    if (currentIndex >= slideCount) {
        currentIndex = 0; 
    } else if (currentIndex < 0) {
        currentIndex = slideCount - 1; 
    }

    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex -= 1;
    if (currentIndex < 0) {
        currentIndex = slideCount - 1;
    }
    showSlide(currentIndex);
}

function manualNextSlide() {
    clearInterval(slideInterval); 
    nextSlide();
    slideInterval = setInterval(nextSlide, 15000);
}

function manualPrevSlide() {
    clearInterval(slideInterval);
    prevSlide();
    slideInterval = setInterval(nextSlide, 15000); 
}

document.querySelector('.next').addEventListener('click', manualNextSlide);
document.querySelector('.prev').addEventListener('click', manualPrevSlide);

//-------------------------------------- This is Our Stcicky Fixed Navbar 

window.onscroll = function() {stickyNavbar()};

function stickyNavbar() {
    var secondNavbar = document.getElementById("secondNavbar");
    var sticky = secondNavbar.offsetTop;

    if (window.pageYOffset > sticky) {
        secondNavbar.classList.add("sticky");
    } else {
        secondNavbar.classList.remove("sticky");
    }
}

//--------------------------------------------- This will be Sidebar Working Functionality

document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById("sidebar");
    const menuIcon = document.querySelector(".menu-icon input"); // Corrected selector

    menuIcon.addEventListener('change', function() {
        if (this.checked) {
            sidebar.style.left = "0";
        } else {
            sidebar.style.left = "-200px";
        }
    });
});

window.addEventListener('scroll', function() {
    var navbar = document.getElementById('secondNavbar');
    if (window.scrollY > 0) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});


document.querySelector('.menu-icon input').addEventListener('click', function () {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
  });






//------------------------------------- This will be floating icons 

function toggleContactMenu() {
    const contactMenu = document.getElementById('contactMenu');
    if (contactMenu.style.display === 'none' || contactMenu.style.display === '') {
      contactMenu.style.display = 'block';
    } else {
      contactMenu.style.display = 'none';
    }
  }
  
  // this is changing icon sun to moon 


  function toggleDarkMode() {
    var sunIcon = document.getElementById('sunIcon');
    var body = document.body;
    var firstSection = document.querySelector('.first-section');
    var darkModeToggle = document.getElementById('darkModeToggle');

    // Check if dark mode is currently enabled
    if (body.classList.contains('dark-mode')) {
        // If dark mode is enabled, disable it
        sunIcon.classList.remove('fa-regular', 'fa-moon');
        sunIcon.classList.add('fa-solid', 'fa-sun');
        darkModeToggle.querySelector('.float-element').classList.remove('glow-moon');
        darkModeToggle.querySelector('.float-element').classList.add('glow-sun');
        body.classList.remove('dark-mode');
        firstSection.classList.remove('dark-mode');
        localStorage.setItem('dark-mode', 'disabled'); // Save preference
    } else {
        // If dark mode is not enabled, enable it
        sunIcon.classList.remove('fa-solid', 'fa-sun');
        sunIcon.classList.add('fa-regular', 'fa-moon');
        darkModeToggle.querySelector('.float-element').classList.remove('glow-sun');
        darkModeToggle.querySelector('.float-element').classList.add('glow-moon');
        body.classList.add('dark-mode');
        firstSection.classList.add('dark-mode');
        localStorage.setItem('dark-mode', 'enabled'); // Save preference
    }
}


//

document.addEventListener('DOMContentLoaded', function() {
    var darkModeStatus = localStorage.getItem('dark-mode');
    var body = document.body;
    var firstSection = document.querySelector('.first-section');
    var sunIcon = document.getElementById('sunIcon');
    var darkModeToggle = document.getElementById('darkModeToggle');

    if (darkModeStatus === 'enabled') {
        sunIcon.classList.remove('fa-solid', 'fa-sun');
        sunIcon.classList.add('fa-regular', 'fa-moon');
        darkModeToggle.querySelector('.float-element').classList.remove('glow-sun');
        darkModeToggle.querySelector('.float-element').classList.add('glow-moon');
        body.classList.add('dark-mode');
        firstSection.classList.add('dark-mode');
    } else {
        sunIcon.classList.remove('fa-regular', 'fa-moon');
        sunIcon.classList.add('fa-solid', 'fa-sun');
        darkModeToggle.querySelector('.float-element').classList.remove('glow-moon');
        darkModeToggle.querySelector('.float-element').classList.add('glow-sun');
        body.classList.remove('dark-mode');
        firstSection.classList.remove('dark-mode');
    }
});



//----------------------------------------- This will Be rotating PNG Background-image 

document.addEventListener("DOMContentLoaded", () => {
    const backgroundImage = document.querySelector(".background-image");
    backgroundImage.classList.add("rotate-animation");
  });

//------------------------------------------ This is Our Contact form Backend

  const form = document.querySelector("form");
   const fullName = document.getElementById("name");
   const email = document.getElementById("email");
   const phone = document.getElementById("phone");
   const subject = document.getElementById("subject");
   const mess = document.getElementById("message");

   function sendEmail()
{
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "karukhusyalritesh@gmail.com",
        Password : "D8854C0B98195A2979BED639D60C9978058D",
        To : 'karukhusyalritesh@gmail.com',
        From : "karukhusyalritesh@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK"){
            Swal.fire({
                title: "Success!",
                text: "Message Successfully Sent!",
                icon: "success"
              });
        }
      }
    );
  }

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    sendEmail();
})

//---------------------- This is Marker Position with respect to li a 
document.addEventListener('DOMContentLoaded', () => {
    const marker = document.getElementById('marker');
    const sidebar = document.getElementById('sidebar');
    const links = sidebar.querySelectorAll('li a');
  
    // Function to set marker position
    function setMarkerPosition(element) {
      const linkRect = element.getBoundingClientRect();
      const sidebarRect = sidebar.getBoundingClientRect();
      const offset = linkRect.left - sidebarRect.left;
      
      marker.style.width = `${element.offsetWidth}px`;
      marker.style.transform = `translateX(${offset}px)`;
    }
  
    // Initially set marker position to the first link
    setMarkerPosition(links[0]);
  
    // Event listener for hover effect
    sidebar.addEventListener('mouseover', (e) => {
      if (e.target.tagName === 'A') {
        setMarkerPosition(e.target);
      }
    });
  
    // Reset marker position when mouse leaves
    sidebar.addEventListener('mouseout', () => {
      setMarkerPosition(links[0]);
    });
  });

  //Smooth Page scroll
  document.querySelector('#target-element').scrollIntoView({
    behavior: 'smooth'
  });
  
  