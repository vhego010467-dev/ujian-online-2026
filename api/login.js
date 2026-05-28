import pesertaDB from '../data/peserta-db.js';

  return requests.length > 10;
}

export default async function handler(req, res) {

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method tidak diizinkan'
    });
  }

  const ip =
    req.headers['x-forwarded-for'] ||
    req.socket.remoteAddress ||
    'unknown';

  if (rateLimit(ip)) {

    return res.status(429).json({
      success: false,
      message: 'Terlalu banyak percobaan login'
    });
  }

  const {
    pesertaId,
    password
  } = req.body;

  // Delay kecil anti brute force
  await new Promise(resolve =>
    setTimeout(resolve, 300)
  );

  const user = pesertaDB[pesertaId];

  if (!user) {
    return res.status(401).json({
      success: false,
      message: 'ID peserta tidak ditemukan'
    });
  }

  if (user.password !== password) {
    return res.status(401).json({
      success: false,
      message: 'Password salah'
    });
  }

  return res.status(200).json({
    success: true
  });
}