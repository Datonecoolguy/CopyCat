function showFormPage() {
  document.getElementById('landing').style.display = 'none';
  document.getElementById('formPage').classList.add('active');
  document.getElementById('thankYouMessage').style.display = 'none';
}

function showTextForm() {
  hideAllForms();
  document.getElementById('textForm').style.display = 'block';
}

function showImageForm() {
  hideAllForms();
  document.getElementById('imageForm').style.display = 'block';
}

function showVideoForm() {
  hideAllForms();
  document.getElementById('videoForm').style.display = 'block';
}

function hideAllForms() {
  document.getElementById('textForm').style.display = 'none';
  document.getElementById('imageForm').style.display = 'none';
  document.getElementById('videoForm').style.display = 'none';
}

function handleSubmit(event, type) {
  event.preventDefault();

  // Sembunyikan semua form & tombol
  hideAllForms();
  document.querySelector('.cta').style.display = 'none';

  // Tampilkan ucapan terima kasih
  document.getElementById('thankYouMessage').style.display = 'block';

  console.log(`${type} form submitted.`);

  // Balik ke landing page setelah 3 detik
  setTimeout(() => {
    document.getElementById('formPage').classList.remove('active');
    document.getElementById('landing').style.display = 'block';

    // Reset tombol form biar bisa dipakai lagi
    document.querySelector('.cta').style.display = 'block';
  }, 3000);
}
