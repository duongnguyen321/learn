let headerList = document.querySelector(".header-list")
let burger = document.querySelector("#burger")

burger.addEventListener("click", function() {
    headerList.classList.toggle("hide")
})

