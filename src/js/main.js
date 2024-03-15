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
    question: "5) Qual é o seu maior medo?",

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
    question: "29) Como você se sente em relação a mudanças de planos?",

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
    question: "32) O que mais te motiva a aprender algo novo?",

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

var inAnswer = document.getElementById("inAnswer");
var inSummary = document.getElementById("inSummary");
//Efeito de digitação na frase
var string = "Seja Bem Vindo(a) ao nosso Quiz de Personalidade";
var array = string.split("");
var timer;

function frameLooper() {
  if (array.length > 0) {
    document.getElementById("textEffect").textContent += array.shift();
  } else {
    clearTimeout(timer);
  }
  loopTimer = setTimeout("frameLooper()", 70);
}
frameLooper();

function checkForm() {
  var inNome = document.getElementById("inNome");
  var inEmail = document.getElementById("inEmail");

  var nome = inNome.value;
  var email = inEmail.value;

  if (nome == "") {
    alert("Por favor, informe seu nome para prosseguir.");
    inNome.focus();
    return;
  }

  if (email == "" || !email.includes("@")) {
    alert("Por favor, informe seu email corretamente.");
    inEmail.focus();
    return;
  }

  var nomeUsuario = { nome: nome };
  var emailUsuario = { email: email };

  localStorage.setItem("Nome", nome);
  localStorage.setItem("Email", email);

  var form = document.getElementsByClassName("form");
  for (let i = 0; i < form.length; i++) {
    form[i].style.display = "none";
  }

  var textTyped = document.getElementsByClassName("textTyped");
  for (let i = 0; i < textTyped.length; i++) {
    textTyped[i].style.display = "none";
  }

  showQuestion();
}

var inSubmit = document.getElementById("inSubmit");
inSubmit.addEventListener("click", checkForm);

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

  if (currentQuestion < questions.length) {
    showQuestion();
  }

  var finishButton = document.getElementsByClassName("finishButton");

  if (currentQuestion == 32) {
    for (let i = 0; i < finishButton.length; i++) {
      finishButton[i].style.display = "initial";
      finishButton[i].style.background = "#0b66c3 !important";
      finishButton[i].style.padding = "2%";
      finishButton[i].style.border = "2px solid rgba(0, 0, 0, 0.2)";
      finishButton[i].style.overflowY = "auto";
      finishButton[i].style.overflowX = "hidden";
      finishButton[i].style.position = "relative";
      finishButton[i].style.borderRadius = "18px";
      finishButton[i].style.boxShadow = "0 5px 10px rgba(0, 0, 0, 0.2)";
      finishButton[i].style.margin = "5% 0 0 0";
      finishButton[i].style.width = "35%";
      finishButton[i].style.marginLeft = "33.33%";
    }
  }
  //Chama a função para verificar a personalidade
  ifsVerification();
}

