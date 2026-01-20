const APP_DATA = {
    categories: [
        { id: 'saude', name: 'Saúde', icon: '🍎', color: '#ff5263' },
        { id: 'espaco', name: 'Espaço', icon: '👨‍🚀', color: '#6a5ae0' },
        { id: 'natureza', name: 'Natureza', icon: '🌿', color: '#00d68f' }
    ],
    lessons: {
        saude: [
            {
                id: 's1', title: 'Vilões Germes', icon: '🧼', requiredLevel: 1,
                content: `<h3>O que são Germes?</h3><p>São bichinhos tão pequenos que não conseguimos ver, mas que amam entrar no nosso corpo para nos deixar cansados.</p><h3>Como vencer?</h3><ul><li>Lavar as mãos por 20 segundos (cante parabéns!)</li><li>Usar sabão sempre!</li><li>Lavar antes de comer.</li></ul>`,
                quiz: [
                    { q: "Qual a melhor arma contra os germes?", opts: ["Perfume", "Sabão e Água", "Pó mágico", "Luvas de ferro"], a: 1, e: "A água e o sabão levam os germes embora pelo ralo! 🧼" },
                    { q: "Quanto tempo dura a lavagem perfeita?", opts: ["1 segundo", "5 segundos", "20 segundos", "1 hora"], a: 2, e: "20 segundos é o tempo de cantar 'Parabéns pra você' duas vezes! 🎶" }
                ]
            },
            {
                id: 's2', title: 'Alimentação Poderosa', icon: '🥗', requiredLevel: 2,
                content: `<h3>Combustível do Corpo</h3><p>Nosso corpo é como um carro: precisa do combustível certo para funcionar bem!</p><h3>Alimentos Incríveis:</h3><ul><li>Frutas e vegetais dão vitaminas e energia</li><li>Água mantém tudo funcionando</li><li>Proteínas constroem músculos fortes</li></ul>`,
                quiz: [
                    { q: "O que nos dá mais vitaminas?", opts: ["Doces", "Frutas e Vegetais", "Refrigerante", "Salgadinhos"], a: 1, e: "Frutas e vegetais são cheios de vitaminas! 🍎" },
                    { q: "Por que beber água é importante?", opts: ["Para ficar bonito", "Para matar a sede só", "Para o corpo funcionar bem", "Não é importante"], a: 2, e: "A água ajuda em tudo no nosso corpo! 💧" }
                ]
            },
            {
                id: 's3', title: 'Sono Mágico', icon: '😴', requiredLevel: 3,
                content: `<h3>O Poder do Sono</h3><p>Quando dormimos, nosso corpo se recupera e nossa mente organiza tudo que aprendemos!</p><h3>Benefícios:</h3><ul><li>Crianças precisam de 8-10 horas</li><li>Durante o sono crescemos</li><li>Acordamos cheios de energia</li></ul>`,
                quiz: [
                    { q: "Quantas horas uma criança deve dormir?", opts: ["2-3 horas", "4-5 horas", "8-10 horas", "15 horas"], a: 2, e: "8 a 10 horas é o ideal para crescer forte! 😴" }
                ]
            }
        ],
        espaco: [
            {
                id: 'e1', title: 'O Rei Sol', icon: '☀️', requiredLevel: 1,
                content: `<h3>O Sol é uma estrela!</h3><p>Ele é como uma bateria gigante que dá luz e calor para a Terra.</p><h3>Fatos Espaciais:</h3><ul><li>Ele é 1 milhão de vezes maior que a Terra.</li><li>Sem ele, tudo seria gelado e escuro.</li><li>Nunca olhe direto para ele, ele é muito poderoso!</li></ul>`,
                quiz: [
                    { q: "O que o Sol é na verdade?", opts: ["Um planeta", "Uma lanterna", "Uma estrela", "Um cometa"], a: 2, e: "Sim! O Sol é a estrela mais próxima de nós! ⭐" }
                ]
            },
            {
                id: 'e2', title: 'A Lua Misteriosa', icon: '🌙', requiredLevel: 2,
                content: `<h3>Nossa Vizinha Lunar</h3><p>A Lua é o único satélite natural da Terra e nos ilumina à noite!</p><h3>Curiosidades:</h3><ul><li>A Lua não tem luz própria, reflete o Sol</li><li>Ela controla as marés dos oceanos</li><li>Humanos já pisaram na Lua!</li></ul>`,
                quiz: [
                    { q: "De onde vem a luz da Lua?", opts: ["Ela brilha sozinha", "Reflete a luz do Sol", "Usa eletricidade", "Magia"], a: 1, e: "A Lua é como um espelho gigante no espaço! 🌙" }
                ]
            }
        ],
        natureza: [
            {
                id: 'n1', title: 'As Árvores Respiram', icon: '🌳', requiredLevel: 1,
                content: `<h3>Pulmão do Mundo</h3><p>As árvores pegam o ar 'sujo' (gás carbônico) e soltam ar 'limpinho' (oxigênio) para nós.</p><h3>Amigo da Natureza:</h3><ul><li>Árvores dão sombra e frutas.</li><li>Elas servem de casa para os passarinhos.</li><li>Plantar uma árvore é como criar um super-herói!</li></ul>`,
                quiz: [
                    { q: "O que as árvores soltam para nós?", opts: ["Fumaça", "Oxigênio", "Areia", "Chuva"], a: 1, e: "O oxigênio é o que respiramos para viver! 🍃" }
                ]
            },
            {
                id: 'n2', title: 'Ciclo da Água', icon: '💧', requiredLevel: 2,
                content: `<h3>A Viagem da Água</h3><p>A água está sempre viajando: dos rios para as nuvens e de volta para a terra!</p><h3>O Ciclo:</h3><ul><li>O Sol aquece a água (evaporação)</li><li>Forma nuvens (condensação)</li><li>Cai como chuva (precipitação)</li></ul>`,
                quiz: [
                    { q: "O que faz a água virar nuvem?", opts: ["Vento forte", "Calor do Sol", "Frio", "Trovão"], a: 1, e: "O calor do Sol faz a água evaporar! ☀️💧" }
                ]
            },
            {
                id: 'n3', title: 'Animais Incríveis', icon: '🦁', requiredLevel: 3,
                content: `<h3>Biodiversidade</h3><p>Nosso planeta tem milhões de espécies diferentes de animais, cada um com superpoderes únicos!</p><h3>Exemplos:</h3><ul><li>Guepardos correm a 110 km/h</li><li>Baleias podem prender a respiração por horas</li><li>Formigas levantam 50x seu peso</li></ul>`,
                quiz: [
                    { q: "Qual animal é o mais rápido da terra?", opts: ["Leão", "Guepardo", "Coelho", "Cavalo"], a: 1, e: "O guepardo é o velocista da natureza! 🐆" }
                ]
            }
        ]
    }
};

