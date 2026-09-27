const inputName = document.getElementById("inputName");
const inputEmail = document.getElementById("inputEmail");
const inputPhone = document.getElementById("inputPhone");
const submitBtn = document.getElementById("submitBtn");

const taskList = document.getElementById("taskList");
const taskError = document.getElementById("taskError");
const recordsSection = document.getElementById("recordsSection");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

function validateField(input, type) {
    let value = input.value.trim();
    let errorMsg = "";

    if (value === "") {
        errorMsg = "This field cannot be empty.";
    } else if (type === "name" && !nameRegex.test(value)) {
        errorMsg = "Name must contain only letters and spaces (no numbers).";
    } else if (type === "email" && !emailRegex.test(value)) {
        errorMsg = "Please enter a valid email format (e.g., name@example.com).";
    } else if (type === "phone" && (value.length < 10 || isNaN(value))) {
        errorMsg = "Phone number must be at least 10 digits and numbers only.";
    }

    return errorMsg;
}

function registerAll(e) {
    if (e) e.preventDefault();

    let nameError = validateField(inputName, "name");
    let emailError = validateField(inputEmail, "email");
    let phoneError = validateField(inputPhone, "phone");

    if (nameError) {
        taskError.textContent = "Name Error: " + nameError;
        return;
    }
    if (emailError) {
        taskError.textContent = "Email Error: " + emailError;
        return;
    }
    if (phoneError) {
        taskError.textContent = "Phone Error: " + phoneError;
        return;
    }

    taskError.textContent = "";

    // Crear el elemento en la lista
    let li = document.createElement("li");
    li.textContent = `Name: ${inputName.value.trim()} | Email: ${inputEmail.value.trim()} | Phone: ${inputPhone.value.trim()}`;
    taskList.appendChild(li);

    recordsSection.classList.remove("hidden");

    // Limpiar inputs
    inputName.value = "";
    inputEmail.value = "";
    inputPhone.value = "";
}

function setupRealTimeValidation() {
    inputName.addEventListener('input', () => {
        taskError.textContent = validateField(inputName, "name");
    });

    inputEmail.addEventListener('input', () => {
        taskError.textContent = validateField(inputEmail, "email");
    });

    inputPhone.addEventListener('input', () => {
        taskError.textContent = validateField(inputPhone, "phone");
    });
}

function init() {
    submitBtn.addEventListener('click', registerAll);
    setupRealTimeValidation();
}

window.onload = init;