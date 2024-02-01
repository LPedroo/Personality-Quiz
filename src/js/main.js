const questions = [
  {
    question:
      "1) Qual é a coisa mais importante para você em um relacionamento?",

    choices: [
      "a) Conexão emocional profunda",

      "b) Inovação e criatividade",

      "c) Resiliência diante dos desafios",

      "d) Visão de longo prazo e metas compartilhadas",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: "2) Como você lida com o estresse?",

    choices: [
      "a) Procurando apoio emocional",

      "b) Buscando distrações ",

      "c) Enfrentando o problema",

      "d) Mantendo o foco no que é importante pra mim",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: "3) Qual atividade você prefere em seu tempo livre?",

    choices: [
      "a)  Conversar ou conhecer pessoas ",

      "b) Explorar novas ideias e projetos",

      "c) Superar desafios físicos ou mentais",

      "d) Planejar o futuro e definir metas",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: "4) Como você reage a mudanças inesperadas?",

    choices: [
      "a) Busco compreender as emoções envolvidas",

      "b) Vejo oportunidades de inovação",

      "c) Aceito o desafio e me adapto",

      "d) Avalio como isso impactará meus objetivos futuros",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: "5)Qual é o seu maior medo?",

    choices: [
      "a) Perder pessoas importantes da minha vida ",

      "b) Ficar preso na mesmice",

      "c) Não conseguir superar desafios",

      "d) Não atingir meus objetivos de vida",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: "6) O que mais motiva suas decisões?",

    choices: [
      "a) Emoções e relações",

      "b) Oportunidades",

      "c) Vontade de superar obstáculos",

      "d) Alcançar metas",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: "7) Como você prefere resolver conflitos?",

    choices: [
      "a) Priorizando a compreensão",

      "b) Propondo soluções",

      "c) Lidando com resiliência e paciência",

      "d) Considerando como isso pode me afetar",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: "8) O que te faz sentir mais realizado?",

    choices: [
      "a) Relações interpessoais significativas",

      "b) Contribuições",

      "c) Superar desafios pessoais",

      "d) Concluir objetivos",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: " 9) Qual é a sua abordagem para enfrentar problemas?",

    choices: [
      "a) Buscar apoio",

      "b) Encontrar soluções rapidamente",

      "c) Encarar com resiliência",

      "d) Planejar estrategicamente",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: "10) O que você valoriza mais em um projeto?",

    choices: [
      "a) A conexão que ele cria com as pessoas",

      "b) A inovação e originalidade",

      "c) A capacidade de superar desafios",

      "d) A contribuição para objetivos",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: "11) Como você se sente em relação a grandes mudanças na vida?",

    choices: [
      "a) Emocionalmente conectado(a)",

      "b) Animado(a) com novas possibilidades",

      "c) Determinado(a) a enfrentar",

      "d) Focado(a) na minha vida ",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: "12) O que mais te atrai em uma história ou filme?",

    choices: [
      "a) Relacionamentos emocionais",

      "b) Roteiros surpreendentes",

      "c) Personagens em situações difíceis",

      "d) Narrativas objetivas",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: "13) Qual característica você mais valoriza em um amigo?",

    choices: [
      "a) Empatia e compreensão",

      "b) Criatividade e originalidade",

      "c) Resiliência e coragem",

      "d) Compartilhamento de experiências e objetivos de vida",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: "14) Como você prefere aprender algo novo?",

    choices: [
      "a) Com experiências emocionais e relacionais",

      "b) Buscando abordagens diferentes ",

      "c) Superando desafios práticos",

      "d) Com um foco a longo prazo",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: "15) O que te faz sentir mais conectado(a) ao mundo?",

    choices: [
      "a) Relações",

      "b) Descobrir novas ideias e conceitos",

      "c) Superar desafios pessoais",

      "d) Contribuir positivamente ",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: "16) Como você define sucesso pessoal?",

    choices: [
      "a) Ter relacionamentos felizes e saudáveis",

      "b) Alcançar objetivos",

      "c) Superar desafios e adversidades",

      "d) Cumprir metas",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: "17) O que mais te inspira em uma obra de arte?",

    choices: [
      "a) Expressões emocionais",

      "b) Elementos criativos e originais",

      "c) Mensagens",

      "d) Representações",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: "18) O que você busca em uma carreira profissional?",

    choices: [
      "a) Bom ambiente de trabalho",

      "b) Oportunidades constante",

      "c) Desafios",

      "d) Contribuição",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: "19) Como você prefere passar suas férias?",

    choices: [
      "a) Com amigos e familiares próximos",

      "b) Explorando novas ideias e lugares",

      "c) Envolvido(a) em atividades",

      "d) Planejando para o futuro",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: "20) O que você mais valoriza em uma equipe de trabalho?",

    choices: [
      "a) A coesão e empatia entre os membros",

      "b) A capacidade de criatividade",

      "c) Enfrentar os desafios",

      "d) A visão compartilhada",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: "21) Como você lida com feedback negativo ?",

    choices: [
      "a) Busco a compreensão",

      "b) Vejo como uma oportunidade para melhorar",

      "c) Aceito sem questionar",

      "d) Se eu achar injusto eu questiono",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: "22) O que mais te atrai em um hobby?",

    choices: [
      "a) O aspecto social e emocional",

      "b) A oportunidade de experimentar coisas novas",

      "c) O desafio e a superação pessoal",

      "d) A conexão com objetivos de longo prazo",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: "23) Como você aborda a resolução de problemas cotidianos?",

    choices: [
      "a) Com base na compreensão emocional",

      "b) Buscando soluções diferentes ",

      "c) Lidando com paciência",

      "d) Considerando o impacto negativo",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: "24) O que mais te intriga em uma história de vida?",

    choices: [
      "a) Como as pessoas se conectam",

      "b) Momentos inovadores e decisivos",

      "c) A vontade de vencer desafios",

      "d) A jornada em direção a metas",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: "25) Como você se sente em relação a regras e estruturas?",

    choices: [
      "a) Valorizo a flexibilidade",

      "b) Vejo como oportunidades para me aproximar",

      "c) Aceito e adapto-me",

      "d) Considero em relação aos objetivos futuros",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: "26) O que mais te fascina em uma conversa?",

    choices: [
      "a) A profundidade das emoções compartilhadas",

      "b) As ideias propostas",

      "c) A vivência que foi expressada",

      "d) Conversas sobre metas e sonhos",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: "27) Como você escolhe seu próximo desafio?",

    choices: [
      "a) Considerando o impacto no meu emocional ",

      "b) Buscando algo inovador e único",

      "c) Optando por algo que exija força de vontade ",

      "d) Que sejam benéficas ao meu futuro",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: "28) O que mais te atrai em um livro?",

    choices: [
      "a) A profundidade dos personagens e relações",

      "b) A originalidade e criatividade na narrativa",

      "c) A superação de obstáculos pelos protagonistas",

      "d) A exploração da história",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: "29)Como você se sente em relação a mudanças de planos?",

    choices: [
      "a) Valorizo a adaptabilidade",

      "b) Vejo como oportunidade",

      "c) Aceito e enfrento",

      "d) Adapto as minhas metas",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: "30) O que te faz sentir mais realizado(a) no trabalho?",

    choices: [
      "a) Relações interpessoais significativas",

      "b) Contribuições para a empresa",

      "c) Superar desafios profissionais",

      "d) Alcançar metas de longo prazo",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: "31) Qual é a sua reação diante de conquistas pessoais?",

    choices: [
      "a) Comemoro junto com as pessoas próximas",

      "b) Vejo como uma inovação contínua",

      "c) Sinto uma sensação de resiliência e superação",

      "d) Reflito sobre como isso contribui para o meu futuro",
    ],

    answer: [0, 1, 2, 3],
  },

  {
    question: "32)O que mais te motiva a aprender algo novo?",

    choices: [
      "a) A oportunidade de compartilhar a experiência",

      "b) A busca por novas perspectivas",

      "c) O desafio de superar obstáculos práticos",

      "d) A contribuição para planos futuros",
    ],

    answer: [0, 1, 2, 3],
  },
];

let currentQuestion = 0;

var empathetic = 0;
var innovative = 0;
var resilient = 0;
var visionary = 0;

function showQuestion() {
  const questionElement = document.getElementById("question");
  const choicesElement = document.getElementById("choices");

  questionElement.textContent = questions[currentQuestion].question;
  choicesElement.innerHTML = "";

  questions[currentQuestion].choices.forEach((choice, index) => {
    const choiceElement = document.createElement("button");
    choiceElement.textContent = choice;
    choiceElement.value = index;
    choiceElement.onclick = checkAnswer;
    choicesElement.appendChild(choiceElement);
  });
}

function checkAnswer(e) {
  if (parseInt(e.target.value) === questions[currentQuestion].answer[0]) {
    empathetic++;
  }

  if (parseInt(e.target.value) === questions[currentQuestion].answer[1]) {
    innovative++;
  }

  if (parseInt(e.target.value) === questions[currentQuestion].answer[2]) {
    resilient++;
  }

  if (parseInt(e.target.value) === questions[currentQuestion].answer[3]) {
    visionary++;
  }
  console.log(empathetic, innovative, resilient, visionary);

  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    alert("Quiz completed!");
  }
  const pontuacoes = {
    empatico: empathetic,
    inovador: innovative,
    resiliente: resilient,
    visionario: visionary,
  };

  let personalidadesIguais = [];

  for (const [personalidade1, pontuacao1] of Object.entries(pontuacoes)) {
    for (const [personalidade2, pontuacao2] of Object.entries(pontuacoes)) {
      if (
        personalidade1 !== personalidade2 &&
        pontuacao1 > 0 &&
        pontuacao1 === pontuacao2
      ) {
        personalidadesIguais.push(personalidade1, personalidade2);
      }
    }
  }
  //Quando personalidades tiverem a mesma quantidade
  if (personalidadesIguais.length > 0) {
    const personalidadeX = personalidadesIguais[0];
    const personalidadeY = personalidadesIguais[1];
    console.log(
      `Suas personalidades são ${personalidadeX} e ${personalidadeY}`
    );
  } else {
    console.log("Nenhuma personalidade com a mesma quantidade de pontos.");
  }
  for (const [personalidade, pontuacao] of Object.entries(pontuacoes)) {
    //Quando algúem marcar 100% do questionário sendo a mesma opção
    //Esse IF funciona!!!
    if (pontuacao == 32) {
      personalidadeDominante = personalidade;
      console.log(`Você é ${personalidadeDominante}`);
      if (empathetic) {
        alert(
          "Uma pessoa que demonstra grande capacidade de compreender e se conectar emocionalmente com os outros."
        );
      } else if (innovative) {
        alert(
          " Indivíduos criativos, sempre buscando novas ideias e soluções para desafios."
        );
      }
      if (resilient) {
        alert(
          "Aqueles que lidam bem com adversidades, adaptando-se e superando obstáculos com determinação."
        );
      }
      if (visionary) {
        alert(
          "Pessoas com uma perspectiva de longo prazo e habilidade para enxergar além do presente, planejando e buscando objetivos futuros."
        );
      }
    }

    //Quando algúem marcar 50% do questionário sendo a mesma opção
    if (pontuacao == 16) {
      personalidadeDominante = personalidade;
      console.log(`Sua personalidade dominante é ${personalidadeDominante}`);
    }

    //Quando algúem marcar 25% do questionário sendo a mesma opção
    if (pontuacao == 8) {
      personalidadeDominante = personalidade;
      console.log(`Sua personalidade subDominante é ${personalidadeDominante}`);
    }
  }
}

// function executeQuiz() {
//   const pontuacoes = {
//     empatico: empathetic,
//     inovador: innovative,
//     resiliente: resilient,
//     visionario: visionary,
//   };

//   let personalidadesIguais = [];

//   for (const [personalidade1, pontuacao1] of Object.entries(pontuacoes)) {
//     for (const [personalidade2, pontuacao2] of Object.entries(pontuacoes)) {
//       if (
//         personalidade1 !== personalidade2 &&
//         pontuacao1 > 0 &&
//         pontuacao1 === pontuacao2
//       ) {
//         personalidadesIguais.push(personalidade1, personalidade2);
//       }
//     }
//   }
//   //Quando personalidades tiverem a mesma quantidade
//   if (personalidadesIguais.length > 0) {
//     const personalidadeX = personalidadesIguais[0];
//     const personalidadeY = personalidadesIguais[1];
//     console.log(
//       `Suas personalidades são ${personalidadeX} e ${personalidadeY}`
//     );
//   } else {
//     console.log("Nenhuma personalidade com a mesma quantidade de pontos.");
//   }
//   for (const [personalidade, pontuacao] of Object.entries(pontuacoes)) {
//     //Quando algúem marcar 100% do questionário sendo a mesma opção
//     if (pontuacao == 32) {
//       personalidadeDominante = personalidade;
//       console.log(`Você é ${personalidadeDominante}`);
//     }
//     //Quando algúem marcar 50% do questionário sendo a mesma opção
//     if (pontuacao == 16) {
//       personalidadeDominante = personalidade;
//       console.log(`Sua personalidade dominante é ${personalidadeDominante}`);
//     }
//     //Quando algúem marcar 25% do questionário sendo a mesma opção
//     if (pontuacao == 8) {
//       personalidadeDominante = personalidade;
//       console.log(`Sua personalidade subDominante é ${personalidadeDominante}`);
//     }
//   }
// }

// var finish = document.getElementById("finish");
// finish.addEventListener("click", executeQuiz);

showQuestion();
