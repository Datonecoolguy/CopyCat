function showFormPage() {
  document.getElementById('landing').style.display = 'none';
  document.getElementById('formPage').classList.add('active');
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
  document.querySelectorAll('form').forEach(f => f.style.display = 'none');
  document.getElementById('thankYouMessage').style.display = 'block';
  console.log(`${type} form submitted.`);
}
