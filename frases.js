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
    { pt: "Ai meu Deus!", en: "Oh my goodness!" },

    // ==========================================
    // QA e Automação de Testes
    // ==========================================

    // Testes e bugs
    { pt: "Encontrei um bug na aplicação", en: "I found a bug in the application" },
    { pt: "Esse teste está falhando", en: "This test is failing" },
    { pt: "Todos os testes passaram", en: "All tests passed" },
    { pt: "Preciso investigar essa falha", en: "I need to investigate this failure" },
    { pt: "O teste está instável", en: "The test is flaky" },
    { pt: "Vou rodar os testes novamente", en: "I'll run the tests again" },
    { pt: "Os testes estão rodando no pipeline", en: "The tests are running in the pipeline" },
    { pt: "O teste deu timeout", en: "The test timed out" },
    { pt: "Preciso aumentar o timeout", en: "I need to increase the timeout" },
    { pt: "O locator não está funcionando", en: "The locator is not working" },

    // Automação com Playwright
    { pt: "Estou usando Playwright para automação", en: "I'm using Playwright for automation" },
    { pt: "Vou criar um novo teste automatizado", en: "I'll create a new automated test" },
    { pt: "O seletor precisa ser mais específico", en: "The selector needs to be more specific" },
    { pt: "Vou usar um data-testid para esse elemento", en: "I'll use a data-testid for this element" },
    { pt: "O teste roda em paralelo", en: "The test runs in parallel" },
    { pt: "Preciso esperar o elemento aparecer", en: "I need to wait for the element to appear" },
    { pt: "O Playwright tem auto-wait", en: "Playwright has auto-wait" },
    { pt: "Vou tirar um screenshot do erro", en: "I'll take a screenshot of the error" },
    { pt: "Estou gravando um trace do teste", en: "I'm recording a trace of the test" },
    { pt: "O teste funciona em todos os navegadores", en: "The test works on all browsers" },

    // Daily e reuniões
    { pt: "O que você fez ontem?", en: "What did you do yesterday?" },
    { pt: "No que você vai trabalhar hoje?", en: "What are you going to work on today?" },
    { pt: "Você tem algum bloqueio?", en: "Do you have any blockers?" },
    { pt: "Preciso de acesso ao ambiente de staging", en: "I need access to the staging environment" },
    { pt: "Vou sincronizar com o time de desenvolvimento", en: "I'll sync with the development team" },
    { pt: "A daily vai começar em cinco minutos", en: "The daily will start in five minutes" },
    { pt: "Posso compartilhar minha tela?", en: "Can I share my screen?" },
    { pt: "Você está no mudo", en: "You're on mute" },
    { pt: "A conexão está ruim", en: "The connection is bad" },
    { pt: "Vou entrar na call agora", en: "I'll join the call now" },

    // Code review e PR
    { pt: "Abri um pull request", en: "I opened a pull request" },
    { pt: "Pode revisar meu código?", en: "Can you review my code?" },
    { pt: "Aprovei o PR", en: "I approved the PR" },
    { pt: "Tem alguns comentários no code review", en: "There are some comments on the code review" },
    { pt: "Vou fazer as alterações solicitadas", en: "I'll make the requested changes" },
    { pt: "O PR está pronto para merge", en: "The PR is ready to merge" },
    { pt: "Preciso resolver os conflitos", en: "I need to resolve the conflicts" },
    { pt: "Vou fazer um rebase na branch", en: "I'll rebase the branch" },
    { pt: "O build falhou no CI", en: "The build failed in CI" },
    { pt: "Os checks do GitHub passaram", en: "The GitHub checks passed" },

    // Bugs e debugging
    { pt: "Consegue reproduzir o bug?", en: "Can you reproduce the bug?" },
    { pt: "Quais são os passos para reproduzir?", en: "What are the steps to reproduce?" },
    { pt: "Qual é o comportamento esperado?", en: "What is the expected behavior?" },
    { pt: "O bug acontece só em produção", en: "The bug only happens in production" },
    { pt: "Vou verificar os logs", en: "I'll check the logs" },
    { pt: "Encontrei a causa raiz do problema", en: "I found the root cause of the problem" },
    { pt: "Era um erro de null pointer", en: "It was a null pointer error" },
    { pt: "O bug foi corrigido", en: "The bug has been fixed" },
    { pt: "Preciso retestar essa correção", en: "I need to retest this fix" },
    { pt: "Vou criar um ticket para esse bug", en: "I'll create a ticket for this bug" },

    // Sprint e planejamento
    { pt: "Quantos story points você estima?", en: "How many story points do you estimate?" },
    { pt: "Essa tarefa é muito grande", en: "This task is too big" },
    { pt: "Vamos quebrar em tarefas menores", en: "Let's break it down into smaller tasks" },
    { pt: "Qual é a prioridade dessa tarefa?", en: "What is the priority of this task?" },
    { pt: "Isso está no backlog", en: "That's in the backlog" },
    { pt: "A sprint termina na sexta-feira", en: "The sprint ends on Friday" },
    { pt: "Vamos adicionar isso na próxima sprint", en: "Let's add this to the next sprint" },
    { pt: "Temos uma retrospectiva hoje", en: "We have a retrospective today" },
    { pt: "A feature foi entregue", en: "The feature was delivered" },
    { pt: "Precisamos definir os critérios de aceite", en: "We need to define the acceptance criteria" },

    // Ambiente e infraestrutura
    { pt: "O ambiente de staging está fora do ar", en: "The staging environment is down" },
    { pt: "Preciso de uma nova variável de ambiente", en: "I need a new environment variable" },
    { pt: "O deploy foi feito com sucesso", en: "The deploy was successful" },
    { pt: "Houve um rollback em produção", en: "There was a rollback in production" },
    { pt: "O servidor está lento hoje", en: "The server is slow today" },
    { pt: "Preciso reiniciar o container", en: "I need to restart the container" },
    { pt: "O banco de dados está indisponível", en: "The database is unavailable" },
    { pt: "Vou limpar o cache", en: "I'll clear the cache" },
    { pt: "Os testes rodam em Docker", en: "The tests run in Docker" },
    { pt: "Preciso configurar o GitHub Actions", en: "I need to configure GitHub Actions" },

    // Comunicação técnica
    { pt: "Pode me explicar como funciona?", en: "Can you explain how it works?" },
    { pt: "Não entendi a lógica desse código", en: "I didn't understand the logic of this code" },
    { pt: "Esse código precisa de refatoração", en: "This code needs refactoring" },
    { pt: "Vou documentar esse processo", en: "I'll document this process" },
    { pt: "Onde está a documentação?", en: "Where is the documentation?" },
    { pt: "Vou atualizar o README", en: "I'll update the README" },
    { pt: "Tem um exemplo de como usar?", en: "Is there an example of how to use it?" },
    { pt: "Vou criar uma POC primeiro", en: "I'll create a POC first" },
    { pt: "Precisamos de mais cobertura de testes", en: "We need more test coverage" },
    { pt: "A cobertura está em oitenta por cento", en: "The coverage is at eighty percent" },

    // API e testes de integração
    { pt: "Vou testar a API", en: "I'll test the API" },
    { pt: "O endpoint está retornando erro 500", en: "The endpoint is returning error 500" },
    { pt: "A resposta da API está incorreta", en: "The API response is incorrect" },
    { pt: "Preciso mockar essa chamada externa", en: "I need to mock this external call" },
    { pt: "O teste de integração falhou", en: "The integration test failed" },
    { pt: "Vou verificar o payload da requisição", en: "I'll check the request payload" },
    { pt: "A autenticação está falhando", en: "The authentication is failing" },
    { pt: "O token expirou", en: "The token expired" },
    { pt: "Preciso de um novo token de acesso", en: "I need a new access token" },
    { pt: "A API está demorando muito para responder", en: "The API is taking too long to respond" },

    // Qualidade e boas práticas
    { pt: "Precisamos melhorar a qualidade do código", en: "We need to improve code quality" },
    { pt: "Vou adicionar validação de entrada", en: "I'll add input validation" },
    { pt: "Esse código tem um problema de segurança", en: "This code has a security issue" },
    { pt: "Devemos seguir as boas práticas", en: "We should follow best practices" },
    { pt: "O código está muito complexo", en: "The code is too complex" },
    { pt: "Vou simplificar essa lógica", en: "I'll simplify this logic" },
    { pt: "Precisamos de testes unitários", en: "We need unit tests" },
    { pt: "Vou escrever testes end-to-end", en: "I'll write end-to-end tests" },
    { pt: "O teste deve ser independente", en: "The test should be independent" },
    { pt: "Vou usar fixtures para os dados de teste", en: "I'll use fixtures for test data" }
