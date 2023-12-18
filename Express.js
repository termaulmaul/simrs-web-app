// Import Express.js
const express = require('express');
const app = express();

// Rute untuk halaman Dashboard
app.get('/dashboard', (req, res) => {
    // Logika untuk mengambil data statistik dan informasi dari rumah sakit
    const kinerjaRumahSakit = {
        jumlahPasien: 100,
        penggunaanTempatTidur: 80,
        // informasi lainnya
    };
    res.render('dashboard', { data: kinerjaRumahSakit });
});

// Rute untuk halaman Statistik Pasien
app.get('/pasien', (req, res) => {
    // Logika untuk mengambil data statistik pasien
    const statistikPasien = {
        jumlahDirawat: 50,
        jumlahBaru: 10,
        jumlahSelesai: 40,
        // informasi lainnya
    };
    res.render('pasien', { data: statistikPasien });
});

// Rute untuk halaman Informasi Penting
app.get('/informasi-penting', (req, res) => {
    // Logika untuk mengambil informasi penting
    const informasiPenting = [
        'Pengumuman penting 1',
        'Berita terkini rumah sakit',
        // informasi lainnya
    ];
    res.render('informasi-penting', { data: informasiPenting });
});

// Menggunakan view engine, misalnya EJS
app.set('view engine', 'ejs');

// Jalankan server pada port tertentu
app.listen(3000, () => {
    console.log('Server berjalan di http://localhost:3000');
});