// XP necessário para cada nível
const XP_PER_LEVEL = [0, 100, 250, 450, 700, 1000, 1400, 1850, 2350, 2900, 3500];

let state = {
    hp: 5,
    xp: 0,
    level: 1,
    energy: 100,
    currentCat: null,
    currentLesson: null,
    quizStep: 0,
    correctCount: 0
};

// --- Inicialização ---
function init() {
    renderCategories();
    loadProgress();
    updateUI();
}

function updateUI() {
    document.getElementById('hearts-display').textContent = "❤️".repeat(state.hp) + "🖤".repeat(5 - state.hp);
    document.getElementById('energy-val').textContent = state.energy;
    document.getElementById('level-val').textContent = `Nível ${state.level}`;
    updateXPBar();

    if (state.hp <= 0) gameOver();
}

function updateXPBar() {
    const currentLevel = state.level;
    const xpForCurrentLevel = XP_PER_LEVEL[currentLevel - 1];
    const xpForNextLevel = XP_PER_LEVEL[currentLevel];
    const xpInCurrentLevel = state.xp - xpForCurrentLevel;
    const xpNeededForLevel = xpForNextLevel - xpForCurrentLevel;

    const percentage = (xpInCurrentLevel / xpNeededForLevel) * 100;

    document.getElementById('xp-bar-fill').style.width = `${Math.min(percentage, 100)}%`;
    document.getElementById('xp-text').textContent = `${xpInCurrentLevel}/${xpNeededForLevel} XP`;
}

