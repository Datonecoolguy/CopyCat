function showFormPage() {
  document.getElementById('landing').style.display = 'none';
  document.getElementById('formPage').classList.add('active');
}

function handleSubmit(event) {
  event.preventDefault();
  document.querySelector('form').style.display = 'none';
  document.getElementById('thankYouMessage').style.display = 'block';

  // Save data to localStorage
  localStorage.setItem('formData', JSON.stringify({
    title: document.getElementById('title').value,
    description: document.getElementById('desc').value,
    author: document.getElementById('author').value
  }));

  // Show options after 3 seconds
  setTimeout(() => {
    document.getElementById('thankYouMessage').style.display = 'none';
    document.getElementById('optionPage').classList.add('active');
  }, 3000); // After 3 seconds
}

function saveOption(option) {
  // Save selected option to localStorage
  localStorage.setItem('option', option);

  // Go back to the landing page after 3 seconds
  setTimeout(() => {
    window.location.reload();
  }, 3000);
}