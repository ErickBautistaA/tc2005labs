function validatePassword() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (password === confirmPassword) {
        document.getElementById("message").innerText = "Passwords match!";
        document.getElementById("message").classList.remove("is-danger");
        document.getElementById("message").classList.add("is-success");

        setTimeout(function() {
            window.location.href = "/principal"; // Redireccion a pagina deseada
        }, 2000);
    } else {
        document.getElementById("message").innerText = "Passwords do not match!";
        document.getElementById("message").classList.remove("is-success");
        document.getElementById("message").classList.add("is-danger");
    }
  }