function calculateLevel(xp) {
    for (let i = XP_PER_LEVEL.length - 1; i >= 0; i--) {
        if (xp >= XP_PER_LEVEL[i]) {
            return i + 1;
        }
    }
    return 1;
}

function renderCategories() {
    const grid = document.getElementById('cat-grid');
    grid.innerHTML = APP_DATA.categories.map(c => `
        <div class="card-cat" onclick="openCategory('${c.id}')" style="border-bottom: 5px solid ${c.color}">
            <span class="icon">${c.icon}</span>
            <h2>${c.name}</h2>
            <p>Clique para explorar!</p>
        </div>
    `).join('');
}

function openCategory(id) {
    state.currentCat = id;
    const cat = APP_DATA.categories.find(c => c.id === id);
    document.getElementById('lesson-cat-title').textContent = `Mundo: ${cat.name}`;

    const container = document.getElementById('lesson-list-container');
    container.innerHTML = APP_DATA.lessons[id].map(l => {
        const isLocked = state.level < l.requiredLevel;
        return `
            <div class="lesson-item ${isLocked ? 'locked' : ''}" onclick="openLesson('${l.id}')">
                <span>${l.icon} ${l.title}</span>
                <span>${isLocked ? '🔒 Nível ' + l.requiredLevel : '➔'}</span>
            </div>
        `;
    }).join('');

    showScreen('lessons');
}

function openLesson(id) {
    const lesson = APP_DATA.lessons[state.currentCat].find(l => l.id === id);

    if (state.level < lesson.requiredLevel) {
        alert(`Esta lição requer Nível ${lesson.requiredLevel}. Continue estudando para desbloquear! 📚`);
        return;
    }

    // Energia desabilitada para testes
    // if (state.energy < 5) {
    //     alert("Sua energia está baixa! Espere um pouco para recarregar. ⚡");
    //     return;
    // }

    state.currentLesson = lesson;
    document.getElementById('content-body').innerHTML = `
        <h1 style="font-size:2.5rem; margin-bottom:15px">${lesson.icon}</h1>
        <h2>${lesson.title}</h2>
        <div style="margin-top:20px; text-align:left">${lesson.content}</div>
    `;
    showScreen('content');
}

function startQuiz() {
    state.quizStep = 0;
    state.correctCount = 0;
    // state.energy -= 5; // Desabilitado para testes
    updateUI();
    showScreen('quiz');
    renderQuestion();
}

function renderQuestion() {
    const lesson = state.currentLesson;
    const q = lesson.quiz[state.quizStep];

    document.getElementById('quiz-step-text').textContent = `${state.quizStep + 1}/${lesson.quiz.length}`;
    document.getElementById('quiz-progress-bar').style.width = ((state.quizStep / lesson.quiz.length) * 100) + "%";
    document.getElementById('quiz-question').textContent = q.q;

    const opts = document.getElementById('quiz-options');
    opts.innerHTML = q.opts.map((o, i) => `
        <button class="btn-option" onclick="handleAnswer(${i})">${o}</button>
    `).join('');
}

