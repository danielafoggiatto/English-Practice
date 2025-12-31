// ==========================================
// English Practice - Main Script
// ==========================================

// Estado da aplicação
const state = {
    currentPhrase: null,
    currentIndex: 0,
    isPlaying: false,
    speed: 0.9,
    quiz: {
        currentPhrase: null,
        correct: 0,
        wrong: 0,
        hintUsed: false
    },
    pronunciation: {
        currentPhrase: null,
        correct: 0,
        wrong: 0,
        isListening: false,
        recognition: null
    },
    dialog: {
        current: null,
        currentStep: 0,
        isPlaying: false,
        isPracticing: false
    },
    reading: {
        currentText: null,
        isPlaying: false,
        isPaused: false,
        speed: 0.8,
        utterance: null,
        chunks: [],
        currentChunk: 0
    }
};

// Elementos do DOM
const elements = {
    // Player
    phrasePt: document.getElementById('phrase-pt'),
    phraseEn: document.getElementById('phrase-en'),
    btnNew: document.getElementById('btn-new'),
    btnPlay: document.getElementById('btn-play'),
    btnShow: document.getElementById('btn-show'),
    speedSlider: document.getElementById('speed'),
    speedValue: document.getElementById('speed-value'),
    status: document.getElementById('status'),
    currentIndex: document.getElementById('current-index'),
    totalPhrases: document.getElementById('total-phrases'),

    // Quiz
    quizPhrasePt: document.getElementById('quiz-phrase-pt'),
    quizAnswer: document.getElementById('quiz-answer'),
    btnCheck: document.getElementById('btn-check'),
    btnStartQuiz: document.getElementById('btn-start-quiz'),
    btnHint: document.getElementById('btn-hint'),
    btnNextQuiz: document.getElementById('btn-next-quiz'),
    quizFeedback: document.getElementById('quiz-feedback'),
    scoreCorrect: document.getElementById('score-correct'),
    scoreWrong: document.getElementById('score-wrong'),
    scoreRate: document.getElementById('score-rate'),

    // Pronúncia
    pronPhrase: document.getElementById('pron-phrase'),
    pronResult: document.getElementById('pron-result'),
    pronFeedback: document.getElementById('pron-feedback'),
    btnPronNew: document.getElementById('btn-pron-new'),
    btnPronListen: document.getElementById('btn-pron-listen'),
    btnPronSpeak: document.getElementById('btn-pron-speak'),
    pronStatus: document.getElementById('pron-status'),
    pronCorrect: document.getElementById('pron-correct'),
    pronWrong: document.getElementById('pron-wrong'),
    pronRate: document.getElementById('pron-rate'),
    browserWarning: document.getElementById('browser-warning'),

    // Diálogos
    dialogSelect: document.getElementById('dialog-select'),
    dialogDescription: document.getElementById('dialog-description'),
    dialogConversation: document.getElementById('dialog-conversation'),
    btnDialogStart: document.getElementById('btn-dialog-start'),
    btnDialogRepeat: document.getElementById('btn-dialog-repeat'),
    btnDialogPractice: document.getElementById('btn-dialog-practice'),
    dialogStatus: document.getElementById('dialog-status'),

    // Leitura
    readingLevel: document.getElementById('reading-level'),
    readingLevelBadge: document.getElementById('reading-level-badge'),
    readingTitle: document.getElementById('reading-title'),
    readingText: document.getElementById('reading-text'),
    btnReadingNew: document.getElementById('btn-reading-new'),
    btnReadingPlay: document.getElementById('btn-reading-play'),
    btnReadingPause: document.getElementById('btn-reading-pause'),
    readingSpeedSlider: document.getElementById('reading-speed'),
    readingSpeedValue: document.getElementById('reading-speed-value'),
    readingStatus: document.getElementById('reading-status'),

    // Mode buttons
    modeBtns: document.querySelectorAll('.mode-btn'),
    modeSections: document.querySelectorAll('.mode-section')
};

