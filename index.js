function setInterest(value, button) {
    document.getElementById('interest').value = value;

    document.querySelectorAll('.button-Container button').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const interest = document.getElementById('interest').value;

    console.log("Sending:", { name, email, interest, message });

    emailjs.send("service_0v661dq","template_hsb55zn", {
        from_name: name,
        reply_to: name,
        interest: interest,
        message: message
    })
    .then(response => {
        console.log("Email sent successfully", response);
        document.getElementById('contact-form').reset();
        document.querySelectorAll('.button-Container button').forEach(btn => btn.classList.remove('active'));
    })
    .catch(error => {
        console.error("Error sending email", error);
        alert("Failed to send email. Please check the console for details.");
    });
});



