/* =========================================
   ECOENERGIA
   TESTE DE NÍVEL
========================================= */


/* =========================================
   PERGUNTAS
========================================= */

const perguntas = [

    {
        categoria: "💧 ECONOMIA DE ÁGUA",

        pergunta:
            "Qual atitude ajuda a economizar água ao lavar roupas?",

        alternativas: [
            "Lavar poucas peças por vez",
            "Utilizar a máquina com a quantidade adequada de roupas",
            "Repetir o ciclo de lavagem várias vezes",
            "Deixar a máquina funcionando mesmo vazia"
        ],

        correta: 1
    },

    {
        categoria: "💧 ECONOMIA DE ÁGUA",

        pergunta:
            "Qual dispositivo pode ajudar a reduzir o consumo de água em torneiras?",

        alternativas: [
            "Aquecedor elétrico",
            "Filtro de ar",
            "Arejador de torneira",
            "Ventilador"
        ],

        correta: 2
    },

    {
        categoria: "⚡ ECONOMIA DE ENERGIA",

        pergunta:
            "Por que lâmpadas LED ajudam a economizar energia?",

        alternativas: [
            "Porque iluminam utilizando menos energia",
            "Porque funcionam sem eletricidade",
            "Porque produzem mais calor",
            "Porque precisam ficar ligadas por mais tempo"
        ],

        correta: 0
    },

    {
        categoria: "💧 SUSTENTABILIDADE",

        pergunta:
            "Qual é uma utilização adequada para a água da chuva armazenada?",

        alternativas: [
            "Beber sem nenhum tratamento",
            "Usá-la para qualquer atividade sem cuidado",
            "Utilizá-la em tarefas apropriadas, como limpeza e rega",
            "Misturá-la diretamente à água potável"
        ],

        correta: 2
    },

    {
        categoria: "⚡ ECONOMIA DE ENERGIA",

        pergunta:
            "Qual atitude pode ajudar a diminuir o consumo de energia do ar-condicionado?",

        alternativas: [
            "Deixar portas e janelas abertas",
            "Utilizar uma temperatura adequada e manter o ambiente fechado",
            "Ligar o aparelho com portas abertas",
            "Configurar sempre na menor temperatura possível"
        ],

        correta: 1
    },

    {
        categoria: "💧 ECONOMIA DE ÁGUA",

        pergunta:
            "Durante o preparo de alimentos, qual atitude ajuda a economizar água?",

        alternativas: [
            "Usar somente a quantidade necessária",
            "Deixar a torneira aberta durante todo o preparo",
            "Lavar os alimentos várias vezes sem necessidade",
            "Usar água corrente para todas as etapas"
        ],

        correta: 0
    },

    {
        categoria: "⚡ CONSUMO CONSCIENTE",

        pergunta:
            "Qual atitude representa um uso consciente da energia elétrica?",

        alternativas: [
            "Deixar aparelhos ligados durante toda a noite",
            "Manter todas as luzes acesas",
            "Desligar equipamentos quando não estão sendo utilizados",
            "Deixar carregadores conectados sem necessidade"
        ],

        correta: 2
    },

    {
        categoria: "💧 ECONOMIA DE ÁGUA",

        pergunta:
            "Por que é importante verificar torneiras, chuveiros e encanamentos regularmente?",

        alternativas: [
            "Para aumentar a pressão da água",
            "Para identificar e corrigir possíveis vazamentos",
            "Para gastar mais água",
            "Para deixar a água mais quente"
        ],

        correta: 1
    },

    {
        categoria: "🌱 SUSTENTABILIDADE",

        pergunta:
            "O que significa utilizar água e energia de forma consciente?",

        alternativas: [
            "Usar os recursos somente quando necessário",
            "Evitar completamente qualquer utilização",
            "Usar o máximo possível enquanto estiver disponível",
            "Deixar aparelhos ligados para evitar desgaste"
        ],

        correta: 0
    },

    {
        categoria: "🌎 DESAFIO FINAL",

        pergunta:
            "Uma família quer reduzir o consumo de água e energia ao mesmo tempo. Qual atitude é mais adequada?",

        alternativas: [
            "Tomar banhos mais longos e apagar as luzes",
            "Corrigir vazamentos e desligar equipamentos que não estão sendo usados",
            "Deixar torneiras abertas e usar lâmpadas mais fortes",
            "Lavar pequenas quantidades de roupa várias vezes"
        ],

        correta: 1
    }

];