,

    // ==========================================
    // Frases Espirituais (Vital Frosi)
    // ==========================================

    // Conceitos básicos
    { pt: "A alma é imortal", en: "The soul is immortal" },
    { pt: "Nós somos seres de luz", en: "We are beings of light" },
    { pt: "Tudo é frequência", en: "Everything is frequency" },
    { pt: "A luz cria, a escuridão destrói", en: "Light creates, darkness destroys" },
    { pt: "Você é um fractal da Fonte", en: "You are a fractal of the Source" },
    { pt: "A consciência nunca morre", en: "Consciousness never dies" },
    { pt: "Estamos todos conectados", en: "We are all connected" },
    { pt: "O amor incondicional cura tudo", en: "Unconditional love heals everything" },
    { pt: "A compaixão eleva a frequência", en: "Compassion raises the frequency" },
    { pt: "O medo é a ausência de amor", en: "Fear is the absence of love" },

    // Transição planetária
    { pt: "A Terra está passando por uma transição", en: "Earth is going through a transition" },
    { pt: "Estamos na última encarnação em dualidade", en: "We are in the last incarnation in duality" },
    { pt: "Os portais de ascensão estão abertos", en: "The portals of ascension are open" },
    { pt: "O véu do esquecimento será removido", en: "The veil of forgetfulness will be removed" },
    { pt: "A nova Terra está surgindo", en: "The new Earth is emerging" },
    { pt: "O velho ciclo está terminando", en: "The old cycle is ending" },
    { pt: "Uma nova era está começando", en: "A new era is beginning" },
    { pt: "A frequência do planeta está aumentando", en: "The planet's frequency is increasing" },
    { pt: "Muitas almas farão a ascensão agora", en: "Many souls will make the ascension now" },
    { pt: "O tempo está se acelerando", en: "Time is accelerating" },

    // Jornada da alma
    { pt: "Cada alma escolhe suas experiências", en: "Each soul chooses its experiences" },
    { pt: "Não existe coincidência, apenas sincronicidade", en: "There is no coincidence, only synchronicity" },
    { pt: "Você colhe o que planta", en: "You reap what you sow" },
    { pt: "A lei de causa e efeito governa tudo", en: "The law of cause and effect governs everything" },
    { pt: "Ninguém passa pelo que não precisa passar", en: "No one goes through what they do not need to go through" },
    { pt: "Cada experiência é uma lição", en: "Every experience is a lesson" },
    { pt: "A dor é um professor severo", en: "Pain is a harsh teacher" },
    { pt: "O sofrimento acelera o aprendizado", en: "Suffering accelerates learning" },
    { pt: "A alma busca evolução constante", en: "The soul seeks constant evolution" },
    { pt: "Estamos aqui para aprender e evoluir", en: "We are here to learn and evolve" },

    // Despertar espiritual
    { pt: "O despertar da consciência é inevitável", en: "The awakening of consciousness is inevitable" },
    { pt: "Muitos ainda estão adormecidos", en: "Many are still asleep" },
    { pt: "A verdade está sendo revelada", en: "The truth is being revealed" },
    { pt: "Confie no plano divino", en: "Trust the divine plan" },
    { pt: "Sua intuição é a voz da sua alma", en: "Your intuition is the voice of your soul" },
    { pt: "Ouça seu coração, não sua mente", en: "Listen to your heart, not your mind" },
    { pt: "O ego resiste à mudança", en: "The ego resists change" },
    { pt: "Liberte-se das crenças limitantes", en: "Free yourself from limiting beliefs" },
    { pt: "Você é mais poderoso do que imagina", en: "You are more powerful than you imagine" },
    { pt: "A iluminação vem de dentro", en: "Enlightenment comes from within" },

    // Vida e morte
    { pt: "A morte não existe para a alma", en: "Death does not exist for the soul" },
    { pt: "O corpo é temporário, a alma é eterna", en: "The body is temporary, the soul is eternal" },
    { pt: "Desencarnação é apenas uma transição", en: "Disincarnation is just a transition" },
    { pt: "A vida continua após a morte do corpo", en: "Life continues after the death of the body" },
    { pt: "Não há nada a temer na morte", en: "There is nothing to fear in death" },
    { pt: "Cada vida é uma oportunidade de crescimento", en: "Each life is an opportunity for growth" },
    { pt: "Reencarnamos para aprender lições", en: "We reincarnate to learn lessons" },
    { pt: "Carregamos memórias de vidas passadas", en: "We carry memories from past lives" },
    { pt: "O karma deve ser equilibrado", en: "Karma must be balanced" },
    { pt: "Perdoar liberta a alma", en: "Forgiving frees the soul" },

    // Energia e vibração
    { pt: "Mantenha sua frequência elevada", en: "Keep your frequency elevated" },
    { pt: "Pensamentos negativos baixam sua vibração", en: "Negative thoughts lower your vibration" },
    { pt: "O amor é a frequência mais alta", en: "Love is the highest frequency" },
    { pt: "Proteja sua energia de pessoas tóxicas", en: "Protect your energy from toxic people" },
    { pt: "A meditação eleva a consciência", en: "Meditation elevates consciousness" },
    { pt: "Você atrai o que você vibra", en: "You attract what you vibrate" },
    { pt: "A gratidão amplifica a energia positiva", en: "Gratitude amplifies positive energy" },
    { pt: "Cuide da sua energia todos os dias", en: "Take care of your energy every day" },
    { pt: "Ambientes negativos drenam sua energia", en: "Negative environments drain your energy" },
    { pt: "A natureza recarrega nossas energias", en: "Nature recharges our energies" },

    // Propósito e missão
    { pt: "Cada um tem uma missão única", en: "Everyone has a unique mission" },
    { pt: "Você está aqui por uma razão", en: "You are here for a reason" },
    { pt: "Descubra seu propósito de vida", en: "Discover your life purpose" },
    { pt: "Sirva aos outros com amor", en: "Serve others with love" },
    { pt: "Seja a luz no mundo", en: "Be the light in the world" },
    { pt: "Sua presença faz diferença", en: "Your presence makes a difference" },
    { pt: "Ajude quem está no caminho", en: "Help those who are on the path" },
    { pt: "Compartilhe conhecimento com humildade", en: "Share knowledge with humility" },
    { pt: "O serviço desinteressado eleva a alma", en: "Selfless service elevates the soul" },
    { pt: "Você veio para ancorar a luz", en: "You came to anchor the light" },

    // Vocabulário difícil dos textos
    { pt: "A ascensão depende do estado de consciência", en: "Ascension depends on the state of consciousness" },
    { pt: "O Grande Flash Solar está chegando", en: "The Great Solar Flash is coming" },
    { pt: "As colônias espirituais acolhem as almas", en: "The spiritual colonies welcome the souls" },
    { pt: "O eu superior guia cada fractal", en: "The higher self guides each fractal" },
    { pt: "A mônada é a consciência original", en: "The monad is the original consciousness" },
    { pt: "Atravessamos a ponte interdimensional", en: "We cross the interdimensional bridge" },
    { pt: "As linhas do tempo estão se separando", en: "The timelines are separating" },
    { pt: "Estamos vivendo linhas do tempo simultâneas", en: "We are living simultaneous timelines" },
    { pt: "O livre arbítrio é sagrado", en: "Free will is sacred" },
    { pt: "Ninguém pode interferir no seu caminho", en: "No one can interfere with your path" }
];
