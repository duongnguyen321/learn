let person = document.querySelector('.person');
let form_login = document.querySelector('.form-login')
let close_form = document.querySelector('.close-form')
let body = document.firstElementChild
let nav_burger = document.querySelector('.nav-burger')
let burger = document.querySelector('.burger')
let close_burger = document.querySelector('.close-burger-nav')
let sun = document.querySelector(".sun")
let Body = document.body

person.addEventListener('click', function() {
    form_login.classList.add('marginRight-0')
})

close_form.addEventListener('click', function() {
    form_login.classList.remove('marginRight-0')
})

burger.addEventListener('click', function() {
    nav_burger.classList.add('marginLeft-0')
})

close_burger.addEventListener('click', function() {
    nav_burger.classList.remove('marginLeft-0')
})
sun.addEventListener('click', function() {
    Body.classList.toggle('dark')
})