// ==========================================
// Inicialização
// ==========================================
function init() {
    // Verificar suporte à Web Speech API
    if (!('speechSynthesis' in window)) {
        alert('Seu navegador não suporta síntese de voz. Tente Chrome ou Edge.');
        return;
    }

    // Configurar total de frases
    elements.totalPhrases.textContent = frases.length;

    // Event listeners - Player
    elements.btnNew.addEventListener('click', loadRandomPhrase);
    elements.btnPlay.addEventListener('click', playPhrase);
    elements.btnShow.addEventListener('click', showEnglish);
    elements.speedSlider.addEventListener('input', updateSpeed);

    // Event listeners - Quiz
    elements.btnStartQuiz.addEventListener('click', startQuiz);
    elements.btnCheck.addEventListener('click', checkAnswer);
    elements.btnHint.addEventListener('click', showHint);
    elements.btnNextQuiz.addEventListener('click', nextQuizQuestion);
    elements.quizAnswer.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !elements.btnCheck.disabled) {
            checkAnswer();
        }
    });

    // Event listeners - Pronúncia
    elements.btnPronNew.addEventListener('click', loadPronunciationPhrase);
    elements.btnPronListen.addEventListener('click', listenPronunciationPhrase);
    elements.btnPronSpeak.addEventListener('click', startSpeechRecognition);

    // Event listeners - Diálogos
    elements.dialogSelect.addEventListener('change', onDialogSelect);
    elements.btnDialogStart.addEventListener('click', startDialog);
    elements.btnDialogRepeat.addEventListener('click', repeatDialog);
    elements.btnDialogPractice.addEventListener('click', practiceDialog);

    // Event listeners - Leitura
    elements.btnReadingNew.addEventListener('click', loadRandomText);
    elements.btnReadingPlay.addEventListener('click', playReadingText);
    elements.btnReadingPause.addEventListener('click', togglePauseReading);
    elements.readingSpeedSlider.addEventListener('input', updateReadingSpeed);
    elements.readingLevel.addEventListener('change', loadRandomText);

    // Event listeners - Mode navigation
    elements.modeBtns.forEach(btn => {
        btn.addEventListener('click', () => switchMode(btn.dataset.mode));
    });

    // Carregar vozes
    speechSynthesis.onvoiceschanged = () => {
        console.log('Vozes carregadas:', speechSynthesis.getVoices().length);
    };

    // Inicializar Speech Recognition
    initSpeechRecognition();

    // Carregar opções de diálogos
    loadDialogOptions();
}

// ==========================================
// Navegação entre modos
// ==========================================
function switchMode(mode) {
    // Atualizar botões
    elements.modeBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.mode === mode);
    });

    // Atualizar seções
    elements.modeSections.forEach(section => {
        section.classList.toggle('active', section.id === `${mode}-mode`);
    });

    // Parar qualquer fala em andamento
    speechSynthesis.cancel();

    // Parar reconhecimento de voz se estiver ativo
    if (state.pronunciation.recognition && state.pronunciation.isListening) {
        state.pronunciation.recognition.stop();
    }

    setStatus('');
}

// ==========================================
// Funções do Player
// ==========================================
function loadRandomPhrase() {
    const randomIndex = Math.floor(Math.random() * frases.length);
    state.currentPhrase = frases[randomIndex];
    state.currentIndex = randomIndex + 1;

    elements.phrasePt.textContent = state.currentPhrase.pt;
    elements.phraseEn.textContent = '???';
    elements.phraseEn.classList.add('hidden');
    elements.currentIndex.textContent = state.currentIndex;

    elements.btnPlay.disabled = false;
    elements.btnShow.disabled = false;

    setStatus('Frase carregada! Clique em Ouvir.');
}

function showEnglish() {
    elements.phraseEn.textContent = state.currentPhrase.en;
    elements.phraseEn.classList.remove('hidden');
    elements.phraseEn.classList.add('highlight');
    setTimeout(() => elements.phraseEn.classList.remove('highlight'), 500);
}

async function playPhrase() {
    if (!state.currentPhrase || state.isPlaying) return;

    state.isPlaying = true;
    elements.btnPlay.disabled = true;
    elements.btnNew.disabled = true;

    try {
        setStatus('🇧🇷 Falando português...');
        elements.phrasePt.classList.add('highlight');
        await speak(state.currentPhrase.pt, 'pt-BR');
        elements.phrasePt.classList.remove('highlight');

        await delay(800);

        showEnglish();
        setStatus('🇺🇸 Falando inglês (1/2)...');
        elements.phraseEn.classList.add('highlight');
        await speak(state.currentPhrase.en, 'en-US');
        elements.phraseEn.classList.remove('highlight');

        await delay(1000);

        setStatus('🇺🇸 Falando inglês (2/2)...');
        elements.phraseEn.classList.add('highlight');
        await speak(state.currentPhrase.en, 'en-US');
        elements.phraseEn.classList.remove('highlight');

        setStatus('✅ Concluído! Clique em Nova Frase.');
    } catch (error) {
        console.error('Erro na síntese de voz:', error);
        setStatus('❌ Erro ao falar. Tente novamente.');
    } finally {
        state.isPlaying = false;
        elements.btnPlay.disabled = false;
        elements.btnNew.disabled = false;
    }
}

