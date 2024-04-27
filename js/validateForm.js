function validateForm() {
    var email = document.getElementById('email').value;
    var name = document.getElementById('name').value;
    var message = document.getElementById('message').value;
    var phone = document.getElementById('phone').value; 

    // Reset error messages for next submit
    document.getElementById('emailError').innerHTML = "";
    document.getElementById('nameError').innerHTML = "";
    document.getElementById('messageError').innerHTML = "";
    document.getElementById('phoneError').innerHTML = ""; 

    if (email === "") {
        document.getElementById('emailError').innerHTML = "Email box cannot be left blank";
        return false;
    }

    if (name === "") {
        document.getElementById('nameError').innerHTML = "Name box cannot be left blank";
        return false;
    }

    if (phone === "") { // Check if phone number field is empty
        document.getElementById('phoneError').innerHTML = "Phone number cannot be left blank";
        return false;
    }

    // Check if phone contains only digits
    for (var i = 0; i < phone.length; i++) {
        var digit = phone[i];
        if (digit < '0' || digit > '9') {
            document.getElementById('phoneError').innerHTML = "Phone number must contain only digits";
            return false;
        }
    }


    if (message === "") {
        document.getElementById('messageError').innerHTML = "Message box cannot be left blank";
        return false;
    }

    alert("Form submitted successfully! A member of our amazing team will contact you within 24 hours in relation to your request");

    return true;
}
    