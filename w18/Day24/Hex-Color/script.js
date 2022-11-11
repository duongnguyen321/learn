let button = document.querySelector('.change')
let color1 = document.querySelector('.color1')
let color2 = document.querySelector('.color2')
let colorToRight = document.querySelector('.color')
let container = document.querySelector('.container')

button.addEventListener('click', function() {
    let colorOne = makeHexColor()
    let colorTwo = makeHexColor()

    color1.textContent = colorOne
    color2.textContent = colorTwo
    
    color1.style.color = "#" + colorTwo
    color2.style.color = "#" + colorTwo
    colorToRight.style.color = "#" + colorTwo

    container.style.backgroundImage = `linear-gradient(to right, #${colorOne}, #${colorTwo})`
}) 

button.click()

function makeHexColor() {
    let color = ""
    for (let i = 0; i < 6; i++) {
        color += (Math.floor(Math.random() * 16)).toString(16)
    }
    return color
}




