document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Spreči automatsko slanje forme
        let isValid = true;

        // Provera imena i prezimena
        if (nameInput.value.trim() === "") {
            showError(nameInput, "First and last name are required");
            isValid = false;
        } else {
            clearError(nameInput);
        }

        // Provera email adrese
        if (!validateEmail(emailInput.value)) {
            showError(emailInput, "Please enter a valid email address.");
            isValid = false;
        } else {
            clearError(emailInput);
        }

        // Provera poruke
        if (messageInput.value.trim() === "") {
            showError(messageInput, "The message is required.");
            isValid = false;
        } else {
            clearError(messageInput);
        }

        if (isValid) {
            window.location.href = 'thankyoueng.html'; // Preusmeri na stranicu zahvalnosti
        }
    });

    function showError(input, message) {
        const errorSpan = input.nextElementSibling;
        errorSpan.textContent = message;
        errorSpan.style.display = 'block';
    }

    function clearError(input) {
        const errorSpan = input.nextElementSibling;
        errorSpan.style.display = 'none';
    }

    function validateEmail(email) {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }
});
