
const menuToggle= document.getElementById("menu-toggle");
const navBar= document.querySelector(".navigation-bar ul");

menuToggle.addEventListener("click", () => {
    navBar.classList.toggle("show");
});

// CONTACT FORM VALIDATION
const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const messageInput = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop form from refreshing

  let isValid = true;

  // Name validation
  if (nameInput.value.trim() === "") {
    alert("Please enter your name");
    isValid = false;
  }

  // Email validation
  if (!emailInput.value.includes("@")) {
    alert("Please enter a valid email");
    isValid = false;
  }

  // Password validation
  const password = passwordInput.value;
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSymbol = /[^a-zA-Z0-9]/.test(password);

  if (!(hasLetter && hasNumber && hasSymbol)) {
    alert("Password must contain letters, numbers, and symbols");
    isValid = false;
  }

  // Message validation
  if (messageInput.value.trim() === "") {
    alert("Please enter a message");
    isValid = false;
  }

  // If everything is valid
  if (isValid) {
    alert("Message sent successfully 🎉");
    form.reset();
  }
});