// ==========================================
// Funções do Quiz
// ==========================================
function startQuiz() {
    if (elements.btnStartQuiz.textContent.includes('Iniciar')) {
        state.quiz.correct = 0;
        state.quiz.wrong = 0;
        updateQuizScore();
    }

    loadQuizQuestion();
    elements.btnStartQuiz.textContent = '🔄 Reiniciar Quiz';
}

function loadQuizQuestion() {
    const randomIndex = Math.floor(Math.random() * frases.length);
    state.quiz.currentPhrase = frases[randomIndex];
    state.quiz.hintUsed = false;

    elements.quizPhrasePt.textContent = state.quiz.currentPhrase.pt;
    elements.quizAnswer.value = '';
    elements.quizAnswer.disabled = false;
    elements.quizFeedback.textContent = '';
    elements.quizFeedback.className = 'quiz-feedback';

    elements.btnCheck.disabled = false;
    elements.btnHint.disabled = false;
    elements.btnNextQuiz.disabled = true;

    elements.quizAnswer.focus();
}

function checkAnswer() {
    const userAnswer = normalizeText(elements.quizAnswer.value);
    const correctAnswer = normalizeText(state.quiz.currentPhrase.en);

    const isCorrect = userAnswer === correctAnswer ||
                      isSimilarEnough(userAnswer, correctAnswer);

    if (isCorrect) {
        state.quiz.correct++;
        elements.quizFeedback.textContent = '🎉 Correto! Excelente!';
        elements.quizFeedback.className = 'quiz-feedback correct';
        speak(state.quiz.currentPhrase.en, 'en-US');
    } else {
        state.quiz.wrong++;
        elements.quizFeedback.innerHTML = `❌ Incorreto!<br>Resposta: <strong>${state.quiz.currentPhrase.en}</strong>`;
        elements.quizFeedback.className = 'quiz-feedback wrong';
        setTimeout(() => speak(state.quiz.currentPhrase.en, 'en-US'), 500);
    }

    updateQuizScore();

    elements.quizAnswer.disabled = true;
    elements.btnCheck.disabled = true;
    elements.btnHint.disabled = true;
    elements.btnNextQuiz.disabled = false;
}

function showHint() {
    const answer = state.quiz.currentPhrase.en;
    const words = answer.split(' ');

    const hint = words.map(word => {
        if (word.length <= 2) return word;
        return word[0] + '_'.repeat(word.length - 1);
    }).join(' ');

    elements.quizFeedback.textContent = `💡 Dica: ${hint}`;
    elements.quizFeedback.className = 'quiz-feedback hint';
    state.quiz.hintUsed = true;
}

function nextQuizQuestion() {
    loadQuizQuestion();
}

function updateQuizScore() {
    elements.scoreCorrect.textContent = state.quiz.correct;
    elements.scoreWrong.textContent = state.quiz.wrong;

    const total = state.quiz.correct + state.quiz.wrong;
    const rate = total > 0 ? Math.round((state.quiz.correct / total) * 100) : 0;
    elements.scoreRate.textContent = rate + '%';
}

