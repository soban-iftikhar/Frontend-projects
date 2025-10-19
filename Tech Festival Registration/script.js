document.addEventListener("DOMContentLoaded", () => {
  // Form elements
  const form = document.getElementById("registrationForm");
  const fullName = document.getElementById("fullName");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const department = document.getElementById("department");
  const eventTypes = document.getElementsByName("eventType");
  const comments = document.getElementById("comments");
  const charCount = document.getElementById("charCount");
  const submitBtn = document.getElementById("submitBtn");

  // Success overlay elements
  const successOverlay = document.getElementById("success");
  const successContent = successOverlay?.querySelector(".success-content");
  const successMessage = document.getElementById("successMessage");

  // Error helpers
  const showError = (input, message) => {
    const field = input.closest(".form-field");
    const error = field?.querySelector(".error-message");
    if (error) {
      error.textContent = message;
      error.classList.add("visible");
    }
    input.classList.add("input-error");
  };

  const clearError = (input) => {
    const field = input.closest(".form-field");
    const error = field?.querySelector(".error-message");
    if (error) {
      error.textContent = "";
      error.classList.remove("visible");
    }
    input.classList.remove("input-error");
  };

  // Validation
  const validateName = (val) => /^[A-Za-z\s]+$/.test(val.trim());
  const validateEmail = (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  const validatePhone = (val) => /^\d{11}$/.test(val);
  const allowedDomains = ["@gmail.com", "@comsats.edu.pk"];

  function checkFormValidity() {
    let valid = true;

    if (!validateName(fullName.value)) {
      showError(fullName, "Please enter a valid name (letters and spaces only).");
      valid = false;
    } else clearError(fullName);

    if (!validateEmail(email.value)) {
      showError(email, "Please enter a valid email address.");
      valid = false;
    } else if (!allowedDomains.some((d) => email.value.endsWith(d))) {
      showError(email, "Only @gmail.com or @comsats.edu.pk are allowed.");
      valid = false;
    } else clearError(email);

    if (!validatePhone(phone.value)) {
      showError(phone, "Phone number must be exactly 11 digits.");
      valid = false;
    } else clearError(phone);

    if (!department.value) {
      showError(department, "Please select a department.");
      valid = false;
    } else clearError(department);

    const eventError = document.getElementById("eventError");
    const eventChosen = [...eventTypes].some((r) => r.checked);
    if (!eventChosen) {
      eventError.textContent = "Please select an event type.";
      eventError.classList.add("visible");
      valid = false;
    } else {
      eventError.textContent = "";
      eventError.classList.remove("visible");
    }

    submitBtn.disabled = !valid;
    return valid;
  }

  // Real-time validation
  [fullName, email, phone, department, ...eventTypes].forEach((el) => {
    el.addEventListener("input", checkFormValidity);
    el.addEventListener("change", checkFormValidity);
  });

  // Character counter
  comments.addEventListener("input", () => {
    charCount.textContent = 100 - comments.value.length;
  });

  // Success popup logic (3s hold)
  const showSuccess = (message) => {
    successMessage.textContent = message;
    successOverlay.classList.add("active");

    // Wait 3 seconds before fading out
    setTimeout(() => {
      successOverlay.classList.remove("active");

      // Redirect after fade-out transition (0.3s)
      setTimeout(() => {
        window.location.href = "event.html";
      }, 300);
    }, 3000);
  };

  // Submit handler
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (checkFormValidity()) {
      const firstName = fullName.value.trim().split(" ")[0];
      showSuccess(`Thank you, ${firstName}! Your registration for TechFest 2025 has been successfully submitted.`);
    }
  });
});
