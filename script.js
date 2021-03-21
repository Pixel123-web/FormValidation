const username = document.getElementById("name");
const email = document.getElementById("email");
const emailVal = email.value;
var atPosition = emailVal.indexOf("@");
var dotPosition = emailVal.indexOf(".");
const passTemplate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s)/;
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const form = document.getElementById("form");
const errorMessage = document.getElementById("error");

form.addEventListener("submit", (e) => {
  let messages = [];
  if (username.value === "" || username.value == null) {
    messages.push("Username is required");
  }

  if (atPosition < 1 || dotPosition + 2 > emailVal.length) {
    messages.push("Enter a valid email.");
  }

  if (password.value.length < 8) {
    messages.push("Password must be at least 8 characters");
  }

  if (!password.value.match(passTemplate)) {
    messages.push(
      "Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character."
    );
  }

  if (password.value !== confirmPassword.value) {
    messages.push("Passwords do not match");
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorMessage.innerHTML = messages.join(",");
  }
});
