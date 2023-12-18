// Fungsi untuk menampilkan popup login
function showLoginPopup() {
    var popup = document.getElementById('loginPopup');
    popup.style.display = 'block';
}

// Fungsi untuk menyembunyikan popup login
function hideLoginPopup() {
    var popup = document.getElementById('loginPopup');
    popup.style.display = 'none';
}

// Tambahkan event listener ke tombol "Login"
var loginButton = document.getElementById('loginButton');
loginButton.addEventListener('click', showLoginPopup);

// Tambahkan event listener ke tombol "Tutup"
var closePopupButton = document.getElementById('closePopup');
closePopupButton.addEventListener('click', hideLoginPopup);
