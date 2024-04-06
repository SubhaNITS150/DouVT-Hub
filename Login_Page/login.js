const form = document.getElementById("loginForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("email");
  const password = document.getElementById("password");

  if (email.value === "") {
    email.parentElement.querySelector("small").innerText = "Email is required.";
    email.focus();
  } else if (password.value === "") {
    password.parentElement.querySelector("small").innerText = "Password is required.";
    password.focus();
  } else {
    // handle form submission here
    console.log("Email:", email.value);
    console.log("Password:", password.value);

    //reset the form fields
    email.value = "";
    password.value = "";

    // clear the error messages
    const emailError = email.parentElement.querySelector("small");
    const passwordError = password.parentElement.querySelector("small");
    emailError.innerText = "";
    passwordError.innerText = "";
  }
});

//Add an event listener to the email input field to clear the error message when the user types in the field
email.addEventListener("input", () => {
  const emailError = email.parentElement.querySelector("small");
  emailError.innerText = "";
});

//Add an event listener to the password input field to clear the error message when the user types in the field
password.addEventListener("input", () => {
  const passwordError = password.parentElement.querySelector("small");
  passwordError.innerText = "";
});