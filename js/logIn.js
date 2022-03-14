document.getElementById('login-submit').addEventListener('click', function () {
    // console.log("button clicked");

    const emailField = document.getElementById('userEmail');
    const emailText = emailField.value;

    console.log(emailText);

    const passwordField = document.getElementById('userPassword');
    const passText = passwordField.value;
    console.log(passText);

    if (emailText == "mridulnath098@gmail.com" && passText == "153946") {
        window.location.href = "banking.html";
    }

})