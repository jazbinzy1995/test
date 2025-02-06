function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
            
        
    }
    emailjs.send("service_k932438","template_63ahqkg",parms).then(alert("Email Sent!! "))
}
function validateEmail() {
    var email = document.getElementById("email").value;
    var pattern = [a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$;
    if (!pattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
}