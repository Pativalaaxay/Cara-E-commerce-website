const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


// validation rules
// each filds is mandotory
// lenght of greter than 5
// email must be validate
// number must be eqaul to 10
// password and confirm passsword same
function formValidation(event) {
    event.preventDefault()
    let fname = document.getElementById('fname')
    let email = document.getElementById('email')
    let number = document.getElementById('number')
    let password = document.getElementById('password')
    let passwordconfirmation = document.getElementById('password_confirmation')

    let fnameError = document.getElementById('fnameError')
    let emailError = document.getElementById('emailError')
    let numberError = document.getElementById('numberError')
    let passwordError = document.getElementById('passwordError')

    fnameError.innerHTML = ''

    let successMessage = document.getElementById('successMessage')

    let isValid = true

    let regexp = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/

    if (fname.value.trim() == "") {
        fnameError.innerHTML = "first name is required"
        isValid = false
    }
    else if (fname.value.length < 5) {
        fnameError.innerHTML = "first name length must be greater than 5"
        isValid = false
    }
    //    we will use regular expression

    if (!email.value.match(regexp)) {
        emailError.innerHTML = "this email is not valid"
        isValid = false
    }
    else if (email.value.trim() == "") {
        emailError.innerHTML = "email is requried"
        isValid = false
    }
    if (number.value.length != 10) {
        numberError.innerHTML = "number length must be 10"
        isValid = false
    }
    if (password.value != passwordconfirmation.value) {
        passwordError.innerHTML = "not math passsword"
        isValid = false
    }
    if (isValid) {
        successMessage.innerHTML = "form submited succesfully"
    }
}





document.getElementById("navbar-placeholder").innerHTML = `
<nav class="navbar">
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="contact.html">Contact</a></li>
    </ul>
</nav>
`;

    document.getElementById("footer-placeholder").innerHTML = `
<footer class="footer">
    <p>&copy; 2024 Your Website. All rights reserved.</p>
</footer>
`;

