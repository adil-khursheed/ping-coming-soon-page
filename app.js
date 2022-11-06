const errorMessage = document.getElementById("error-message");
const emailEl = document.querySelector('[name="email"]');


// Email Validation
function validateEmail() {
    let email = document.getElementById("user_email").value;

    if (email.length == 0) {
        errorMessage.innerHTML = 'Email address cannot be empty';
        emailEl.style.setProperty('--validationColor', 'hsl(354, 100%, 66%)');
        return false;
    }

    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,}$/)) {
        errorMessage.innerHTML = 'Please provide a valid email address';
        emailEl.style.setProperty('--validationColor', 'hsl(354, 100%, 66%)');
        return false;
    }

    errorMessage.innerHTML = '';
    emailEl.style.setProperty('--validationColor', 'hsla(223, 87%, 63%, 0.2)');

    return true;
}


// Form Validation
function validateForm() {
    if (!validateEmail()) {
        errorMessage.innerHTML = 'Email address cannot be empty';
        return false;
    }
}