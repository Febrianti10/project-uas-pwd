// Jalankan setelah DOM siap
document.addEventListener("DOMContentLoaded", function () {
  // ----- 1. Tahun otomatis di footer -----
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // ----- 2. Modal galeri (kemahasiswaan) -----
  const galleryImages = document.querySelectorAll(".gallery-grid img");
  const modalImg = document.getElementById("galleryModalImg");

  if (galleryImages.length > 0 && modalImg) {
    galleryImages.forEach((img) => {
      img.addEventListener("click", () => {
        const src = img.getAttribute("data-img") || img.getAttribute("src");
        modalImg.setAttribute("src", src);
      });
    });
  }
});
