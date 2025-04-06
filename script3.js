// Dummy patient data for search functionality
const patients = [
    { id: 'P001', name: 'Alice Johnson', age: 30, diagnosis: 'Hypertension' },
    { id: 'P002', name: 'Bob Smith', age: 45, diagnosis: 'Diabetes' },
    { id: 'P003', name: 'Charlie Brown', age: 60, diagnosis: 'Heart Disease' }
  ];
  
  // Dummy appointments data
  const appointments = [
    { patientId: 'P001', date: '2025-04-01', time: '10:00 AM' },
    { patientId: 'P002', date: '2025-04-02', time: '02:00 PM' },
  ];
  
  // Dummy notifications
  const notifications = [
    "New appointment for Alice Johnson.",
    "Reminder: Surgery for Bob Smith tomorrow.",
  ];
  
  // Show page content based on the sidebar menu
  function showPage(pageId) {
    const pages = document.querySelectorAll('.page-content');
    pages.forEach(page => {
      page.style.display = 'none';
    });
  
    const activePage = document.getElementById(pageId);
    if (activePage) {
      activePage.style.display = 'block';
    }
  
    // Update appointments and notifications when navigating
    if (pageId === 'appointments') {
      updateAppointments();
    } else if (pageId === 'notifications') {
      updateNotifications();
    }
  }
  
  // Search patient by ID and show details
  function searchPatient() {
    const searchId = document.getElementById('patient-search').value;
    const patientDetails = document.getElementById('patient-details');
    const patient = patients.find(p => p.id.toLowerCase() === searchId.toLowerCase());
  
    if (patient) {
      document.getElementById('patient-name').textContent = `Name: ${patient.name}`;
      document.getElementById('patient-age').textContent = `Age: ${patient.age}`;
      document.getElementById('patient-diagnosis').textContent = `Diagnosis: ${patient.diagnosis}`;
      patientDetails.style.display = 'block';
    } else {
      patientDetails.style.display = 'none';
    }
  }
  
  // Update appointment list
  function updateAppointments() {
    const appointmentsList = document.getElementById('appointments-list');
    appointmentsList.innerHTML = '';
    appointments.forEach(appointment => {
      const li = document.createElement('li');
      li.textContent = `Patient ID: ${appointment.patientId}, Date: ${appointment.date}, Time: ${appointment.time}`;
      appointmentsList.appendChild(li);
    });
  }
  
  // Update notifications
  function updateNotifications() {
    const notificationsList = document.getElementById('notifications-list');
    notificationsList.innerHTML = '';
    notifications.forEach(notification => {
      const p = document.createElement('p');
      p.textContent = notification;
      notificationsList.appendChild(p);
    });
  }
  
  // Handle surgery scheduling form
  document.getElementById('surgery-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const patientId = document.getElementById('surgery-patient-id').value;
    const surgeryDate = document.getElementById('surgery-date').value;
    
    // Assuming surgery is scheduled successfully
    document.getElementById('surgery-status').textContent = `Surgery scheduled for Patient ${patientId} on ${surgeryDate}.`;
  });
  
  // Logout functionality
  function logout() {
    alert('You have logged out!');
    // Redirect to login page (or clear session storage etc.)
    window.location.href = 'index.html';  // Replace with actual login page URL or redirection logic
  }
  