// ==========================================
// Funções de Pronúncia (Speech Recognition)
// ==========================================
function initSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        elements.browserWarning.style.display = 'block';
        elements.btnPronSpeak.disabled = true;
        return;
    }

    elements.browserWarning.style.display = 'none';

    state.pronunciation.recognition = new SpeechRecognition();
    state.pronunciation.recognition.lang = 'en-US';
    state.pronunciation.recognition.continuous = false;
    state.pronunciation.recognition.interimResults = true;

    state.pronunciation.recognition.onstart = () => {
        state.pronunciation.isListening = true;
        elements.btnPronSpeak.classList.add('recording');
        elements.btnPronSpeak.textContent = '🔴 Ouvindo...';
        elements.pronFeedback.textContent = '🎤 Fale agora...';
        elements.pronFeedback.className = 'pronunciation-feedback listening';
    };

    state.pronunciation.recognition.onresult = (event) => {
        const transcript = Array.from(event.results)
            .map(result => result[0].transcript)
            .join('');

        elements.pronResult.textContent = transcript;

        // Se for resultado final
        if (event.results[0].isFinal) {
            checkPronunciation(transcript);
        }
    };

    state.pronunciation.recognition.onend = () => {
        state.pronunciation.isListening = false;
        elements.btnPronSpeak.classList.remove('recording');
        elements.btnPronSpeak.textContent = '🎤 Falar';
    };

    state.pronunciation.recognition.onerror = (event) => {
        console.error('Erro no reconhecimento:', event.error);
        state.pronunciation.isListening = false;
        elements.btnPronSpeak.classList.remove('recording');
        elements.btnPronSpeak.textContent = '🎤 Falar';

        if (event.error === 'no-speech') {
            elements.pronFeedback.textContent = '❌ Não ouvi nada. Tente novamente.';
            elements.pronFeedback.className = 'pronunciation-feedback wrong';
        } else if (event.error === 'not-allowed') {
            elements.pronFeedback.textContent = '❌ Permita o uso do microfone.';
            elements.pronFeedback.className = 'pronunciation-feedback wrong';
        }
    };
}

function loadPronunciationPhrase() {
    const randomIndex = Math.floor(Math.random() * frases.length);
    state.pronunciation.currentPhrase = frases[randomIndex];

    elements.pronPhrase.textContent = state.pronunciation.currentPhrase.en;
    elements.pronResult.textContent = 'Sua fala aparecerá aqui...';
    elements.pronFeedback.textContent = '';
    elements.pronFeedback.className = 'pronunciation-feedback';

    elements.btnPronListen.disabled = false;
    elements.btnPronSpeak.disabled = false;

    setPronStatus('Frase carregada! Ouça e depois tente falar.');
}

function listenPronunciationPhrase() {
    if (!state.pronunciation.currentPhrase) return;

    elements.pronPhrase.classList.add('highlight');
    speak(state.pronunciation.currentPhrase.en, 'en-US').then(() => {
        elements.pronPhrase.classList.remove('highlight');
    });
}

function startSpeechRecognition() {
    if (!state.pronunciation.currentPhrase) {
        setPronStatus('Carregue uma frase primeiro!');
        return;
    }

    if (state.pronunciation.isListening) {
        state.pronunciation.recognition.stop();
        return;
    }

    elements.pronResult.textContent = '...';
    state.pronunciation.recognition.start();
}

function checkPronunciation(spokenText) {
    const expected = normalizeText(state.pronunciation.currentPhrase.en);
    const spoken = normalizeText(spokenText);

    const similarity = calculateSimilarity(spoken, expected);
    const percentage = Math.round(similarity * 100);

    if (similarity >= 0.85) {
        state.pronunciation.correct++;
        elements.pronFeedback.innerHTML = `
            <span class="accuracy">${percentage}%</span>
            <span class="accuracy-label">Excelente pronúncia! 🎉</span>
        `;
        elements.pronFeedback.className = 'pronunciation-feedback correct';
    } else if (similarity >= 0.6) {
        elements.pronFeedback.innerHTML = `
            <span class="accuracy">${percentage}%</span>
            <span class="accuracy-label">Quase lá! Tente novamente.</span>
        `;
        elements.pronFeedback.className = 'pronunciation-feedback hint';
    } else {
        state.pronunciation.wrong++;
        elements.pronFeedback.innerHTML = `
            <span class="accuracy">${percentage}%</span>
            <span class="accuracy-label">Continue praticando! 💪</span>
        `;
        elements.pronFeedback.className = 'pronunciation-feedback wrong';
    }

    updatePronScore();
}

function updatePronScore() {
    elements.pronCorrect.textContent = state.pronunciation.correct;
    elements.pronWrong.textContent = state.pronunciation.wrong;

    const total = state.pronunciation.correct + state.pronunciation.wrong;
    const rate = total > 0 ? Math.round((state.pronunciation.correct / total) * 100) : 0;
    elements.pronRate.textContent = rate + '%';
}

function setPronStatus(message) {
    elements.pronStatus.textContent = message;
}

// ==========================================
// Funções de Diálogos
// ==========================================
function loadDialogOptions() {
    dialogos.forEach(dialog => {
        const option = document.createElement('option');
        option.value = dialog.id;
        option.textContent = dialog.titulo;
        elements.dialogSelect.appendChild(option);
    });
}

