const form = document.getElementById('loginForm');

  e.preventDefault();

  if (isSubmitting) return;

  isSubmitting = true;
  loginBtn.disabled = true;

  const pesertaId = sanitize(
    document.getElementById('pesertaId').value.trim()
  );

  const password = sanitize(
    document.getElementById('password').value.trim()
  );

  if (!pesertaId || !password) {
    statusBox.innerHTML = 'Data login wajib diisi';
    loginBtn.disabled = false;
    isSubmitting = false;
    return;
  }

  statusBox.innerHTML = 'Memproses login...';

  // Anti traffic spike
  await new Promise(resolve =>
    setTimeout(resolve, randomDelay())
  );

  try {

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        pesertaId,
        password,
        ts: Date.now()
      })
    });

    const result = await response.json();

    if (result.success) {

      statusBox.innerHTML = 'Login berhasil...';

      sessionStorage.setItem('ujianAuth', 'ok');

      setTimeout(() => {

        window.location.replace(
          'https://sites.google.com/view/final-exam-v2025/HALAMAN-IOS?authuser=1'
        );

      }, 1200);

    } else {

      statusBox.innerHTML = result.message || 'Login gagal';

      loginBtn.disabled = false;
      isSubmitting = false;

    }

  } catch (error) {

    statusBox.innerHTML = 'Server sibuk, silakan ulangi';

    loginBtn.disabled = false;
    isSubmitting = false;

  }

});
