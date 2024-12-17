const no_of_sides = 3
let currentTurn = true
const container = document.getElementById("container")
const currentTurnText = document.querySelector("#currentTurn")
let array = [["", "", ""], ["", "", ""], ["", "", ""]]

for (let i = 0; i < no_of_sides; i++){
    let row = document.createElement("div")
    row.classList.add("row")
    for (let j = 0; j < no_of_sides; j++){
        let newDiv = document.createElement("div")
        newDiv.setAttribute("id", `${i}${j}`)
        newDiv.classList.add("box")
        row.appendChild(newDiv)
    }
    container.appendChild(row)
}


const boxes = document.querySelectorAll(".box")
const resetButton = document.querySelector("#reset")

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerHTML === ""){
            var boxId = box.getAttribute("id")
            array[boxId[0]][boxId[1]] = currentTurn ? "X" : "O"
            box.innerHTML = currentTurn ? "X" : "O"
            if (!checkWinner()){
                currentTurn = !currentTurn
                whoseTurn(currentTurn)
                isBoardFull(array)
            }
        }
    })
})

resetButton.addEventListener("click", () => {
    reset()
})

function checkWinner(){
    return checkWinnerHorizontal() || checkWinnerVertical() || checkWinnerDiagional()
}

function checkWinnerVertical(){
    for (let i = 0; i < no_of_sides; i++){
        if (array[i].every(playerO)) {
            currentTurnText.innerHTML = "The winner is O !"
            console.log("The winner is O !")
            container.style.pointerEvents = "none"
            return true
        }
        if (array[i].every(playerX)) {
            currentTurnText.innerHTML = "The winner is X !"
            console.log("The winner is X !")
            container.style.pointerEvents = "none"
            return true
        }
    }
    return false
}

function checkWinnerHorizontal(){
    var newArray = [[], [], []]

    for (let i = 0; i < no_of_sides; i++){
        for (let j = 0; j < no_of_sides; j++){
            newArray[j].push(array[i][j])
        }
    }

    for (let i = 0; i < no_of_sides; i++){
        if (newArray[i].every(playerO)) {
            currentTurnText.innerHTML = "The winner is O !"
            console.log("The winner is O !")
            container.style.pointerEvents = "none"
            return true
        }
        if (newArray[i].every(playerX)) {
            currentTurnText.innerHTML = "The winner is X !"
            console.log("The winner is X !")
            container.style.pointerEvents = "none"
            return true
        }
    }
    return false
}

function checkWinnerDiagional(){
    var newArray = [[], []]

    for (let i = 0; i < no_of_sides; i++){
        newArray[0].push(array[i][i])
        newArray[1].push(array[i][2-i])
    }

    for (let i = 0; i < 2; i++){
        if (newArray[i].every(playerO)) {
            currentTurnText.innerHTML = "The winner is O !"
            console.log("The winner is O !")
            container.style.pointerEvents = "none"
            return true
        }
        if (newArray[i].every(playerX)) {
            currentTurnText.innerHTML = "The winner is X !"
            console.log("The winner is X !")
            container.style.pointerEvents = "none"
            return true
        }
    }
    return false
}

function playerO(input){
    return input == "O"
}

function playerX(input){
    return input == "X"
}

function isBoardFull(array){
    var array = array.flat(1)
    console.log(array)
    if (!array.includes("")) {
        container.style.pointerEvents = "none"
        currentTurnText.innerHTML = "It is a tie!"
    }
    return false
}

function reset(){
    array = [["", "", ""], ["", "", ""], ["", "", ""]]
    container.style.pointerEvents = "auto"
    currentTurnText.innerHTML = "Current Turn: X"
    boxes.forEach((box) => {
        box.innerHTML = ""
    })
}

function whoseTurn(currentTurn){
    if (currentTurn){
        currentTurnText.innerHTML = "Current Turn: X"
    } else {
        currentTurnText.innerHTML = "Current Turn: O"
    }
}

whoseTurn(currentTurn)