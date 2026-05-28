```javascript id="v7u2lx"
import pesertaDB from "../data/peserta-db.js";

const form = document.getElementById("loginForm");

const statusBox =
  document.getElementById("statusBox");

form.addEventListener("submit", function (e) {

  e.preventDefault();

  const id = document
    .getElementById("pesertaId")
    .value
    .trim()
    .toUpperCase();

  const password = document
    .getElementById("password")
    .value
    .trim();

  if (
    pesertaDB[id] &&
    pesertaDB[id].password === password
  ) {

    statusBox.innerHTML =
      "Login berhasil. Mengalihkan ke halaman ujian...";

    // delay kecil anti spam / anti double click
    setTimeout(() => {

      window.location.replace(
        "https://sites.google.com/view/final-exam-v2025/HALAMAN-IOS?authuser=1"
      );

    }, 1200);

  } else {

    statusBox.innerHTML =
      "ID Peserta atau Password salah.";

  }

});
```
