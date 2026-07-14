window.onload = function () {

    alert("Welcome to OAO!");

};

function validateForm() {

    let name = document.getElementById("name").value.trim();

    let email = document.getElementById("email").value.trim();

    let subject = document.getElementById("subject").value.trim();

    let message = document.getElementById("message").value.trim();

    if (name === "") {

        alert("Please enter your full name.");

        return false;

    }

    if (email === "") {

        alert("Please enter your email address.");

        return false;

    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        alert("Please enter a valid email address.");

        return false;

    }

    if (subject === "") {

        alert("Please enter the subject.");

        return false;

    }

    if (message === "") {

        alert("Please enter your message.");

        return false;

    }

    alert("Thank you! Your message has been sent successfully.");

    return false;

}