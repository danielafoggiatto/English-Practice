// ==========================================
// Diálogos Pré-definidos - Situações do dia a dia
// ==========================================
// Pessoa A = outra pessoa
// Pessoa B = você (praticante)

const dialogos = [
    {
        id: "restaurante",
        titulo: "🍽️ No Restaurante",
        descricao: "Você está em um restaurante e precisa fazer um pedido.",
        conversa: [
            { pessoa: "A", en: "Good evening! Welcome to our restaurant.", pt: "Boa noite! Bem-vindo ao nosso restaurante." },
            { pessoa: "B", en: "Good evening! A table for two, please.", pt: "Boa noite! Uma mesa para dois, por favor." },
            { pessoa: "A", en: "Of course. Follow me, please.", pt: "Claro. Me siga, por favor." },
            { pessoa: "A", en: "Here's the menu. Can I get you something to drink?", pt: "Aqui está o cardápio. Posso trazer algo para beber?" },
            { pessoa: "B", en: "Yes, I'd like a glass of water, please.", pt: "Sim, eu gostaria de um copo de água, por favor." },
            { pessoa: "A", en: "Are you ready to order?", pt: "Vocês estão prontos para pedir?" },
            { pessoa: "B", en: "Yes, I'll have the grilled chicken with salad.", pt: "Sim, eu vou querer o frango grelhado com salada." },
            { pessoa: "A", en: "Excellent choice! Anything else?", pt: "Excelente escolha! Mais alguma coisa?" },
            { pessoa: "B", en: "No, that's all for now. Thank you.", pt: "Não, é só isso por agora. Obrigado." },
            { pessoa: "A", en: "Your order will be ready in about 15 minutes.", pt: "Seu pedido estará pronto em cerca de 15 minutos." },
            { pessoa: "B", en: "Perfect, thank you!", pt: "Perfeito, obrigado!" }
        ]
    },
    {
        id: "hotel",
        titulo: "🏨 Check-in no Hotel",
        descricao: "Você está chegando no hotel e precisa fazer o check-in.",
        conversa: [
            { pessoa: "A", en: "Good afternoon! Welcome to Grand Hotel. How can I help you?", pt: "Boa tarde! Bem-vindo ao Grand Hotel. Como posso ajudar?" },
            { pessoa: "B", en: "Hi! I have a reservation under the name Silva.", pt: "Oi! Eu tenho uma reserva no nome Silva." },
            { pessoa: "A", en: "Let me check... Yes, I found it. A double room for 3 nights, correct?", pt: "Deixe-me verificar... Sim, encontrei. Um quarto de casal por 3 noites, correto?" },
            { pessoa: "B", en: "Yes, that's correct.", pt: "Sim, está correto." },
            { pessoa: "A", en: "May I see your ID, please?", pt: "Posso ver seu documento, por favor?" },
            { pessoa: "B", en: "Sure, here it is.", pt: "Claro, aqui está." },
            { pessoa: "A", en: "Thank you. Your room is 405 on the fourth floor.", pt: "Obrigado. Seu quarto é o 405 no quarto andar." },
            { pessoa: "B", en: "What time is breakfast?", pt: "A que horas é o café da manhã?" },
            { pessoa: "A", en: "Breakfast is served from 7 to 10 AM in the restaurant.", pt: "O café da manhã é servido das 7 às 10 da manhã no restaurante." },
            { pessoa: "B", en: "Great! Is there Wi-Fi in the room?", pt: "Ótimo! Tem Wi-Fi no quarto?" },
            { pessoa: "A", en: "Yes, the password is on the desk in your room.", pt: "Sim, a senha está na mesa do seu quarto." },
            { pessoa: "B", en: "Perfect, thank you very much!", pt: "Perfeito, muito obrigado!" }
        ]
    },
    {
        id: "entrevista",
        titulo: "💼 Entrevista de Emprego",
        descricao: "Você está em uma entrevista de emprego.",
        conversa: [
            { pessoa: "A", en: "Hello! Please, have a seat.", pt: "Olá! Por favor, sente-se." },
            { pessoa: "B", en: "Thank you. Nice to meet you.", pt: "Obrigado. Prazer em conhecê-lo." },
            { pessoa: "A", en: "So, tell me a little about yourself.", pt: "Então, me conte um pouco sobre você." },
            { pessoa: "B", en: "I'm a software developer with 3 years of experience.", pt: "Sou desenvolvedor de software com 3 anos de experiência." },
            { pessoa: "A", en: "What are your main skills?", pt: "Quais são suas principais habilidades?" },
            { pessoa: "B", en: "I'm good at problem-solving and I work well in a team.", pt: "Sou bom em resolver problemas e trabalho bem em equipe." },
            { pessoa: "A", en: "Why do you want to work for our company?", pt: "Por que você quer trabalhar na nossa empresa?" },
            { pessoa: "B", en: "I admire your innovative projects and company culture.", pt: "Admiro seus projetos inovadores e a cultura da empresa." },
            { pessoa: "A", en: "Where do you see yourself in 5 years?", pt: "Onde você se vê em 5 anos?" },
            { pessoa: "B", en: "I hope to grow with the company and take on more responsibilities.", pt: "Espero crescer com a empresa e assumir mais responsabilidades." },
            { pessoa: "A", en: "Do you have any questions for us?", pt: "Você tem alguma pergunta para nós?" },
            { pessoa: "B", en: "Yes, what does a typical day look like in this position?", pt: "Sim, como é um dia típico nessa posição?" }
        ]
    },
    {
        id: "aeroporto",
        titulo: "✈️ No Aeroporto",
        descricao: "Você está no aeroporto fazendo check-in para um voo.",
        conversa: [
            { pessoa: "A", en: "Next, please! May I see your passport and ticket?", pt: "Próximo, por favor! Posso ver seu passaporte e passagem?" },
            { pessoa: "B", en: "Here you go.", pt: "Aqui está." },
            { pessoa: "A", en: "Are you checking any bags today?", pt: "Você vai despachar alguma mala hoje?" },
            { pessoa: "B", en: "Yes, just this one suitcase.", pt: "Sim, apenas essa mala." },
            { pessoa: "A", en: "Please place it on the scale.", pt: "Por favor, coloque na balança." },
            { pessoa: "A", en: "Would you like a window or aisle seat?", pt: "Você prefere assento na janela ou no corredor?" },
            { pessoa: "B", en: "Window seat, please.", pt: "Na janela, por favor." },
            { pessoa: "A", en: "Your flight departs from gate B7 at 3:30 PM.", pt: "Seu voo sai do portão B7 às 15:30." },
            { pessoa: "B", en: "What time should I be at the gate?", pt: "A que horas devo estar no portão?" },
            { pessoa: "A", en: "Boarding starts at 3:00 PM. Don't be late!", pt: "O embarque começa às 15:00. Não se atrase!" },
            { pessoa: "B", en: "Thank you. Have a nice day!", pt: "Obrigado. Tenha um bom dia!" }
        ]
    },
    {
        id: "medico",
        titulo: "🏥 No Médico",
        descricao: "Você está em uma consulta médica.",
        conversa: [
            { pessoa: "A", en: "Hello! What brings you here today?", pt: "Olá! O que te traz aqui hoje?" },
            { pessoa: "B", en: "I'm not feeling well. I have a headache and a sore throat.", pt: "Não estou me sentindo bem. Estou com dor de cabeça e dor de garganta." },
            { pessoa: "A", en: "How long have you been feeling this way?", pt: "Há quanto tempo você está se sentindo assim?" },
            { pessoa: "B", en: "Since yesterday morning.", pt: "Desde ontem de manhã." },
            { pessoa: "A", en: "Do you have a fever?", pt: "Você está com febre?" },
            { pessoa: "B", en: "I think so. I feel very hot.", pt: "Acho que sim. Estou me sentindo muito quente." },
            { pessoa: "A", en: "Let me check your temperature... 38.5. Yes, you have a fever.", pt: "Deixe-me verificar sua temperatura... 38.5. Sim, você está com febre." },
            { pessoa: "A", en: "Are you allergic to any medication?", pt: "Você é alérgico a algum medicamento?" },
            { pessoa: "B", en: "No, I'm not allergic to anything.", pt: "Não, não sou alérgico a nada." },
            { pessoa: "A", en: "I'll prescribe some medicine. Take it twice a day.", pt: "Vou receitar alguns remédios. Tome duas vezes ao dia." },
            { pessoa: "B", en: "Thank you, doctor. Should I come back?", pt: "Obrigado, doutor. Devo voltar?" },
            { pessoa: "A", en: "If you don't feel better in 3 days, come back.", pt: "Se não melhorar em 3 dias, volte." }
        ]
    },
    {
        id: "loja",
        titulo: "🛍️ Na Loja de Roupas",
        descricao: "Você está comprando roupas em uma loja.",
        conversa: [
            { pessoa: "A", en: "Hi! Can I help you find something?", pt: "Oi! Posso ajudar a encontrar algo?" },
            { pessoa: "B", en: "Yes, I'm looking for a blue shirt.", pt: "Sim, estou procurando uma camisa azul." },
            { pessoa: "A", en: "What size do you wear?", pt: "Qual tamanho você veste?" },
            { pessoa: "B", en: "I usually wear medium.", pt: "Geralmente visto médio." },
            { pessoa: "A", en: "Here are some options. Would you like to try them on?", pt: "Aqui estão algumas opções. Gostaria de experimentar?" },
            { pessoa: "B", en: "Yes, please. Where's the fitting room?", pt: "Sim, por favor. Onde fica o provador?" },
            { pessoa: "A", en: "It's right over there, on your left.", pt: "É logo ali, à sua esquerda." },
            { pessoa: "B", en: "This one fits perfectly. How much is it?", pt: "Essa serviu perfeitamente. Quanto custa?" },
            { pessoa: "A", en: "It's $45, but it's on sale for $35 today.", pt: "Custa $45, mas hoje está em promoção por $35." },
            { pessoa: "B", en: "Great! I'll take it. Can I pay with credit card?", pt: "Ótimo! Vou levar. Posso pagar com cartão de crédito?" },
            { pessoa: "A", en: "Of course! Would you like a bag?", pt: "Claro! Gostaria de uma sacola?" },
            { pessoa: "B", en: "Yes, please. Thank you!", pt: "Sim, por favor. Obrigado!" }
        ]
    },
    {
        id: "taxi",
        titulo: "🚕 Pegando um Táxi",
        descricao: "Você precisa ir a algum lugar de táxi.",
        conversa: [
            { pessoa: "A", en: "Where would you like to go?", pt: "Para onde você gostaria de ir?" },
            { pessoa: "B", en: "To the airport, please.", pt: "Para o aeroporto, por favor." },
            { pessoa: "A", en: "Which terminal?", pt: "Qual terminal?" },
            { pessoa: "B", en: "Terminal 2, international flights.", pt: "Terminal 2, voos internacionais." },
            { pessoa: "A", en: "Okay, it should take about 30 minutes.", pt: "Ok, deve levar cerca de 30 minutos." },
            { pessoa: "B", en: "Is there a lot of traffic right now?", pt: "Tem muito trânsito agora?" },
            { pessoa: "A", en: "A little bit, but we'll make it on time.", pt: "Um pouco, mas chegaremos a tempo." },
            { pessoa: "B", en: "How much will it cost approximately?", pt: "Quanto vai custar aproximadamente?" },
            { pessoa: "A", en: "Around $40, depending on traffic.", pt: "Cerca de $40, dependendo do trânsito." },
            { pessoa: "A", en: "Here we are! Terminal 2.", pt: "Chegamos! Terminal 2." },
            { pessoa: "B", en: "Thank you! Keep the change.", pt: "Obrigado! Fique com o troco." },
            { pessoa: "A", en: "Thank you! Have a safe flight!", pt: "Obrigado! Tenha um bom voo!" }
        ]
    },
    {
        id: "telefone",
        titulo: "📞 Ligação Telefônica",
        descricao: "Você precisa ligar para uma empresa.",
        conversa: [
            { pessoa: "A", en: "Hello, ABC Company. How may I help you?", pt: "Olá, Empresa ABC. Como posso ajudar?" },
            { pessoa: "B", en: "Hi, I'd like to speak with someone from customer service.", pt: "Oi, gostaria de falar com alguém do atendimento ao cliente." },
            { pessoa: "A", en: "May I ask what this is regarding?", pt: "Posso perguntar sobre o que se trata?" },
            { pessoa: "B", en: "I have a question about my order.", pt: "Tenho uma pergunta sobre meu pedido." },
            { pessoa: "A", en: "Sure, can I have your order number?", pt: "Claro, pode me dar o número do pedido?" },
            { pessoa: "B", en: "Yes, it's 12345.", pt: "Sim, é 12345." },
            { pessoa: "A", en: "Thank you. Please hold while I transfer you.", pt: "Obrigado. Por favor, aguarde enquanto transfiro." },
            { pessoa: "A", en: "Hello, this is customer service. How can I help?", pt: "Olá, aqui é o atendimento ao cliente. Como posso ajudar?" },
            { pessoa: "B", en: "My order hasn't arrived yet. It's been two weeks.", pt: "Meu pedido ainda não chegou. Já faz duas semanas." },
            { pessoa: "A", en: "I'm sorry about that. Let me check the status.", pt: "Sinto muito por isso. Deixe-me verificar o status." },
            { pessoa: "B", en: "Thank you, I appreciate your help.", pt: "Obrigado, agradeço sua ajuda." }
        ]
    },
    {
        id: "supermercado",
        titulo: "🛒 No Supermercado",
        descricao: "Você está fazendo compras no supermercado.",
        conversa: [
            { pessoa: "B", en: "Excuse me, where can I find the milk?", pt: "Com licença, onde posso encontrar o leite?" },
            { pessoa: "A", en: "It's in aisle 5, in the dairy section.", pt: "Está no corredor 5, na seção de laticínios." },
            { pessoa: "B", en: "Thank you! And where are the eggs?", pt: "Obrigado! E onde ficam os ovos?" },
            { pessoa: "A", en: "Right next to the milk, same aisle.", pt: "Bem ao lado do leite, mesmo corredor." },
            { pessoa: "B", en: "Do you have organic vegetables?", pt: "Vocês têm vegetais orgânicos?" },
            { pessoa: "A", en: "Yes, they're in the produce section, on the left.", pt: "Sim, estão na seção de hortifruti, à esquerda." },
            { pessoa: "B", en: "Is this bread fresh?", pt: "Esse pão é fresco?" },
            { pessoa: "A", en: "Yes, it was baked this morning.", pt: "Sim, foi assado hoje de manhã." },
            { pessoa: "B", en: "Perfect! I think that's everything.", pt: "Perfeito! Acho que é tudo." },
            { pessoa: "A", en: "You can pay at any register. Cash or card?", pt: "Pode pagar em qualquer caixa. Dinheiro ou cartão?" },
            { pessoa: "B", en: "Card, please. Do you have bags?", pt: "Cartão, por favor. Vocês têm sacolas?" },
            { pessoa: "A", en: "Yes, paper or plastic?", pt: "Sim, papel ou plástico?" }
        ]
    },
    {
        id: "amigos",
        titulo: "👋 Encontrando um Amigo",
        descricao: "Você encontra um amigo que não via há tempo.",
        conversa: [
            { pessoa: "A", en: "Hey! Long time no see! How have you been?", pt: "Ei! Quanto tempo! Como você tem estado?" },
            { pessoa: "B", en: "I've been great! What about you?", pt: "Tenho estado ótimo! E você?" },
            { pessoa: "A", en: "Pretty good! I heard you got a new job.", pt: "Muito bem! Soube que você conseguiu um emprego novo." },
            { pessoa: "B", en: "Yes! I started last month. I'm really enjoying it.", pt: "Sim! Comecei mês passado. Estou gostando muito." },
            { pessoa: "A", en: "That's awesome! What are you doing now?", pt: "Que legal! O que você está fazendo agora?" },
            { pessoa: "B", en: "I work as a project manager at a tech company.", pt: "Trabalho como gerente de projetos em uma empresa de tecnologia." },
            { pessoa: "A", en: "We should grab coffee sometime and catch up!", pt: "A gente devia tomar um café qualquer dia e colocar o papo em dia!" },
            { pessoa: "B", en: "Definitely! Are you free this weekend?", pt: "Com certeza! Você está livre nesse fim de semana?" },
            { pessoa: "A", en: "Saturday works for me. How about 3 PM?", pt: "Sábado funciona pra mim. Que tal às 15h?" },
            { pessoa: "B", en: "Perfect! Let's meet at that café downtown.", pt: "Perfeito! Vamos nos encontrar naquele café no centro." },
            { pessoa: "A", en: "Sounds great! See you Saturday then!", pt: "Ótimo! Te vejo no sábado então!" },
            { pessoa: "B", en: "See you! Take care!", pt: "Até lá! Se cuida!" }
        ]
    },
    {
        id: "daily-standup",
        titulo: "🧑‍💻 Daily Standup",
        descricao: "Reunião diária com o time de desenvolvimento.",
        conversa: [
            { pessoa: "A", en: "Good morning everyone! Let's start our daily. Who wants to go first?", pt: "Bom dia a todos! Vamos começar nossa daily. Quem quer começar?" },
            { pessoa: "B", en: "I can start. Yesterday I finished automating the login tests.", pt: "Eu posso começar. Ontem terminei de automatizar os testes de login." },
            { pessoa: "A", en: "Great! What are you working on today?", pt: "Ótimo! No que você vai trabalhar hoje?" },
            { pessoa: "B", en: "Today I'll work on the checkout flow tests using Playwright.", pt: "Hoje vou trabalhar nos testes do fluxo de checkout usando Playwright." },
            { pessoa: "A", en: "Do you have any blockers?", pt: "Você tem algum bloqueio?" },
            { pessoa: "B", en: "Yes, I need access to the staging environment to run the tests.", pt: "Sim, preciso de acesso ao ambiente de staging para rodar os testes." },
            { pessoa: "A", en: "I'll ask DevOps to give you access right after this meeting.", pt: "Vou pedir pro DevOps te dar acesso logo após essa reunião." },
            { pessoa: "B", en: "Perfect, thank you! That's all from me.", pt: "Perfeito, obrigado! É isso da minha parte." },
            { pessoa: "A", en: "Thanks! Let's keep the tests updated with the new features.", pt: "Obrigado! Vamos manter os testes atualizados com as novas features." },
            { pessoa: "B", en: "Sure, I'll sync with the developers about the changes.", pt: "Claro, vou sincronizar com os desenvolvedores sobre as mudanças." }
        ]
    },
    {
        id: "bug-report",
        titulo: "🐛 Reportando um Bug",
        descricao: "Você encontrou um bug e precisa reportar ao desenvolvedor.",
        conversa: [
            { pessoa: "B", en: "Hey, do you have a minute? I found a bug in the new feature.", pt: "Ei, você tem um minuto? Encontrei um bug na nova feature." },
            { pessoa: "A", en: "Sure, what's the issue?", pt: "Claro, qual é o problema?" },
            { pessoa: "B", en: "The submit button doesn't work when the form is empty.", pt: "O botão de enviar não funciona quando o formulário está vazio." },
            { pessoa: "A", en: "Can you show me the steps to reproduce?", pt: "Você pode me mostrar os passos para reproduzir?" },
            { pessoa: "B", en: "Yes, first go to the registration page and click submit without filling anything.", pt: "Sim, primeiro vá para a página de cadastro e clique em enviar sem preencher nada." },
            { pessoa: "A", en: "I see. What's the expected behavior?", pt: "Entendi. Qual é o comportamento esperado?" },
            { pessoa: "B", en: "It should show validation errors, but instead it just freezes.", pt: "Deveria mostrar erros de validação, mas ao invés disso apenas trava." },
            { pessoa: "A", en: "Got it. Did you check the console for any errors?", pt: "Entendi. Você verificou o console por algum erro?" },
            { pessoa: "B", en: "Yes, there's a null pointer exception. I'll attach the screenshot to the ticket.", pt: "Sim, tem uma exceção de ponteiro nulo. Vou anexar a captura de tela no ticket." },
            { pessoa: "A", en: "Thanks for the detailed report. I'll fix it today.", pt: "Obrigado pelo relatório detalhado. Vou corrigir hoje." },
            { pessoa: "B", en: "Great! Let me know when it's ready and I'll retest.", pt: "Ótimo! Me avise quando estiver pronto e eu retesto." }
        ]
    },
    {
        id: "code-review",
        titulo: "👀 Code Review de Testes",
        descricao: "Você está participando de uma revisão de código dos testes automatizados.",
        conversa: [
            { pessoa: "A", en: "I reviewed your test automation pull request.", pt: "Eu revisei seu pull request de automação de testes." },
            { pessoa: "B", en: "Thanks! Do you have any feedback?", pt: "Obrigado! Você tem algum feedback?" },
            { pessoa: "A", en: "Yes, I noticed you're using hard-coded waits. Can you use dynamic waits instead?", pt: "Sim, notei que você está usando waits fixos. Pode usar waits dinâmicos ao invés?" },
            { pessoa: "B", en: "You're right. I'll replace them with waitForSelector in Playwright.", pt: "Você tem razão. Vou substituir por waitForSelector no Playwright." },
            { pessoa: "A", en: "Also, the test data should be in a separate file for better maintainability.", pt: "Além disso, os dados de teste devem estar em um arquivo separado para melhor manutenção." },
            { pessoa: "B", en: "Good point. I'll create a fixtures folder for test data.", pt: "Boa observação. Vou criar uma pasta de fixtures para dados de teste." },
            { pessoa: "A", en: "One more thing - can you add assertions for the error messages?", pt: "Mais uma coisa - você pode adicionar assertions para as mensagens de erro?" },
            { pessoa: "B", en: "Sure, I'll add expect statements to verify the error text.", pt: "Claro, vou adicionar statements expect para verificar o texto do erro." },
            { pessoa: "A", en: "Perfect! Once you make those changes, I'll approve the PR.", pt: "Perfeito! Assim que fizer essas mudanças, aprovo o PR." },
            { pessoa: "B", en: "Thanks for the review! I'll push the updates soon.", pt: "Obrigado pela revisão! Vou enviar as atualizações em breve." }
        ]
    },
    {
        id: "sprint-planning",
        titulo: "📋 Sprint Planning - QA",
        descricao: "Planejamento de sprint discutindo tarefas de QA.",
        conversa: [
            { pessoa: "A", en: "Let's discuss the QA tasks for this sprint.", pt: "Vamos discutir as tarefas de QA para essa sprint." },
            { pessoa: "B", en: "I've estimated the test automation effort for the new features.", pt: "Eu estimei o esforço de automação de testes para as novas features." },
            { pessoa: "A", en: "How many story points for the payment module tests?", pt: "Quantos story points para os testes do módulo de pagamento?" },
            { pessoa: "B", en: "I'd say 8 points. It involves API testing and UI testing.", pt: "Eu diria 8 pontos. Envolve testes de API e testes de UI." },
            { pessoa: "A", en: "Do we need to update the existing test suite?", pt: "Precisamos atualizar a suíte de testes existente?" },
            { pessoa: "B", en: "Yes, some locators changed. I'll need 3 points for maintenance.", pt: "Sim, alguns locators mudaram. Vou precisar de 3 pontos para manutenção." },
            { pessoa: "A", en: "Can we run the tests in parallel to speed up the pipeline?", pt: "Podemos rodar os testes em paralelo para acelerar o pipeline?" },
            { pessoa: "B", en: "Yes, Playwright supports parallel execution. I'll configure it.", pt: "Sim, o Playwright suporta execução paralela. Vou configurar." },
            { pessoa: "A", en: "What about the flaky tests we discussed last week?", pt: "E quanto aos testes instáveis que discutimos semana passada?" },
            { pessoa: "B", en: "I'll investigate and fix them. Probably 2 points for that.", pt: "Vou investigar e corrigir. Provavelmente 2 pontos para isso." },
            { pessoa: "A", en: "Sounds good. Let's add these to the sprint backlog.", pt: "Parece bom. Vamos adicionar isso ao backlog da sprint." }
        ]
    },
    {
        id: "qa-interview",
        titulo: "🎯 Entrevista Técnica - QA",
        descricao: "Entrevista técnica para vaga de QA Automation.",
        conversa: [
            { pessoa: "A", en: "Tell me about your experience with test automation.", pt: "Me conte sobre sua experiência com automação de testes." },
            { pessoa: "B", en: "I have 3 years of experience, mainly with Playwright and Cypress.", pt: "Tenho 3 anos de experiência, principalmente com Playwright e Cypress." },
            { pessoa: "A", en: "Why do you prefer Playwright over other frameworks?", pt: "Por que você prefere Playwright em vez de outros frameworks?" },
            { pessoa: "B", en: "It has better cross-browser support and auto-wait features.", pt: "Ele tem melhor suporte cross-browser e recursos de auto-wait." },
            { pessoa: "A", en: "How do you handle dynamic elements in your tests?", pt: "Como você lida com elementos dinâmicos nos seus testes?" },
            { pessoa: "B", en: "I use data-testid attributes and avoid relying on CSS classes.", pt: "Eu uso atributos data-testid e evito depender de classes CSS." },
            { pessoa: "A", en: "What's your approach to test data management?", pt: "Qual é sua abordagem para gerenciamento de dados de teste?" },
            { pessoa: "B", en: "I use fixtures and factories to create isolated test data.", pt: "Eu uso fixtures e factories para criar dados de teste isolados." },
            { pessoa: "A", en: "How do you integrate tests into the CI/CD pipeline?", pt: "Como você integra testes no pipeline de CI/CD?" },
            { pessoa: "B", en: "I configure GitHub Actions to run tests on every pull request.", pt: "Eu configuro GitHub Actions para rodar testes em cada pull request." },
            { pessoa: "A", en: "Excellent! Do you have experience with API testing as well?", pt: "Excelente! Você também tem experiência com testes de API?" },
            { pessoa: "B", en: "Yes, I use Playwright's request context for API tests.", pt: "Sim, eu uso o request context do Playwright para testes de API." }
        ]
    },
    {
        id: "test-failure",
        titulo: "❌ Investigando Falha no Pipeline",
        descricao: "Os testes falharam no CI e você precisa investigar.",
        conversa: [
            { pessoa: "A", en: "Hey, the pipeline failed. Can you check the test results?", pt: "Ei, o pipeline falhou. Pode verificar os resultados dos testes?" },
            { pessoa: "B", en: "Sure, let me look at the logs.", pt: "Claro, deixa eu olhar os logs." },
            { pessoa: "B", en: "I found the issue. The test is timing out on the checkout page.", pt: "Encontrei o problema. O teste está dando timeout na página de checkout." },
            { pessoa: "A", en: "Is it a flaky test or a real bug?", pt: "É um teste instável ou um bug real?" },
            { pessoa: "B", en: "Let me run it locally to check... It passed locally.", pt: "Deixa eu rodar localmente para verificar... Passou localmente." },
            { pessoa: "A", en: "Maybe it's an environment issue?", pt: "Talvez seja um problema de ambiente?" },
            { pessoa: "B", en: "Yes, the staging server is slower. I'll increase the timeout.", pt: "Sim, o servidor de staging é mais lento. Vou aumentar o timeout." },
            { pessoa: "A", en: "Should we add retry logic for unstable tests?", pt: "Devemos adicionar lógica de retry para testes instáveis?" },
            { pessoa: "B", en: "Good idea. Playwright has a built-in retry feature.", pt: "Boa ideia. O Playwright tem um recurso de retry nativo." },
            { pessoa: "A", en: "Let me know when you push the fix.", pt: "Me avise quando enviar a correção." },
            { pessoa: "B", en: "Done! The pipeline should pass now.", pt: "Pronto! O pipeline deve passar agora." }
        ]
    },
    {
        id: "pair-testing",
        titulo: "👥 Pair Testing Session",
        descricao: "Sessão de testes em par com um desenvolvedor.",
        conversa: [
            { pessoa: "A", en: "Ready for our pair testing session?", pt: "Pronto para nossa sessão de pair testing?" },
            { pessoa: "B", en: "Yes! Let's test the new user profile feature.", pt: "Sim! Vamos testar a nova feature de perfil do usuário." },
            { pessoa: "A", en: "I'll share my screen. What should we test first?", pt: "Vou compartilhar minha tela. O que devemos testar primeiro?" },
            { pessoa: "B", en: "Let's start with the happy path - updating profile info.", pt: "Vamos começar com o caminho feliz - atualizar informações do perfil." },
            { pessoa: "A", en: "Okay, I'm filling in the form now.", pt: "Ok, estou preenchendo o formulário agora." },
            { pessoa: "B", en: "Try submitting without the required fields.", pt: "Tente enviar sem os campos obrigatórios." },
            { pessoa: "A", en: "Good catch! The error message is not showing.", pt: "Boa pegada! A mensagem de erro não está aparecendo." },
            { pessoa: "B", en: "I'll create a ticket for that. Let's continue testing.", pt: "Vou criar um ticket para isso. Vamos continuar testando." },
            { pessoa: "A", en: "What about uploading a profile picture?", pt: "E quanto ao upload de foto de perfil?" },
            { pessoa: "B", en: "Try uploading a file larger than 5MB.", pt: "Tente fazer upload de um arquivo maior que 5MB." },
            { pessoa: "A", en: "It crashed! We definitely need to handle that.", pt: "Travou! Definitivamente precisamos tratar isso." },
            { pessoa: "B", en: "Great session! We found two important bugs.", pt: "Ótima sessão! Encontramos dois bugs importantes." }
        ]
    }
];