/* =========================================
   VARIÁVEIS
========================================= */

let perguntaAtual = 0;
let acertos = 0;
let respondeu = false;


/* =========================================
   ELEMENTOS HTML
========================================= */

const introducao = document.getElementById("introducao-teste");

const areaTeste = document.getElementById("area-teste");

const resultado = document.getElementById("resultado-teste");

const btnIniciar =
    document.getElementById("btn-iniciar-teste");

const btnProxima =
    document.getElementById("btn-proxima");

const btnRefazer =
    document.getElementById("btn-refazer");

const perguntaElemento =
    document.getElementById("pergunta");

const alternativasElemento =
    document.getElementById("alternativas");

const categoriaElemento =
    document.getElementById("categoria-pergunta");

const numeroPerguntaElemento =
    document.getElementById("numero-pergunta");

const contadorAcertosElemento =
    document.getElementById("contador-acertos");

const progressoElemento =
    document.getElementById("progresso");

const feedbackElemento =
    document.getElementById("feedback");


/* =========================================
   INICIAR TESTE
========================================= */

btnIniciar.addEventListener("click", iniciarTeste);


function iniciarTeste() {

    perguntaAtual = 0;

    acertos = 0;

    respondeu = false;

    introducao.classList.add("escondido");

    resultado.classList.add("escondido");

    areaTeste.classList.remove("escondido");

    mostrarPergunta();

}


/* =========================================
   MOSTRAR PERGUNTA
========================================= */

