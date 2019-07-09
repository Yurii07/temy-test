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


// COUNTRY
function region() {
    selectedCountry = document.getElementById("select_countries").value;
    console.log(selectedCountry);
    if (document.getElementById("select_countries").value === "Default") {
        alert('Select your selectedCountry from the list');
        return false;
    } else {
        document.getElementById("select_states").disabled = false;
        return true;
    }
}

function region2 (select_states) {
    select_states = document.getElementById("select_states").value;
    console.log(select_states);
    if (document.getElementById("select_states").value === "Default") {
        alert('Select your select_states from the list');
        return false;
    } else {
        document.getElementById("select_city").disabled = false;
        return true;
    }
}

function region3 (select_city) {
    select_city = document.getElementById("select_city").value;
    console.log(select_city);
    if (document.getElementById("select_city").value === "Default") {
        alert('Select your select_city from the list');
        return false;
    } else {
        document.getElementById("select_city").disabled = false;
        return true;
    }
}


axios.get('http://127.0.0.1:3000/countries')
    .then(function (response) {
        //paste country to list
        let select_countries = document.getElementById('select_countries');

        response.data.forEach(function (index) {

            let countries = [index.name];

            for (let i = 0; i < countries.length; i++) {
                let el = document.createElement('option');
                el.textContent = countries[i];
                el.value = countries[i];
                select_countries.appendChild(el);
            }
        });
        // console.log(response.data[0].name, 'paste option to country');

        let ulCountry_id = document.createElement('ul');
        for (let i = 0; i < response.data.length; i++) {
            let el = document.createElement('li');
            el.textContent = response.data[i].id;
            el.value = response.data[i].id;
            ulCountry_id.appendChild(el);
        }
        // console.log(ulCountry_id,'ulCountry_id list');

    })
    .catch(function (error) {
        console.log(error);
    });

let form = document.getElementById('formID');
form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    if (validate()) {
        console.log('test');

    }

});
