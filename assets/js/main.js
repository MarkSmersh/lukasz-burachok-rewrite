let isMenuOpen = false;

document.addEventListener("DOMContentLoaded", () => {
  setName();
  setCopyright();

  setInterval(() => setCurrentTime(), 1000);

  document.getElementById("menu").addEventListener("click", () => {
    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  const forms = document.getElementsByTagName("form");

  for (let i = 0; i < forms.length; i++) {
    forms[i].addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Dziękujemy za kontakt! Skontaktujemy się jak najszybciej.");
      window.location.reload();
    });
  }
});

function setCurrentTime() {
  document.getElementById("timer").textContent =
    new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();
}

function setName() {
  document.getElementById("name").textContent = "Łukasz Grzegosz Zduniak";
}

function setCopyright() {
  document.getElementById("copyright").textContent =
    "@" + new Date().getFullYear() + ". Wszelkie prawa są zastreżone";
}

function openMenu() {
  document.getElementById("menu").classList.add("active");
  document.getElementById("mobile-menu").style.display = "flex";
  isMenuOpen = true;
}

function closeMenu() {
  document.getElementById("menu").classList.remove("active");
  document.getElementById("mobile-menu").style.display = "none";
  isMenuOpen = false;
}
