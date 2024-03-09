const questions = [
  {
    question:
      "1) Qual é a coisa mais importante para você em um relacionamento?",

    choices: [
      " Conexão emocional profunda",

      " Inovação e criatividade",

      " Resiliência diante dos desafios",

      " Visão de longo prazo e metas compartilhadas",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: "2) Como você lida com o estresse?",

    choices: [
      " Procurando apoio emocional",

      " Buscando distrações ",

      " Enfrentando o problema",

      " Mantendo o foco no que é importante pra mim",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: "3) Qual atividade você prefere em seu tempo livre?",

    choices: [
      "  Conversar ou conhecer pessoas ",

      " Explorar novas ideias e projetos",

      " Superar desafios físicos ou mentais",

      " Planejar o futuro e definir metas",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: "4) Como você reage a mudanças inesperadas?",

    choices: [
      " Busco compreender as emoções envolvidas",

      " Vejo oportunidades de inovação",

      " Aceito o desafio e me adapto",

      " Avalio como isso impactará meus objetivos futuros",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: "5)Qual é o seu maior medo?",

    choices: [
      " Perder pessoas importantes da minha vida ",

      " Ficar preso na mesmice",

      " Não conseguir superar desafios",

      " Não atingir meus objetivos de vida",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: "6) O que mais motiva suas decisões?",

    choices: [
      " Emoções e relações",

      " Oportunidades",

      " Vontade de superar obstáculos",

      " Alcançar metas",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: "7) Como você prefere resolver conflitos?",

    choices: [
      " Priorizando a compreensão",

      " Propondo soluções",

      " Lidando com resiliência e paciência",

      " Considerando como isso pode me afetar",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: "8) O que te faz sentir mais realizado?",

    choices: [
      " Relações interpessoais significativas",

      " Contribuições",

      " Superar desafios pessoais",

      " Concluir objetivos",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: " 9) Qual é a sua abordagem para enfrentar problemas?",

    choices: [
      " Buscar apoio",

      " Encontrar soluções rapidamente",

      " Encarar com resiliência",

      " Planejar estrategicamente",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: "10) O que você valoriza mais em um projeto?",

    choices: [
      " A conexão que ele cria com as pessoas",

      " A inovação e originalidade",

      " A capacidade de superar desafios",

      " A contribuição para objetivos",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: "11) Como você se sente em relação a grandes mudanças na vida?",

    choices: [
      " Emocionalmente conectado(a)",

      " Animado(a) com novas possibilidades",

      " Determinado(a) a enfrentar",

      " Focado(a) na minha vida ",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: "12) O que mais te atrai em uma história ou filme?",

    choices: [
      " Relacionamentos emocionais",

      " Roteiros surpreendentes",

      " Personagens em situações difíceis",

      " Narrativas objetivas",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: "13) Qual característica você mais valoriza em um amigo?",

    choices: [
      " Empatia e compreensão",

      " Criatividade e originalidade",

      " Resiliência e coragem",

      " Compartilhamento de experiências e objetivos de vida",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: "14) Como você prefere aprender algo novo?",

    choices: [
      " Com experiências emocionais e relacionais",

      " Buscando abordagens diferentes ",

      " Superando desafios práticos",

      " Com um foco a longo prazo",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: "15) O que te faz sentir mais conectado(a) ao mundo?",

    choices: [
      " Relações",

      " Descobrir novas ideias e conceitos",

      " Superar desafios pessoais",

      " Contribuir positivamente ",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: "16) Como você define sucesso pessoal?",

    choices: [
      " Ter relacionamentos felizes e saudáveis",

      " Alcançar objetivos",

      " Superar desafios e adversidades",

      " Cumprir metas",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: "17) O que mais te inspira em uma obra de arte?",

    choices: [
      " Expressões emocionais",

      " Elementos criativos e originais",

      " Mensagens",

      " Representações",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: "18) O que você busca em uma carreira profissional?",

    choices: [
      " Bom ambiente de trabalho",

      " Oportunidades constante",

      " Desafios",

      " Contribuição",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: "19) Como você prefere passar suas férias?",

    choices: [
      " Com amigos e familiares próximos",

      " Explorando novas ideias e lugares",

      " Envolvido(a) em atividades",

      " Planejando para o futuro",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: "20) O que você mais valoriza em uma equipe de trabalho?",

    choices: [
      " A coesão e empatia entre os membros",

      " A capacidade de criatividade",

      " Enfrentar os desafios",

      " A visão compartilhada",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: "21) Como você lida com feedback negativo ?",

    choices: [
      " Busco a compreensão",

      " Vejo como uma oportunidade para melhorar",

      " Aceito sem questionar",

      " Se eu achar injusto eu questiono",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: "22) O que mais te atrai em um hobby?",

    choices: [
      " O aspecto social e emocional",

      " A oportunidade de experimentar coisas novas",

      " O desafio e a superação pessoal",

      " A conexão com objetivos de longo prazo",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: "23) Como você aborda a resolução de problemas cotidianos?",

    choices: [
      " Com base na compreensão emocional",

      " Buscando soluções diferentes ",

      " Lidando com paciência",

      " Considerando o impacto negativo",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: "24) O que mais te intriga em uma história de vida?",

    choices: [
      " Como as pessoas se conectam",

      " Momentos inovadores e decisivos",

      " A vontade de vencer desafios",

      " A jornada em direção a metas",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: "25) Como você se sente em relação a regras e estruturas?",

    choices: [
      " Valorizo a flexibilidade",

      " Vejo como oportunidades para me aproximar",

      " Aceito e adapto-me",

      " Considero em relação aos objetivos futuros",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: "26) O que mais te fascina em uma conversa?",

    choices: [
      " A profundidade das emoções compartilhadas",

      " As ideias propostas",

      " A vivência que foi expressada",

      " Conversas sobre metas e sonhos",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: "27) Como você escolhe seu próximo desafio?",

    choices: [
      " Considerando o impacto no meu emocional ",

      " Buscando algo inovador e único",

      " Optando por algo que exija força de vontade ",

      " Que sejam benéficas ao meu futuro",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: "28) O que mais te atrai em um livro?",

    choices: [
      " A profundidade dos personagens e relações",

      " A originalidade e criatividade na narrativa",

      " A superação de obstáculos pelos protagonistas",

      " A exploração da história",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: "29)Como você se sente em relação a mudanças de planos?",

    choices: [
      " Valorizo a adaptabilidade",

      " Vejo como oportunidade",

      " Aceito e enfrento",

      " Adapto as minhas metas",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: "30) O que te faz sentir mais realizado(a) no trabalho?",

    choices: [
      " Relações interpessoais significativas",

      " Contribuições para a empresa",

      " Superar desafios profissionais",

      " Alcançar metas de longo prazo",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: "31) Qual é a sua reação diante de conquistas pessoais?",

    choices: [
      " Comemoro junto com as pessoas próximas",

      " Vejo como uma inovação contínua",

      " Sinto uma sensação de resiliência e superação",

      " Reflito sobre como isso contribui para o meu futuro",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: "32)O que mais te motiva a aprender algo novo?",

    choices: [
      " A oportunidade de compartilhar a experiência",

      " A busca por novas perspectivas",

      " O desafio de superar obstáculos práticos",

      " A contribuição para planos futuros",
    ],

    answer: [0, 1, 2, 3],
  },
];

let currentQuestion = 0;

var empathetic = 0;
var innovative = 0;
var resilient = 0;
var visionary = 0;

var inResposta = document.getElementById("inResposta");

function showQuestion() {
  const questionElement = document.getElementById("question");
  const choicesElement = document.getElementById("choices");

  questionElement.textContent = questions[currentQuestion].question;
  choicesElement.innerHTML = "";

  questions[currentQuestion].choices.forEach((choice, index) => {
    const choiceElement = document.createElement("button");
    choiceElement.className = "choiceButton";
    choiceElement.textContent = choice;
    choiceElement.value = index;
    choiceElement.onclick = checkAnswer;
    choicesElement.appendChild(choiceElement);
  });
}

function checkAnswer(e) {
  const selectedOption = parseInt(e.target.value);
  const answer = questions[currentQuestion].answer;

  // Incrementar as pontuações correspondentes
  for (let i = 0; i < answer.length; i++) {
    if (selectedOption === answer[i]) {
      switch (i) {
        case 0:
          console.log(
            `\n Empático: ${++empathetic};\n Inovador: ${innovative};\n Resiliente: ${resilient};\n Visionário: ${visionary}`
          );
          break;
        case 1:
          console.log(
            `\n Empático: ${empathetic};\n Inovador: ${++innovative};\n Resiliente: ${resilient};\n Visionário: ${visionary}`
          );
          break;
        case 2:
          console.log(
            `\n Empático: ${empathetic};\n Inovador: ${innovative};\n Resiliente: ${++resilient};\n Visionário: ${visionary}`
          );
          break;
        case 3:
          console.log(
            `\n Empático: ${empathetic};\n Inovador: ${innovative};\n Resiliente: ${resilient};\n Visionário: ${++visionary}`
          );
          break;
        default:
          break;
      }
    }
  }
  currentQuestion++;

  // IF´s pra quando um personalidades obtiver 100%
  ifVerificationOneHundred();

  // IF´s que fazem a soma para comparação
  ifSumVerification();

  // IF´s pra quando um personalidades forem  iguais a 25%
  ifVerificationDiversity();

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
  }
}

showQuestion();
function ifVerificationOneHundred() {
  if (currentQuestion == 32 && empathetic == 32) {
    inResposta.textContent = "Sua personalidade é Empatico ";
    inResposta.focus();
  }

  if (currentQuestion == 32 && innovative == 32) {
    inResposta.textContent = "Sua personalidade é Inovador";

    inResposta.focus();
  }

  if (currentQuestion == 32 && resilient == 32) {
    inResposta.textContent = "Sua personalidade é Inovador";

    inResposta.focus();
  }

  if (currentQuestion == 32 && visionary == 32) {
    inResposta.textContent = "Sua personalidade é Inovador";

    inResposta.focus();
  }
}

function ifSumVerification() {
  if (
    currentQuestion == 32 &&
    empathetic + innovative > resilient + visionary
  ) {
    inResposta.textContent = "Sua personalidade é Empatico com Inovador";
    inResposta.focus();
  }

  if (
    currentQuestion == 32 &&
    empathetic + resilient > innovative + visionary
  ) {
    inResposta.textContent = "Sua personalidade é  Empatico com Resiliente";
    inResposta.focus();
  }

  if (
    currentQuestion == 32 &&
    empathetic + visionary > resilient + innovative
  ) {
    inResposta.textContent = "Sua personalidade é Empatico com Visionário";
    inResposta.focus();
  }

  if (
    currentQuestion == 32 &&
    innovative + resilient > empathetic + visionary
  ) {
    inResposta.textContent = "Sua personalidade é  Inovador com Resiliente";
    inResposta.focus();
  }

  if (
    currentQuestion == 32 &&
    innovative + visionary > resilient + empathetic
  ) {
    inResposta.textContent = "Sua personalidade é Inovador com Visionário";
    inResposta.focus();
  }

  if (
    currentQuestion == 32 &&
    resilient + visionary > empathetic + innovative
  ) {
    inResposta.textContent = "Sua personalidade é Resiliente com Visionário";
    inResposta.focus();
  }
}

function ifVerificationDiversity() {
  if (
    currentQuestion == 32 &&
    empathetic == 8 &&
    innovative == 8 &&
    resilient == 8 &&
    visionary == 8
  ) {
    inResposta.textContent = "Sua personalidade é Bipolar";
    inResposta.focus();
  }
}

const finish = document.getElementById("finish");

finish.addEventListener("click", () => {
  if (currentQuestion == 32) {
    alert("Quiz completo");

    var firstContents = document.getElementsByClassName("firstContent");
    for (let i = 0; i < firstContents.length; i++) {
      firstContents[i].style.display = "none";
    }
  }

  var secondContents = document.getElementsByClassName("secondContents");
  for (let i = 0; i < secondContents.length; i++) {
    secondContents[i].style.display = "initial";
  }

  if (currentQuestion < 32) {
    confirm(
      "Tem certeza que deseja finalizar seu Quiz? \nEle ainda está incompleto :("
    );
    if (confirm) {
      location.reload();
    }
  }
});