function ifsVerification() {
  var nomeUsuario = localStorage.getItem("Nome");
  if (empathetic === 32) {
    inAnswer.textContent = `Parabéns ${nomeUsuario}! Sua personalidade é Empático`;
    inSummary.textContent = ``;
  } else if (innovative === 32) {
    inAnswer.textContent = `Parabéns ${nomeUsuario}!\n Sua personalidade é Inovador`;
    inSummary.textContent = ``;
  } else if (resilient === 32) {
    inAnswer.textContent = `Parabéns ${nomeUsuario}!\n Sua personalidade é Resiliente`;
    inSummary.textContent = ``;
  } else if (visionary === 32) {
    inAnswer.textContent = `Parabéns ${nomeUsuario}!\n Sua personalidade é Visionário`;
    inSummary.textContent = ``;
  } else if (empathetic + innovative > resilient + visionary) {
    inAnswer.textContent = `Parabéns ${nomeUsuario}!\n Sua personalidade é Empático com Inovador`;
    inSummary.textContent = `Você seria aquele tipo de pessoa que não só entende as emoções e perspectivas dos outros, mas também usa essa compreensão para encontrar soluções inovadoras que beneficiem a todos. Sua empatia serviria como uma fonte de inspiração e motivação para suas ideias inovadoras, impulsionando você a criar soluções que sejam verdadeiramente significativas e impactantes. Além disso, sua capacidade de inovar seria amplificada pela sua empatia, pois você estaria constantemente considerando como suas ideias afetariam as pessoas ao seu redor e procuraria maneiras de torná-las inclusivas e benéficas para todos.`;
  } else if (empathetic + resilient > innovative + visionary) {
    inAnswer.textContent = `Parabéns ${nomeUsuario}!\n Sua personalidade é Empático com Resiliente`;
    inSummary.textContent = `Sua empatia permitiria que você entendesse profundamente as emoções e as experiências dos outros, o que o tornaria um ótimo ouvinte e um apoio confiável para aqueles ao seu redor. Você seria capaz de oferecer conforto, compreensão e apoio genuíno quando necessário, sendo uma fonte de força e compaixão para os outros em tempos difíceis.
    Além disso, sua resiliência significaria que você não apenas seria capaz de lidar com suas próprias lutas e desafios pessoais, mas também seria capaz de ajudar os outros a encontrar sua própria força interior e superar obstáculos. Você veria as dificuldades como oportunidades de crescimento e aprendizado, e sua capacidade de se adaptar e se recuperar rapidamente o tornaria uma fonte de inspiração para os outros.
    `;
  } else if (empathetic + visionary > resilient + innovative) {
    inAnswer.textContent = `Parabéns ${nomeUsuario}!\n Sua personalidade é Empático com Visionário`;
    inSummary.textContent = `Sua empatia seria a base de sua visão, permitindo que você enxergasse além das situações presentes e entendesse como suas ações poderiam afetar as pessoas ao seu redor. Você seria capaz de se colocar no lugar dos outros e considerar suas perspectivas ao planejar e buscar objetivos de longo prazo.
    Além disso, sua visão de futuro alimentaria sua empatia, inspirando-o a buscar soluções inovadoras e inclusivas que beneficiem não apenas o presente, mas também o futuro das pessoas. Você seria capaz de imaginar um mundo melhor e trabalhar ativamente para tornar essa visão uma realidade, sempre mantendo em mente o impacto humano de suas escolhas e ações.
    `;
  } else if (innovative + resilient > empathetic + visionary) {
    inAnswer.textContent = `Parabéns ${nomeUsuario}!\n Sua personalidade é Inovador com Resiliente`;
    inSummary.textContent = `Sua natureza inovadora significaria que você está sempre procurando por soluções criativas e originais para os problemas que enfrenta. Você não se contenta com o status quo e está sempre buscando maneiras de melhorar e avançar, mesmo quando as coisas ficam difíceis.
    Além disso, sua resiliência seria a força motriz por trás de sua inovação, permitindo que você enfrente falhas e contratempos com coragem e determinação. Você veria os desafios como oportunidades de aprendizado e crescimento, e estaria disposto a persistir e se adaptar até encontrar uma solução.
    
    `;
  } else if (innovative + visionary > empathetic + resilient) {
    inAnswer.textContent = `Parabéns ${nomeUsuario}!\n Sua personalidade é Inovador com Visionário`;
    inSummary.textContent = `Como inovador, você estaria sempre na vanguarda, explorando novas possibilidades e desenvolvendo soluções criativas para os desafios de hoje. Sua mente está constantemente gerando ideias frescas e disruptivas, impulsionando a mudança e a evolução em diversos campos.
    Com a visão de futuro, você vai além da inovação imediata e enxerga o quadro completo. Você tem uma compreensão clara de como suas ideias podem impactar o mundo ao longo do tempo e está sempre pensando adiante, imaginando um futuro melhor e mais promissor.
    
    `;
  } else if (resilient + visionary > empathetic + innovative) {
    inAnswer.textContent = `Parabéns ${nomeUsuario}!\n Sua personalidade é Resiliente com Visionário`;
    inSummary.textContent = `Sua resiliência seria uma fonte de força interior que o capacitaria a superar obstáculos e adversidades com persistência e otimismo. Mesmo diante das dificuldades, você seria capaz de se adaptar, aprender e crescer, transformando desafios em oportunidades de desenvolvimento pessoal e profissional.
    Ao mesmo tempo, sua visão de futuro o impulsionaria a pensar além das circunstâncias presentes e a imaginar possibilidades emocionantes e transformadoras para o futuro. Você seria capaz de visualizar metas ambiciosas e inspiradoras e trabalhar incansavelmente para transformá-las em realidade, inspirando aqueles ao seu redor com sua determinação e visão.
    
    `;
  } else if (
    empathetic === 8 &&
    innovative === 8 &&
    resilient === 8 &&
    visionary === 8
  ) {
    inAnswer.textContent = `Parabéns ${nomeUsuario}! Sua personalidade`;
    inSummary.textContent = ``;
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

  setTimeout(() => {
    var secondContents = document.getElementsByClassName("secondContents");
    for (let i = 0; i < secondContents.length; i++) {
      secondContents[i].style.display = "block";
    }
  }, 2000);

  if (currentQuestion < 32) {
    confirm(
      "Tem certeza que deseja finalizar seu Quiz? \nEle ainda está incompleto :("
    );
    if (confirm) {
      location.reload();
    }
  }
});
