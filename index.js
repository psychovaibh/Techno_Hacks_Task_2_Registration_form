// -----------function for password matching-------------

function checkPasswords() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("conf_password").value;

    if (password === confirmPassword) {
        // Passwords match
        document.getElementById("password").setCustomValidity("");
        document.getElementById("conf_password").setCustomValidity("");
    } else {
        // Passwords do not match
        document.getElementById("password").setCustomValidity("Passwords do not match");
        document.getElementById("conf_password").setCustomValidity("Passwords do not match");
    }
}


// ---------alert on SubmitEvent-------------

document.getElementById("form").addEventListener("submit",function(event) {
    event.preventDefault();
    var password = document.getElementById("password").value;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;

    if (confirm("Are you sure!!")) {
        window.alert("Username: " + username + "\nEmail: " + email + "\nPassword: " + password);
    }
    else {
        return; 
    }
});
