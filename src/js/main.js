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

  // Comparar cada personalidade com todas as outras para encontrar aquelas com a mesma pontuação
  for (const [personalidade1, pontuacao1] of Object.entries(pontuacoes)) {
    for (const [personalidade2, pontuacao2] of Object.entries(pontuacoes)) {
      if (
        personalidade1 !== personalidade2 && // Garante que não estamos comparando a mesma personalidade
        pontuacao1 > 0 && // Verifica se a pontuação não é zero (foi escolhida pelo menos uma vez)
        pontuacao1 === pontuacao2 && // Verifica se as pontuações são iguais
        !personalidadesIguais.includes(personalidade1) && // Verifica se a personalidade já não está no array
        !personalidadesIguais.includes(personalidade2)
      ) {
        personalidadesIguais.push(personalidade1, personalidade2);
      }
    }
  }

  if (personalidadesIguais.length > 0) {
    let personalidadesString = "Suas personalidades são ";
    for (let i = 0; i < personalidadesIguais.length; i++) {
      personalidadesString += personalidadesIguais[i];
      if (i < personalidadesIguais.length - 1) {
        personalidadesString += ", "; // Adiciona uma vírgula entre as personalidades, exceto na última
      }
    }
    console.log(personalidadesString);
  }

  if (personalidadesIguais.length > 0) {
    let personalidadesString = "Suas personalidades são ";
    for (let i = 0; i < personalidadesIguais.length; i++) {
      personalidadesString += personalidadesIguais[i];
      if (i < personalidadesIguais.length - 1) {
        personalidadesString += ", "; // Adiciona uma vírgula entre as personalidades, exceto na última
      }
    }
    console.log(personalidadesString);
  }

  for (const [personalidade, pontuacao] of Object.entries(pontuacoes)) {
    //Quando algúem marcar 100% do questionário sendo a mesma opção
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

    //Quando algúem marcar 75% ou mais do questionário sendo a mesma opção
    if (pontuacao >= 24) {
      personalidadeDominante = personalidade;
      console.log(`Sua personalidade DOMINANTE é ${personalidadeDominante}`);
    }
    //Quando algúem marcar 50% do questionário sendo a mesma opção
    if (pontuacao > 16 && pontuacao < 24) {
      personalidadeDominante = personalidade;
      console.log(`Sua personalidade dominante é ${personalidadeDominante}`);
    }

    //Quando algúem marcar 25% do questionário sendo a mesma opção
    if (pontuacao > 8 && pontuacao < 16) {
      personalidadeDominante = personalidade;
      console.log(`Sua personalidade subDominante é ${personalidadeDominante}`);
    }
  }
}

showQuestion();
