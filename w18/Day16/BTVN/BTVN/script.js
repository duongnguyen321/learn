let wins = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];

let table = document.body.firstElementChild;
let allTr = table.children[1].children
let winner = document.querySelector("#winner")
let buttonReset = document.querySelector("#reset")

let count = 0;
let content = "";
let trackContentClick = [];

//Xoa data
function cleanRender() {
    for (let tr of allTr) {
        for (let td of tr.children) {
            td.textContent = "";
        }
    }
}

//Render
function render() {
    cleanRender();
    for (let obj of trackContentClick) {
        for (let tr of allTr) {
            for (let td of tr.children) {
                if (td.id === obj.id) {
                    td.textContent = obj.content
                }
            }
        }
    }
}

//Xu li click cua td
function handleClick() {
    count++;
    if (count % 2 === 1) {
        content = "X"
    } else {
        content = "O"
    }
    trackContentClick.push({content: content, id: this.id})

    //Xoa kha nang click lai td da click
    this.removeEventListener("click", handleClick)
    render()
    checkWinner()
    console.log(trackContentClick)
}

//Gan kha nang click cua td
function addHandleClick() {
    for (let tr of allTr) {
        for (let td of tr.children) {
            td.addEventListener("click", handleClick)
        }
    }
}
addHandleClick();

//Kiem tra winner
function checkWinner() {
    //Lay toan bo id trong trackContentClick
    let allIdX = [];
    let allIdO = [];
    for (let trackContent of trackContentClick) {
        if (trackContent.content === "X") {
            allIdX.push(parseInt(trackContent.id))
        } else {
            allIdO.push(parseInt(trackContent.id))
        }
    }
    allIdX.push("X");
    allIdO.push("O");
    checkWin(allIdX);
    checkWin(allIdO);
    console.log(allIdX, allIdO)
}

//Kiem tra match bo. array wins ko
function checkWin(arr) {
    for (let win of wins) {
        let matchNumbers = 0;
        for (let number of arr) {
            if (number === win[0] || number === win[1] || number === win[2]) {
                matchNumbers++
                if (matchNumbers === 3) {
                    removeHandleClick()
                    winner.textContent = arr[arr.length -1]
                }
            }
        }
    }
}

//Xoa het handleClick trong td
function removeHandleClick() {
    for (let tr of allTr) {
        for (let td of tr.children) {
            td.removeEventListener("click", handleClick)
        }
    }
}

//Button Reset game
buttonReset.addEventListener("click", function(){
    cleanRender();
    trackContentClick = [];
    winner.textContent = "";
    addHandleClick();
})






