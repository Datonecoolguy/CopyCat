// Fungsi untuk menampilkan halaman formulir
function showFormPage() {
  document.getElementById('landing').style.display = 'none';
  document.getElementById('formPage').classList.add('active');
}

// Fungsi untuk menangani pengiriman formulir
function handleSubmit(event) {
  event.preventDefault();
  document.querySelector('form').style.display = 'none';
  document.getElementById('thankYouMessage').style.display = 'block';

  // Simpan data formulir ke localStorage
  const formData = {
    title: document.getElementById('title').value,
    description: document.getElementById('desc').value,
    author: document.getElementById('author').value,
    file: document.getElementById('file').files[0].name
  };

  localStorage.setItem('formData', JSON.stringify(formData));

  // Tampilkan opsi setelah 3 detik
  setTimeout(() => {
    document.getElementById('thankYouMessage').style.display = 'none';
    document.getElementById('optionPage').classList.add('active');
  }, 3000); // Setelah 3 detik
}

// Fungsi untuk menyimpan pilihan jenis karya ke localStorage
function saveOption(option) {
  const formData = JSON.parse(localStorage.getItem('formData')) || {};
  formData.option = option;
  
  // Simpan pilihan dan data formulir ke localStorage
  localStorage.setItem('formData', JSON.stringify(formData));

  // Kembali ke halaman utama setelah 3 detik
  setTimeout(() => {
    window.location.reload();
  }, 3000);
}