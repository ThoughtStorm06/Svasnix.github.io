// Validate Patient Login
function validatePatientLogin() {
    const username = document.getElementById('patient-username').value;
    const password = document.getElementById('patient-password').value;
  
    // Check if fields are empty
    if (username === '' || password === '') {
      alert('Please fill in all fields');
      return false; // Prevent form submission
    }
  
    // If validation passes, redirect to patient dashboard (you can change this URL to your actual dashboard)
    alert('Patient login successful');
    window.location.href = 'patient-dashboard.html'; // Redirect to patient dashboard
    return false; // Prevent form from submitting for demo purposes
  }
  
  // Validate Doctor Login
  function validateDoctorLogin() {
    const doctorId = document.getElementById('doctor-id').value;
    const password = document.getElementById('doctor-password').value;
  
    // Check if fields are empty
    if (doctorId === '' || password === '') {
      alert('Please fill in all fields');
      return false; // Prevent form submission
    }
  
    // If validation passes, redirect to doctor dashboard (you can change this URL to your actual dashboard)
    alert('Doctor login successful');
    window.location.href = 'doctor-dashboard.html'; // Redirect to doctor dashboard
    return false; // Prevent form from submitting for demo purposes
  }
  