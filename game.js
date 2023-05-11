/*
------------------------------------------------------------------------------------------------------------
    Copyright Felipe Sena | 2023 | Licenced under the GNU General Public Licence | Read the licence on the LICENCE.txt file
------------------------------------------------------------------------------------------------------------
*/

'use strict';

// Variables

let currentRound = 0;
let maxRound = parseInt(localStorage.getItem('rounds')); // localStorage only stores strings!
let points = 0;
let btnId = 1000;
let correctSound = new Audio('win.wav');
let incorrectSound = new Audio('lose.wav');


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
            "Arrumou-se muito, <span class=highlight_text>de modo que</span> era o mais bonito da festa.",
            "Viajava muito ao redor do mundo, <span class=highlight_text>de maneira que</span> sentia necessidade de aprender novos idiomas.",
            "Choveu bastante, <span class=highlight_text>de modo que</span> a represa voltou a ficar cheia.",
            "Foi tamanho o susto <span class=highlight_text>que</span> ela desmaiou.",
            "Adiantou os estudos, <span class=highlight_text>de modo que</span> ficou com a tarde livre.",
            "Perdeu a hora, <span class=highlight_text>de maneira que</span> perdeu a consulta.",
            "Os fatos eram tão inusitados <span class=highlight_text>que</span> tentou fugir dali.",
            "O som estava tão alto <span class=highlight_text>que</span> as paredes do quarto chocalhavam.",
            "A comida estava <span class=highlight_text>tão</span> quente que ardeu-lhe o lábio.",
            "Os estudos presenciais foram paralisados, <span class=highlight_text>de modo que</span> os alunos tiveram um prejuízo no andamento da matéria.",
            "A violência dos ladrões foi tamanha <span class=highlight_text>que</span> levou a mulher a ter um infarto.",
            "É feio <span class=highlight_text>que</span> dói.",
            "Nunca abandonou seus ideais, <span class=highlight_text>de sorte que</span> acabou concretizando-os.",
            "Não consigo ver televisão <span class=highlight_text>sem</span> bocejar.",
            "Sua fome era tanta <span class=highlight_text>que</span> comeu com casca e tudo.",
            "Ela treinou <span class=highlight_text>tanto</span> durante todos aqueles anos, que conquistou o campeonato.",
            "Ele gritou tanto, <span class=highlight_text>que</span> ficou rouco.",
            "Esperou horas, <span class=highlight_text>de sorte que</span> já não tinha mais vontade de sair."
        ],
        "final": [
            "João foi à academia <span class=highlight_text>a fim de</span> ficar forte.",
            "<span class=highlight_text>Para</span> não perder a viagem, aproveitei e trouxe também suas encomendas.",
            "Pegou a mamadeira <span class=highlight_text>para</span> o bebê parar de chorar.",
            "Estamos aqui <span class=highlight_text>para que</span> ele fique tranquilo.",
            "Tirou fotos <span class=highlight_text>a fim de que</span> acreditassem no que havia acontecido.",
            "Manteremos segredo <span class=highlight_text>para que</span> ela não descubra a surpresa.",
            "É tarde <span class=highlight_text>para que</span> reverta o estrago.",
            "Apertei o ferimento <span class=highlight_text>a fim de que</span> parasse de sangrar.",
            "É cedo <span class=highlight_text>para que</span> saia a trabalhar.",
            "Victor, faça a tarefa de casa <span class=highlight_text>para que</span> a professora não chame a sua atenção.",
            "Escovo os dentes <span class=highlight_text>a fim de</span> manter a saúde bucal.",
            "Ela treinou muito durante todos aqueles anos <span class=highlight_text>para</span> conquistar o campeonato.",
            "Sentem logo <span class=highlight_text>para que</span> todos possam ver.",
            "Melhor dormir bem <span class=highlight_text>afim de que</span> possa fazer uma boa prova."
        ],
        "temporal": [
            "Desaprovou o comportamento do filho <span class=highlight_text>assim que</span> soube do ocorrido.",
            "<span class=highlight_text>Apenas</span>  pegou o casaco e saiu a correr pela rua fria.",
            "<span class=highlight_text>Enquanto</span> ela não me avisar, eu não vou conseguir dormir.",
            "Estaremos aí <span class=highlight_text>assim que</span> chegarmos!",
            "<span class=highlight_text>Mal</span> cheguei, começou a chover.",
            "<span class=highlight_text>Quando</span> as férias chegarem, viajaremos.",
            "<span class=highlight_text>Sempre que</span> posso, vou à biblioteca.",
            "Dou o recado <span class=highlight_text>logo que</span> ele chegue.",
            "<span class=highlight_text>Antes que</span> anoiteça, recolha a roupa.",
            "<span class=highlight_text>Quando</span> fui à igreja, encontrei a Chiquinha.",
            "<span class=highlight_text>Antes que</span> a noite surja, a roupa precisa secar.",
            "Não falou nada <span class=highlight_text>antes que</span> terminasse o dever.",
            "<span class=highlight_text>Depois que</span> se alimentou, foi fazer exercícios.",
            "A porta abre-se automaticamente <span class=highlight_text>sempre que</span> alguém chega perto.",
            "<span class=highlight_text>Enquanto</span> chovia, ele lia o texto com atenção.",
            "Saímos <span class=highlight_text>depois que</span> parou de chover.",
            "Me telefone, <span class=highlight_text>assim que</span> puder."

        ],
        "proporcional": [
            "Não gostava da sogra, <span class=highlight_text>quanto mais</span> da cunhada.",
            "<span class=highlight_text>À medida que</span> andávamos, ficava mais escuro.",
            "<span class=highlight_text>Quanto mais estudo, mais</span> preparada fico para a prova.",
            "Parece até que, <span class=highlight_text>quanto menos</span> você sabe, <span class=highlight_text>menos</span> você sofre.",
            "<span class=highlight_text>À medida que</span> nos aproximávamos, o lugar ficava <span class=highlight_text>mais</span> encantador!",
            "<span class=highlight_text>À medida em que</span> o tempo passava, confortava-se.",
            "<span class=highlight_text>Quanto mais</span> esperava, <span class=highlight_text>menos</span> satisfeita ficava.",
            "<span class=highlight_text>Quanto mais</span> trabalho, <span class=highlight_text>menos</span> recebo.",
            "<span class=highlight_text>À medida que</span> andava, <span class=highlight_text>mais</span> se encantava com a paisagem.",
            "<span class=highlight_text>Quanto menos</span> eu souber dessa história, melhor será para mim.",
            "<span class=highlight_text>À medida que</span> a família cresceu, as despesas aumentaram.",
            "O curso de Medicina continua atraindo muitas pessoas, <span class=highlight_text>ao passo que</span> a maioria delas não sabe sobre as dificuldades enfrentadas pelos médicos.",
            "<span class=highlight_text>Quanto mais</span> nervoso ficava, menos conseguia falar.",
            "Era <span class=highlight_text>tão</span> boa líder <span class=highlight_text>quanto</span> seu pai.",
            "<span class=highlight_text>À medida que</span> passa o efeito do analgésico, a dor volta.",
            "<span class=highlight_text>Quanto maior</span> a altura, maior o tombo."
        ],
        "integrante": [
            "Afirmo <span class=highlight_text>que</span> sou a proprietária da loja.",
            "Não sabia <span class=highlight_text>se</span> contava o ocorrido ou me calava.",
            "Tive receio, percebi <span class=highlight_text>que</span> tinha cometido um erro",
            "Veja <span class=highlight_text>se</span> a comida já esfriou.",
            "Pedi <span class=highlight_text>que</span> me devolvesse o pote!",
            "Não sabemos <span class=highlight_text>se</span> ele irá comparecer à reunião.",
            "Vimos o filme <span class=highlight_text>que</span> tanto indicaram.",
            "Quero <span class=highlight_text>que</span> você volte já.",
            "Não sei <span class=highlight_text>se</span> devo voltar lá.",
            "Você disse <span class=highlight_text>que</span> me ligava...",
            "A verdade é <span class=highlight_text>que</span> te amo.",
            "Não sei se você notou <span class=highlight_text>que</span> as cortinas são senhoriais.",
            "O motivo é <span class=highlight_text>que</span> enjoei.",
            "Tive receio, percebi <span class=highlight_text>que tinha cometido um erro.",
            "Veja <span class=highlight_text>se</span> me compreende.",
            "Samara pediu <span class=highlight_text>que</span> trouxesse vinho tinto para a ceia de Natal.",
            "Ana perguntou <span class=highlight_text>se</span> deveria trazer vinho tinto para a ceia de Natal.",
            "Quero <span class=highlight_text>que</span> você volte já.",
            "Não sei <span class=highlight_text>se</span> quero ir à praia."
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

    if (btnId == data.classesPossiveis.indexOf(data.classesPossiveis[randomNumber])) {
        points++;
        console.log("PONTOS: " + points);
        correctSound.play();
    } else {
        incorrectSound.play();
    }
    updateRandom();
    for (let i = 0; i < 5; i++) {
        document.getElementById(`btn${i}`).className ='btn';
    }

    currentRound++;
    
    if (currentRound >= maxRound) {
        localStorage.setItem("points", points);
        console.log(localStorage.getItem("points"));
        window.location.href="gameEnd.html";
    }
}

