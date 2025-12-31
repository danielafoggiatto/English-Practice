// ==========================================
// Banco de Frases - Português / Inglês
// ==========================================
// Adicione mais frases seguindo o formato:
// { pt: "frase em português", en: "phrase in english" }

const frases = [
    // Cumprimentos e apresentações
    { pt: "Olá, como você está?", en: "Hello, how are you?" },
    { pt: "Prazer em conhecê-lo", en: "Nice to meet you" },
    { pt: "Meu nome é João", en: "My name is John" },
    { pt: "De onde você é?", en: "Where are you from?" },
    { pt: "Eu sou do Brasil", en: "I am from Brazil" },

    // Frases do dia a dia
    { pt: "Que horas são?", en: "What time is it?" },
    { pt: "Onde fica o banheiro?", en: "Where is the bathroom?" },
    { pt: "Quanto custa isso?", en: "How much does this cost?" },
    { pt: "Eu não entendi", en: "I didn't understand" },
    { pt: "Pode repetir, por favor?", en: "Can you repeat, please?" },
    { pt: "Eu preciso de ajuda", en: "I need help" },
    { pt: "Com licença", en: "Excuse me" },
    { pt: "Desculpe pelo atraso", en: "Sorry for being late" },
    { pt: "Não tem problema", en: "No problem" },
    { pt: "Obrigado pela sua ajuda", en: "Thank you for your help" },

    // Trabalho
    { pt: "Eu trabalho como programador", en: "I work as a programmer" },
    { pt: "Tenho uma reunião às três horas", en: "I have a meeting at three o'clock" },
    { pt: "Preciso terminar esse projeto", en: "I need to finish this project" },
    { pt: "Vou enviar o relatório amanhã", en: "I will send the report tomorrow" },
    { pt: "Qual é o prazo de entrega?", en: "What is the deadline?" },

    // Restaurante e comida
    { pt: "Uma mesa para dois, por favor", en: "A table for two, please" },
    { pt: "Posso ver o cardápio?", en: "Can I see the menu?" },
    { pt: "Eu gostaria de pedir a conta", en: "I would like the bill, please" },
    { pt: "A comida estava deliciosa", en: "The food was delicious" },
    { pt: "Eu sou alérgico a amendoim", en: "I am allergic to peanuts" },

    // Viagem
    { pt: "Onde fica a estação de trem?", en: "Where is the train station?" },
    { pt: "Preciso de um táxi", en: "I need a taxi" },
    { pt: "Quanto tempo leva para chegar?", en: "How long does it take to get there?" },
    { pt: "Meu voo foi cancelado", en: "My flight was cancelled" },
    { pt: "Perdi minha bagagem", en: "I lost my luggage" },

    // Conversação casual
    { pt: "O que você faz nos fins de semana?", en: "What do you do on weekends?" },
    { pt: "Eu gosto de assistir filmes", en: "I like to watch movies" },
    { pt: "Qual é o seu filme favorito?", en: "What is your favorite movie?" },
    { pt: "Você já viajou para o exterior?", en: "Have you ever traveled abroad?" },
    { pt: "Eu estou aprendendo inglês", en: "I am learning English" },

    // Clima
    { pt: "Como está o tempo hoje?", en: "How is the weather today?" },
    { pt: "Está muito quente hoje", en: "It is very hot today" },
    { pt: "Parece que vai chover", en: "It looks like it's going to rain" },
    { pt: "Eu esqueci meu guarda-chuva", en: "I forgot my umbrella" },

    // Tecnologia
    { pt: "Meu celular está sem bateria", en: "My phone is out of battery" },
    { pt: "Qual é a senha do wifi?", en: "What is the wifi password?" },
    { pt: "O site não está funcionando", en: "The website is not working" },
    { pt: "Preciso carregar meu notebook", en: "I need to charge my laptop" },

    // Sentimentos e opiniões
    { pt: "Eu estou muito cansado hoje", en: "I am very tired today" },
    { pt: "Isso é muito interessante", en: "This is very interesting" },
    { pt: "Eu concordo com você", en: "I agree with you" },
    { pt: "Eu não tenho certeza sobre isso", en: "I am not sure about that" },
    { pt: "Isso faz sentido", en: "That makes sense" },

    // Pedidos e sugestões
    { pt: "Você pode me ajudar com isso?", en: "Can you help me with this?" },
    { pt: "Vamos almoçar juntos?", en: "Shall we have lunch together?" },
    { pt: "O que você acha?", en: "What do you think?" },
    { pt: "Eu sugiro que a gente espere", en: "I suggest we wait" },
    { pt: "Por favor, me avise quando chegar", en: "Please let me know when you arrive" },

    // Frases úteis
    { pt: "Eu entendo um pouco de inglês", en: "I understand a little English" },
    { pt: "Você fala português?", en: "Do you speak Portuguese?" },
    { pt: "Pode falar mais devagar?", en: "Can you speak more slowly?" },
    { pt: "Como se diz isso em inglês?", en: "How do you say this in English?" },
    { pt: "Eu estou tentando melhorar meu inglês", en: "I am trying to improve my English" },

    // Compras
    { pt: "Estou apenas olhando", en: "I am just looking" },
    { pt: "Você tem isso em outro tamanho?", en: "Do you have this in another size?" },
    { pt: "Posso pagar com cartão?", en: "Can I pay with card?" },
    { pt: "Isso está em promoção?", en: "Is this on sale?" },
    { pt: "Onde posso encontrar sapatos?", en: "Where can I find shoes?" },

    // Saúde
    { pt: "Eu não estou me sentindo bem", en: "I am not feeling well" },
    { pt: "Preciso ir ao médico", en: "I need to see a doctor" },
    { pt: "Estou com dor de cabeça", en: "I have a headache" },
    { pt: "Onde fica a farmácia mais próxima?", en: "Where is the nearest pharmacy?" },

    // Relacionamentos
    { pt: "Há quanto tempo vocês estão juntos?", en: "How long have you been together?" },
    { pt: "Ela é minha melhor amiga", en: "She is my best friend" },
    { pt: "Nós nos conhecemos na faculdade", en: "We met in college" },
    { pt: "Eu sinto sua falta", en: "I miss you" },

    // Planos futuros
    { pt: "O que você vai fazer amanhã?", en: "What are you going to do tomorrow?" },
    { pt: "Eu pretendo viajar no próximo mês", en: "I plan to travel next month" },
    { pt: "Estamos planejando uma festa", en: "We are planning a party" },
    { pt: "Meu sonho é morar no exterior", en: "My dream is to live abroad" },

    // Expressões idiomáticas
    { pt: "Melhor prevenir do que remediar", en: "Better safe than sorry" },
    { pt: "Custou os olhos da cara", en: "It cost an arm and a leg" },
    { pt: "Está chovendo canivetes", en: "It's raining cats and dogs" },
    { pt: "Vou pensar no seu caso", en: "I will think about it" },
    { pt: "Vamos manter contato", en: "Let's keep in touch" },

    // ==========================================
    // Frases coloquiais do dia a dia brasileiro
    // ==========================================

    // Confirmações e reações
    { pt: "Eu entendi", en: "I got it" },
    { pt: "É verdade", en: "That's true" },
    { pt: "Não é fácil", en: "It's not easy" },
    { pt: "Eu não estou interessado nisso", en: "I'm not interested in that" },
    { pt: "Faz sentido", en: "It makes sense" },
    { pt: "Pode ser", en: "Maybe" },
    { pt: "Acho que sim", en: "I think so" },
    { pt: "Acho que não", en: "I don't think so" },
    { pt: "Com certeza", en: "For sure" },
    { pt: "Sem dúvida", en: "No doubt" },
    { pt: "Exatamente", en: "Exactly" },
    { pt: "É isso aí", en: "That's it" },
    { pt: "Isso mesmo", en: "That's right" },
    { pt: "Claro que sim", en: "Of course" },
    { pt: "Claro que não", en: "Of course not" },

    // Expressões de sentimento
    { pt: "Estou com preguiça", en: "I'm feeling lazy" },
    { pt: "Estou com fome", en: "I'm hungry" },
    { pt: "Estou com sede", en: "I'm thirsty" },
    { pt: "Estou com sono", en: "I'm sleepy" },
    { pt: "Estou com frio", en: "I'm cold" },
    { pt: "Estou com calor", en: "I'm hot" },
    { pt: "Estou entediado", en: "I'm bored" },
    { pt: "Estou animado", en: "I'm excited" },
    { pt: "Estou preocupado", en: "I'm worried" },
    { pt: "Estou nervoso", en: "I'm nervous" },
    { pt: "Estou estressado", en: "I'm stressed" },
    { pt: "Estou com pressa", en: "I'm in a hurry" },
    { pt: "Estou ocupado agora", en: "I'm busy right now" },
    { pt: "Estou de saco cheio", en: "I'm fed up" },

    // Frases do cotidiano
    { pt: "Deixa pra lá", en: "Never mind" },
    { pt: "Tanto faz", en: "Whatever" },
    { pt: "Não importa", en: "It doesn't matter" },
    { pt: "Depende", en: "It depends" },
    { pt: "Sei lá", en: "I don't know" },
    { pt: "Quem sabe", en: "Who knows" },
    { pt: "Espera aí", en: "Wait a minute" },
    { pt: "Já volto", en: "I'll be right back" },
    { pt: "Estou indo", en: "I'm on my way" },
    { pt: "Cheguei", en: "I'm here" },
    { pt: "Vou embora", en: "I'm leaving" },
    { pt: "Até mais", en: "See you later" },
    { pt: "Até amanhã", en: "See you tomorrow" },
    { pt: "A gente se vê", en: "See you around" },
    { pt: "Boa sorte", en: "Good luck" },
    { pt: "Se cuida", en: "Take care" },

    // Perguntas comuns
    { pt: "O que aconteceu?", en: "What happened?" },
    { pt: "Como assim?", en: "What do you mean?" },
    { pt: "Por quê?", en: "Why?" },
    { pt: "Pra quê?", en: "What for?" },
    { pt: "E aí?", en: "What's up?" },
    { pt: "Tudo bem?", en: "Are you okay?" },
    { pt: "Você está bem?", en: "Are you alright?" },
    { pt: "O que você está fazendo?", en: "What are you doing?" },
    { pt: "Onde você estava?", en: "Where were you?" },
    { pt: "Você tem certeza?", en: "Are you sure?" },
    { pt: "Está falando sério?", en: "Are you serious?" },
    { pt: "Você está brincando?", en: "Are you kidding?" },
    { pt: "Posso te perguntar uma coisa?", en: "Can I ask you something?" },
    { pt: "Você se importa?", en: "Do you mind?" },

    // Opiniões e reações
    { pt: "Que legal!", en: "That's cool!" },
    { pt: "Que chato!", en: "That's annoying!" },
    { pt: "Que pena!", en: "What a shame!" },
    { pt: "Que bom!", en: "That's great!" },
    { pt: "Que estranho!", en: "That's weird!" },
    { pt: "Que difícil!", en: "That's hard!" },
    { pt: "Incrível!", en: "Amazing!" },
    { pt: "Sério?", en: "Really?" },
    { pt: "Nossa!", en: "Wow!" },
    { pt: "Não acredito!", en: "I can't believe it!" },
    { pt: "Que absurdo!", en: "That's outrageous!" },
    { pt: "Isso é ridículo", en: "That's ridiculous" },
    { pt: "Isso é injusto", en: "That's unfair" },

    // Pedidos e respostas
    { pt: "Me dá um minuto", en: "Give me a minute" },
    { pt: "Pode deixar", en: "Leave it to me" },
    { pt: "Deixa comigo", en: "I'll handle it" },
    { pt: "Não se preocupe", en: "Don't worry" },
    { pt: "Fica tranquilo", en: "Take it easy" },
    { pt: "Relaxa", en: "Relax" },
    { pt: "Calma", en: "Calm down" },
    { pt: "Para com isso", en: "Stop it" },
    { pt: "Esquece isso", en: "Forget about it" },
    { pt: "Me desculpa", en: "I'm sorry" },
    { pt: "Foi mal", en: "My bad" },
    { pt: "Não foi minha culpa", en: "It wasn't my fault" },
    { pt: "A culpa é minha", en: "It's my fault" },

    // Conversação casual
    { pt: "Falando nisso", en: "Speaking of which" },
    { pt: "Por falar nisso", en: "By the way" },
    { pt: "Mudando de assunto", en: "Changing the subject" },
    { pt: "Na verdade", en: "Actually" },
    { pt: "Para ser honesto", en: "To be honest" },
    { pt: "Entre nós", en: "Between us" },
    { pt: "Pelo que eu sei", en: "As far as I know" },
    { pt: "Se não me engano", en: "If I'm not mistaken" },
    { pt: "Pelo visto", en: "Apparently" },
    { pt: "De qualquer forma", en: "Anyway" },
    { pt: "No final das contas", en: "At the end of the day" },
    { pt: "Resumindo", en: "In short" },

    // Concordância e discordância
    { pt: "Eu também", en: "Me too" },
    { pt: "Eu também não", en: "Me neither" },
    { pt: "Eu discordo", en: "I disagree" },
    { pt: "Não necessariamente", en: "Not necessarily" },
    { pt: "Mais ou menos", en: "More or less" },
    { pt: "Você tem razão", en: "You're right" },
    { pt: "Você está errado", en: "You're wrong" },
    { pt: "Eu estava errado", en: "I was wrong" },
    { pt: "Eu mudei de ideia", en: "I changed my mind" },

    // Tempo e frequência
    { pt: "De vez em quando", en: "Once in a while" },
    { pt: "Às vezes", en: "Sometimes" },
    { pt: "Sempre", en: "Always" },
    { pt: "Nunca", en: "Never" },
    { pt: "Quase nunca", en: "Hardly ever" },
    { pt: "Na maioria das vezes", en: "Most of the time" },
    { pt: "Toda hora", en: "All the time" },
    { pt: "Agora mesmo", en: "Right now" },
    { pt: "Daqui a pouco", en: "In a little while" },
    { pt: "Outro dia", en: "The other day" },
    { pt: "Semana passada", en: "Last week" },
    { pt: "Mês que vem", en: "Next month" },

    // Situações do dia a dia
    { pt: "Perdi a hora", en: "I overslept" },
    { pt: "O trânsito estava horrível", en: "The traffic was terrible" },
    { pt: "Estou atrasado", en: "I'm running late" },
    { pt: "Acabou a luz", en: "The power went out" },
    { pt: "A internet caiu", en: "The internet is down" },
    { pt: "Meu alarme não tocou", en: "My alarm didn't go off" },
    { pt: "Esqueci em casa", en: "I forgot it at home" },
    { pt: "Não deu tempo", en: "I didn't have time" },
    { pt: "Não deu certo", en: "It didn't work out" },
    { pt: "Deu tudo certo", en: "Everything worked out" },

    // Frases úteis para conversas
    { pt: "Você me entendeu?", en: "Did you understand me?" },
    { pt: "Eu não ouvi direito", en: "I didn't hear you properly" },
    { pt: "Pode falar de novo?", en: "Can you say that again?" },
    { pt: "O que você quis dizer?", en: "What did you mean?" },
    { pt: "Deixa eu pensar", en: "Let me think" },
    { pt: "Boa pergunta", en: "Good question" },
    { pt: "Não sei explicar", en: "I can't explain it" },
    { pt: "É complicado", en: "It's complicated" },
    { pt: "É uma longa história", en: "It's a long story" },
    { pt: "Vou te contar depois", en: "I'll tell you later" },

    // Expressões informais
    { pt: "Tô ligado", en: "I know" },
    { pt: "Beleza", en: "Alright" },
    { pt: "Valeu", en: "Thanks" },
    { pt: "Falou", en: "Alright then" },
    { pt: "Tá bom", en: "Okay" },
    { pt: "Fechou", en: "Deal" },
    { pt: "Partiu", en: "Let's go" },
    { pt: "Bora", en: "Let's do it" },
    { pt: "Caramba!", en: "Damn!" },
    { pt: "Puxa vida!", en: "Gosh!" },
    { pt: "Meu Deus!", en: "Oh my God!" },
    { pt: "Ai meu Deus!", en: "Oh my goodness!" }
];
