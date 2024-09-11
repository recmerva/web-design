document.addEventListener("DOMContentLoaded", function() {
    function handleSearch() {
        const cityInput = document.getElementById('cityInput').value.trim();
        if (cityInput) {
            // Preusmeravanje na stranicu sa prognozom za traženi grad
            window.location.href = `forecast.html?city=${encodeURIComponent(cityInput)}`;
        } else {
            alert("Molimo unesite naziv grada.");
        }
    }

    document.querySelector('.navbar-search button').addEventListener('click', handleSearch);

    document.getElementById('cityInput').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            handleSearch();
        }
    });

    console.log("Home stranica je učitana.");
});
