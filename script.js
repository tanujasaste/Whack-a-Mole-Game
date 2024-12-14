let currMole;
let currplant;
let score = 0;
let gameover = false;

window.onload = function () {
    setGame();
}

function setGame() {
    for (let i = 0; i < 9; i++) {
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile)
        document.querySelector(".container").appendChild(tile);
    }

    setInterval(setMole, 1000);
    setInterval(setplant, 2000);
}



function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}



function setMole() {
    if (gameover) {
        return;
    }
    if (currMole) {
        currMole.innerHTML = "";
    }
    let mole = document.createElement("img");
    mole.src = "./monty-mole.png";

    let num = getRandomTile();
    if (currplant && currplant.id == num) {
        return;
    }
    currMole = document.getElementById(num);
    currMole.appendChild(mole);
}



function setplant() {
    if (gameover) {
        return;
    }
    if (currplant) {
        currplant.innerHTML = "";
    }

    let plant = document.createElement("img");
    plant.src = "./piranha-plant.png";

    let num = getRandomTile();
    if (currMole && currMole.id == num) {
        return;
    }
    currplant = document.getElementById(num);
    currplant.appendChild(plant);

}

function selectTile() {
    if (gameover) {
        return;
    }
    if (this == currMole) {
        score += 10;
        document.getElementById("score").innerText = score.toString();
    }
    else if (this == currplant) {
        document.getElementById("score").innerText = "GAME OVER:" + score.toString();
        gameover = true;
    }
}