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
    }
];
