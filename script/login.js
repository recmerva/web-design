// document.addEventListener("DOMContentLoaded", function() {
//     const form = document.getElementById('loginForm');
//     const usernameInput = document.getElementById('username');
//     const passwordInput = document.getElementById('password');
//     const rememberMeInput = document.getElementById('rememberMe');
//     const usernameError = document.getElementById('usernameError');
//     const passwordError = document.getElementById('passwordError');
//     const cityInput = document.getElementById('cityInput'); // Polje za pretragu grada

//     // Validacija forme za logovanje
//     form.addEventListener('submit', function(event) {
//         event.preventDefault();
//         let valid = true;

//         // Validacija korisničkog imena
//         if (usernameInput.value.trim() === "") {
//             showError(usernameInput, usernameError, "Korisničko ime je obavezno.");
//             valid = false;
//         } else {
//             clearError(usernameInput, usernameError);
//         }

//         // Validacija lozinke
//         if (passwordInput.value.trim() === "") {
//             showError(passwordInput, passwordError, "Lozinka je obavezna.");
//             valid = false;
//         } else {
//             clearError(passwordInput, passwordError);
//         }

//         if (valid) {
//             // Provera opcije "Zapamti me"
//             if (rememberMeInput.checked) {
//                 localStorage.setItem('rememberMe', 'true');
//                 localStorage.setItem('username', usernameInput.value);
//             } else {
//                 localStorage.removeItem('rememberMe');
//                 localStorage.removeItem('username');
//             }

//             // Preusmeravanje na success.html
//             window.location.href = '../pages/success.html';
//         }
//     });

//     // Prikazivanje greške
//     function showError(input, errorElement, message) {
//         errorElement.textContent = message;
//         errorElement.style.display = "block";
//     }

//     // Brisanje greške
//     function clearError(input, errorElement) {
//         errorElement.textContent = "";
//         errorElement.style.display = "none";
//     }

//     // Automatsko popunjavanje korisničkog imena ako je opcija "Zapamti me" odabrana
//     if (localStorage.getItem('rememberMe') === 'true') {
//         rememberMeInput.checked = true;
//         usernameInput.value = localStorage.getItem('username');
//     }

//     // Funkcionalnost za pretragu grada
//     function handleSearch() {
//         const city = cityInput.value.trim();
//         if (city) {
//             // Preusmeravanje na stranicu sa prognozom za traženi grad
//             window.location.href = `forecast.html?city=${encodeURIComponent(city)}`;
//         } else {
//             alert("Molimo unesite naziv grada.");
//         }
//     }

//     // Dodavanje event listener-a na dugme za pretragu
//     document.querySelector('.navbar-search button').addEventListener('click', handleSearch);

//     // Dodavanje event listener-a za pretragu na Enter
//     cityInput.addEventListener('keydown', function(event) {
//         if (event.key === 'Enter') {
//             handleSearch();
//         }
//     });
// });
