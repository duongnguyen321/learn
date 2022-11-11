let person = document.querySelector('.person');
let form_login = document.querySelector('.form-login')
let close_form = document.querySelector('.close-form')
let body = document.firstElementChild

person.addEventListener('click', function() {
    form_login.classList.add('show')
})

close_form.addEventListener('click', function() {
    form_login.classList.remove('show')
})


