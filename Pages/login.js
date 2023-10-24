// JavaScript source code
var user = document.getElementById("user");
var pwd = document.getElementById("pwd");

var button = document.getElementsByClassName("continueButton")[0];
button.addEventListener("click", function () {
    if (validateForm() == true) {
        window.location.href = "checklistsTab.html";
    } else {
        //alert("Something went wrong");
    }
});

function validateForm() {
    var userValue = user.value;
    var pwdValue = pwd.value;
    let secret = "sophiasong";
    let secretsecret = "password123";

    if (userValue == null || userValue == "") {
        alert(pwdValue);
        return false;
    } else if (pwdValue.length < 6) {
        alert(userValue);
        return false;
    } else if ((userValue == secret) && (passValue == secretsecret)) {
        return userValue == secret && passValue == secretsecret
    }
};



