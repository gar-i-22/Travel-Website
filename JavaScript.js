function validate(){
    var name1 = document.getElementById("name").value;
    var phone1 = document.getElementById("phone").value;
    var email1 = document.getElementById("email").value;
    var message1 = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    if (name1.length<5){
        text = "Please enter your full name.";
        error_message.innerHTML = text;
        return false;
    }
    if (isNaN(phone1) || phone1.length != 10){
        text = "Please enter valid phone number.";
        error_message.innerHTML = text;
        return false;
    }
    if (email1.indexOf("@")==-1 || email1.length<6){
        text = "Please enter valid email address";
        error_message.innerHTML = text;
        return false;
    }
    if (message1.length<10){
        text = "Please enter more than ten characters.";
        error_message.innerHTML = text;
        return false;
    }
}