const BACKEND_URL =
  "https://exam-worker.vhego010467.workers.dev/admin";

let isLoggedIn = false;

async function adminLogin() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "adminujian" && password === "admin010467") {
    isLoggedIn = true;
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("panel").style.display = "block";
    listPeserta();
  } else {
    alert("Login admin gagal");
  }
}

async function listPeserta() {
  const resultBox = document.getElementById("resultBox");
  resultBox.textContent = "Loading...";

  try {
    const response = await fetch(BACKEND_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        action: "list"
      })
    });

    const result = await response.json();
    resultBox.textContent =
      JSON.stringify(result, null, 2);

  } catch (err) {
    resultBox.textContent = "Gagal ambil data";
  }
}

async function addPeserta() {
  const pesertaId = document.getElementById("newId").value.trim();
  const password = document.getElementById("newPass").value.trim();

  await sendAction("add", pesertaId, password);
}

async function updatePeserta() {
  const pesertaId = document.getElementById("editId").value.trim();
  const password = document.getElementById("editPass").value.trim();

  await sendAction("update", pesertaId, password);
}

async function deletePeserta() {
  const pesertaId = document.getElementById("deleteId").value.trim();

  await sendAction("delete", pesertaId, "");
}

async function sendAction(action, pesertaId, password) {
  try {
    const response = await fetch(BACKEND_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        action,
        pesertaId,
        password
      })
    });

    const result = await response.json();
    alert(JSON.stringify(result));
    listPeserta();

  } catch (err) {
    alert("Server error");
  }
}

window.adminLogin = adminLogin;
window.listPeserta = listPeserta;
window.addPeserta = addPeserta;
window.updatePeserta = updatePeserta;
window.deletePeserta = deletePeserta;
