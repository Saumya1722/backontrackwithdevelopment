 var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      grabCursor: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    // skills js
     // Animate vertical bars
  document.querySelectorAll(".loadbar").forEach(bar => {
    const fill = bar.querySelector(".fill");
    const count = bar.querySelector(".count");
    const target = parseInt(bar.dataset.percentage);
    let current = 0;

    setTimeout(() => { fill.style.width = target + "%"; }, 100);

    let interval = setInterval(() => {
      if(current < target){
        current++;
        count.textContent = current + "%";
      } else {
        clearInterval(interval);
      }
    }, 20);
  });

  // Animate circular bars
  document.querySelectorAll(".circle").forEach(circle => {
    const progress = circle.querySelector(".progress");
    const percentageText = circle.querySelector(".percentage");
    const target = parseInt(circle.dataset.percentage);
    const radius = 35;
    const circumference = 2 * Math.PI * radius;
    let current = 0;

    progress.style.strokeDasharray = circumference;
    progress.style.strokeDashoffset = circumference;

    let interval = setInterval(() => {
      if(current < target){
        current++;
        const offset = circumference - (current / 100) * circumference;
        progress.style.strokeDashoffset = offset;
        percentageText.textContent = current + "%";
      } else {
        clearInterval(interval);
      }
    }, 20);
  }); 

// hamburger js
function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("show");
  document.querySelector(".hamburger").classList.toggle("active");
}

// Close menu when clicking a link
document.querySelectorAll("#nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("nav-links").classList.remove("show");
    document.querySelector(".hamburger").classList.remove("active");
  });
});

