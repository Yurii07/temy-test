function validate() {

    let fld = document.getElementById('first_name');
    let letters = /^[A-Za-z]+$/;

    if (fld.value.length == 0) {
        let closest = fld.closest("div");
        closest.classList.add("error");
        return false;
    }
    if (!fld.value.match(letters)) {
        let closest = fld.closest("div");
        closest.classList.add("error");
        return false;
    }

    // ==========mail============
    let email = document.getElementById('email');
    let validateMail = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;

    if (email.value.length == 0) {
        let closest = email.closest("div");
        closest.classList.add("error");
        return false;
    }
    if (!email.value.match(validateMail)) {
        let closest = email.closest("div");
        closest.classList.add("error");
        alert("You have entered an invalid email address!");
        return false;
    }

    // ==========Phone============
    let phone_number = document.getElementById('phone_number');
    let validatePhone = /^\d{10}$/;

    if (!phone_number.value.match(validatePhone)) {
        let closest = phone_number.closest("div");
        closest.classList.add("error");
        alert("You have entered an invalid Phone number");

        return false
    }

    // ======textarea=======
    let textarea = document.getElementById("textareaID");
    textarea.addEventListener("input", function () {

        let maxlength = textarea.getAttribute("maxlength");
        let currentLength = textarea.value.length;

        if (currentLength >= maxlength) {
            alert("You have reached the maximum number of characters.");
        } else {
            console.log(maxlength - currentLength + " chars left");
        }
    });

    return true;
}


let form = document.getElementById('formID');
form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    if (validate()) {
        console.log('test');

    }

});
