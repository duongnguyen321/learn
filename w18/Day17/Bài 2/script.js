let headerList = document.querySelector(".header-list")
let burger = document.querySelector("#burger")
let login = document.querySelector(".login")

burger.addEventListener("click", function() {
    headerList.classList.toggle("hide")
    login.classList.toggle("hide")
})