function onDialogSelect() {
    const selectedId = elements.dialogSelect.value;

    if (!selectedId) {
        elements.dialogDescription.classList.remove('visible');
        elements.btnDialogStart.disabled = true;
        return;
    }

    const dialog = dialogos.find(d => d.id === selectedId);
    state.dialog.current = dialog;

    elements.dialogDescription.textContent = dialog.descricao;
    elements.dialogDescription.classList.add('visible');
    elements.dialogConversation.innerHTML = '';

    elements.btnDialogStart.disabled = false;
    elements.btnDialogRepeat.disabled = true;
    elements.btnDialogPractice.disabled = true;

    setDialogStatus('Clique em Iniciar para ouvir o diálogo.');
}

async function startDialog() {
    if (!state.dialog.current || state.dialog.isPlaying) return;

    state.dialog.isPlaying = true;
    elements.btnDialogStart.disabled = true;
    elements.btnDialogRepeat.disabled = true;
    elements.btnDialogPractice.disabled = true;
    elements.dialogConversation.innerHTML = '';

    const conversa = state.dialog.current.conversa;

    for (let i = 0; i < conversa.length; i++) {
        const msg = conversa[i];

        // Criar elemento da mensagem
        const msgEl = document.createElement('div');
        msgEl.className = `dialog-message person-${msg.pessoa.toLowerCase()}`;
        msgEl.innerHTML = `
            <div class="message-en">${msg.en}</div>
            <div class="message-pt">${msg.pt}</div>
        `;
        elements.dialogConversation.appendChild(msgEl);

        // Scroll para a mensagem
        elements.dialogConversation.scrollTop = elements.dialogConversation.scrollHeight;

        // Destacar mensagem atual
        msgEl.classList.add('active');

        // Falar a frase
        setDialogStatus(`${msg.pessoa === 'A' ? '👤' : '👤'} Pessoa ${msg.pessoa} falando...`);
        await speak(msg.en, 'en-US');

        msgEl.classList.remove('active');

        // Pausa entre mensagens
        await delay(600);
    }

    state.dialog.isPlaying = false;
    elements.btnDialogStart.disabled = false;
    elements.btnDialogRepeat.disabled = false;
    elements.btnDialogPractice.disabled = false;
    setDialogStatus('✅ Diálogo completo! Pratique as respostas.');
}

async function repeatDialog() {
    elements.dialogConversation.innerHTML = '';
    await startDialog();
}

async function practiceDialog() {
    if (!state.dialog.current || state.dialog.isPracticing) return;

    state.dialog.isPracticing = true;
    elements.btnDialogStart.disabled = true;
    elements.btnDialogRepeat.disabled = true;
    elements.btnDialogPractice.disabled = true;
    elements.dialogConversation.innerHTML = '';

    const conversa = state.dialog.current.conversa;

    for (let i = 0; i < conversa.length; i++) {
        const msg = conversa[i];

        const msgEl = document.createElement('div');
        msgEl.className = `dialog-message person-${msg.pessoa.toLowerCase()}`;

        if (msg.pessoa === 'A') {
            // Pessoa A fala automaticamente
            msgEl.innerHTML = `
                <div class="message-en">${msg.en}</div>
                <div class="message-pt">${msg.pt}</div>
            `;
            elements.dialogConversation.appendChild(msgEl);
            elements.dialogConversation.scrollTop = elements.dialogConversation.scrollHeight;

            msgEl.classList.add('active');
            setDialogStatus('👤 Pessoa A falando...');
            await speak(msg.en, 'en-US');
            msgEl.classList.remove('active');

            await delay(500);
        } else {
            // Pessoa B (você) - mostrar o que deve falar
            msgEl.innerHTML = `
                <div class="message-en">${msg.en}</div>
                <div class="message-pt">${msg.pt}</div>
            `;
            elements.dialogConversation.appendChild(msgEl);
            elements.dialogConversation.scrollTop = elements.dialogConversation.scrollHeight;

            msgEl.classList.add('active');
            setDialogStatus('🎤 Sua vez! Fale a frase destacada...');

            // Esperar o usuário falar
            await waitForUserSpeech(msg.en);

            msgEl.classList.remove('active');
            await delay(500);
        }
    }

    state.dialog.isPracticing = false;
    elements.btnDialogStart.disabled = false;
    elements.btnDialogRepeat.disabled = false;
    elements.btnDialogPractice.disabled = false;
    setDialogStatus('✅ Prática completa! Excelente trabalho!');
}

