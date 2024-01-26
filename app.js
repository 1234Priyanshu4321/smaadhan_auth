const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");
const signUpForm = document.querySelector(".sign-up-form");
const otpPopup = document.getElementById("otpPopup");
const otpSubmitButton = document.querySelector(".otp-submit");

inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});

toggle_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    main.classList.toggle("sign-up-mode");
  });
});

signUpForm.addEventListener("submit", function (event) {
  event.preventDefault();
  otpPopup.style.display = "block";
  main.classList.add("main-blur");
});

otpSubmitButton.addEventListener("click", function () {
  otpPopup.style.display = "none";
  main.classList.remove("main-blur");
});

function closeOtpPopup() {
  const otpPopup = document.getElementById("otpPopup");
  otpPopup.style.display = "none";
  main.classList.remove("main-blur");
}

const otpInputs = document.querySelectorAll(".otp-input");

otpInputs.forEach((input, index) => {
  input.addEventListener("input", (event) => {
    const currentInput = event.target;
    const maxLength = parseInt(currentInput.getAttribute("maxlength"));

    if (currentInput.value.length >= maxLength) {
      const nextInput = otpInputs[index + 1];
      if (nextInput) {
        nextInput.focus();
      }
    }
  });

  input.addEventListener("keydown", (event) => {
    const currentInput = event.target;
    const previousInput = otpInputs[index - 1];
    if (event.key === "Backspace" && currentInput.value === "" && previousInput) {
      previousInput.focus();
    }
  });
});
const submitOtpBtn = document.getElementById("submitOtpBtn");

submitOtpBtn.addEventListener("click", function (event) {
  event.preventDefault();
  handleOtpValidation();
});
// Function to open the OTP popup
function openOtpPopup() {
  const otpPopup = document.getElementById("otpPopup");
  otpPopup.style.display = "block";
  main.classList.add("main-blur");
}

// Function to close the OTP popup
function closeOtpPopup() {
  const otpPopup = document.getElementById("otpPopup");
  otpPopup.style.display = "none";
  main.classList.remove("main-blur");
}

// Call openOtpPopup() when needed, e.g., in the signUpForm submit event
signUpForm.addEventListener("submit", function (event) {
  event.preventDefault();
  openOtpPopup();
});

// Call closeOtpPopup() when needed, e.g., in the otpSubmitButton click event
otpSubmitButton.addEventListener("click", function () {
  closeOtpPopup();
});
