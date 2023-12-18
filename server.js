const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

// Menggunakan middleware untuk menyajikan file statis dari direktori 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Rute untuk tampilan dashboard
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'dashboard.html'));
});

// Rute untuk tampilan daftar pasien
app.get('/pasien', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'pasien.html'));
});

// Rute untuk tampilan jadwal dokter
app.get('/jadwal-dokter', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'jadwal-dokter.html'));
});

app.listen(port, () => {
    console.log(`Aplikasi berjalan di http://localhost:${port}`);
});