function waitForUserSpeech(expectedPhrase) {
    return new Promise((resolve) => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

        if (!SpeechRecognition) {
            // Se não tiver suporte, apenas esperar e resolver
            setDialogStatus('⚠️ Seu navegador não suporta microfone. Pulando...');
            setTimeout(resolve, 2000);
            return;
        }

        let resolved = false;
        const recognition = new SpeechRecognition();
        recognition.lang = 'en-US';
        recognition.continuous = false;
        recognition.interimResults = true;

        recognition.onstart = () => {
            setDialogStatus('🔴 OUVINDO... Fale agora!');
        };

        recognition.onresult = (event) => {
            const transcript = Array.from(event.results)
                .map(result => result[0].transcript)
                .join('');

            // Mostrar o que está sendo captado em tempo real
            setDialogStatus(`🎤 Ouvindo: "${transcript}"`);

            // Se for resultado final
            if (event.results[0].isFinal) {
                const similarity = calculateSimilarity(
                    normalizeText(transcript),
                    normalizeText(expectedPhrase)
                );

                if (similarity >= 0.7) {
                    setDialogStatus(`✅ Muito bem! Você disse: "${transcript}"`);
                } else {
                    setDialogStatus(`👍 Você disse: "${transcript}" - Continue praticando!`);
                }

                resolved = true;
                setTimeout(resolve, 1200);
            }
        };

        recognition.onerror = (event) => {
            if (!resolved) {
                if (event.error === 'no-speech') {
                    setDialogStatus('❌ Não ouvi nada. Continuando...');
                } else if (event.error === 'not-allowed') {
                    setDialogStatus('❌ Permita o microfone no navegador!');
                } else {
                    setDialogStatus('➡️ Continuando...');
                }
                resolved = true;
                setTimeout(resolve, 1000);
            }
        };

        recognition.onend = () => {
            // Se terminou sem resultado, resolver
            if (!resolved) {
                setDialogStatus('➡️ Continuando...');
                resolved = true;
                setTimeout(resolve, 500);
            }
        };

        // Timeout de segurança (10 segundos para falar)
        setTimeout(() => {
            if (!resolved) {
                recognition.stop();
                setDialogStatus('⏱️ Tempo esgotado. Continuando...');
                resolved = true;
                resolve();
            }
        }, 10000);

        // Iniciar reconhecimento
        try {
            recognition.start();
        } catch (e) {
            setDialogStatus('❌ Erro ao iniciar microfone.');
            resolved = true;
            setTimeout(resolve, 1000);
        }
    });
}

function setDialogStatus(message) {
    elements.dialogStatus.textContent = message;
}

// ==========================================
// Funções de Leitura
// ==========================================
function loadRandomText() {
    const selectedLevel = elements.readingLevel.value;

    // Filtrar textos pelo nível selecionado
    let availableTexts = textos;
    if (selectedLevel !== 'all') {
        availableTexts = textos.filter(t => t.nivel === selectedLevel);
    }

    if (availableTexts.length === 0) {
        setReadingStatus('Nenhum texto disponível para este nível.');
        return;
    }

    // Selecionar texto aleatório
    const randomIndex = Math.floor(Math.random() * availableTexts.length);
    state.reading.currentText = availableTexts[randomIndex];

    // Atualizar interface
    elements.readingTitle.textContent = state.reading.currentText.titulo;
    elements.readingText.textContent = state.reading.currentText.texto;

    // Atualizar badge de nível
    updateLevelBadge(state.reading.currentText.nivel);

    // Habilitar botões
    elements.btnReadingPlay.disabled = false;
    elements.btnReadingPause.disabled = true;

    // Parar qualquer leitura em andamento
    speechSynthesis.cancel();
    state.reading.isPlaying = false;
    state.reading.isPaused = false;
    elements.btnReadingPlay.textContent = '▶️ Ouvir Texto';

    setReadingStatus('Texto carregado! Clique em "Ouvir Texto" para começar.');
}

function updateLevelBadge(nivel) {
    const nivelMap = {
        'beginner': { text: 'Iniciante', class: 'level-beginner' },
        'intermediate': { text: 'Intermediário', class: 'level-intermediate' },
        'advanced': { text: 'Avançado', class: 'level-advanced' }
    };

    const info = nivelMap[nivel];
    elements.readingLevelBadge.textContent = info.text;
    elements.readingLevelBadge.className = 'level-badge ' + info.class;
}

