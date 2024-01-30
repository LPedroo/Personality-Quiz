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
    answer: 1,
  },
  {
    question: "2) Como você lida com o estresse?",
    choices: [
      "a) Procurando apoio emocional",

      "b) Buscando soluções inovadoras",

      "c) Enfrentando desafios com determinação",

      "d) Mantendo o foco em objetivos futuros",
    ],
    answer: 1,
  },
  {
    question: "3) Qual atividade você prefere em seu tempo livre?",
    choices: [
      "a) Envolver-se em conversas profundas",

      "b) Explorar novas ideias e projetos",

      "c) Superar desafios físicos ou mentais",

      "d) Planejar o futuro e definir metas",
    ],
    answer: 1,
  },
  {
    question: "4) Como você reage a mudanças inesperadas?",
    choices: [
      "a) Busco compreender as emoções envolvidas",

      "b) Vejo oportunidades de inovação",

      "c) Aceito o desafio e me adapto",

      "d) Avalio como isso impactará meus objetivos futuros",
    ],
    answer: 1,
  },
  {
    question: "5)Qual é o seu maior medo?",
    choices: [
      "a) Perder conexões emocionais importantes",

      "b) Ficar preso na mesmice sem inovação",

      "c) Não conseguir superar desafios",

      "d) Não atingir as metas de longo prazo",
    ],
    answer: 1,
  },
  {
    question: "6)O que mais motiva suas decisões?",
    choices: [
      "a) Emoções e relações interpessoais",

      "b) Oportunidades para inovar",

      "c) Vontade de superar obstáculos",

      "d) Alcançar metas de longo prazo",
    ],
    answer: 1,
  },
  {
    question: "7) Como você prefere resolver conflitos?",
    choices: [
      "a) Priorizando a compreensão emocional",

      "b) Propondo soluções criativas",

      "c) Lidando com resiliência e paciência",

      "d) Considerando o impacto a longo prazo",
    ],
    answer: 1,
  },
  {
    question: "8) O que te faz sentir mais realizado?",
    choices: [
      "a) Relações interpessoais significativas",

      "b) Contribuições inovadoras",

      "c) Superar desafios pessoais",

      "d) Alcançar metas de longo prazo",
    ],
    answer: 1,
  },
  {
    question: " 9) Qual é a sua abordagem para enfrentar problemas?",
    choices: [
      "a) Buscar apoio emocional",

      "b) Encontrar soluções inovadoras",

      "c) Encarar com resiliência",

      "d) Planejar estrategicamente a longo prazo",
    ],
    answer: 1,
  },
  {
    question: "10) O que você valoriza mais em um projeto?",
    choices: [
      "a) A conexão emocional que ele cria",

      "b) A inovação e originalidade",

      "c) A capacidade de superar desafios",

      "d) A contribuição para objetivos futuros",
    ],
    answer: 1,
  },
  {
    question: "11) Como você se sente em relação a grandes mudanças na vida?",
    choices: [
      "a) Emocionalmente conectado(a)",

      "b) Animado/a com novas possibilidades",

      "c) Determinado/a a enfrentar desafios",

      "d) Focado/a em objetivos de longo prazo",
    ],
    answer: 1,
  },
  {
    question: "12) O que mais te atrai em uma história ou filme?",
    choices: [
      "a) Relacionamentos emocionais complexos",

      "b) Elementos inovadores e surpreendentes",

      "c) Personagens resilientes em situações difíceis",

      "d) Narrativas que exploram o futuro e metas",
    ],
    answer: 1,
  },
  {
    question: "13) Qual característica você mais valoriza em um amigo?",
    choices: [
      "a) Empatia e compreensão",

      "b) Criatividade e originalidade",

      "c) Resiliência e coragem",

      "d) Compartilhamento de metas de longo prazo",
    ],
    answer: 1,
  },
  {
    question: "14) Como você prefere aprender algo novo?",
    choices: [
      "a) Com experiências emocionais e relacionais",

      "b) Buscando abordagens inovadoras",

      "c) Superando desafios práticos",

      "d) Com um foco a longo prazo",
    ],
    answer: 1,
  },
  {
    question: "15) O que te faz sentir mais conectado/a ao mundo?",
    choices: [
      "a) Relações interpessoais significativas",

      "b) Descobrir novas ideias e conceitos",

      "c) Superar desafios pessoais",

      "d) Contribuir para metas de longo prazo",
    ],
    answer: 1,
  },
  {
    question: "16) Como você define sucesso pessoal?",
    choices: [
      "a) Ter relacionamentos felizes e saudáveis",

      "b) Alcançar objetivos inovadores",

      "c) Superar desafios e adversidades",

      "d) Cumprir metas de longo prazo",
    ],
    answer: 1,
  },
  {
    question: "17) O que mais te inspira em uma obra de arte?",
    choices: [
      "a) Expressões emocionais profundas",

      "b) Elementos criativos e originais",

      "c) Mensagens de resiliência e superação",

      "d) Representações de visões de futuro",
    ],
    answer: 1,
  },
  {
    question: "18) O que você busca em uma carreira profissional?",
    choices: [
      "a) Ambiente de trabalho com relações sólidas",

      "b) Oportunidades para inovação constante",

      "c) Desafios que exigem resiliência",

      "d) Contribuição para metas a longo prazo",
    ],
    answer: 1,
  },
  {
    question: "19) Como você prefere passar suas férias?",
    choices: [
      "a) Com amigos e familiares próximos",

      "b) Explorando novas ideias e lugares",

      "c) Envolvido/a em atividades desafiadoras",

      "d) Planejando para o futuro",
    ],
    answer: 1,
  },
  {
    question: "20) O que você mais valoriza em uma equipe de trabalho?",
    choices: [
      "a) A coesão e empatia entre os membros",

      "b) A capacidade de inovação e criatividade",

      "c) A resiliência diante de desafios",

      "d) A visão compartilhada de metas a longo prazo",
    ],
    answer: 1,
  },
  {
    question: "21) Como você lida com feedback construtivo?",
    choices: [
      "a) Valorizo a compreensão emocional envolvida",

      "b) Vejo como uma oportunidade para inovar",

      "c) Aceito e busco melhorar com resiliência",

      "d) Considero no contexto de objetivos futuros",
    ],
    answer: 1,
  },
  {
    question: "22) O que mais te atrai em um hobby?",
    choices: [
      "a) O aspecto social e emocional",

      "b) A oportunidade de experimentar coisas novas",

      "c) O desafio e a superação pessoal",

      "d) A conexão com objetivos de longo prazo",
    ],
    answer: 1,
  },
  {
    question: "23) Como você aborda a resolução de problemas cotidianos?",
    choices: [
      "a) Com base na compreensão emocional",

      "b) Buscando soluções inovadoras",

      "c) Lidando com resiliência e paciência",

      "d) Considerando o impacto a longo prazo",
    ],
    answer: 1,
  },
  {
    question: "24) O que mais te intriga em uma história de vida?",
    choices: [
      "a) Relacionamentos interpessoais significativos",

      "b) Momentos inovadores e decisivos",

      "c) A resiliência diante de desafios",

      "d) A jornada em direção a metas de longo prazo",
    ],
    answer: 1,
  },
  {
    question: "25) Como você se sente em relação a regras e estruturas?",
    choices: [
      "a) Valorizo a flexibilidade e as conexões emocionais",

      "b) Vejo como oportunidades para inovar",

      "c) Aceito e adapto-me com resiliência",

      "d) Considero em relação aos objetivos futuros",
    ],
    answer: 1,
  },
  {
    question: "26) O que mais te fascina em uma conversa?",
    choices: [
      "a) A profundidade das emoções compartilhadas",

      "b) As ideias inovadoras e surpreendentes",

      "c) A resiliência expressa diante de desafios",

      "d) A discussão de metas e planos futuros",
    ],
    answer: 1,
  },
  {
    question: "27) Como você escolhe seu próximo desafio?",
    choices: [
      "a) Considerando o impacto emocional",

      "b) Buscando algo inovador e único",

      "c) Optando por algo que exija resiliência",

      "d) Avaliando em relação a metas de longo prazo",
    ],
    answer: 1,
  },
  {
    question: "28) O que mais te atrai em um livro?",
    choices: [
      "a) A profundidade dos personagens e relações",

      "b) A originalidade e criatividade na narrativa",

      "c) A superação de obstáculos pelos protagonistas",

      "d) A exploração de visões de futuro",
    ],
    answer: 1,
  },
  {
    question: "29)Como você se sente em relação a mudanças de planos?",
    choices: [
      "a) Valorizo a adaptabilidade emocional",

      "b) Vejo como oportunidade para inovação",

      "c) Aceito e enfrento com resiliência",

      "d) Considero em relação aos objetivos futuros",
    ],
    answer: 1,
  },
  {
    question: "30) O que te faz sentir mais realizado(a) no trabalho?",
    choices: [
      "a) Relações interpessoais significativas",

      "b) Contribuições inovadoras para a empresa",

      "c) Superar desafios profissionais",

      "d) Alcançar metas de longo prazo",
    ],
    answer: 1,
  },
  {
    question: "31) Qual é a sua reação diante de conquistas pessoais?",
    choices: [
      "a) Comemoro junto com as pessoas próximas",

      "b) Vejo como uma oportunidade para inovação contínua",

      "c) Sinto uma sensação de resiliência e superação",

      "d) Reflito sobre como isso contribui para meus objetivos futuros",
    ],
    answer: 1,
  },
  {
    question: "32)O que mais te motiva a aprender algo novo?",
    choices: [
      "a) A oportunidade de compartilhar a experiência emocional",

      "b) A busca por novas e inovadoras perspectivas",

      "c) O desafio de superar obstáculos práticos",

      "d) A contribuição para metas e planos de longo prazo",
    ],
    answer: 1,
  },
];

let currentQuestion = 0;

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
  if (parseInt(e.target.value) === questions[currentQuestion].answer) {
    alert("Correct!");
  } else {
    alert("Incorrect.");
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    alert("Quiz completed!");
  }
}

showQuestion();
