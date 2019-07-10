function validate() {

    let fld = document.getElementById('first_name');
    let letters = /^[A-Za-z]+$/;

    if (fld.value.length === 0) {
        let closest = fld.closest("div");
        closest.classList.add("error");
        alert("Name should not be empty");
        return false;
    }
    if (!fld.value.match(letters)) {
        let closest = fld.closest("div");
        closest.classList.add("error");
        alert("The name should contain only letters");
        return false;
    }

    // ==========mail============
    let email = document.getElementById('email');
    let validateMail = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if (email.value.length === 0) {
        let closest = email.closest("div");
        closest.classList.add("error");
        alert("Email field should not be empty");
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
    let validatePhone = /^\d{11}$/;

    if (!phone_number.value.match(validatePhone)) {
        let closest = phone_number.closest("div");
        closest.classList.add("error");
        alert("You have entered an invalid Phone number");

        return false
    }

    // ======textarea=======
    // let textarea = document.getElementById("textareaID");
    // textarea.addEventListener("input", function () {
    //
    //     let maxlength = textarea.getAttribute("maxlength");
    //     let currentLength = textarea.value.length;
    //
    //     if (currentLength >= maxlength) {
    //         alert("You have reached the maximum number of characters.");
    //     } else {
    //         console.log(maxlength - currentLength + " chars left");
    //     }
    // });

    return true;
}

let textarea = document.getElementById("textareaID");
textarea.addEventListener("input", function () {
    let lng = this.value.length;
    let maxlength = textarea.getAttribute("maxlength");
    console.log(this.value.length);
    document.getElementById("charcount").innerHTML = lng + ' / 500 ';

    if (lng >= maxlength) {
        alert('You have reached the maximum length of characters')
    }
});


// COUNTRY
function region() {
    let selectedCountry = document.getElementById("select_countries");
    let country = document.getElementById("country");
    let selectedCountryVal = document.getElementById("select_countries").value;
    let closest = selectedCountry.closest("div");

    if (document.getElementById("select_countries").value === "Default") {

        alert('Select your selectedCountry from the list');
        closest.classList.add("error");

        return false;
    } else {
        document.getElementById("select_states").disabled = false;

        closest.classList.remove("error");
        return true;
    }
}

function region2() {
    let select_states = document.getElementById("select_states");
    let closest = select_states.closest("div");

    if (document.getElementById("select_states").value === "Default") {
        alert('Select your select_states from the list');
        closest.classList.add("error");
        return false;
    } else {
        closest.classList.remove("error");
        document.getElementById("select_city").disabled = false;
        return true;
    }
}

function region3() {
    let select_city = document.getElementById("select_city");
    let closest = select_city.closest("div");

    if (document.getElementById("select_city").value === "Default") {
        alert('Select your select_city from the list');
        closest.classList.add("error");
        return false;
    } else {
        document.getElementById("select_city").disabled = false;
        closest.classList.remove("error");
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


// SUBMIT
let form = document.getElementById('formID');
form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    if (validate() && region() && region2() && region3()) {
        console.log('post request');

        let first_name = document.getElementById('first_name').value,
            email = document.getElementById('email').value,
            phone_number = document.getElementById('phone_number').value,
            address = document.getElementById('address').value,
            about = document.getElementById('textareaID').value,
            select_countries = document.getElementById('select_countries').value,
            select_states = document.getElementById('select_states').value,
            select_city = document.getElementById('select_city').value;

        let postData = {
            name: first_name,
            email: email,
            phone_number: phone_number,
            address: address,
            about_me: about,
            country_id: select_countries,
            state_id: select_states,
            city_id: select_city,
        };

        axios.post('http://127.0.0.1:3000/users',
            JSON.stringify(postData),
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(function (response) {
                console.log(response);
                // location.reload();
                let users_id = document.getElementById('users');
                let el = document.createElement('li');
                el.textContent = response.data.name;
                users_id.appendChild(el);

            })
            .catch(function (error) {
                console.log(error);
            });
    }

});
