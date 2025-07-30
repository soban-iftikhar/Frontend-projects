document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form');
    const inputs = form.querySelectorAll('input');


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

    if (inputs.length > 0) {
        inputs.forEach(input => {
            input.addEventListener('input', () => {
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
    }

//accessing and validating users from local storage
    let users = [];
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
        users = JSON.parse(storedUsers);
    }

    const signupform = document.getElementById('signupform');
    if (signupform) {
        signupform.addEventListener('submit', function (event) {
            event.preventDefault();

            const fname = document.getElementById('fname').value.trim();
            const lname = document.getElementById('lname').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();

            if (fname && lname && email && password) {
                let emailExists = false;
                for (let i = 0; i < users.length; i++) {
                    if (users[i].email === email) {
                        emailExists = true;
                        break;
                    }
                }

                if (emailExists) {
                    alert("Email already registered!");
                    return;
                }

                users.push({ fname: fname, lname: lname, email: email, password: password });
                localStorage.setItem("users", JSON.stringify(users));
                alert("Signup successful! Please login.");
                window.location.href = "signInform.html";

            } else {
                alert("All fields are required!");
            }
        });
    }

    const signInform = document.getElementById('signInform');
    if (signInform) {
        signInform.addEventListener('submit', function (event) {
            event.preventDefault();

            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();

            let foundUser = null;
            for (let i = 0; i < users.length; i++) {
                if (users[i].email === email) {
                    foundUser = users[i];
                    break;
                }
            }

            if (foundUser && foundUser.password === password) {
                alert("Welcome back!");
                window.location.href = "dashboard.html";
            } else if (foundUser) {
                alert("Invalid password!");
            } else {
                alert("Invalid email!");
            }
        });
    }

   
    let currentEmail;
    let code;
    let found;

    const forgotpass = document.querySelector('.forgot-password');
    if (forgotpass) {
        forgotpass.addEventListener('click', (event) => {
            event.preventDefault();
            let emailValue = document.getElementById('email').value.trim();
            found = false;

            for (let i = 0; i < users.length; i++) {
                if (users[i].email === emailValue) {
                    currentEmail = users[i].email;
                    found = true;
                    break;
                }
            }

            if (!found) {
                alert("Couldn't find your email!");
                return;
            }

            code = Math.floor(1000 + Math.random() * 9000);
            alert(code + " is your reset code. Please enter it in the popup to change your password.");
            const forgotPopup = document.getElementById('forgotPopup');
            const resetCode = document.getElementById('resetCode');
            const verifyCode = document.getElementById('verifyCode');

            forgotPopup.style.display = 'block';

            verifyCode.addEventListener('click', (event) => {
                event.preventDefault();
                const userInput = resetCode.value.trim();
                if (userInput === code.toString()) {
                    localStorage.setItem("resetEmail", currentEmail);
                    alert("Code verified! You can now reset your password.");
                    forgotPopup.style.display = 'none';
                    window.location.href = "forgotpassword.html";
                } else {
                    alert("Invalid code. Please try again.");
                    resetCode.value = '';
                }
            });
        });
    }

 
    const forgotpassword = document.getElementById('forgotpassword');
    if (forgotpassword) {
        forgotpassword.addEventListener('submit', function (event) {
            event.preventDefault();

            const newpass = document.getElementById('new-password').value.trim();
            const confirmPass = document.getElementById('confirm-password').value.trim();
            const email = localStorage.getItem("resetEmail");

            if (newpass === '' || confirmPass === '') {
                alert("Please fill in all fields!");
                return;
            }

            if (newpass !== confirmPass) {
                alert("Passwords do not match!");
                return;
            }

            if (newpass.length < 8) {
                alert("Password must be at least 8 characters long!");
                return;
            }

            for (let i = 0; i < users.length; i++) {
                if (users[i].email === email) {
                    users[i].password = newpass;
                    localStorage.setItem("users", JSON.stringify(users));
                    localStorage.removeItem("resetEmail");
                    alert("Password changed successfully!");
                    window.location.href = "signInform.html";
                    return;
                }
            }
        });
    }
});
