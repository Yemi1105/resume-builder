document.getElementById("signup").addEventListener("submit", function(event) {
    event.preventDefault();

    let fullname = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("password2").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return; 
    }

    let userData = {
        fullname: fullname,
        email: email,
        password: password 
    };

    console.log("User signed up:", userData);

    //window.location.href = "login.html";
    window.location.href = "homepage.html";
});
