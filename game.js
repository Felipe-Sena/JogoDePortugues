/*
------------------------------------------------------------------------------------------------------------
    Copyright Felipe Sena | 2023 | Licenced under the GNU General Public Licence | Read the licence on the LICENCE.txt file
------------------------------------------------------------------------------------------------------------
*/

'use strict';

localStorage.clear();

// Variables

let debugCorrect = 2;
let currentRound = 0;
let maxRound = 6;
let points = 0;
let btnId = 1000;


// T H E  J S O N

const data = {
    "classesPossiveis": [
        "consecutiva",
        "final",
        "temporal",
        "proporcional",
        "integrante"
    ],
    "classes": {
        "consecutiva": [
            "CONSECUTIVA"
        ],
        "final": [
            "João foi à academia <span class=highlight_text>a fim de</span> ficar forte.",
            "Apertei o ferimento <span class=highlight_text>a fim </span>de que parasse de sangrar."
        ],
        "temporal": [
            "TEMPORAL"
        ],
        "proporcional": [
            "PROPORCIONAL"
        ],
        "integrante": [
            "INTEGRANTE"
        ]
    }
}
let randomNumber = Math.floor((Math.random() * data.classesPossiveis.length));
document.getElementById('prompt').innerHTML = data.classes[data.classesPossiveis[randomNumber]];
function updateRandom() {
    randomNumber = Math.floor((Math.random() * data.classesPossiveis.length));
    document.getElementById('prompt').innerHTML = data.classes[data.classesPossiveis[randomNumber]];
}
// Button Manager
// SHOULD REFACTOR THIS SUCKS

function btnMngr(id) {
    btnId = id;
    for (let i = 0; i < 5; i++) {
        document.getElementById(`btn${i}`).className ='btn';
    }
    document.getElementById(`btn${id}`).className = 'btn_active';
}


document.getElementById('btnSubmit').addEventListener('click', function() {
    let btnIdCopy = btnId
    btnId = 1000;
    gameManager(btnIdCopy, randomNumber);
})


function gameManager(btnId, randomNumber) {
    console.log(btnId);
    if (btnId >= 6) {
        return;
    }
    // Evaluate Win

    //console.log("INDEX: " + data.classesPossiveis[data.classesPossiveis.indexOf(data.classesPossiveis[randomNumber])])
    // Evaluate Win

    console.log("INDEX: " + data.classesPossiveis[data.classesPossiveis.indexOf(data.classesPossiveis[randomNumber])])

    if (btnId == data.classesPossiveis.indexOf(data.classesPossiveis[randomNumber])) {
        points++;
        console.log("PONTOS: " + points);
    }
    updateRandom();
    //document.getElementById('prompt').innerHTML = data.classes[data.classesPossiveis[randomNumber]];
    for (let i = 0; i < 5; i++) {
        document.getElementById(`btn${i}`).className ='btn';
    }

    
    
    currentRound++;
    console.log("ROUND: " + currentRound);
    
    if (currentRound >= maxRound) {
        localStorage.setItem("points", points);
        console.log(localStorage.getItem("points"));
        window.location.href="./gameEnd.html";
    }
}

