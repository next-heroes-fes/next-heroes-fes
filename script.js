const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {
  navMenu.classList.toggle("active");
});


const newsDates = document.querySelectorAll(".news-date");
const today = new Date();

newsDates.forEach(function (item) {
  const newsDate = new Date(item.dataset.date);

  const diffTime = today - newsDate;
  const diffDays = diffTime / (1000 * 60 * 60 * 24);

  if (diffDays >= 0 && diffDays <= 7) {
    const badge = document.createElement("span");
    badge.classList.add("new-badge");
    badge.textContent = "NEW";
    item.appendChild(badge);
  }
});

const fadeElements = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", function () {
    fadeElements.forEach(function (element) {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add("show");
        }
    });
});

window.dispatchEvent(new Event("scroll"));

const newsItems = document.querySelectorAll(".news-item");

newsItems.forEach(function(item) {
  const button = item.querySelector(".news-toggle");

  if (button) {
    button.addEventListener("click", function() {
      item.classList.toggle("open");
      const plus = item.querySelector(".news-plus");

if(item.classList.contains("open")){
    plus.textContent = "－";
}else{
    plus.textContent = "＋";
}
    });
  }
});