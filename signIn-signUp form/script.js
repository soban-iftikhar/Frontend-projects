document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form');
    const inputs = form.querySelectorAll('input');
    const signInform = document.getElementById('signInform');


    function showError(input, message) {
        const formField = input.parentElement;
        formField.classList.add('error');

        let errorMessage = formField.querySelector('.error-message');
        if (!errorMessage) {
            errorMessage = document.createElement('p');
            errorMessage.className = 'error-message';
            input.insertAdjacentElement('afterend', errorMessage);
        }
        errorMessage.textContent = message;
    }

    function removeError(input) {
        const formField = input.parentElement;
        formField.classList.remove('error');
        const errorMessage = formField.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
    }

    function validateName(name) {
        const validName = /^[A-Za-z]+$/;
        return validName.test(name);
    }

    function validateEmail(email) {
        const validMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return validMail.test(String(email).toLowerCase());
    }

    function validatePassword(password) {
        return password.length >= 8;
    }

    function validateInput(input) {
        if (input.id === 'fname' || input.id === 'lname') {
            if (input.value.trim() === '') {
                showError(input, `${input.placeholder} cannot be empty`);
            }
            else if (!validateName(input.value.trim())) {
                showError(input, `${input.placeholder} should contain only letters`);
            }
            else {
                removeError(input);
            }
        }
        else if (input.id === 'email') {
            if (input.value.trim() === '') {
                showError(input, 'Email cannot be empty');
            }
            else if (input.value.includes(' ')) {
                showError(input, 'Email should not contain spaces');
            }
            else if (!validateEmail(input.value)) {
                showError(input, 'Looks like this is not a valid email');
            }
            else {
                removeError(input);
            }
        }
        else if (input.id === 'password') {
            if (input.value.trim() === '') {
                showError(input, 'Password cannot be empty');
            }
            else if (!validatePassword(input.value)) {
                showError(input, 'Password must be at least 8 characters');
            }
            else {
                removeError(input);
            }
        }
    }


    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            validateInput(input);
        });
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        let isValid = true;

        inputs.forEach(input => {
            validateInput(input);
            if (input.parentElement.classList.contains('error')) {
                isValid = false;
            }
        });

        if (isValid) {
            form.submit();
        }
    });

});