function playReadingText() {
    if (!state.reading.currentText) {
        setReadingStatus('Carregue um texto primeiro!');
        return;
    }

    // Se estava pausado, retomar
    if (state.reading.isPaused) {
        speechSynthesis.resume();
        state.reading.isPaused = false;
        elements.btnReadingPlay.textContent = '▶️ Ouvir Texto';
        elements.btnReadingPause.textContent = '⏸️ Pausar';
        setReadingStatus('🔊 Continuando leitura...');
        return;
    }

    // Se já está tocando, parar
    if (state.reading.isPlaying) {
        speechSynthesis.cancel();
        state.reading.isPlaying = false;
        state.reading.isPaused = false;
        state.reading.chunks = [];
        state.reading.currentChunk = 0;
        elements.btnReadingPlay.textContent = '▶️ Ouvir Texto';
        elements.btnReadingPause.disabled = true;
        setReadingStatus('Leitura interrompida.');
        return;
    }

    // Iniciar nova leitura - dividir texto em chunks para evitar bug de textos longos
    state.reading.isPlaying = true;
    elements.btnReadingPlay.textContent = '⏹️ Parar';
    elements.btnReadingPause.disabled = false;

    // Dividir texto em sentenças para evitar o bug de textos longos
    const chunks = splitTextIntoChunks(state.reading.currentText.texto);
    state.reading.chunks = chunks;
    state.reading.currentChunk = 0;

    setReadingStatus('🔊 Lendo texto... Acompanhe em voz alta!');
    elements.readingText.classList.add('reading-active');

    speakNextChunk();
}

// Divide texto em chunks menores para evitar bug da Web Speech API com textos longos
function splitTextIntoChunks(text) {
    // Dividir por sentenças (pontos, exclamações, interrogações)
    const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
    const chunks = [];
    let currentChunk = '';

    for (const sentence of sentences) {
        // Se adicionar essa sentença passar de 200 caracteres, salvar chunk atual
        if (currentChunk.length + sentence.length > 200 && currentChunk.length > 0) {
            chunks.push(currentChunk.trim());
            currentChunk = sentence;
        } else {
            currentChunk += sentence;
        }
    }

    // Adicionar último chunk
    if (currentChunk.trim()) {
        chunks.push(currentChunk.trim());
    }

    return chunks;
}

function speakNextChunk() {
    if (!state.reading.isPlaying || state.reading.currentChunk >= state.reading.chunks.length) {
        // Leitura concluída
        state.reading.isPlaying = false;
        state.reading.isPaused = false;
        elements.btnReadingPlay.textContent = '▶️ Ouvir Texto';
        elements.btnReadingPause.disabled = true;
        elements.readingText.classList.remove('reading-active');
        setReadingStatus('✅ Leitura concluída! Tente ler sozinho agora.');
        return;
    }

    const chunk = state.reading.chunks[state.reading.currentChunk];
    const utterance = new SpeechSynthesisUtterance(chunk);
    utterance.lang = 'en-US';
    utterance.rate = state.reading.speed;
    utterance.pitch = 1;

    // Selecionar a melhor voz em inglês (evita sotaque indiano)
    const voice = getBestEnglishVoice();
    if (voice) {
        utterance.voice = voice;
    }

    utterance.onend = () => {
        state.reading.currentChunk++;
        // Pequena pausa entre chunks
        setTimeout(() => {
            if (state.reading.isPlaying && !state.reading.isPaused) {
                speakNextChunk();
            }
        }, 100);
    };

    utterance.onerror = (event) => {
        if (event.error !== 'interrupted') {
            state.reading.isPlaying = false;
            elements.btnReadingPlay.textContent = '▶️ Ouvir Texto';
            elements.btnReadingPause.disabled = true;
            elements.readingText.classList.remove('reading-active');
            setReadingStatus('❌ Erro na leitura. Tente novamente.');
        }
    };

    state.reading.utterance = utterance;
    speechSynthesis.speak(utterance);
}

