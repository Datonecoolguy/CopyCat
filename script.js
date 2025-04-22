function showFormPage() {
  document.getElementById('landing').style.display = 'none'; // Hides landing page
  document.getElementById('formPage').classList.add('active'); // Shows form page
}

function handleSubmit(event) {
  event.preventDefault(); // Prevents the page from reloading on form submission
  
  // Hide all forms
  document.querySelector('form').style.display = 'none';
  
  // Show the thank-you message
  document.getElementById('thankYouMessage').style.display = 'block';

  // Save form data to localStorage
  localStorage.setItem('formData', JSON.stringify({
    title: document.getElementById('title').value,
    description: document.getElementById('desc').value,
    author: document.getElementById('author').value
  }));

  // Show option page after 3 seconds
  setTimeout(() => {
    document.getElementById('thankYouMessage').style.display = 'none';
    document.getElementById('optionPage').classList.add('active');
  }, 3000); // 3 seconds delay
}

function saveOption(option) {
  // Save the selected option to localStorage
  localStorage.setItem('option', option);

  // Return to landing page after 3 seconds
  setTimeout(() => {
    window.location.reload(); // Reload the page to reset to the landing page
  }, 3000);
}