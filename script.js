document.addEventListener("DOMContentLoaded", function () {

  /* 1. Toggle menu navigasi (hamburger) */
  var navToggle = document.getElementById("navToggle");
  var navMenu = document.getElementById("navMenu");

  navToggle.addEventListener("click", function () {
    var isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", isOpen);
  });

  // Menutup menu otomatis saat salah satu link navigasi diklik (khusus mobile)
  var navLinks = navMenu.querySelectorAll("a");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  /* 2. Tombol suka (like) pada kartu menu */
  var likeButtons = document.querySelectorAll(".like-btn");

  likeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var countEl = button.querySelector(".like-count");
      var heartEl = button.querySelector(".heart");
      var currentCount = parseInt(countEl.textContent, 10);

      if (button.classList.contains("liked")) {
        button.classList.remove("liked");
        heartEl.textContent = "♡";
        countEl.textContent = currentCount - 1;
      } else {
        button.classList.add("liked");
        heartEl.textContent = "♥";
        countEl.textContent = currentCount + 1;
      }
    });
  });

  /* 3. Validasi sederhana form kontak */
  var contactForm = document.getElementById("contactForm");
  var formFeedback = document.getElementById("formFeedback");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var nama = document.getElementById("nama").value.trim();
    var email = document.getElementById("email").value.trim();
    var pesan = document.getElementById("pesan").value.trim();
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nama === "" || email === "" || pesan === "") {
      formFeedback.textContent = "Mohon lengkapi semua kolom terlebih dahulu.";
      formFeedback.classList.remove("success");
      return;
    }

    if (!emailPattern.test(email)) {
      formFeedback.textContent = "Format email belum valid.";
      formFeedback.classList.remove("success");
      return;
    }

    // Simulasi pengiriman berhasil (halaman ini statis, belum terhubung ke server)
    formFeedback.textContent = "Terima kasih, " + nama + "! Pesan Anda berhasil terkirim.";
    formFeedback.classList.add("success");
    contactForm.reset();
  });

});
