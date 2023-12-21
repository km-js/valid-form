var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName() {
    let name = document.getElementById('contact-name').value;
    if (name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-regular fa-circle-check"></i>'
    return true;
}

function validatePhone() {
    let phone = document.getElementById('phone-number').value;
    if (phone.length == 0) {
        phoneError.innerHTML = 'Phone Number is required';
        return false;
    }
    if (phone.length != 10) {
        phoneError.innerHTML = 'Phone Number should be 10 digits'
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'Only digits please'
        return false;
    }
    phoneError.innerHTML = '<i class="fa-regular fa-circle-check"></i>'
    return true;
}

function validateEmail() {
    let email = document.getElementById('email-address').value;
    if (email.length == 0) {
        emailError.innerHTML = 'Email is required'
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'Email Invalid'
        return false;
    }
    emailError.innerHTML = '<i class="fa-regular fa-circle-check"></i>'
    return true;
}

function validateMessage() {
    let message = document.getElementById('message').value;
    let required = 30;
    let left = required - message.length;

    if (left > 0) {
        messageError.innerHTML = left + 'more characters required'
        return false;
    }
    messageError.innerHTML = '<i class="fa-regular fa-circle-check"></i>'
    return true;
}

function validateForm() {
    console.log("submit clicked")
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout(function () { submitError.style.display = 'none' }, 3000)
        return false;
    }
}