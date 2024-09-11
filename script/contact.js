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
            showError(nameInput, "Ime i prezime su obavezni.");
            isValid = false;
        } else {
            clearError(nameInput);
        }

        // Provera email adrese
        if (!validateEmail(emailInput.value)) {
            showError(emailInput, "Unesite validnu email adresu.");
            isValid = false;
        } else {
            clearError(emailInput);
        }

        // Provera poruke
        if (messageInput.value.trim() === "") {
            showError(messageInput, "Poruka je obavezna.");
            isValid = false;
        } else {
            clearError(messageInput);
        }

        if (isValid) {
            window.location.href = 'thankyou.html'; // Preusmeri na stranicu zahvalnosti
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
