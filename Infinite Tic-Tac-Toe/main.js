const pole = document.querySelector(".pole");
const span = document.getElementById("step");
const winsX_html = document.getElementById("winsX");
const winsO_html = document.getElementById("winsO");
const switchMode = document.getElementById("switch");
const winMass = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];

let xMoves = [];
let oMoves = [];

let winsX = 0;
let winsO = 0;

function checkWin() {
    const divs = document.querySelectorAll(".pole div");
    winMass.forEach((items, i) => {
        if (divs[items[0] - 1].innerHTML == divs[items[1] - 1].innerHTML && divs[items[1] - 1].innerHTML == divs[items[2] - 1].innerHTML && divs[items[2] - 1].innerHTML !== "") {
            if (divs[items[0] - 1].innerHTML == "✘") {
                winsX += 1;
                winsX_html.innerHTML = winsX;
                xMoves.length = 0
                oMoves.length = 0
            } else {
                winsO += 1;
                winsO_html.innerHTML = winsO;
                xMoves.length = 0
                oMoves.length = 0
            }
            
            alert(`WIN: ${divs[items[2] - 1].innerHTML}`);
            divs.forEach(item => {
                item.innerHTML = "";
            });
            simbol = "✘";
            span.innerHTML = simbol;
        }
    });
}

let simbol = "✘";
pole.addEventListener("click", (e) => {
    if (e.target.className == "pole" || e.target.innerHTML !== "") {
        return;
    }
    
    e.target.innerHTML = simbol;
    if (simbol == "✘") {
        xMoves.push(e.target);

        if (xMoves.length > 3) {
            let oldMove = xMoves.shift();
            oldMove.innerHTML = "";
        }
        simbol = "Ｏ";
    } else {
        oMoves.push(e.target);
        
        if (oMoves.length > 3) {
            let oldMove = oMoves.shift();
            oldMove.innerHTML = "";
        }
        simbol = "✘";
    }
    span.innerHTML = simbol;
    checkWin();
});