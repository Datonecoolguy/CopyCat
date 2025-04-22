<script>
    // This function will be called when you click the "Daftarkan Karyamu" button
    function showFormPage() {
      document.getElementById('landing').style.display = 'none'; // Hides the landing page
      document.getElementById('formPage').classList.add('active'); // Shows the form page
    }

    // Functions to show the respective forms based on the choice
    function showTextForm() {
      hideAllForms(); // Hide all forms first
      document.getElementById('textForm').style.display = 'block'; // Show the text form
    }

    function showImageForm() {
      hideAllForms(); // Hide all forms first
      document.getElementById('imageForm').style.display = 'block'; // Show the image form
    }

    function showVideoForm() {
      hideAllForms(); // Hide all forms first
      document.getElementById('videoForm').style.display = 'block'; // Show the video form
    }

    // This function hides all the forms
    function hideAllForms() {
      document.getElementById('textForm').style.display = 'none';
      document.getElementById('imageForm').style.display = 'none';
      document.getElementById('videoForm').style.display = 'none';
    }

    // This function is called when a form is submitted
    function handleSubmit(event, type) {
      event.preventDefault(); // Prevents the page from reloading on form submission
      document.querySelectorAll('form').forEach(form => form.style.display = 'none'); // Hides all forms
      document.getElementById('thankYouMessage').style.display = 'block'; // Shows the thank-you message
      console.log(`Submitted ${type} form.`); // Logs which form was submitted
    }
</script>
