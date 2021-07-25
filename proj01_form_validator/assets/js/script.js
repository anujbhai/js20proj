const from = document.getElementById("form");
const input_username = document.getElementById("username");
const input_email = document.getElementById("email");
const input_password = document.getElementById("password");
const input_password2 = document.getElementById("password2");

function showError(input, message) {
    const formControl = input.parentElement; // immediate parent selection
    formControl.className = "form-control error"; // update class
    const small = formControl.querySelector("small");
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement; // immediate parent selection
    formControl.className = "form-control success"; // update class
}

function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function getFieldName(inputFieldName) {
    return inputFieldName.id.charAt(0).toUpperCase() + inputFieldName.id.slice(1);
}

// Check required functions
function checkRequired(inputArr) {
    inputArr.forEach(function (i) {
        if (i.value.trim() === "") {
            showError(i, " " + getFieldName(i) + " is required.");
        } else {
            showSuccess(i);
        }
    });
}

function checkLength() {
    
}

from.addEventListener("submit", function (e) {
    e.preventDefault();

    checkRequired([
        input_username,
        input_email,
        input_password,
        input_password2
    ]);

    checkLength(3, 15);
});

