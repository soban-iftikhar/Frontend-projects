document.addEventListener("DOMContentLoaded", () => {
  // Form and field elements
  const form = document.getElementById("registrationForm");
  const fullName = document.getElementById("fullName");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const department = document.getElementById("department");
  const eventTypes = document.getElementsByName("eventType");
  const comments = document.getElementById("comments");
  const charCount = document.getElementById("charCount");
  const submitBtn = document.getElementById("submitBtn");

  // Success elements
  const successModal = document.getElementById('successModal');
  const modalContent = successModal.querySelector('.modal-content');
  const successMessage = document.getElementById('successMessage');


  const showError = (inputElement, message) => {
    const container = inputElement.closest('.form-field');
    const errorElem = container ? container.querySelector('.error-message') : null;
    if (errorElem) {
      errorElem.textContent = message;
      errorElem.classList.add('visible');
    }
    inputElement.classList.add('input-error');
  };

  const clearError = (inputElement) => {
    const container = inputElement.closest('.form-field');
    const errorElem = container ? container.querySelector('.error-message') : null;
    if (errorElem) {
      errorElem.textContent = "";
      errorElem.classList.remove('visible');
    }
    inputElement.classList.remove('input-error');
  };


  // Validation functions
  const validateName = (name) => /^[A-Za-z\s]+$/.test(name.trim());
  const validateEmail = (emailVal) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal);
  const validatePhone = (num) => /^\d{11}$/.test(num);
  const allowedDomains = ["@gmail.com", "@comsats.edu.pk"];

  
  function checkFormValidity() {
    let isFormValid = true;

    // Validate Full Name
    if (fullName.value.trim() === '' || !validateName(fullName.value)) {
      showError(fullName, "Please enter a valid name (letters and spaces only).");
      isFormValid = false;
    } else {
      clearError(fullName);
    }

    // Validate Email
    if (!validateEmail(email.value)) {
      showError(email, "Please enter a valid email format (e.g., student@email.com).");
      isFormValid = false;
    } else if (!allowedDomains.some(domain => email.value.endsWith(domain))) {
        showError(email, "Only @gmail.com or @comsats.edu.pk domains are allowed.");
        isFormValid = false;
    } else {
      clearError(email);
    }

    // Validate Phone Number
    if (!validatePhone(phone.value)) {
      showError(phone, "Phone number must be exactly 11 digits.");
      isFormValid = false;
    } else {
      clearError(phone);
    }

    // Validate Department
    if (department.value === "") {
      showError(department, "Please select a department.");
      isFormValid = false;
    } else {
      clearError(department);
    }

    // Validate Event Type
    const eventSelected = [...eventTypes].some((radio) => radio.checked);
    const eventErrorEl = document.getElementById('eventError');
    if (!eventSelected) {
        eventErrorEl.textContent = "Please select an event type.";
        eventErrorEl.classList.add('visible');
        isFormValid = false;
    } else {
        eventErrorEl.textContent = "";
        eventErrorEl.classList.remove('visible');
    }

    // Enable or disable the submit button
    submitBtn.disabled = !isFormValid;
    return isFormValid;
  }

  // Add real-time validation listeners to all required fields
  [fullName, email, phone, department, ...eventTypes].forEach((element) => {
    element.addEventListener("input", checkFormValidity);
    element.addEventListener("change", checkFormValidity);
  });

  // Listener for the comments character counter
  comments.addEventListener("input", () => {
    const remaining = 100 - comments.value.length;
    charCount.textContent = remaining;
  });


    // Form submission handler
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (checkFormValidity()) {
      const name = fullName.value.trim().split(" ")[0];
      successMessage.textContent = `Thank you, ${name}! Your registration for TechFest 2025 has been successfully submitted.`;

      successModal.style.opacity = '1';
      successModal.style.pointerEvents = 'auto';
      modalContent.style.opacity = '1';
      modalContent.style.transform = 'scale(1)';


      setTimeout(() => {
        window.location.href = 'event.html';
        
      }, 3000);
    }
  });

});

