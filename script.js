document.getElementById("carForm").addEventListener("submit", function(e) {
    e.preventDefault();

    document.getElementById("msg").textContent =
        "Server is down. Please try again later.";
});