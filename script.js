// ==============================
// PERGUNTAS DO QUIZ
// ==============================

const perguntas = [
    // Fáceis
    {
        pergunta: "Qual o nome completo dela?",
        alternativas: ["Mariana Rubis da Silva", "Mariane Silva Rubis", "Mariana da Silva Rubis", "Mariaana Da Silva Rubis"],
        respostaCorreta: 2
    },
    {
        pergunta: "Qual a idade da Mariana?",
        alternativas: ["15 anos", "17 anos", "19 anos", "16 anos"],
        respostaCorreta: 3
    },
    {
        pergunta: "Qual a data de namoro de vocês?",
        alternativas: ["28/04/2022", "28/05/2023", "28/03/2023", "28/04/2023"],
        respostaCorreta: 3
    },
    {
        pergunta: "Qual é a cor favorita dela?",
        alternativas: ["Roxo", "Vermelho", "Azul", "Preto"],
        respostaCorreta: 0
    },
    {
        pergunta: "Qual a data de nascimento dela?",
        alternativas: ["21/02/2009", "21/02/2010", "22/02/2010", "21/01/2010"],
        respostaCorreta: 1
    },
    {
        pergunta: "Qual é o maior medo dela?",
        alternativas: ["Escorpião", "Altura", "Barata", "Largatixa"],
        respostaCorreta: 2
    },
    {
        pergunta: "Qual é a sobremesa favorita dela?",
        alternativas: ["Açai/sorvete", "Bolo", "Churros", "Gelatina"],
        respostaCorreta: 0
    },
    {
        pergunta: "Qual é a coisa que mais me irrita?",
        alternativas: ["Pessoas sem noção", "Ficar rindo de coisa séria", "Ficar com sono", "Ficar com fome"],
        respostaCorreta: 3
    },

    // Médias
    {
        pergunta: "Quem é mais provável de dormir durante um filme?",
        alternativas: ["Mariana", "Octávio", "Ambos"],
        respostaCorreta: 2
    },
    {
        pergunta: "Quem é mais provável de gastar dinheiro com besteiras?",
        alternativas: ["Mariana", "Octávio", "Ambos"],
        respostaCorreta: 0
    },
    {
        pergunta: "Quem sente mais saudade?",
        alternativas: ["Mariana", "Octávio", "Ambos"],
        respostaCorreta: 0
    },
    {
        pergunta: "Quem é mais provável de esquecer uma data importante?",
        alternativas: ["Mariana", "Octávio", "Ambos"],
        respostaCorreta: 1
    },
    {
        pergunta: "Quem é mais provável de fazer uma surpresa?",
        alternativas: ["Mariana", "Octávio", "Ambos"],
        respostaCorreta: 0
    },
    {
        pergunta: "Quem é mais carinhoso?",
        alternativas: ["Mariana", "Octávio", "Ambos"],
        respostaCorreta: 2
    },

    // Difíceis
    {
        pergunta: "Onde foi nosso primeiro encontro?",
        alternativas: ["Igreja", "SESI", "Praça 21", "Sorveteria"],
        respostaCorreta: 0
    },
    {
        pergunta: "Onde foi nossa primeira foto de rosto juntos?",
        alternativas: ["Igreja", "Minha casa", "SESI", "Sorveteria"],
        respostaCorreta: 1
    },
    {
        pergunta: "Qual é meu maior sonho?",
        alternativas: ["Comer uma barata", "Ter um cachorro", "Viajar o mundo", "Ter uma fazenda"],
        respostaCorreta: 3
    },
    {
        pergunta: "Qual perfume eu uso?",
        alternativas: ["Egeo", "Floratta Red", "Glamour"],
        respostaCorreta: 1
    },
    {
        pergunta: "Como imagino nosso futuro?",
        alternativas: [
            "Com uma fazenda, 1 filho e 2 cachorros",
            "Com uma casa, nenhum filho, sem faculdade",
            "Com uma fazenda, 2 filhos e formada em agronomia"
        ],
        respostaCorreta: 2
    },
    {
        pergunta: "Qual apelido nós se chamamos mais?",
        alternativas: ["Amor", "Minha vida", "Meu amor", "Mor/mo"],
        respostaCorreta: 3
    }
];


// ==============================
// VARIÁVEIS
// ==============================

let indiceAtual = 0;
let pontuacao = 0;
let respondeu = false;


// ==============================
// ELEMENTOS DO HTML
// ==============================

