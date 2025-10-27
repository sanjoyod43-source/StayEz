const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('show');
});

// ✅ Tutup menu mobile otomatis saat layar diperbesar
window.addEventListener('resize', () => {
  if (window.innerWidth > 900) {
    mobileMenu.classList.remove('show');
  }
});

const tanggalEl = document.getElementById('tanggal');
const now = new Date();

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const tanggalStr = now.toLocaleDateString('id-ID', options);

tanggalEl.textContent = tanggalStr;


function pesanKamar(namaKamar, harga) {
  const noWA = '6289677114804'; // ✅ Nomor kamu sudah diformat benar
  const pesan = `Saya ingin memesan kamar ${namaKamar} dengan harga total Rp ${harga} / malam.`;
  const url = `https://wa.me/${noWA}?text=${encodeURIComponent(pesan)}`;
  window.open(url, '_blank');
}


  const toggleBtn = document.getElementById('darkModeToggle');
  const body = document.body;

  // Periksa preferensi yang tersimpan
  if (localStorage.getItem('dark-mode') === 'true') {
    body.classList.add('dark-mode');
    toggleBtn.innerHTML = '<i class="bi bi-sun"></i>';
  }

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
      toggleBtn.innerHTML = '<i class="bi bi-sun"></i>';
      localStorage.setItem('dark-mode', 'true');
    } else {
      toggleBtn.innerHTML = '<i class="bi bi-moon"></i>';
      localStorage.setItem('dark-mode', 'false');
    }
  });

