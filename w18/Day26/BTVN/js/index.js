import {checkEmail, checkPassword} from "./validate.js"

let buttonLogin = document.querySelector(".btn-login")
let inputEmail = document.querySelector("#InputEmail1")
let inputPassword = document.querySelector("#InputPassword1")
let emailHelp = document.querySelector("#emailHelp")
let passwordHelp = document.querySelector("#passwordHelp")

buttonLogin.addEventListener('click', function(e) {
    e.preventDefault();
    let email = inputEmail.value
    let password = inputPassword.value

    //Email
    if (checkEmail(email) === "blank") {
        emailHelp.textContent = "Email can't be blank"
        emailHelp.style.color = "red"
        inputEmail.classList.add("is-invalid")
    } else if (checkEmail(email) === "missing@") {
        emailHelp.textContent = "Your email is missing @"
        emailHelp.style.color = "red"
        inputEmail.classList.add("is-invalid")
    } else {
        emailHelp.textContent = "We'll never share your email with anyone else."
        emailHelp.style.color = "#6c757d"
        inputEmail.classList.remove("is-invalid")
    }

    //Password
    if (checkPassword(password) === "blank") {
        passwordHelp.textContent = "Password can't be blank"
        passwordHelp.style.color = "red"
        inputPassword.classList.add("is-invalid")
    } else if (checkPassword(password) === "length") {
        passwordHelp.textContent = "Your password should between 8-16 characters."
        passwordHelp.style.color = "red"
        inputPassword.classList.add("is-invalid")
    } else {
        passwordHelp.textContent = ""
        passwordHelp.style.color = "#6c757d"
        inputPassword.classList.remove("is-invalid")
    }
})


