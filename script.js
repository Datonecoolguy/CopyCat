function showFormPage() {
  document.getElementById('landing').style.display = 'none';
  document.getElementById('formPage').classList.add('active');
}

function handleSubmit(event) {
  event.preventDefault();
  document.querySelector('form').style.display = 'none';
  document.getElementById('thankYouMessage').style.display = 'block';

  // Simpan data ke localStorage
  localStorage.setItem('formData', JSON.stringify({
    title: document.getElementById('title').value,
    description: document.getElementById('desc').value,
    author: document.getElementById('author').value
  }));

  // Tampilkan opsi setelah 3 detik
  setTimeout(() => {
    document.getElementById('thankYouMessage').style.display = 'none';
    document.getElementById('optionPage').classList.add('active');
  }, 3000);
}

function saveOption(option) {
  // Simpan pilihan ke localStorage
  localStorage.setItem('option', option);

  // Kembali ke halaman utama setelah 3 detik
  setTimeout(() => {
    window.location.reload();
  }, 3000);
}