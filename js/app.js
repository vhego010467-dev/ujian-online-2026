import pesertaDB from "../data/peserta-db.js";

console.log("APP.JS TERBACA");
console.log(pesertaDB);

const form =
  document.getElementById("loginForm");

const statusBox =
  document.getElementById("statusBox");

form.addEventListener("submit", function (e) {

  e.preventDefault();

  console.log("FORM DIKLIK");

  const id =
    document
      .getElementById("pesertaId")
      .value
      .trim()
      .toUpperCase();

  const password =
    document
      .getElementById("password")
      .value
      .trim();

  console.log(id, password);

  if (
    pesertaDB[id] &&
    pesertaDB[id].password === password
  ) {

    statusBox.innerHTML =
      "Login berhasil...";

    setTimeout(() => {

      window.location.replace(
        "https://google.com"
      );

    }, 1000);

  } else {

    statusBox.innerHTML =
      "ID atau password salah";

  }

});
