const width = 28
const grid = document.querySelector(".grid")
const scoreDisplay = document.querySelector("#score")
const squares = []
let score = 0
let pacDots = 234

const layout = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1,
    1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
    1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
]

function createBoard(arr) {
    for (let i = 0; i < arr.length; i++) {
        //create a square
        const square = document.createElement("div")
        //add square to the grid to display in DOM
        grid.append(square)
        //push it to the squares array
        squares.push(square)

        if (layout[i] === 0) { squares[i].classList.add("pac-dot") }
        if (layout[i] === 1) { squares[i].classList.add("wall") }
        if (layout[i] === 2) { squares[i].classList.add("ghost-lair") }
        if (layout[i] === 3) { squares[i].classList.add("power-up") }
        if (layout[i] === 4) { squares[i].classList.add("empty") }
    }
}

createBoard(layout)

//Pacman starting position
let pacmanCurrentIndex = 490
squares[pacmanCurrentIndex].classList.add("pacman")

function control(e) {
    squares[pacmanCurrentIndex].classList.remove("pacman")
    switch (e.key) {
        case "ArrowLeft":
            if (pacmanCurrentIndex % width !== 0 &&
                !squares[pacmanCurrentIndex - 1].classList.contains("wall")) {
                pacmanCurrentIndex--
            }
            if (pacmanCurrentIndex === 364) {
                pacmanCurrentIndex = 391
            }
            break
        case "ArrowUp":
            if (pacmanCurrentIndex - width > 0 &&
                !squares[pacmanCurrentIndex - width].classList.contains("wall")) {
                pacmanCurrentIndex -= width
            }
            break
        case "ArrowRight":
            if (pacmanCurrentIndex % width < width - 1 &&
                !squares[pacmanCurrentIndex + 1].classList.contains("wall")) {
                pacmanCurrentIndex++
            }
            if (pacmanCurrentIndex === 391) {
                pacmanCurrentIndex = 364
            }
            break
        case "ArrowDown":
            if (pacmanCurrentIndex + width < width * width &&
                !squares[pacmanCurrentIndex + width].classList.contains("wall") &&
                !squares[pacmanCurrentIndex + width].classList.contains("ghost-lair")) {
                pacmanCurrentIndex += width
            }
            break
        default:
            break
    }
    squares[pacmanCurrentIndex].classList.add("pacman")

    if (!pacDots) {
        checkForWin()
    }
    pacDotEaten()
    powerUpEaten()
    //display score
    scoreDisplay.textContent = score
}
document.addEventListener("keyup", control)

function pacDotEaten() {
    if (pacDots > 0 && squares[pacmanCurrentIndex].classList.contains("pac-dot")) {
        score++
        pacDots--
        squares[pacmanCurrentIndex].classList.remove("pac-dot")
    }
}

//Create Ghosts 
class Ghost {
    constructor(className, startIndex, speed) {
        this.className = className
        this.startIndex = startIndex
        this.speed = speed
        this.currentIndex = startIndex
        this.isScared = false
        this.timerId = NaN
    }
}

const ghosts = [
    new Ghost('blinky', 348, 250),
    new Ghost('pinky', 376, 400),
    new Ghost('inky', 351, 300),
    new Ghost('clyde', 379, 500)
]

//Place ghost onto the grid
ghosts.forEach(ghost => {
    squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
})

function powerUpEaten() {
    //if square pacman is in contains a power up 
    if (squares[pacmanCurrentIndex].classList.contains("power-up")) {
        //remove class of power up from square
        squares[pacmanCurrentIndex].classList.remove("power-up")
        //add 10 to score
        score += 10
        //change ghost to isScared
        ghosts.forEach(ghost => ghost.isScared = true)
        //unscare ghosts after 10 seconds
        const ghostTimer = setTimeout(() => {
            ghosts.forEach(ghost => ghost.isScared = false)
        }, 10000)
    }
}


//move ghosts
ghosts.forEach(ghost => moveGhost(ghost))

function moveGhost(ghost) {
    const directions = [-1, -width, +1, +width]
    let direction = directions[Math.floor(Math.random() * directions.length)]

    ghost.timerId = setInterval(() => {
        //check if the next square does not contain a ghost or a wall
        if (
            !squares[ghost.currentIndex + direction].classList.contains('wall') &&
            !squares[ghost.currentIndex + direction].classList.contains('ghost')
        ) {
            //remove ghost class
            squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost')
            //move ghost 1 square
            ghost.currentIndex += direction
            //add ghost class
            squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
        } else direction = directions[Math.floor(Math.random() * directions.length)]

        //if the ghost is currently scared add a class
        if (ghost.isScared) {
            squares[ghost.currentIndex].classList.add('scared-ghost')
        }

        //if pacman eats a scared ghost
        if (ghost.isScared && squares[ghost.currentIndex].classList.contains('pacman')) {
            squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost')
            ghost.currentIndex = ghost.startIndex
            score += 100
            squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
        }
    }, ghost.speed)
    checkForGameOver()
}

//check for win 
function checkForWin() {
    // console.log("you win")
}

//check for game over
function checkForGameOver() {
    //if the square pacman is in contains a ghost AND the square does NOT contain a scared ghost 
    if (
        squares[pacmanCurrentIndex].classList.contains('ghost') &&
        !squares[pacmanCurrentIndex].classList.contains('scared-ghost')
    ) {
        //for each ghost - we need to stop it moving
        ghosts.forEach(ghost => clearInterval(ghost.timerId))
        //remove eventlistener from our control function
        document.removeEventListener("keyup", control)
        //tell user the game is over

    }
}