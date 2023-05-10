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
            "Apertei o ferimento <span class=highlight_text>a fim de</span> que parasse de sangrar.",
            "É tarde <span class=highlight_text>para que</span> reverta o estrago",
            "Ele trabalha - a fim de que- ganhe seu salário."
        ],
        "temporal": [
            "Desaprovou o comportamento do filho <span class=highlight_text>assim que</span> soube do ocorrido.",
            "<span class=highlight_text>Apenas</span>  pegou o casaco e saiu a correr pela rua fria."
        ],
        "proporcional": [
            "Não gostava da sogra, <span class=highlight_text>quanto mais</span> da cunhada.",
            "- À medida que - andávamos, ficava mais escuro.",
            "- Quanto mais estudo, mais - preparada fico para a prova."
        ],
        "integrante": [
            "Afirmo - que - sou a proprietária da loja.",
            "Não sabia - se - contava o ocorrido ou me calava.",
            "Tive receio, percebi - que - tinha cometido um erro"
        ]
    }
}


function clearLocal(){
    localStorage.clear();
}

// Random generation for question answer and prompt

// -----------
// Explanation: Gets a random number, selects a class with that number, selects a class in randomObj and then
// chooses a random entry in that randomObj array with the randomObjNumber variable.
// -----------

let randomNumber = Math.floor((Math.random() * data.classesPossiveis.length));
let randomObj = data.classes[data.classesPossiveis[randomNumber]];
let randomObjNumber = Math.floor((Math.random() * randomObj.length));
document.getElementById('prompt').innerHTML = randomObj[randomObjNumber];

function updateRandom() {
    randomNumber = Math.floor((Math.random() * data.classesPossiveis.length));
    randomObj = data.classes[data.classesPossiveis[randomNumber]]
    randomObjNumber = Math.floor((Math.random() * randomObj.length));
    console.log(randomObj)
    document.getElementById('prompt').innerHTML = randomObj[randomObjNumber];
}
// Button Manager

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

    // console.log("INDEX: " + data.classesPossiveis[data.classesPossiveis.indexOf(data.classesPossiveis[randomNumber])])

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
    // console.log("ROUND: " + currentRound);
    
    if (currentRound >= maxRound) {
        localStorage.setItem("points", points);
        console.log(localStorage.getItem("points"));
        window.location.href="./gameEnd.html";
    }
}

