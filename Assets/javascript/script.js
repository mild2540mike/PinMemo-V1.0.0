

window.addEventListener("load", function () {
    const loader = document.querySelector(".preload");
    setTimeout(function () {
      loader.style.display = "none"; // Hide the loader after the specified time
    const bodyElement = document.body;
    bodyElement.classList.remove("preload");
      document.body.style.overflow = "auto"; // Restore scrollbars
    }, 2000)
  });