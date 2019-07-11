function validate() {
    let uname = document.getElementById('first_name'),
        email = document.getElementById('email'),
        phone_number = document.getElementById('phone_number');

    if (allLetter(uname)) {
        if (ValidateEmail(email)) {
            if (ValidatePhone(phone_number)) {
                if (chooseCountry(selectedCountry)) {
                    if (chooseState(select_states)) {
                        if (chooseCity(select_city)) {
                            return true
                        }
                    }
                }
            }
        }
    }
    return false;
}

function allLetter(uname) {
    let letters = /^[A-Za-z]+$/;
    if (uname.value.match(letters)) {
        let closest = uname.closest("div");
        closest.classList.remove("error");
        uname.classList.remove("invalid");
        closest.classList.add("success");
        uname.classList.add("valid");
        return true;
    } else {
        let closest = uname.closest("div");
        closest.classList.add("error");
        uname.classList.add("invalid");
        // alert('The name should contain only letters');
        uname.focus();
        return false;
    }
}


function ValidateEmail(email) {
    let mailformat = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (email.value.match(mailformat)) {
        let closest = email.closest("div");
        closest.classList.remove("error");
        closest.classList.add("success");

        email.classList.remove("invalid");
        email.classList.add("valid");
        return true;
    } else {
        let closest = email.closest("div");
        closest.classList.add("error");
        email.classList.add("invalid");
        // alert("You have entered an invalid email address!");
        email.focus();
        return false;
    }
}

function ValidatePhone(phone_number) {
    let valNum = /^\d{11}$/;
    if (phone_number.value.match(valNum)) {
        let closest = phone_number.closest("div");
        closest.classList.remove("error");
        closest.classList.add("success");

        phone_number.classList.remove("invalid");
        phone_number.classList.add("valid");
        return true;
    } else {
        let closest = phone_number.closest("div");
        closest.classList.add("error");
        phone_number.classList.add("invalid");
        // alert("You have entered an invalid Phone number");
        phone_number.focus();
        return false;
    }
}

// // ======textarea=======
let textarea = document.getElementById("textareaID");
textarea.addEventListener("input", function () {
    let lng = this.value.length;
    let maxlength = textarea.getAttribute("maxlength");
    console.log(this.value.length);
    document.getElementById("charcount").innerHTML = lng + ' / 500 ';
    if (lng >= maxlength) {
        alert('You have reached the maximum length of characters')

        // let closest = textarea.closest("div");
        // closest.classList.add("active");

    }
});

let x = document.querySelector(".input-field label");
textarea.addEventListener("focus", function() {
    let lng = this.value.length;
    if (lng === 0){
        x.classList.add("active");
    }
});
textarea.addEventListener("blur", function() {
    let lng = this.value.length;
    if (lng === 0){
        x.classList.remove("active");
    } else {
        x.classList.add("active");
    }
});


let selectedCountry = document.getElementById("select_countries");
let select_states = document.getElementById("select_states");
let select_city = document.getElementById("select_city");

function chooseCountry(selectedCountry) {
    // selectedCountry = document.getElementById("select_countries").value;
    let closest = document.getElementById("select_countries").closest("div");
    // console.log(selectedCountry);
    if (document.getElementById("select_countries").value === "Default") {
        // alert('Select your selectedCountry from the list');
        closest.classList.add("error");
        return false;
    } else {
        document.getElementById("select_states").disabled = false;
        closest.classList.remove("error");
        closest.classList.add("success");
        return true;
    }

}

function chooseState(select_states) {
    // select_states = document.getElementById("select_states").value;
    // console.log(select_states);
    // let select_states = document.getElementById("select_states");
    let closest = document.getElementById("select_states").closest("div");
    if (document.getElementById("select_states").value === "Default") {
        // alert('Select your select_states from the list');
        closest.classList.add("error");
        return false;
    } else {
        document.getElementById("select_city").disabled = false;
        closest.classList.remove("error");
        closest.classList.add("success");
        return true;
    }
}

function chooseCity(select_city) {
    // select_city = document.getElementById("select_city").value;
    // console.log(select_city);
    let closest = document.getElementById("select_city").closest("div");
    if (document.getElementById("select_city").value === "Default") {
        // alert('Select your select_city from the list');
        closest.classList.add("error");
        return false;
    } else {
        document.getElementById("select_city").disabled = false;
        closest.classList.remove("error");
        closest.classList.add("success");
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
            el.classList.add("chip");
            // console.log(el);
            el.setAttribute("value", response.data[i].id);
            users_id.appendChild(el);

            let icon = document.createElement("i");
            let node = document.createTextNode("person");
            icon.appendChild(node);
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
    if (validate() && chooseCountry() && chooseState() && chooseCity()) {
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
                // el.className +="chip";
                el.classList.add("chip");
                el.textContent = response.data.name;
                users_id.appendChild(el);


            })
            .catch(function (error) {
                console.log(error);
            });
    }

});