function togglePauseReading() {
    if (!state.reading.isPlaying) return;

    if (state.reading.isPaused) {
        speechSynthesis.resume();
        state.reading.isPaused = false;
        elements.btnReadingPause.textContent = '⏸️ Pausar';
        setReadingStatus('🔊 Continuando leitura...');
    } else {
        speechSynthesis.pause();
        state.reading.isPaused = true;
        elements.btnReadingPause.textContent = '▶️ Continuar';
        setReadingStatus('⏸️ Leitura pausada.');
    }
}

function updateReadingSpeed() {
    state.reading.speed = parseFloat(elements.readingSpeedSlider.value);
    elements.readingSpeedValue.textContent = state.reading.speed.toFixed(1) + 'x';
}

function setReadingStatus(message) {
    elements.readingStatus.textContent = message;
}

// ==========================================
// Funções de Voz (Web Speech API)
// ==========================================

// Seleciona a melhor voz em inglês (prioriza US e UK, evita sotaques indianos etc)
function getBestEnglishVoice() {
    const voices = speechSynthesis.getVoices();

    // Ordem de preferência: en-US, en-GB, en-AU, depois qualquer en-*
    const preferredLangs = ['en-US', 'en-GB', 'en-AU'];

    for (const lang of preferredLangs) {
        // Prefere vozes do Google ou Microsoft (geralmente são melhores)
        const premiumVoice = voices.find(v =>
            v.lang === lang && (v.name.includes('Google') || v.name.includes('Microsoft'))
        );
        if (premiumVoice) return premiumVoice;

        // Se não tiver premium, pega qualquer uma desse idioma
        const voice = voices.find(v => v.lang === lang);
        if (voice) return voice;
    }

    // Fallback: qualquer voz em inglês que NÃO seja indiana
    const nonIndianVoice = voices.find(v =>
        v.lang.startsWith('en') && !v.lang.includes('IN')
    );
    if (nonIndianVoice) return nonIndianVoice;

    // Último recurso: qualquer voz em inglês
    return voices.find(v => v.lang.startsWith('en'));
}

function speak(text, lang) {
    return new Promise((resolve, reject) => {
        speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;
        utterance.rate = state.speed;
        utterance.pitch = 1;

        // Usar a melhor voz disponível para inglês
        if (lang.startsWith('en')) {
            const voice = getBestEnglishVoice();
            if (voice) utterance.voice = voice;
        } else {
            const voices = speechSynthesis.getVoices();
            const voice = voices.find(v => v.lang.startsWith(lang.split('-')[0]));
            if (voice) utterance.voice = voice;
        }

        utterance.onend = () => resolve();
        utterance.onerror = (event) => {
            if (event.error !== 'interrupted') {
                reject(event);
            } else {
                resolve();
            }
        };

        speechSynthesis.speak(utterance);
    });
}

// ==========================================
// Funções Auxiliares
// ==========================================
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function setStatus(message) {
    elements.status.textContent = message;
    elements.status.classList.toggle('speaking', message.includes('Falando'));
}

function updateSpeed() {
    state.speed = parseFloat(elements.speedSlider.value);
    elements.speedValue.textContent = state.speed.toFixed(1) + 'x';
}

function normalizeText(text) {
    return text
        .toLowerCase()
        .trim()
        .replace(/[.,!?;:'"]/g, '')
        .replace(/\s+/g, ' ');
}

function calculateSimilarity(str1, str2) {
    if (str1 === str2) return 1;
    if (str1.length === 0 || str2.length === 0) return 0;

    const longer = str1.length > str2.length ? str1 : str2;
    const shorter = str1.length > str2.length ? str2 : str1;

    const editDistance = levenshteinDistance(str1, str2);
    return (longer.length - editDistance) / longer.length;
}

function isSimilarEnough(userAnswer, correctAnswer) {
    if (userAnswer.length < 3) return false;
    return calculateSimilarity(userAnswer, correctAnswer) >= 0.85;
}

function levenshteinDistance(str1, str2) {
    const matrix = [];

    for (let i = 0; i <= str2.length; i++) {
        matrix[i] = [i];
    }

    for (let j = 0; j <= str1.length; j++) {
        matrix[0][j] = j;
    }

    for (let i = 1; i <= str2.length; i++) {
        for (let j = 1; j <= str1.length; j++) {
            if (str2[i-1] === str1[j-1]) {
                matrix[i][j] = matrix[i-1][j-1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i-1][j-1] + 1,
                    matrix[i][j-1] + 1,
                    matrix[i-1][j] + 1
                );
            }
        }
    }

    return matrix[str2.length][str1.length];
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', init);
