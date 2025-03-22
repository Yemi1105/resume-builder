document.getElementById("signin").addEventListener("submit", function(event) {
    event.preventDefault();
    let email = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Fill email and password");
    } else {
        alert("Login successful");
    }

    window.location.href = "homepage.html";
});