const btnIniciar = document.getElementById("btn-iniciar");
const areaQuiz = document.getElementById("area-quiz");
const elementoPergunta = document.getElementById("pergunta");
const alternativas = document.getElementById("alternativas");
const resultado = document.getElementById("resultado");
const btnProxima = document.getElementById("btn-proxima");
const imagemResultado = document.getElementById("imagem-resultado");

const premio = document.getElementById("premio");
const melhorar = document.getElementById("melhorar");
const naoConhece = document.getElementById("nao-conhece");
const gabaritou = document.getElementById("gabaritou");


// Verificar se todos os elementos existem
const elementos = [
    btnIniciar,
    areaQuiz,
    elementoPergunta,
    alternativas,
    resultado,
    btnProxima,
    imagemResultado,
    premio,
    melhorar,
    naoConhece,
    gabaritou
];

if (elementos.some(elemento => elemento === null)) {
    console.error("Erro: confira os IDs dos elementos no HTML.");
}


// ==============================
// COMEÇAR O QUIZ
// ==============================

btnIniciar.addEventListener("click", function() {

    indiceAtual = 0;
    pontuacao = 0;

    btnIniciar.style.display = "none";
    areaQuiz.style.display = "flex";

    mostrarPergunta();

});


// ==============================
// MOSTRAR PERGUNTA
// ==============================

function mostrarPergunta() {

    respondeu = false;

    resultado.innerText = "";
    alternativas.innerHTML = "";

    btnProxima.style.display = "none";

    imagemResultado.style.display = "none";
    imagemResultado.src = "";

    premio.style.display = "none";
    melhorar.style.display = "none";
    naoConhece.style.display = "none";
    gabaritou.style.display = "none";

    const perguntaAtual = perguntas[indiceAtual];

    elementoPergunta.innerText = perguntaAtual.pergunta;

    perguntaAtual.alternativas.forEach(function(alternativa, indice) {

        const botao = document.createElement("button");

        botao.innerText = alternativa;
        botao.type = "button";

        botao.addEventListener("click", function() {
            verificarResposta(indice);
        });

        alternativas.appendChild(botao);

    });

}


// ==============================
// VERIFICAR RESPOSTA
// ==============================

function verificarResposta(indiceEscolhido) {

    if (respondeu) {
        return;
    }

    respondeu = true;

    const perguntaAtual = perguntas[indiceAtual];

    const botoes = alternativas.querySelectorAll("button");

    botoes.forEach(function(botao, indice) {

        botao.disabled = true;

        if (indice === perguntaAtual.respostaCorreta) {
            botao.classList.add("correta");
        }

        if (
            indice === indiceEscolhido &&
            indice !== perguntaAtual.respostaCorreta
        ) {
            botao.classList.add("errada");
        }

    });

    if (indiceEscolhido === perguntaAtual.respostaCorreta) {

        resultado.innerText = "Você acertou!";

        imagemResultado.src = "acertou.jpg";
        imagemResultado.alt = "Cachorrinho comemorando";

        pontuacao++;

    } else {

        resultado.innerText = "Resposta errada!";

        imagemResultado.src = "errou.png";
        imagemResultado.alt = "Carinha brava";

    }

    imagemResultado.style.display = "block";

    btnProxima.style.display = "block";

}


// ==============================
// PRÓXIMA PERGUNTA
// ==============================

btnProxima.addEventListener("click", function() {

    if (!respondeu) {
        return;
    }

    indiceAtual++;

    if (indiceAtual < perguntas.length) {

        mostrarPergunta();

    } else {

        finalizarQuiz();

    }

});


// ==============================
// FINALIZAR QUIZ
// ==============================

function finalizarQuiz() {

    elementoPergunta.innerText = "Quiz finalizado! ❤️";

    alternativas.innerHTML = "";

    resultado.innerText =
        "Você acertou " + pontuacao +
        " de " + perguntas.length + " perguntas!";

    imagemResultado.style.display = "none";

    btnProxima.style.display = "none";

    // Esconder todos os resultados
    premio.style.display = "none";
    melhorar.style.display = "none";
    naoConhece.style.display = "none";
    gabaritou.style.display = "none";


    // GABARITOU: acertou todas as 20 perguntas
    if (pontuacao === perguntas.length) {

        gabaritou.style.display = "block";

    }

    // De 16 a 19 acertos
    else if (pontuacao >= 16) {

        premio.style.display = "block";

    }

    // De 10 a 15 acertos
    else if (pontuacao >= 10) {

        melhorar.style.display = "block";

    }

    // De 0 a 9 acertos
    else {

        naoConhece.style.display = "block";

    }

}
