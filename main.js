const gameBoard = document.getElementById("container");
const small = document.getElementById("small");
const text = document.querySelector("span")
const medium = document.getElementById("medium");
const scoreContainer = document.getElementById("score");
const fieldsAmount = 56;
let allFields = [];
let bombFields = [];
let score = 0
const bomb = () => {
    gameBoard.innerHTML = "";
    createBoard();
    assignBombs();
    // assignNumber();
    small.style.display = "none";
    text.style.display = "none";
    scoreContainer.style.display = "block"
    let isClicked = []

    allFields.forEach((element, index) => {
        element.addEventListener("click", () => {
            if(isClicked.includes(index)) {
                return
            }
            if (bombFields.includes(index)) {
                alert('You clicked on bomb. Game over! Your score: ' + score);
                element.innerHTML = "Bomb";
                element.classList.toggle(".bomb")
                location.reload()
                
            }
            else if(bombFields.includes(index - 1) || bombFields.includes(index + 1)) {
                element.innerHTML = ("1")
                isClicked.push(index)
                score += 1
            }
            else if(bombFields.includes(index - 2) || bombFields.includes(index + 2) || bombFields.includes(index + 6) || bombFields.includes(index - 6)) {
                element.innerHTML = ("2")
                isClicked.push(index)
                score += 1

            }
            else if(bombFields.includes(index - 3) || bombFields.includes(index + 3)){
                element.innerHTML = ("3")
                isClicked.push(index)
                score += 1

            }
            else if(bombFields.includes(index + 8) || bombFields.includes(index - 8)) {
                element.innerHTML = ("1")
                isClicked.push(index)
                score += 1
            }
            else if(bombFields.includes(index + 7) || bombFields.includes(index - 7)) {
                element.innerHTML = ("1")
                isClicked.push(index)
                score += 1
            }
            else if(bombFields.includes(index + 9) || bombFields.includes(index - 9)) {
                element.innerHTML = ("1")
                isClicked.push(index)
                score += 1
            }
            else if(bombFields.includes(index + 10) || bombFields.includes(index - 10)) {
                element.innerHTML = ("2")
                isClicked.push(index)
                score += 1
            }
            else if(bombFields.includes(index + 15) || bombFields.includes(index - 15) || bombFields.includes(index + 16) || bombFields.includes(index - 16)) {
                element.innerHTML = ("2")
                isClicked.push(index)
                score += 1
            }
            else {
                element.innerHTML = ("4")
                isClicked.push(index)
                score += 1

            }
            checkScore();
        });
    });

};

const createBoard = () => {
    for (let i = 0; i < fieldsAmount; i++) {
        let newField = document.createElement('div');
        newField.classList.add("newFields");
        gameBoard.appendChild(newField);
    }
    allFields = document.querySelectorAll(".newFields");
};

const assignBombs = () => {
    let bombAmount = 4; // liczba bomb (bombFields)
    while (bombFields.length < bombAmount) {
        let randomIndex = Math.floor(Math.random() * fieldsAmount);
        if (!bombFields.includes(randomIndex)) {
            bombFields.push(randomIndex);
        }
    }
};

const assignNumber = () => {
    allFields.forEach((div, index) => {
        if (bombFields.includes(index)) {
            div.innerHTML = " ";
        } else {
            div.innerHTML = " ";
        }
    });

};

// const checkScore = () => {
//     scoreContainer.innerHTML = `Your score: ${score}`
//     if(score == fieldsAmount - bombFields.length) {
//         alert('You win!: ' + score);
//         gameBoard.innerHTML = "";
//         location.reload()

//     }
// }

const checkScore = () => {
    scoreContainer.innerHTML = `Your score: ${score}`
    if(score == fieldsAmount - bombFields.length) {
        alert('You win!: ' + score);
        gameBoard.innerHTML = "";
        location.reload()

    }
}

small.addEventListener("click", bomb);
scoreContainer.style.display = "none"

