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

// STATE
axios.get('http://127.0.0.1:3000/states')
    .then(function (response) {
        // paste list to state
        let select_states = document.getElementById('select_states');

        response.data.forEach(function (index) {

            let states = [index.name];

            for (let i = 0; i < states.length; i++) {
                let el = document.createElement('option');
                el.textContent = states[i];
                el.value = states[i];
                select_states.appendChild(el);
            }
        });
        // console.log(response.data,'paste list to state');

        let ulState_id = document.createElement('ul');
        for (let i = 0; i < response.data.length; i++) {
            let el = document.createElement('li');
            el.textContent = response.data[i].id;
            el.value = response.data[i].id;
            ulState_id.appendChild(el);
        }

        // console.log(ulState_id,'ulState_id');
    })
    .catch(function (error) {
        console.log(error);
    });

// CITY
axios.get('http://127.0.0.1:3000/cities')
    .then(function (response) {
        //paste list to city
        let select_city = document.getElementById('select_city');

        response.data.forEach(function (index) {

            let cities = [index.name];

            for (let i = 0; i < cities.length; i++) {
                let el = document.createElement('option');
                el.textContent = cities[i];
                el.value = cities[i];
                select_city.appendChild(el);
            }
        });

        // console.log(response.data, 'paste list to city');

        let ulCity_id = document.createElement('ul');
        for (let i = 0; i < response.data.length; i++) {
            let el = document.createElement('li');
            el.textContent = response.data[i].state_id;
            el.value = response.data[i].state_id;
            ulCity_id.appendChild(el);
        }
        // console.log(ulCity_id, 'ulCity_id');
    })
    .catch(function (error) {
        console.log(error);
    });

// users
axios.get('http://127.0.0.1:3000/users')
    .then(function (response) {
        let users_id = document.getElementById('users');
        for (let i = 0; i < response.data.length; i++) {
            let el = document.createElement('li');
            el.textContent = response.data[i].name;
            el.value = response.data[i].name;
            users_id.appendChild(el);
        }
        // console.log(users_id, 'ulUsers_id');
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
