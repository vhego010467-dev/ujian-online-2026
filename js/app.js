import pesertaDB from "../data/peserta-db.js";

const form = document.getElementById("loginForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const id = document.getElementById("pesertaId").value.trim();
  const password = document.getElementById("password").value.trim();

  if (
    pesertaDB[id] &&
    pesertaDB[id].password === password
  ) {
    alert("Login berhasil");

    // redirect tujuan ujian
    window.location.href =
      "https://sites.google.com/view/final-exam-v2025/HALAMAN-IOS?authuser=1";
  } else {
    alert("ID atau password salah");
  }
});
