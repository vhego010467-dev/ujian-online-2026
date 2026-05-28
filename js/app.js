import pesertaDB from "../data/peserta-db.js";

const form = document.getElementById("loginForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const id = document.getElementById("idPeserta").value.trim();
  const password = document.getElementById("password").value.trim();

  if (
    pesertaDB[id] &&
    pesertaDB[id].password === password
  ) {
    alert("Login berhasil");

    // redirect tujuan ujian
    window.location.href =
      "https://google.com";
  } else {
    alert("ID atau password salah");
  }
});
