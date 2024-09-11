document.addEventListener("DOMContentLoaded", function() {
    const cityInput = document.getElementById('cityInput');

    function handleSearch() {
        const city = cityInput.value.trim();
        if (city) {
            // Preusmeravanje na stranicu sa prognozom za traženi grad
            window.location.href = `forecast.html?city=${encodeURIComponent(city)}`;
        } else {
            alert("Molimo unesite naziv grada.");
        }
    }

    // Dodavanje event listener-a na dugme za pretragu
    document.querySelector('.navbar-search button').addEventListener('click', handleSearch);

    // Dodavanje event listener-a za pretragu na Enter
    cityInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            handleSearch();
        }
    });


    const mobileMenuButton = document.getElementById('mobile-menu');
    const navbarMenu = document.querySelector('.navbar-menu');

    mobileMenuButton.addEventListener('click', function() {
        navbarMenu.classList.toggle('active');
    });
    
});
