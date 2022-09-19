


var turn = "X";

function changeTurn() {
    return turn === "X" ? "0" : "X";
}

function checkWin() {
    let boxtext = document.querySelectorAll(".box_text")
    let win = [
        [0, 1, 2],
        [0, 3, 6],
        [3, 4, 5],
        [6, 7, 8],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    win.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&  (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "")) {
            console.log("Wisn");
            document.getElementById("winner").innerText = `Congratulation! ${boxtext[e[0]].innerText} Wins`;

            document.querySelector("#gif").getElementsByTagName("img")[0].style.display = "inline";
    }})

}
let box = document.getElementsByClassName("box");
Array.from(box).forEach((boxes) => {
    let boxtext = boxes.querySelector(".box_text")
    boxes.addEventListener("click", function () {

        if (boxtext.innerText == "") {
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
        }




    })
});

