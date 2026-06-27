const BACKEND_URL =
  "https://exam-worker.kiwi010467.workers.dev";

const form = document.getElementById("loginForm");
const statusBox = document.getElementById("statusBox");
const loginBtn = document.getElementById("loginBtn");

let isProcessing = false;

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  if (isProcessing) return;

  isProcessing = true;
  loginBtn.disabled = true;
  loginBtn.innerHTML = "MEMPROSES...";

  const pesertaId = document
    .getElementById("pesertaId")
    .value
    .trim()
    .toUpperCase();

  const password = document
    .getElementById("password")
    .value
    .trim();

  statusBox.innerHTML = "Memverifikasi login...";

  try {
    const response = await fetch(BACKEND_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        pesertaId,
        password
      })
    });

    const result = await response.json();

    if (result.success) {
      statusBox.innerHTML =
        "Login berhasil. Mengalihkan ke halaman ujian...";

      setTimeout(() => {
        window.location.replace(
          "https://sites.google.com/view/assessment-vhego/portal-2-ujian"
        );
      }, 1200);

    } else {
      statusBox.innerHTML =
        "ID Peserta atau Password salah.";

      loginBtn.disabled = false;
      loginBtn.innerHTML = "LOGIN UJIAN";
      isProcessing = false;
    }

  } catch (error) {
    statusBox.innerHTML =
      "Server sibuk. Coba lagi.";

    loginBtn.disabled = false;
    loginBtn.innerHTML = "LOGIN UJIAN";
    isProcessing = false;
  }
});