function mostrarPergunta() {

    respondeu = false;

    const pergunta = perguntas[perguntaAtual];


    /* Número da pergunta */

    numeroPerguntaElemento.textContent =
        `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;


    /* Contador */

    contadorAcertosElemento.textContent =
        `${acertos} ${acertos === 1 ? "acerto" : "acertos"}`;


    /* Barra de progresso */

    const progresso =
        ((perguntaAtual) / perguntas.length) * 100;

    progressoElemento.style.width =
        `${progresso}%`;


    /* Categoria */

    categoriaElemento.textContent =
        pergunta.categoria;


    /* Pergunta */

    perguntaElemento.textContent =
        pergunta.pergunta;


    /* Limpar alternativas */

    alternativasElemento.innerHTML = "";


    /* Esconder feedback */

    feedbackElemento.classList.add("escondido");

    feedbackElemento.innerHTML = "";


    /* Esconder botão */

    btnProxima.classList.add("escondido");


    /* Criar alternativas */

    pergunta.alternativas.forEach(
        (alternativa, indice) => {

            const botao =
                document.createElement("button");

            botao.classList.add("alternativa");

            botao.innerHTML = `
                <span class="letra-alternativa">
                    ${String.fromCharCode(65 + indice)}
                </span>

                <span>
                    ${alternativa}
                </span>
            `;

            botao.addEventListener(
                "click",
                () => selecionarResposta(indice)
            );

            alternativasElemento.appendChild(botao);

        }
    );


    /* Animação */

    document
        .getElementById("pergunta-container")
        .classList.remove("trocar-pergunta");

    void document
        .getElementById("pergunta-container")
        .offsetWidth;

    document
        .getElementById("pergunta-container")
        .classList.add("trocar-pergunta");

}


/* =========================================
   SELECIONAR RESPOSTA
========================================= */

function selecionarResposta(indiceEscolhido) {

    if (respondeu) {
        return;
    }

    respondeu = true;

    const pergunta =
        perguntas[perguntaAtual];

    const botoes =
        document.querySelectorAll(".alternativa");


    /* Desabilitar todos */

    botoes.forEach(botao => {

        botao.disabled = true;

    });


    /* Resposta correta */

    const respostaCorreta =
        pergunta.correta;


    /* Verificar resposta */

    if (indiceEscolhido === respostaCorreta) {

        acertos++;

        botoes[indiceEscolhido]
            .classList.add("correta");

        mostrarFeedback(
            true,
            "🎉 Muito bem! Você acertou!"
        );

    } else {

        botoes[indiceEscolhido]
            .classList.add("incorreta");

        botoes[respostaCorreta]
            .classList.add("correta");

        mostrarFeedback(
            false,
            "💡 Quase! A resposta correta foi destacada em verde."
        );

    }


    /* Atualizar contador */

    contadorAcertosElemento.textContent =
        `${acertos} ${acertos === 1 ? "acerto" : "acertos"}`;


    /* Mostrar botão */

    btnProxima.classList.remove("escondido");


    /* Última pergunta */

    if (perguntaAtual === perguntas.length - 1) {

        btnProxima.textContent =
            "Ver meu resultado 🏆";

    }

}


/* =========================================
   FEEDBACK
========================================= */

function mostrarFeedback(acertou, mensagem) {

    feedbackElemento.classList.remove("escondido");

    feedbackElemento.className =
        acertou
            ? "feedback feedback-correto"
            : "feedback feedback-erro";

    feedbackElemento.innerHTML = mensagem;

}


/* =========================================
   PRÓXIMA PERGUNTA
========================================= */

btnProxima.addEventListener(
    "click",
    proximaPergunta
);


function proximaPergunta() {

    perguntaAtual++;


    /* Ainda existem perguntas */

    if (perguntaAtual < perguntas.length) {

        mostrarPergunta();

        return;

    }


    /* Acabaram as perguntas */

    finalizarTeste();

}


/* =========================================
   FINALIZAR TESTE
========================================= */

function finalizarTeste() {

    areaTeste.classList.add("escondido");

    resultado.classList.remove("escondido");


    /* Barra completa */

    progressoElemento.style.width = "100%";


    /* Mostrar pontuação */

    document.getElementById("pontuacao")
        .textContent = acertos;


    document.getElementById("texto-acertos")
        .textContent =
        `Você acertou ${acertos} de ${perguntas.length} perguntas.`;


    /* Descobrir nível */

    const nivel = descobrirNivel(acertos);


    /* Mostrar nível */

    document.getElementById("nivel-icone")
        .textContent = nivel.icone;

    document.getElementById("nivel-nome")
        .textContent = nivel.nome;

    document.getElementById("nivel-descricao")
        .textContent = nivel.descricao;


    /* Emoji */

    document.getElementById("resultado-emoji")
        .textContent = nivel.emoji;


    /* Salvar resultado */

    const dadosNivel = {

        nivel: nivel.nome,

        icone: nivel.icone,

        acertos: acertos,

        total: perguntas.length

    };


    localStorage.setItem(
        "ecoNivel",
        JSON.stringify(dadosNivel)
    );


    /* Confetes */

    if (typeof comemorar === "function") {

        comemorar();

    }

}


/* =========================================
   DEFINIR NÍVEL
========================================= */

function descobrirNivel(pontos) {

    if (pontos <= 2) {

        return {

            nome: "Iniciante",

            icone: "🌱",

            emoji: "🌱",

            descricao:
                "Você está começando sua jornada! Continue aprendendo e descubra novas formas de cuidar da água e da energia."

        };

    }


    if (pontos <= 4) {

        return {

            nome: "Explorador",

            icone: "💧",

            emoji: "💧",

            descricao:
                "Você já conhece alguns conceitos importantes. Agora é hora de explorar ainda mais o mundo da sustentabilidade!"

        };

    }


    if (pontos <= 6) {

        return {

            nome: "Intermediário",

            icone: "⚡",

            emoji: "⚡",

            descricao:
                "Muito bom! Você possui uma boa base sobre economia de água e energia. Continue praticando!"

        };

    }


    if (pontos <= 8) {

        return {

            nome: "Avançado",

            icone: "🌿",

            emoji: "🌿",

            descricao:
                "Excelente! Você já possui bastante conhecimento sobre sustentabilidade e consumo consciente."

        };

    }


    return {

        nome: "Especialista",

        icone: "🌎",

        emoji: "🏆",

        descricao:
            "Incrível! Você domina os principais conceitos de economia de água e energia. Agora pode encarar desafios ainda maiores!"

    };

}


/* =========================================
   REFAZER TESTE
========================================= */

btnRefazer.addEventListener(
    "click",
    refazerTeste
);


function refazerTeste() {

    perguntaAtual = 0;

    acertos = 0;

    respondeu = false;

    resultado.classList.add("escondido");

    introducao.classList.remove("escondido");

    areaTeste.classList.add("escondido");


    /* Remover resultado salvo */

    localStorage.removeItem("ecoNivel");

}