function handleAnswer(idx) {
    const q = state.currentLesson.quiz[state.quizStep];
    const isCorrect = idx === q.a;
    const btns = document.querySelectorAll('.btn-option');

    btns.forEach(b => b.disabled = true);

    if (isCorrect) {
        btns[idx].classList.add('correct');
        state.correctCount++;
        playSound('correct');
    } else {
        btns[idx].classList.add('wrong');
        btns[q.a].classList.add('correct');
        state.hp = Math.max(0, state.hp - 1);
        playSound('wrong');
        updateUI();
    }

    // Aguardar 1 segundo para mostrar o feedback visual e ir para próxima
    setTimeout(() => {
        nextAction();
    }, 1000);
}

function showFeedback(correct, msg) {
    const panel = document.getElementById('feedback-panel');
    document.getElementById('feedback-emoji').textContent = correct ? "✅" : "❌";
    document.getElementById('feedback-msg').textContent = msg;
    panel.classList.add('show');
}

function nextAction() {
    state.quizStep++;

    if (state.quizStep < state.currentLesson.quiz.length) {
        renderQuestion();
    } else {
        finishLesson();
    }
}

function finishLesson() {
    const total = state.currentLesson.quiz.length;
    const win = state.correctCount >= total / 2;

    const oldLevel = state.level;
    let xpGained = 0;
    let heartsGained = 0;

    if (win) {
        // 50 XP por questão acertada
        xpGained = state.correctCount * 50;
        state.xp += xpGained;

        // 1 coração por questão acertada (máximo de 5 vidas)
        heartsGained = state.correctCount;
        state.hp = Math.min(5, state.hp + heartsGained);
    }

    const newLevel = calculateLevel(state.xp);
    const leveledUp = newLevel > oldLevel;
    state.level = newLevel;

    document.getElementById('result-icon').textContent = win ? "🏆" : "💪";
    document.getElementById('result-title').textContent = win ? "Missão Cumprida!" : "Continue Tentando!";
    document.getElementById('result-desc').textContent = `Você acertou ${state.correctCount} de ${total} perguntas.`;
    document.getElementById('xp-gain').textContent = xpGained;
    document.getElementById('hp-gain').textContent = heartsGained;

    // Mostrar mensagem de level up
    const levelUpBox = document.getElementById('level-up-box');
    if (leveledUp) {
        document.getElementById('new-level').textContent = `Nível ${newLevel}`;
        levelUpBox.classList.remove('hidden');
    } else {
        levelUpBox.classList.add('hidden');
    }

    saveProgress();
    updateUI();
    showScreen('result');
}

function showScreen(name) {
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    document.getElementById(`screen-${name}`).classList.remove('hidden');
    window.scrollTo(0, 0);
}

function gameOver() {
    alert("Suas vidas acabaram! Mas não desista, você ganhou 5 novas vidas para continuar aprendendo! 🌈");
    state.hp = 5;
    state.energy = 100;
    updateUI();
    showScreen('home');
}

function playSound(type) {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === 'correct') {
        osc.frequency.setValueAtTime(500, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1000, ctx.currentTime + 0.1);
    } else {
        osc.frequency.setValueAtTime(300, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.2);
    }

    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
    osc.start();
    osc.stop(ctx.currentTime + 0.2);
}

function saveProgress() {
    const saveData = {
        xp: state.xp,
        level: state.level,
        hp: state.hp,
        energy: state.energy
    };
    localStorage.setItem('educube_state', JSON.stringify(saveData));
}

function loadProgress() {
    const saved = localStorage.getItem('educube_state');
    if (saved) {
        const data = JSON.parse(saved);
        state.xp = data.xp || 0;
        state.level = data.level || 1;
        state.hp = data.hp || 5;
        state.energy = data.energy || 100;
    }
}

// Recuperar energia automaticamente
setInterval(() => {
    if (state.energy < 100) {
        state.energy = Math.min(100, state.energy + 1);
        updateUI();
        saveProgress();
    }
}, 60000); // 60 segundos = 1 minuto

init();